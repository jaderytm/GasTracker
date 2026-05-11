// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders GasTracker title', () => {
    render(<App />);
    const titleElement = screen.getByText(/GasTracker/i);
    expect(titleElement).toBeInTheDocument();
});
