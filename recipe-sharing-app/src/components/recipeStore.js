import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  // Core actions
  addRecipe: (newRecipe) =>
    set((state) => {
      const updated = [...state.recipes, newRecipe];
      return {
        recipes: updated,
        filteredRecipes: filter(updated, state.searchTerm),
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updated = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: updated,
        filteredRecipes: filter(updated, state.searchTerm),
        favorites: state.favorites.filter((favId) => favId !== id),
      };
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updated = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      return {
        recipes: updated,
        filteredRecipes: filter(updated, state.searchTerm),
      };
    }),

  // Search actions
  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: filter(state.recipes, term),
    })),

  setRecipes: (recipes) =>
    set((state) => ({
      recipes,
      filteredRecipes: filter(recipes, state.searchTerm),
    })),

  // Favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      fav
