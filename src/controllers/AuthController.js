// src/controllers/AuthController.js

import appwrite from '../appwrite';

export async function googleOAuthLogin() {
  const url = `${appwrite.endpoint}/v1/account/oauth2/google`;
  window.location.href = url;
}

export async function githubOAuthLogin() {
  const url = `${appwrite.endpoint}/v1/account/oauth2/github`;
  window.location.href = url;
}
