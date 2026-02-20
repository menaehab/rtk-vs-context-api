import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CategoriesList from "./pages/categories/CategoriesList";
import CategoriesCreate from "./pages/categories/CategoriesCreate";
import CategoriesEdit from "./pages/categories/CategoriesEdit";
import TaskList from "./pages/tasks/TaskList";
import TaskCreate from "./pages/tasks/TaskCreate";
import TaskEdit from "./pages/tasks/TaskEdit";
import TaskShow from "./pages/tasks/TaskShow";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/categories">
            <Route index element={<CategoriesList />} />
            <Route path="create" element={<CategoriesCreate />} />
            <Route path="edit/:id" element={<CategoriesEdit />} />
          </Route>
          <Route path="/tasks">
            <Route index element={<TaskList />} />
            <Route path="create" element={<TaskCreate />} />
            <Route path="edit/:id" element={<TaskEdit />} />
            <Route path="show/:id" element={<TaskShow />} />
          </Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
