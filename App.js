import React, { useState } from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import CopyrightIcon from "@material-ui/icons/Copyright";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "35ch",
    },
    formControl: {
      margin: theme.spacing(3),
    },
    button: {
      margin: theme.spacing(1, 0, 1, 0),
    },
  },
}));

function App() {
  const classes = useStyles();

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [myBmr, setBmr] = useState(0);

  const handleSubmit = () => {
    let bmr = 0;
    if (gender === "male") {
      bmr = 66 + 6.2 * weight + 12.7 * height - 6.76 * age;
      setBmr(bmr.toFixed(2));
    } else {
      bmr = 655.1 + 4.35 * weight + 4.7 * height - 4.7 * age;
      setBmr(bmr.toFixed(2));
    }
  };

  return (
    <div className="App">
      <h2>
        Please enter your info down below to calculate your calories lost per
        day.
      </h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="weight"
          type="Number"
          label="Weight (lbs)"
          variant="outlined"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <TextField
          id="height"
          type="Number"
          label="Height (inches)"
          variant="outlined"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <TextField
          id="age"
          type="Number"
          label="Age"
          variant="outlined"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <FormControl component="fieldset">
          <RadioGroup
            row
            aria-label="gender"
            name="gender1"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>

        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          onClick={handleSubmit}
        >
          Calculate
        </Button>
        <Button
          onClick={() => {
            setAge("");
            setGender("male");
            setHeight("");
            setWeight("");
            setBmr(0);
          }}
          color="secondary"
        >
          Clear
        </Button>
      </form>
      <h2>{`Your BMR is : ${myBmr}`}</h2>
      <p>&copy; Sangeet Subedi, 2020</p>
    </div>
  );
}

export default App;
