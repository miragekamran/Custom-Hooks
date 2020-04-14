import { useState } from "react";

export const example = () => {
//   const [username, setUsername] = useState("");

  const handleChanges = e => {
    // setUsername(e.target.value);
  };

  const clearForm = e => {
    e.preventDefault();
    // setUsername("");
  };

//   return [username, clearForm, handleChanges];
};
