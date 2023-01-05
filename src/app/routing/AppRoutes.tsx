/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */
import { FC } from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { PrivateRoutes } from './PrivateRoutes'
import { ErrorsPage } from '../modules/errors/ErrorsPage'
import { Logout, AuthPage, useAuth } from '../modules/auth'
import { App } from '../App'
import Constants from '../consts/Consts'
/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const { PUBLIC_URL } = process.env
const AppRoutes: FC = () => {
  const { auth } = useAuth();
  const token = JSON.stringify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJwcml0ZXNoQGNhcnNlbG9uYWRhaWx5LmluIiwicm9sZSI6IkFkbWluIiwiaWF0IjoxNjY2OTY3MzQ2LCJleHAiOjE2Njk1NTkzNDZ9.YYI9FhnZ41NNEFrRt7VSiIc64Xs8JNh4suX-IDn69Eg")
  return (
    <BrowserRouter >
      <Routes>
        <Route element={<App />}>
          <Route path='error/*' element={<ErrorsPage />} />
          <Route path='logout' element={<Logout />} />
          {<>
            <Route path='auth/*' element={<AuthPage />} />
            <Route path='*' element={<Navigate to='/auth' />} />
          </>}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export { AppRoutes }
