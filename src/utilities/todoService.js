
export const saveTodos = (todos) => {
  // console.log('pushed to local Storage', todos);
  localStorage.setItem("todos", JSON.stringify([...new Set([...todos])]));
}

export const getTodos = () => {
  // console.log('pulled from local Storage', JSON.parse(localStorage.getItem("todos")));
  return JSON.parse(localStorage.getItem("todos")) || [];
}
