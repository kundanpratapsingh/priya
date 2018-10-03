import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import root from '../reducers/rootReducer';


export default function configureStore(params) {
    return createStore(
        root,applyMiddleware(thunk)
    );
}