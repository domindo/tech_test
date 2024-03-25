import PropTypes from "prop-types"
import { Outlet } from "react-router-dom"
import MainLayout from "~/layout/MainLayout"

export default function ProtectedRoute() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}

ProtectedRoute.propTypes = {
  children: PropTypes.element,
}
