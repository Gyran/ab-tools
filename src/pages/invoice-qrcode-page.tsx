import { useCallback, useState } from 'react';
import InvoiceQRCode, {
  PaymentMethodType,
} from '../components/invoice-qr-code.tsx';
import TextInput from '../components/text-input';
import {
  Box,
  Typography,
  Stack,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';

const QR_CODE_WIDTH = 300;

const SKVQRCodePage = () => {
  const [ocrInput, setOCRInput] = useState('');
  const [amountInput, setAmountInput] = useState('');
  const [accountInput, setBgInput] = useState('');
  const [paymentMethodInput, setPaymentMethodInput] =
    useState<PaymentMethodType>(PaymentMethodType.BG);

  const handleOCRChange = useCallback((value: string) => {
    setOCRInput(value);
  }, []);
  const handleAmountChange = useCallback((value: string) => {
    setAmountInput(value);
  }, []);
  const handleAccountChange = useCallback((value: string) => {
    setBgInput(value);
  }, []);
  const handlePaymentMethodChange = useCallback((event: SelectChangeEvent) => {
    setPaymentMethodInput(event.target.value as typeof paymentMethodInput);
  }, []);

  const amount = parseFloat(amountInput);
  const ocr = parseInt(ocrInput, 10);

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: '300px 1fr' }}>
      <Box>
        <Typography variant="h2">Faktura QR-kod</Typography>
        <Typography variant="body1" mt={2}>
          Använd denna sida för att skapa en qr-kod för din faktura. Glöm inte
          att verifiera det som står i din bank innan du gör någon betalning.
        </Typography>
        <Stack mt={2} spacing={2}>
          <Select
            value={paymentMethodInput}
            onChange={handlePaymentMethodChange}
          >
            <MenuItem value={PaymentMethodType.BG}>Bankgiro</MenuItem>
            <MenuItem value={PaymentMethodType.PG}>Plusgiro</MenuItem>
          </Select>
          <TextInput
            label="Account"
            onChange={handleAccountChange}
            value={accountInput}
          />
          <TextInput
            label="OCR"
            type="number"
            onChange={handleOCRChange}
            value={ocrInput}
          />
          <TextInput
            label="Amount"
            type="number"
            onChange={handleAmountChange}
            value={amountInput}
            step={0.1}
          />
        </Stack>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box width={QR_CODE_WIDTH} height={QR_CODE_WIDTH} position={'relative'}>
          <InvoiceQRCode
            width={QR_CODE_WIDTH}
            iref={ocr}
            acc={accountInput}
            due={amount}
            pt={paymentMethodInput}
          />
          {(!Number.isFinite(amount) || accountInput.length <= 0) && (
            <Box
              sx={{
                p: 5,
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                display: 'flex',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'black',
                opacity: 0.9,
                color: 'white',
              }}
            >
              <Typography variant="overline">
                Fyll i alla fält för att få en giltig QR-kod
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default SKVQRCodePage;
