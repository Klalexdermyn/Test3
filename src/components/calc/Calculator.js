import React from "react";
import "./calcStyle.scss";
import plusmin from "./plusmin.svg";


export class Calculator extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="calc-grid">
          <div className="calc-grid__input calc-grid__input_result">
            <div className="calc-grid__input_zero">0</div>
          </div>
          <div className="calc-grid__button calc-grid__button_AC">AC</div>
          <div className="calc-grid__button calc-grid__button_plusminus"><img src={plusmin} /></div>
          <div className="calc-grid__button calc-grid__button_procent">%</div>
          <div className="calc-grid__button calc-grid__button_divide">	&divide;</div>
          <div className="calc-grid__button calc-grid__button_one">1</div>
          <div className="calc-grid__button calc-grid__button_two">2</div>
          <div className="calc-grid__button calc-grid__button_three">3</div>
          <div className="calc-grid__button calc-grid__button_multiply">&times;</div>
          <div className="calc-grid__button calc-grid__button_four">4</div>
          <div className="calc-grid__button calc-grid__button_five">5</div>
          <div className="calc-grid__button calc-grid__button_six">6</div>
          <div className="calc-grid__button calc-grid__button_minus">-</div>
          <div className="calc-grid__button calc-grid__button_seven">7</div>
          <div className="calc-grid__button calc-grid__button_eight">8</div>
          <div className="calc-grid__button calc-grid__button_nine">9</div>
          <div className="calc-grid__button calc-grid__button_plus">+</div>
          <div className="calc-grid__button calc-grid__button_zero">0</div>
          <div className="calc-grid__button calc-grid__button_comma">,</div>
          <div className="calc-grid__button calc-grid__button_equell">=</div>
        </div>
      </div>
    );
  }
}
