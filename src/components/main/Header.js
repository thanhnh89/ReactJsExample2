import React , { useState } from 'react';
import {
    Wrapper, InputSearch, ButtonGoto, DropBox, Blank,
} from './headerStyle';



const Header = () => {
  const [keyWord, setKeyWord] = useState("")

  return (
      <Wrapper >
          <InputSearch
              value={keyWord}
              type="text"
              onChange={(event) => setKeyWord(event.target.value)}
          />
          <ButtonGoto>GO TO</ButtonGoto>
          <Blank />
          <DropBox name="filter" id="filter">
              <option value="all">All</option>
              <option value="time">Time</option>
              <option value="point">Point</option>
          </DropBox>
      </Wrapper>
  )

}

export default Header;
