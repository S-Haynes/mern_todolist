import * as actionTypes from "../actions/actiontypes";

const initialState = {
  items: [],
  newItem: "",
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return {
        ...state,
        items: [action.newItem, ...state.items],
        newItem: ""
      };
    case actionTypes.DELETE_ITEM:
      const currentItems = [...state.items];

      return {
        ...state,
        items: state.items.filter(item => item._id !== action.id)
      };
    case actionTypes.SET_ITEMS:
      return {
        ...state,
        loading: false,
        items: action.items
      };
    case actionTypes.CREATE_ITEM:
      return {
        ...state,
        newItem: action.e.target.value
      };
    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default reducer;
