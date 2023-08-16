import Register from "../register/page";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

interface InputType extends HTMLElement{ 
    value: string
}

describe('Register',()=>{
    test('test render content', ()=>{
        render(<Register />);
        expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
        expect(screen.getByText('Agree and Sign up')).toBeInTheDocument();
        expect(screen.getByText('Send me product updates, Premium offers, and weekly progress reports.')).toBeInTheDocument()
        expect(screen.getByText('Use 8 characters or more')).toBeInTheDocument()
        expect(screen.getByText('Sign up')).toBeInTheDocument();
        expect(screen.getByText('I have an account')).toBeInTheDocument();
    })
    test('test link',()=>{
        render(<Register />);
        expect(screen.getByText('I have an account')).toHaveAttribute('href','/login');
    })
    test('test email',()=>{
        render(<Register />);
        const text : string = 'zaq12wsx'
        const emailInput : InputType = screen.getByPlaceholderText('Email') 
        fireEvent.change(emailInput, {
			target: {value: 'zaq12wsx'},
		})
        expect(emailInput.value).toBe(text)
    })
    test('test name',()=>{
        render(<Register />);
        const text : string = 'zaq12wsx'
        const nameInput : InputType = screen.getByPlaceholderText('Name') 
        fireEvent.change(nameInput, {
			target: {value: 'zaq12wsx'},
		})
        expect(nameInput.value).toBe(text)
    })
    test('test password',()=>{
        render(<Register />);
        const text : string = 'zaq12wsx'
        const passwordInput : InputType = screen.getByPlaceholderText('Password') 
        fireEvent.change(passwordInput, {
			target: {value: 'zaq12wsx'},
		})
        expect(passwordInput.value).toBe(text)
    })
    test('test validation',()=>{
        render(<Register />);
        const text : string = 'abcd'
        fireEvent.click(screen.getByText('Agree and Sign up'))
        const errors : HTMLElement[] = screen.getAllByText('Fill this field in form')
        errors.forEach((error)=>{
            expect(error).toBeInTheDocument()
        })
        fireEvent.change(screen.getByPlaceholderText('Email') , {
			target: {value: text},
		})
        fireEvent.click(screen.getByText('Agree and Sign up'))

        expect(screen.getByText('Invalid email address')).toBeInTheDocument()
        fireEvent.change(screen.getByPlaceholderText('Password') , {
			target: {value: text},
		})
        fireEvent.click(screen.getByText('Agree and Sign up'))

        expect(screen.getByText('Your password must contain at least 8 characters')).toBeInTheDocument()
    })
})