import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppWrapper } from './appStyles';
import AllEvents from './components/Events/All/AllEvents';
import MyEvents from './components/Events/My/MyEvents';
import Friends from './components/Friends/Friends';

import Header from './components/Header/Header';
import LoginPage from './pages/Login/LoginPage';
import MainPage from './pages/Main/MainPage';
import ProfilePage from './pages/Profile/ProfilePage';
// import {ProfileRedirectContainer} from './pages/Profile/ProfilePage';
import SignupPage from './pages/Signup/SignupPage';
import Account from './components/Settings/Info/Account/Account';
import EditProfile from './components/Settings/Info/EditProfile/EditProfile';
import FavoriteSports from './components/Settings/Info/FavoriteSports/FavoriteSports';
import Language from './components/Settings/Info/Language';
import Notifications from './components/Settings/Info/Notifications/Notifications';

import Privacy from './components/Settings/Info/Privacy/Privacy';
import Settings from './components/Settings/Settings';
import { ModalProvider } from './hooks/useModal';
import store from './store/store';
import PastEvents from './pages/Profile/InfoProfile/ProfileEvents/Past/PastEvents';
import UpcomingEvents from './pages/Profile/InfoProfile/ProfileEvents/Upcoming/UpcomingEvents';
import UserProfile from './components/Users/UserProfile';
import Users from './components/Users/Users';
import UserEvents from './components/Users/UserEvents';
import { useAppDispatch, useAppSelector } from './hooks/hook';
import { useEffect } from 'react';
import { initApp } from './store/app/appThunk';
import Preloader from './components/Preloader/Preloader';
import { auth } from './store/auth/authThunk';
import PrivateRoutes from './utils/PrivateRoutes';
import { AuthProvider } from './context/auth/AuthProvider';

function App() {
  const { initialized } = useAppSelector((state) => state.app);
  const { isAuth } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initApp());
  }, []);

  if (!initialized) {
    return <Preloader />;
  }

  return (
    <AppWrapper>
      <Header />
      <Routes>
        {/* <Route element={<PrivateRoutes />}> */}
        <Route path="/" element={<MainPage />}>
          <Route path="events">
            <Route path="all-events" element={<AllEvents />} />
            <Route path="my-events" element={<MyEvents />} />
          </Route>
          <Route path="friends" element={<Friends />} />
          <Route path="users" element={<Users />} />
        </Route>
        {/* </Route> */}

        {/* <Route element={<PrivateRoutes />}> */}
        <Route path="profile" element={<ProfilePage />}>
          <Route path=":id" element={<ProfilePage />}>
            <Route path="events" element={<UserEvents />} />
            <Route path="past_events" element={<PastEvents />} />
            <Route path="upcoming_events" element={<UpcomingEvents />} />
          </Route>
        </Route>
        {/* </Route> */}

        {/* <Route element={<PrivateRoutes />}> */}
        <Route path="settings" element={<Settings />}>
          <Route path="edit_profile" element={<EditProfile />} />
          <Route path="account" element={<Account />} />
          <Route path="favorite_sports" element={<FavoriteSports />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="language" element={<Language />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>
        {/* </Route> */}

        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
      </Routes>
      {/* FOOTER */}
    </AppWrapper>
  );
}

export const RunApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Provider>
    </BrowserRouter>
  );
};
