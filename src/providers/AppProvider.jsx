import PropTypes from "prop-types"
import { BrowserRouter } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"

const AppProvider = ({ children }) => {
  return (
    <HelmetProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </HelmetProvider>
  )
}

export default AppProvider

AppProvider.propTypes = {
  children: PropTypes.element,
}
