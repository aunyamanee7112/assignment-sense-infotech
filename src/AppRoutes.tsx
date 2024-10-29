import React from "react";
import { Route, Routes } from "react-router-dom";

const QuestionSeconde = React.lazy(() => import("./page/Todolist"));
const QuestionThird = React.lazy(() => import("./page/FromData"));
const Home = React.lazy(() => import("./page/Home"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/question2" element={<QuestionSeconde />}></Route>
      <Route path="/question3" element={<QuestionThird />}></Route>
    </Routes>
  );
};

export default AppRoutes;
