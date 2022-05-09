import React from 'react';
import { GoogleLogin } from 'react-google-login';

import { Button, useToast } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
// import refreshTokenSetup from '../../function/refreshToken';
import { useDispatch } from 'react-redux';
import { userGoogleSignIn } from '../../actions/user/auth';

const clientId = process.env.REACT_APP_OAUTH_ID;

function GoogleLoginButton() {
  const dispatch = useDispatch();
  const errorToast = useToast();

  const handleLogin = async (googleData) => {
    dispatch(userGoogleSignIn(googleData.tokenId, googleData.profileObj.name));
  };

  const onFailure = (res) => {
    errorToast({
      title: 'Google Login Fail',
      description: res,
      status: 'error',
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Continue with Google"
      onSuccess={handleLogin}
      onFailure={onFailure}
      cookiePolicy="single_host_origin"
      style={{ marginTop: '100px' }}
      render={(renderProps) => (
        <Button
          size="lg"
          variant="pendown"
          leftIcon={<FcGoogle />}
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >

          Continue with Google
        </Button>
      )}
    />
  );
}

export default GoogleLoginButton;
