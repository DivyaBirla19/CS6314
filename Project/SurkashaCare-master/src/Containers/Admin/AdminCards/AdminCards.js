import React, { Component } from 'react';

class AdminCards extends Component {
    
    render() {
        return (<div>
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
                    <button class="btn bg-transparent card-link text-primary" onClick={() => { this.props.editItems([this.props.docName,this.props.qualifications,this.props.availability,this.props.timing,this.props.fee,this.props.experience]) }}>Edit</button>
                    <button class="btn bg-transparent card-link text-primary" onClick={() => { this.props.deleteItem([this.props.docName, this.props.timing, this.props.fee]) }}>delete</button>
                </div>
            </div>
        </div>)
    }

}
export default AdminCards;