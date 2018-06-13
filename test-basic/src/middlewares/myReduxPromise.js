export default ({ dispatch }) => next => action => {
  // if there is no payload and payload is not a promise
  // then send it to next middleware
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  // arriving this line mean payload is promise
  // then wait for it to resolve and call dispath new action
  action.payload.then(data => {
    const newAction = {
      ...action,
      payload: data,
    };
    dispatch(newAction);
  });
};


