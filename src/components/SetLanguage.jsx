import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function SetLanguage() {
    const { language, setLanguage } = useContext(LanguageContext);
    return (
        <div
            style={{
                position: "fixed",
                right: 0,
                top: 60,
                zIndex: 99,
                border: "none",
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
                }}
            >
                <option value="vie">Vie</option>
                <option value="eng">Eng</option>
            </select>
        </div>
    );
}
