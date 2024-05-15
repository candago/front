import React from 'react';
import './App.css';
import { BrowserRouter as router,Switch, Route, Link } from 'react-router-dom';
import View_1 from './Pages/View_1'
import View_2 from './Pages/View_2'
import View_3 from './Pages/View_3'
import View_4 from './Pages/View_4'
import View_5 from './Pages/View_5'
import View_6 from './Pages/View_6'

function Graficos({ children }) {
  return (
    <div className="Graficos">
      {children}
      <div className="Titulo-Grafico">Título do Gráfico</div> {}
      <div className="Espaco-grafico"></div> {}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="Estrutura">
        <div className="Usuario"></div>
          <div className="Circulo"></div>
            <div className="Retangulo-views">
              <div className="header-P">Visualizações</div>
              <div className="Lista-Views">
                <a href="#view1">View 1</a>
                <a href="#view2">View 2</a>
                <a href="#view3">View 3</a>
                <a href="#view4">View 4</a>
                <a href="#view5">View 5</a>
                <a href="#view6">View 6</a>
              </div>
            </div>
            <div className="Retangulo_dashboard">
              <div className="header-G">Dashboard - Cidade</div>
              <div className="Fundo-Grafico">
                <Graficos />
                <Graficos />
                <Graficos />
              </div>
            </div>
          </div>
        </div>
      );
    }

    export default App;