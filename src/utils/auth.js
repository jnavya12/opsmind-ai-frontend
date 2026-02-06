const AUTH_KEY = "opsmind_user";

export const loginUser = (user) => {
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
};

export const logoutUser = () => {
  localStorage.removeItem(AUTH_KEY);
};

export const getUser = () => {
  const data = localStorage.getItem(AUTH_KEY);
  return data ? JSON.parse(data) : null;
};

export const isLoggedIn = () => {
  return !!getUser();
};
