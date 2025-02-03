// msalAuthProvider.js

import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './msalConfig'; // Import the msalConfig from msalConfig.js

export const msalAuthProvider = new PublicClientApplication(msalConfig); // Use the msalConfig here
