import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import "./Components/style/style.css";
import { store } from "./Redux/store/store";
import { routes } from "./Routes/Routes";

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={routes}></RouterProvider>{" "}
      </Provider>
    </div>
  );
}

export default App;
