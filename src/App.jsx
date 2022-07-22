import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';
import { Post } from './Post'

import styles from './App.module.css';

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.warapper} >
        <Sidebar />
        <main>
          <Post
            author="Denisio Rodrigues"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ex adipisci labore dolore perspiciatis! Quae, aliquid quas mollitia eum voluptate labore doloribus optio quidem, ipsa dolore velit, magnam nemo tempora."
          />
          <Post
            author="Guilherme Vilmar"
            content="Um bebê que gosta de açucar"
          />
        </main>
      </div>

    </div>
  )
}

