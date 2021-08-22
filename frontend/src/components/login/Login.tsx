import { FC, useState, SyntheticEvent } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../../services/login-service";
import {
  Heading,
  Button,
  Input,
  UserForm,
  FormContainer,
  FeedbackField,
} from "../../styles/form.styles";

interface LoginProps {
  saveUserInfo: Function;
}

const Login: FC<LoginProps> = ({ saveUserInfo }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState("");
  const [feedbackStyle, setFeedbackStyle] = useState({});
  const [emailStyle, setEmailStyle] = useState({});
  const [passwordStyle, setPasswordStyle] = useState({});

  let history = useHistory();
  const handleOnSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    await login(email, password).then((response) => {
      if (response.error) {
        setFeedback(response.error);
        setFeedbackStyle({ color: "red" });

        if (
          response.error === "Email and password are required." ||
          response.error === "Email or password is incorrect."
        ) {
          setEmailStyle({ border: "1px solid red" });
          setPasswordStyle({ border: "1px solid red" });
        }

        if (response.error === "Password is required.") {
          setPasswordStyle({ border: "1px solid red" });
        }

        if (response.error === "Email is required.") {
          setEmailStyle({ border: "1px solid red" });
        }
      } else if (response.token && response.name && response.id) {
        saveUserInfo({
          token: response.token,
          name: response.name,
          id: response.id,
        });
        history.push("/");
      } else {
        setFeedback("Something went wrong.");
      }
    });
  };

  return (
    <FormContainer>
      <UserForm onSubmit={handleOnSubmit}>
        <Heading>Sign in here</Heading>
        <Input
          style={emailStyle}
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailStyle({
              border: "1px solid #9d9d9dc8",
              color: "palevioletred",
            });
          }}
        />
        <Input
          style={passwordStyle}
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setEmailStyle({
              border: "1px solid #9d9d9dc8",
              color: "palevioletred",
            });
          }}
        />
        <Button>Submit</Button>
        <FeedbackField style={feedbackStyle}>{feedback}</FeedbackField>
      </UserForm>
    </FormContainer>
  );
};

export default Login;
