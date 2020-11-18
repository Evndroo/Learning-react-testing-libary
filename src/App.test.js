import React from 'react';
import { render, screen } from "@testing-library/react"
import App from "./App"


describe("Componente principal", () =>{
    describe("Quando eu abro o app do banco...", () =>{
        it("o nome do bamco deve ser exibido", ()=>{
            render(<App/>)
            expect(screen.getByText("ByteBank")).toBeInTheDocument();
        })

        it("o saldo é exibido", ()=>{
            render(<App/>)
            expect(screen.getByText("Saldo:")).toBeInTheDocument();
        })

        it("o botão de realizar operação é exibido", ()=>{
            render(<App/>)
            expect(screen.getByText("Realizar operação")).toBeInTheDocument();
        })
    })
    
});