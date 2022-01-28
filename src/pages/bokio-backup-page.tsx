import { Box, Link, Typography } from '@mui/material';

const BokioBackupPage = () => {
  return (
    <Box>
      <Typography variant="h2">Bokio backup</Typography>
      <Typography variant="body1" mt={2}>
        Om du gör din bokföring med <a href="https://www.bokio.se/">Bokio</a>.
        Kan du köra{' '}
        <Link href="https://github.com/Gyran/bokio-backup">
          detta lilla script
        </Link>{' '}
        för att exportera all data från Bokio och ha som backup.
      </Typography>
    </Box>
  );
};

export default BokioBackupPage;
