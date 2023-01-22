import React from "react";
import { useState } from "react";

function SearchHeader({ search }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    search(input);
  };
  const [input, setinput] = useState("");
  const changeHandle = (e) => {
    setinput(e.target.value);
  };
  return (
    <div className="formDiv">
      <form className="formSubmit" onSubmit={handleSubmit}>
        <label className="label">Ne arıyorsunuz ?</label>
        <input value={input} onChange={changeHandle} />
      </form>
    </div>
  );
}

export default SearchHeader;
