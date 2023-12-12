import React, { useState, createContext } from "react";
import { Apifetch } from "./components/Apifetch";
import { Navbar } from "./components/Navbar";
import { State } from "./components/State";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from "./components/pages/Home";
import { Profile } from "./components/pages/Profile";
import { Query } from "./components/Query";
import { GForms } from "./components/GForms";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const Appcontext = createContext();

function App() {
  const [username, setUsername] = useState("jana");
  const [context, setContextName] = useState('');

  const client = new QueryClient();

  return (
    <div className="bg-[#776B5D]">
      <QueryClientProvider client={client}>
        <Appcontext.Provider value={{ username, setUsername, context, setContextName }}>
          <Router>
            <Navbar />
            <Routes>
              <Route path='/' element={<State />} />
              <Route path='fetch' element={<Apifetch />} />
              <Route path='home' element={<Home username={username} />} />
              <Route path='profile' element={<Profile username={username} setUsername={setUsername} />} />
              <Route path="query" element={<Query />} />
              <Route path='form' element={<GForms/>}/>
            </Routes>
          </Router>
        </Appcontext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
