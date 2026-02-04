// src/utils/chatStore.js
import { getUser } from "./auth";

const getStorageKey = () => {
  const user = getUser();
  return user?.email ? "opsmind_chats_${user.email}" : "opsmind_chats_guest";
};

export const getChats = () => {
  const key = getStorageKey();
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

export const saveChats = (chats) => {
  const key = getStorageKey();
  localStorage.setItem(key, JSON.stringify(chats));
};
