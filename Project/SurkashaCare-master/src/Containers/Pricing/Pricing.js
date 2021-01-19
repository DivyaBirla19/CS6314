import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import Posts from '../../Component/Posts/Posts';
import NavBar from '../../UI/NavBar/NavBar';
import "./Pricing.css";
class Pricing extends Component {

    state = {
        itemList: []
    }

    addCardItem = (info) => {
        if (this.state.itemList.length === 0) {
            this.setState({ itemList: [info] })
            localStorage.setItem("services", this.state.itemList);
        }
        else {

            localStorage.clear();
            var itemHolder = this.state.itemList
            this.setState({
                itemList: [...itemHolder, info]
            })

            localStorage.clear();
        }

        localStorage.setItem("services", this.state.itemList);

    }




    render() {
        return (<div>
            <NavBar/>
            <div className="jumbotron pricing-header bg-primary text-white">
                <div className=" login-container container">
                    <div className=" jumbo-row row">
                        <div className="col-12 align-self-center">
                            <h1>OUR PACKAGE FOR THE TREATMENT</h1>
                        </div>
                    </div>

                </div>
            </div>
            <div className="slider-box container">
                <div className="row">
                    <div className="col-12">
                        <h2>Adjust the doctor fee and experience to suite your budget.</h2>
                    </div>
                </div>

            </div>
            <div className="pricing-body container">
                <div className="row">
                    <div className="col-12">
                        <Posts addCardItem={this.addCardItem} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>)
    }
}

export default Pricing;