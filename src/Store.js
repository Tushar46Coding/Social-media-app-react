import { createContext, useReducer } from "react";
import img from "./images/profilepic.jpg";
import img1 from "./images/profilepic1.jpg";
import img2 from "./images/profilepic2.jpg";
import joker from "./images/joker.jpg";
import { v4 } from "uuid";
export const Store = createContext();
const initialState = {
  user: localStorage.getItem("twitterUser")
    ? JSON.parse(localStorage.getItem("twitterUser"))
    : null,
  users: [
    { id: v4(), userName: "Tushar", password: "12345", image: img },
    { id: v4(), userName: "Raj", password: "12345", image: img1 },
    { id: v4(), userName: "Sagar", password: "12345", image: img2 },
  ],
  posts: [
    {
      id: 1,
      profilePic: img1,
      user: "Yog",
      pseudoName: "@Yoda4ever",
      tweet: "Mama dog shows gratitude to a woman for feeding her puppies.",
      caption: "#MothersDay2023",
      file: "https://media.istockphoto.com/id/530685719/photo/group-of-business-people-standing-in-hall-smiling-and-talking-together.jpg?s=612x612&w=is&k=20&c=4Y1biSeP9M5UKqNPVw6T1Wzuc995UGYIQF3Rvp8o3YA=",
      likes: [],
      comments: [
        { id: v4(), user: "sagar", message: "Wow" },
        { id: v4(), user: "Tushar", message: "Good click" },
        { id: v4(), user: "Raj", message: "Nice Pic" },
      ],
    },
    {
      id: 2,
      profilePic: img2,
      user: "Tushar",
      pseudoName: "@Tushar4ever",
      tweet: "Maasdasog ssadsadasasoman for feeding her puppies.",
      caption: "#MothersDay2023",
      file: "https://cdn.pixabay.com/photo/2019/04/07/23/11/link-building-4111001_960_720.jpg",
      likes: [],
      comments: [
        { id: v4(), user: "sagar", message: "Wow" },
        { id: v4(), user: "Tushar", message: "Good click" },
        { id: v4(), user: "Raj", message: "Nice Pic" },
      ],
    },
    {
      id: 3,
      profilePic: img,
      user: "Yog",
      pseudoName: "@Yoda4ever",
      tweet: "Mama dog shows gratitude to a woman for feeding her puppies.",
      caption: "#MothersDay2023",
      file: joker,
      likes: [],
      comments: [
        { id: v4(), user: "sagar", message: "Wow" },
        { id: v4(), user: "Tushar", message: "Good click" },
        { id: v4(), user: "Raj", message: "Nice Pic" },
      ],
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN_APP": {
      const user = { ...action.payload, image: img };
      localStorage.setItem("twitterUser", JSON.stringify(user));
      return { ...state, user };
    }
    case "SIGNOUT": {
      localStorage.removeItem("twitterUser");
      return { ...state, user: null };
    }

    case "ADDLIKES": {
      const newPost = action.payload.object;
      const index = action.payload.index;
      const posts = [...state.posts];
      posts[index] = newPost;
      return { ...state, posts };
    }
    case "CHANGE_IMAGE": {
      const newUser = action.payload;
      const users = [...state.users];
      const index = users.indexOf(newUser);
      users[index] = newUser;
      return { ...state, user: newUser, users: users };
    }
    case "ADD_COMMENT": {
      const post = action.payload.post;
      const index = action.payload.index;
      let posts = [...state.posts];
      posts[index] = post;
      return { ...state, posts: posts };
    }
    case "ADD_TWEET": {
      const post = { ...action.payload, id: state.posts.length + 1 };
      const posts = [...state.posts];
      posts.push(post);
      return { ...state, posts: posts };
    }
    case "SIGN_UP_APP": {
      const user = action.payload;
      localStorage.setItem("twitterUser", JSON.stringify(user));
      const users = [...state.users];
      users.push(user);
      return { ...state, users, user };
    }
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
