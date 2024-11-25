import "./pieChartBox.scss";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Mobile", value: 600, color: "#0088FE" },
  { name: "Desktop", value: 200, color: "#00C49F" },
  { name: "Laptop", value: 300, color: "#FFBB28" },
  { name: "Tablet", value: 100, color: "#FF8042" },
];

const PieChartBox = () => {
  return (
    <div className="pieChartBox">
      <h1>Leads by Source</h1>
      <div className="chart">
        <ResponsiveContainer width='99%' height={300}>
          <PieChart>
            <Tooltip contentStyle={{ backgroundColor: 'white',borderRadius: '4px'}}/>
            <Pie
              data={data}
              // cx={120}
              // cy={200}
              innerRadius={'70%'}
              outerRadius={'90%'}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell
                  key={item.name}
                  fill={item.color}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}>
              <div className="dot" style={{backgroundColor: `${item.color}`}}></div>
              <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
