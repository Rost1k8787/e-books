import {applyMiddleware, compose, createStore} from "redux";
import {thunk} from "redux-thunk";
import reducer from './reducer'



const devTools =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();


const store=createStore(
    reducer,
    compose(applyMiddleware(thunk), devTools)

)

export default store
