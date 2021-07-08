import { render } from '@testing-library/react';

import ButtonClear from './button-clear';

describe('ButtonClear', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ButtonClear />);
    expect(baseElement).toBeTruthy();
  });
});
