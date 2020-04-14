import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import { useForm } from "../../hooks/useForm";

import Button from "../../theme/Button";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));

const initialFormValues = {
  username: "",
  email: ""
};

export default function SignupForm() {
  const classes = useStyles();

  const formCallback = () => {
    console.log("Hello from formCallback in NewForm!");
    // usually you would do data processing
    // or a REST call
    // or some other interaction with a server
    // POST REQUEST TO SEND NEWFORM DATA TO SERVER 1
  };

  // http://localhost:8080/${values.username}

  const [values, clearForm, handleSubmit, handleChanges] = useForm(
    "newForm",
    initialFormValues,
    formCallback
  );

  return (
    <div p={2} className="form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>THIS IS THE EXAMPLE FORM</legend>
          <TextField
            id="outlined-first-name"
            label="First Name"
            className={classes.textField}
            value={values.firstName}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
            name="firstName"
          />
          <TextField
            id="outlined-last-name"
            label="Last Name"
            className={classes.textField}
            value={values.lastName}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
            name="lastName"
          />
          <div className="flexer">
            <Button color="red" onClick={clearForm}>
              Clear
            </Button>
            <Button color="blue" type="submit">
              Submit
            </Button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
