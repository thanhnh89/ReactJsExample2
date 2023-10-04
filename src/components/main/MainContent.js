import React from 'react';
import Pagination from '@mui/material/Pagination';
import {
    Wrapper, Blank,
} from './mainContentStyle';
import Header from './Header';


const MainContent = (props) => {
  return (
    <Wrapper >
        <Header />
        <Blank />
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          style={{
            marginBottom: '1em',
          }}
        />
    </Wrapper>
  )

}

export default MainContent;
