export function orderRequest(question, id) {
  return {
    type: '@order/ORDER_REQUEST',
    payload: { question, id },
  };
}
export function orderDelete(id) {
  return {
    type: '@order/ORDER_DELETE',
    payload: { id },
  };
}
export function orderSuccess(order) {
  return {
    type: '@order/ORDER_SUCCESS',
    payload: { order },
  };
}

export function orderFailure() {
  return {
    type: '@order/ORDER_FAILURE',
  };
}
