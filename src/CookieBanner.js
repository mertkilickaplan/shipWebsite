import React, { useState, useEffect } from "react";
import "./CookieBanner.css";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookieConsented")) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsented", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <span>
        Bu site, deneyiminizi iyileştirmek için çerezleri kullanır. Detaylar için KVKK ve Gizlilik Politikamıza bakabilirsiniz.
      </span>
      <button className="cookie-accept-btn" onClick={handleAccept}>Kabul Et</button>
    </div>
  );
};

export default CookieBanner; 