import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function App() {
  const [count, setCount] = useState(0)
  const  [password, setPassword] = useState(false);
  const   [passKey, setPassKey] = useState("");
  const [data, setadata] = useState([]);
  // const [error, setError] = useState(null);

  useEffect(()=>{
    fetch(API_URL)
    .then(response => {
      if (response.ok){
        return response.json();
      }else{
        throw new Error("Error fetching data")
      }
    })
    .then(data => setadata(data))
    .catch(error => (error.message))
  },[]);

  function togglePassword(){
    setPassword((password) => !password)
  }

  function handlePasswordChange(event){
      setPassKey(event.target.value);
      console.log(event.target.value);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
      {passKey}
      <input type={password ? "text" : "password"}
      value={passKey}
      onChange={handlePasswordChange}
      />
      {password ? <FaRegEye onClick={togglePassword}/>
      :
      
      (
        <FaRegEyeSlash onClick={togglePassword}/>
      )}

       <h1>API Integration Example</h1>
       <h2>GET Request</h2>
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>

      
    </>
  )
}

export default App
