import React from "react";
import ReactApexChart from "react-apexcharts";
import "./chart2.css";

function Chart({ array }) {
  const chartData = {
    options: {
      chart: {
        id: "basic-bar",
        background: "#1c1c1c", // set the background color to dark
      },
      xaxis: {
        categories: array ? array.map((item) => item[0]) : [],
        labels: {
          style: {
            colors: "#ffffff", // set the label color to white
          },
        },
      },
      yaxis: {
        title: {
          text: "Frequency",
          style: {
            color: "#ffffff", // set the title color to white
          },
        },
        labels: {
          style: {
            colors: "#ffffff", // set the label color to white
          },
        },
      },
      theme: {
        mode: "dark", // set the theme mode to dark
        palette: "palette1", // use a predefined color palette
      },
    },
    series: [
      {
        name: "Frequency",
        data: array ? array.map((item) => item[1]) : [],
      },
    ],
  };

  return (
    <div className="chart">
      {array ? (
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height="400"
          width="900"
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Chart;
