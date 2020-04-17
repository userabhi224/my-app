import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export interface DateIProps{
    flag?:number,
    startDate: Date
    timeCaption?: string
    onChange:(date : any)=>void
    timeFormat?:string
    dateFormat?:string
    timeIntervals?:number
    showTimeSelect?:any
    selected?:Date
    endDate?:Date
    minDate?:Date
}
export default (props:DateIProps)=> {
    const {flag,startDate,timeCaption,onChange,timeFormat,dateFormat,timeIntervals,showTimeSelect,selected,endDate,minDate}=props;
    
    if(flag===1)
        return (<DatePicker selected={startDate} onChange={onChange} />)
    else if(flag===2)
        return(<DatePicker selected={startDate} onChange={onChange} timeIntervals={timeIntervals} timeCaption={timeCaption} timeFormat={timeFormat} dateFormat={dateFormat} showTimeSelect />)
    else 
        return(
        <>
        <DatePicker selected={startDate} onChange={onChange} selectsStart startDate={startDate} endDate={endDate} />
        <DatePicker selected={endDate} onChange={onChange} selectsEnd startDate={startDate} endDate={endDate} minDate={startDate} />
        </>)
} 
  
