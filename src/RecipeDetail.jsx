import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from './Loding';
import './RecipeDetail.css'

const RecipeDetail = () => {
    const { id } = useParams(); // Extract recipe id from the URL
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
                setRecipe(response.data);
                setLoading(false)
            } catch (error) {
                console.error('Error fetching recipe:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipe();
    }, [id]);



    return (
        <div className="container mt-2">
            <div className="col-8 offset-2">
                {loading ? (
                    <Loading />
                ) : recipe ? (
                    <div className="card shadow-lg">
                        <img src={recipe.image} className="card-img-top" alt={recipe.name} style={{ height: '25vw' }} />
                        <div className="card-body row text-center">
                            <h5 className="card-title text-center fw-bolder">{recipe.name}</h5>
                            <hr />
                            <div className="col-6">
                                <p className="fw-bold">Instructions:
                                    <p className="card-text fw-light">{recipe.instructions}</p>
                                </p>
                                <p className="fw-bold">Difficulty: {recipe.difficulty}</p>
                            </div>
                            <div className="col-6">
                                <p className="fw-bold">Ingredients:
                                    <p className="card-text fw-light">{recipe.ingredients}</p>
                                </p>
                                <p className="fw-bold">Rating: {recipe.rating}</p>
                            </div>
                            <div>
                                <Link to="/" className="btn btn-outline-danger  border-top border-start border-end w-25">Go Back</Link>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Recipe not found</p>
                )}


            </div>
        </div>
    );
};

export default RecipeDetail;
