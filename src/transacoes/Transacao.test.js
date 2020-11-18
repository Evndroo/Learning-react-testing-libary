import React from 'react';
import Transacao from "./Transacao";
import { render } from "@testing-library/react"


describe("Componente de transação do extrato",()=>{

    it("Snapshot do componente deve ser sempre o mesmo", ()=>{
        const { container } = render(<Transacao data="18/11/2020" tipo="deposito" valor="100"/>);

        expect(container.firstChild).toMatchSnapshot();
    })

});