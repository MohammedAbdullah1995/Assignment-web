import { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Sendrequest, onMessageListener } from '../config/firebase';


const Notification = () => {
    const [notification, setNotification] = useState({ title: '', body: '' });
    const notify = () => toast(<ToastDisplay />);

    useEffect(() => {
        if (notification?.title) {
            notify()
            Sendrequest();
            onMessageListener()
                .then((payload: any) => {
                    console.log("I got the notification", payload)
                    setNotification({ title: payload?.notification?.title, body: payload?.notification?.body });
                })
                .catch((err) => console.log('failed: ', err));
        }
    }, [notification])

    function ToastDisplay() {
        return (
            <div>
                <p><b>{notification?.title}</b></p>
                <p>{notification?.body}</p>
            </div>
        );
    };

    return (
        <Toaster />
    )
}

export default Notification