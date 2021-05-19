import StandingSection from "./standings/StandingSection";
import "antd/dist/antd.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import "./App.css";
import Layout, { Content } from "antd/lib/layout/layout";

const App = () => {
    return (
        <Layout>
            <Router>
                <Nav />
                <Content>
                    <main style={{ padding: "50px", minHeight: "75vh" }}>
                        <Switch>
                            <Route path="/standing">
                                <StandingSection />
                            </Route>
                            <Route path="/">
                                <Home></Home>
                            </Route>
                        </Switch>
                    </main>
                </Content>
            </Router>
        </Layout>
    );
};

export default App;
