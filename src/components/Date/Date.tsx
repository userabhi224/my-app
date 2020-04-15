import  React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export interface DateIProps{
dateFormat?:string,
fromStartDate:string,
toStartaDte?:Date,
isTodate?:boolean,
isTimeReq?:boolean,
isSingleDate?:boolean,
onChange?:()=>void
}
export default (props:DateIProps) => {
    const{dateFormat,fromStartDate,toStartaDte,isTodate,isTimeReq,isSingleDate,onChange}=props;
    return <div>
        {isSingleDate===true &&( <div><label>From Date :</label>
            <DatePicker dateFormat={dateFormat} selected={new Date()} onChange={() =>{}} /> </div> )
        }
   
        {isTodate===true &&( <div>
            <label>From Date :</label>
                <DatePicker dateFormat={dateFormat} selected={new Date()} onChange={() =>{}} />

            <label>To Date :</label>
                <DatePicker dateFormat={dateFormat} selected={new Date()} onChange={() =>{}} /> </div> )
        }
        </div>
}
