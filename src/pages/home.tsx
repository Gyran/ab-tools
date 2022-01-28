import { Box, Link, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Box>
      <Typography variant="body1">
        Små verktyg som kan vara smidiga för dig som driver ett AB (eller annan
        typ av bolag).
      </Typography>
      <Typography variant="body1" mt={2}>
        Koden till denna sida finns tillgänglig på{' '}
        <Link href="https://github.com/Gyran/ab-tools">
          https://github.com/Gyran/ab-tools
        </Link>{' '}
        så har du några tankar eller ser något fel så hoppa gärna in där och
        hjälp till eller skriv en rad.
      </Typography>
    </Box>
  );
};

export default HomePage;
