import React from "react";
import "./contentStyle.scss";
import funcClassNames from "classnames";


import { countPay } from "./countMonthPay";

export class MonthPay extends React.Component {
  state = {
    loan: "",
    interest: "",
    term: "",
    formErrors: "",
    loanValid: false,
    interestValid: false,
    termValid: false,
    formValid: false,
    monthPay: "",
  };

  
  gatherTheData = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ ...this.state, [name]: value }, () => {
      this.validateField();
    });
  };
  validateField() {
    let fieldValidationErrors = this.state.formErrors;
    let loanValid = this.state.loanValid;
    let interestValid = this.state.interestValid;
    let termValid = this.state.termValid;

    loanValid = this.state.loan.match(
      /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:(\.|,)\d+)?$/
    );
    interestValid = this.state.interest.match(
      /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:(\.|,)\d+)?$/
    );
    termValid = this.state.term.match(
      /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:(\.|,)\d+)?$/
    );

    if (loanValid && interestValid && termValid) {
      fieldValidationErrors = null;
    } else {
      fieldValidationErrors = "Строка пуста или используются не числа";
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        loanValid: loanValid,
        interestValid: interestValid,
        termValid: termValid,
      },
      this.validateForm
    );
  }
  validateForm() {
    let loanValid = this.state.loanValid;
    let interestValid = this.state.interestValid;
    let termValid = this.state.termValid;
    this.setState({ formValid: loanValid && interestValid && termValid });
  }
  handleSubmit = () => {
    let { loan, interest, term } = this.state;
    this.setState({
      monthPay: countPay(loan, interest, term),
    });
  };

  render() {
    return (
      <form className="content">
        <input
        type = 'text'
          className={funcClassNames({
            wrong: !this.state.loanValid,
            right: this.state.loanValid,
          })}
          placeholder="Сумма займа"
          name="loan"
          maxLength="12"
          onChange={this.gatherTheData}
        ></input>
        <input
          className={funcClassNames({
            wrong: !this.state.interestValid,
            right: this.state.interestValid,
          })}
          placeholder="Ставка"
          name="interest"
          maxLength="8"
          onChange={this.gatherTheData}
        ></input>
        <input
          className={funcClassNames({
            wrong: !this.state.termValid,
            right: this.state.termValid,
          })}
          placeholder="Срок"
          name="term"
          maxLength="2"
          onChange={this.gatherTheData}
        ></input>
        <span className='red'>{this.state.formErrors}</span>
        <button
          type="button"
          className="content_confirm"
          onClick={this.handleSubmit}
          disabled={!this.state.formValid}
        >
          Рассчитать
        </button>
        <span>Ежемесячный платеж составит:</span>
        <span>{this.state.monthPay}</span>
      </form>
    );
  }
}
