import React from 'react';
import { render, screen } from "@testing-library/react"
import App, { calcularNovoSaldo } from "./App"


describe("Componente principal", () =>{
    describe("Quando eu abro o app do banco...", () =>{
        it("o nome do banco deve ser exibido", ()=>{
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
    describe("Quando realizo uma transalção", ()=>{
        it("de saque, o saldo deve diminuir", ()=>{
            const valores = {
                transacao: "saque",
                valor: 100
            };

            const novoSaldo = calcularNovoSaldo(valores,200);
            
            expect(novoSaldo).toBe(100)
        })
        
        it("de depósito", ()=>{
            const valores = {
                transacao: "deposito",
                valor: 100
            };

            const novoSaldo = calcularNovoSaldo(valores,200);
            
            expect(novoSaldo).toBe(300)
        });
    })
});