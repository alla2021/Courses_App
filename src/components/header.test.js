import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import Header from "./Header";
import '@testing-library/jest-dom/extend-expect';
test('renders the title and a navigation link', () => {
    render(
        <Router>
            <Header title="My App" />
        </Router>
    );
    expect(screen.getByText("My App")).toBeInTheDocument();
    expect(screen.getByText("Courses Page")).toBeInTheDocument();
});
