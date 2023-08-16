import Register from "../register/page";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Login from "../login/page";

interface InputType extends HTMLElement{ 
    value: string
}

describe('Login',()=>{
    test('test render content',()=>{
        render(<Login />)
        expect(screen.getByText('Sign in')).toBeInTheDocument()
        expect(screen.getByText("I don't have an account")).toBeInTheDocument()
        expect(screen.getByText('This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.')).toBeInTheDocument()
    })
    test('test link',()=>{
        render(<Login />);
        expect(screen.getByText("I don't have an account")).toHaveAttribute('href','/register');
    })
    test('test email',()=>{
        render(<Login />);
        const text : string = 'zaq12wsx'
        const emailInput : InputType = screen.getByPlaceholderText('Email') 
        fireEvent.change(emailInput, {
			target: {value: 'zaq12wsx'},
		})
        expect(emailInput.value).toBe(text)
    })
    test('test password',()=>{
        render(<Login />);
        const text : string = 'zaq12wsx'
        const passwordInput : InputType = screen.getByPlaceholderText('Password') 
        fireEvent.change(passwordInput, {
			target: {value: 'zaq12wsx'},
		})
        expect(passwordInput.value).toBe(text)
    })
    test('test validation',()=>{
        render(<Login />);
        const text : string = 'zaq12wsx'
        const passwordInput : InputType = screen.getByPlaceholderText('Email') 
        fireEvent.change(passwordInput, {
			target: {value: 'zaq12wsx'},
		})
        fireEvent.click(screen.getByText('Login'))
        expect(screen.getByText('Fill all fields on form')).toBeInTheDocument()
        expect(screen.getByTestId('x-mark')).toBeInTheDocument()
    })
})