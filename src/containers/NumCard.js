import React, {Component} from 'react'
import {Card, Button} from 'antd'
import { connect} from 'react-redux';
// import {addOne,addOneAsync} from "../actions/counterAction";
import * as CounterActions from '../actions/counterAction'

 
class NumCard extends Component {
    constructor(props) {
        super(props)

    }
    componentDidMount() {
        const {
            dispatch
        } = this.props
        console.log("dispatch", dispatch)
        console.log("this.props", this.props)
    }
    render(){
        const {count ,strText,addOne,minusOne,addOneAsync,onDecreaseClick} =this.props;
        console.log("this.props",this.props.dispatch)
        return (
            <Card title="容器组件1 " style={{ width: 500 }}>
                <div className='numShow'>{count}</div>
                <div className='numShow'>{strText}</div>
                <p className='flexP'>
                    <Button type="primary" onClick={addOne} >+</Button>
                    <Button type="primary" onClick={addOneAsync} >延时1s+</Button>
                    <Button type="danger" onClick={minusOne}>-</Button>
                </p>
            </Card>
        
        )
    }
 
}
 
function mapStateToProps(state) {
console.log(state)
return {
    count: state.counter.count,
    secCount: state.counter.secCount,
    strText: state.counter.strText
}
 
}
// function mapDispatchToProps(dispatch) {
// console.info(dispatch)
// return {
// onIncreaseClick:()=>dispatch(addOne()),
// onDecreaseClick:()=>dispatch(minusOne())
// }
 
// }
 
// const NumCardCon= connect(
// mapStateToProps,
// {addOne,minusOne,addOneAsync}
// )(NumCard)
 
// export default NumCardCon
// export default connect(
// mapStateToProps,
// {addOne,minusOne,addOneAsync}
 
// )(NumCard)
export default connect(mapStateToProps,{...CounterActions})(NumCard)