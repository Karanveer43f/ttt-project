import React from "react";
import { Chart } from "react-google-charts";
import { CSVLink } from "react-csv";
import "./chart2.css";

function Histogram({ array }) {
  const chartData = array
    ? [["Word", "Frequency"], ...array.map((item) => [item[0], item[1]])]
    : [];

  return (
    <div className="chart">
      {array ? (
        <>
          <Chart
            width={"900px"}
            height={"400px"}
            chartType="Histogram"
            loader={<div>Loading Chart</div>}
            data={chartData}
            options={{
              title: "Word Frequency",
              legend: { position: "none" },
              colors: ["#4285F4"],
              hAxis: {
                title: "Word",
                titleTextStyle: {
                  color: "white",
                },
                textStyle: {
                  color: "#fff",
                },
                gridlines: {
                  color: "#555",
                },
              },
              vAxis: {
                title: "Frequency",
                titleTextStyle: {
                  color: "white",
                },
                textStyle: {
                  color: "white",
                },
                gridlines: {
                  color: "#555",
                },
              },
              backgroundColor: "#1c1c1c",
              chartArea: {
                backgroundColor: "#1c1c1c",
              },
              titleTextStyle: {
                color: "#fff",
              },
            }}
          />
          <CSVLink data={chartData} filename={"word-frequency.csv"}>
            <button className="download-btn">Export</button>
          </CSVLink>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Histogram;
