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
    const strSumHandler = () => {
        document.write("<h1>" + strSum(car, mark) + "</h1>")
    }
    return (
        <>
            {/*<div onClick={()=>strSum(car, mark)}></div>*/}
            <div className="result"></div>
            <button onClick={strSumHandler}>Push me</button>
            <div>{num}</div>
            <button>add</button>
        </>
    )
}