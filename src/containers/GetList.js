import React, {Component} from 'react'
import {Card,Input,Spin,List} from 'antd'
import { connect} from 'react-redux';
import {fetchData} from "../actions/fetchAction";

class GetList extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(value) {
        this.props.onSearchByName(value)
    }
render(){
    const {arrData,status } =this.props;
    // const items=arrData.map(item=>
    //     <li key={item.id}><a target='_blank' href={`https://cnodejs.org/topic/${item.id}`}>{item.title}</a></li>
    // )
    return (
        <Card title="容器组件3  thunk异步查询" style={{ width: 1000 }}>
            <p className='flexP'>
                <Input.Search
                    placeholder="输入 good job  share ask dev "
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
    console.log(state.thunkReducer.data)
    return {
        arrData: state.thunkReducer.data,
        status: state.thunkReducer.status
    }

}

function mapDispatchToProps(dispatch) {
    return {
        onSearchByName: (name) => dispatch(fetchData(name)),
    }

}

const GetListCon = connect(
    mapStateToProps,
    mapDispatchToProps
)(GetList)

export default GetListCon