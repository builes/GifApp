import { useState } from "react";

export const AddCategory = ({ handleAddCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedValue = inputValue.trim();
    if (trimmedValue.length >= 2) {
      handleAddCategory(trimmedValue);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-label="form-add-category">
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={handleInputChange}
        aria-label="input-category"
      />
    </form>
  );
};
