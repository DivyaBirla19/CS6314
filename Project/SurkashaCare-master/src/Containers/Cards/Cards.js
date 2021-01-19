import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cards.css';

class Cards extends Component {


    addItem = (event) => {
        let new_item = {
            name: event[0],
            timing: event[1],
            fee: event[2]
        }
        if (localStorage.getItem("cart")) {
            let data = null;
          
            data = JSON.parse(localStorage.getItem("cart"));
           
            let contains = data.filter((doctor) =>{
                
                return (doctor.name===new_item.name)
            })
          
            if (contains.length===0) {
                data.push(new_item);
                localStorage.removeItem("cart");
                localStorage.setItem("cart", JSON.stringify(data));
            }


        }
        else {
            let data = null;
            data = [new_item];
            localStorage.setItem("cart", JSON.stringify(data));

        }

      

    }
    deleteItem = (event) => {
         let delete_item = {
            name: event[0],
            timing: event[1],
            fee: event[2]
        }
        if (localStorage.getItem("cart")) {
            let data = null;
          
            data = JSON.parse(localStorage.getItem("cart"));
            
            let not_contains = data.filter((doctor) =>{
                
                return (doctor.name!==delete_item.name)
            })
            
            if (not_contains.length!==0) {
              
                localStorage.removeItem("cart");
                localStorage.setItem("cart", JSON.stringify(not_contains));
            }


        }
 
    };

    render() {

        return (
            <div>
                <div class="card card-box" style={{ width: '18rem', backgroundColor: 'white', borderRadius: '5% 5%', margin: '10px 15px' }}>
                    <img class="card-img-top img-size" src={this.props.docImg} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title"><b>Name: </b>{this.props.docName}</h5>
                        <p class="card-text"> <b>Qualifications: </b>{this.props.qualifications}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><b>Weekly Availability:</b>{this.props.availability}</li>
                        <li class="list-group-item"><b>Timings:</b>{this.props.timing}</li>
                        <li class="list-group-item"><b>Fee:</b>${this.props.fee}</li>
                        <li class="list-group-item"><b>Experience:</b>{this.props.experience} years</li>
                    </ul>
                    <div class="card-body">
                        <button class="btn bg-transparent card-link text-primary" onClick={() => { this.addItem([this.props.docName, this.props.timing, this.props.fee]) }}>reserve</button>
                        <button class="btn bg-transparent card-link text-primary" onClick={() => { this.deleteItem([this.props.docName, this.props.timing, this.props.fee]) }}>un-reserve</button>
                    </div>
                </div>
            </div>
        )

    }
}

export default Cards;