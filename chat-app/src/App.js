import './App.css';
import { Navbar } from './components/Navbar';
import { ChatBox } from './components/ChatBox';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ChatBox />
    </div>
  );
}

export default App;
