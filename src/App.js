import { useState } from 'react';
import {FiSearch} from 'react-icons/fi';
import './styles.css';
import api from './services/api';

function App() {
  const [input, setInput] = useState('')
  const [cep, setCep] = useState({});


async function handleSearch () {
    if (input === '') {
      alert('Preencha o CEP');
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput('');
      console.log(response);
    } catch {
      alert("CEP não encontrado");
      setInput('');
    }

  }


  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="ConteinerInput">
        <input type="text" 
        placeholder="Digite o CEP" value={input} onChange={(e) => setInput(e.target.value)}/>
        <button className="btnSearch" onClick={handleSearch}>
          <FiSearch size={25} color='#fff' />
        </button>
      </div>


    {Object.keys(cep).length > 0 && (
          <main className="main">
          <h2>CEP: {cep.cep}</h2>
          <span>Logradouro: {cep.logradouro}</span>
          <span>Bairro: {cep.bairro}</span>
          <span>Localidade: {cep.localidade} - {cep.uf}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>DDD: {cep.ddd}</span>
          <span>Região: {cep.regiao}</span>
    
    
    
        </main>
    )}

    </div>
  );
}

export default App;
