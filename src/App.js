import dotenv from 'dotenv'
import Nav from './Nav'
import Banner from './Banner'
import Row from './Row'
import requests from './requests'
import './App.css'
import './Row.css'
dotenv.config()
// console.log(process.env.REACT_APP_API_KEY)
function App () {
  return (
    <div className='App'>
      <Nav />
      <Banner />
      <Row
        title='NETFLIX ORIGINALS'
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title='Trending Now' fetchURL={requests.fetchTrending} isLargeRow />
      <Row title='Top Rated' fetchURL={requests.fetchTopRated} />
      <Row title='Action Movies' fetchURL={requests.fetchActionMovies} />
      <Row title='Romantic Movies' fetchURL={requests.fetchRomanceMovies} />
      <Row title='Horror Movies' fetchURL={requests.fetchHorrorMovies} />
      <Row title='Comedies Movies' fetchURL={requests.fetchComedyMovies} />
      <Row title='Documentaries' fetchURL={requests.fetchDocumentaries} />

    </div>
  )
}

export default App
