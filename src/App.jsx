import { Header } from "./components/Header"
import { MainArticle } from "./components/MainArticle"
import { NewArticle } from "./components/NewArticle"
import { ArticlesContainer } from "./components/ArticlesContainer"
import './App.css'
import { NewContainer } from "./components/NewContainer"

function App() {


  return (
    <main className=" px-4 pt-5">
 
      <Header/>

      <div className="lg:flex lg:gap-8">
      <MainArticle/>
      <NewContainer/>
      </div>

      <ArticlesContainer/>

    </main>
  )
}

export default App
