import { Header } from './components/Header'
import { Post } from './Post'

import './styles.css'

export function App() {
  return (
    <div>
      <Header/>
      <Post 
        author="Denisio Rodrigues"
        content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ex adipisci labore dolore perspiciatis! Quae, aliquid quas mollitia eum voluptate labore doloribus optio quidem, ipsa dolore velit, magnam nemo tempora."
      />
      <Post
      author = "Guilherme Vilmar"
      content= "Um bebê que gosta de açucar"
      />
    </div>
  )
}

