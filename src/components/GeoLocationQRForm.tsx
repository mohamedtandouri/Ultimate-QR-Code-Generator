import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const geoLocationFormSchema = z.object({
  latitude: z.string()
    .refine(val => !isNaN(parseFloat(val)), { message: "Must be a valid number" })
    .refine(val => parseFloat(val) >= -90 && parseFloat(val) <= 90, { message: "Latitude must be between -90 and 90" }),
  longitude: z.string()
    .refine(val => !isNaN(parseFloat(val)), { message: "Must be a valid number" })
    .refine(val => parseFloat(val) >= -180 && parseFloat(val) <= 180, { message: "Longitude must be between -180 and 180" }),
  query: z.string().optional(),
});

type GeoLocationFormValues = z.infer<typeof geoLocationFormSchema>;

interface GeoLocationQRFormProps {
  onValueChange: (value: string) => void;
}

const GeoLocationQRForm = ({ onValueChange }: GeoLocationQRFormProps) => {
  const form = useForm<GeoLocationFormValues>({
    resolver: zodResolver(geoLocationFormSchema),
    defaultValues: {
      latitude: "",
      longitude: "",
      query: "",
    },
  });

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          form.setValue("latitude", latitude.toString());
          form.setValue("longitude", longitude.toString());
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const generateGeoLocationString = (data: GeoLocationFormValues) => {
    const { latitude, longitude, query } = data;
    
    // If query is provided, use Google Maps search
    if (query && query.trim() !== "") {
      return `https://maps.google.com/maps?q=${encodeURIComponent(query)}`;
    }
    
    // Otherwise use geo: URI format
    return `geo:${latitude},${longitude}`;
  };

  const onSubmit = (data: GeoLocationFormValues) => {
    const geoLocationString = generateGeoLocationString(data);
    onValueChange(geoLocationString);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="latitude"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Latitude</FormLabel>
                <FormControl>
                  <Input placeholder="37.7749" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="longitude"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Longitude</FormLabel>
                <FormControl>
                  <Input placeholder="-122.4194" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="flex justify-center">
          <Button 
            type="button" 
            variant="outline" 
            onClick={getCurrentLocation}
            className="w-full md:w-auto"
          >
            <MapPin className="mr-2 h-4 w-4" />
            Use Current Location
          </Button>
        </div>
        
        <div className="text-center text-sm text-muted-foreground">
          - OR -
        </div>
        
        <FormField
          control={form.control}
          name="query"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location Name/Address</FormLabel>
              <FormControl>
                <Input placeholder="Eiffel Tower, Paris, France" {...field} />
              </FormControl>
              <FormMessage />
              <p className="text-sm text-muted-foreground">
                Enter a location name or address to create a searchable maps link
              </p>
            </FormItem>
          )}
        />
        
        <Button type="submit" className="w-full">Generate Location QR Code</Button>
      </form>
    </Form>
  );
};

export default GeoLocationQRForm;
