import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Filler,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";

import "./index.css";

import { data } from "./Components/DoughnutChart";
import { data2, options } from "./Components/AreaChart";
import { optionsBar, dataBar } from "./Components/BrChart";

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  return (
    <div className="App">
      <div className="divDough">
        <Doughnut data={data} />;
        <Line data={data2} options={options} />
        <Bar options={optionsBar} data={dataBar} />
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}

export default App;
