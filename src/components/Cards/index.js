import { Component } from 'react';
import './style.scss';


export default class Cards extends Component {
    constructor() {
        super();
        const listaCards = [{
            id: 1,
            titulo: "Projeto 1",
            texto: "Empresa chata pra caramba que encheu o saco para realizar o impossível.",
            urlImg: "./imgs/projeto1.jpg"
        }, {
            id: 2,
            titulo: "Projeto 2",
            texto: "Outra empresa chata que queria conquistar mais usuários com um site novo.",
            urlImg: "./imgs/projeto2.jpg"
        }, {
            id: 3,
            titulo: "Projeto 3",
            texto: "Essa empresa foi boa.. pagou como um site do zero e fiz tudo no bootstrap.",
            urlImg: "./imgs/projeto3.jpg"
        }]

        this.state = {
            listaCards
        }

    }

    render() {
        return (
            <>
                <div className="flex_cards" id="projetos">
                    {
                        this.state.listaCards.map(({ id, titulo, texto, urlImg }) => {
                            return (
                                <div key={ id } className="card" style={{width: "18rem"}}>
                                    <img src={ urlImg } className="card-img-top" alt="Projeto 1" />
                                    <div className="card-body">
                                        <h5 className="card-title">{ titulo }</h5>
                                        <p className="card-text">{ texto }</p>
                                        <a href="#" className="btn btn-primary">Ver projeto</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div> 
            </>
        )
    }

}