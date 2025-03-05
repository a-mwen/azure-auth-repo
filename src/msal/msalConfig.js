// msalConfig.js

import { PublicClientApplication } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId: process.env.REACT_APP_CLIENT_ID,
    authority: `https://${process.env.REACT_APP_TENANT_NAME}.b2clogin.com/${process.env.REACT_APP_TENANT_NAME}.onmicrosoft.com/B2C_1_SignUpSignIn/v2.0`,
    redirectUri: "https://azure-auth-repo.vercel.app/",
    knownAuthorities: [`https://${process.env.REACT_APP_TENANT_NAME}.b2clogin.com`],
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: true,
  },
};

export const msalInstance = new PublicClientApplication(msalConfig);
