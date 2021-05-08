import styled from 'styled-components/macro';

const PageWrapper = styled.div``;

const BokioBackupPage = () => {
  return (
    <PageWrapper>
      <h2>Bokio backup</h2>
      <p>
        Om du gör din bokföring med <a href="https://www.bokio.se/">Bokio</a>.
        Kan du köra{' '}
        <a href="https://github.com/Gyran/bokio-backup">detta lilla script</a>{' '}
        för att exportera all data från Bokio och ha som backup.
      </p>
    </PageWrapper>
  );
};

export default BokioBackupPage;
