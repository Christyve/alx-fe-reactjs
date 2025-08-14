// src/components/AddRecipeForm.jsx
import React, { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!title.trim()) formErrors.title = "Recipe title is required";
    if (!ingredients.trim()) {
      formErrors.ingredients = "Ingredients are required";
    } else if (ingredients.split(",").length < 2) {
      formErrors.ingredients = "Please include at least two ingredients";
    }
    if (!steps.trim()) formErrors.steps = "Preparation steps are required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log("Recipe Submitted:", { title, ingredients, steps });
      setTitle("");
      setIngredients("");
      setSteps("");
      alert("Recipe added successfully!");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-4 md:p-8 mt-8">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
        Add a New Recipe
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        
        {/* Title */}
        <div>
          <label className="block font-semibold mb-1">Recipe Title</label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2 md:py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-semibold mb-1">
            Ingredients (comma-separated)
          </label>
          <textarea
            className="w-full border rounded-lg px-3 py-2 md:py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            rows="3"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps */}
        <div>
          <label className="block font-semibold mb-1">Preparation Steps</label>
          <textarea
            className="w-full border rounded-lg px-3 py-2 md:py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            rows="4"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-sm">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white font-semibold py-2 md:py-3 rounded-lg hover:bg-orange-600 transition"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}
