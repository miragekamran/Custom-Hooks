import { useLocalStorage } from "./useLocalStorage";

export const useForm = (key, initialValues, cb) => {
  const [values, setValues] = useLocalStorage(key, initialValues);
  // const [username, setUsername] = useLocalStorage(key, initialValues);
  // const [email, setEmail] = useLocalStorage(key, initialValues);

  const handleChanges = e => {
    console.log("handleChanges has been called.");
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(values);
    cb();
  };

  const clearForm = e => {
    console.log("clearForm has been called.");
    e.preventDefault();
    setValues(initialValues);
  };

  return [values, clearForm, handleSubmit, handleChanges];
};
