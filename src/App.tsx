import React from 'react';
import './App.css';
import {Button} from "./components/ui/button/button";
import {NewComponent} from "./components/ui/newComponent/NewComponent";

function App() {
    const onClick = (a: number, b: number) => {
        return a + b
    }
    let car = "bmw"
    let mark = "e34"
    let strSum = (car: string, mark: string) => {
        return car + mark
    }
    let num = 15;
    return (
        <div className="App">
            <div>Hello World</div>
            <NewComponent strSum={strSum} car={car} mark={mark} num={num} onClick={onClick}/>
            <Button num={num} onClick={onClick} strSum={strSum} car={car} mark={mark}/>
        </div>
    );
}

export default App;
