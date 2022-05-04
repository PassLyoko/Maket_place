import {useState} from 'react';
import React from "react";
import { Link, useHistory } from "react-router-dom";
// import facebook  from '../item/img_product/Facebook.png';
// import instagram  from '../item/img_product/Instargram.png';
// import youtube  from '../item/img_product/Youtube.png';

export default function ListItem(props){
    const [step, setStep] = useState(props.item.step);

    function convertStep(step){
        let str = '';
        switch (step){
            case '1': 
                str = 'Paided';
                break;
            case '2': 
                str = 'Delivered'
                break;
            default:
                str = 'Create';
                break;
        }
        return str;
    }
    function checkStep(){
        if(convertStep(step) === "Create") return true;
        return false;
    }
    function checkAccountBuy(){
        if(props.item.ownerAddress === props.account) return true;
        return false;
    }
    console.log(checkAccountBuy());

    return (

        <>
        <Link to={"/productdetail/" + props.item.addressItem}>
            <div className="card">
                <div className="card-header">
                    <img src={props.item.urlImage} alt="rover" />
                </div>
              
                <div className="card-body">
                    <h4 className="product-name">{props.item.identifier}</h4>
                        <div className="product__address">
                            <p className="product-address--content">addressProduct:</p>
                            <p className="product-address">{props.item.addressItem}</p>
                            <p className="product-address--content">addressCreater:</p>
                            <p className="product-address">{props.item.ownerAddress}</p>
                        </div>

                  {checkStep() && !checkAccountBuy()? 
                  <div className="btn-action">
                      <button onClick={()=> props.handCLickPaid(props.item)} className="item-paid--btn"> Buy </button>
                      <p className="product-price">{props.item.price} ETH</p>
                  </div>
                    : ''}
                    <div className='btn-action-create'>
                    <p className="product-prices">{convertStep(step)}</p>
                    </div>
              </div>
            </div>
            </Link>
        </>

    )
    
}