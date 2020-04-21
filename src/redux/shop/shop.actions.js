import { ShopActionTypes } from "./shop.types";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
  payload: collectionsMap,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");

    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/e-com-d-b/databases/(default)/documents/collections"
    // )
    //   .then((response) => response.json())
    //   .then((collections) => console.log(collections));

    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionMap = convertCollectionsSnapshotToMap(snapshot);
        // updateCollections(collectionMap);
        dispatch(fetchCollectionsSuccess(collectionMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};
