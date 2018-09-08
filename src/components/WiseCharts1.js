import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import {Icon} from 'antd';
export default class WiseCharts extends Component{
    constructor(props){
        super(props);
        this.getOption=this.getOption.bind(this);

    }
    getOption(){
        return {
            title: {
                text: '折线图堆叠'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                // data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
                bottom:'3%',
                data:[
                    {name:'邮件营销',icon:'circle'},
                    {name:'联盟广告',icon:'circle'},
                    {name:'视频广告',icon:'circle'},
                    {name:'直接访问',icon:'circle'},
                    {name:'搜索引擎',icon:'circle'},
                ]
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '10%',
                containLabel: true
            },
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    dataView: {readOnly: false},
                    magicType: {type: ['line', 'bar']},
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name:'邮件营销',
                    type:'line',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'联盟广告',
                    type:'line',
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'视频广告',
                    type:'line',
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name:'直接访问',
                    type:'line',
                    data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name:'搜索引擎',
                    type:'line',
                    data:[820, 932, 901, 934, 1290, 1330, 1320]
                }
            ],
            color: [
                '#FF9C6E', '#FFC069', '#95DE64', '#5CDBD3', '#69C0FF', '#85A5FF', '#B37FEB', '#FF85C0'
            ]
        };

    }
    render(){
        return (
            < ReactEcharts
            option = {
                this.getOption()
            }
            style = {
                {
                    height: '350px',
                    width: '60%'
                }
            }
            className = 'react_for_echarts' / >
        )

    }
}