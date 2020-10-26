import React, { PropsWithChildren } from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  NavLink,
} from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import InvoiceQRCodePage from './pages/InvoiceQRCodePage';
import SKVQRCodePage from './pages/skv-qrcode-page';
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
    <Router>
      <GlobalStyles />
      <AppWrapper>
        <Navigation>
          <MyNavLink to="/">Home</MyNavLink>
          {/* <MyNavLink to="/invoice-qr">Invoice QR</MyNavLink> */}
          <MyNavLink to="/skv-qr">Skattekonto QR</MyNavLink>
        </Navigation>
        <PageWrapper>
          <Switch>
            <Route path="/invoice-qr">
              <InvoiceQRCodePage />
            </Route>
            <Route path="/skv-qr">
              <SKVQRCodePage />
            </Route>
            <Route path="/">
              <div>
                Små verktyg som kan vara smidiga för dig som driver ett AB
                (eller annan typ av bolag).
              </div>
            </Route>
          </Switch>
        </PageWrapper>
      </AppWrapper>
    </Router>
  );
}

export default App;
