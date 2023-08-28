import "./App.css";
import { useStateContext } from "./Contexts/Contextprovider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Ecommerce from "./pages/Ecommerce";
import Kanban from "./pages/Kanban";
import Calender from "./pages/Calender";
import Emploey from "./pages/Emploey";
import Orders from "./pages/Orders";
import Editor from "./pages/Editor";
import Customerse from "./pages/Customerse";
import ColorPicker from "./pages/ColorPicker";
import PieChart from "./components/Charts/PieChart";
import LineChart from "./components/Charts/LineChart";

export default function App() {
  const {
    activeMenu,
    isClicked,
    currentColor,
    cuurentMode,
    themeSetting,
    setthemeSetting,
  } = useStateContext();

  return (
    <div className={cuurentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed left-4 bottom-4 z-[1000] ">
            <button
              type="button"
              className="text-3xl p-3  hover:drop-shadow-xl bg-light-gray text-white transition-all"
              style={{ background: currentColor, borderRadius: "50%" }}
              onClick={() => setthemeSetting(true)}>
              <FiSettings />
            </button>
          </div>

          {activeMenu ? (
            <div
              className={`w-72 fixed shrink-0 top-[55px] lg:top-0  dark:bg-secondary-dark-bg bg-white`}
              style={{ zIndex: isClicked.cart ? "10" : "10009" }}>
              <Sidebar />
            </div>
          ) : (
            <div className="w-0">
              <Sidebar />
            </div>
          )}

          <div
            className={`dark:bg-main-dark-bg bg-gray-100 min-h-screen max-w-full grow ${
              activeMenu && "lg:pr-72"
            }
          `}>
            <div
              style={{ zIndex: "100000" }}
              className=" sticky top-0 left-0 dark:bg-main-dark-bg p-2 bg-main-bg">
              <Navbar />
            </div>

            <Routes>
              <Route path="/" element={<Ecommerce />} />
              <Route path="/ecommerce" element={<Ecommerce />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Emploey />} />
              <Route path="/customers" element={<Customerse />} />
              <Route path="/calendar" element={<Calender />} />
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="color-picker" element={<ColorPicker />} />

              <Route path="/pie" element={<PieChart />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
