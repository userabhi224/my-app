import * as React from 'react'
import Image from '../save.png'

export interface ButtonIProps {
    backgroundColor: string,
    disabled:boolean,
    image?: HTMLImageElement
}

export default (props: ButtonIProps) => {
    const {backgroundColor,disabled,image} = props;
    return <button style={{backgroundColor}} disabled={disabled}> Button</button>
}
