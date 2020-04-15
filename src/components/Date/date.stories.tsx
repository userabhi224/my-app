import React from "react";
import { storiesOf } from "@storybook/react";
import DatePicker from "./Date";

storiesOf("Date", module)
    .add("SingleDatePicker", () => <DatePicker dateFormat="d-MM-yyyy" fromStartDate="04-04-2020" isTodate={false} isSingleDate={true} />)

    .add("SingleDatePickerwithTime", () => <DatePicker dateFormat="d-MM-yyyy hh:mm" fromStartDate="04-04-2020" isTodate={false} isSingleDate={true} />)

    .add("RangeDatePicker", () => <DatePicker dateFormat="d-MM-yyyy" fromStartDate="04-04-2020" isTodate={true} />)
    
    .add("RangeDatePickerwithTime", () => <DatePicker dateFormat="d-MM-yyyy hh:mm" fromStartDate="04-04-2020"  isTodate={true} />)
