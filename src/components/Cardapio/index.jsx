import { useEffect, useState } from 'react';
import styles from './styles.module.css';

const Cardapio = () => {
  const [cardapios, setCardapios] = useState();
  const [novo, setNovo] = useState(false);

  const [nome, setNome] = useState('');
  const [idEstabelecimento, setIdEstabelecimento] = useState(1);

  useEffect(() => {
    GetCardapios();
  }, []);

  const GetCardapios = () => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      nome: '',
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(
      'https://test-service-lo1btsvqd.azurewebsites.net/Cardapio/GetCardapio',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setCardapios(result))
      .catch((error) => console.log('error', error));
  };

  const handleCreate = (event) => {
    event.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      nome: nome,
      idEstabelecimento: idEstabelecimento,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(
      'https://test-service-lo1btsvqd.azurewebsites.net/Cardapio/CreateCardapio',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));

    setNome('');
    setIdEstabelecimento(1);

    GetCardapios();
    setNovo(false);
  };

  return (
    <>
      <h1>Cardápio</h1>
      {cardapios && !novo && (
        // <pre>{JSON.stringify(estabelecimentos, null, 2)}</pre>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Data criação</th>
              <th>Status</th>
              <th>Id Estab.</th>
              <th>Estabelecimento</th>
            </tr>
          </thead>
          <tbody>
            {cardapios.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>
                  {new Intl.DateTimeFormat('pt-BR').format(
                    new Date(item.dtCriacao)
                  )}
                </td>
                <td>{item.ativo ? 'Ativo' : 'Inativo'}</td>
                <td>{item.idEstabelecimento}</td>
                <td>{item.nomeEstabelecimento}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {!novo && <button onClick={() => setNovo(true)}>Novo</button>}
      {novo && (
        <form onSubmit={handleCreate}>
          <select
            name=""
            id=""
            onChange={(e) => setIdEstabelecimento(e.target.value)}
          >
            <option value="1">Estab 1</option>
            <option value="2">Estab 2</option>
          </select>
          <input
            style={{ width: '300px' }}
            type="text"
            placeholder="Nome do cardápio"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <button>Salvar</button>
        </form>
      )}
    </>
  );
};

export default Cardapio;
