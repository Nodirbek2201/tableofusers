import { Route, Switch, Link } from "react-router-dom";
import Users from "./Pages/Users";
import Todos from "./Pages/Todos";
import Posts from "./Pages/Posts";
import OnePost from "./Pages/OnePost";

function App() {
    return (
        <div>
            <div className=" row justify-content-center border py-4 bg-light regular">
                <div className="row justify-content-around">
                    <div className="col-md-auto mx-5">
             <Link to={"/users"}>
                            <button className="btn btn-outline-primary px-5 w-100">
                                Users
              </button>
                        </Link>
                    </div>
                    <div className="col-md-auto mx-5">
                        <Link to={"/todos"}>
                            <button className="btn btn-outline-primary px-5 w-100">
                                Todos
              </button>
                        </Link>
                    </div>
                    <div className="col-md-auto mx-5">
                        <Link to={"/posts"}>
                            <button className="btn btn-outline-primary px-5 w-100">
                                Posts
              </button>
                        </Link>
                    </div>
                </div>
            </div>
            <br />

            <Switch>
                <Route path="/users" component={Users} />
                <Route path="/todos" component={Todos} />
                <Route path="/posts/:id" component={OnePost} />
                <Route path="/posts" component={Posts} />
            </Switch>
        </div>
    );
}
export default App;
