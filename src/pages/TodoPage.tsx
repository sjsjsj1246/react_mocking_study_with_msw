import { check } from "@modules/auth";
import { getTodoList } from "@modules/todo";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { useInternalRouter } from "./routing";

const TodoPage = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const { todoList } = useSelector((state: RootState) => state.todo);
  const router = useInternalRouter();
  const dispatch = useAppDispatch();

  const onGetTodoList = () => {
    dispatch(getTodoList());
  };

  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else {
      onGetTodoList();
    }
  }, []);

  return (
    <>
      <h1>투두 리스트</h1>
      {todoList.map((todo) => (
        <div key={todo.id}>{todo.content}</div>
      ))}
    </>
  );
};

export default TodoPage;
