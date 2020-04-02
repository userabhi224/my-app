import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Button", module)
    .add("Simple button", () => <Button backgroundColor="white" disabled={false}/>
    )

    .add("Different Color", () => <Button backgroundColor="Cyan" disabled={false}/>
    )

    .add("Disabled button", () => <Button backgroundColor="White" disabled={true}/>
    )

    .add("Button with icon", () => <div><Button backgroundColor="White" disabled={false}/>👍</div>
    )