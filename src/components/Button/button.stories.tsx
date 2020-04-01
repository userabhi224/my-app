import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";
import image from '../components/save.png'

storiesOf("Button", module)
    .add("Simple button", () => <Button backgroundColor="white" disabled={false}/>
    )

    .add("different Color", () => <Button backgroundColor="Cyan" disabled={false}/>
    )

    .add("Disabled", () => <Button backgroundColor="White" disabled={true}/>
    )

    .add("Button with icon", () => <Button backgroundColor="White" disabled={false}/>
    )