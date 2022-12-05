export function sumValuesInArray(input: number[]): number {
    return input.reduce((prev, curr) => {
        return prev + curr;
    }, 0);
}