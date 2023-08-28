import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  Tooltip,
  LineSeries,
  Padding,
} from "@syncfusion/ej2-react-charts";
import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../Contexts/Contextprovider";


const LineChart = () => {
  const { cuurentMode } = useStateContext()
  return (
    <div className="p-6">
      <div></div>
    <ChartComponent
      enableRtl
      id="line-chart"
      height="420px"
      primaryXAxis={{
        ...LinePrimaryXAxis,
        labelStyle: { color: cuurentMode === "Dark" ? "white" : "" },
      }}
      primaryYAxis={{
        ...LinePrimaryYAxis,
        labelStyle: { color: cuurentMode === "Dark" ? "white" : "" },
      }}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={cuurentMode === "Dark" ? "#33373E" : "#FFF"}
      style={{ color: "#fff" }}
      palettes={[
        "#00BDAE",
        cuurentMode === "Dark" ? "#f6e58d" : "#4b4b4b",
        "#EE5A24",
      ]}
      legendSettings={{
        background: cuurentMode === "Dark" ? "#33373E" : "#FFF",
        textStyle: {
          color: cuurentMode === "Dark" ? "white" : "",
        },
      }}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
      
    </ChartComponent>
    </div>
  );
};

export default LineChart;
