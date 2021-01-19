import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HistoryCards.css';

class HistoryCards extends Component {
    state={
        names:[],
        total:0
    }
    componentWillMount(){
            this.setState({
                
                total:this.props.bill["total"]
            })
            delete this.props.bill["total"];
            const peopleArray = Object.keys(this.props.bill).map(i => this.props.bill[i])
            
            this.setState({
                names: peopleArray
            })
    }
    render() {
       
        return (<div class="card card-box card-history" style={{ width: '100%', backgroundColor: 'white', borderRadius: '5% 5%', margin: '10px 15px' }}>
            <div class="card-body">
            {this.state.names.map(item=>{
              
                        return(
                         <div>
                             <p class="card-title"><b>Doctor Name: </b>{item["name"]}</p>
                             <p class="list-group-item"><b>Timings:</b>{item["timing"]}</p>
                             <p class="list-group-item"><b>Fee:</b>${item["fee"]}</p>
                         </div>
                        )
    

                })} 
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><b>Total:</b>${this.state.total}</li>
            </ul>
        </div>)
    }
}

export default HistoryCards;