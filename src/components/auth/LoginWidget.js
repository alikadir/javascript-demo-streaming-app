import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginWidget(props) {
  return (
    <Link to="/login" className="login-widget-link">
      Log in
    </Link>
  );
}
