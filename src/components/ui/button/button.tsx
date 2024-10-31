// export const Button = () => {
//     return <button>Add</button>
// }
type ButtonPropsType = {
    num: number
    onClick: (a:number,b:number) => void
    strSum: (car: string, mark: string) => void
    car: string
    mark: string
}
export function Button ({num, onClick, strSum, car, mark}:ButtonPropsType) {
    // console.log(onClick(num, 11))
    // console.log(strSum(car, mark))
    const strSumHandler = () => {
        strSum(car, mark)
    }
    return (
        <>
            {/*<div onClick={()=>strSum(car, mark)}></div>*/}
            <div onClick={strSumHandler}></div>
            <div>{num}</div>
            <button>add</button>
        </>
    )
}