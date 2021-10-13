import { useState } from 'react';
import styles from './styles.module.css';

const Create = () => {
  const [nome, setNome] = useState('');

  const handleCreate = async (event) => {
    event.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      nome: nome,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(
      'https://localhost:44355/Estabelecimento/CreateEstabelecimento',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));

    setNome('');
  };

  return (
    <>
      <h1>Cadastrar estabelecimento</h1>
      <form onSubmit={handleCreate}>
        <input
          style={{ width: '300px' }}
          type="text"
          placeholder="Nome do estabelecimento"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <button>Salvar</button>
      </form>
    </>
  );
};

export default Create;
