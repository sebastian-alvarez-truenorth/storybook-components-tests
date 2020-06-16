import React from 'react';

import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Default = () => <Button label="Text" />;
export const Disabled= () => <Button label="Text" disabled={true} />;
