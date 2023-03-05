import { Routes, Route, NavLink } from 'react-router-dom';
import css from '../App/App.module.css';
import { lazy, Suspense } from 'react';
import System from 'pages/System/System';
import Devices from 'pages/Devices/Devices';
import Network from 'pages/Network/Network';
import Telephone from 'pages/Telephone/Telephone';
import Personalization from 'pages/Personalization/Personalization';
import Applications from 'pages/Applications/Applications';
import { Avatar, makeStyles, Button } from "@fluentui/react-components";
import {
  BriefcaseRegular,
  CalendarLtrRegular,
  ConferenceRoomRegular,
  GuestRegular,
  PeopleRegular,
  PeopleTeamRegular,
  PersonCallRegular,
} from "@fluentui/react-icons";
import * as React from "react";
import Accounts from 'pages/Accounts/Accounts';
import TimeAndLanguage from 'components/TimeAndLanguage/TimeAndLanguage';
import Games from 'pages/Games/Games';
import Search from 'pages/Search/Search';
import Update from 'pages/Update/Update';
import Confidential from 'pages/Confidential/Confidential';
import DarkMode from 'components/DarkMode/DarkMode';
import { useTranslation } from 'react-i18next';
const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const Cast = lazy(() => import('components/Cast/Cast'));
// const Update = lazy(() => import('components/Update/Update'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));


const useStyles = makeStyles({
  buttonsWrapper: {
    columnGap: "15px",
    display: "flex",
  },
});

export const App = () => {
  const styles = useStyles();
const {t, i18n} = useTranslation();

const changeLanguage = (language)=>{
  i18n.changeLanguage(language)
}

  return (
  
    <div>
      <header>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? css.home && css.active : css.home
            }
          >
            <Avatar icon={<PersonCallRegular />} aria-label="Phone Contact" /> <h1>{t('Home')}</h1> 
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive ? css.movies && css.active : css.movies
            }
          >
             Movies
          </NavLink>
         
        </nav>
        <DarkMode/>
        <div className={styles.wrapper}>
      <Button onClick={()=> changeLanguage('en')}>EN</Button>
      <Button onClick={()=> changeLanguage('ru')}>RU</Button>
      <button onClick={()=>changeLanguage('en')} >
            English
          </button>
          <button onClick={()=>changeLanguage('ru')} >
            Russian
          </button>
          <h3>{t('Thanks.1')}</h3>  <h3>{t('Why.1')}</h3> 
    </div>
      </header>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/system" element={<System />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/network" element={<Network />} />
          <Route path="/telephone" element={<Telephone />} />
          <Route path="/personalization" element={<Personalization />} />
          <Route path="/applications" element={<Applications/>} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/time" element={<TimeAndLanguage />} />
          <Route path="/games" element={<Games />} />
          <Route path="/search" element={<Search />} />
          <Route path="/update" element={<Update />} />
          <Route path="/confidential" element={<Confidential />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/update" element={<Update />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
};
