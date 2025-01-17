import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Category from './Category';
import Sidebar from './Sidebar';
import Loading from './Loding';
import RecipeDetail from './RecipeDetail'; // Import RecipeDetail
import axios from 'axios';

function App() {
  const [recipe, setRecipe] = useState([]);
  const [tag, setTag] = useState([]);
  const [tagName, setTagName] = useState('');
  const [loading, setLoading] = useState(false);

  const getRecipies = async () => {
    setLoading(true);
    await axios.get('https://dummyjson.com/recipes')
      .then((res) => res.data)
      .then((recipes) => {
        setRecipe(recipes.recipes);
        setLoading(false);
      });
  };

  const getRecipeTag = () => {
    axios.get('https://dummyjson.com/recipes/tags')
      .then((res) => res.data)
      .then((tags) => {
        setTag(tags);
      });
  };

  useEffect(() => {
    getRecipies();
    getRecipeTag();
  }, []);

  useEffect(() => {
    if (tagName !== '') {
      setLoading(true);
      axios.get(`https://dummyjson.com/recipes/tag/${tagName}`)
        .then((res) => res.data)
        .then((recipe) => {
          setRecipe(recipe.recipes);
          setLoading(false);
        });
    }
  }, [tagName]);

  return (
    <Router>
      <Routes>
        {/* Main recipes list page */}
        <Route
          path="/"
          element={
            <div className="container mt-5 border p-3 shadow-lg">
              <div className="row">
                <h3 className="text-center fw-bolder">Recipes</h3>
                <hr />
                <div className="col-3 col-sm-3 border-end">
                  <Sidebar tag={tag} setTagName={setTagName} />
                </div>
                <div className="col-9 col-sm-9">
                  {loading ? (
                    <Loading />
                  ) : (
                    <div className="category-container row row-cols-1 row-cols-md-4 g-3">
                      {recipe.map((recipe) => (
                        <Category {...recipe} key={recipe.id} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          }
        />
        {/* Recipe details page */}
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
