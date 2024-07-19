import './App.css';

import { Routes, Route } from 'react-router-dom';
import { Homes } from './_root/pages';
import { About } from './_root/pages';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/aboutproject" element={<About />} />
      </Routes>

    </>
  )
}

export default App
