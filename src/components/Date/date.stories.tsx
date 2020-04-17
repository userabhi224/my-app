import React, {useState} from 'react'
import { storiesOf } from '@storybook/react'
import DatePick from './DatePick'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export interface State {
    date:any
    startDate:Date
    onChange : () => void
    handleChange: () => void
  }

storiesOf("DatePicker",module)
    .add("SingleDatePicker", () => {
        const [startDate , setStartDate] = useState(new Date())
        const handleChange =(date : any)=>{
            setStartDate(date);
        }
        return(<DatePick startDate={startDate} onChange={handleChange} flag={1} />)
    })  

    .add("SingleDatePickerwithTime", () => {
        const [startDate , setStartDate] = useState(new Date())
        const handleChange =(date : any)=>{
            setStartDate(date);
        }
        return(<DatePick startDate={startDate} onChange={handleChange} flag={2} showTimeSelect timeFormat="HH:mm" timeIntervals={1} timeCaption="Time" dateFormat="MMMM d, yyyy h:mm aa" />)
    })

    .add("RangeDatePicker", () => {
        const [startDate, setStartDate] = useState(new Date("2020/02/08"))
        const [endDate, setEndDate] = useState(new Date("2024/02/10"))
        const handleChange =(date : any)=>{
           setStartDate(date);
        }
        const handleChange1 =(date : any)=>{
           setEndDate(date);
        }
        return (
            <>
            <DatePicker selected={startDate} onChange={handleChange} selectsStart startDate={startDate} endDate={endDate} />
            <DatePicker selected={endDate} onChange={handleChange1} selectsEnd startDate={startDate} endDate={endDate} minDate={startDate} />
            </>)
    })