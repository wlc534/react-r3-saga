import React, {Component} from 'react'
import {Card, Input,Spin,List} from 'antd'
import { connect} from 'react-redux';
import {fetchDataRequest} from "../actions/fetchAsyncAction";


 
class SagaAsy extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(value) {
        this.props.onSearchByName(value)
        console.log(value)

    }
 
    render(){
        const {arrData,status } =this.props;

        return (
            <Card title="容器组件4 Saga异步查询" style={{ width: 1000 }}>
                <p className='flexP'>
                    <Input.Search
                        placeholder="输入 good job  share ask dev"
                        enterButton="查询"
                        onSearch={value => this.handleClick(value)}
                    />
                </p>
                <div>{status=='loading'?<Spin/>:""}</div>
                <List
                    bordered
                    dataSource={arrData}
                    renderItem={item => (<List.Item><a target='_blank' href={`https://cnodejs.org/topic/${item.id}`}>{item.title}</a></List.Item>)}
                />
               
            </Card>
        )
    }
 
}
 
function mapStateToProps(state) {
    console.log(state.sagaReducer)
    return {
        arrData: state.sagaReducer.data,
        status: state.sagaReducer.status
    }

}

function mapDispatchToProps(dispatch) {
    return {
        onSearchByName: (name) => dispatch(fetchDataRequest(name)),
    }

}

const SagaAsyCon = connect(
    mapStateToProps,
    mapDispatchToProps
)(SagaAsy)

export default SagaAsyCon