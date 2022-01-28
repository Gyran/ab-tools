import { useCallback, ChangeEvent } from 'react';
import { TextField } from '@mui/material';

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
    (e: ChangeEvent<HTMLInputElement>, ...b: any) => {
      onChange(e.currentTarget.value);
    },
    [onChange],
  );

  return (
    <TextField
      label={label}
      value={value}
      onChange={handleChange}
      type={type}
      inputProps={{ step }}
    />
  );
};

export default TextInput;
