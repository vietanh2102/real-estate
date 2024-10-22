import { publicRoutes } from "./routes";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/defauktLayout/DefaultLayout";
import { Fragment, Suspense } from "react";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            let Layout: any = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Suspense>
                    <Layout>
                      <Page />
                    </Layout>
                  </Suspense>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
