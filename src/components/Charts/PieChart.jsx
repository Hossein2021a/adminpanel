import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  PieSeries,
  AccumulationDataLabel,
  Inject,
  AccumulationTooltip,
} from "@syncfusion/ej2-react-charts";
import { useStateContext } from "../../Contexts/Contextprovider";
import {pieChartData} from "../../data/dummy"

const PieChart = ({ id, data, legendVisibility, height }) => {

  const { cuurentMode } = useStateContext()
  return ( <div className="p-12 ">
    <AccumulationChartComponent
      id="Piechart"
      legendSettings={{
        background: cuurentMode === "Dark" ? "#33373E" : "white",
        textStyle: {
          color: cuurentMode === "Dark" ? "white" : "",
        },
      }}
      height= "500px"
      background={cuurentMode === "Dark" ? "#33373E" : "#fff"}
      tooltip={{ enable: true }}
      enableRtl={true}
    >
      <Inject
        services={[
          AccumulationLegend,
          PieSeries,
          AccumulationDataLabel,
          AccumulationTooltip,
        ]}
      />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name="فروش"
          dataSource={pieChartData}
          xName="x"
          yName="y"
          innerRadius="40%"
          startAngle={0}
          endAngle={360}
          radius="70%"
          explode
          explodeOffset="10%"
          explodeIndex={2}
          dataLabel={{
            visible: true,
            name: "text",
            position: "Inside",
            font: {
              fontWeight: "600",
              color: "#fff",
            },
          }}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
    </div>
  );
};

export default PieChart;
