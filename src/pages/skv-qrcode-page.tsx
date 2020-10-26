import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import InvoiceQRCode, {
  PaymentMethodType,
} from '../components/invoice-qr-code.tsx';
import TextInput from '../components/text-input.tsx';

const QR_CODE_WIDTH = 300;
const SKV_BG_NUMBER = '5050-1055';

const OCR_LOCAL_STORAGE_KEY = 'SKV_OCR';

const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
`;
const QRWrapper = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
`;
const Stack = styled.div`
  & > * + * {
    margin-top: 10px;
  }
`;

const SKVQRCodePage = () => {
  const [ocr, setOCR] = useState(() => {
    const stored = window.localStorage.getItem(OCR_LOCAL_STORAGE_KEY);
    if (stored) {
      const parsed = parseInt(stored, 10);
      if (Number.isFinite(parsed)) {
        return parsed.toString();
      }
    }

    return '';
  });
  const [amount, setAmount] = useState('');

  const handleOCRChange = useCallback((value: string) => {
    setOCR(value);
    window.localStorage.setItem(OCR_LOCAL_STORAGE_KEY, value);
  }, []);
  const handleAmountChange = useCallback((value: string) => {
    setAmount(value);
  }, []);

  return (
    <PageWrapper>
      <div>
        <h2>Skattekonto QR-kod</h2>
        <p>
          Använd denna sida för att autoifylla en betalning till ditt
          skattekonto genom att scanna qr koden. Glöm inte att verifiera det som
          står i din bank innan du gör någon betalning.
        </p>
        <Stack>
          <TextInput
            label="OCR"
            type="number"
            onChange={handleOCRChange}
            value={ocr}
          />
          <TextInput
            label="Amount"
            type="number"
            onChange={handleAmountChange}
            value={amount}
            step={0.1}
          />
          <div>BG kontonummer: {SKV_BG_NUMBER}</div>
        </Stack>
      </div>
      <QRWrapper>
        <InvoiceQRCode
          width={QR_CODE_WIDTH}
          iref={parseInt(ocr, 10)}
          acc={SKV_BG_NUMBER}
          due={parseFloat(amount)}
          pt={PaymentMethodType.BG}
        />
      </QRWrapper>
    </PageWrapper>
  );
};

export default SKVQRCodePage;
