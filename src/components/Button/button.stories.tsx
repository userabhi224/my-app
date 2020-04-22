import React from "react"
import { storiesOf } from "@storybook/react"
import { boolean } from "@storybook/addon-knobs"
import { actions } from "@storybook/addon-actions"
import Button from "./Button"

storiesOf("Button", module)
    .add("Simple button", () => <Button backgroundColor="White" disabled={boolean("Disabled", false)}/>)

    .add("Different Color", () => <Button backgroundColor="Green" disabled={boolean("Disabled", false)}/>)

    .add("Disabled button", () => <Button backgroundColor="White" disabled={boolean("Disabled", false)}/>)

    .add("Button with icon", () => <div><Button backgroundColor="White" disabled={false}/>👍</div>)