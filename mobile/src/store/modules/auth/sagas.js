import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import { signInSuccess, signFailure } from './actions';

import api from '~/services/api';

export function* signIn({ payload }) {
  try {
    const { question, id } = payload;

    const response = yield call(api.post, `students/${id}/help-orders`, {
      id,
      question,
    });
    const order = response.data;

    yield put(signInSuccess(order));

    // history.push('/dashboard');
  } catch (err) {
    Alert.alert('Erro no login', 'Aluno não encontrado');
    yield put(signFailure());
  }
}

export function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
