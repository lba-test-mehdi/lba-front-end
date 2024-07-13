import {EditableValue} from "../EditableValue/EditableValue.jsx";

export const Price = ({id, row, value, onValueChange}) => {

    const parseContent = (value) => {
        return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(value)
    }

    const checkContent = (value) => {
        return !isNaN(value);
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