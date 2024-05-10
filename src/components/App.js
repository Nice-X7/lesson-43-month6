import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadAlbums } from "../redux/action";
import { Albums } from "./Albums";
import { Photos } from "./Photos";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadAlbums())
  }, [])

  return (
    <Routes>

      <Route 
      path="/:id?"
      element={
      <div className="App">
        <Albums />
        <Photos />
      </div>
      }
      />

    </Routes>

  );
}