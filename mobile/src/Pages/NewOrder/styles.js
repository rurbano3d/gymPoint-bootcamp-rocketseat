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
  padding: 20px;
  background: #f1f1f1;
`;

export const FormInput = styled.TextInput.attrs({
  placeholderTextColor: '#999999',
})`
  font-size: 15px;
  width: 100%;
  color: #333;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #dddddd;
  padding-left: 20px;
`;

export const Form = styled.View``;

export const SubmitButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
`;
