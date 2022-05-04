import React, { Component } from "react";
import '../MainSystem/MainSystem.css';
// import facebook  from '../MainSystem/system_img/Facebook.png';
// import instagram  from '../MainSystem/system_img/Instargram.png';
// import youtube  from '../MainSystem/system_img/Youtube.png';
import layer1  from '../MainSystem/system_img/blazer1.jpg';
import layer2  from '../MainSystem/system_img/atay.jpg';
import layer3  from '../MainSystem/system_img/fullBlazer.jpg';
import layer4  from '../MainSystem/system_img/fullBlazers1.jpg';
import s5  from '../MainSystem/system_img/sbdunk5.webp';
import s6  from '../MainSystem/system_img/sbdunk3.webp';
import s7  from '../MainSystem/system_img/sbdunk7.webp';
import s8  from '../MainSystem/system_img/sbdunk8.webp';
import bannerS1  from '../MainSystem/system_img/ethereum.jpg';
import bannerbig1  from '../MainSystem/system_img/banners2s.jpg';
import bannerbig2  from '../MainSystem/system_img/banners2s-3.jpg';


class MainSystem extends Component {

  render() {
    return (
      < >
        <div class="welcome__halovi">
          <div class="title__halovi">
          Welcome To HALOVI MARKET
          </div>
        </div>
        <div class="bannerS1">
          <div class="banner__resize">
            <img src={bannerS1} class="fix_banner"></img>
            <div className="view__main">
            <a href="#" class="button">View</a>
            </div>
          </div>    
        </div>
        <div class="baners2">
          <div class="title__baners2">
          YOU'RE HERE FOR A REASON
          </div>
          <div className="view__banner">
            <a href="#" class="button">View</a>
          </div>
        </div>
        <div class="sale__cards">
        <div class="sale__card">
          <div class="sale__card-item">
            <img src={layer1}
             alt="Sb Dunk low version2.0" 
             class="card__fix_img">
            </img>
            <div class="sale__card-content">
              <h3 class="sale__content-title">BLAZER COTTON COAT</h3>
              <span class="sale__content-des">We tag Join Life on garments made with technologies and materials that help us</span>              
            <div class="sale__btn">
            <button class="content__buyer">
              <a href="#" class="btn_buyer">Buy</a>
            </button>
              <span class= "content__price-old">200 ETH</span>
              <span class= "content__price">20 ETH</span>
            </div>
            </div>
            </div>
        </div>
        <div class="sale__card">
          <div class="sale__card-item">
            <img src={layer2}
             alt="Sb Dunk low version2.0" 
             class="card__fix_img">
            </img>
            <div class="sale__card-content">
              <h3 class="sale__content-title">CHECKERED BLAZER COAT</h3>
              <span class="sale__content-des">We tag Join Life on garments made with technologies and materials that help us</span>              
            <div class="sale__btn">
            <button class="content__buyer">
              <a href="#" class="btn_buyer">Buy</a>
            </button>
              <span class= "content__price-old">200 ETH</span>
              <span class= "content__price">20 ETH</span>
            </div>
            </div>
            </div>
        </div>
        <div class="sale__card">
          <div class="sale__card-item">
            <img src={layer3}
             alt="Sb Dunk low version2.0" 
             class="card__fix_img">
            </img>
            <div class="sale__card-content">
              <h3 class="sale__content-title">BLAZER COTTON COAT</h3>
              <span class="sale__content-des">We tag Join Life on garments made with technologies and materials that help us</span>              
            <div class="sale__btn">
            <button class="content__buyer">
              <a href="#" class="btn_buyer">Buy</a>
            </button>
              <span class= "content__price-old">200 ETH</span>
              <span class= "content__price">20 ETH</span>
            </div>
            </div>
            </div>
        </div>
        <div class="sale__card">
          <div class="sale__card-item">
            <img src={layer4}
             alt="Sb Dunk low version2.0" 
             class="card__fix_img">
            </img>
            <div class="sale__card-content">
              <h3 class="sale__content-title">FABRIC BLAZER COTTON</h3>
              <span class="sale__content-des">We tag Join Life on garments made with technologies and materials that help us </span>              
            <div class="sale__btn">
            <button class="content__buyer">
              <a href="#" class="btn_buyer">Buy</a>
            </button>
              <span class= "content__price-old">200 ETH</span>
              <span class= "content__price">20 ETH</span>
            </div>
            </div>
            </div>
        </div>
        </div>
        <div class="baners2">
          <div class="title__baners2">
          GO IS A BIG FEELING
          </div>
          <div className="view__banner">
            <a href="#" class="button">View</a>
          </div>
        </div>
        <div class="double__banner">
          <div class="banner__bigs1">
            <img src={bannerbig1} class="fix_bigs1"></img>
            <div className="view__bigs">
              <a href="#" class="button">View</a>
            </div>
          </div>
          <div class="banner__bigs2">
          <img src={bannerbig2} class="fix_bigs2"></img>
            <div className="view__bigs">
              <a href="#" class="button">View</a>
            </div>
          </div>
        </div>
        <div class="Sales__Winters">
          <div class="title">
          New Collection Autumn Winter
          </div>
          <div className="view__collectionss">
            <a href="#" class="button">View</a>
          </div>
        </div>
        <div class="sale__cards">
        <div class="sale__card">
          <div class="sale__card-item">
            <img src={s5}
             alt="Sb Dunk low version2.0" 
             class="card__fix_img">
            </img>
            <div class="sale__card-content">
              <h3 class="sale__content-title">SB Dunk Low Collab Detailed Look | HYPEBEAST</h3>
              <span class="sale__content-des">Sb Dunk Low to have running enything Fan of ice cream? Who's not. Nike</span>              
            <div class="sale__btn">
            <button class="content__buyer">
              <a href="#" class="btn_buyer">Buy</a>
            </button>
              <span class= "content__price-old">200 ETH</span>
              <span class= "content__price">20 ETH</span>
            </div>
            </div>
            </div>
        </div>
        <div class="sale__card">
          <div class="sale__card-item">
            <img src={s6}
             alt="Sb Dunk low version2.0" 
             class="card__fix_img">
            </img>
            <div class="sale__card-content">
              <h3 class="sale__content-title">Sb Dunk  x parra Y OBTENGA UN 70% DE DESCUENTO</h3>
              <span class="sale__content-des">Sb Dunk Low to have running enything Fan of ice cream? Who's not. Nike</span>              
            <div class="sale__btn">
            <button class="content__buyer">
              <a href="#" class="btn_buyer">Buy</a>
            </button>
              <span class= "content__price-old">200 ETH</span>
              <span class= "content__price">20 ETH</span>
            </div>
            </div>
            </div>
        </div>
        <div class="sale__card">
          <div class="sale__card-item">
            <img src={s7}
             alt="Sb Dunk low version2.0" 
             class="card__fix_img">
            </img>
            <div class="sale__card-content">
              <h3 class="sale__content-title">Off-White Nike Dunk Low Pine Green </h3>
              <span class="sale__content-des">Sb Dunk Low to have running enything Fan of ice cream? Who's not. Nike</span>              
            <div class="sale__btn">
            <button class="content__buyer">
              <a href="#" class="btn_buyer">Buy</a>
            </button>
              <span class= "content__price-old">200 ETH</span>
              <span class= "content__price">20 ETH</span>
            </div>
            </div>
            </div>
        </div>
        <div class="sale__card">
          <div class="sale__card-item">
            <img src={s8}
             alt="Sb Dunk low version2.0" 
             class="card__fix_img">
            </img>
            <div class="sale__card-content">
              <h3 class="sale__content-title">Dunk Low 'Nike x Off-White' Release Date. Nike SNKRS VN</h3>
              <span class="sale__content-des">Sb Dunk Low to have running enything Fan of ice cream? Who's not. Nike</span>              
            <div class="sale__btn">
            <button class="content__buyer">
              <a href="#" class="btn_buyer">Buy</a>
            </button>
              <span class= "content__price-old">200 ETH</span>
              <span class= "content__price">20 ETH</span>
            </div>
            </div>
            </div>
        </div>
        </div>
        <div class="We__mores">
          <div class="title">
          All Collecting
          </div>
          <div className="view__collectings">
            <a href="#" class="button">View</a>
          </div>
        </div>
        <div class="We__All">
          <div class="title">
          we are glad to be of service you, solve your difficulties, is make our pride.
          </div>
          <div class="list__collection">
                <ul class="research">
                   <span class="Origin"> Research</span>
                  <li>Vapormax</li>
                  <li>Air Force 1</li>
                  <li>Huarache</li>
                  <li>Air Max 90</li>
                  <li>Air Max 95</li>
                  <li>Jordan Low</li>
                  <li>Jordan Hight</li>
                  <li>Jordan Mid</li>
                  <li>SB Dunk low</li>
                  <li>SB Dunk Hight</li>
                  <li>SB Dunk Mid</li>
                </ul>
                <ul class="research">
                   <span class="Origins"> Shoes</span>
                  <li>All Shoes</li>
                  <li>Custom Shoes</li>
                  <li>Jordan Shoes</li>
                  <li>Running Shoes</li>
                  <li>Basketball Shoes</li>
                  <li>Football Shoes</li>
                  <li>Gym & Training Shoes</li>
                  <li>Lifestyle Shoes</li>
                </ul>
                <ul class="research">
                   <span class="Originso"> Clothing</span>
                  <li>All Clothing</li>
                  <li>Modest Wear</li>
                  <li>Hoodies</li>
                  <li>Pullovers</li>
                  <li>Shirts & Tops</li>
                  <li>Jackets</li>
                  <li>Compression </li>
                  <li>Nike Pro</li>
                  <li>Trousers </li>
                  <li>Leggings</li>
                  <li>Shorts</li>
                </ul>
                <ul class="research">
                   <span class="Originsos"> Kids'</span>
                  <li>Infant</li>
                  <li>Toddler Shoes</li>
                  <li>Kids' Shoes</li>
                  <li>Kids' Jordan Shoes</li>
                  <li>Kids' Basketball Shoes</li>
                  <li>Kids' Running Shoes</li>
                  <li>Kids' Clothing</li>
                  <li>Kids' Backpacks</li>
                  <li>Kids' Socks</li>
                  <li>SB Dunk low</li>
                  <li>SB Dunk Hight</li>
                  <li>SB Dunk Mid</li>
                </ul>
          </div>
        </div>
      </>
    );
  }
}

export default MainSystem;