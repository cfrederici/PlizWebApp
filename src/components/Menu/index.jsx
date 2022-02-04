import Link from 'next/link';

import styles from './styles.module.css';

import Head from 'next/head';

const Menu = () => {
  return (
    <div className={styles.container}>
      <Head>
        <script src="//code-sa1.jivosite.com/widget/xRbm4yXyhr" async></script>
      </Head>

      <Link href="/Estabelecimentos">Estabelecimentos</Link>
      <Link href="/Cardapio">Cardápio</Link>
    </div>
  );
};

export default Menu;
