import { Route, Routes } from 'react-router-dom'
import PageNotFound from '../pages/pageNotFound/PageNotFound.jsx'

export const RoutesNoMatch = ({ children }) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}
