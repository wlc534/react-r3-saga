import React, {
    Component
} from 'react';

import ReactEcharts from 'echarts-for-react';

const getKeys = data => Object.keys(data);

export default class WiseCharts extends Component {
    static defaultProps = {
        height: 400,
        title: '默认名称',
        type: 'line'
    };

    constructor(props) {
        super(props);
        this.getOption = this.getOption.bind(this);
    }

    getOption() {
        const [first, ...legendData] = getKeys(this.props.data);
        const legendDataArr = [];
        let legendTrStr = '';
        legendData.forEach(item => {
            legendDataArr.push({
                name: item,
                icon: 'circle'
            });
            legendTrStr += `<td>${item}</td>`;

        });

        // const source = {
        //     week: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        //     '邮件营销': [120, 132, 101, 134, 90, 230, 210],
        //     '联盟广告': [220, 182, 191, 234, 290, 330, 310],
        //     '视频广告': [150, 232, 201, 154, 190, 330, 410],
        //     '直接访问': [320, 332, 301, 334, 390, 330, 320],
        //     '搜索引擎': [820, 932, 901, 934, 1290, 1330, 1320],
        // };

        return {
            title: {
                text: this.props.title,
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                bottom: '3%',
                type: 'scroll',
                data: legendDataArr
            },

            dataset: {
                source: this.props.data
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
                    dataView: {
                        readOnly: false
                    },
                    magicType: {
                        type: ['line', 'bar']
                    },
                    restore: {},
                    saveAsImage: {}
                }

            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
            },
            yAxis: {
                type: 'value'
            },
            series: [...legendData].fill({
                type: this.props.type
            }),
            color: [
                '#FF9C6E', '#FFC069', '#95DE64', '#5CDBD3', '#69C0FF', '#85A5FF', '#B37FEB', '#FF85C0'

            ]
        };



    }

    render() {
        return (
            <ReactEcharts option = {
                this.getOption()
            } style = {
                {
                    height: '350px',
                    width: '60%'
                }
            }
            className = 'react_for_echarts' / >
        )}
}