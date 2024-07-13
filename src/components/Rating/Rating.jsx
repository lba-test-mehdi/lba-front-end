import {EditableValue} from "../EditableValue/EditableValue.jsx";
import {Rating as MuiRating} from "@mui/material";


export const Rating = ({id, row, value, onValueChange, name}) => {

    const parseContent = (value) => {
        return <MuiRating name={name} value={value} readOnly />;
    }

    const checkContent = (value) => {
        return !/\d/.test(value);
    }

    return (
        <EditableValue
            id={id}
            value={value}
            row={row}
            onValueChange={onValueChange}
            checkContent={checkContent}
            parseContent={parseContent}
        />
    );

}