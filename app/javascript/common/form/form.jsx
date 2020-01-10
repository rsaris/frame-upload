import React from 'react';

import {
  getCSRFParam,
  getCSRFToken,
} from '../../lib/csrf';

import './form.scss';

const Form = ({ children, className, ...formParams }) => (
  <form {...formParams}>
    <input name={getCSRFParam()} type="hidden" value={getCSRFToken()} />
    {children}
  </form>
);

export default Form;
