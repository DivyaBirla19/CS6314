import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EditForm.css';
import axios from 'axios';
class EditForm extends Component{
    state={
        name:"",
        qualification:"",
        availability:"",
        timing:"",
        fee:0,
        experience:0
    }
    editName=(event)=>{
        this.setState({name:event.target.value});
    }
    editQualification=(event)=>{
        this.setState({qualification:event.target.value});
    }
    editAvailability=(event)=>{
        this.setState({availability:event.target.value});
    }
    editTiming=(event)=>{
        this.setState({timing:event.target.value});
    }
    editFee=(event)=>{
        this.setState({fee:event.target.value});
    }
    editExperience=(event)=>{
        this.setState({experience:event.target.value});
    }
    componentWillMount(){
        this.setState({
            name:this.props.name,
            qualification:this.props.qualification,
            availability:this.props.availability,
            timing:this.props.timing,
            fee:this.props.fee,
            experience:this.props.experience
        })
    }
    updateDb=(event)=>{
        event.preventDefault();
        let form_data = event.target;
        let post_data={
            name:form_data.name.value,
            qualification:form_data.qualification.value,
            availability:form_data.availability.value,
            timing:form_data.timing.value,
            fee:form_data.fee.value,
            experience:form_data.experience.value
        }
        axios.post("http://localhost:8001/update",post_data).then((resp)=>{
           this.props.refetch();
        }).catch((error)=>{
            console.log("FAILUE")
        })
    }
    render(){
        return(<form className="edit-form" onSubmit={this.updateDb}>
            <div class="form-group">
              <label htmlFor="doctor-name">Doctor Name:</label>
              <input type="text" class="form-control" id="doctor-name" aria-describedby="emailHelp" name="name" value={this.state.name} onChange={this.editName} placeholder="Enter Doctor's Name"/>
            </div>
            <div class="form-group">
              <label htmlFor="doctor-qualifications">Qualifications:</label>
              <input type="text" class="form-control" id="doctor-qualifications" aria-describedby="emailHelp" name="qualification" onChange={this.editQualification} value={this.state.qualification} placeholder="Enter Qualifications"/>
             
            </div>
            <div class="form-group">
              <label htmlFor="weekly-availability">Weekly Availability:</label>
              <input type="text" class="form-control" id="weekly-availability" aria-describedby="emailHelp" name="availability" onChange={this.editAvailability} value={this.state.availability} placeholder="Enter Availability"/>
            </div>
            <div class="form-group">
              <label htmlFor="timings">Timings:</label>
              <input type="text" class="form-control" id="timings" aria-describedby="emailHelp" name="timing" onChange={this.editTiming} value={this.state.timing} placeholder="Enter Timings"/>
            </div>
            <div class="form-group">
              <label htmlFor="fee">Fee:</label>
              <input type="text" class="form-control" id="fee" aria-describedby="emailHelp" name="fee" onChange={this.editFee} value={this.state.fee} placeholder="Enter Fee"/>
            </div>
            <div class="form-group">
              <label htmlFor="experience">Experience</label>
              <input type="text" class="form-control" id="experience" onChange={this.editExperience} value={this.state.experience} placeholder="Enter Experience"/>
            </div>
            <button type="submit" class="btn btn-primary" ><b>Save</b></button>
            <button type="submit" class="btn btn-primary mx-4" onClick={()=>{this.props.refetch()}}><b>Cancel</b></button>
          </form>)
    }
}

export default EditForm;