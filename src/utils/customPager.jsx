import React from "react";
import { useStateContext } from "../Contexts/Contextprovider";
import { NumericTextBoxComponent } from "@syncfusion/ej2-react-inputs";


export default function template (pagerData , grid) {

  const { cuurentMode } = useStateContext();

  const change = (args) => {
        grid.pageSettings.currentPage = args.value;
    };

    return <div className="e-pagertemplate" style={{display : "flex" , gap : "20px"}}>
        <div style={{padding : "3px" , marginRight : "15px" }} className="control-section">
            <div className="content-wrapper border-b-1">
            <NumericTextBoxComponent min={1} max={pagerData.totalPages} value={pagerData.currentPage}  format='###.##' change={change} style={{color : cuurentMode === "Dark" ? "#fff" : "#000" , textAlign: "center"   }}></NumericTextBoxComponent>
            </div>
        </div>

        <div  id="totalPages" className="e-pagertemplatemessage" style={{marginTop : 8 , marginLeft : 30 , border : "none" , display : "inline-block"}}>

        <span className="e-pagenomsg gap-3">
           صفحه {pagerData.currentPage} از {pagerData.totalPages}

           <span className="pr-2">
           ({pagerData.totalRecordsCount} مورد)

           </span>
           
          </span>

        </div>

     
    </div>
}
