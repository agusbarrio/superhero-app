import '../src/index.css';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

import React from 'react';
import { addDecorator } from '@storybook/react';
import { UserContextProvider } from '../src/contexts/UserContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
addDecorator((Story) => (
  <UserContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Story />} />
      </Routes>
    </BrowserRouter>
  </UserContextProvider>
));
