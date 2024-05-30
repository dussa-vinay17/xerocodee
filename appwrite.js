// appwrite.js

import { createAppwrite } from 'appwrite';

const appwrite = createAppwrite();

appwrite
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)
  .setKey(process.env.NEXT_PUBLIC_APPWRITE_API_KEY);

export default appwrite;
