import { createContext, useState } from "react";

const defaultValue = { language: "eng" };
export const LanguageContext = createContext(defaultValue);

export default function LanguageContextProvider(props) {
  const [language, setLanguage] = useState("eng");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
}
