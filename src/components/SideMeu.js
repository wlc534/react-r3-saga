import React from 'react'
import {Link} from 'react-router-dom'
 
const SideMeu=()=>(
<header style={{position:'fixed',top:10,left:20}}>
    <nav style={{textAlign:'left'}}>
        <ul>
            <li><Link to='/fu2zi'>【0】父子组件</Link></li>
            <li><Link to='/'>【1】加减数字板</Link></li>
            <li><Link to='/add'>【2】输入添加</Link></li>
            <li><Link to='/get'>【3】thunk异步数据</Link></li>
            <li><Link to='/saga'>【4】saga异步数据</Link></li>
            <li><Link to='/inbox/messages/55'>【5】嵌套路由V4</Link></li>
            <li><Link to='/home'>【6】路由重定向</Link></li>
            <li><Link to='/charts'>【7】WiseCharts</Link></li>
            <li><Link to='/morecharts'>【8】Charts联动</Link></li>
            <li><Link to='/gridcharts'>【9】可拖拽Charts</Link></li>
            <li><Link to='/hooks'>【10】React Hooks</Link></li>
        </ul>
    </nav>
</header>
)
 
export default SideMeu