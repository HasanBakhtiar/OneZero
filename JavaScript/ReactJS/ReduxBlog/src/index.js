import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configuraStore';
import { getBlogsFromDatabase  } from './actions/blogs'
import {firebase} from'./firebase/firebaseConfig'

const store = configureStore();

const result = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(getBlogsFromDatabase()).then(() => {
    ReactDOM.render(result, document.getElementById('root'));
})

firebase.auth().onAuthStateChanged(function(user){
            if(user){
                console.log("user enter");
                console.log(user);
            }else{
                console.log("user log out");
            }
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
