export const getData = (key, fallback) => {
  const saved = localStorage.getItem(key);
  return saved ? JSON.parse(saved) : fallback;
};

export const setData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
