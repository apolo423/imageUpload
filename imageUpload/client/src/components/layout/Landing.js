import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import api from '../ApiService.js'

class Landing extends Component {
  state={
    products:[]
  }
  componentDidMount(){
    api.get('/facebooks/get',{
      params:{
        token:"3vjelxmei@jdifeialkjcia34asldf0-3kjlsdkj92l-aod=2g6+39kzcvhgrg9jdh3idjsl2"
      }
    })
    .then(res=>{
      console.log(res.data)
      this.setState({
        products:res.data.products
      })
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
            
            {
              //https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/p720x720/126850870_2743224212596781_7796334578218705964_o.jpg?_nc_cat=102&ccb=2&_nc_sid=843cd7&_nc_ohc=Skg4It8Gz7MAX-31-5K&_nc_ht=scontent-arn2-1.xx&tp=6&oh=d16085c07110457f47a7ac7f0c1eb9bb&oe=5FE3CE13
              this.state.products.map((item,index)=>{
                return(
                  <div className="col md-3" key={index}  style={{border:'1px solid blue',margin:'10px',padding:'10px'}}>
                    <img src={item.image} style={{width:'300px',height:'300px'}}></img>
                    <div>name:{item.name}</div>
                    <div>price:{item.price}</div>
                    <div>location:{item.location}</div>
                    <div>date:{item.date}</div>

                  </div>
                )
              })
            }

            {/* <h4>
              <span style={{ fontFamily: "monospace" }}>White</span> panda
            </h4>
            <p className="flow-text grey-text text-darken-1">
              Assignment
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div> */}
          
        </div>
      </div>
    );
  }
}

export default Landing;
