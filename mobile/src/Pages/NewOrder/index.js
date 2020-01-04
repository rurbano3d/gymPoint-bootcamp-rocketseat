import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Header from '~/components/Header';

import { orderRequest } from '~/store/modules/order/actions';

import { Container, Content, FormInput, Form, SubmitButton } from './styles';

export default function NewOrder({ navigation }) {
  const dispatch = useDispatch();
  const student = navigation.getParam('student');
  const [question, setQuestion] = useState('');

  async function handleSubmit() {
    dispatch(orderRequest(question, student.id));
  }

  return (
    <Container>
      <Header />
      <Content>
        <Form>
          <FormInput
            name="question"
            textAlignVertical="top"
            placeholder="Inclua seu pedido de auxílio"
            numberOfLines={10}
            multiline
            value={question}
            onChangeText={setQuestion}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton onPress={handleSubmit}>Enviar pedido</SubmitButton>
        </Form>
      </Content>
    </Container>
  );
}
