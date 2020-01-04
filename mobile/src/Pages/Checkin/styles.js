import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px 30px;
`;

export const CheckinButton = styled(Button)`
  width: 100%;
`;

export const List = styled.FlatList`
  width: 100%;
  margin: 20px 0 0 0;
`;
export const CheckinField = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #dddddd;
  border-radius: 4px;
  height: 46px;
  margin: 0 0 10px 0;
  width: 100%;
`;
export const TextCheckin = styled.Text`
  font-weight: bold;
  margin-left: 20px;
`;
export const DateCheckin = styled.Text`
  margin-right: 20px;
`;
