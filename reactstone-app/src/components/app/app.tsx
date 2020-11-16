import React from "react";
import { Provider } from "react-redux"
import { CardList, Sidebar} from '@components/index';
import store from "@store/index"
import '@styles/styles.scss';
import CardDetails from "@components/card-details/card-details";
  
const App: React.FC<AppProps> = ({
    classes,
    qualities,
    races,
    sets,
}: AppProps) => {
    return (
        <Provider store={store}>
            <div className="app">
                <CardDetails />
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