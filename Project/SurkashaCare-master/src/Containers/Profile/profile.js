import React, { Component } from 'react';
import NavBar from '../../UI/NavBar/NavBar';
import Footer from '../Footer/Footer';
import HistoryCard from './HistoryCards/HistoryCards';
import { Redirect } from 'react-router-dom';
import './profile.css';
class Profile extends Component {
    state = {
        name: "",
        email: "",
        history: null,
        redirect:null
    }
    componentWillMount() {
        let user = JSON.parse(localStorage.getItem("user"))[0];
        this.setState({
            name: user["name"],
            email: user["email"],
            history: user["history"]
        })
    }
    async logoutUser(){
            let new_user = []
            localStorage.setItem("user",JSON.stringify(new_user));
            this.setState({
                redirect:(<Redirect to="/"/>)
            })
            
    }
    render() {
        
        return (<div>
            {this.state.redirect};
            <NavBar />
            <div className="jumbotron box bg-primary text-white ">
                <div className="container container-box">
                    <div className="row row-header">
                        <div className="col-12 order-1 align-self-center">
                            <h1>Your Personal Details</h1>
                        </div>

                    </div>

                </div>

            </div>
            <div className="container main-info">
                <div className="row">
                    <div class=" col-sm-12 col-md-4 col-lg-4">
                        <div class="well profile">
                            <div class="col-sm-12">
                                <div class="col-xs-12 col-sm-4 text-center">
                                    <figure>
                                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" className="img-circle img-responsive" />

                                    </figure>
                                </div>
                                <div class="col-xs-12 col-sm-10">
                                    <h2>{this.state.name}</h2>
                                    <p><strong>Your personal information</strong></p>
                                    <p><strong>email:</strong> {this.state.email}</p>
                                    <button className="btn bg-primary logout-button text-white p-2 m-2" onClick={()=>{this.logoutUser()}}><strong>Logout</strong></button>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="col-8">
                        {this.state.history.map(bill=>(<HistoryCard bill={bill}></HistoryCard>))}
                    </div>
                </div>

            </div>
            <Footer />


        </div>)
    }
}

export default Profile;