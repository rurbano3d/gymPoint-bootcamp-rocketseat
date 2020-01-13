import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';

import { addMonths } from 'date-fns';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { Form, Select } from '@rocketseat/unform';

import {
  registrationRequest,
  registrationUpdate,
} from '~/store/modules/registration/actions';
import Button from '~/components/Button';
import ButtonLink from '~/components/ButtonLink';
import DateInput from '~/components/DateInput';
import CurrencyInput from '~/components/CurrencyInput';
import AsyncSelect from '~/components/AsynSelect';

import { formatDate } from '~/util';

import api from '~/services/api';

import { Right, Content } from './styles';
import 'react-datepicker/dist/react-datepicker.css';

const schema = Yup.object().shape({
  student_id: Yup.string().required('Aluno obrigatório'),
  plan_id: Yup.string().required('Plano obrigatória'),
  start_date: Yup.date().required('Data de início obrigatório'),
});

export default function FormMatriculas({ match }) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const [student, setStudent] = useState([]);
  const [registration, setRegistration] = useState([]);
  const [plans, setPlans] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState(null);
  const [planSelected, setPlanSelected] = useState(null);
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState('');
  const [priceTotal, setPriceTotal] = useState(null);

  const { id } = match.params;

  useEffect(() => {
    async function loadRegistration() {
      const response = await api.get(`registrations/${id}`);
      setRegistration(response.data);
      const newStudent = {
        id: response.data.student.id,
        label: response.data.student.name,
      };
      setStudent(newStudent);
    }
    if (id) {
      loadRegistration();
    }
  }, [id]);// eslint-disable-line

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('plans');
      setPlans(response.data.plans);
    }
    loadPlans();
  }, []);
  useEffect(() => {
    async function loadPlanSelected() {
      const response = await api.get(`plans/${planSelected}`);
      setDuration(response.data.duration);
      setPrice(response.data.price);
    }
    loadPlanSelected();
  }, [planSelected]);
  useMemo(() => {
    if (planSelected && duration) {
      const setNewDate = addMonths(startDate, duration);
      setEndDate(setNewDate);
    }
    setPriceTotal(price * duration);
  }, [planSelected, startDate]); // eslint-disable-line

  function handleSubmit({ student_id, plan_id, start_date }) {
    if (id) {
      dispatch(registrationUpdate(id, student_id, plan_id, start_date));
    } else {
      dispatch(registrationRequest(student_id, plan_id, start_date));
    }
  }

  return (
    <div className="container">
      <div className="top">
        <div className="left">
          <strong>
            {id ? 'Edição de Matrícula' : 'Cadastro de Matrícula'}
          </strong>
        </div>
        <Right>
          <ButtonLink to="/matriculas" color="#cccccc">
            <MdKeyboardArrowLeft size={20} color="#fff" />
            <span>VOLTAR</span>
          </ButtonLink>
          <Button type="submit" form="formRegistration">
            <MdCheck size={20} color="#fff" />
            <span>{loading ? 'Carregando' : 'SALVAR'}</span>
          </Button>
        </Right>
      </div>
      <Content>
        <Form
          id="formRegistration"
          schema={schema}
          onSubmit={handleSubmit}
          initialData={registration}
        >
          <label>ALUNO</label>

          <AsyncSelect
            name="student_id"
            query="students"
            placeholder="Buscar aluno"
            BdValue={student}
          />
          <div>
            <div>
              <label>PLANO</label>
              <Select
                name="plan_id"
                options={plans}
                placeholder="Selecione o plano"
                onChange={e => setPlanSelected(e.target.value)}
                value={planSelected || registration.plan_id}
              />
            </div>
            <div>
              <label>DATA DE INÍCIO</label>
              <DateInput
                name="start_date"
                placeholder="Escolha a data"
                onChange={date => setStartDate(date)}
                value={registration.start_date}
              />
            </div>
            <div id="totalPrice">
              <label>DATA DE TÉRMINO</label>
              <DatePicker
                name="end_date"
                selected={endDate}
                dateFormat="dd/MM/yyyy"
                value={endDate || formatDate(registration.end_date)}
                disabled
              />
            </div>
            <div id="totalPrice">
              <label>VALOR FINAL</label>
              <CurrencyInput
                name="priceTotal"
                value={priceTotal || registration.price}
                disabled
              />
            </div>
          </div>
        </Form>
      </Content>
    </div>
  );
}
FormMatriculas.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
