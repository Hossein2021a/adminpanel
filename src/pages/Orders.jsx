import React from "react";
import custompager from "../utils/customPager";
import { L10n } from "@syncfusion/ej2-base";
import { ordersData, ordersGrid } from "../data/dummy";
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Resize,
  Sort,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
  Toolbar,
  
} from "@syncfusion/ej2-react-grids";


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


export default function Orders() {
  let grid;
  const headerCellInfo = (args) => {
    args.node.classList.add("customicon");
  };

  return (
    <div className="mt-5 m-[5%]">
      <GridComponent
        dataSource={ordersData}
        headerCellInfo={headerCellInfo}
        allowPaging
        allowSorting
        enableRtl
        allowFiltering
        allowExcelExport
        allowPdfExport
    
        pageSettings={{
          template: (pagerData) => custompager(pagerData, grid),
          pageSize: 8,
        }}
        ref={(g) => (grid = g)}
        width="auto">
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>

        <Inject
          services={[
            Page,
            Filter,
            Resize,
            ExcelExport,
            PdfExport,
            Sort,
            
          ]}
        />
      </GridComponent>
    </div>
  );
}
