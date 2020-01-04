import produce from 'immer';

const INITIAL_STATE = {
  orders: null,
  loading: false,
};

export default function order(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@order/ORDER_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@order/ORDER_SUCCESS': {
        draft.orders = action.payload.orders;
        draft.loading = false;
        break;
      }

      case '@order/ORDER_DELETE': {
        draft.loading = false;
        break;
      }

      case '@order/ORDER_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
