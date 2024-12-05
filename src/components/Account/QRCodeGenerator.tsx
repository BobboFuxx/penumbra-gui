import React from "react";
import QRCode from "qrcode.react";

interface QRCodeProps {
  address: string;
}

const QRCodeGenerator = ({ address }: QRCodeProps) => {
  return (
    <div className="qr-code-generator">
      <h2>Your QR Code</h2>
      <QRCode value={address} size={128} />
    </div>
  );
};

export default QRCodeGenerator;
