
import './App.css';
import Countries from './component/Countries/Countries';


function App() {
  
  return (
    <div className="App">
     <Countries></Countries>
    </div>
  );
}

// function LoadCountries(){
//   const [countries, setCountries] = useState([]);

//   useEffect( () =>{

//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))

//   }, [])
//   return(
//     <div>
//       <h1>Visiting Every Country of the World</h1>
//       <h3>Available Countries: {countries.length}</h3>
//       {
//         countries.map(country => <Country name={country.name.common}  population={country.population} capital={country.capital}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props){
//   return(
//     <div>
//       <h2>Name: {props.name}</h2>
//       <h2>Population: {props.population}</h2>
//       <h2>Capital: {props.capital}</h2>
//     </div>
//   )
// }
export default App;
