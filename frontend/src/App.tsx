import { Suspense, lazy, useEffect, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ECommerce from './pages/Dashboard/ECommerce';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Loader from './common/Loader';
import routes from './routes';
import { RootState } from './store/store';
import { RouteGuard } from './routes/RouteGurd';

import { isTokenExpired, logout } from './feature/authSlice';

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { isAuthenticated, token, tokenExpiry } = useSelector(
    (state: RootState) => state.auth,
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    if (isTokenExpired({
      token, tokenExpiry,
      user: undefined,
      isAuthenticated: false
    })) {
      dispatch(logout());  // Logout user if the token is expired
      navigate('/auth/login');   // Redirect to login page
    }
  }, [tokenExpiry]);;

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Suspense fallback={<Loader />}>
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path="/auth/signin" element={<SignIn />} />
            <Route path="/auth/signup" element={<SignUp />} />
            <Route path="*" element={<Navigate to="/auth/signin" />} />
          </>
        ) : (
          <Route element={<DefaultLayout />}>
            <Route index element={<ECommerce />} />
            {routes.map((route, index) => {
              const { path, component: Component, roles }: any = route;
              return (
                <Route
                  key={index}
                  path={path}
                  element={
                    <Suspense fallback={<Loader />}>
                      <RouteGuard roles={roles} element={<Component />} />
                    </Suspense>
                  }
                />
              );
            })}
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        )}
      </Routes>
    </Suspense>
  );
}

export default App;
