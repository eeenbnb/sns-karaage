import { render } from '@testing-library/react';

import ListOne from './list-one';

describe('ListOne', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ListOne />);
    expect(baseElement).toBeTruthy();
  });
});
