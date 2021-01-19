import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
class Header extends Component{
    render(){
        return(<div className="jumbotron box bg-white ">
            <div className="container container-box">
                <div className="row row-header">


                            <div className="col-12 order-2">
                            <h2><span className="text-danger">SURAKSHA </span><span className="text-primary">CARE</span></h2>
                            </div>
                            <div className="col-12 order-1 align-self-center">
                            <h1>COVID 19 HOME CARE QUARANTINE</h1>
                            </div>

                    </div>

                </div>

            </div>

        )
    }
}

export default Header;
