import React from "react";

import "./learnStyle.scss";
import Jen from './imges/img1.jpg';
import Jen2 from './imges/img2.jpg';
import Jen3 from './imges/img3.jpg';
import Valor from './imges/img4.jpg';
import Trap from './imges/product1.jpg';
import Trap2 from './imges/product2.jpg';
import Trap3 from './imges/product3.jpg';
import Trap4 from './imges/product4.jpg';

export class Page extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <header className="header">
          <a href="" className="header__logo"></a>
          <nav className="header__menu">
            <ul className="header__list">
              <li>
                <a href="" className="header__link">Пункт меню</a>
              </li>
              <li>
                <a href="" className="header__link">Пункт меню</a>
              </li>
              <li>
                <a href="" className="header__link">Пункт меню</a>
              </li>
              <li>
                <a href="" className="header__link">Пункт меню</a> 
              </li>
            </ul>
            <div className="header__burger">
              <span></span>
            </div>
          </nav>
        </header>
        {/* Контент (grid-element + grid-container) */}
        <main className="main">
          <aside className="sidebar">
            <nav className="sidebar__menu">
              <ul className="sidebar__list">
                <li>
                  <a href="" className="sidebar__link">Punkt menu</a>
                </li>
                <li>
                  <a href="" className="sidebar__link">Punkt menu</a>
                </li>
                <li>
                  <a href="" className="sidebar__link">Punkt menu</a>
                </li>
                <li>
                  <a href="" className="sidebar__link">Punkt menu</a>
                </li>
              </ul>
            </nav>
          </aside>
          <section className="content-section">
            <h1 className="content-section__title">Grid Layout praktika</h1>
              <section className="content-section__gallery gallery">
              <h2 className="gallery__title">Gallery</h2>
              <div className="gallery__items">
                <div className="gallery__item gallery__item_big">
                  <img src={Jen} alt="net"/>
                </div>
                <div className="gallery__item">
                  <img src={Jen2} alt="nte"/>
                </div>
                <div className="gallery__item">
                  <img src={Jen3} alt="net"/>
                </div>
                <div className="gallery__item gallery__item_big">
                  <img src={Jen3} alt="net"/>
                </div>
                <div className="gallery__item">
                  <img src={Valor} alt="net"/>
                </div>
                <div className="gallery__item">
                  <img src={Valor} alt="net"/>
                </div>
              </div>
              </section>
          <section className="content-section__products products">
                 <h2 className="products__title">Products</h2>
                 <div className="products__items">
                   <div className="products__item">
                     <a href="" className="products__image">
                       <img src={Trap} alt=""/>
                     </a>
                     <a href="" className="products__name">Just a Toy</a>
                     <a href="" className="products__button">Buy</a>
                   </div>
                   <div className="products__item">
                     <a href="" className="products__image">
                       <img src={Trap2} alt=""/>
                     </a>
                     <a href="" className="products__name">Just a Toy</a>
                     <a href="" className="products__button">Buy</a>
                   </div>
                   <div className="products__item">
                     <a href="" className="products__image">
                       <img src={Trap3} alt=""/>
                     </a>
                     <a href="" className="products__name">Just a Toy</a>
                     <a href="" className="products__button">Buy</a>
                   </div>
                   <div className="products__item">
                     <a href="" className="products__image">
                       <img src={Trap4} alt=""/>
                     </a>
                     <a href="" className="products__name"> Just a Toy</a>
                     <a href="" className="products__button">Buy</a>
                   </div>
                   <div className="products__item">
                     <a href="" className="products__image">
                       <img src={Trap3} alt=""/>
                     </a>
                     <a href="" className="products__name"> Just a Toy</a>
                     <a href="" className="products__button">Buy</a>
                   </div>
                   <div className="products__item">
                     <a href="" className="products__image">
                       <img src={Trap3} alt=""/>
                     </a>
                     <a href="" className="products__name">Just a Toy</a>
                     <a href="" className="products__button">Buy</a>
                   </div>
                 </div>
          </section>
          </section>
        </main>
        <footer className="footer">
          <div className="footer__copy">
            Vse prava sasheneji
          </div>
          <div className="footer__text">Lorem ipsum dolor sit amet.</div>
        </footer>
      </div>
    );
  }
}
