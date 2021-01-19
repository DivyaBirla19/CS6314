import React,{Component} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Content from '../Content/Content';
import Package from '../Package/Package';
import NavBar from '../../UI/NavBar/NavBar';
import MidSection from '../MidSection/MidSection';
class Landing extends Component{

    render(){
        return(<div>
            <NavBar/>
            <Header/>
            <Package/>
            <Content/>
            <MidSection/>
            <Footer/>
          
            

        </div>)
    }

}

export default Landing;