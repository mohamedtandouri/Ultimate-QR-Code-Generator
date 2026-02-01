
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const wifiFormSchema = z.object({
  ssid: z.string().min(1, "Network name is required"),
  password: z.string(),
  securityType: z.enum(["WPA", "WEP", "nopass"]),
  hidden: z.boolean().default(false),
});

type WiFiFormValues = z.infer<typeof wifiFormSchema>;

interface WiFiQRFormProps {
  onValueChange: (value: string) => void;
  onFormDataChange?: (data: { ssid?: string; security?: string; password?: string; hidden?: string }) => void;
}

const WiFiQRForm = ({ onValueChange, onFormDataChange }: WiFiQRFormProps) => {
  const form = useForm<WiFiFormValues>({
    resolver: zodResolver(wifiFormSchema),
    defaultValues: {
      ssid: "",
      password: "",
      securityType: "WPA",
      hidden: false,
    },
  });

  const generateWifiQRString = (data: WiFiFormValues) => {
    const { ssid, password, securityType, hidden } = data;
    // Format according to WiFi QR code standard: WIFI:T:WPA;S:network;P:password;H:true;;
    const wifiString = `WIFI:T:${securityType};S:${encodeURIComponent(ssid)};P:${encodeURIComponent(password)}${hidden ? ';H:true' : ''};;`;
    return wifiString;
  };

  const onSubmit = (data: WiFiFormValues) => {
    const wifiString = generateWifiQRString(data);
    onValueChange(wifiString);
    
    // Pass form data to parent for styled download
    if (onFormDataChange) {
      onFormDataChange({
        ssid: data.ssid || undefined,
        security: data.securityType || undefined,
        password: data.password || undefined,
        hidden: data.hidden ? 'Yes' : 'No',
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="ssid"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Network Name (SSID)</FormLabel>
              <FormControl>
                <Input placeholder="Enter network name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="securityType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Security Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select security type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="WPA">WPA/WPA2/WPA3</SelectItem>
                  <SelectItem value="WEP">WEP</SelectItem>
                  <SelectItem value="nopass">No Password</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input 
                  type="password" 
                  placeholder="Enter network password" 
                  {...field} 
                  disabled={form.watch("securityType") === "nopass"}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="hidden"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <input
                  type="checkbox"
                  className="mt-1"
                  checked={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="font-normal">Hidden Network</FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" className="w-full">Generate WiFi QR Code</Button>
      </form>
    </Form>
  );
};

export default WiFiQRForm;
