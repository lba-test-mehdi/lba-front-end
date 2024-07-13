import {EditableValue} from "../EditableValue/EditableValue.jsx";

export const Name = ({id, row, value, onValueChange}) => {

    const parseContent = (value) => {
        return value;
    }

    const checkContent = (value) => {
        return value.length > 0;
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