import React from "react";
import './Content.css';

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

class Content extends React.Component {
    render() {
        return(
            <> {
                conteudos.map((conteudo) => 
                <div key={conteudo.conteudo} className="conteudo">
                    <h2>O conteúdo é {conteudo.conteudo}</h2>
                    <p><strong>Status:</strong>{conteudo.status}</p>
                    <p><strong>Bloco: {conteudo.bloco}</strong></p>
                    
                </div>
                )
            }</>
        )
    }
}

export default Content;