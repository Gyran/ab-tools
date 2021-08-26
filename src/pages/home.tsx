import styled from 'styled-components/macro';

const Wrapper = styled.div``;

const HomePage = () => {
  return (
    <Wrapper>
      <p>
        Små verktyg som kan vara smidiga för dig som driver ett AB (eller annan
        typ av bolag).
      </p>
      <p>
        Koden till denna sida finns tillgänglig på{' '}
        <a href="https://github.com/Gyran/ab-tools">
          https://github.com/Gyran/ab-tools
        </a>{' '}
        så har du några tankar eller ser något fel så hoppa gärna in där och
        hjälp till eller skriv en rad.
      </p>
    </Wrapper>
  );
};

export default HomePage;
