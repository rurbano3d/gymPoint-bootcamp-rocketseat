import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View``;

export const Content = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  display: flex;

  align-items: center;
  background: #f1f1f1;
  height: 100%;
`;
export const Card = styled.View`
  display: flex;
  width: 90%;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #dddddd;
  margin-top: 30px;
`;
export const Top = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
`;
export const TitleText = styled.Text`
  font-weight: bold;
  color: #444444;
`;
export const DateText = styled.Text`
  color: #666666;
`;
export const Question = styled.Text`
  color: #666666;
  padding: 5px 0 15px 15px;
`;

export const DeleteButton = styled(Button)`
  width: 90%;
  margin-top: 20px;
`;
