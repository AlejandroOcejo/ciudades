import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import SearchPage from "../pages/searchPage/searchPage";
import LogPage from "../pages/logPage/logPage";

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SearchPage />} />
                <Route path="/log" element={<LogPage />} />
            </Routes>
        </Router>
    );
}