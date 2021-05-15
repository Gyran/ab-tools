import { useCallback, useMemo, useState } from 'react';

import { Stack } from '../components/layout';
import TextInput from '../components/text-input.tsx';

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
    <Stack>
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
      <div>Moms: {Number.isFinite(vatSum) ? vatSum.toFixed(2) : '-'}</div>
    </Stack>
  );
};

export default VatCalculator;

// 125 = 100 + 100 * 25%
// inc = exl + exl * vat%
// inc = exl(1 + vat)

// exl = inc/(1 + vat)

// inc/exl = 1 + 0.25 = 1.25
