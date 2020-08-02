import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../PageDefault';
import FormField from '../../../FormField';

function CadastroCategoria() {
  let valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);




  //chave: nome, descricao, bla, bli
  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    })
  }

  function handleChange(infosDoEvento) {
    // let { getAttribute, value } = infosDoEvento.target;
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

  useEffect(() => {
    console.log('alo alo w brasil');

    const URL = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/categorias'
    : 'https://williamflix.herokuapp.com/categorias';

    fetch(URL).then( async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();
      setCategorias([
        ...resposta,
      ]);
  });


    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       id: 1,
    //       nome: 'Front End',
    //       descricao: 'Uma categoria bacanudassa',
    //       cor: '#cbd1ff',
    //     },
    //     {
    //       id: 2,
    //       nome: 'Front End',
    //       descricao: 'Outra categoria bacanudassa',
    //       cor: '#cbd1ff',
    //     }
    //   ]);
    // }, 4 * 1000);
  }, []);

  return (
    <PageDefault>
      <h1>Cadastrar Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);

        setValues(valoresIniciais);
      }}>
        {/* State */}
        <FormField
          label="Nome da Categoria"
          type="text"
          value={values.nome}
          name="nome"
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          name="descricao"
          type="textarea"
          value={values.descricao}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <FormField
          label="Cor "
          type="color"
          value={values.cor}
          name="cor"
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Cor:
            <input
              type="color"
              value={values.cor}
              name="cor"
              onChange={handleChange}
            />
          </label>
        </div> */}
        <button type="submit">
          Cadastrar
        </button>


      </form>
      {categorias.length === 0 && (
      <div>
        Loading...
      </div>
      )}
      
      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.titulo}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;