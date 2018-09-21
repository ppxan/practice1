import React, {Component} from 'react';
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pie';


export default class MyPieChart extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let myChart=echarts.init(this.refs.pieChart);
        let unit="%";
        myChart.setOption({
            tooltip: {
                show:false,
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                show:false,
                orient: 'vertical',
                x: 'left',
                //data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            },
            yAxis : [ {
                axisLabel: {
                    formatter: '{rateValue} %'
                }
            } ],
            color:this.props.data[4],
            series: [
                {
                    name:'药品支出详细分析',
                    type:'pie',
                    startAngle:270,
                    radius: this.props.data[2],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            color:"#333",
                            position: 'inner',
                            formatter: '{b}\n{d}'+unit
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '20',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false,
                        }
                    },
                    data:this.props.data[0]
                },
                {
                    name:'药品支出详细分析',
                    type:'pie',
                    startAngle:270,
                    radius: this.props.data[3],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            color:"#333",
                            position: 'inner',
                            formatter: '{b}\n{d}'+unit
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '20',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:this.props.data[1]
                },
            ]
        });
    }
    /*componentWillReceiveProps(props) {
        var myChart=echarts.init(this.refs.pieChart);
        myChart.setOption({
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:this.props.data[0]
                },
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['30%', '45%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:this.props.data[1]
                },
            ]
        });
    }*/
    render() {
        return (
            <div ref="pieChart" style={{flex:"1"}}></div>
        )
    }
}
