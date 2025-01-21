import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Loading from './Loding'
import Category from './Category'
import axios from 'axios'
import Navbar from './Home/Navbar'
import Header from './Home/Header'
import './Recipe.css'

const Recipe = () => {
    const [recipe, setRecipe] = useState([]);
  const [tag, setTag] = useState([]);
  const [tagName, setTagName] = useState('');
  const [loading, setLoading] = useState(false);

  const getRecipies = async () => {
    setLoading(true);
    await axios.get('https://dummyjson.com/recipes?limit=10&skip=10')
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
    <div>
        <Navbar />
     
       <div className="container border p-3 shadow-lg" style={{marginTop:'15vh'}}>
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
    </div>
  )
}

export default Recipe
