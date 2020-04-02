import * as React from 'react'

export interface ButtonIProps {
    backgroundColor: string,
    disabled:boolean,
    onClick?: () => void
}

export default (props: ButtonIProps) => {
    const {backgroundColor,disabled,onClick} = props;
    return <button style={{backgroundColor}} disabled={disabled} onClick={() => alert('Clicked')}> Button</button>
}
