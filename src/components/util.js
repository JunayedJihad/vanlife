import { Navigate, redirect, redirectDocument } from "react-router-dom";
import Login from "../pages/Login";

export async function requireAuth() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    let response= redirect("/login/?message=you must log in first");
    response.body=''
    throw response
  }
  return null
}
