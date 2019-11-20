import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import AuthLayout from '~/pages/_layouts/auth';
import DefaultLayout from '~/pages/_layouts/default';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  isDefaultLayout,
  ...rest
}) {
  const Layout = isDefaultLayout ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  isDefaultLayout: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  isDefaultLayout: false,
};
