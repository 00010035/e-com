import {
  FAVORITE_ADD_ITEM,
  FAVORITE_REMOVE_ITEM,
} from "../constants/favoriteConstants";

export const favoriteReducer = (state = { favoriteItems: [] }, action) => {
  switch (action.type) {
    case FAVORITE_ADD_ITEM:
      const item = action.payload;
      const existItem = state.favoriteItems.find(
        (x) => x.product === item.product
      );

      if (existItem) {
        return {
          ...state,
          favoriteItems: state.favoriteItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          favoriteItems: [...state.favoriteItems, item],
        };
      }

    case FAVORITE_REMOVE_ITEM:
      return {
        ...state,
        favoriteItems: state.favoriteItems.filter(
          (x) => x.product !== action.payload
        ),
      };

    default:
      return state;
  }
};
