import styled from "styled-components";

const Heading = styled.h2`
  color: #111;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 45px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 1;
  text-align: center;
  margin-bottom: 0.5em;
`;

const Button = styled.button`
  color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #f4a5e2;
  padding: 10px;
  border-radius: 5px;
  display: inline-block;
  border: none;
  transition: all 0.4s ease 0s;
  &:hover {
    background: #9b71a5;
    letter-spacing: 1px;
  }
  &:active {
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all ease 0s;
  }
`;

const FeedbackField = styled.div`
  padding: 1em;
  color: red;
  border: none;
  width: 100%;
  margin-bottom: 0.5em;
  outline: none;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 12px;
  text-align: center;
`;

const Input = styled.input`
  padding: 1em;
  color: palevioletred;
  border: 1px solid #9d9d9dc8;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5em;
  outline: none;
  &:hover {
    background: #e8dede;
  }
`;

const UserForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 20vw;
  height: 80vh;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export { Heading, Button, Input, UserForm, FormContainer, FeedbackField };
