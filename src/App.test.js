import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react"
import App, { calcularNovoSaldo } from "./App"
import { act } from 'react-dom/test-utils';


describe("Componente principal", () => {
    describe("Quando eu abro o app do banco...", () => {
        it("o nome do banco deve ser exibido", () => {
            render(<App />)
            expect(screen.getByText("ByteBank")).toBeInTheDocument();
        })

        it("o saldo é exibido", () => {
            render(<App />)
            expect(screen.getByText("Saldo:")).toBeInTheDocument();
        })

        it("o botão de realizar operação é exibido", () => {
            render(<App />)
            expect(screen.getByText("Realizar operação")).toBeInTheDocument();
        })
    })
    describe("Quando realizo uma transação", () => {
        it("de saque, o saldo deve diminuir", () => {
            const valores = {
                transacao: "saque",
                valor: 100
            };

            const novoSaldo = calcularNovoSaldo(valores, 200);

            expect(novoSaldo).toBe(100)
        });

        it("de saque, a transação deve ser realizada", () => {
            act(() => {
                const { getByText, getByTestId, getByLabelText } = render(<App />)


                const saldo = getByText("R$ 1000");
                const transacao = getByLabelText("Saque");
                const valor = getByTestId("valor");
                const botaoTransacao = getByText("Realizar operação");


                expect(saldo.textContent).toBe("R$ 1000");
                fireEvent.click(transacao, { target: { value: "saque" } });

                fireEvent.change(valor, { target: { value: "10" } });

                fireEvent.click(botaoTransacao);

                expect(saldo.textContent).toBe("R$ 990");

            });
        });


        it("de depósito, o saldo deve aumentar", () => {
            const valores = {
                transacao: "deposito",
                valor: 100
            };

            const novoSaldo = calcularNovoSaldo(valores, 200);

            expect(novoSaldo).toBe(300)
        });
    })
});