import { useMemo, useState } from 'react';
import styled from 'styled-components/macro';
import { Stack } from '../components/layout';
import TextInput from '../components/text-input';

const PageWrapper = styled.div``;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
`;

const ensureNumber = (input: any): number => {
  const parsed = parseFloat(input);

  if (Number.isFinite(parsed)) {
    return parsed;
  }

  return 0;
};

const StateTaxIncomeLimit = 537200;

const CalculateDecemberSalary = () => {
  const [bruttoLonInput, handleBruttoLonChange] = useState('');
  const [formanerInput, handleFormanerIChange] = useState('');
  const [ersattningarOchPensionInput, handleErsattningarOchPensionChange] =
    useState('');

  const bruttoLon = ensureNumber(bruttoLonInput);
  const formaner = ensureNumber(formanerInput);
  const ersattningarOchPension = ensureNumber(ersattningarOchPensionInput);

  const totalIncome = bruttoLon + formaner + ersattningarOchPension;

  const suggestedDecSalary = StateTaxIncomeLimit - totalIncome;

  const sekFormatter = useMemo(() => {
    return new Intl.NumberFormat('sv-SE', {
      style: 'currency',
      currency: 'SEK',
    });
  }, []);

  return (
    <PageWrapper>
      <h2>
        Hur mycket behöver du ta i lön i december för att nå till gränsen
        (Inkomstår 2021)
      </h2>
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
            : {sekFormatter.format(StateTaxIncomeLimit)}
          </p>
          <p>
            Föreslagen bruttolön i december:{' '}
            {sekFormatter.format(suggestedDecSalary)}
          </p>
        </Stack>
      </Wrapper>
    </PageWrapper>
  );
};

export default CalculateDecemberSalary;
