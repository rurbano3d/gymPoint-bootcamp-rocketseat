import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import api from '~/services/api';
import { formatDate } from '../../utils';

import Header from '~/components/Header';
import {
  Container,
  Content,
  OrderButton,
  OrderField,
  TextOrderActive,
  TextOrderInactive,
  List,
  Question,
  TopOrder,
  DateOrder,
  Status,
} from './styles';

function Order({ navigation, isFocused }) {
  const student = useSelector(state => state.auth.student);
  const [orders, setOrders] = useState({});
  const [page, setPage] = useState(null);
  const [refresh, setRefresh] = useState(false);

  async function loadOrders(page = 1) {
    const response = await api.get(`students/${student.id}/help-orders`, {
      params: { page },
    });
    setRefresh(false);
    setPage(page);
    setOrders(page >= 2 ? [...orders, ...response.data] : response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadOrders();
    }
  }, [isFocused]);// eslint-disable-line

  function loadMore() {
    const next = page + 1;
    loadOrders(next);
  }

  return (
    <Container>
      <Header />
      <Content>
        <OrderButton
          onPress={() => navigation.navigate('NewOrder', { student })}
        >
          Novo pedido de auxílio
        </OrderButton>
        <List
          onRefresh={loadOrders}
          refreshing={refresh}
          onEndReachedThreshold={0.001}
          onEndReached={loadMore}
          data={orders}
          keyExtract={item => String(item.id)}
          renderItem={({ item }) => (
            <OrderField onPress={() => navigation.navigate('Answer', { item })}>
              <TopOrder>
                {item.answer ? (
                  <Status>
                    <Icon name="check-circle" size={16} color="#42cb59" />
                    <TextOrderActive>Respondido</TextOrderActive>
                  </Status>
                ) : (
                  <Status>
                    <Icon name="check-circle" size={16} color="#dddddd" />
                    <TextOrderInactive>Sem Resposta</TextOrderInactive>
                  </Status>
                )}

                {item.answer ? (
                  <DateOrder>{formatDate(item.answer_at)}</DateOrder>
                ) : (
                  <DateOrder>{formatDate(item.createdAt)}</DateOrder>
                )}
              </TopOrder>
              <Question>{item.question}</Question>
            </OrderField>
          )}
        />
      </Content>
    </Container>
  );
}
export default withNavigationFocus(Order);
