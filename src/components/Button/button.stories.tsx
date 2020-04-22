import React from "react"
import { storiesOf } from "@storybook/react"
import { boolean } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"
import Button from "./Button"

storiesOf("Button", module)
    .add("Simple button", () => <Button backgroundColor="White" disabled={boolean("Disabled", false)} onClick={action('click')}/>)

    .add("Different Color", () => <Button backgroundColor="Green" disabled={boolean("Disabled", false)} onClick={action('click')}/>)

    .add("Disabled button", () => <Button backgroundColor="White" disabled={boolean("Disabled", false)} onClick={action('click')}/>)

    .add("Button with icon", () => <div><Button backgroundColor="White" disabled={false} onClick={action('click')}/>👍</div>)