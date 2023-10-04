import React from 'react';
import {
    Wrapper, Avata, TextField, ButtonLogout, Blank,
} from './leftMenuStyle';
import Images from '../../asset/images';


const LeftMenu = () => {
  return (
    <Wrapper id="LeftMenu">
      <Avata src={Images.avataDefault} alt="avata" />
      <TextField>userName</TextField>
      <TextField>Point: 2430</TextField>
      <TextField>Test complete: 29</TextField>
      <TextField>Test not complete: 42</TextField>
      <Blank />
      <ButtonLogout>Log out</ButtonLogout>
    </Wrapper>
  )
}

export default LeftMenu;
