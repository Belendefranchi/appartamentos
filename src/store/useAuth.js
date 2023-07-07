import { create } from "zustand";
import { loginGoogle, register } from "../helper/authFunction";

const initialAuth = {
  user: {
    name: "",
    email: "",
    photo: "",
    uid: "",
  },
  authenticated: "not-authenticated",
  error: "",
  loading: false,
};

export const useAuth = create((set) => ({
  auth: initialAuth,
  setChecking: (set) => {
    set((state) => ({
      auth: { ...state.auth, loading: true, authenticated: "checking" },
    }));
  },
  setUser: async (displayName, email, password) => {
    set((state) => state.setChecking());

    try {
      const user = await register(displayName, email, password);

      set((state) => ({
        auth: {
          ...state.auth,
          user: {
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
            uid: user.uid,
          },
          loading: false,
          authenticated: "authenticated",
        },
      }));
    } catch (error) {
      set((state) => ({
        auth: {
          ...state.auth,
          loading: false,
          error: "Error al crear el usuario",
        },
      }));
    }
  },
  setLogin: async() => {

    try {
      const user = await loginGoogle();
      set((state) => ({
        auth: {
          ...state.auth,
          user: {
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
            uid: user.uid,
          },
          loading: false,
          authenticated: "authenticated",
        },
      }));
    } catch (error) {
      set((state) => ({
        auth: {
          ...state.auth,
          loading: false,
          error: "Error al crear el usuario",
        },
      }));
    }
  },
}));
