import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import { example } from "../../hooks/example";

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
    console.log("Hello from formCallback!");
    // usually you would do data processing
    // or a REST call
    // or some other interaction with a server
    // POST REQUEST TO SEND SIGNUPFORM DATA TO SERVER 2
  };

  const [username, clearForm, handleChanges] = example(
    "exampleForm",
    initialFormValues,
    formCallback
  );

  const handleSubmit = e => {
    e.preventDefault();
    console.log("handleSubmit called: ", username);
  };

  return (
    <div p={2} className="form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add New Client</legend>
          <TextField
            id="outlined-name"
            label="Username"
            className={classes.textField}
            value={username}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
            name="username"
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
