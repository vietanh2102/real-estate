import { publicRoutes } from "./routes"
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import DefaultLayout from "./layout/defauktLayout/DefaultLayout"
import { Fragment } from 'react';

function App() {
  return (

    <div>
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component
            let Layout: any = DefaultLayout
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />
            )
          })}
        </Routes>
      </Router>
    </div>
  )
}

export default App
