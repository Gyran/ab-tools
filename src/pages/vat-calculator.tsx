import { useCallback, useMemo, useState } from 'react';

import { Stack, Typography } from '@mui/material';
import TextInput from '../components/text-input';

type Props = {};

const VatCalculator = (props: Props) => {
  const [vatRateInput, setVatRateInput] = useState('25');
  const [exclVatInput, setExclVatInput] = useState('');

  const vatRate = useMemo(
    () => (vatRateInput !== '' ? parseInt(vatRateInput, 10) / 100 : -1),
    [vatRateInput],
  );
  const exclVat = useMemo(() => parseFloat(exclVatInput), [exclVatInput]);
  const vatSum = useMemo(() => exclVat * vatRate, [exclVat, vatRate]);

  const handleVatRangeChange = useCallback((value) => {
    setVatRateInput(value);
  }, []);
  const handleExclVatChange = useCallback((value) => {
    setExclVatInput(value);
  }, []);
  const handleIncVatChange = useCallback(
    (value) => {
      const parsedInc = parseFloat(value);
      if (Number.isFinite(parsedInc)) {
        const calcExcl = parsedInc / (1 + vatRate);

        setExclVatInput(calcExcl.toString());
      } else {
        setExclVatInput('');
      }
    },
    [vatRate],
  );

  return (
    <Stack spacing={2}>
      <TextInput
        label="Momssats (%)"
        type="number"
        value={vatRateInput}
        onChange={handleVatRangeChange}
      />
      <TextInput
        label="Exklusive moms (kr)"
        type="number"
        value={exclVatInput}
        onChange={handleExclVatChange}
      />
      <TextInput
        label="Inklusive moms (kr)"
        type="number"
        value={(exclVat + vatSum).toString()}
        onChange={handleIncVatChange}
      />
      <Typography variant="body1">
        Moms: {Number.isFinite(vatSum) ? vatSum.toFixed(2) : '-'} kr
      </Typography>
    </Stack>
  );
};

export default VatCalculator;
