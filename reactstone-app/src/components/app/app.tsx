import * as React from "react";
import { createStore, Store } from "redux"
import { CardList, Sidebar} from './../';
import { Provider } from "react-redux"
import reducer from "./../../store/reducer"
import '../../styles/styles.scss';

const store: Store<AppState, AppAction> & {
    dispatch: DispatchType
} = createStore(reducer)
  
const App = () => {
    return (
        <Provider store={store}>
            <div className="app">
            <Sidebar />
            <CardList />
            </div>
        </Provider>
    );
};

export default App;
