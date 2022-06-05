export const logMessage = (propsMessage: string, componentName: string) =>
  console.log(`${propsMessage} ${componentName}`);

let timeout: number;
export const debounce = (func: Function, wait = 300) => {
  clearTimeout(timeout);
  timeout = setTimeout(func, wait);
};
