import React, { Fragment } from "react";
import Home from "./components/homePage/HomePage";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Tournaments from "./components/tournaments/tournament";
import SelectedTournament from "./components/tournaments/selectedTournament";
import PrivacyPolicy from "./components/upperNavbar/privacyPolicy";
import Terms from "./components/upperNavbar/terms";
import Contact from "./components/upperNavbar/contactus";
import Faqs from "./components/upperNavbar/faqs";
import Team from "./components/team/team";
import About from './components/aboutus/aboutus';
import Image from "./components/gallery//imageGallery";
import Subscription from "./components/subscription/subsciption"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
    return (
        <Fragment>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                <Route exact path="/tournaments" component={Tournaments} />
                <Route exact path="/selectedtournament" component={SelectedTournament} />
                <Route exact path="/privacypolicy" component={PrivacyPolicy} />
                <Route exact path="/terms" component={Terms} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/faqs" component={Faqs} />
                <Route exact path="/careers" component={Team} />
                <Route exact path="/aboutus" component={About} />
                <Route exact path="/gallery" component={Image} />
                <Route exact path="/subscription" component={Subscription} />
                </Switch>
            </Router>
            <Footer />
        </Fragment>
    );
}

export default App;
