
import React, { useState, useEffect } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Smartphone } from "lucide-react";

interface ESIMQRFormProps {
  onValueChange: (value: string) => void;
  onFormDataChange?: (data: { pukCode?: string; pinCode?: string; phoneNumber?: string; operator?: string }) => void;
}

const ESIMQRForm: React.FC<ESIMQRFormProps> = ({ onValueChange, onFormDataChange }) => {
  const [smDpAddress, setSmDpAddress] = useState('');
  const [activationCode, setActivationCode] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [pukCode, setPukCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [operator, setOperator] = useState('');

  useEffect(() => {
    const generateESIMString = () => {
      if (!smDpAddress && !activationCode) {
        return 'LPA:1$example.com$12345$optional-confirmation';
      }
      
      let lpaString = 'LPA:1';
      if (smDpAddress) lpaString += `$${smDpAddress}`;
      if (activationCode) lpaString += `$${activationCode}`;
      if (confirmationCode) lpaString += `$${confirmationCode}`;
      
      return lpaString;
    };

    const esimString = generateESIMString();
    onValueChange(esimString);
    
    // Pass form data to parent component
    if (onFormDataChange) {
      onFormDataChange({
        pukCode: pukCode || undefined,
        pinCode: pinCode || undefined,
        phoneNumber: phoneNumber || undefined,
        operator: operator || undefined,
      });
    }
  }, [smDpAddress, activationCode, confirmationCode, pinCode, pukCode, phoneNumber, operator, onValueChange, onFormDataChange]);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <Smartphone className="h-5 w-5" />
        <h3 className="text-lg font-semibold">eSIM Configuration</h3>
      </div>

      <div className="grid gap-4">
        <div>
          <Label htmlFor="sm-dp-address">SM-DP+ Server Address</Label>
          <Input
            id="sm-dp-address"
            type="text"
            placeholder="rsp.example.com"
            value={smDpAddress}
            onChange={(e) => setSmDpAddress(e.target.value)}
            className="mt-1"
          />
          <p className="text-sm text-muted-foreground mt-1">
            The subscription manager data preparation server address
          </p>
        </div>

        <div>
          <Label htmlFor="activation-code">Activation Code</Label>
          <Input
            id="activation-code"
            type="text"
            placeholder="Enter activation code"
            value={activationCode}
            onChange={(e) => setActivationCode(e.target.value)}
            className="mt-1"
          />
          <p className="text-sm text-muted-foreground mt-1">
            Unique identifier for the eSIM profile
          </p>
        </div>

        <div>
          <Label htmlFor="confirmation-code">Confirmation Code (Optional)</Label>
          <Input
            id="confirmation-code"
            type="text"
            placeholder="Enter confirmation code"
            value={confirmationCode}
            onChange={(e) => setConfirmationCode(e.target.value)}
            className="mt-1"
          />
          <p className="text-sm text-muted-foreground mt-1">
            Additional security code if required
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="pin-code">PIN Code</Label>
            <Input
              id="pin-code"
              type="text"
              placeholder="0000"
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
              className="mt-1"
              maxLength={8}
            />
            <p className="text-sm text-muted-foreground mt-1">
              SIM PIN code
            </p>
          </div>

          <div>
            <Label htmlFor="puk-code">PUK Code</Label>
            <Input
              id="puk-code"
              type="text"
              placeholder="68436682"
              value={pukCode}
              onChange={(e) => setPukCode(e.target.value)}
              className="mt-1"
              maxLength={8}
            />
            <p className="text-sm text-muted-foreground mt-1">
              Personal Unblocking Key
            </p>
          </div>
        </div>

        <div>
          <Label htmlFor="phone-number">Phone Number</Label>
          <Input
            id="phone-number"
            type="tel"
            placeholder="+212 666 393 445"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="mt-1"
          />
          <p className="text-sm text-muted-foreground mt-1">
            Associated phone number
          </p>
        </div>

        <div>
          <Label htmlFor="operator">Operator</Label>
          <Select value={operator} onValueChange={setOperator}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select operator" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Orange">Orange</SelectItem>
              <SelectItem value="Inwi">Inwi</SelectItem>
              <SelectItem value="Maroc Telecom">Maroc Telecom</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-sm text-muted-foreground mt-1">
            Mobile network operator
          </p>
        </div>
      </div>

      <Card className="bg-muted/50">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Generated eSIM String:</CardTitle>
        </CardHeader>
        <CardContent>
          <code className="text-xs break-all bg-background p-3 rounded border block">
            {generateESIMString()}
          </code>
        </CardContent>
      </Card>
    </div>
  );
};

export default ESIMQRForm;
