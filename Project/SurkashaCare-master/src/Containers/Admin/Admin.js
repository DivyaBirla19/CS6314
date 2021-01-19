import React, { Component } from 'react';
import Navbar from '../../UI/NavBar/NavBar';
import Footer from '../../Containers/Footer/Footer';
import AdminCards from './AdminCards/AdminCards';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import EditForm from './EditForm/EditForm';
import './Admin.css';
class Admin extends Component {
    state = {
        posts: [],
        name: "",
        email: "",
        enableForm: false,
        docName: "",
        qualification: "",
        availability: "",
        timing: "",
        experience: 0,
        fee: 0
    }
    deleteItem = (data) => {


        let new_posts = this.state.posts.filter((doctor) => {

            return doctor.docName !== data[0]
        })
        
        this.setState({
            posts: new_posts
        })
    }
    refetch = () => {
       
        axios.get('http://localhost:8001/pricing').then(res => {
            this.setState({
                posts: res.data,
                enableForm: false
            })

        }).catch(err => {
            console.log(err)
        })

    }

    async logoutUser() {
        let new_user = []
        localStorage.setItem("user", JSON.stringify(new_user));
        this.setState({
            redirect: (<Redirect to="/" />)
        })

    }
    editItems = (current) => {

        if (current.length == 0) {
            this.setState({
                enableForm: true
            })
        }
        else {
            this.setState({
                enableForm: true,
                docName: current[0],
                qualification: current[1],
                availability: current[2],
                timing: current[3],
                fee: current[4],
                experience: current[5]
            })
        }

    }

    componentWillMount() {
        let user = JSON.parse(localStorage.getItem("user"))[0];
        this.setState({
            name: user["name"],
            email: user["email"],
        })
    }

    componentDidMount() {
        axios.get('http://localhost:8001/pricing').then(res => {

            this.setState({
                posts: res.data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    render() {

        return (<div>
            <Navbar />
            <div className="jumbotron box bg-primary text-white">
                <div className="container container-box">
                    <div className="row row-header">


                        <div className="col-12 order-2">
                        </div>
                        <div className="col-12 order-1 align-self-center">
                            <h1><strong>Welcome Admin</strong></h1>
                        </div>
                        <div className="col-12 order-1 align-self-center">
                            <h4><strong>You can modify existing doctor profiles or add new ones </strong></h4>
                        </div>
                    </div>

                </div>
            </div>
            
            <div className="container edit-form">
                <div className="row row-form edit-form">

                    <div class=" col-sm-12 col-md-4 edit-form">
                        <div class="well well-profile profile">
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
                                    <button className="btn bg-primary logout-button text-white p-2 m-2" onClick={() => { this.logoutUser() }}><strong>Logout</strong></button>
                                    <button className="btn bg-primary logout-button text-white p-2 m-2" onClick={() => { this.editItems([]) }}><strong>Add Items</strong></button>
                                </div>
                            </div>

                        </div>

                    </div>
                    
                    <div className="col-md-7 edit-form">
                    {this.state.enableForm ? <EditForm name={this.state.docName} qualification={this.state.qualification} availability={this.state.availability} timing={this.state.timing} fee={this.state.fee} experience={this.state.experience} refetch={this.refetch} /> : null}
                    </div>
                </div>
                
                <div className="col-12 m-4">
                    <h2 className=""><b>Modify Existing Doctor Profiles:</b></h2>
                </div>
                <div className="col-12 admin-cards">
                   
                    {
                        this.state.posts.map(post => (
                            <AdminCards docName={post.docName} qualifications={post.qualification} availability={post.availability} experience={post.experience} fee={post.fee} timing={post.timing} docImg={post.docImg} editItems={this.editItems} deleteItem={this.deleteItem} />

                        ))
                    }
                </div>

            </div>


            <Footer />
        </div>)
    }
}

export default Admin;
