import { render, screen } from '@testing-library/react';
import AddContact from './AddContact';

describe("Testing AddContact component",()=>{
    test("Should have Add Contact text in a button",()=>{
        render(<AddContact/>)
        expect(screen.getByTestId("BtnSubmit")).toHaveTextContent("Add Contact")
    })
})