
import { NavLink } from 'react-router-dom';

import css from '../Home/Home.module.css';
import { Avatar } from "@fluentui/react-components";
// import React from "react"
// import styled from '@emotion/styled';
import {
  makeStyles,
  shorthands,
  tokens,
  useId,
  Input,
  Label, 
  
} from "@fluentui/react-components";
import {
  BriefcaseRegular,
  CalendarLtrRegular,
  ConferenceRoomRegular,
  GuestRegular,
  PeopleRegular,
  PeopleTeamRegular,
  PersonCallRegular,
} from "@fluentui/react-icons"
// import * as React from "react";
import { useState } from 'react';
import React from 'react'
import { useTranslation } from 'react-i18next';
import Languageoption from 'components/LanguageDrop';
import i18next from "i18next"

    // <div>
    //   <h2 className={css.title}>Trending today 🔥 </h2>
    //   {isLoading && <Loader />}
    //   <ul className={css.list}>
    //     {movies &&
    //       movies.map(movie => {
    //         return (
    //           <li key={movie.id} className={css.list_ref}>
    //             <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
    //               <h3 className={css.movie_title}>{movie.title}</h3>
    //             </NavLink>
    //           </li>
    //         );
    //       })}
    //   </ul>
    // </div>
   



const useStyles = makeStyles({
  base: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "400px",
  },
  field: {
    display: "grid",
    gridRowGap: tokens.spacingVerticalXXS,
    marginTop: tokens.spacingVerticalMNudge,
    ...shorthands.padding(tokens.spacingHorizontalMNudge),
  },
  filledLighter: {
    backgroundColor: tokens.colorNeutralBackgroundInverted,
    "> label": {
      color: tokens.colorNeutralForegroundInverted2,
    },
  },
  filledDarker: {
    backgroundColor: tokens.colorNeutralBackgroundInverted,
    "> label": {
      color: tokens.colorNeutralForegroundInverted2,
    },
  },
 
});

export const Home = () => {
  const outlineId = useId("input-outline");
  // const underlineId = useId("input-underline");
  // const filledLighterId = useId("input-filledLighter");
  // const filledDarkerId = useId("input-filledDarker");
  const styles = useStyles();
const [filter, setFilter] = useState('');
console.log(filter)
const {t} = useTranslation();
    const handleClick=(e)=>{
        i18next.changeLanguage(e.target.value)
    }
return (
    <div>
       <Languageoption onChange={(e)=> handleClick(e)}/>
       <h1>{t('Home')} {t('System')} || Seema {t('holiday')} Developer</h1>
    <div className={styles.base}>
      <div className={styles.field}>
        <Label htmlFor={outlineId} >Outline appearance (default)</Label>
        <Input appearance="outline" id={outlineId} onChange={e =>{console.log(e.target.value)
        return setFilter(e.target.value)} }/>
      </div>

      {/* <div className={styles.field}>
        <Label htmlFor={underlineId}>Underline appearance</Label>
        <Input appearance="underline" id={underlineId} />
      </div> */}

      {/* <div className={mergeClasses(styles.field, styles.filledLighter)}>
        <Label htmlFor={filledLighterId}>Filled lighter appearance</Label>
        <Input appearance="filled-lighter" id={filledLighterId} />
      </div> */}

      {/* <div className={mergeClasses(styles.field, styles.filledDarker)}>
        <Label htmlFor={filledDarkerId}>Filled darker appearance</Label>
        <Input appearance="filled-darker" id={filledDarkerId} />
      </div> */}
    </div>
    <ul className={styles.ulList}>
 <li key={1} className={styles.itemList}>
 <Avatar icon={<ConferenceRoomRegular />} shape="square" aria-label="Room" />
 <NavLink to='/system/'>
   <h3 className={css.movie_title}>{t('System')}</h3>
   <p>{t('Screen, sound, notifications')}</p>
 </NavLink>
</li>
<li key={2} className={css.list_ref}>
<Avatar icon={<PersonCallRegular />} aria-label="Phone Contact" />
 <NavLink to='/devices'>
   <h3 className={css.movie_title}>Devices</h3>
   <p>bluetooth, printers, mouse</p>
 </NavLink>
</li>
<li key={3} className={css.list_ref}>
<Avatar icon={<GuestRegular />} aria-label="Guest" />
 <NavLink to='/telephone'>
   <h3 className={css.movie_title}>Telephone</h3>
   <p>Link the device to Android or Iphone</p>
 </NavLink>
</li>
<li key={4} className={css.list_ref}>
<Avatar icon={<PeopleTeamRegular />} shape="square" aria-label="Team" />
 <NavLink to={`/network`}>
   <h3 className={css.movie_title}>Network and Internet</h3>
   <p>Link the device to Android or Iphone</p>
 </NavLink>
</li>
<li key={5} className={css.list_ref}>
<Avatar icon={<PeopleRegular />} aria-label="Group" />
     <NavLink to='/personalization'>
       <h3 className={css.movie_title}>Personalization</h3>
       <p>Background, lock screen</p>
     </NavLink>
   </li>
   <li key={6} className={css.list_ref}>
   <Avatar icon={<CalendarLtrRegular />} aria-label="Meeting" />
     <NavLink to='/applications'>
       <h3 className={css.movie_title}>Applications</h3>
       <p>Delete, default values</p>
     </NavLink>
   </li>
   <li key={7} className={css.list_ref}>
   <Avatar icon={<PeopleTeamRegular />} shape="square" aria-label="Team" />
     <NavLink to='/accounts'>
       <h3 className={css.movie_title}>Accounts</h3>
       <p>Accounts, desctop</p>
     </NavLink>
   </li>
   <li key={8} className={css.list_ref}>
   <Avatar icon={<CalendarLtrRegular />} aria-label="Meeting" />
     <NavLink to='/time'>
       <h3 className={css.movie_title}>Time and language</h3>
       <p>Language, time</p>
     </NavLink>
   </li>
   <li key={9} className={css.list_ref}>
   <Avatar icon={<BriefcaseRegular />} shape="square" aria-label="Tenant" />
     <NavLink to='/games'>
       <h3 className={css.movie_title}>Games</h3>
       <p>Xbox and other</p>
     </NavLink>
   </li>
   <li key={10} className={css.list_ref}>
   <Avatar icon={<GuestRegular />} aria-label="Guest" />
     <NavLink to='/search'>
       <h3 className={css.movie_title}>Search</h3>
       <p>Search my files</p>
     </NavLink>
   </li>
   <li key={11} className={css.list_ref}>
   <Avatar icon={<ConferenceRoomRegular />} shape="square" aria-label="Room" />
     <NavLink to='/update'>
       <h3 className={css.movie_title}>Update and security</h3>
       <p>Update windows</p>
     </NavLink>
   </li>
   <li key={12} className={css.list_ref}>
   <Avatar icon={<PersonCallRegular />} aria-label="Phone Contact" />
     <NavLink to='/confidential'>
       <h3 className={css.movie_title}>Confidential</h3>
       <p>Camera, microphone</p>
     </NavLink>
   </li>
  </ul>
  </div>
  );
};

export default Home;

// const Title = styled.h1`
//   display: flex;
//   width: 280px;
//   color: #212121;
//   font-weight: 700;
//   font-size: 18px;
//   line-height: 140%;
//   margin-bottom: 34px;
//   @media (min-width: 768px) {
//     width: 504px;
//     font-weight: 700;
//     font-size: 34px;
//     line-height: 140%;
//     margin-bottom: 68px;
//   }
//   @media (min-width: 1280px) {
//   }
// `;