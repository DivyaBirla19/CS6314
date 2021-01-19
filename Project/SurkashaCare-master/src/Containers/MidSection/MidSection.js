import React,{Component} from 'react';
import './MidSection.css';
import Monitoring from '../../Assets/Monitoring.png';
import Test from '../../Assets/test.png';
import Medicines from '../../Assets/medicines.png';
import Kit from '../../Assets/drop.png';
import Nurse from '../../Assets/bandaid.png';
import Oxygen from '../../Assets/pulse.png';
class MidSection extends Component{
    render(){
        return(<div className="MidSection">
           <div className="container container-box">
               <div className="row row-midsection">
                   <div className="col-xs-12 col-sm-3 col-md-6">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-sm-12 col-md-3 ">
                         <img src={Monitoring}/>
                        </div>
                        <div className="col-sm-12 col-md-8 align-self-center">
                           <p className="p-style"> Daily Monitoring by Specialist<br/>/Nurse</p>
                        </div>
                    </div>
                   </div>
                   <div className="col-xs-12 col-sm-3 col-md-6">
                   <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-sm-12 col-md-3">
                         <img src={Test}/>
                        </div>
                        <div className="col-sm-12 col-md-8 align-self-center">
                           <p className="p-style ">Home Sample Collection</p>
                        </div>
                    </div>
                   </div>
                   <div className="col-xs-12 col-sm-3 col-md-6">
                   <div className="row">
                   <div className="col-md-1"></div>
                        <div className="col-sm-12 col-md-3">
                         <img src={Medicines}/>
                        </div>
                        <div className="col-sm-12 col-md-8 align-self-center">
                           <p className="p-style">Home Delivery Medicines</p>
                        </div>
                    </div>
                   </div>
                   <div className="col-xs-12 col-sm-3 col-md-6">
                   <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-sm-12 col-md-3">
                         <img src={Kit}/>
                        </div>
                        <div className="col-sm-12 col-md-8 align-self-center">
                          <p className="p-style">Medical Kit Essentials</p>
                        </div>
                    </div>
                   </div>
                   <div className="col-xs-12 col-sm-3 col-md-6">
                   <div className="row">
                   <div className="col-md-1"></div>
                        <div className="col-sm-12 col-md-3">
                         <img src={Nurse}/>
                        </div>
                        <div className="col-sm-12 col-md-8 align-self-center">
                          <p className="p-style">On Demand Nursing Service</p> 
                        </div>
                    </div>
                   </div>
                   <div className="col-xs-12 col-sm-3 col-md-6">
                   <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-sm-12 col-md-3">
                         <img src={Oxygen}/>
                        </div>
                        <div className="col-sm-12 col-md-8 align-self-center">
                          <p className="p-style">Provision of Oxygen <br/>Cylinder</p> 
                        </div>
                    </div>
                   </div>

               </div>
           </div>

        </div>)
    }

}

export default MidSection;