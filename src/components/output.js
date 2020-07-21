import React,{ Component } from 'react';
import { connect } from 'react-redux';

class Output extends Component{


    delit = (id) => {
        this.props.del(id);
    }

    render(){
        return(
            <div>
                <h1>this is output component -: (retreving data from reducer using redux)</h1>
                <ul>
                    {this.props.inp.map((i,idx) => {
                        return <li key={idx} onClick={this.delit.bind(this,idx)}>{i}</li>
                    })}
                </ul>
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
        del : (id) => dispatch({type : 'DEL', payload :id })
    }
}

export default connect(maptostate,maptoaction)(Output);