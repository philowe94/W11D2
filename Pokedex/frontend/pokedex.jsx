import React from 'react';
import ReactDOM from 'react-dom';
import * as ApiUtil from './util/api_util';
import {receiveAllPokemon, requestAllPokemon} from './actions/pokemon_actions';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', ()=>{
  const root = document.getElementById('root');
  const store = configureStore();
  
  //testing
  window.ApiUtil = ApiUtil;
  window.fetchAllPokemon = ApiUtil.fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<h1>Pokedex</h1>, root)

})
