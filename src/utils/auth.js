const KEY = "opsmind_user";

export const isLoggedIn = () => {
  return !!localStorage.getItem(KEY);
};

export const loginUser = (user) => {
  localStorage.setItem(KEY, JSON.stringify(user));
};

export const logoutUser = () => {
  localStorage.removeItem(KEY);
};
