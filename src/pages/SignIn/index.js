import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

// import AuthLayout from '~/pages/_layouts/auth';
import { signInRequest } from '~/store/modules/auth/actions';
import { Container } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('UserName invalid!')
    .required('UserName is required!'),
  password: Yup.string()
    .min(6)
    .max(15)
    .required('Password is required!'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  // const Layout = AuthLayout;

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }
  return (
    <>
      <Container>
        <Form schema={schema} onSubmit={handleSubmit}>
          <nav>
            <p>USER AREA</p>
          </nav>

          <nav>
            <span>USERNAME</span>
          </nav>

          <nav>
            <Input name="email" type="email" placeholder="Type your e-mail" />
          </nav>

          <nav>
            <span>PASSWORD</span>
          </nav>

          <nav>
            <Input
              name="password"
              type="password"
              placeholder="Type your password"
            />
          </nav>

          <nav>
            <button type="submit">{loading ? 'Wait...' : 'LOGIN'}</button>
          </nav>
        </Form>
      </Container>
    </>
  );
}
