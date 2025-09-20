import { Provider } from "react-redux";
import Body from "./components/Body";
import app from "./utils/appstore";

function App() {
  return (
    <div>
      <Provider store={app}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
