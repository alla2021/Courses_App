import React from 'react';
import { render } from '@testing-library/react';
import Loader from './Loader';
import '@testing-library/jest-dom';

describe('Loader', () => {
    it('renders correctly', () => {
        const { getByRole } = render(<Loader />);
        const loader = getByRole('progressbar');
        expect(loader).toHaveAttribute('role', 'progressbar');
    });
});