import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px 30px;
  background: #f1f1f1;
`;

export const OrderButton = styled(Button)`
  width: 100%;
`;

export const OrderField = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid #dddddd;
  margin-bottom: 10px;
  padding: 15px;
`;
export const TopOrder = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Status = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TextOrderInactive = styled.Text`
  color: #999999;
  font-weight: bold;
  margin-left: 5px;
`;
export const TextOrderActive = styled.Text`
  color: #42cb59;
  font-weight: bold;
  margin-left: 5px;
`;

export const DateOrder = styled.Text`
  color: #666666;
`;
export const Question = styled.Text`
  margin-top: 10px;
  color: #666666;
`;
export const List = styled.FlatList`
  width: 100%;
  margin: 20px 0 0 0;
`;
