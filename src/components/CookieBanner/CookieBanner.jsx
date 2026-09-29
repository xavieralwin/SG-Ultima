import { useState, useEffect } from "react";
import './cookies.css';
const CookieBanner = () => {
  const COOKIE_NAME = "cookie_consent_level";
  const DEFAULT_LEVEL_ID = "marketing";
  const COOKIE_EXPIRY_DAYS = 365;

  const cookieNotice = `Our website uses cookies to help us improve our services to you. 
  By continuing to browse the site you are agreeing to our 
  <a href='https://www.citibank.com.sg/footer/privacy?lid=SGENCBGPYFOTLPrivacyPolicy' target='_blank' class='underline'>privacy policy</a> and 
  <a href='https://www.citibank.com.sg/footer/privacy?lid=SGENCBGPYFOTLOurUseOfCookies#tabs-4ac20ba924-item-a1c11f2917-tab' target='_blank' class='underline'>our use of cookies</a>.`;

  const getCookie = (name) => {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
      const [key, value] = cookies[i].split("=");
      if (key === name) return decodeURIComponent(value);
    }
    return null;
  };

  const setCookie = (name, value, days) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/`;
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!getCookie(COOKIE_NAME)) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie(COOKIE_NAME, DEFAULT_LEVEL_ID, COOKIE_EXPIRY_DAYS);
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="fixed bottom-4 left-4 right-4 p-4 bg-gray-900 text-white rounded-lg flex justify-between items-center z-20">
        <p dangerouslySetInnerHTML={{ __html: cookieNotice }} />
        <button
          onClick={handleAccept}
          className="bg-blue-500 px-4 py-2 rounded-md text-white"
        >
          Accept
        </button>
      </div>
    )
  );
};

export default CookieBanner;
