import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./models/routes";
import { RoutesNoMatch } from "./utilities/RoutesNoMatch";
import Home from "./pages/home/Home";
import "./App.css";
import { LayoutGeneral } from "./layout/LayoutGeneral";
import { LayoutAuth } from "./layout/LayoutAuth";
import { useAuth } from "./store/useAuth";

const AboutUs = lazy(() => import("./pages/about/AboutUs"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Search = lazy(() => import("./pages/search/Search"));
const TearmsAndConditions = lazy(() =>
  import("./pages/termsConditions/TermsAndConditions")
);
const Login = lazy(() => import("./pages/login/Login"));
const Register = lazy(() => import("./pages/register/Register"));
const Detail = lazy(() => import("./pages/detail/Detail"));
const Favorites = lazy(() => import("./pages/favorites/Favorites"));

function App() {
  const auth = useAuth((state) => state.auth.authenticated);

  return (
    <>
      <Suspense>
        <RoutesNoMatch>
          {auth === "authenticated" ? (
            <Route path="/private/*" element={<LayoutAuth />}>
              <Route path={publicRoutes.LOGIN} exact element={<Login />} />
              <Route
                path={publicRoutes.REGISTER}
                exact
                element={<Register />}
              />
              <Route path="*" replace element={<Navigate to="/" />} />
            </Route>
          ) : (
            <Route path="/auth/*" element={<LayoutAuth />}>
              <Route path={publicRoutes.LOGIN} exact element={<Login />} />
              <Route
                path={publicRoutes.REGISTER}
                exact
                element={<Register />}
              />
              <Route path="*" replace element={<Navigate to="/" />} />
            </Route>
          )}
          <Route path="*" replace element={<Navigate to="/" />} />
          <Route path="/" element={<LayoutGeneral />}>
            <Route index element={<Home />} />
            <Route path={publicRoutes.ABOUT_US} exact element={<AboutUs />} />
            <Route path={publicRoutes.CONTACT} exact element={<Contact />} />
            <Route path={publicRoutes.SEARCH} exact element={<Search />} />
            <Route
              path={publicRoutes.TERMS_CONDITIONS}
              exact
              element={<TearmsAndConditions />}
            />
            <Route
              path={`${publicRoutes.DETAIL_WITH_ID}/:id`}
              exact
              element={<Detail />}
            />
            <Route
              path={privateRoutes.FAVORITES}
              exact
              element={<Favorites />}
            />
          </Route>
        </RoutesNoMatch>
      </Suspense>
    </>
  );
}

export default App;
