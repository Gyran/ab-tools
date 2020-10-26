import React, { useCallback, ChangeEvent } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div``;
const StyledInput = styled.input``;
const StyledLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

type Props = {
  label: string;
  onChange: (value: string) => void;
  value: string;
  type?: 'text' | 'number';
  step?: number;
};
const TextInput = (props: Props) => {
  const { label, onChange, value, type = 'text', step } = props;

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.currentTarget.value);
    },
    [onChange],
  );

  return (
    <StyledWrapper>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        onChange={handleChange}
        type={type}
        value={value}
        step={step}
      />
    </StyledWrapper>
  );
};

export default TextInput;
