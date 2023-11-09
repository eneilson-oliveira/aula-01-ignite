import styles from './Sadebar.module.css';

export function Sadebar() {
  return (
    <aside className={styles.sadebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/eneilson-oliveira.png" />
        <strong>Eneilson</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}