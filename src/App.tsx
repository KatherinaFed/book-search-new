import './App.css'
import { useGetAllBooksQuery } from './services/bookService'

function App() {
  
  const {data} = useGetAllBooksQuery() 

  return (
    <>
     {data}
    </>
  )
}

export default App
