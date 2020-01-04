export function checkinRequest(id) {
  return {
    type: '@checkin/CHECKIN_REQUEST',
    payload: { id },
  };
}

export function checkinSuccess(checkin) {
  return {
    type: '@checkin/CHECKIN_SUCCESS',
    payload: { checkin },
  };
}

export function checkinFailure() {
  return {
    type: '@checkin/CHECKIN_FAILURE',
  };
}
