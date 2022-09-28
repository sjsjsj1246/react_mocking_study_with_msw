import styled from "@emotion/styled";
import {
  createTodo,
  deleteTodo,
  editTodo,
  getTodoList,
  toggleTodo,
} from "@modules/todo";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { useInternalRouter } from "./routing";
import TodoItem from "@components/TodoItem";
import { check } from "@modules/auth";

const TodoPage = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const { todoList } = useSelector((state: RootState) => state.todo);
  const [isAddMode, setIsAddMode] = useState(false);
  const [input, setInput] = useState("");
  const router = useInternalRouter();
  const dispatch = useAppDispatch();

  const onCreateTodo = () => {
    dispatch(createTodo({ content: input }));
    setInput("");
  };

  const onGetTodoList = () => {
    dispatch(getTodoList());
  };

  const onEdit = async (id: number, content: string) => {
    await dispatch(editTodo({ id, content })).unwrap();
  };

  const onDelete = (id: number) => {
    dispatch(deleteTodo({ id }));
  };

  const onToggle = (id: number) => {
    dispatch(toggleTodo({ id }));
  };

  useEffect(() => {
    dispatch(check());
    if (!user) {
      router.push("/login");
    } else {
      onGetTodoList();
    }
  }, []);

  return (
    <Wrapper>
      <TodoList>
        <h1>TodoList</h1>
        {todoList.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onEdit={onEdit}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
        <AddButton
          isAddMode={isAddMode}
          onClick={() => {
            setIsAddMode(!isAddMode);
          }}
        >
          +
        </AddButton>
        {isAddMode && (
          <AddTodoForm>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={onCreateTodo}>추가</button>
          </AddTodoForm>
        )}
      </TodoList>
    </Wrapper>
  );
};

export default TodoPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TodoList = styled.section`
  width: 20rem;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

const AddButton = styled.button<{ isAddMode: boolean }>`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
  background-color: #4e69ef;
  color: white;
  font-size: 2.2rem;
  transition: all 0.2s ease;
  transform: ${({ isAddMode }) =>
    isAddMode ? "rotate(45deg);" : "rotate(0);"};
  &:hover {
    cursor: pointer;
  }
`;

const AddTodoForm = styled.div`
  width: calc(100% - 2rem);
  height: 2rem;
  padding: 0 1rem;
  margin-top: 1rem;
  display: flex;
  input {
    flex: 1;
    border: 1px solid #d3d3d3;
    border-radius: 5px 0 0 5px;
  }

  button {
    width: 5rem;
    border: none;
    background-color: #4e69ef;
    color: white;
    border-radius: 0 5px 5px 0;

    :hover {
      cursor: pointer;
      background-color: #465fd9;
    }
  }
`;
