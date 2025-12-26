import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import BrowseNewsPage from "./pages/BrowseNewsPage.jsx";
import NewsPage from "./pages/NewsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ChatbotPage from "./pages/ChatbotPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/news" element={<BrowseNewsPage />} />
      <Route path="/news/:id" element={<NewsPage />} />
      <Route path="/chatbot" element={<ChatbotPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Route>,
  ),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
