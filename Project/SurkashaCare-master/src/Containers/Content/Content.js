import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron,Container, Row, Col} from 'react-bootstrap';
import './Content.css'
class Content extends Component{
    render(){
        return(
        <div className="ContentBox bg-primary text-white">
                <div className="container">
                 <div className="row row-content" >
                        <div className="col-12 ">
                         <p className="text-xs-center text-sm-left">
                      Audio/Video consultant by Specialist Doctors.<br/>
                      Regular Vitals Monitoring(SPO2, HR, TEMP, BP, RR) by Consultant<br/>
                        Physician On-Line diet consultant by Nutritionist.<br/>
                         </p>
                    </div>


                    </div>
            </div>

        </div>)
    }
}

export default Content;