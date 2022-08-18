import { StackType, Operations, StackItem } from './parseStack';

export function convertStack(stack: StackType): StackType {
    const result = stack.map((item, ix) => {
        console.log('is arr:', Array.isArray(item))

        if (Array.isArray(item)) {
            return convertStack(item);
        } else {
            console.log('even:', ix % 2 === 0);
            
            if (!(ix % 2)) {
                return item;
            } else {
                switch(item) {
                    case '+':
                        return Operations.ADDITION;
                    case '-':
                        return Operations.SUBTRACTION;
                    case '*':
                        return Operations.MULTIPLICATION;
                    case '/':
                        return Operations.DIVISION;
                }
            }
        }
    });

    return result as StackType;
}