import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/Navbar";
import { Loading } from "./components/Loading";
import { useState, useEffect } from "react";
import RoutesComponent from "./route/routes";
import "./css/App.css";

export const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <main>
        <NavBar />
        {loading ? <Loading /> : <RoutesComponent />}
      </main>
    </BrowserRouter>
  );
};
