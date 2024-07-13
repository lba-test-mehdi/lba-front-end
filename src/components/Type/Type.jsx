import {EditableValue} from "../EditableValue/EditableValue.jsx";

export const Type = ({id, row, value, onValueChange}) => {

    const parseContent = (value) => {
        return value.toLowerCase();
    }

    const checkContent = (value) => {
        return !/\d/.test(value);
    }

    return (
        <EditableValue
            id={id}
            row={row}
            value={value}
            onValueChange={onValueChange}
            checkContent={checkContent}
            parseContent={parseContent}
        />
    );

}