import React from 'react';
import axios from 'axios';
import Tip from './Tip';

export default class Tips extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <h3>Tips</h3>
                        <hr/>
                        <Tip
                            title="Calcula el gasto del agua en Bs"
                            body="Para calcular cuántos euros puedes ahorrar al mes, sabiendo que 1m3 = 1.000 litros y que el precio del m3 es de 1,26Bs, por ejemplo, el precio del litro sería: 1,26 / 1000= Bs/l (euros por litro). Así podrás ver que los 3500 litros de ahorro en una ducha rápida, supone un ahorro de agua de ¡más de 4 euros al mes! Para consumo doméstico, en España gastamos unos 126 litros de agua diarios por habitante. Vamos a ver cómo reducirlo cambiando algunos hábitos y algunos gadgets."/>

                        <Tip
                            title="Cierra los grifos siempre que no los uses"
                            body="Aunque te parezca poco tiempo: mientras te enjabonas el pelo, te cepillas los dientes, fregando utensilios de cocina, mientras te afeitas."/>

                        <Tip
                            title="Dúchate en lugar de bañarte"
                            body="Una ducha gasta un 50% menos. Una ducha de 5 min, ahorra unos 3500 litros al mes."/>

                        <Tip
                            title="Utiliza de forma eficiente los electrodomésticos"
                            body="Pon la lavadora, el lavavajillas y similares siempre cuando estén totalmente llenos. Si no, usa media carga o ciclos cortos. ¡Mejor lavavajillas que lavar a mano! Poner la lavadora cuando esté llena te puede hacer ahorrar de 2500 a 2800 litros cada mes."/>
                    </div>
                </div>
            </div>
        );
    }
}