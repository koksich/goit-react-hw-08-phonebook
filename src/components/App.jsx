import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { fetchCurrentUser } from "redux/auth/authOperations";
import { getIsFetchingCurrentUser } from "redux/auth/authSelectors";
import { Layout } from "./Layout/Layout";
import { ToastContainer } from "react-toastify";
import { PublicRoute } from "./Routs/PublicRoute";
import { PrivateRoute } from "./Routs/PrivateRoute";
  import 'react-toastify/dist/ReactToastify.css';


const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LogInPage = lazy(() => import('pages/LoginPage/LogInPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));



export const App = () => {
  const dispatch = useDispatch();
  const isFetchibgCurrentUser = useSelector(getIsFetchingCurrentUser);

  useEffect(() => { dispatch(fetchCurrentUser()) }, [dispatch]);

  return (
    !isFetchibgCurrentUser && (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PublicRoute>
                  <HomePage />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute restricted>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute restricted>
                  <LogInPage />
                </PublicRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
        <ToastContainer />
      </>
    )
  );
};
