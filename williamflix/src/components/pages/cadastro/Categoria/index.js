import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../PageDefault';

function CadastroCategoria() {
  return (
    <PageDefault>
      <h1>Cadastrar Categoria</h1>

      <Link to="/">
          Ir para Home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;