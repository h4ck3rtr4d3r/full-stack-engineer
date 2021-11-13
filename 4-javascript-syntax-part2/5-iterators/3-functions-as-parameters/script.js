/**
Since functions can behave like any other type of data in JavaScript, it might not surprise you to learn that we can also pass functions (into other functions) as parameters. A higher-order function is a function that either accepts functions as parameters, returns a function, or both! We call the function that get passed in as parameters and invoked callback functions because they get called during the execution of the higher-order funtion. 
When we pass a function in as an argument to another function, we don't invoke it. Invoking the function would evaluate to the return value of that function call. With callback, we pass in the function itself by typing the function name without the parentheses (that would evaluated to the result of calling the function):
*/

const timeFuncRuntime = (funcParameter) => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now;
  return t2 - t1;
};

const addOneToOne = () => 1 + 1;
timeFuncRuntime(addOneToOne);
