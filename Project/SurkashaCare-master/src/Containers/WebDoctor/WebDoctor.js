import React,{Component} from 'react';
import NavBar from '../../UI/NavBar/NavBar';
import './WebDoctor.css';
import Footer from '../Footer/Footer';

class WebDoctor extends Component{
    state={
        divControl:[
                <div className="container ">
                    <div className="row">
                         <div className="col-12 text-xs-left text-sm-left">
                            <p className="  reply-box bg-primary text-white ">Hello I am here to take ur summary</p> 
                        </div>
                    </div>
                 </div>],
        script:[
            "Can I know your name",
            "Can I know your Address",
            "Can I know your Phone number",
            "Are you suffering from cold if yes how severe it is ",
            "Are you suffering from cough or shortness of breath",
            "Are you suffering from nausea or do you have any other symptoms",
            "Do you have any X-ray or CT Scan of yours",
            "Did you went out in last 14 days",
            "Are there any one in your family suffering from similar symptoms",
            "Thank you for sharing your case summary our doctors will be calling u within 30 mins"
        ],
        reply:"",
        counter:0
    }

    componentDidUpdate(){
        
        
    }
    convoScript(count){
        let script = this.state.script[count];
        let convo = [,...this.state.convo
        ,<div className="row">
            <div className="col-12">
            {script}
            </div>
        </div>];
        this.setState(
            {convoPause:true,
             convo:convo   
            }
        )
        return convo[count];
    }

     receiveMessage=(event)=>{
         if(event.which===13)
         {  
            let counter = this.state.counter+1
              console.log(event.target.value);
             let convo =[...this.state.divControl,
                <div className="container ">
                <div className="row">
                     <div className="col-12 text-xs-right text-sm-right">
                        <p className="reply-box bg-primary text-white"> {event.target.value}</p>
                    </div>
                </div>
             </div>,
             <div className="container">
             <div className="row">
                  <div className="col-12 text-xs-left text-sm-left">
                     <p className=" reply-box bg-primary text-white ">{this.state.script[counter]}</p> 
                 </div>
             </div>

          </div>
            
            
            ]
            
             this.setState({
                 divControl:convo,
                 counter:counter
             })
         }

    }


    render(){
        let row=null;
            row =this.state.divControl.map((text)=>(text))
            
            console.log(this.state.counter);
        
        return(<div>
                <NavBar active="active"/>
                <div className="jumbotron bg-primary text-white">
                <div className="container container-jumbo">
                    <div className="row jumbo-row align-items-center">
                        <div className="jumbo-text col-12 align-self-center">
                        <h1>Talk to our Web Assistant to fix your Appointment</h1>
                        </div>
                    </div>
                </div>
                </div>
                <div className="WebDoctor">
                    <div className="web-doctor container ">
                    <div className="row">
                        <div className="col-12 cardbox">
                        {row}
                        </div>
                        <div className="col-12">
                            <div className="text-container container">
                            <div className="row textBox">
                          
                            <div className="col-12 col-sm-10">
                            <textarea className="textWidth" placeholder="Type message.." name="msg" required onKeyPress={this.receiveMessage} refs="textArea"></textarea>
                                </div>
                                <div className="col-12 col-sm-2 textButton">
                                <button type="button " class="btn buttonWidth btn-primary text-white button-go" ><span className="pushButton">push</span></button>
                                </div>
                        
                                </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
                
                <Footer/>
             
                </div>
               )
    }
}
export default WebDoctor;
/**
 *  <div className="jumbotron bg-primary text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-12 align-self-center">
                        <h1>Talk to our Web Assistant to fix your Appointment</h1>
                        </div>
                    </div>
                </div>
                </div>
                <div className="ChatBox">
                    <div className="container container-box ">
                        <div className="row chatbot-box"> 
                            <div className=" col-12">
                              <div className="container ">
                                  <div className="row">
                                      <div className="window col-12">
                                        {row}
                                      </div>
                                      <div className="container text-box-holder">
                                          <div className="row flex-grow-1">
                                              <div className="col-sm-12 col-md-10 ">
                                              <textarea placeholder="Type message.." name="msg" required></textarea>
                                              </div>
                                              <div className=" align-self-center col-sm-12 col-md-2">
                                              <button type="button" class="btn btn-primary text-white button-go">push</button>
                                              </div>
                                          </div>
                                      </div>

                                  </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
               
        </div>
        React -> stateless(functions ->99.9 sirf inforamtion display ) stateful -> axios page- > \

        16.0 -> We do all manipulations states ->class -> props-> functions
        16.0+ -> React hooks --> useState,useEffect 
                                    |-> alternates of component life cycle 
                function were restircted to handle states
                function + hooks = class
                    |
                    class -> states -> componeml
                                        6.-> kounsa 
                
                    usestates=== states of class
                    [aadharcards, addAddharcards] = useStates(160415733032)
                        aadharcards = 1604.....
                            |> addAdharcards() 

                    useStates-> initial state
                    |> as setStates
                    1.useStates=>
                    state={
                        addharcards:
                    }
                    2.setState
                    
                    2.useEffects-->> componentDidUpdate 
                    |>
 */