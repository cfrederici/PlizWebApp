import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [cardapio, setCardapio] = useState([{}]);

  const GetCardapio = () => {
    console.log('efetuando consulta');

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      nome: 'ter',
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(
      'https://test-service-lo1btsvqd.azurewebsites.net/cardapio/GetCardapio',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setCardapio(result))
      .catch((error) => console.log('error', error));
  };

  return (
    // <div
    //   style={{
    //     display: 'flex',
    //     backgroundColor: '#fff',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     height: '100vh',
    //   }}
    // >
    //   <h1>Cardápios ({cardapio.length})</h1>
    //   <button
    //     onClick={GetCardapio}
    //     style={{
    //       cursor: 'pointer',
    //       borderRadius: '10px',
    //       backgroundColor: '#4682b4',
    //       color: 'white',
    //       padding: '15px',
    //       maxWidth: '300px',
    //       fontSize: '1rem',
    //     }}
    //   >
    //     Consultar cardápios
    //   </button>
    //   <hr />
    //   {/* {cardapio && <pre>{JSON.stringify(cardapio, null, 2)}</pre>} */}
    //   {cardapio.map((item) => (
    //     <label key={item.id}>
    //       Id: {item.id} - Cardápio: {item.nome}
    //     </label>
    //   ))}
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>Código</th>
    //         <th>Nome</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {cardapio.map((item, index) => (
    //         <tr key={index}>
    //           <td>{item.id}</td>
    //           <td>{item.nome}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
    <>
      <p>Menu</p>
      <Link href="/Estabelecimentos">Estabelecimentos</Link>
    </>
  );
}
