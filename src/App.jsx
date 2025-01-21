import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import RecipeDetail from './RecipeDetail'; // Import RecipeDetail
import Recipe from './Recipe';
import Home from './Home/Home';

function App() {  

  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Home />} />
      <Route  path="recipe" element={<Recipe />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
