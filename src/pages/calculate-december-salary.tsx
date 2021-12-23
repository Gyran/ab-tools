import { useState } from 'react';
import styled from 'styled-components/macro';
import { Stack } from '../components/layout';
import TextInput from '../components/text-input';

const PageWrapper = styled.div``;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
`;

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
    <PageWrapper>
      <h2>
        Hur mycket behöver du ta i lön i december för att nå till gränsen
        (Inkomstår 2021)
      </h2>
      <p>
        Alla beräkningar är baserade på att det endast är du som tar ut lön från
        företaget och att all lön som redovisas i formuläret är ifrån ditt
        företag.
      </p>
      <Wrapper>
        <Stack>
          <p>
            Samla in samtliga{' '}
            <a href="https://sso.skatteverket.se/ms/ms_web/page.do#/privat/skatter-deklaration/inkomstuppgifter">
              inkomstuppgifter från skatteverket
            </a>{' '}
            till och med November.
          </p>
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
        <Stack>
          <p>Inkomster totalt: {sekFormatter.format(totalIncome)}</p>
          <p>
            <a href="https://www.skatteverket.se/privat/etjansterochblanketter/svarpavanligafragor/inkomstavtjanst/privattjansteinkomsterfaq/narskamanbetalastatliginkomstskattochhurhogarden.5.10010ec103545f243e8000166.html">
              Brytpunkt innan statlig skatt
            </a>
            : {sekFormatter.format(StateTaxBreakPoint)}
          </p>
          <p>
            Tänk också på för att kunna använda{' '}
            <a href="https://www.bjornlunden.se/skatteplanering/s%C3%A5-maxar-du-utdelningen-enligt-312-regle__211">
              huvudregeln för utdelning måste du minst ta ut
            </a>{' '}
            {sekFormatter.format(HuvudregelnIncomeBreakPoint)}. Detta beloppet
            är baserat på att det är endast du som tar ut lön från företaget.
          </p>
          <p>
            Föreslagen bruttolön i december:{' '}
            <b>{sekFormatter.format(suggestedDecSalary)}</b>
          </p>
          <p>
            Lägsta lön för att kunna använda huvudregeln för utdelning 2022:{' '}
            <b>
              {sekFormatter.format(
                Math.max(HuvudregelnIncomeBreakPoint - bruttoLon, 0),
              )}
            </b>
          </p>
        </Stack>
      </Wrapper>
    </PageWrapper>
  );
};

export default CalculateDecemberSalary;
