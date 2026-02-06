import { getUser } from "./auth";

const keyForUser = () => {
  const user = getUser();
  return user?.email ? `opsmind_chats_${user.email}` : "opsmind_chats_guest";
};

export const loadChats = () => {
  try {
    const raw = localStorage.getItem(keyForUser());
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const saveChats = (chats) => {
  localStorage.setItem(keyForUser(), JSON.stringify(chats));
};
