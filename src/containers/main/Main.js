import React , { Component } from 'react';
import styled from 'styled-components';
import MainContent from '../../components/main/MainContent';
import LeftMenu from '../../components/main/LeftMenu';

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    color: #f4f6f6;
    font-size: 23px;
    font-weight: bold;
    display: flex;
    background: gray;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: 0,
    }
  }

  render() {
    return (
      <Wrapper>
        <LeftMenu />
        <MainContent />
      </Wrapper>
    )
  }
}

export default Main;
