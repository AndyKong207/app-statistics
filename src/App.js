import './App.css';
import { HomeButton } from './components'

function App() {
  return (
    <div className="App">
      <HomeButton icon='production'>
        生产
      </HomeButton>
      <HomeButton icon='other'>
        其他
      </HomeButton>
      <HomeButton icon='shopping'>
        购物
      </HomeButton>
      <HomeButton icon='finance'>
        金融
      </HomeButton>
      <HomeButton icon='manufacturer'>
        制造
      </HomeButton>
    </div>
  );
}

export default App;
