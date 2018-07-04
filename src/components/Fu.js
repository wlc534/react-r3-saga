import React,{ Component} from 'react'
import Zi from './Zi'
export default class Fu extends Component{
    constructor(props){
        super(props)
        this.handleChange=this.handleChange.bind(this)
        this.state={number:0}
    }
    handleChange(){
        console.log('父组件中的handleChange执行')
        this.setState((prevState)=>({
            number:prevState.number+1
        }))
    }
    render(){
        return (
            <div style={{width:300,height:200,background:'#ff33ee',fontSize:'2em',display:'flex',flexDirection:'column'}}>
                <div>父组件{this.state.number}</div>
                <Zi changeData={this.handleChange}  num={this.state.number}/>  
            </div>
            
        )
    }

}