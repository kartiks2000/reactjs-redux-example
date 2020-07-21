import React,{ Component } from 'react';
import { connect } from 'react-redux';

class Entry extends Component{

    state = {
        tx : ""
    }

    changing = (e) => {
        this.setState({tx : e.target.value});
    }

    sendreq = () => {
        this.props.add(this.state.tx);
        this.setState({tx : ""});
        console.log(this.props.inp);
    }

    render(){
        return(
            <div>
                <h1>hello</h1>
                <input type="text" onChange={this.changing} value={this.state.tx}/>
                <h2>{this.state.tx}</h2>
                <button onClick={this.sendreq}>ADD IT</button>
            </div>
        );
    }    
}

const maptostate = (state) => {
    return{
        inp : state.text
    }
}

const maptoaction = (dispatch) => {
    return{
        add : (t) => dispatch({type : 'ADD', payload :t })
    }
}


export default connect(maptostate,maptoaction)(Entry);