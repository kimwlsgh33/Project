import { Auth, DataStore, Storage } from "aws-amplify";
import { Post, Tag } from "../models";

// Sign Up
async function signUp(username: string, password: string) {
  try {
    const { user } = await Auth.signUp({ username, password });
    console.log(user);
  } catch (error) {
    console.log("error signing up:", error);
  }
}

// Sign In
async function signIn(username: string, password: string) {
  try {
    const user = await Auth.signIn(username, password);
  } catch (error) {
    console.log("error signing in", error);
  }
}

// Sign Out
async function signOut() {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log("error signing out: ", error);
  }
}

// Confirm Sign Up
try {
  await Auth.confirmSignUp(username, code);
}

// Resend Sign Up Code
try {
  await Auth.resendSignUp(username);
}

// Forgot Password
try {
  await Auth.forgotPassword(username);
}

// Confirm Forgot Password
try {
  await Auth.forgotPasswordSubmit(username, code, password);
}

// Change Password
try {
  await Auth.changePassword(user, oldPassword, newPassword);
}

// Get User
try {
  const user = await Auth.currentAuthenticatedUser();
} catch (error) {
  console.log(error);
}
