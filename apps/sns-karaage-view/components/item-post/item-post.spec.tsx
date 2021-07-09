import { render } from '@testing-library/react';

import ItemPost from './item-post';

describe('ItemPost', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ItemPost />);
    expect(baseElement).toBeTruthy();
  });
});
