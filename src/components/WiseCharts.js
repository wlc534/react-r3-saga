import React, {
    Component
} from 'react';

import ReactEcharts from 'echarts-for-react';
import './WiseCharts.css'

const getKeys = data => Object.keys(data);

export default class WiseCharts extends Component {
    static defaultProps = {
        height: 400,
        width:'60%',
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
                        readOnly: false,
                        optionToContent: function otc(opt) {
                            const timeArr = Object.values(opt.dataset[0].source);
                            let table = `<table style="width:100%;text-align:center;background-color: #f5f5f5" class='reference'><tbody><tr>
                        <td>时间</td>${legendTrStr}
                        </tr>`;
                            for (let i = 0, l = timeArr[0].length; i < l; i += 1) {
                                let tdElm = ``;
                                for (let j = 1; j < timeArr.length; j += 1) {
                                    const element = timeArr[j][i];
                                    tdElm += `<td>${element}</td>`;
                                }
                                table += `<tr><td>${timeArr[0][i]}</td>${tdElm}
                        </tr>`;
                            }
                            table += '</tbody></table>';
                            return table;
                        },
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
        let {width,height}=this.props;
        return (
            <ReactEcharts option = {
                this.getOption()
            } style = {
                {
                    height,
                    width
                }
            }
            className = 'react_for_echarts' / >
       )}
}