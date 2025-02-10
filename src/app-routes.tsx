import { Route, Routes } from "react-router-dom";
import HomeModule from "./modules/home";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeModule />} />
      </Routes>
    </>
  );
}
