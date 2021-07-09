import { render } from '@testing-library/react';

import TopFooter from './top-footer';

describe('TopFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TopFooter />);
    expect(baseElement).toBeTruthy();
  });
});
