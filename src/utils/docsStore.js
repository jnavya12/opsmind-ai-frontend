export const saveDocument = (name) => {
  const docs = JSON.parse(localStorage.getItem("documents")) || [];
  docs.push(name);
  localStorage.setItem("documents", JSON.stringify(docs));
};

export const getDocuments = () => {
  return JSON.parse(localStorage.getItem("documents")) || [];
};
