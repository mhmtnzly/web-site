import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // react-icons yoksa: npm install react-icons

const number = "905438718918"; // başına 0 koyma, ülke kodlu
const message = "Merhaba, nakliyat hizmetiniz hakkında bilgi almak istiyorum.";

export default function WhatsAppFab() {
  const href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile Yaz"
      className="wa-fab"
    >
      <FaWhatsapp size={26} />
    </a>
  );
}
