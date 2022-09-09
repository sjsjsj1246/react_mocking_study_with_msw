import { check } from "@modules/auth";
import { useAppDispatch } from "store";
import { useInternalRouter } from "./routing";

export const StartPage = () => {
  const { push } = useInternalRouter();
  const dispatch = useAppDispatch();

  const onCheck = async () => {
    await dispatch(check());
  };

  return (
    <>
      <h1>투두 리스트</h1>
      <button onClick={() => push("/login")}>로그인 하기</button>
      <button onClick={onCheck}>태스트</button>
    </>
  );
};
