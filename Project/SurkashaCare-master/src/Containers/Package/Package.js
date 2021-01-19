import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Package.css";
class Package extends Component{
render(){
    return(<div className="package-box">
            <div className="container text-white  ">
                <div className="row row-pill self-align-center justify-content-center">
                    <div className="col-8 col-sm-3 align-items-center bg-danger pill">
                        PACKAGE INCLUDES
                    </div>
                </div>
                </div>
    </div>)
}
}

export default Package;