import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

export default function Sparkline({
  id,
  height,
  width,
  color,
  data,
  type,
  currentColor,
}) {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName="x"
      yName="yval"
      valueType="Numeric"
      tooltipSettings={{ visible: true , format : '(${x},${yval})' }}
      enableRtl={true}>
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
}
