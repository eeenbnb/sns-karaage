// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const firebaseConfig = {
  apiKey: "AIzaSyAmlk2Fb-oTQhCqBmPVQhsJvFWEdrrDsbo",
  authDomain: "sns-karaage.firebaseapp.com",
  projectId: "sns-karaage",
  storageBucket: "sns-karaage.appspot.com",
  messagingSenderId: "904327166454",
  appId: "1:904327166454:web:41516b82a029ee954aafd7"
};

export const environment = {
  production: false,
  firebase: firebaseConfig
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
