import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Button", module)
    .add("Simple button", () => <Button backgroundColor="White" disabled={false}/>)

    .add("Different Color", () => <Button backgroundColor="Green" disabled={false}/>)

    .add("Disabled button", () => <Button backgroundColor="White" disabled={true}/>)

    .add("Button with icon", () => <div><Button backgroundColor="White" disabled={false}/>👍</div>)