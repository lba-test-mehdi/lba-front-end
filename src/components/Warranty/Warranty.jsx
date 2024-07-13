export const Warranty = ({value}) => {

    const parseContent = (value) => {
        return (value === 0) ? "Pas de garantie" : (value === 1) ? "1 an" : `${value} ans`;
    }

    return (
        <div>
            {parseContent(value)}
        </div>
    );

}