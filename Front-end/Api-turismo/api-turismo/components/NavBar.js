import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
 
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" style={{backgroundColor:'green'}}>Inicio</Link>
      <Link href="/home" style={{backgroundColor:'green'}}>Clientes</Link>
      <Link href="/destino" style={{backgroundColor:'green'}}>Destinos</Link>
   </nav>
  );
};
 
export default Navbar;