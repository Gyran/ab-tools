import React, { PropsWithChildren } from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  NavLink,
} from 'react-router-dom';
import styled from 'styled-components/macro';
import './App.css';
import InvoiceQRCodePage from './pages/InvoiceQRCodePage';
import SKVQRCodePage from './pages/skv-qrcode-page';
import BokioBackupPage from './pages/bokio-backup-page';
import MomsSnurraPage from './pages/vat-calculator';
import Theme from './styling';
import GlobalStyles from './styling/global-styles';

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
    <Router basename="/ab-tools">
      <GlobalStyles />
      <AppWrapper>
        <Navigation>
          <MyNavLink to="/">Hem</MyNavLink>
          {/* <MyNavLink to="/invoice-qr">Invoice QR</MyNavLink> */}
          <MyNavLink to="/skv-qr">Skattekonto QR</MyNavLink>
          <MyNavLink to="/bokio-backup">Bokio Backup</MyNavLink>
          <MyNavLink to="/moms">Momssnurra</MyNavLink>
        </Navigation>
        <PageWrapper>
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
              <div>
                <p>
                  Små verktyg som kan vara smidiga för dig som driver ett AB
                  (eller annan typ av bolag).
                </p>
                <p>
                  Koden till denna sida finns tillgänglig på{' '}
                  <a href="https://github.com/Gyran/ab-tools">
                    https://github.com/Gyran/ab-tools
                  </a>{' '}
                  så har du några tankar eller ser något fel så hoppa gärna in
                  där och hjälp till eller skriv en rad.
                </p>
              </div>
            </Route>
          </Switch>
        </PageWrapper>
      </AppWrapper>
    </Router>
  );
}

export default App;
