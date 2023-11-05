import { redirect } from "react-router-dom";

export async function requireAuth(req) {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const pathName=new URL(req.url).pathname

  if (!isLoggedIn) {
    let response= redirect(`/login?message=you must log in first&redirectTo=${pathName}`);
    response.body=''
    throw response
  }
  return null
}
