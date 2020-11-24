import React, { Component } from "react";
import axios from 'axios'
import api from '../ApiService.js'

class ProcessPanel extends Component {
    onSubmit = (e)=>{
        e.preventDefault()
        api.post('/facebooks/post',{
            params:{
                ...this.state
            }
        }).then(res=>{
            console.log(res.data)
            if(res.data.result == true)
            {
                alert("success")
            }
            this.setState({})
        })
    }
    onChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val},()=>{
            console.log(this.state)
        });

      }
    render(){
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="name" onChange={this.onChange} placeholder="name" required/>
                    <input type="text" name="image" onChange={this.onChange}  placeholder="imageurl" required/>
                    <input type="text" name="location" onChange={this.onChange}  placeholder="location" required/>
                    <input type="number" name="price" onChange={this.onChange}  placeholder="price" required/>
                    <input type="date" name="date" onChange={this.onChange}  placeholder="publishdate" required/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}
export default ProcessPanel