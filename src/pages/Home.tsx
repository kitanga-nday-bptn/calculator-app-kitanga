import './home.css';

import { Box, Container, Paper } from "@mui/material";
import { Buttons } from "../components/Buttons/Buttons";
import { Output } from "../components/Output/Output";
import { useState } from 'react';
import { Operations, parseStack } from '../utils/parseStack';
import { stackIsValid } from '../utils/stackIsValid';
import { inputStringToOutputString } from '../utils/stackToString';

interface IState {
    input: string;
    output: string;
    // lastInputWasOpp: boolean;
    // bracketsOpen: boolean;
}

export function Home() {
    const [state, setState] = useState<IState>({
        // input: `2.3,"+",[8,"-",6],"+",3,"*",[3,"+",[8,"*",9]]`,
        input: ``,
        output: '',
    });

    const buttonPressed = (val: number | string) => {
        const isFirstValue = state.input.length === 0;
        const lastValues = state.input.split(',');
        const lastValue = state.input[state.input.length - 1] as any;
        const lastNumIx = state.input.lastIndexOf(',');
        const lastNum = state.input.slice(lastNumIx + 1);
        const operations = [Operations.ADDITION, Operations.SUBTRACTION, Operations.DIVISION, Operations.MULTIPLICATION];
        const lastValueWasOpp = operations.includes(lastValue) || lastValue === '"';

        const isOpp = operations.includes(val.toString() as Operations);

        //#region  Don't do anything if any of these is true

        if (val === '.') {
            if (!state.input) {
                return;
            }

            // Check if the previous input is a closing brace
            if (lastValue === ']' || lastValue === '[') {
                return;
            }

            // Is the last value a number and does it have a decimal point already? 
            if (!lastValueWasOpp && lastValues[lastValues.length - 1].includes('.')) {
                return;
            } 
        }
        
        //#endregion

        if (isOpp) {
            if (!isFirstValue) {
                setState({
                    ...state,
                    input: `${state.input + ',' + '"' + val.toString() + '"'}`,
                });
            }
        } else if (lastValueWasOpp) {
            // If the last value was an operation and the current value we adding isn't an operation
            if (val === '.') {
                setState({
                    ...state,
                    input: `${state.input + ',' + '0' + val.toString()}`,
                });
            } else {
                setState({
                    ...state,
                    input: `${state.input + ',' + val.toString()}`,
                });
            }
        } else {
            // Otherwise just add the value to the end (e.g. when the previous value is a number or parentheses)

            if (val === '[' && !lastValues[lastValues.length - 1].includes('"') && !isFirstValue) {
                setState({
                    ...state,
                    input: `${state.input + `,"*",` + val.toString()}`,
                });
            } else {
                setState({
                    ...state,
                    input: `${state.input + val.toString()}`.replaceAll(',0', ','),
                });
            }
        }
    };

    // const buttonPressed = (val: number | string) => {
    //     console.log('button pressed:', val);
    //     const operations = [Operations.ADDITION, Operations.SUBTRACTION, Operations.DIVISION, Operations.MULTIPLICATION];
    //     const lastValue = state.input[state.input.length] as Operations
    //     const isOpp = operations.includes(val.toString() as Operations);
    //     const lastValueWasOpp = operations.includes(lastValue);
    //     const isFirstValue = state.input.length === 0;

    //     // if (state.lastInputWasOpp) {
    //     // if (isOpp) {
    //     if (typeof val === 'number') {
    //         // @ts-ignore
    //         if (lastValue === ']') {
    //             setState({
    //                 ...state,
    //                 input: `${state.input + ',' + Operations.MULTIPLICATION + ',' + val.toString()}`
    //             });
    //         } else if (lastValue.length && lastValue[lastValue.length - 1] === '.') {
    //             setState({
    //                 ...state,
    //                 input: `${state.input + val.toString()}`,
    //             });
    //         } else {
    //             setState({
    //                 ...state,
    //                 input: `${state.input + (isFirstValue ? '' : ',') + val.toString()}`,
    //             });
    //         }
    //     } else if (typeof val === 'string') {
    //         if (val === '.') {
    //             // First take the current input and split it up into spaces where there are operator and parenthesis characters
    // const newInputArr = state.input.toString().replaceAll(/[+-\/*()]/g, ' ').replaceAll(',', '').split(' ');

    //             console.log('New input:', newInputArr);

    //             const lastNum = newInputArr[newInputArr.length - 1];

    //             if (lastNum.toString().includes('.')) {
    //                 return;
    //             }

    //             if (lastValueWasOpp) {
    //                 return;
    //             }

    //             // @ts-ignore
    //             if (lastValue === '[' || lastValue === ']') {
    //                 return;
    //             }

    //             setState({
    //                 ...state,
    //                 input: `${state.input + val.toString()}`
    //             });
    //         } else {
    //             if (val === '[') {
    //                 if (typeof lastValue === 'number') {
    //                     setState({
    //                         ...state,
    //                         input: `${state.input + ',' + '*' + ',' + val.toString()}`
    //                     });
    //                 } else {
    //                     setState({
    //                         ...state,
    //                         input: `${state.input + (isFirstValue ? '' : ',') + val.toString()}`
    //                     });
    //                 }
    //             } else if (val === ']') {
    //                 setState({
    //                     ...state,
    //                     input: `${state.input + val.toString()}`
    //                 });
    //             } else {
    //                 setState({
    //                     ...state,
    //                     input: `${state.input + ',' + '"'  + val.toString() + '"'}`
    //                 });
    //             }
    //         }
    //     }
    //     // }
    //     // }
    // };

    const resetInput = () => {
        setState({
            ...state,
            input: '',
            output: '',
        })
    };

    const deleteChar = () => {
        let lastValue = state.input[state.input.length - 1];

        if (state.input[state.input.length - 1] === ',') {
            if (state.input[state.input.length - 2] === '"') {
                lastValue = '",';
            }
        }

        let backspace;

        if (lastValue === '",' || lastValue === ',"') {
            backspace = -5;
        } else if (lastValue === ',') {
            backspace = -1;
        } else {
            backspace = -1;
        }

        setState({
            ...state,
            input: state.input.slice(0, backspace),
        })
    };

    const negate = () => {
        //
        const lastValues = state.input.split(',');
        const lastValue = lastValues[lastValues.length - 1];
        const lastInput = parseFloat(lastValue);
        const notNumber = Number.isNaN(lastInput);

        console.log("lastInput:", lastInput)
        console.log("lastValue:", lastValue)

        if (notNumber) return;

        if (Number.isNaN(parseFloat(lastValue[lastValue.length - 1]))) {
            console.log('nan failure')
            return;
        }
        if (lastValue.replaceAll(']','%G%').replaceAll('[','%G%').includes('%G%')) {
            console.log('bracket failure')
            return;
        }
        
        const negatedVal = lastInput * -1;

        console.log('working')
        
        console.log("last input:", negatedVal);

        lastValues[lastValues.length - 1] = negatedVal.toString();

        setState({
            ...state,
            input: lastValues.join(',')
        });
    };

    let processedInput = [];

    try {
        const json = JSON.parse(`[${state.input}]`);

        console.log('jsons:', json);

        processedInput = json;
    } catch (err) {
        processedInput = [];
        console.log('theres an error!');
    }

    console.log('state input:', state.input)
    console.log('Processed input:', processedInput)

    const isValid = stackIsValid(processedInput);

    if (!isValid) {
        processedInput = [];
    }

    return (
        <Box className="custom-container" sx={{
            padding: '34px 3.4%',
            maxWidth: '375px',
            height: '90%',
            borderRadius: 3,
            margin: '0 auto',
            flexGrow: 1,
            background: 'rgb(118,78,196)',
            backgroundImage: 'linear-gradient(20deg, rgba(118,78,196,1) 0%, rgba(39,16,140,1) 100%)',
        }}>
            <Box
                id="answer"
                sx={{
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '25px',
                minHeight: 25,
            }}>
                <span>{parseStack(processedInput)}</span>
            </Box>
            <Output output={inputStringToOutputString(state.input)} />
            <Buttons negate={negate} buttonPressed={buttonPressed} deleteChar={deleteChar} resetInput={resetInput} />
        </Box>
        // TODO: Place theme switcher
    )
}
