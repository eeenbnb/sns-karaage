import { render } from '@testing-library/react';

import ListOneSection from './list-one-section';

describe('ListOneSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ListOneSection />);
    expect(baseElement).toBeTruthy();
  });
});
