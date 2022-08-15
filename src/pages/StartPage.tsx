import { css } from "@emotion/react";
import { useDispatch } from "react-redux";
import { check } from "../modules/auth";
import { getTodoList } from "../modules/todo";
import { useInternalRouter } from "./routing";

export const StartPage = () => {
  const { push } = useInternalRouter();
  const dispatch = useDispatch<any>();

  return (
    <>
      <h1>투두 리스트</h1>
      <button onClick={() => push("/login")}>로그인 하기</button>
      <button onClick={() => dispatch(check())}>태스트</button>
    </>
  );
};
