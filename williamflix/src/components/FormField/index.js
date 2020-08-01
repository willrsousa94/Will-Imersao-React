import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

export const FormBase = styled.div`

  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }

`
const Label = styled.label``

Label.Text =  styled.span`
    color: rgb(229,229,229);
    height: 57px;
    position: absolute;
    top: 0px;
    left: 16px;

    display: flex;
    align-items: center;
    transform-origin: 0% 0%;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;

    transition: all 0.1s ease-in-out 0s;
`

export const Input = styled.input`

    color: rgb(245, 245, 245);
    display: block;
    width: 100%;
    height: 57px;
    font-size: 18px;
    margin-bottom: 45px;
    resize: none;
    background: rgb(83, 88, 93);
    outline: 0;
    border-width: 4px 0px;
    border-top: 4px solid transparent;
    border-bottom: 4px solid rgb(83, 88, 93);
    padding: 16px;
    border-radius: 4px;
    transition: border-color 0.3s;

    &:focus{
      border-bottom-color: red;
    }
    &:focus:not([type='color']) + ${Label.Text} {
      transform: scale(.6) translateY(-10px);
    }

    ${({ value }) => {
      const hasValue = value.length > 0;
      return hasValue && css`
        &:not([type='color']) + ${Label.Text} {
          transform: scale(.6) translateY(-10px);
        }
      `;
    }}
`

function FormField({label, type, name, value, onChange }) {

  const fieldId = `id_${name}`
  const isTypeTextArea = type === 'textarea';
  const tag = isTypeTextArea ? 'textarea' : 'input'

  return (
    <FormBase>
      <Label 
        htmlFor={fieldId}
      >
        <Input
          as={tag}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          id={fieldId}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
      </Label>
    </ FormBase>
  )
}

FormBase.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default FormField;