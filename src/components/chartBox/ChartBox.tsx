import { Link } from "react-router-dom";
import "./chartBox.scss";
import '../../styles/variables.scss'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

type Props = {
  color: string,
  icon : string,
  title : string,
  dataKey : string,
  number: number | string,
  percentage: number,
  chartData: object[]
}

const ChartBox = (props: Props) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src="/log0.png" alt="logo" width={24} height={24} />
          {/* <img src={props.icon} alt="logo" width={24} height={24} /> */}
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link style={{color:props.color}} className="link" to="/">
          View all
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          {/* <ResponsiveContainer width= '100%' height ='100%'> */}
            <LineChart width={136} height={100} data={props.chartData}>
              <Tooltip contentStyle={{backgroundColor: 'transparent', border: 'none' }} labelStyle={{display: 'none'}} position={{x: 10, y: 70}} />
              <Line
                type="monotone"
                dataKey= {props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
              {/* <XAxis /> */}
            </LineChart>
          {/* </ResponsiveContainer> */}
        </div>
        <div className="text">
          <span className="percentage" style={ {color: props.percentage < 0 ? 'tomato' : 'limegreen'}}>{props.percentage}</span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
