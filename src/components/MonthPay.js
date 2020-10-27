import React from "react";
import "./contentStyle.scss";
import { Form, Button, Divider, Statistic } from "semantic-ui-react";

import { countPay } from "./countMonthPay";

export class MonthPay extends React.Component {
  state = {
    loan: "",
    interest: "",
    term: "",
    formErrors: {
      errloan: "",
      errinterest: "",
      errterm: "",
    },
    loanValid: null,
    interestValid: null,
    termValid: null,
    monthPay: "",
  };

  gatherTheData = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField();
    });
  };

  validateField() {
    let fieldValidationErrors = this.state.formErrors;
    let loanValid = this.state.loanValid;
    let interestValid = this.state.interestValid;
    let termValid = this.state.termValid;

    loanValid = this.regTest(this.state.loan);
    interestValid = this.regTest(this.state.interest);
    termValid = this.regTest(this.state.term);

    fieldValidationErrors.errloan = loanValid ? "" : "Введите число";
    fieldValidationErrors.errinterest = interestValid ? "" : "Введите число";
    fieldValidationErrors.errterm = termValid ? "" : "Введите число";
    this.setState({
      formErrors: fieldValidationErrors,
      loanValid: loanValid,
      interestValid: interestValid,
      termValid: termValid,
    });
  }

  handleSubmit = () => {
    let { loan, interest, term } = this.state;
    this.setState({
      monthPay: countPay(loan, interest, term),
    });
  };

  regTest(inputValue) {
    const regX = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:(\.|,)\d+)?$/;
    return regX.test(inputValue);
  }

  render() {
    const isFormValid =
      this.state.loanValid && this.state.interestValid && this.state.termValid;
    return (
      <div className="content">
        <Form className="mnthpay-form">
          <div className="mnthpay-form__wrap-input">
            <Form.Input
              error={
                this.state.loanValid || this.state.loanValid === null
                  ? null
                  : "Заполните строку используя цифры"
              }
              label="Сумма займа"
              className="mnthpay-form__input"
              placeholder="Сумма займа"
              name="loan"
              maxLength="12"
              onChange={this.gatherTheData}
            ></Form.Input>
          </div>
          <div className="mnthpay-form__wrap-input">
            <Form.Input
              error={
                this.state.interestValid || this.state.interestValid === null
                  ? null
                  : "Заполните строку используя цифры"
              }
              label="Сумма займа"
              label="Ставка"
              className="mnthpay-form__input"
              placeholder="Ставка"
              name="interest"
              maxLength="4"
              onChange={this.gatherTheData}
            ></Form.Input>
          </div>
          <div className="mnthpay-form__wrap-input">
            <Form.Input
              error={
                this.state.termValid || this.state.termValid === null
                  ? null
                  : "Заполните строку используя цифры"
              }
              label="Сумма займа"
              className="mnthpay-form__input"
              label="Срок"
              placeholder="Срок"
              name="term"
              maxLength="2"
              onChange={this.gatherTheData}
            ></Form.Input>
          </div>
          <Button
            className="mnthpay-form__button"
            type="submit"
            onClick={this.handleSubmit}
            disabled={!isFormValid}
          >
            Рассчитать
          </Button>
        </Form>
        <div className="container">
          <Divider className="container-divider" />
          <Statistic size="tiny" className="container__result">
            <Statistic.Label className="container__result-label">
              {this.state.monthPay ? "Ежемесячный платеж" : null}
            </Statistic.Label>
            <Statistic.Value className="container__result-value">
              {this.state.monthPay}
            </Statistic.Value>
          </Statistic>
        </div>
      </div>
    );
  }
}
