import { Box, Link, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import TextInput from '../components/text-input';

const ensureNumber = (input: any, fallback = 0): number => {
  const parsed = parseFloat(input);

  if (Number.isFinite(parsed)) {
    return parsed;
  }

  return fallback;
};

const StateTaxBreakPoint = 537200;
const HuvudregelnIncomeBreakPoint = 430737;

const sekFormatter = new Intl.NumberFormat('sv-SE', {
  style: 'currency',
  currency: 'SEK',
});

const useNumberInputState = (
  initialInput = '',
  fallbackValue = 0,
): [string, React.Dispatch<React.SetStateAction<string>>, number] => {
  const [input, handleChange] = useState(initialInput);
  const value = ensureNumber(input, fallbackValue);

  return [input, handleChange, value];
};

const CalculateDecemberSalary = () => {
  const [bruttoLonInput, handleBruttoLonChange, bruttoLon] =
    useNumberInputState();
  const [formanerInput, handleFormanerIChange, formaner] =
    useNumberInputState();
  const [
    ersattningarOchPensionInput,
    handleErsattningarOchPensionChange,
    ersattningarOchPension,
  ] = useNumberInputState();

  const totalIncome = bruttoLon + formaner + ersattningarOchPension;

  const suggestedDecSalary = StateTaxBreakPoint - totalIncome;

  return (
    <Box>
      <Typography variant="h2">
        Hur mycket behöver du ta i lön i december för att nå till gränsen
        (Inkomstår 2021)
      </Typography>
      <Typography variant="body1" mt={2}>
        Alla beräkningar är baserade på att det endast är du som tar ut lön från
        företaget och att all lön som redovisas i formuläret är ifrån ditt
        företag.
      </Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 300px' }}>
        <Stack mt={2} spacing={2} pr={3}>
          <Typography variant="body1">
            Samla in samtliga{' '}
            <Link href="https://sso.skatteverket.se/ms/ms_web/page.do#/privat/skatter-deklaration/inkomstuppgifter">
              inkomstuppgifter från skatteverket
            </Link>{' '}
            till och med November.
          </Typography>
          <TextInput
            label="Bruttolön"
            type="number"
            value={bruttoLonInput}
            onChange={handleBruttoLonChange}
          />
          <TextInput
            label="Förmåner"
            type="number"
            value={formanerInput}
            onChange={handleFormanerIChange}
          />
          <TextInput
            label="Ersättningar och pension "
            type="number"
            value={ersattningarOchPensionInput}
            onChange={handleErsattningarOchPensionChange}
          />
        </Stack>
        <Stack spacing={2}>
          <Typography variant="body1">
            Inkomster totalt: {sekFormatter.format(totalIncome)}
          </Typography>
          <Typography variant="body1">
            <Link href="https://www.skatteverket.se/privat/etjansterochblanketter/svarpavanligafragor/inkomstavtjanst/privattjansteinkomsterfaq/narskamanbetalastatliginkomstskattochhurhogarden.5.10010ec103545f243e8000166.html">
              Brytpunkt innan statlig skatt
            </Link>
            : {sekFormatter.format(StateTaxBreakPoint)}
          </Typography>
          <Typography variant="body1">
            Tänk också på för att kunna använda{' '}
            <Link href="https://www.bjornlunden.se/skatteplanering/s%C3%A5-maxar-du-utdelningen-enligt-312-regle__211">
              huvudregeln för utdelning måste du minst ta ut
            </Link>{' '}
            {sekFormatter.format(HuvudregelnIncomeBreakPoint)}. Detta beloppet
            är baserat på att det är endast du som tar ut lön från företaget.
          </Typography>
          <Typography variant="body1">
            Föreslagen bruttolön i december:{' '}
            <Typography component="span" sx={{ fontWeight: 'bold' }}>
              {sekFormatter.format(suggestedDecSalary)}
            </Typography>
          </Typography>
          <Typography variant="body1">
            Lägsta lön för att kunna använda huvudregeln för utdelning 2022:{' '}
            <Typography component="span" sx={{ fontWeight: 'bold' }}>
              {sekFormatter.format(
                Math.max(HuvudregelnIncomeBreakPoint - bruttoLon, 0),
              )}
            </Typography>
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default CalculateDecemberSalary;
