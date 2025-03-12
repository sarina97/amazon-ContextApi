import { useContext } from "react";
import { FooterContext } from "../context/FooterContext";


const FooterSettings = () => {
  const { setLanguage, setCurrency, setCountry } = useContext(FooterContext);

  return (
    <div className="p-5 flex items-center gap-3 justify-center">
      <h2 className="text-lg font-bold mb-4">Footer Settings</h2>

      <label className="block mb-2">Language:</label>
      <select className="border p-2" onChange={(e) => setLanguage(e.target.value)}>
        <option>English</option>
        <option>Español</option>
        <option>Français</option>
        <option>Deutsch</option>
      </select>

      <label className="block mt-4 mb-2">Currency:</label>
      <select className="border p-2" onChange={(e) => setCurrency(e.target.value)}>
        <option>USD - U.S. Dollar</option>
        <option>EUR - Euro</option>
        <option>GBP - British Pound</option>
        <option>JPY - Japanese Yen</option>
      </select>

      <label className="block mt-4 mb-2">Country:</label>
      <select className="border p-2" onChange={(e) => setCountry(e.target.value)}>
        <option>United States</option>
        <option>Canada</option>
        <option>United Kingdom</option>
        <option>Germany</option>
      </select>
    </div>
  );
};

export default FooterSettings;
