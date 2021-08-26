import React, { PropsWithChildren, Suspense } from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  NavLink,
} from 'react-router-dom';
import styled from 'styled-components/macro';
import './App.css';
import Theme from './styling';
import GlobalStyles from './styling/global-styles';

const SKVQRCodePage = React.lazy(() => import('./pages/skv-qrcode-page'));
const BokioBackupPage = React.lazy(() => import('./pages/bokio-backup-page'));
const MomsSnurraPage = React.lazy(() => import('./pages/vat-calculator'));
const InvoiceQRCodePage = React.lazy(() => import('./pages/InvoiceQRCodePage'));
const HomePage = React.lazy(() => import('./pages/home'));

type MyNavLinkProps = PropsWithChildren<{
  to: string;
}>;

const StyledNavLink = styled(NavLink)`
  display: inline-block;
  padding: 10px;
  text-decoration: none;

  & span {
    color: ${Theme.Colors.Primary};
    padding: 2px 8px;
    border-radius: 3px;
  }

  &.${({ activeClassName }) => activeClassName} span,
  &:hover span {
    background-color: ${Theme.Colors.Primary};
    color: ${Theme.Colors.Background};
  }
`;
const MyNavLink = (props: MyNavLinkProps) => {
  const { to, children } = props;

  return (
    <StyledNavLink activeClassName="active" to={to} exact={true}>
      <span>{children}</span>
    </StyledNavLink>
  );
};

const AppWrapper = styled.div``;
const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr min(${Theme.Spacing.ContentMaxWidth}px, 100%) 1fr;

  & > * {
    grid-column: 2;
  }
`;
const Navigation = styled.nav`
  max-width: calc(${Theme.Spacing.ContentMaxWidth}px + 100px);
  margin: 0 auto;
  font-size: 1.4rem;
  padding: 10px 16px;
`;

function App() {
  return (
    <Router>
      <GlobalStyles />
      <AppWrapper>
        <Navigation>
          <MyNavLink to="/">Hem</MyNavLink>
          {/* <MyNavLink to="/invoice-qr">Invoice QR</MyNavLink> */}
          <MyNavLink to="/skv-qr">Skattekonto QR</MyNavLink>
          <MyNavLink to="/bokio-backup">Bokio Backup</MyNavLink>
          {/* <MyNavLink to="/moms">Momssnurra</MyNavLink> */}
        </Navigation>
        <PageWrapper>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/invoice-qr">
                <InvoiceQRCodePage />
              </Route>
              <Route path="/skv-qr">
                <SKVQRCodePage />
              </Route>
              <Route path="/bokio-backup">
                <BokioBackupPage />
              </Route>
              <Route path="/moms">
                <MomsSnurraPage />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </Suspense>
        </PageWrapper>
      </AppWrapper>
    </Router>
  );
}

export default App;
