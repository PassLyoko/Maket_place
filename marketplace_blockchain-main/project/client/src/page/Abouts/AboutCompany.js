import React, { Component } from "react";
// import ItemManagerContract from "../../contracts/ItemManager.json";
// import ItemContract from "../../contracts/Item.json";
// import getWeb3 from "../../getWeb3";
// import axios from "axios";
// import { ToastContainer, toast } from 'react-toastify';
import nike  from '../Abouts/imgAbout/nike.png';
import adidas  from '../Abouts/imgAbout/adidas.png';
import Chanel  from '../Abouts/imgAbout/Chanel.png';
import Hermes  from '../Abouts/imgAbout/Hermes.png';
import Gucci  from '../Abouts/imgAbout/Gucci.png';
import LouisVuitton  from '../Abouts/imgAbout/lv.png';
import Prada  from '../Abouts/imgAbout/Prada.png';
import Dior  from '../Abouts/imgAbout/Dior.png';
import Burberry  from '../Abouts/imgAbout/Burberry.png';
import FENDI  from '../Abouts/imgAbout/FENDI.png';
import Versace  from '../Abouts/imgAbout/Versace.png';
import Zara  from '../Abouts/imgAbout/Zara.png';
import hauIma  from '../Abouts/imgAbout/hauth.png';
import locIma  from '../Abouts/imgAbout/loc.png';
import doIma  from '../Abouts/imgAbout/dosinh.png';
import viIma  from '../Abouts/imgAbout/vi.png';
import facebook  from '../Abouts/imgAbout/Facebook.png';
import instagram  from '../Abouts/imgAbout/Instargram.png';
import youtube  from '../Abouts/imgAbout/Youtube.png';

import './about.css';

class AboutCompany extends Component {

