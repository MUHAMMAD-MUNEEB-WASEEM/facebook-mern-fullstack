import './App.css';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';
import { useStateValue } from './components/StateProvider/StateProvider';
import Widgets from './components/Widgets/Widgets';


function App() {
  const [{user}, dispatch] = useStateValue();
    return (

    
      <div className="app">
        {!user ? (
          <Login/>
        ):(
          <>
          <Header/>

          <div className="app__body">
            <Sidebar/>
            <Feed/>
            <Widgets />
          </div>
          </>
        )}

      </div>
    );
    }

export default App;
