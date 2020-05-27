import React, { Fragment } from 'react';
import { IntlProvider } from 'react-intl';

import { Locales } from './locales';

export const provider = ({children, locale}) => {
  return (
  <IntlProvider
    locale={locale}
    textComponent={Fragment}
    messages={messages[locale]}
  >
    {children}
  </IntlProvider>
  )
}
