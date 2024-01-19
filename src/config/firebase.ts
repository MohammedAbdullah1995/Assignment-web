import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';



const firebaseConfig = {
    apiKey: process.env.REACT_APP_CLOUD_MESSAGING_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID
};


const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app)

//forground notification listener
export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            resolve(payload);
        });
    });


export const Sendrequest = () => {
    console.log("Requesting User Permission......");
    Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
            console.log("Notification User Permission Granted.");

            return getToken(messaging, { vapidKey: process.env.REACT_APP_VAPIDKEY })
                .then((currentToken) => {
                    if (currentToken) {
                        console.log('Client Token: ', currentToken);
                    } else {
                        console.log('Failed to generate the registration token.');
                    }
                })
                .catch((err) => {
                    console.log('An error occurred when requesting to receive the token.', err);
                });
        } else {
            console.log("User Permission Denied.");
        }
    });
}
Sendrequest();

//exporting senstive information to firebase-messaging-sw.js through route params
const UrlFirebaseConfig = new URLSearchParams(
    {
      apiKey: process.env.REACT_APP_FB_API_KEY,
      authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_FB_PROJECT_ID,
      storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_FB_APP_ID,
    }.toString()
  );
  
  const swUrl = `http://localhost:3000/firebase-messaging-sw.js?${UrlFirebaseConfig}`;




