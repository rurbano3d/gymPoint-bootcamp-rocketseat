import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import NavigationService from '~/services/navigation';

import { orderSuccess, orderFailure } from './actions';

import api from '~/services/api';

export function* insertOrder({ payload }) {
  try {
    const { question, id } = payload;

    const response = yield call(api.post, `students/${id}/help-orders`, {
      student_id: id,
      question,
    });
    const orders = response.data;

    yield put(orderSuccess(orders));

    Alert.alert('Sucesso', 'Auxílio enviado, em breve responderemos!');

    NavigationService.navigate('Order');
  } catch (err) {
    let error = '';
    switch (err.response.data.error) {
      case 'Week order exceeded, you can only do 5 orders per week':
        error = 'Checkin excedido, vocês so pode fazer 5 orders por semana!';
        break;

      default:
        error = 'Contate o suporte!';
    }
    Alert.alert('Erro no order', `${error}`);
    yield put(orderFailure());
  }
}

export function* deleteOrder({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `help-orders/${id}`);
    const helpOrder = response.data;

    yield put(orderSuccess(helpOrder));

    Alert.alert('Sucesso', 'Pergunta apagada com sucesso!');

    NavigationService.navigate('Order');
  } catch (err) {
    Alert.alert('Erro ao deletar', 'Entre em contato com o suporte');
    yield put(orderFailure());
  }
}

export default all([
  takeLatest('@order/ORDER_REQUEST', insertOrder),
  takeLatest('@order/ORDER_DELETE', deleteOrder),
]);
