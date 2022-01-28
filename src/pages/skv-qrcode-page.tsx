import { useCallback, useState } from 'react';
import InvoiceQRCode, {
  PaymentMethodType,
} from '../components/invoice-qr-code.tsx';
import TextInput from '../components/text-input';
import { Box, Typography, Stack } from '@mui/material';

const QR_CODE_WIDTH = 300;
const SKV_BG_NUMBER = '5050-1055';

const OCR_LOCAL_STORAGE_KEY = 'SKV_OCR';

const SKVQRCodePage = () => {
  const [ocrInput, setOCRInput] = useState(() => {
    const stored = window.localStorage.getItem(OCR_LOCAL_STORAGE_KEY);
    if (stored) {
      const parsed = parseInt(stored, 10);
      if (Number.isFinite(parsed)) {
        return parsed.toString();
      }
    }

    return '';
  });
  const [amountInput, setAmountInput] = useState('');

  const handleOCRChange = useCallback((value: string) => {
    setOCRInput(value);
    window.localStorage.setItem(OCR_LOCAL_STORAGE_KEY, value);
  }, []);
  const handleAmountChange = useCallback((value: string) => {
    setAmountInput(value);
  }, []);

  const amount = parseFloat(amountInput);
  const ocr = parseInt(ocrInput, 10);

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: '300px 1fr' }}>
      <Box>
        <Typography variant="h2">Skattekonto QR-kod</Typography>
        <Typography variant="body1" mt={2}>
          Använd denna sida för att autoifylla en betalning till ditt
          skattekonto genom att scanna qr koden. Glöm inte att verifiera det som
          står i din bank innan du gör någon betalning.
        </Typography>
        <Stack mt={2} spacing={2}>
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
          <Typography variant="body1">
            BG kontonummer: {SKV_BG_NUMBER}
          </Typography>
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
            acc={SKV_BG_NUMBER}
            due={amount}
            pt={PaymentMethodType.BG}
          />
          {!Number.isFinite(amount) && (
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
