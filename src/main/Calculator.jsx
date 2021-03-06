import React, {Component} from 'react'
import './Calculator.css'
import Button from '../components/Button'
import Display from "../components/Display";

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
};

export default class Calculator extends Component {

    state = {...initialState};

    clearMemory = () => {
        this.setState({...initialState})
    };

    setOperation = (operation) => {
        if(this.state.current === 0){
            this.setState({operation, current: 1, clearDisplay: true})
        }else{
            const equals = operation === '=';
            const currentOperation = this.state.operation;
            const values = [...this.state.values];
            try{
                //TODO: remove eval
                values[0] = eval(`${values[0]}${currentOperation}${values[1]}`);
            }catch (e) {
                values[0] = this.state.values[0];
            }
            values[1] = 0;

            this.setState({
                displayValue: values[0].toFixed(3),
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            });

        }
    };

    addDigit = (n) => {
        if(n === '.' && (this.state.displayValue.includes('.') || this.state.displayValue === '0')){
            return
        }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;
        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = currentValue + n;
        this.setState({displayValue, clearDisplay: false});

        if(n !== '.'){
            const i = this.state.current;
            const newValue = parseFloat(displayValue);
            const values = [...this.state.values];
            values[i] = newValue;
            this.setState({values})
        }
    };


    render () {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue}/>
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
                <Button label="+" click={(label) => this.setOperation(label)} subClass="-operation"/>
                <Button label="0" click={(label) => this.addDigit(label)} subClass="-double"/>
                <Button label="." click={(label) => this.addDigit(label)}/>
                <Button label="=" click={(label) => this.setOperation(label)} subClass="-operation"/>



            </div>
        )
    }

}