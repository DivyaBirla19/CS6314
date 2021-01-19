import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
class NavBar extends Component{
render(){
    return(<nav class=" navbar-box navbar navbar-expand-lg navbar-light bg-light position-sticky">
    <a class="navbar-brand" href="/"><span className="text-danger">S</span ><span className="text-primary">C</span></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link" href="/pricing">Pricing</a>
        <a class="nav-item nav-link" href="/checkout">Checkout</a>
        <a class={"nav-item nav-link "+this.props.active} href="/webdoctor">WebDoctor</a>
        <a class={"nav-item nav-link "} href="/login">Login</a>


      </div>
    </div>
  </nav>)
}

}

export default NavBar;
