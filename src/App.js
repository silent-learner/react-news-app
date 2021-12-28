
import './App.css';
import NavBar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';


function App() {
  const [progress, setprogress] = useState(0)
  const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
  return (
    <>
      <Router>
      <LoadingBar
        color='#2195ee'
        progress={progress}
        height='2px'
        shadow="true"
      />
        <NavBar />
        <Routes>
          <Route path="/sports" element={<News setprogress={setprogress} API_KEY={API_KEY}  key="sports" category="sports" />} />
          <Route path="/" element={<News setprogress={setprogress} API_KEY={API_KEY}   key="top" category="top" />} />
          <Route path="/top" element={<News setprogress={setprogress} API_KEY={API_KEY}   key="world" category="top" />} />
          <Route path="/business" element={<News setprogress={setprogress} API_KEY={API_KEY}    key="business" category="business" />} />
          <Route path="/entertainment" element={<News setprogress={setprogress} API_KEY={API_KEY}   key="entertainment" category="entertainment" />} />
          <Route path="/health" element={<News setprogress={setprogress}  API_KEY={API_KEY}  key="health" category="health" />} />
          <Route path="/science" element={<News setprogress={setprogress} API_KEY={API_KEY}   key="science" category="science" />} />
          <Route path="/technology" element={<News  setprogress={setprogress} API_KEY={API_KEY}  key="technology" category="technology" />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
