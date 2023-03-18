import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PaginationItem from './PaginationItem';
import React from "react";

describe('PaginationItem', () => {
    const setPageMock = jest.fn();
    const props = {
        page: 1,
        setPage: setPageMock,
        totalPageCount: () => 5
    };

    // it('renders the correct number of pages', () => {
    //     render(<PaginationItem {...props} />);
    //     const pagination = screen.getByRole('navigation');
    //     expect(pagination).toBeInTheDocument();
    // });

    it('calls setPage when a page is clicked', () => {
        render(<PaginationItem {...props} />);
        const page2 = screen.getByText('2');
        userEvent.click(page2);
        expect(setPageMock).toHaveBeenCalledWith(2);
    });
});
