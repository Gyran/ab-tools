import React, { PropsWithChildren, Suspense } from 'react';
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  List,
  Box,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  ThemeProvider,
} from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import {
  Route,
  BrowserRouter as Router,
  NavLink,
  Routes,
  useResolvedPath,
  useMatch,
} from 'react-router-dom';
import './App.css';
import theme from './styling/theme';

const DrawerWidth = 240;

const SKVQRCodePage = React.lazy(() => import('./pages/skv-qrcode-page'));
const BokioBackupPage = React.lazy(() => import('./pages/bokio-backup-page'));
const MomsSnurraPage = React.lazy(() => import('./pages/vat-calculator'));
const InvoiceQRCodePage = React.lazy(() => import('./pages/InvoiceQRCodePage'));
const HomePage = React.lazy(() => import('./pages/home'));
const CalculateDecemberSalaryPage = React.lazy(
  () => import('./pages/calculate-december-salary'),
);

type MyNavLinkProps = PropsWithChildren<{
  to: string;
}>;

const MyNavLink = (props: MyNavLinkProps) => {
  const { to, children } = props;

  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <ListItemButton
      selected={match !== null}
      component={NavLink}
      to={to}
      end={true}
    >
      <ListItemText>{children}</ListItemText>
    </ListItemButton>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar
            sx={{
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
          >
            <Toolbar>
              <BusinessIcon sx={{ mr: 2 }} />
              <Typography variant="h6" noWrap component="div">
                AB Tools
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            anchor="left"
            sx={{
              width: DrawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: DrawerWidth,
                boxSizing: 'border-box',
              },
            }}
          >
            <Toolbar />
            <Divider />
            <List>
              <MyNavLink to="/">Hem</MyNavLink>
              {/* <MyNavLink to="/invoice-qr">Invoice QR</MyNavLink> */}
              <MyNavLink to="/skv-qr">Skattekonto QR</MyNavLink>
              <MyNavLink to="/bokio-backup">Bokio Backup</MyNavLink>
              <MyNavLink to="/december-lon">Decemberlön</MyNavLink>
              {/* <MyNavLink to="/moms">Momssnurra</MyNavLink> */}
            </List>
          </Drawer>
          <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
          >
            <Toolbar />
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/invoice-qr" element={<InvoiceQRCodePage />} />
                <Route path="/skv-qr" element={<SKVQRCodePage />} />
                <Route path="/bokio-backup" element={<BokioBackupPage />} />
                <Route path="/moms" element={<MomsSnurraPage />} />
                <Route
                  path="/december-lon"
                  element={<CalculateDecemberSalaryPage />}
                />
              </Routes>
            </Suspense>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
