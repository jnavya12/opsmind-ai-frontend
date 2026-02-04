const USER_KEY = "opsmind_user";

export const getUser = () => {
  const data = localStorage.getItem(USER_KEY);
  return data ? JSON.parse(data) : null;
};

export const isLoggedIn = () => {
  return Boolean(getUser());
};

export const loginUser = (user) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const logoutUser = () => {
  localStorage.removeItem(USER_KEY);
};
