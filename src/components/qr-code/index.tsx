import React, { useEffect, useRef } from 'react';
import qrcode from 'qrcode';

type QRCodeProps = {
  content: string;
  width: number;
};
const QRCode = (props: QRCodeProps) => {
  const { content, width } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      qrcode.toCanvas(canvasRef.current, content, {
        width,
        errorCorrectionLevel: 'H',
      });
    }
  }, [content, width]);

  return <canvas ref={canvasRef} />;
};

export default QRCode;
