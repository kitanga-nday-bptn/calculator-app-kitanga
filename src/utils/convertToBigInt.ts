import { StackType } from "./parseStack";

export type ProcessedStackItem = number | string;

export type ProcessedStackType = (ProcessedStackItem | ProcessedStackItem[])[];

export function convertToBigInt(stack: StackType): any {
    const newStack = stack.map(item => {
        if (typeof item === 'number') {
            return BigInt(item);
        } else if (Array.isArray(item)) {
            return convertToBigInt(item);
        } else {
            return item;
        }
    });

    return newStack;
}