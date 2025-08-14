import React, { useState } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
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
      formErrors.ingredients = "Please enter at least two ingredients";
    }
    if (!steps.trim()) formErrors.steps = "Preparation steps are required";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onAddRecipe({
        title,
        ingredients: ingredients.split(",").map((ing) => ing.trim()),
        steps,
      });
      setTitle("");
      setIngredients("");
      setSteps("");
      setErrors({});
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 md:p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-orange-500">
        Add a New Recipe
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 md:space-y-6 md:grid md:grid-cols-2 md:gap-6"
      >
        {/* Recipe Title */}
        <div className="col-span-2">
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

        {/* Preparation Steps */}
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
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-2 md:py-3 rounded-lg hover:bg-orange-600 transition"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
