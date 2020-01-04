import React from 'react';
import { useDispatch } from 'react-redux';
import { Alert } from 'react-native';
import { orderDelete } from '~/store/modules/order/actions';
import { formatDate } from '~/utils';
import Header from '~/components/Header';

import {
  Container,
  Content,
  Top,
  TitleText,
  DateText,
  Question,
  Card,
  DeleteButton,
} from './styles';

export default function Answer({ navigation }) {
  const dispatch = useDispatch();
  async function handleDelete(id) {
    dispatch(orderDelete(id));
  }
  const order = navigation.getParam('item');
  return (
    <Container>
      <Header />
      <Content>
        <Card>
          <Top>
            <TitleText>PERGUNTA</TitleText>
            <DateText>{formatDate(order.createdAt)}</DateText>
          </Top>
          <Question>{order.question}</Question>
          {order.answer && (
            <>
              <Top>
                <TitleText>RESPOSTA</TitleText>
              </Top>
              <Question>{order.answer}</Question>
            </>
          )}
        </Card>

        {!order.answer && (
          <DeleteButton
            onPress={() => {
              Alert.alert(
                'Deseja apagar sua pergunta?',
                'Apos confirmar não é possível restaura-lá',
                [
                  {
                    text: 'Sair',
                    onPress: () => console.tron.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  { text: 'Apagar', onPress: () => handleDelete(order.id) },
                ],
                { cancelable: false }
              );
            }}
          >
            Apagar pergunta
          </DeleteButton>
        )}
      </Content>
    </Container>
  );
}
