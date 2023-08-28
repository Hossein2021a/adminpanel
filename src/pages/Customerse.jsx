import React from "react";
import { L10n } from "@syncfusion/ej2-base";
import custompager from "../utils/customPager";


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
import { ordersData, ordersGrid  } from "../data/dummy";

L10n.load({
  "fa": {
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
    const toolbarOptions = ["Add", "Edit", "Delete", "Update", "Cancel"];
    const headerCellInfo = (args) => {
      args.node.classList.add("customicon");
    };
    let grid;

  return (
    <div className="p-10">
      <GridComponent
        dataSource={ordersData}
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
        selectionSettings={{}}
        allowSorting
        filterSettings={FilterOptions}
        pageSettings={{
          template: (pagerData) => custompager(pagerData, grid),
          pageSize: 10,
        }}
        ref={(g) => (grid = g)}
        locale='fa'


        >

        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item}></ColumnDirective>
          ))}
        </ColumnsDirective>
        <Inject services={[Page , Filter , Sort , Edit , Toolbar , Selection ]} />
      </GridComponent>
    </div>
  );
}
