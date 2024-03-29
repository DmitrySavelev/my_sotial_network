import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import SideBar from "./components/SideBar/SideBar";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header name="Социальная сеть Dimonchik" />
      <Navbar state={props.state} />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/profile/*"
            element={
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route
            path="/dialogs/*"
            element={
              <Dialogs
                dialogsPage={props.state.dialogsPage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route path="/news/*" element={<News />} />
          <Route path="/music/*" element={<Music />} />
          <Route path="/settings/*" element={<Settings />} />
          <Route
            path="/friends/*"
            element={<SideBar store={props.state.sideBar} />}
          />
        </Routes>
      </div>
    </div>
  );
};
export default App;
