import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/pages/Home/App';

import {
  BrowserRouter, Switch, Route
} from 'react-router-dom';
import CadastroVideo from './components/pages/cadastro/Video';
import CadastroCategoria from './components/pages/cadastro/Categoria';

const pagina404 = () => (<div><iframe style={{ minWidth: `80%`, minHeight: `40vh`}} src="https://editor.p5js.org/willrsousa94/embed/DkHPhKHJF" title="Jogo"></iframe></div>);

ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={pagina404} />
    </Switch>
  </BrowserRouter>,

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);