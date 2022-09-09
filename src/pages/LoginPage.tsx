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
    const result = await dispatch(login(formData)).unwrap();
    if (result.username) {
      router.push("/todo");
    }
  };

  return (
    <Wrapper>
      <Side></Side>
      <LoginSection>
        <LoginForm onSubmit={onLogin}>
          <input
            name="username"
            type="text"
            placeholder="아이디"
            value={formData.username}
            onChange={handleInputCahnge}
          />
          <input
            name="password"
            type="password"
            placeholder="비밀번호"
            value={formData.password}
            onChange={handleInputCahnge}
          />
          <button type="submit">로그인</button>
        </LoginForm>
      </LoginSection>
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
`;

const LoginForm = styled.form`
  display: flex;
`;

const LoginSection = styled.section`
  flex: 1;
  ${LoginForm} {
  }
`;

export default LoginPage;
