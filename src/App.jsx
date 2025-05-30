import { BrowserRouter, Routes, Route } from "react-router-dom"
import TaskList from "./pages/TaskList"
import AddTask from "./pages/AddTask"
import DefaultLayout from "./layouts/DefaultLayout"


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={TaskList} />
            <Route path="/AddTask" Component={AddTask} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
