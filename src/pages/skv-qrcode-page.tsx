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
const QRPagePartWrapper = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
`;
const QRWrapper = styled.div`
  position: relative;
  width: ${QR_CODE_WIDTH}px;
  height: ${QR_CODE_WIDTH}px;
`;
const Stack = styled.div`
  & > * + * {
    margin-top: 10px;
  }
`;

const DimmingOverlay = styled.div`
  padding: 50px;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  opacity: 0.9;
`;

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
            value={ocrInput}
          />
          <TextInput
            label="Amount"
            type="number"
            onChange={handleAmountChange}
            value={amountInput}
            step={0.1}
          />
          <div>BG kontonummer: {SKV_BG_NUMBER}</div>
        </Stack>
      </div>
      <QRPagePartWrapper>
        <QRWrapper>
          <InvoiceQRCode
            width={QR_CODE_WIDTH}
            iref={ocr}
            acc={SKV_BG_NUMBER}
            due={amount}
            pt={PaymentMethodType.BG}
          />
          {!Number.isFinite(amount) && (
            <DimmingOverlay>
              Fyll i alla fält för att få en giltig QR-kod
            </DimmingOverlay>
          )}
        </QRWrapper>
      </QRPagePartWrapper>
    </PageWrapper>
  );
};

export default SKVQRCodePage;
