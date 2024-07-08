import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};
  padding: 0px 4px;
  text-transform: uppercase;
`;

const OutlinedInput = styled.div`
  border-radius: 8px;
  border: 0.5px solid ${({ theme }) => theme.text_secondary};
  background-color: transparent;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.text_primary};
  padding: 8px;
  outline: none;
  width: 100%;
  ${({ as, rows, columns }) =>
    as === "textarea" &&
    `
    resize: none;
    height: auto;
    rows: ${rows};
    columns: ${columns};
  `}
`;

const TextInput = ({
  label,
  placeholder,
  name,
  value,
  handleChange,
  textArea,
  rows,
  columns,
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <OutlinedInput>
        <Input
          as={textArea ? "textarea" : "input"}
          name={name}
          rows={rows}
          columns={columns}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </OutlinedInput>
    </Container>
  );
};

export default TextInput;
