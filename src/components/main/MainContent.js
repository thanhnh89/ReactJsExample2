import React , { Component } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import {
    Wrapper, Blank,
} from './mainContentStyle';
import Header from './Header';


class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
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
}

export default MainContent;
