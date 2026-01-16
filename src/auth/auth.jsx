import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { auth, googleProvider } from "../firebase/confing";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [user, setUser] = useState("");

  const [authData, setAuthData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (identifier, e) => {
    setAuthData((prev) => {
      return {
        ...prev,
        [identifier]: e.target.value,
      };
    });
  };

  const handleForm = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      if (isLogin) {
        const result = await signInWithEmailAndPassword(
          auth,
          authData.email,
          authData.password
        );
        setUser(result.user.email);
      } else {
        const result = await createUserWithEmailAndPassword(
          auth,
          authData.email,
          authData.password
        );
        setUser(result.user.email);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };


  const handleGoogleLogin = async () => {
    setLoading(true);

    try{
      const result = await signInWithPopup (auth, googleProvider);

      setUser(result.user.email)
    } catch(error) {
      console.log(error.message)
    } finally{
      setLoading(false)
    }
  }

  
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form
              className="d-flex justify-content-center align-items-center"
              style={{ innerHeight: "100vh" }}
              onSubmit={handleForm}
            >
              <Card className="shadow p-3 " style={{ width: "30%" }}>
                <h4 className="text-center">{isLogin ? "Login" : "Sign up"}</h4>
                {user && <p className="alert alert-danger">{user}</p>}

                <Form.Group className="mb-3">
                  <Form.Label>EMAIL</Form.Label>
                  <Form.Control
                    value={authData.email}
                    type="email"
                    placeholder="enter email"
                    onChange={(e) => handleChange("email", e)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>PASSWORD</Form.Label>
                  <Form.Control
                    value={authData.password}
                    placeholder="enter password"
                    onChange={(e) => handleChange("password", e)}
                  />
                </Form.Group>
                <Button
                  className="btn btn-primary  btn-success "
                  type="submit"
                  disabled={loading}
                >
                  {isLogin ? "login" : "sign up"}
                </Button>
                <Button
                  onClick={handleGoogleLogin}
                  disabled={loading}
                  className="mt-3 btn-warning"
                >
                  Login with Google
                </Button>
                <Button
                  className="btn btn-secondary"
                  onClick={() => setIsLogin(!isLogin)}
                  disabled={loading}
                >
                  {isLogin ? "New User ? Sign Up" : "Already User ? Login"}
                </Button>
              </Card>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Auth;