import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Spinner from "./components/Spinner";

const Login = lazy(() => import("./pages/Login"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Article = lazy(() => import("./pages/Article"));
const BlogCategory = lazy(() => import("./pages/Blog/BlogCategory"));
const BlogPage = lazy(() => import("./pages/Blog/BlogPage"));
const Blog = lazy(() => import("./pages/Blog"));
const Career = lazy(() => import("./pages/Career"));
const CareerOpening = lazy(() => import("./pages/Career/CareerOpening"));
const CareerOpeningCategory = lazy(
  () => import("./pages/Career/CareerOpeningCategory")
);
const Faqs = lazy(() => import("./pages/Faq"));

function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Navigate to="article" replace />} />
            <Route path="article" element={<Article />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog-page" element={<BlogPage />} />
            <Route path="blog-category" element={<BlogCategory />} />
            <Route path="career" element={<Career />} />
            <Route path="career-openings" element={<CareerOpening />} />
            <Route
              path="career-openings-category"
              element={<CareerOpeningCategory />}
            />
            <Route path="faqs" element={<Faqs />} />
          </Route>

          <Route path="*" element={<Navigate to="login" replace />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
