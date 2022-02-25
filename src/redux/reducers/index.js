// Reducer
const initialState = {
  favorites: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_FAVORITES": {
      return {
        ...state,
        favorites: [...state.favorites, action.payload], 
      };
    }
    case "REMOVE_FROM_FAVORITES": {
      const newFavorites = state.favorites.filter(
        (favorite) => favorite.name != action.payload.name
      );
      return {
        ...state,
        favorites: newFavorites,
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
