import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonDetails";
import Confirm from "./Confirm";
import Success from "./Success";

class UserForm extends Component {
  state = {
    step: 1,
    score: 0,
    possibleCase: 0,
    injuries: 0,
    propertyDamage: 0,
    workMissed: 0,
    moneyLoss: 0,
    hurtNegligence: 0,
    medicalBills: 0,
    payFor: 0,
    slipAndFall: 0,
    defectiveProduct: 0,
    damages: 0,
    medicalCare: 0,
    animalAttack: 0,
    familyCareCosts: 0,
    childCareCosts: 0,
    lawBroke: 0
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  render() {
    const { step } = this.state;
    const {
      possibleCase,
      injuries,
      propertyDamage,
      hurtNegligence,
      moneyLoss,
      workMissed,
      medicalBills,
      payFor,
      slipAndFall,
      defectiveProduct,
      damages,
      medicalCare,
      animalAttack,
      familyCareCosts,
      childCareCosts,
      lawBroke,
      score
    } = this.state;
    const values = {
      possibleCase,
      injuries,
      propertyDamage,
      hurtNegligence,
      moneyLoss,
      workMissed,
      medicalBills,
      payFor,
      slipAndFall,
      defectiveProduct,
      damages,
      medicalCare,
      animalAttack,
      familyCareCosts,
      childCareCosts,
      lawBroke,
      score
    };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
    }
  }
}

export default UserForm;
