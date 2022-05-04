import Item from './Item';
import React, { Component, useState, useEffect } from "react";
import './itemStyle.css';

export default function ListItem(props){
    return (
      <>
      <div className='fix__container'>
        <p className = "list-item__title">List Present</p>              
      </div>
          <div id="list" className="container">
            {props.listItems.map(item =>  (
              <Item 
                account = {props.account}
                handCLickPaid = {props.handCLickPaid} 
                item = {item} 
                key={item.index}
                handCLickDelivered = {props.handCLickDelivered}
              />
             ))}
          </div>
      </>
        
    )
}