import {configureStore} from '@reduxjs/toolkit';

import appReducer from './slice/app.slice';
import userReducer from './slice/user.slice';

const store = configureStore({
    reducer : {
        app : appReducer,
        user : userReducer
    }
})

export default store;