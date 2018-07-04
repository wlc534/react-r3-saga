import React, { Component } from 'react';
import './App.css';
import { Card ,Alert,Spin} from 'antd';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Prompt,
    Redirect,
    Switch
} from 'react-router-dom'
import NumCardConX from './containers/NumCard'
import SideMeu from './components/SideMeu'
import Loadable from 'react-loadable'
import Fu from './components/Fu';
 

const Login = (props) => {
        console.log(props)
        return <Alert
        message = "请先登录"
        description = {
            props.match.path
        }
        type = "error"
        closable/>
 
}
 

const Message = ({
    match
}) => {
    console.log(match)
    return (<div >
                <h3 > ms </h3> 
                <h3 > { match.params.id} </h3> 
            </div>)
}
const Inbox = ({ match }) => { 
    return (
        <Card title="容器组件5 " style={{ width: 500 }}>
            <div className='numShow'>
             <Route path={`${match.url}/messages/:id`} component={Message}/>
            </div>
        </Card>
    )
}
 
const Loading=()=>{
    return <Spin size="large"/>
}

 
const AddInputCon = Loadable({
    loader: () =>
        import ('./containers/AddInput'),
    loading: Loading
})
const GetListCon = Loadable({
    loader: () =>
        import ('./containers/GetList'),
    loading: Loading
})
const SagaAsyCon = Loadable({
    loader: () =>
        import ('./containers/SagaAsy'),
    loading: Loading
})



 
class App extends Component {
    render() {
        return (
            <Router >
                <div className="App">
                    <Prompt message="您确定您要离开当前页面吗？"/>
                    <SideMeu/>
                    <Route exact path='/' component={ NumCardConX }/>
                    <Route exact path='/fu2zi' component={ Fu }/>
                    <Route path='/add' component={ AddInputCon}/>
                    <Route path='/saga' component={ SagaAsyCon}/>
                    <Route path='/get' component={ GetListCon}/>
                    <Route path='/login' component={ Login}/>
                    <Route path="/inbox" component={Inbox} />
                    <Route path='/home' render={()=><Redirect to='/login'/>}/>
                </div>
            </Router>
        );
    }
   
}
 
export default App;