  render() {
    return (
      < >

        <div class="wrappers">
          <div class="title">
          About The Company Team
          </div>
          <ul className="about__detail">
            <li className="about__me">Founding Day</li>
            <li className="about__me"><a href="#Co-Founder" class="Scoll_Sponsor">Co-Founder</a></li>
            <li className="about__me"><a href="#Development__Team" class="Scoll_Sponsor">Development Team</a></li>
            <li className="about__me"><a href="#Sponsor" class="Scoll_Sponsor">Sponsor</a></li>
          </ul>
        </div>
        <div class="Co-Founder" id="Co-Founder">
          <div class="title">
          Co-Founder
          </div>
          <div className="Founder__member">
            <div class="member__item">
              <div class="member__item-avata">
                <div class="member__item-avata-x2">
                  <img src={hauIma} class="fix_hauIma"></img>
                </div>
              </div>
              <span class="member__item-age">21 Age</span>
              <span class="member__item-name">Thành Hậu</span>
              <span class="member__item-title">COO</span>
            </div>
            <div class="member__item">
              <div class="member__item-avata">
                <div class="member__item-avata-x2">
                <img src={doIma} class="fix_doIma"></img>
                </div>
              </div>
              <span class="member__item-age">** Age</span>
              <span class="member__item-name">Đỗ Sính ~Peter Do~</span>
              <span class="member__item-title">CEO</span>
            </div>
            <div class="member__item">
              <div class="member__item-avata">
                <div class="member__item-avata-x2">
                  <img src={locIma} class="fix_locIma"></img>
                </div>
              </div>
              <span class="member__item-age">21 Age</span>
              <span class="member__item-name">Văn Lộc ~Enzo LT~</span>
              <span class="member__item-title">CMO</span>
            </div>
            <div class="member__item">
              <div class="member__item-avata">
                <div class="member__item-avata-x2">
                <img src={viIma} class="fix_viIma"></img>
                </div>
              </div>
              <span class="member__item-age">21 Age</span>
              <span class="member__item-name">Diền Vĩ</span>
              <span class="member__item-title">CLO</span>
            </div>
          </div>
        </div>
        <div class="Sponsor">
          <div class="title" id="Sponsor">
          Sponsor
          </div>
          <div className="Sponsor__member" >
            <div class="Sponsor__item">
              <div class="Sponsor__item-avata">
                <div class="Sponsor__item-avata-x2">
                  <img src={nike} class="fix__img-nike"></img>
                </div>
              </div>
              <span class="Sponsor__item-name">Nike</span>
            </div>
            <div class="Sponsor__item">
              <div class="Sponsor__item-avata">
                <div class="Sponsor__item-avata-x2">
                <img src={adidas} class="fix__img-adidas"></img>
                </div>
              </div>
              <span class="Sponsor__item-name">Adidas</span>
            </div>
            <div class="Sponsor__item">
              <div class="Sponsor__item-avata">
                <div class="Sponsor__item-avata-x2">
                <img src={Chanel} class="fix__img-chanel"></img>
                </div>
              </div>
              <span class="Sponsor__item-name">Chanel</span>
            </div>
            <div class="Sponsor__item">
              <div class="Sponsor__item-avata">
                <div class="Sponsor__item-avata-x2">
                  <img src={Hermes} class="fix__img-hermes"></img>
                </div>
              </div>
              <span class="Sponsor__item-name">Hermès</span>
            </div>
          </div>
          <div className="Sponsor__member">
            <div class="Sponsor__item">
              <div class="Sponsor__item-avata">
                <div class="Sponsor__item-avata-x2">
                <img src={Gucci} class="fix__img-gucci"></img>
                </div>
              </div>
              <span class="Sponsor__item-name">Gucci</span>
            </div>
            <div class="Sponsor__item">
              <div class="Sponsor__item-avata">
                <div class="Sponsor__item-avata-x2">
                <img src={LouisVuitton} class="fix__img-Louis_Vuitton"></img>
                </div>
              </div>
              <span class="Sponsor__item-name">Louis Vuitton</span>
            </div>
            <div class="Sponsor__item">
              <div class="Sponsor__item-avata">
                <div class="Sponsor__item-avata-x2">
                <img src={Prada} class="fix__img-Prada"></img>
                </div>
              </div>
              <span class="Sponsor__item-name">Prada</span>
            </div>
            <div class="Sponsor__item">
              <div class="Sponsor__item-avata">
                <div class="Sponsor__item-avata-x2">
                <img src={Dior} class="fix__img-Dior"></img>
                </div>
              </div>
              <span class="Sponsor__item-name">Dior</span>
            </div>
          </div>
          <div className="Sponsor__member">
            <div class="Sponsor__item">
              <div class="Sponsor__item-avata">
                <div class="Sponsor__item-avata-x2">
                <img src={Burberry} class="fix__img-Burberry"></img>
                </div>
              </div>
              <span class="Sponsor__item-name">Burberry</span>
            </div>
            <div class="Sponsor__item">
              <div class="Sponsor__item-avata">
                <div class="Sponsor__item-avata-x2">
                <img src={FENDI} class="fix__img-FENDI"></img>
                </div>
              </div>
              <span class="Sponsor__item-name">FENDI</span>
            </div>
            <div class="Sponsor__item">
              <div class="Sponsor__item-avata">
                <div class="Sponsor__item-avata-x2">
                <img src={Versace} class="fix__img-Versace"></img>
                </div>
              </div>
              <span class="Sponsor__item-name">Versace</span>
            </div>
            <div class="Sponsor__item">
              <div class="Sponsor__item-avata">
                <div class="Sponsor__item-avata-x2">
                <img src={Zara} class="fix__img-Zara"></img>
                </div>
              </div>
              <span class="Sponsor__item-name">Zara</span>
            </div>
          </div>
        </div>
        <div class="Development__Team" id="Development__Team">
          <div class="title">
          Development Team
          </div>
          <div className="Development__Team__member">
            <div class="Development__Team__item">
              <div class="Development__Team__item-avata">
                <div class="Development__Team__item-avata-x2">
                <img src={hauIma} class="fix_hauImas"></img>
                </div>
              </div>
              <span class="Development__Team__item-age">21 Age</span>
              <span class="Development__Team__item-name">Thành Hậu</span>
              <span class="Development__Team__item-title">COO</span>
            </div>
            <div class="Development__Team__item">
              <div class="Development__Team__item-avata">
                <div class="Development__Team__item-avata-x2">
                <img src={doIma} class="fix_doImas"></img>
                </div>
              </div>
              <span class="Development__Team__item-age">** Age</span>
              <span class="Development__Team__item-name">Đỗ Sính ~Peter Do~</span>
              <span class="Development__Team__item-title">CEO</span>
            </div>
            <div class="Development__Team__item">
              <div class="Development__Team__item-avata">
                <div class="Development__Team__item-avata-x2">
                <img src={locIma} class="fix_locImas"></img>
                </div>
              </div>
              <span class="Development__Team__item-age">21 Age</span>
              <span class="Development__Team__item-name">Văn Lộc ~Enzo LT~</span>
              <span class="Development__Team__item-title">CMO</span>
            </div>
            <div class="Development__Team__item">
              <div class="Development__Team__item-avata">
                <div class="Development__Team__item-avata-x2">
                <img src={viIma} class="fix_viImas"></img>
                </div>
              </div>
              <span class="Development__Team__item-age">21 Age</span>
              <span class="Development__Team__item-name">Điền Vĩ</span>
              <span class="Development__Team__item-title">CLO</span>
            </div>
          </div>
        </div>

      </>
    );
  }
}


export default AboutCompany;
