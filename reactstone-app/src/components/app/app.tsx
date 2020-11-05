import React from "react";
import { Provider } from "react-redux"
import { CardList, Sidebar} from './../';
import store from "./../../store"
import '../../styles/styles.scss';
  
const App: React.FC<AppProps> = ({
    classes,
    qualities,
    races,
    sets,
}: AppProps) => {
    return (
        <Provider store={store}>
            <div className="app">
                <Sidebar 
                    classes={classes}
                    qualities={qualities}
                    sets={sets}
                    races={races}
                />
                <CardList />
            </div>
        </Provider>
    );
};

export default App;