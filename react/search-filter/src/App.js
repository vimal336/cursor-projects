import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <input type="text" placeholder="search..." className="search" />
      <table>
        <tbody>
          [Users.map((item)=>(
            <tr> key={item.id}</tr>
            <td><img src={item.src} alt="image"/></td>
            <td>{item.name}</td>
          ))]
        </tbody>
      </table>
    </div>
  );
}

export default App;
