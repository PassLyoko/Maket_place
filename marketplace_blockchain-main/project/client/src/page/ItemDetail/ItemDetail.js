import React from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './index.css';

export default class PersonList extends React.Component {

state = {
    item: ''
  }

  componentDidMount() {
    const itemaddress = window.location.pathname.substr(15)
    // this.setState({ itemaddress });
    axios.get(`http://localhost:5000/api/products/productdetail/${itemaddress}`)
      .then(res => {
        const item = res.data;
        this.setState({ item });
      })
      .catch(error => console.log(error));
  }

  handclickbuy(){
    const itemaddress = window.location.pathname.substr(15)
    axios.post(`http://localhost:5000/api/products/postBuyProduct/${itemaddress}`)
    .catch(error => console.log(error));
  }

  render() {
    return (
        <>
        <div className='fix__container'>
          <p className = "list-item__title">Product Detail</p>       
        </div> 
        <div className='detail__title-products'>
          <div className='detail__right'>
            <div className='right'>
              <img className='fix_right-img' src={this.state.item.urlImage}/>
            </div>
           </div>
          <div className='detail__left'>
            <div  className='left'>
              <h2>{this.state.item.nameProuct}</h2>
              <h4>Address Item: {this.state.item.addressItem}</h4>
              <h4>Sold By: <br></br> {this.state.item.addressCreator}</h4>
              <div className='status'>
                <span className='color__detail'>Color:</span>
                <ul className='color__detail-list'>
                  <li className='color__red'>+</li>
                  <li className='color__black'>+</li>
                  <li className='color__green'>+</li>
                  <li className='color__pink'>+</li>
                  <li className='color__yellow'>+</li>
                  <li className='color__primary'>+</li>
                </ul>
              </div>
              <div className='statuss'>
                <span className='color__detail'>Size:</span>
                <ul className='size__detail-list'>
                  <li className='size__details'>38</li>
                  <li className='size__details'>39</li>
                  <li className='size__details'>40</li>
                  <li className='size__details'>41</li>
                  <li className='size__details'>42</li>
                  <li className='size__details'>+</li>
                </ul>
              </div>
              <div className='btn__detail'>
              <button className='btn' type="submit" onClick={this.handclickbuy}>Buy</button>
              <h2 className='eth__detail'>{this.state.item.price/1000000000000000000} ETH</h2>
              <p className='eth__detail_old'>100 ETH</p>
              </div> 
            </div> 
        </div>
        </div>  
      </>
    )
  }
}