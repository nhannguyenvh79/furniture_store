import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function SetLanguage() {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <div
      style={{
        position: "fixed",
        right: 0,
        top: 70,
        zIndex: 99,
        border: "none",
        margin: "5px",
      }}
    >
      <select
        name="language"
        id="change-languauge"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        style={{
          backgroundColor: "none",
          border: "none",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          borderRadius: "5px",
          color: "gray",
          padding: "2px 5px",
          opacity: 0.5,
        }}
      >
        <option value="vie">Vie</option>
        <option value="eng">Eng</option>
      </select>
    </div>
  );
}
