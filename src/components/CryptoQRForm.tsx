
import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CryptoQRFormProps {
  onValueChange: (value: string) => void;
}

const CryptoQRForm: React.FC<CryptoQRFormProps> = ({ onValueChange }) => {
  const [cryptoData, setCryptoData] = useState({
    currency: 'bitcoin',
    address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
    amount: '0.001',
    label: 'Payment to tandouri.dev',
    message: 'QR Generator Service Payment'
  });

  useEffect(() => {
    let cryptoValue = '';
    
    switch (cryptoData.currency) {
      case 'bitcoin':
        cryptoValue = `bitcoin:${cryptoData.address}?amount=${cryptoData.amount}&label=${encodeURIComponent(cryptoData.label)}&message=${encodeURIComponent(cryptoData.message)}`;
        break;
      case 'ethereum':
        cryptoValue = `ethereum:${cryptoData.address}?value=${parseFloat(cryptoData.amount) * 1e18}&data=${encodeURIComponent(cryptoData.message)}`;
        break;
      case 'litecoin':
        cryptoValue = `litecoin:${cryptoData.address}?amount=${cryptoData.amount}&label=${encodeURIComponent(cryptoData.label)}&message=${encodeURIComponent(cryptoData.message)}`;
        break;
      case 'dogecoin':
        cryptoValue = `dogecoin:${cryptoData.address}?amount=${cryptoData.amount}&label=${encodeURIComponent(cryptoData.label)}&message=${encodeURIComponent(cryptoData.message)}`;
        break;
      default:
        cryptoValue = cryptoData.address;
    }

    onValueChange(cryptoValue);
  }, [cryptoData, onValueChange]);

  const getCurrencyInfo = () => {
    switch (cryptoData.currency) {
      case 'bitcoin':
        return { symbol: 'BTC', placeholder: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa' };
      case 'ethereum':
        return { symbol: 'ETH', placeholder: '0x742d35Cc6634C0532925a3b8D0Fb4E1a1c0e8b3f' };
      case 'litecoin':
        return { symbol: 'LTC', placeholder: 'LM2WMpR1Rp6j3Sa59cMXMs1SPzj9eXpGc1' };
      case 'dogecoin':
        return { symbol: 'DOGE', placeholder: 'DMiU2HdWdyJFhbqfRVXvqUYHqBpPQWJqv5' };
      default:
        return { symbol: '', placeholder: '' };
    }
  };

  const currencyInfo = getCurrencyInfo();

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="crypto-currency">Cryptocurrency</Label>
        <Select value={cryptoData.currency} onValueChange={(value) => setCryptoData({ ...cryptoData, currency: value })}>
          <SelectTrigger id="crypto-currency" className="w-full mt-1">
            <SelectValue placeholder="Select cryptocurrency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bitcoin">Bitcoin (BTC)</SelectItem>
            <SelectItem value="ethereum">Ethereum (ETH)</SelectItem>
            <SelectItem value="litecoin">Litecoin (LTC)</SelectItem>
            <SelectItem value="dogecoin">Dogecoin (DOGE)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="wallet-address">Wallet Address</Label>
        <Input
          id="wallet-address"
          placeholder={currencyInfo.placeholder}
          className="mt-1"
          value={cryptoData.address}
          onChange={(e) => setCryptoData({ ...cryptoData, address: e.target.value })}
        />
      </div>

      <div>
        <Label htmlFor="amount">Amount ({currencyInfo.symbol})</Label>
        <Input
          id="amount"
          type="number"
          step="0.00000001"
          placeholder="0.001"
          className="mt-1"
          value={cryptoData.amount}
          onChange={(e) => setCryptoData({ ...cryptoData, amount: e.target.value })}
        />
      </div>

      <div>
        <Label htmlFor="payment-label">Label</Label>
        <Input
          id="payment-label"
          placeholder="Payment description"
          className="mt-1"
          value={cryptoData.label}
          onChange={(e) => setCryptoData({ ...cryptoData, label: e.target.value })}
        />
      </div>

      <div>
        <Label htmlFor="payment-message">Message</Label>
        <Input
          id="payment-message"
          placeholder="Payment message"
          className="mt-1"
          value={cryptoData.message}
          onChange={(e) => setCryptoData({ ...cryptoData, message: e.target.value })}
        />
      </div>
    </div>
  );
};

export default CryptoQRForm;
