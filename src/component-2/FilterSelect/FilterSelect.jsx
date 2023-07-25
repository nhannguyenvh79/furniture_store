import Select from "react-select";
import { LanguageContext } from "../../context/LanguageContext";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

const optionsVN = [
  { value: "tất cả", label: "Tất cả" },
  { value: "sofa", label: "Sofa" },
  { value: "ghế", label: "Ghế" },
  { value: "thảm", label: "Thảm" },
  { value: "bàn", label: "Bàn" },
  { value: "đèn", label: "Đèn" },
  { value: "tủ", label: "tủ" },
  { value: "tủ lạnh", label: "Tủ lạnh" },
  { value: "tủ đầu giường", label: "Tủ đầu giường" },
  { value: "gương", label: "Gương" },
  { value: "phụ kiện", label: "phụ kiện" },
  { value: "giường", label: "giường" },
];
const optionsEN = [
  { value: "all", label: "All" },
  { value: "sofa", label: "Sofa" },
  { value: "chair", label: "Chair" },
  { value: "carpet", label: "Carpet" },
  { value: "table", label: "table" },
  { value: "lamp", label: "Lamp" },
  { value: "cabinet", label: "Carbinet" },
  { value: "fridge", label: "Fridgeh" },
  { value: "nightstand", label: "Nightstand" },
  { value: "mirror", label: "Mirror" },
  { value: "accessories", label: "Accessories" },
  { value: "bed", label: "bed" },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "white",
    color: "blue",
    borderRadius: "5px",
    border: "2px solid white",
    boxShadow: "none",
    width: "100%",
    height: "40px",
    fontWeight: "bolder",
  }),
  option: (provided, state) => ({
    ...provided,
    border: state.isSelected ? "2px solid black" : "none",
    borderRadius: state.isSelected ? "none" : "none",
    backgroundColor: state.isSelected ? "red" : "black",
    color: state.isSelected ? "#FAFA70" : "white",
    textTransform: state.isSelected ? "uppercase" : "uppercase",
    fontSize: state.isSelected ? "16px" : "16px",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "black",
    fontSize: "20px",
  }),
};

export default function FilterSelect({ setFilterList, itemData }) {
  const { language } = useContext(LanguageContext);

  const handleChange = (selectedOption) => {
    setFilterList(
      itemData.filter(
        (item) =>
          item.category1 === selectedOption || item.category3 === selectedOption
      )
    );
  };

  return (
    <Select
      labelId="demo-multiple-checkbox-label"
      id="demo-multiple-checkbox"
      options={language === "vie" ? optionsVN : optionsEN}
      defaultValue={{
        value: "",
        label: language === "vie" ? "Lọc sản phẩm..." : "Sorting items....",
      }}
      styles={customStyles}
      onChange={(e) => {
        console.log(e.value);
        handleChange(e.value);
      }}
    />
  );
}
