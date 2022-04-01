import React, { Component } from 'react'
import './orderNow.css'
import {Link} from 'react-router-dom';
export default class orderNow extends Component {
  render() {
    return (
      <>
         <div className="cont-wrapper">
        <div className="container">
        <h1>Shipping</h1>
        <p>Please enter your shipping details.</p>
        <hr />
        <div className="form">
          <div className="fields fields--2">
            <label className="field">
              <span className="field__label" htmlFor="firstname">First name</span>
              <input className="field__input" type="text" id="firstname"   />
            </label>
            <label className="field">
              <span className="field__label" htmlFor="lastname">Last name</span>
              <input className="field__input" type="text" id="lastname"   />
            </label>
          </div>
          <label className="field">
            <span className="field__label" htmlFor="address">Address</span>
            <input className="field__input" type="text" id="address" />
          </label>
          <label className="field">
            <span className="field__label" htmlFor="country">Country</span>
            <select className="field__input" id="country">
              <option value />
              <option value="unitedstates">India</option>
            </select>
          </label>
          <div className="fields fields--3">
            <label className="field">
              <span className="field__label" htmlFor="zipcode">Zip code</span>
              <input className="field__input" type="text" id="zipcode" />
            </label>
            <label className="field">
              <span className="field__label" htmlFor="city">City</span>
              <input className="field__input" type="text" id="city" />
            </label>
          </div>
        </div>
        <hr />
        <a style={{textDecoration:'none'}} href="https://rzp.io/l/FG2Bf6o5m"> <button className="button">Continue</button></a>
      </div>
      <h4> <Link style={{textDecoration:'none', color:'brown'}} to='/'> --back </Link></h4>
      </div>
      </>
    )
  }
}
