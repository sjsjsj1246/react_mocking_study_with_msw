import styled from "@emotion/styled";
import { login } from "@modules/auth";
import { useState } from "react";
import { useAppDispatch } from "store";
import { useInternalRouter } from "./routing";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleInputCahnge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const dispatch = useAppDispatch();
  const router = useInternalRouter();

  const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await dispatch(login(formData)).unwrap();
      router.push("/todo");
    } catch (err) {
      alert("로그인에 실패했습니다.");
    }
  };

  return (
    <Wrapper>
      <Side></Side>
      <Section>
        <LoginForm onSubmit={onLogin}>
          <label>아이디</label>
          <input
            name="username"
            type="text"
            value={formData.username}
            onChange={handleInputCahnge}
          />
          <label>비밀번호</label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputCahnge}
          />
          <button type="submit">로그인</button>
        </LoginForm>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Side = styled.aside`
  flex: 1;
  background-image: url("https://source.unsplash.com/600x800");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Section = styled.section`
  width: 500px;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.form`
  width: 240px;
  display: flex;
  flex-direction: column;

  input {
    height: 30px;
    border: 1px solid #c1c1c1;
    border-radius: 5px;
    font-size: 1rem;
  }

  label {
    margin-top: 10px;
    font-size: 0.8rem;
    color: #363636;
  }

  button {
    height: 40px;
    margin-top: 12px;
    border: none;
    border-radius: 5px;
    background-color: #4e69ef;
    color: white;
    font-size: 0.9rem;
    font-weight: bold;

    :hover {
      cursor: pointer;
      background-color: #465fd9;
    }
  }
`;

export default LoginPage;
