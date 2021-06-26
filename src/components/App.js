import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Layout from './Layout';
import BadgeEdit from '../pages/BadgeEdit';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer';
import NotFound from '../pages/NotFound';
import Start from '../pages/Start';
import RandM from '../pages/RandM';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/randm" component={RandM} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route exact path="/badges/:badgeId" component={BadgeDetailsContainer} />
                    <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
                    <Route exact path="/start" component={Start} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );    
}

export default App;