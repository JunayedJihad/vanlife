import { redirect } from "react-router-dom";

export async function requireAuth() {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    let response= redirect("/login?message=you must log in first");
    response.body=''
    throw response
  }
  return null
}
