import React,{ Component} from 'react'
export default class Zi extends Component{
    constructor(props) {
        super(props)
        this.clickChange = this.clickChange.bind(this)

    }
    clickChange() {
        this.props.changeData()
    }


    render(){
        return (
            <div style={{width:200,height:100,background:'green',alignSelf:'center'}} onClick={this.clickChange}>子组件点击{this.props.num}次</div>
        )
    }

}