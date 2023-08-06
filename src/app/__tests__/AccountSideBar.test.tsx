import Sidebar from "../account/components/Sidebar";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe('AccountSidebar',()=>{
    test('test render content', ()=>{
        const email : string = 'jd123@gmail.com'
        render(<Sidebar email={email}/>);
        expect(screen.getByText(email)).toBeInTheDocument()
        expect(screen.getByTestId('logo-icon')).toBeInTheDocument()
        expect(screen.getByTestId('icon-account')).toBeInTheDocument()
        expect(screen.getByTestId('icon-trash')).toBeInTheDocument()
        expect(screen.getByTestId('icon-apps')).toBeInTheDocument()
        expect(screen.getByTestId('icon-info')).toBeInTheDocument()
        expect(screen.getByTestId('icon-plans')).toBeInTheDocument()
        expect(screen.getByTestId('icon-support')).toBeInTheDocument()
        expect(screen.getByTestId('icon-sign-out')).toBeInTheDocument()
    })
    test('test links',()=>{
        render(<Sidebar email="jd123@gmail.com"/>);
        const links : HTMLElement[] = screen.getAllByRole('link')
        links.forEach((link,index)=>{
            if (index==0){
                expect(link).toHaveAttribute('href', '/')
            }
            if (index==1){
                expect(link).toHaveAttribute('href', '/account')
            }
            if (index==2){
                expect(link).toHaveAttribute('href', '/account/trash')
            }
            if (index==3){
                expect(link).toHaveAttribute('href', '/account/info')
            }
            if (index==4){
                expect(link).toHaveAttribute('href', '/account/apps')
            }
            if (index==5){
                expect(link).toHaveAttribute('href', '/plans')
            }
            if (index==6){
                expect(link).toHaveAttribute('href', '/support')
            }
            if (index==7){
                expect(link).toHaveAttribute('href', '/')
            }
        })
    })
})