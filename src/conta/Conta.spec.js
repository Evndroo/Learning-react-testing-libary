import React from 'react';
import {fireEvent, render, screen} from "@testing-library/react"
import Conta from "./Conta"

describe("componente de Conta", ()=>{
    it("Deve mostrar o salco como valor monetário", ()=>{

        const saldo = 1000

        render(<Conta saldo={saldo}/>);


        const saldoRender = screen.getByTestId("saldo-conta");

        expect(saldoRender.textContent).toBe("R$ "+ saldo);

    });

   it("Chama botão de realizar transação, quando o botão é clicado", () =>{
        const saldo = 1000

        const realizarTransacao = jest.fn();

        render(<Conta saldo={saldo} realizarTransacao={realizarTransacao}/>);

        fireEvent.click(screen.getByText("Realizar operação"));

        expect(realizarTransacao).toHaveBeenCalled();
   });
    
});