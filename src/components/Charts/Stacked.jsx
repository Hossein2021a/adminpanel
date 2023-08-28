import React from "react";

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  StackingColumnSeries,
} from "@syncfusion/ej2-react-charts";

import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../Contexts/Contextprovider";

export default function Stacked({ width, height }) {
  const { cuurentMode } = useStateContext();

  return (
    <ChartComponent
      width={width}
      height={height}
      id="charts"
      primaryXAxis={{
        ...stackedPrimaryXAxis,
        labelStyle: { color: cuurentMode === "Dark" ? "white" : "" },
        labelRotation : "90"
      }}
      primaryYAxis={{
        ...stackedPrimaryYAxis,
        labelStyle: { color: cuurentMode === "Dark" ? "white" : "" },
      }}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{
        background: cuurentMode === "Dark" ? "#33373E" : "white",
        textStyle: { color: cuurentMode === "Dark" ? "white" : "" },
      }}
      enableRtl={true}
      palettes={["#00BDAE", cuurentMode === "Dark" ? "#f6e58d" : "#4b4b4b"]}>
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />

      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}
