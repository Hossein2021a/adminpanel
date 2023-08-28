import React from "react";

import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Inject,
  Resize,
  DragAndDrop,
  Agenda,
} from "@syncfusion/ej2-react-schedule";
import { scheduleData } from "../data/dummy";

export default function Calender() {
  return (
    <div className="m-12">
      <ScheduleComponent
        height="650px"
        eventSettings={{dataSource: scheduleData }}
        enableRtl
        >
    
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  );
}
