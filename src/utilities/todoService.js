
export const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify([...new Set([...todos])]));
}

export const getTodos = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
}
