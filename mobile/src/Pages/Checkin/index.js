import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '~/components/Header';
import api from '../../services/api';
import { checkinRequest } from '../../store/modules/checkin/actions';
import { formatDate } from '../../utils';

import {
  Container,
  CheckinButton,
  List,
  CheckinField,
  TextCheckin,
  DateCheckin,
} from './styles';

export default function Checkin() {
  const dispatch = useDispatch();
  const student = useSelector(state => state.auth.student);
  const [checkins, setCheckins] = useState({});
  const [page, setPage] = useState(null);
  const [refresh, setRefresh] = useState(false);
  async function loadCheckin(page = 1) {
    const response = await api.get(`students/${student.id}/checkins`, {
      params: { page },
    });
    setRefresh(false);
    setPage(page);
    setCheckins(page >= 2 ? [...checkins, ...response.data] : response.data);
  }
  useEffect(() => {
    loadCheckin();
  }, [refresh]);// eslint-disable-line

  async function handleNewCheckin() {
    dispatch(checkinRequest(student.id));
    setRefresh(true);
  }

  function loadMore() {
    const next = page + 1;
    loadCheckin(next);
  }

  return (
    <>
      <Header />
      <Container>
        <CheckinButton onPress={handleNewCheckin}>Novo check-in</CheckinButton>
        <List
          onRefresh={loadCheckin}
          refreshing={refresh}
          onEndReachedThreshold={0.001}
          onEndReached={loadMore}
          data={checkins}
          keyExtract={item => String(item.id)}
          renderItem={({ item }) => (
            <CheckinField>
              <TextCheckin>Check-in #{item.id}</TextCheckin>
              <DateCheckin>{formatDate(item.createdAt)}</DateCheckin>
            </CheckinField>
          )}
        />
      </Container>
    </>
  );
}

Checkin.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="edit-location" size={20} color={tintColor} />
  ),
};
