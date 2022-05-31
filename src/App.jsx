import logo from './logo.svg';
import styles from './App.module.css';
import Counter from './Counter.jsx';

function App() {
  return (
    <div class={styles.App}>
      <Counter />
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and Hello World!
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>

    </div>
  );
}

export default App;
