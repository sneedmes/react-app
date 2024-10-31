import React from 'react';
type NewComponentPropsType = {
    strSum: (car: string, mark: string) => void
    car: string
    mark: string
    num: number;
    onClick: (a: number, b: number) => void
}
export const NewComponent = (props:NewComponentPropsType) => {

    console.log(props.strSum(props.car, props.mark));
    return (
        <div>
        </div>
    );
};
