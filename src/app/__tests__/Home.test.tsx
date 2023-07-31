import Home from "../page";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe('Home',()=>{
    test('test render content',()=>{
        render(<Home />)
        expect(screen.getByText('Great Writing,Simplified')).toBeInTheDocument()
        expect(screen.getByText('Great Writing,Simplified')).toBeInTheDocument()
        expect(screen.getByText("Compose bold, clear, mistake-free writing with Grammarly’s new AI-powered desktop Windows app.")).toBeInTheDocument()
        expect(screen.getByTestId("policy")).toBeInTheDocument()
    })
    test('test links', ()=>{
        render(<Home />)
        const registerLink=screen.getAllByRole('link',{name:"Get Grammarly it's free"})
        registerLink.forEach(link=>expect(link).toHaveAttribute('href','/register'))
        const loginLink=screen.getAllByRole('link',{name:"Log in"})
        loginLink.forEach(link=>expect(link).toHaveAttribute('href','/login'))
    })
    test('test src video',()=>{
        render(<Home/>)
        const startVideoUri:string='https://static.grammarly.com/assets/files/8a0dda99e354dd8552833ffaf47992a7/llama_video.mp4'
        expect(screen.getByTestId('vid-start')).toHaveAttribute('src',startVideoUri)
    })
})