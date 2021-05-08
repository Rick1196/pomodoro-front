export function secondsToFullTime(timeToTransform: number): Array<number> {
    const hours = parseInt(Math.floor(timeToTransform / 3600) + '', 10);
    const minutes = parseInt(Math.floor(((timeToTransform % 3600)) / 60) + '', 10);
    const seconds = (((timeToTransform % 3600)) % 60);
    return [hours, minutes, seconds];
}
