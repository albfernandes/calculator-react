import React, {Component} from 'react'
import './Calculator.css'
import Button from '../components/Button'
import Display from "../components/Display";

export default class Calculator extends Component {

    clearMemory = () => {
        console.log('limpar');
    };

    setOperation = (operation) => {
        console.log(operation);
    };

    addDigit = (n) => {
        console.log(n);
    };


    render () {
        return (
            <div className="calculator">
                <Display value={100}/>
                <Button label="AC" click={() => this.clearMemory()} subClass="-triple"/>
                <Button label="/" click={(label) => this.setOperation(label)} subClass="-operation"/>
                <Button label="7" click={(label) => this.addDigit(label)}/>
                <Button label="8" click={(label) => this.addDigit(label)}/>
                <Button label="9" click={(label) => this.addDigit(label)}/>
                <Button label="*" click={(label) => this.setOperation(label)} subClass="-operation"/>
                <Button label="4" click={(label) => this.addDigit(label)}/>
                <Button label="5" click={(label) => this.addDigit(label)}/>
                <Button label="6" click={(label) => this.addDigit(label)}/>
                <Button label="-" click={(label) => this.setOperation(label)} subClass="-operation"/>
                <Button label="1" click={(label) => this.addDigit(label)}/>
                <Button label="2" click={(label) => this.addDigit(label)}/>
                <Button label="3" click={(label) => this.addDigit(label)}/>
                <Button label="+" click={(label) => this.addDigit(label)} subClass="-operation"/>
                <Button label="0" click={(label) => this.addDigit(label)} subClass="-double"/>
                <Button label="." click={(label) => this.setOperation(label)}/>
                <Button label="=" click={(label) => this.setOperation(label)} subClass="-operation"/>



            </div>
        )
    }

}