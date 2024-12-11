import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import {Provider} from 'react-redux'
import Protected from './components/AuthLayout.jsx'
import store from './store/store.js'
import {Home, Login, Signup, AllPost, AddPost, EditPost,Post} from './pages/index.js'



const router = createBrowserRouter([
{
  path : "/",
  element: <App/>,
  children : [{
    path: "/",
    element : <Home/>
  },
  {
    path : "/login",
    element : (
      <Protected  authentication = {false}>
        <Login/>
      </Protected>
    )
  },
  {
    path : "/signup",
    element : (
      <Protected  authentication = {false}>
        <Signup/>
      </Protected>
    )
  },
  {
    path : "/all-posts",
    element : (
      <Protected  authentication = {false}>
        <AllPost/>
      </Protected>
    )
  },
  {
    path : "/add-post",
    element : (
      <Protected  authentication>
        <AddPost/>
      </Protected>
    )
  },
  {
    path : "/edit-post/:slug",
    element : (
      <Protected  authentication>
        <EditPost/>
      </Protected>
    )
  },
  {
    path : "/posts/:slug",
    element : (
      <Protected  authentication>
        <Post/>
      </Protected>
    )
  }
],
}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
