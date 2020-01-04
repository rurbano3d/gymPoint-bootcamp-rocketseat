import produce from 'immer';

const INITIAL_STATE = {
  checkins: [],
};

export default function checkin(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@checkin/CHECKIN_REQUEST': {
        break;
      }

      case '@checkin/CHECKIN_SUCCESS': {
        draft.checkins = action.payload.checkins;
        break;
      }

      case '@checkin/CHECKIN_FAILURE': {
        break;
      }

      default:
    }
  });
}
