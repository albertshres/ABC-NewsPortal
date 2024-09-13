export function logout() {
  return localStorage.removeItem("access");
}

export function getCurrentDate() {
  const now = new Date();
  return now;
}
