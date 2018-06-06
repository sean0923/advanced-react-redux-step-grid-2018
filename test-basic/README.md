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
