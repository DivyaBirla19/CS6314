import React,{Component} from 'react';
import Team from '../../Assets/Team.png';
import './Footer.css';
class Footer extends Component{
    render(){
        return(<div className="FooterBox bg-primary">
                <div className="container footer-box bg-primary text-white">
                    <div className="row row-footer">
                        <div className="col-xs-12  col-sm-order-2 col-md-6 align-self-center">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="h-footer">About us</h1>
                            </div>
                            <div className="col-12">
                                <p className="p-footer">"We are a group of remarkable ER Doctors ,Physicians and Trained Nurses who have the right experience to handle COVID-19 cases."
                                </p>

                            </div>

                        </div>
                        
                        </div>
                        <div className="col-xs-12 col-sm-order-1 col-md-6">
                            
                            <img className="img-fluid rounded-circle z-depth-2 TeamImage" src={Team}/>
                        </div>
                    </div>
                </div>
        </div>)
    }
}

export default Footer;