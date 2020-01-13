import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { useField } from '@rocketseat/unform';
import api from '~/services/api';

import { AsynSelectInput } from './styles';

export default function AsynSelect({ name, query, BdValue, ...rest }) {
  const ref = useRef(null);
  const { fieldName, registerField, error } = useField(name);
  const [selected, setSelected] = useState('');
  const [inputValue, setInputValue] = useState(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.value.id',
    });
  }, [fieldName, ref.current]); // eslint-disable-line
  function handleInput(value) {
    setInputValue(value.replace(/\W/g, ''));
  }
  async function loadOptions() {
    const response = await api.get(`/${query}`, {
      params: { q: inputValue, page: 1 },
    });

    const newResponse = response.data.students.map(q => ({
      id: q.id,
      label: q.name,
    }));
    return newResponse;
  }
  console.tron.log(query);
  function handleChange(value) {
    setSelected(value);
  }

  return (
    <>
      <AsynSelectInput
        name={fieldName}
        defaultOptions
        loadOptions={loadOptions}
        onInputChange={handleInput}
        onChange={handleChange}
        value={selected || BdValue}
        classNamePrefix="react-select"
        noOptionsMessage={() => 'Nenhum registro localizado'}
        loadingMessage={() => 'Carregando...'}
        ref={ref}
        {...rest}
      />
      {error && <span>{error}</span>}
    </>
  );
}
AsynSelect.propTypes = {
  name: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
  BdValue: PropTypes.number.isRequired,
};
