import "./bigChartBox.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";



const data = [
    {
      Name: "Sun",
      Books: 4000,
      Clothes: 2400,
      Electronics: 2400,
    },
    {
      Name: "Mon",
      Books: 3000,
      Clothes: 1398,
      Electronics: 2210,
    },
    {
      Name: "Tue",
      Books: 2000,
      Clothes: 9800,
      Electronics: 2290,
    },
    {
      Name: "Wed",
      Books: 2780,
      Clothes: 3908,
      Electronics: 2000,
    },
    {
      Name: "Thu",
      Books: 1890,
      Clothes: 4800,
      Electronics: 2181,
    },
    {
      Name: "Fri",
      Books: 2390,
      Clothes: 3800,
      Electronics: 2500,
    },
    {
      Name: "Sat",
      Books: 3490,
      Clothes: 4300,
      Electronics: 2100,
    },
  ];

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Revenue Analytics</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="90%">
          <AreaChart
            // width={500}
            // height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="1 3" />
            <XAxis dataKey="Name" />
            <YAxis />
            <Tooltip contentStyle={{borderRadius: '4px'}} />
            <Area
              type="monotone"
              dataKey="Books"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="Clothes"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="Electronics"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
