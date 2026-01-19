import React, { useState } from "react";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";

import { auth, googleProvider } from "../firebase/confing";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);

  const [authData, setAuthData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (key, e) => {
    setAuthData({ ...authData, [key]: e.target.value });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let result;
      if (isLogin) {
        result = await signInWithEmailAndPassword(
          auth,
          authData.email,
          authData.password
        );
      } else {
        result = await createUserWithEmailAndPassword(
          auth,
          authData.email,
          authData.password
        );
      }
      setUser(result.user.email);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user.email);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <Col md={5}>
          <Card className="p-4 shadow"style={{ backgroundColor:"rgb(164, 231, 231)"}}>
            <h4 className="text-center mb-3">
              {isLogin ? "Login" : "Sign Up"}
            </h4>

            {user && <p className="alert alert-success">{user}</p>}

            <Form onSubmit={handleForm}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={authData.email}
                  onChange={(e) => handleChange("email", e)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={authData.password}
                  onChange={(e) => handleChange("password", e)}
                  required
                />
              </Form.Group>

              <Button
                type="submit"
                className="w-100 mb-2 btn btn-primary btn-success"
                disabled={loading}
              >
                {isLogin ? "LOGIN" : "SIGN UP"}
              </Button>

              <Button
                type="button"
                className="w-100 mb-2 btn-secondary"
                onClick={handleGoogleLogin}
                disabled={loading}
              >
                Login with Google
              </Button>

              <Button
                type="button"
                className="w-100 btn-warning "
                onClick={() => setIsLogin(!isLogin)}
                disabled={loading}
              >
                {isLogin ? "New user? Sign Up" : "Already user? Login"}
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;