import { getUser } from "./auth";

const STORAGE_KEY = "opsmind_chats_by_user";

export const getChats = () => {
  const user = getUser();
  if (!user?.email) return [];

  const data = localStorage.getItem(STORAGE_KEY);
  const parsed = data ? JSON.parse(data) : {};

  return parsed[user.email] || [];
};

export const saveChats = (chats) => {
  const user = getUser();
  if (!user?.email) return;

  const data = localStorage.getItem(STORAGE_KEY);
  const parsed = data ? JSON.parse(data) : {};

  parsed[user.email] = chats;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
};
