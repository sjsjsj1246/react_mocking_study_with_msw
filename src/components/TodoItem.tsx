import styled from "@emotion/styled";
import { Todo } from "@modules/todo";
import { useState } from "react";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";

interface TodoItemProp {
  todo: Todo;
  onEdit: (id: number, content: string) => void;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProp> = ({
  todo,
  onEdit,
  onDelete,
  onToggle,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState("");

  const handleEdit = (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    onEdit(todo.id, input);
    setIsEdit(false);
  };

  const handleDelete = (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    onDelete(todo.id);
  };

  const handleToggle = () => {
    onToggle(todo.id);
  };

  return (
    <Wrapper isCompleted={todo.isCompleted} onClick={handleToggle}>
      {isEdit ? (
        <>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
          />
          <div className="actions">
            <AiFillCheckCircle onClick={handleEdit} />
            <GiCancel
              onClick={(e) => {
                e.stopPropagation();
                setIsEdit(false);
              }}
            />
          </div>
        </>
      ) : (
        <>
          <p>{todo.content}</p>
          <div className="actions">
            <BsFillPencilFill
              onClick={(e) => {
                e.stopPropagation();
                setInput(todo.content);
                setIsEdit(true);
              }}
            />
            <BsFillTrashFill onClick={handleDelete} />
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default TodoItem;

const Wrapper = styled.div<{ isCompleted: boolean }>`
  width: calc(100% - 2rem);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  :hover {
    cursor: pointer;
    background-color: #f5f5f5;
  }

  p {
    text-decoration: ${({ isCompleted }) =>
      isCompleted ? "line-through" : "none"};
  }

  .actions {
    width: 3rem;
    display: flex;
    justify-content: space-between;
  }
`;
