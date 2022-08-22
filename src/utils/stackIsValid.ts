export function stackIsValid(stack: any[]) {
    let isValid = true;

    if (stack.length % 2 === 0) {
        isValid = false;

        return isValid;
    }

    for (let ix = 0, length = stack.length; ix < length; ix++) {
         const item = stack[ix];

         if (Array.isArray(item)) {
            const validStatus = stackIsValid(item);

            if (!validStatus) {
                isValid = false;
                
                break;
            }
         }
    }

    return isValid;
}