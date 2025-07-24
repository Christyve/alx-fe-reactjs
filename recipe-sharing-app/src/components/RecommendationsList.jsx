import { useRecipeStore } from './recipeStore';
import { useEffect } from 'react';

const RecommendationsList = () => {
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);
  const recommendations = useRecipeStore((state) => state.recommendations);

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div>
      <h2>Recommended For You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations at the moment.</p>
      ) : (
        recommendations.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: '1rem' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
