### Stephen Grider Advnaced React Redux 2018 ver

My notes from taking this udemy online course

## TEST 

set up enzyme with "setupTests.js"
- file name is important because Jest will run that file before run other tests

- 

const e = {
  target: {
    value: userInput,
  },
};
component.find('textarea').simulate('change', e);

e is event

component.update() -> use for force rerender on setState(async)