import React from "react";
import { L10n } from "@syncfusion/ej2-base";

import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Page,
  Inject,
  Filter,
  Sort,
  Edit,
  Toolbar,
  Selection,
  
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid  } from "../data/dummy";

L10n.load({
  "IR": {
    'grid': {
        Search : "جستجو ...",
        SelectAll : "انتخاب همه",
        ClearButton : "پاک  کردن",
        FilterButton : "فیلتر",
        NoResult : "هیچ موردی یافت نشد",
        EmptyRecord :"داده ای وجود ندارد",
        Add :  "اضافه کردن",
        Edit: "تغییر دادن",
        Cancel: "لغو کردن",
        Update: "انجام دادن",
        Delete: "حذف کردن"
    },
    pager: {
      currentPageInfo: "{0} از {1} صفحه",
      totalItemsInfo : "({0} مورد)"

    },
  },
});

export default function Customerse() {

    const FilterOptions = {
        type: 'CheckBox'
    };
    const headerCellInfo = (args) => {
        args.node.classList.add("customicon");
      };
    const toolbarOptions = ["Add", "Edit", "Delete", "Update", "Cancel" , "Search"];


  return (
    <div className="p-10">
      <GridComponent
      locale='IR'
        dataSource={customersData}
        toolbar={toolbarOptions}
        allowPaging
        headerCellInfo={headerCellInfo}
        enableRtl
        allowed
        editSettings={{
            allowEditing: true,
            allowDeleting: true,
            allowAdding: true,
          }}
        allowFiltering
        allowSorting
        filterSettings={FilterOptions}
        pageSettings={{ pageSize: 10 }}>
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item}></ColumnDirective>
          ))}
        </ColumnsDirective>
        <Inject services={[Page , Filter , Sort , Edit , Toolbar , Selection ]} />
      </GridComponent>
    </div>
  );
}
