import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { fetchCurrentUser } from "redux/auth/authOperations";
import { getIsFetchingCurrentUser } from "redux/auth/authSelectors";
import { Layout } from "./Layout/Layout";
import { ToastContainer } from "react-toastify";


const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LogInPage = lazy(() => import('pages/LogInPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));



export const App = () => {
  const dispatch = useDispatch();
  const isFetchibgCurrentUser = useSelector(getIsFetchingCurrentUser);

  useEffect(() => { dispatch(fetchCurrentUser()) }, [dispatch]);

  return (
    !isFetchibgCurrentUser && (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>
        </Routes>
        <ToastContainer/>
      </>
    )
  );
};
