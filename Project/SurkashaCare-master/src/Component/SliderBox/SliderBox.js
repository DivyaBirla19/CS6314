import React,{Component} from 'react';
import './SliderBox.css';
class SliderBox extends Component{
  state={
      posts:"",
      value:0
  }

  componentDidMount(){
      this.setState({
        posts:this.props.posts,
        value:this.props.min
      })
  }

moveSlider=(event)=>{
    let measure = this.props.measure;
    let new_posts=this.props.posts.filter((post)=>{
       
        return post[measure]>=this.state.value
    })
    this.setState({
      value:event.target.value
    })
    
    this.props.filterPost(new_posts);
}



render(){
    
    return(<div className="slidecontainer">
    <input type="range" min={this.props.min} max={this.props.max} value={this.props.value} onChange={this.moveSlider}class="slider" id="myRange"/>
  </div>)

}
}
export default SliderBox;