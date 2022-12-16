import {BrowserRouter, Route, Routes } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react';

import {Home} from './pages/Home'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
    <Analytics/>
    </>
  );
}

export default App;