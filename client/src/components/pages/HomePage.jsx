import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../redux/features/todos";

const HomePage = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.todos.loding);

  const todos = useSelector((state) => state.todos.items);
  const error = useSelector((state) => state.todos.error);
  console.log(todos);
  useEffect(() => {
    dispatch(fetchTodos);
  }, [dispatch]);

  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <input type="text" />
      <ul>
        {todos.map((todo) => {
          return <li>asdasd{todo.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default HomePage;
