import { connect } from "react-redux";
import "./style.css";

const App = ({ message, one, two }) => (
  <main>
    <header>
      <h1>Example </h1>
    </header>

    <section>
      <aside>
        <dl>
          <dt>
            <h2> Select action</h2>
          </dt>
          <dd>
            <button onClick={one}>Action one</button>
          </dd>
          <dd>
            <button onClick={two}>Action two</button>
          </dd>
        </dl>
      </aside>

      <div className="context">
        <p>State context (message) :</p>
        <p className="highlight">{message}</p>
      </div>
    </section>

    <footer>
      <p>some footer information</p>
    </footer>
  </main>
);

// obtain state from redux store & forward as component props --> like useSelector
const reduxState = (state) => state;

// obtain actions (triggers) from redux reducer --> like useDispatch
const reduxActions = (dispatch) => ({
  one: () => dispatch({ type: "ACTION_ONE", payload: "message one" }),
  two: () => dispatch({ type: "ACTION_TWO", payload: "message two" }),
});

// export component with redux connect wrapper/decorator
// (we use currying to wrap App function with redux related data)
export default connect(reduxState, reduxActions)(App);
