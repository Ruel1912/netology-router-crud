import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root.tsx'
import PostNew from './pages/PostNew.tsx'
import PostView from './pages/PostView.tsx'
import { routeList } from './constants/index.ts'

const router = createBrowserRouter([
  {
    path: routeList.root,
    element: <Root />,
  },
  {
    path: routeList.postNew,
    element: <PostNew />
  },
  {
    path: routeList.post,
    element: <PostView />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
