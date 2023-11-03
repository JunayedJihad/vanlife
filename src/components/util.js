import { redirect } from "react-router-dom";

export async function requireAuth() {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    let response= redirect("/login");
    response.body=''
    throw response
  }
  return null
}
