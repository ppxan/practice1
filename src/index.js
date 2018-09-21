import {render} from 'react-dom';
import React,{ Component } from "react";
import Header from "./component/Header";
import MySelect from "./component/MySelect";
//import MyPieChart from "./component/MyPieChart"


class App extends Component{
    render(){
        let data1 = [[
            {name:"其他",value:"89293079",rateValue:"0.6119"},
            {name:"处方",value:"3262029.46",rateValue:"0.0223"},
            {name:"非处方",value:"53378936",rateValue:"0.3658"}
        ],[
            {name:"其他费用",value:"89293079",rateValue:"0.6119"},
            {name:"药品费用",value:"56640966",rateValue:"0.3881"}
        ],['55%', '80%'],[0, '40%'],["#a6b6d7","#e1bfc8","#f1ebed","#d2b8bf","#efd4db"]
        ]
        let data2 = [[
            {name:"西药",value:"422293.28",rateValue:"0.1295"},
            {name:"中药",value:"103951.2",rateValue:"0.0319"},
            {name:"中成药",value:"296437.6",rateValue:"0.0906"},
            {name:"西药",value:"1698488.34",rateValue:"0.5207"},
            {name:"中药",value:"0",rateValue:"0"},
            {name:"中成药",value:"741859",rateValue:"0.2274"},
        ],[
            {name:"甲类",value:"821682.1",rateValue:"0.2519"},
            {name:"乙类",value:"2440347",rateValue:"0.7481"}
        ],['45%', '60%'],[0, '32%'],["#e1c6bf","#d59a9a","#cebfe1","#e4aacd","#f6c9d4"]]
        let data3 = [[
            {name:"西药",value:"12101476.61",rateValue:"0.2267"},
            {name:"中药",value:"2428739.26",rateValue:"0.0455"},
            {name:"中成药",value:"7983380.28",rateValue:"0.1496"},
            {name:"西药",value:"25098172.16",rateValue:"0.4702"},
            {name:"中药",value:"0",rateValue:"0"},
            {name:"中成药",value:"5767168.02",rateValue:"0.1080"}
        ],[
            {name:"甲类",value:"22513596.15",rateValue:"0.4218"},
            {name:"乙类",value:"30865340.18",rateValue:"0.5782"}
        ],['45%', '60%'],[0, '32%'],["#e1c6bf","#d59a9a","#cebfe1","#e4aacd","#f6c9d4"]]
        return (
            <div style={{top: "10%",position:"absolute",width:"100%"}}>
                <Header/>
                <div style={{display:"flex",height:"390px",width:"100%",backgroundColor:"#f7f8fc"}}>
                    <div className="pie-title">药品支出详细分析</div>
                    <MyPieChart data={data1}/>
                    <MyPieChart data={data2}/>
                    <MyPieChart data={data3}/>
                </div>
                <MySelect items={[1,2,5]}/>
            </div>
        )
    }
}


render((<App/>),document.getElementById('app'))
