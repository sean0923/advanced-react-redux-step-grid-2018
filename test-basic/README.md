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

### Prob
- describe block can limit the beforeEach scope

- test throws many errors when wrapping react component with connect()
- connect looks for <Provider>
- in a test environment, component is render by itself without being wrapped by <Provider>
- that is why many errors happen the moment you wrap react component with connect()

### Solution !
- make Root.js functional stateless component
- wrap props.children with <Provider store={store}>
- call Root.js for all test with connect()
- then wrap test component with <Root>

### Prob
- how to test redux state in react component

### Solution
const Root = ({ children, initialState = {} }) => {
  const store = createStore(rootReducer, initialState);

  return <Provider store={store}>{children}</Provider>;
};


- Enzyme docs says 'component.render()' -> 'Returns a CheerioWrapper'
- CheerioWapper is like jQuery can use .text() etc...

## Testing HTTP request
- yarn add axios redux-promise moxios

## Unit vs Integration Test

- Unit - one at a time
- Integration - multiple at the same time

1. mount app with provider
2. click fetch btn
3. count how many li tag

But test fail in btw step 2 and 3 because http req CANNOT be made in jest environment 

### Solution
- use moxios (fake axios) maintained by axios

- moxios takes time to do stub req
- one solution is using settimeout with 100ms
- but you never know how long moxios will take to do stub req
- better solution is using moxios.wait

- IMPORTANT component.update() must be inside of wait before checking

## Conclusion
- Step Grid think integration tests are lot more valuable and I agree.

