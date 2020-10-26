import React, { useMemo } from 'react';
import QRCode from '../qr-code';

export enum PaymentMethodType {
  IBAN = 'IBAN',
  BBAN = 'BBAN',
  BG = 'bg',
  PG = 'PG',
}

type Props = {
  width: number;

  // https://drive.google.com/file/d/14XR6F1XnUkuWatldkOVr69Fr4of5g98P/view
  uqr?: number;
  tp?: number;
  nme?: string;
  cid?: string;
  iref?: number;
  ddt?: Date;
  due?: number;
  pt?: PaymentMethodType;
  acc?: string;
};

const InvoiceQRCode = (props: Props) => {
  const {
    uqr = 1,
    tp = 1,
    nme = '',
    cid = '',
    iref = -1,
    ddt = new Date(),
    due = 0,
    pt = PaymentMethodType.BG,
    acc = '',

    width,
  } = props;

  const content = useMemo(() => {
    return JSON.stringify({
      uqr,
      tp,
      nme,
      cid,
      iref,
      ddt: ddt.toISOString().slice(0, 10).replace(/-/g, ''),
      due,
      pt,
      acc,
    });
  }, [uqr, tp, nme, cid, iref, ddt, due, pt, acc]);

  return <QRCode content={content} width={width} />;
};

export default InvoiceQRCode;
