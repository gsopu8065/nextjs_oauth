import * as firebase from 'firebase/app';
import * as React from 'react';
import 'firebase/auth';
import withFirebaseAuth from 'react-with-firebase-auth';
import Router from "next/router";

const firebaseConfig = {
    apiKey: "-----",
    authDomain: "---",
    databaseURL: "---",
    projectId: "----",
    storageBucket: "---",
    messagingSenderId: "----",
    appId: "---"
};
const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

const createComponentWithAuth = withFirebaseAuth({
    providers,
    firebaseAppAuth,
});

const withAuth = (childComp) => {

    class App extends React.Component {
        render() {
            return <React.Fragment>
                {
                    this.props.user
                        ? childComp({signOut: this.props.signOut})
                        : <div style={{    fontSize: '-webkit-xxx-large',
                            backgroundColor: 'greenyellow',
                            width: '75%',
                            margin: '0 auto',
                            marginTop: '20%'}}>
                            Please login to view this page
                            <input style={{    fontSize: '-webkit-xxx-large',
                                display: 'block',
                                margin: '0 auto'}} type="button" onClick={this.props.signInWithGoogle} value="Sign in with google"/>
                          </div>
                }
            </React.Fragment>
        }
    }
    return createComponentWithAuth(App);
};

export default withAuth;


