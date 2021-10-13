import { useEffect, useState } from 'react';
import styles from './styles.module.css';

const Report = () => {
  const [estabelecimentos, setEstabelecimentos] = useState();

  useEffect(() => {
    GetEstabelecimentos();
  }, []);

  const GetEstabelecimentos = () => {
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
      'https://test-service-lo1btsvqd.azurewebsites.net/Estabelecimento/GetEstabelecimento',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setEstabelecimentos(result))
      .catch((error) => console.log('error', error));
  };

  return (
    <>
      <h1>Relatório</h1>
      {estabelecimentos && (
        // <pre>{JSON.stringify(estabelecimentos, null, 2)}</pre>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Data criação</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {estabelecimentos.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>
                  {new Intl.DateTimeFormat('pt-BR').format(
                    new Date(item.dtCriacao)
                  )}
                </td>
                <td>{item.ativo ? 'Ativo' : 'Inativo'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Report;
