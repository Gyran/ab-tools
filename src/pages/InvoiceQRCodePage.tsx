import React, { ReactElement, useCallback, useState } from 'react';
import InvoiceQRCode, {
  PaymentMethodType,
} from '../components/invoice-qr-code.tsx';

const identityParseFn = (value: string) => value;

type InputItem = {
  label: string;
  element: ReactElement;
  dataKey: string;
  parseFn?: (value: string) => unknown;
};

const QR_CODE_WIDTH = 300;

const InvoiceQRCodePage = () => {
  const inputItems: InputItem[] = [
    {
      label: 'amount',
      element: <input type="number" step={0.01} />,
      dataKey: 'due',
      parseFn: (value) => parseFloat(value),
    },
    {
      label: 'ocr',
      element: <input type="number" />,
      dataKey: 'iref',
      parseFn: (value) => parseInt(value, 10),
    },
    { label: 'account', element: <input type="text" />, dataKey: 'acc' },
    {
      label: 'payment type',
      element: (
        <select>
          <option>{PaymentMethodType.BG}</option>
          <option>{PaymentMethodType.PG}</option>
        </select>
      ),
      dataKey: 'pt',
    },
  ];

  const [data, setData] = useState({
    uqr: 1,
    tp: 1,
    nme: '',
    cid: '',
    iref: -1,
    ddt: new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000),
    due: -1,
    pt: PaymentMethodType.BG,
    acc: '',
  });

  const updateData = useCallback((key, newValue) => {
    setData((prevData) => {
      return { ...prevData, [key]: newValue };
    });
  }, []);

  return (
    <div className="app-wrapper">
      {inputItems.map((inputItem) => {
        return (
          <div>
            {inputItem.label}{' '}
            {React.cloneElement(inputItem.element, {
              onChange: (e: any) => {
                const strValue = e.currentTarget.value;
                const parseFn = inputItem.parseFn ?? identityParseFn;

                updateData(inputItem.dataKey, parseFn(strValue));
              },
            })}
          </div>
        );
      })}
      <InvoiceQRCode width={QR_CODE_WIDTH} {...data} />
    </div>
  );
};

export default InvoiceQRCodePage;
