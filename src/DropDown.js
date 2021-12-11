import React from 'react'

export default function DropDown({className}) {
    return (
        <select className={className}>
            <option value="" >
                text
            </option>
            <option value="text1" >
                different text
            </option>
            <option value="text2">
                more text
            </option>
                
                
        </select>
    )
}
