import React , { useState } from 'react';
import {
    Wrapper, PopupLoginWrapper, Text, Row,
    Input, Button, Blank,
} from "./loginStyle";
import api from "../../services/api";
import StorageUtils from '../../helpers/StorageUtils';

const Login = () => {
  const [state, setState] = useState({
    userName: '',
    password: 0,
  })

  const login = () => {
    const params = {
        userName: state.userName,
        password: state.password,
    };

    api.create().login(params)
    .then(response => {
        const { data } = response;
        const { token } = data;
        console.log('token ', token);
        StorageUtils.setItem('token', token);
        window.location.replace('/');
    })
    .catch((error) => {
      const { message } = error;
      console.log('error: ', message);
    });
  }

  const getUserInfo = () => {
    api.create().getUserInfo(16)
    .then(response => {
        console.log('response = ', response);
    })
    .catch((error) => {
      const { message } = error;
      console.log('error: ', message);
    });
  }

  const handleUserName = (event) => {
    setState({ userName: event.target.value})
  }

  const handlePassword = (event) => {
    setState({ password: event.target.value})
  }

  return (
    <Wrapper>
      <PopupLoginWrapper>
        <Text color="#d3c8c8" fontSize={25}>LOGIN</Text>
        <Row>
          <Text color="#d3c8c8" fontSize={20}>User name</Text>
          <Input
            value={state.userName}
            onChange={handleUserName}
          />
        </Row>
        <Blank height={0.2} />
        <Row>
          <Text color="#d3c8c8" fontSize={20}>Password</Text>
          <Input
            value={state.password}
            onChange={handlePassword}
            type="password"
          />
        </Row>
        <Button onClick={login}>Login</Button>
        <Button onClick={getUserInfo}>getUserInfo</Button>
      </PopupLoginWrapper>
    </Wrapper>
  )
}

export default Login;
