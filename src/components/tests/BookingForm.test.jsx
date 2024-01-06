import { render, fireEvent, screen } from "@testing-library/react";
import { BookForm } from "../BookForm";

describe('Handle form', () => {
    test('Renders the BookForm label', () => {
        render(<BookForm />);
        const labelElement = screen.getByText("Occasion:");
        expect(labelElement).toBeInTheDocument();
    })

})
