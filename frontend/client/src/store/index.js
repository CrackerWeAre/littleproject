import { createStore , applyMiddleware, compose} from 'redux'
import reducers from '../reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reduxThunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancedReducer = persistReducer(persistConfig, reducers)

export default function configureStore(){
    const store = createStore(enhancedReducer,composeEnhancers(applyMiddleware(reduxThunk)));
    const persistor = persistStore(store);
    return { store, persistor}
}