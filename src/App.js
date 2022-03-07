import React, {useEffect,useState} from "react";
import axios from "axios";
import CardList from "./components/card-list/CardList";
import "./App.css";
import SearchBox from "./components/search-box/SearchBox";



function App(){

  const [monsters, setMonsters] = useState([]);
  const [search, setSearch] = useState("");  
 
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      setMonsters(res.data)
    }).catch(error => console.log(error)) 
  }, [])


  const filteredMonsters = monsters.filter(monster => 

       monster.name.toLowerCase().includes(search.toLowerCase())

  );
  const handleChange = (e) =>{
    setSearch(e.target.value)
  }
    
    
  return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder="Search Monster" handleChange={handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
  );
}

export default App;
