import { Provider } from "react-redux";
import store from "./Utils/store";
import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ChannelDetails from "./ChannelDetails";

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer />,
      },
      {
        path: '/watch',
        element: <WatchPage />,
      },
      {
        path: '/channel/:channel_id',
        element: <ChannelDetails />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
