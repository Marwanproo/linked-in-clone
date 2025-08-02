/* eslint-disable no-unused-vars */
import { auth, db, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import * as actions from "./actions";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

export function signInAPI() {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((payload) => {
        dispatch(actions.setUser(payload.user));
      })
      .catch((error) => alert(error.message));
  };
}
export function getUserAuth() {
  // to change user account which stored in Redux
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(actions.setUser(user));
      }
    });
  };
}
export function signOutAPI() {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(actions.setUser(null));
      })
      .catch((error) => alert(error.message));
  };
}

export function postArticleAPI(payload) {
  return (dispatch) => {
    dispatch(actions.setLoading(true));
    {
      const collRef = collection(db, "articles");
      addDoc(collRef, {
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
        },
        comments: 0,
        description: payload.description,
      });
      dispatch(actions.setLoading(false));
    }
  };
}
export function getArticlesAPI() {
  return (dispatch) => {
    let payload;
    const collRef = collection(db, "articles");
    const orderedRef = query(collRef, orderBy("actor.date", "desc"));
    onSnapshot(orderedRef, (snapshot) => {
      payload = snapshot.docs.map((doc) => doc.data());
      dispatch(actions.getArticles(payload));
    });
  };
}