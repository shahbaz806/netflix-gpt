import { configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import moviesReducer from './movieSlice';

const app = configureStore({
    reducer: {
    user: userReducer,
    movie: moviesReducer,
    },
});
export default app;