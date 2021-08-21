import { FC, useState, SyntheticEvent } from "react";
import { useHistory } from "react-router-dom";
import { register } from "../../services/registration-service";
import {
  Heading,
  Button,
  Input,
  UserForm,
  FormContainer,
  FeedbackField,
} from "../../styles/form.styles";

export interface RegistrationProps {}

const Registration: FC<RegistrationProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [feedbackStyle, setFeedbackStyle] = useState({});
  const [emailStyle, setEmailStyle] = useState({});
  const [passwordStyle, setPasswordStyle] = useState({});
  const [nameStyle, setNameStyle] = useState({});

  let history = useHistory();

  const handleOnSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    //post request
    let message: string = await register(email, password, name);

    //styling of input fields
    setFeedback(message);

    if (message === "Email and password are required.") {
      setFeedbackStyle({ color: "red" });
      setEmailStyle({ border: "1px solid red" });
      setPasswordStyle({ border: "1px solid red" });
    }

    if (message === "Name is required.") {
      setFeedbackStyle({ color: "red" });
      setNameStyle({ border: "1px solid red" });
    }

    if (
      message === "Email is required." ||
      message === "Username is already taken."
    ) {
      setFeedbackStyle({ color: "red" });
      setEmailStyle({ border: "1px solid red" });
    }

    if (
      message === "Password is required." ||
      message === "Your password should contain at least 8 characters."
    ) {
      setFeedbackStyle({ color: "red" });
      setPasswordStyle({
        border: "1px solid red",
        color: "red",
      });
    }

    if (message === "Name and password are required.") {
      setFeedbackStyle({ color: "red" });
      setPasswordStyle({ border: "1px solid red" });
      setNameStyle({ border: "1px solid red" });
    }

    if (message === "Name and email are required.") {
      setFeedbackStyle({ color: "red" });
      setEmailStyle({ border: "1px solid red" });
      setNameStyle({ border: "1px solid red" });
    }

    if (message === "All fields are required.") {
      setFeedbackStyle({ color: "red" });
      setEmailStyle({ border: "1px solid red" });
      setPasswordStyle({ border: "1px solid red" });
      setNameStyle({ border: "1px solid red" });
    }

    if (message === "Your registration was successful.") {
      setFeedbackStyle({ color: "#228B22" });
      setEmailStyle({ border: "1px solid #228B22", color: "#228B22" });
      setPasswordStyle({ border: "1px solid #228B22", color: "#228B22" });
      setNameStyle({ border: "1px solid #228B22", color: "#228B22" });
      setTimeout(() => {
        history.push("/users/login");
      }, 1200);
    }
  };

  return (
    <FormContainer>
      <UserForm onSubmit={handleOnSubmit}>
        <Heading>Sign up here</Heading>

        <Input
          style={nameStyle}
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setNameStyle({
              border: "1px solid #9d9d9dc8",
              color: "palevioletred",
            });
          }}
        />

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
            setPasswordStyle({
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

export default Registration;
