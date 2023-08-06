import NewDoc from "../account/components/NewDoc";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe('AccountSidebar',()=>{
    test('test render content', ()=>{
        const id : string = '64cf9dbfce13ae2947045561'
        render(<NewDoc _id={id}/>);
        expect(screen.getByText('New')).toBeInTheDocument()
        expect(screen.getByText('Upload')).toBeInTheDocument()
        expect(screen.getByTestId('doc-logo')).toBeInTheDocument()
        expect(screen.getByTestId('upload-logo')).toBeInTheDocument()
    })
})