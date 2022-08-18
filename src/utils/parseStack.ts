import { convertStack } from "./convertStack";
import { convertToBigInt, ProcessedStackType } from "./convertToBigInt";

export enum Operations {
    ADDITION = '+',
    SUBTRACTION = '-',
    MULTIPLICATION = '*',
    DIVISION = '/',
}

export type operationType = '+' | '-' | '*' | '/';
export type StackItem = number | string;

export type StackType = (StackItem | StackItem[])[];

export function parseStack(_stack: StackType): number | undefined {
    // const stack = convertToBigInt(_stack) as ProcessedStackType;
    // const stack = convertStack(_stack);
    const stack = _stack.concat([]);

    console.log(stack.join(''));

    if (stack.length === 1) {
        return stack[0] as number;
    }

    // Find an array first
    const arrayIndex = stack.findIndex((item, ix) => {
        if (ix % 2) return false;

        if (Array.isArray(item)) {
            return true;
        }

        return false;
    });

    console.log('arrIx:', arrayIndex);

    if (arrayIndex > -1) {
        const answer = parseStack(stack[arrayIndex] as StackType);

        console.log('answer:', answer);

        stack.splice(arrayIndex, 1, answer as number);

        return parseStack(stack);
    }

    // Look for multiplication/division symbols
    const divMultIndex = stack.findIndex((item, ix) => {
        // if (ix % 2 === 0) return false;
 
        if (item === Operations.MULTIPLICATION || item === Operations.DIVISION) {
            return true;
        } else {
            return false;
        }
    });

    let startOppIndex = -1;

    if (divMultIndex > 0) {
        // Do the operation
        startOppIndex = divMultIndex - 1;
    } else {
        const addSubIndex = stack.findIndex(item => {
            if (item === Operations.SUBTRACTION || item === Operations.ADDITION) {
                return true;
            } else {
                return false;
            }
        });

        if (addSubIndex > 0) {
            startOppIndex = addSubIndex - 1;
        }
    } 

    // Get the numbers to operate on
    const operands = getOperands(stack, startOppIndex);

    const [num1, opp, num2] = operands;

    console.log("Operands:", operands.join(','))

    // Do de operations!!
    const currentAnswer = operate(num1, num2, opp);

    console.log("Pre-splice:", stack.join(' '))
    console.log('StartOp:', startOppIndex);
    console.log('End Opp:', startOppIndex + 3);
    
    // Replace the calculation location with new answer
    const local = stack.splice(startOppIndex, 3, currentAnswer);

    console.log("Spliced out:", local)

    return parseStack(stack);
}

function getOperands(stack: StackType, startPosition: number) {    
    // const result = [];

    // for (let ix = startPosition, length = 3; ix < startPosition + 4; ix++) {
    //     result[ix] = stack
    // }
    return stack.slice(startPosition, startPosition + 3) as [number, Operations, number];
}

function operate(num1: number, num2: number, operation: Operations) {
    console.log('num1:', num1);
    console.log('num2:', num2);
    console.log('opp:', operation);

    switch (operation) {
        case Operations.ADDITION:
            return num1 + num2;
        case Operations.SUBTRACTION:
            return num1 - num2;
        case Operations.MULTIPLICATION:
            return num1 * num2;
        case Operations.DIVISION:
            return num1 / num2;
    }
}