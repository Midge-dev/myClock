import React from 'react'

export default function DropDown({onClick}) {

    const timeZones = [
        {label: "New York", value: "America/New_York"},{label: "Los Angeles", value: "America/Los_Angeles"}]

    return (
        <select onChange={onClick} >
            <option value="" >
                Choose a Time Zone
            </option>
            {timeZones.map((tz) => {
                return (
                    <option value= {tz.value}>{tz.label}</option>
                )
            })}
        </select>
    )
}
