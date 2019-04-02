import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import RadioButtonGroup from "material-ui/RadioButton/RadioButtonGroup";
import RadioButton from "material-ui/RadioButton";

class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  state = {};
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <h4>What kind of possible case do you have?</h4>
          <RadioButtonGroup
            name="possibleCase"
            defaultSelected={values.possibleCase}
            onChange={handleChange("possibleCase")}
          >
            <RadioButton value="slip_and_fall" label="Slip and Fall Accident" />
            <RadioButton
              value="car_accident"
              label="Car Accident/ Trucking Accident/ Motorcycle Accident"
            />
            <RadioButton
              value="medical_malpractice"
              label="Medical Malpractice"
            />
            <RadioButton
              value="attack_or_bite_by_animal"
              label="Attack or Bite by Animal"
            />
          </RadioButtonGroup>
          <br />
          <h4>Did/Do you have injuries?</h4>
          <RadioButtonGroup
            name="injuries"
            defaultSelected={values.injuries}
            onChange={handleChange("injuries")}
          >
            <RadioButton value="1" label="Yes" />
            <RadioButton value="0" label="No" />
          </RadioButtonGroup>
          <br />
          <h4>Did/Do you have medical bills?</h4>
          <RadioButtonGroup
            name="medicalBills"
            defaultSelected={values.medicalBills}
            onChange={handleChange("medicalBills")}
          >
            <RadioButton value="1" label="Yes" />
            <RadioButton value="0" label="No" />
          </RadioButtonGroup>
          <br />
          <h4>
            Can another individual, group, or a corporation(like an insurance
            company) responsible for this injury pay for this?
          </h4>
          <RadioButtonGroup
            name="payFor"
            defaultSelected={values.payFor}
            onChange={handleChange("payFor")}
          >
            <RadioButton value="1" label="Yes" />
            <RadioButton value="0" label="No" />
          </RadioButtonGroup>

          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default FormUserDetails;
