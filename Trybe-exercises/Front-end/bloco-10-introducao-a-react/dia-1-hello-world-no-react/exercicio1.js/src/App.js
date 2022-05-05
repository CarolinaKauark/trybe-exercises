import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['Passear com o dog', 'Malhar', 'Fazer o almoço', 'Brincar com o banguela']

function App() {
  return (
    <ul className="">
        {compromissos.map((compromisso) => Task(compromisso))}
    </ul>
  );
}

// class App extends React.Component {
//   render () {
//     return (
//       <div className="App">
//           {Task('Consegui')}
//       </div>
//     )
//   }
// }

export default App;
