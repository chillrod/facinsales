import React from 'react';

import { MailerProvider  } from './Mail';

const AppProvider: React.FC = ({ children }) => (
  <MailerProvider>
    {children} 
  </MailerProvider>
);

export default AppProvider;
