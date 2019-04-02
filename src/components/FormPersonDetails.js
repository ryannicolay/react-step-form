import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RadioButtonGroup from "material-ui/RadioButton/RadioButtonGroup";
import RadioButton from "material-ui/RadioButton";
import RaisedButton from "material-ui/RaisedButton";

class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  state = {};
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <h4>Was any of your property damaged?</h4>
          <RadioButtonGroup
            name="propertyDamage"
            defaultSelected={values.propertyDamage}
            onChange={handleChange("propertyDamage")}
          >
            <RadioButton value="1" label="Yes" />
            <RadioButton value="0" label="No" />
          </RadioButtonGroup>
          <br />
          <h4>Were you hurt by someone\'s negligence?</h4>
          <RadioButtonGroup
            name="hurtNegligence"
            defaultSelected={values.hurtNegligence}
            onChange={handleChange("hurtNegligence")}
          >
            <RadioButton value="1" label="Yes" />
            <RadioButton value="0" label="No" />
          </RadioButtonGroup>
          <h4>Did you lose money as a result of the accident?</h4>
          <RadioButtonGroup
            name="moneyLoss"
            defaultSelected={values.moneyLoss}
            onChange={handleChange("moneyLoss")}
          >
            <RadioButton value="1" label="Yes" />
            <RadioButton value="0" label="No" />
          </RadioButtonGroup>
          <br />
          <h4>Did you miss days of work?</h4>
          <RadioButtonGroup
            name="workMissed"
            defaultSelected={values.workMissed}
            onChange={handleChange("workMissed")}
          >
            <RadioButton value="1" label="Yes" />
            <RadioButton value="0" label="No" />
          </RadioButtonGroup>
          <h4>
            Did you slip and fall on something that should have been cleaned by
            someone else?
          </h4>
          <RadioButtonGroup
            name="slipAndFall"
            defaultSelected={values.slipAndFall}
            onChange={handleChange("slipAndFall")}
          >
            <RadioButton value="1" label="Yes" />
            <RadioButton value="0" label="No" />
          </RadioButtonGroup>
          <br />
          <h4>Were you injured by a defective product?</h4>
          <RadioButtonGroup
            name="defectiveProduct"
            defaultSelected={values.defectiveProduct}
            onChange={handleChange("defectiveProduct")}
          >
            <RadioButton value="1" label="Yes" />
            <RadioButton value="0" label="No" />
          </RadioButtonGroup>
          <br />
          <h4>What Kind of Damages Do You Have?</h4>
          <RadioButtonGroup
            name="damages"
            defaultSelected={values.damages}
            onChange={handleChange("damages")}
          >
            <RadioButton value="1" label="Yes" />
            <RadioButton value="0" label="No" />
          </RadioButtonGroup>
          <br />
          <h4>Did a doctor provided you with substandard medical care?</h4>
          <RadioButtonGroup
            name="medicalCare"
            defaultSelected={values.medicalCare}
            onChange={handleChange("medicalCare")}
          >
            <RadioButton value="1" label="Yes" />
            <RadioButton value="0" label="No" />
          </RadioButtonGroup>
          <br />
          <h4>Were you attacked by an animal that belonged to someone else?</h4>
          <RadioButtonGroup
            name="animalAttack"
            defaultSelected={values.animalAttack}
            onChange={handleChange("animalAttack")}
          >
            <RadioButton value="1" label="Yes" />
            <RadioButton value="0" label="No" />
          </RadioButtonGroup>
          <br />
          <h4>
            Did family members have to take care of you or take over duties
            while you recuperated?
          </h4>
          <RadioButtonGroup
            name="familyCareCosts"
            defaultSelected={values.familyCareCosts}
            onChange={handleChange("familyCareCosts")}
          >
            <RadioButton value="1" label="Yes" />
            <RadioButton value="0" label="No" />
          </RadioButtonGroup>
          <br />
          <h4>Did you have to additional childcare costs?</h4>
          <RadioButtonGroup
            name="childCareCosts"
            defaultSelected={values.childCareCosts}
            onChange={handleChange("childCareCosts")}
          >
            <RadioButton value="1" label="Yes" />
            <RadioButton value="0" label="No" />
          </RadioButtonGroup>
          <br />
          <h4>Did someone else break the law?</h4>
          <RadioButtonGroup
            name="lawBroke"
            defaultSelected={values.lawBroke}
            onChange={handleChange("lawBroke")}
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
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
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

export default FormPersonalDetails;
