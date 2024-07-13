import {EditableValue} from "../EditableValue/EditableValue.jsx";
import {Switch} from "@mui/material";
import {useState} from "react";

export const Availability = ({id, row, value, onValueChange}) => {

    const parseContent = (value) => {
        return (value === true) ? "✔" : "✖"
    }

    const checkContent = (value) => {
        return true;
    }

    const printOnModal = (value, onChange) => {

        const [state, setState] = useState(value);

        const handleChange = (event) => {
            setState(event.target.checked);
        };

        return <Switch
            value={!state}
            checked={state}
            onChange={(e) => {
                handleChange(e);
                onChange(e);
            }}
            />
    }

    return (
        <EditableValue
            id={id}
            row={row}
            value={value}
            onValueChange={onValueChange}
            checkContent={checkContent}
            parseContent={parseContent}
            showContent={printOnModal}
        />
    );

}