import React from "react";

class AboutCard extends React.Component {
    constructor(props){
        super(props);
        this.state={
            count: 0
        }
    }

render(){
    const {name} = this.props;
    return(
        <div className="aboutCard">

        <div>Count: {this.state.count}</div>
        <button type="button" className="button" onClick={()=>{
            this.setState({count: this.state.count+1})
            }}>Increase Count</button>
        <div>Name: {name}</div>
        <div>Address: Noida Extenstion</div>

        </div>
    )
}
}
export default AboutCard;