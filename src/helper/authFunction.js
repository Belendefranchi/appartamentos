import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../service/firebase";

async function register(displayName, email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: "https://i.postimg.cc/htLZRTW5/perfil.png",
      email: auth.currentUser.email,
      uid: auth.currentUser.uid,
    });

    const arrayUser = {
      displayName: displayName,
      photoURL: "https://i.postimg.cc/htLZRTW5/perfil.png",
      email: auth.currentUser.email,
      uid: auth.currentUser.uid,
    };

    return arrayUser;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(auth.currentUser, {
      displayName: auth.currentUser.displayName,
      photoURL: "https://i.postimg.cc/htLZRTW5/perfil.png",
    });

    const user = userCredential.user;
    console.log(user);
  } catch (error) {
    throw new Error(error.message);
  }
}

export { register, login };
