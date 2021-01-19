import React, { Component } from 'react';
import axios from 'axios';
import NavBar from '../../UI/NavBar/NavBar';
import Footer from '../Footer/Footer';
import GoogleBtn from '../GoogleButton/GoogleBtn';
import './Login.css';
import { Redirect } from 'react-router-dom';
class Login extends Component {
    state = {
        active: "login",
        signUpName:'',
        userEmail:'',
        checkEmail:'',
        password:'',
        signupRePass:'',
        notStrongPass:'',
        signUpReAlert:'',
        redirect:"",
        disabled:true,
        loggedIn:false

    }


        handleChange(event){
         
         this.setState({
             active:event
         })
     }

     userEmail = this.userEmail.bind(this);
     userPass = this.userPass.bind(this);
     userName=this.userName.bind(this);
     userRePass=this.userRePass.bind(this);
 
     userName(event){
       this.setState({
         signUpName:event.target.value
       })
     }
     userEmail(event){
        if(this.emailValidate(event.target.value)){
            this.setState({
                checkEmail:""
            })
            if(this.state.password.length!==0 && this.state.userEmail.length!==0 &&this.state.checkEmail.length===0 && this.state.notStrongPass.length===0){
                this.setState({
                    disabled:false
                })
            }
        }
        let email = this.state.userEmail
        
       this.setState({
         userEmail:event.target.value
       })
     }

    emailValidate(emailid){
        if (emailid===null && emailid.length===0) {

            this.setState({
                checkEmail:(<b className="text-danger font-weight-bold">Enter valid email</b>)
            })
            return false;
            
    
          }
    
      
    
          if (typeof emailid!== "undefined") {
    
              
    
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    
            if (!pattern.test(emailid)) {
    
                this.setState({
                    checkEmail:(<b className="text-danger font-weight-bold">Enter valid email</b>)
                })
                return false;
    
            }
            else
                return true;
    
          }
          else
            return true;
    }

     userRePass(event){
        this.setState({
            signupRePass:event.target.value
        })
        let pass= this.state.password
        let repass = this.state.signupRePass
        if(pass===repass)
            {
                this.setState({
                    signUpReAlert:"",
                    disabled:false
                })
                
            }
            else{
                this.setState({
                    signUpReAlert:(<b className="text-danger font-weight-bold">Password Doesn't match</b>)
            })
    }
      }

      

     userPass(event){
            if(this.isStrong(event.target.value)){
            this.setState({
                notStrongPass:''
            })
            
        }
        
       this.setState({
         password:event.target.value
       })
     }
     isStrong(password){
        let  decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if(password.match(decimal)) 
        { 
           
        return true;
        }
        else
        { 
           this.setState({
               notStrongPass:(<b className="text-danger font-weight-bold">Password Is not Strong, it should contain one lowercase letter, one uppercase letter, one numeric digit, and one special character</b>)
           })
        return false;
        }
     }
     

    
    
      loginUser(e){
          e.preventDefault();
          
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": true,
                    "Access-Control-Allow-Credentials": true,
                }
            };
            axios.post('http://localhost:8001/login',{
                email:this.state.userEmail,
                password:this.state.password
            },axiosConfig).then(resp=>{
                let data = [resp.data];
                localStorage.setItem("user",JSON.stringify(data));
                this.setState({loggedIn:true})
                
            }
                
            ).catch((error)=>{
                console.log("ERROR IN LOGIN IN")
            })
    
      }
      signUpUser(e){
            e.preventDefault();
            axios.post('http://localhost:8001/signup',{
                name:this.state.signUpName,
                email:this.state.userEmail,
                password:this.state.password
            },{
                withCredentials:true
            }).then(resp=>{ this.setState({loggedIn:true})}
            ).catch((error)=>{
                console.log("ERROR IN SIGNING UP")
            })
         
      }
    render() {
        let content = null;
        if (this.state.active === "login") {
            content = (<div className="row login-row">
                <div className="chrome-login col-12 ">
                    <GoogleBtn />
                </div>
                
                <div className="col-8 email-row text-muted">
                    or<br />
                    <div className="col-12 text-muted ">

                        <form>
                            <div className="form-group">
                                <label for="exampleInputEmail1 ">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.userEmail} onChange={this.userEmail} />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                {this.state.checkEmail}
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1 ">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} onChange={this.userPass} />
                            </div>

                            <button type="submit" className="btn btn-primary"  onClick={this.loginUser.bind(this)} >login</button>
                        </form>


                    </div>


                </div>
                
                

            </div>)
        }
        else if(this.state.active==="signup"){
            content= (<div className="row signup-row">
            <div className="chrome-login col-12 ">
                <GoogleBtn />
            </div>
            <div className="col-8 email-row text-muted">
                or<br />
                <div className="col-12 text-muted ">

                    <form>
                    <div className="form-group">
                            <label for="exampleInputName ">Name</label>
                            <input type="text" className="form-control" id="exampleInputName" aria-describedby="NameHelp" placeholder="Enter Name" value={this.state.signUpName} onChange={this.userName}/>
                            <small id="textHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1 ">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.userEmail} onChange={this.userEmail}/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            {this.state.checkEmail}
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1 ">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} onChange={this.userPass}/>
                            {this.state.notStrongPass}
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword2 ">Re-type Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword2" placeholder="RetypePassword" value={this.state.signupRePass} onChange={this.userRePass}/>
                            {this.state.signUpReAlert}
                        </div>

                        <button type="submit" disabled={this.state.disabled} className="btn btn-primary" onClick={this.signUpUser.bind(this)}>sign up</button>
                    </form>


                </div>


            </div>

        </div>)
        }
        let existing = localStorage.getItem("user");
        let redirect = null;
        if(existing!==null && existing.length!==0){
           redirect = (<Redirect to="/profile"/>)
        }

        return (<div className="LoginBox">
            {redirect}
            <NavBar />
            <div className="jumbotron bg-primary text-white">
                <div className=" login-container container">
                    <div className=" jumbo-row row">
                        <div className="col-12 align-self-center">
                            <h1>Unlock the unlimited service.</h1>
                        </div>
                    </div>

                </div>
            </div>
            
            <div className="LoginSignUp">
                <div className="login-signup-container container">
                    <div className="login-signup-row row">
                        <div className="col-12 ">
                            <div className="login-sign-up-card card">
                                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                    <label className="btn btn-primary" onClick={()=>{this.handleChange("login")}} >
                                        <input type="radio" name="login" id="option1" autoComplete="off"  /> Login
                        </label>
                                    <label className="btn btn-primary" onClick={()=>{this.handleChange("signup")}} >
                                        <input type="radio" name="signin" id="option2" autoComplete="off"  /> Sign Up
                        </label>
                                </div>
                                <div className="col-12">
                                    {content}
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <Footer />

        </div>)
    }
}
export default Login;