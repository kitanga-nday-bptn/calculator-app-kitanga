export function stackToString(stack: any[]) {
    let val = '';

    for (let ix = 0, length = stack.length; ix < length; ix++) {
        const item = stack[ix];

        if (Array.isArray(item)) {
            val += `(${stackToString(item)})`;
        } else {
            val += item.toString();
        }
    }

    return val;
}

export function inputStringToOutputString(input: string) {
    let val = input.replaceAll('[', '(').replaceAll(']', ')').replaceAll(',', ' ').replaceAll('"', "");

    return val.length ? val : '0';
}