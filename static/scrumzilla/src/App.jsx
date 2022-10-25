// import React, { useEffect, useState } from "react";
// import { invoke } from "@forge/bridge";

// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     invoke("getText", { example: "my-invoke-variable" }).then((data) => {
//       console.log(data);
//       setData(data);
//     });
//   }, []);

//   return (
//     <div className="App">
//       <HomePage />
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { view } from "@forge/bridge";
import { Router, Route, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./components/homePage";
import IssueModal from "./components/issueModal";
import DailyStandup from "./components/dailyStandupPage";
import Settings from "./components/settings";

function App() {
  const [history, setHistory] = useState(null);

  useEffect(() => {
    view.createHistory().then((newHistory) => {
      setHistory(newHistory);
    });
  }, []);

  const [historyState, setHistoryState] = useState(null);

  useEffect(() => {
    if (!historyState && history) {
      setHistoryState({
        action: history.action,
        location: history.location,
      });
    }
  }, [history, historyState]);

  useEffect(() => {
    if (history) {
      history.listen((location, action) => {
        setHistoryState({
          action,
          location,
        });
      });
    }
  }, [history]);

  return (
    <div>
      {history && historyState ? (
        <Router
          navigator={history}
          navigationType={historyState.action}
          location={historyState.location}
        >
          <Routes>
            <Route path="/issue/:issueID" element={<IssueModal />}></Route>
            <Route path="/daily-standup" element={<DailyStandup />}></Route>
            <Route path="/settings/:settingType" element={<Settings />}></Route>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </Router>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default App;
