import { Route, Routes } from "react-router-dom";
import Home from "pages/Home";

function App() {
  return (
   <div>
     <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route index element={<Home />} />
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
   </div>
  );
}

export default App;
