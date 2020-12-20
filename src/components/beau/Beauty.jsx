import React from "react";
import "normalize.css";

import "./beautyStyle.scss";

export class Beauty extends React.Component {
  render() {
    return (
      <div className='background'>
      <header>
        <div className="wrapper">
          <nav>
            <ul className="navbar-list">
              <li className="navbar-list__item">
                <a className="navbar-list__link" href="">
                  Доставка
                </a>
              </li>
              <li className="navbar-list__item">
                <a className="navbar-list__link" href="">
                  Оплата
                </a>
              </li>
              <li className="navbar-list__item">
                <a className="navbar-list__link" href="">
                  Отзывы
                </a>
              </li>
              <li className="navbar-list__item">
                <a className="navbar-list__link" href="">
                  Вопрос - ответ
                </a>
              </li>
              <li className="navbar-list__item">
                <a className="navbar-list__link" href="">
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="bg-white">
          <div className="header">
            <div className="wrapper">
              <div className="header-top">
                <div className="logo"><div className="logo-image"></div><div>BEAUTY</div></div>
                <div className="header-info">
                  <span>8 (812) 123-45-67</span>
                  <button type="button">Обратный звонок</button>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="wrapper">
              <div className="header-bottom">
                <ul className="navbar-list">
                  <li className="navbar-list__item"><a className="navbar-list__link" href="">Парикмахерская</a></li>
                  <li className="navbar-list__item"><a className="navbar-list__link" href="">Барбершоп</a></li>
                  <li className="navbar-list__item"><a className="navbar-list__link" href="">Маникюр</a></li>
                  <li className="navbar-list__item"><a className="navbar-list__link" href="">Педикюр</a></li>
                  <li className="navbar-list__item"><a className="navbar-list__link" href="">Массаж</a></li>
                  <li className="navbar-list__item"><a className="navbar-list__link" href="">Мебель</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="banner">
        <div className="wrapper">
          <h1 className="title">Супер кресло</h1>
          <p>Текст акции всегда отражает суть, а не просто болтовню, поэтому внимательнее</p>
          <a className='btn' href="#">Подробнее</a>
        </div>
      </section>
      </div>
    );
  }
}
