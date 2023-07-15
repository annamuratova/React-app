import Card from './components/Card'
import './App.css'
import {movies} from "./data.js"



function App() {

  return (
    <div className='app'>
     <h1 className='heading'> My movies</h1>
      <div className='cards'>
      {
        movies.map((item)=>{
          return <Card data={item}/>
        })
      }
      </div>
     </div>
  )
}

export default App
