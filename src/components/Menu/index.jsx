import Link from 'next/link';

import styles from './styles.module.css';

const Menu = () => {
  return (
    <div className={styles.container}>
      <Link href="/Estabelecimentos">Estabelecimentos</Link>
      <Link href="/Cardapio">Cardápio</Link>
    </div>
  );
};

export default Menu;
