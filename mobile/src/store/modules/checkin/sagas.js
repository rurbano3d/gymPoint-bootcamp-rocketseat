import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import { checkinSuccess, checkinFailure } from './actions';

import api from '~/services/api';

export function* insertCheckin({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.post, `students/${id}/checkins`);
    const checkins = response.data;

    yield put(checkinSuccess(checkins));
  } catch (err) {
    let error = '';
    switch (err.response.data.error) {
      case 'Week checkin exceeded, you can only do 5 checkins per week':
        error = 'Checkin excedido, vocês so pode fazer 5 checkins por semana!';
        break;

      default:
        error = 'Contate o suporte!';
    }
    Alert.alert('Erro no checkin', `${error}`);
    yield put(checkinFailure());
  }
}

export default all([takeLatest('@checkin/CHECKIN_REQUEST', insertCheckin)]);
