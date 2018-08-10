import * as actionTypes from "./actiontypes";
import axios from "axios";

export const setLoading = () => {
  return {
    type: actionTypes.SET_LOADING
  };
};

export const getItems = () => dispatch => {
  dispatch(setLoading());
  axios
    .get("/api/items")
    .then(res => {
      dispatch(setItems(res.data));
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
};

export const setItems = items => {
  return {
    type: actionTypes.SET_ITEMS,
    items: items
  };
};

export const addItem = newItem => dispatch => {
  axios
    .post("/api/items", newItem)
    .then(
      dispatch({
        type: actionTypes.ADD_ITEM,
        newItem: newItem
      })
    )
    .catch(err => {
      console.log(err);
    });
};

export const createItem = e => {
  return {
    type: actionTypes.CREATE_ITEM,
    e: e
  };
};

export const deleteItem = id => dispatch => {
  axios
    .delete("/api/items/" + id)
    .then(
      dispatch({
        type: actionTypes.DELETE_ITEM,
        id: id
      })
    )
    .catch(err => {
      console.log(err);
    });
};
