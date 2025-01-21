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
  const [recipeName , setRecipeName]=useState('');

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

  const Search = (event) => {
    event.preventDefault(); // Prevent default form submission
  
    axios
      .get(`https://dummyjson.com/recipes/search?q=${recipeName}`)
      .then((res) => res.data)
      .then((res) => {
        if (res.recipes && res.recipes.length > 0) {
          setRecipe(res.recipes);
        } else {
          alert("No recipes found"); 
        }
      })
      .catch((error) => {
        alert("An error occurred while searching for recipes.",error);
      });
  };
  
  return (
    <div>
      <Navbar />

      <div className="container border p-3 shadow-lg" style={{ marginTop: '15vh' }}>
        <div className="row">
          <h3 className="text-center fw-bolder">Recipes</h3>

          <hr />
          <div className="col-3 col-sm-3 border-end">
            <Sidebar tag={tag} setTagName={setTagName} />
          </div>
          <div className="col-9 col-sm-9">
          <form className="form-inline my-2 my-lg-0 d-flex" onSubmit={Search}>
          
            <input
              className="form-control mr-sm-2 w-25"
              name="recipeName"
              value={recipeName}
              onChange={(e) => setRecipeName(e.target.value)} 
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0 ms-3" type="submit">
              Search
            </button>
          </form>

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
