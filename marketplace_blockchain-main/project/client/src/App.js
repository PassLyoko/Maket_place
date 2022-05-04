import React, {useState, useEffect}from "react";

import HomePage from "./page/home/Home";
import CreateProduct from "./page/create_product/CreateProduct";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import FormLoginRegister from "./page/form/FormLoginRegister";
import NotFound from "./components/NotFound";
import Header from "./components/header/index";

import Navbar from "./components/Navbar/Navbar";
import UserPage from "./page/user/UserPage";
import Sales from "./page/Sales/Sales";
import AboutCompany from "./page/Abouts/AboutCompany";
import DashboardPage from "./page/dashboard/Dashboard";
import ItemDetail from "./page/ItemDetail/ItemDetail";
import MainSystem from "./page/MainSystem/MainSystem";
import facebook  from '../src/Img/Facebook.png';
import instagram  from '../src/Img/Instargram.png';
import youtube  from '../src/Img/Youtube.png';

import getWeb3 from "./getWeb3";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
  useHistory 
} from "react-router-dom";

import "./App.css";
// import AboutCompany from "./page/Abouts/AboutCompany";
// import Sales from './page/Sales/Sales';
// import mainSystem from './page/mainSystem/mainSystem';

function App() {
  const [addressUser, setAddressUser]= useState();
  const [isLoading, setIsLoading]= useState(false);

  const [success, setIsSuccess] = useState(false);
  const [web3, setWeb3] = useState();

  const getAddress = async ()=>{
    const _web3 = await getWeb3();
    const accounts = await _web3.eth.getAccounts();
    setAddressUser(accounts[0]);
    setWeb3(_web3);
  }

  const handleChangeLogin = (value)=>{
    setIsLoading(value);
  }
  
  let history = useHistory();

  useEffect(() => {
    getAddress();
    setIsLoading(!isLoading);
  },[web3])

  const handleClickSuccess = () => {
    console.log("Click success")
    setIsSuccess(!success);
  }

  return (
    <> 
      {isLoading ? 
        <div className ="loading">
          <div className="ring"></div>
        </div> 
        :<></>
      }
      <ToastContainer />
      <Router>
        <Navbar web3={web3 && web3} addressUser={addressUser} success = {success} handleClickSuccess = {handleClickSuccess}></Navbar>

        <Switch>
          <Route exact path="/" render = {()=>{
            return localStorage.getItem("accessToken") 
            ? <HomePage 
              web3={web3 && web3} 
              addressUser={addressUser} 
              success={success} 
              handleClickSuccess={handleClickSuccess}
              handleChangeLogin = {handleChangeLogin} 
              isLoading = {isLoading}
            /> : <Redirect to="/login"/>
          }} >
          </Route>

          <Route exact path="/login" 
            render = {()=>{
              return localStorage.getItem("accessToken") ? <Redirect to="/"/> : <FormLoginRegister handleChangeLogin = {handleChangeLogin} addressUser={addressUser} isLoading = {isLoading} handleClickSuccess={handleClickSuccess}/>
            }}
          >
          </Route>

          <Route exact path="/createProduct">
            <CreateProduct handleChangeLogin = {handleChangeLogin} addressUser={addressUser} isLoading = {isLoading}/>
          </Route>

          <Route exact path='/dashboard' render = {()=>{
              return <DashboardPage web3={web3 && web3} addressUser={addressUser}/>
            }}></Route>
          
          <Route exact path='/user/:userId' render={()=>{
            return <UserPage _web3={web3 && web3} handleChangeLogin = {handleChangeLogin} addressUser={addressUser} isLoading = {isLoading}></UserPage>
          }} />

          <Route exact path="/productdetail/:addressItem" render={()=>{
            return <ItemDetail web3={web3 && web3}/>
          }}></Route>

          <Route exact path="/Sales" render={()=>{
            return <Sales/>
          }}></Route>
   
          <Route exact path="/AboutCompany" render={()=>{
            return <AboutCompany/>
          }}></Route>

          <Route exact path="/MainSystem" render={()=>{
            return <MainSystem/>
          }}></Route>

          <Route path="/404">
            <NotFound />
          </Route>

          <Route exact path="*">
            <Redirect from="/" to="/404" />
          </Route>
        </Switch>
      </Router>
      <footer class="Footer">
          <div class="list__collections">
                <ul class="research">
                   <span class="Services"> Services</span>
                  <li>Web design</li>
                  <li>Development</li>
                  <li>Hosting</li>
                </ul>
                <ul class="research">
                   <span class="Help"> GET HELP</span>
                  <li>Order Status</li>
                  <li>Delivery</li>
                  <li>Returns</li>
                  <li>Contact Us</li>
                </ul>
                <ul class="research">
                   <span class="Halovi"> ABOUT HALOVI</span>
                  <li>News</li>
                  <li>Careers</li>
                  <li>Investors</li>
                  <li>Sustainability</li>
                </ul>
                <ul class="Media_Social">
                   <span class="social">Social'Media</span>
                    <div class="social_list">
                    <div class="social_fa">
                      <img src={facebook} class="fix_fa"></img>
                    </div>
                    <div class="social_in">
                    <img src={instagram} class="fix_in"></img>
                    </div>
                    <div class="social_yu">
                    <img src={youtube}  class="fix_yu"></img>
                    </div>
                    </div>
                </ul>
          </div>
          <p class="Footer_Co-Founder">Copyright @2022 | Designed With by <a href="https://www.youtube.com/channel/UC3eeRJ-JcaCTb-EgkkdO0Qw" class="enzo">~Enzo LT~ Your Company HALOVI MARKET</a></p>
      </footer>
    </>
  );
}


export default App;
