import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import i18next from "i18next";

import {
  Layout,
  MoreDetails,
  AdminLayout,
  LoginRegister,
  ProtectedRoute,
  SkeletonPost,
} from "./components";
import {
  Home,
  LatestNews,
  ActualNews,
  VideoNews,
  PhotoNews,
  FourZeroFour,
  Dashboard,
  Users,
  News,
  Banner,
  Media,
  Photos,
} from "./pages";

import { smallActions } from "./context";

function App() {
  return (
    <div
      className={`w-screen h-screen overflow-x-hidden flex flex-col`}
      onScroll={(e) => smallActions.handleScroll(e.currentTarget.scrollTop)}
    >
      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={[...Array(10).keys()].map((i) => (
                <SkeletonPost key={i} />
              ))}
            >
              <Layout />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense
                fallback={[...Array(10).keys()].map((i) => (
                  <SkeletonPost key={i} />
                ))}
              >
                <Home />
              </Suspense>
            }
          />
          <Route
            path={`:lang/latest-news`}
            element={
              <Suspense
                fallback={[...Array(10).keys()].map((i) => (
                  <SkeletonPost key={i} />
                ))}
              >
                <LatestNews />
              </Suspense>
            }
          />
          <Route
            path={`:lang/actual-news`}
            element={
              <Suspense
                fallback={[...Array(10).keys()].map((i) => (
                  <SkeletonPost key={i} />
                ))}
              >
                <ActualNews />
              </Suspense>
            }
          />
          <Route
            path={`:lang/video-news`}
            element={
              <Suspense
                fallback={[...Array(10).keys()].map((i) => (
                  <SkeletonPost key={i} />
                ))}
              >
                <VideoNews />
              </Suspense>
            }
          />
          <Route
            path={`:lang/photo-news`}
            element={
              <Suspense
                fallback={[...Array(10).keys()].map((i) => (
                  <SkeletonPost key={i} />
                ))}
              >
                <PhotoNews />
              </Suspense>
            }
          />
          <Route
            path={`:lang/news/details/:category/:id`}
            element={
              <Suspense
                fallback={[...Array(10).keys()].map((i) => (
                  <SkeletonPost key={i} />
                ))}
              >
                <MoreDetails />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="/egamnazar-dashboard"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={
              <Suspense
                fallback={[...Array(10).keys()].map((i) => (
                  <SkeletonPost key={i} />
                ))}
              >
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="news"
            element={
              <Suspense
                fallback={[...Array(10).keys()].map((i) => (
                  <SkeletonPost key={i} />
                ))}
              >
                <News />
              </Suspense>
            }
          />
          <Route
            path="users"
            element={
              <Suspense
                fallback={[...Array(10).keys()].map((i) => (
                  <SkeletonPost key={i} />
                ))}
              >
                <Users />
              </Suspense>
            }
          />
          <Route
            path="banner"
            element={
              <Suspense
                fallback={[...Array(10).keys()].map((i) => (
                  <SkeletonPost key={i} />
                ))}
              >
                <Banner />
              </Suspense>
            }
          />
          <Route
            path="media"
            element={
              <Suspense
                fallback={[...Array(10).keys()].map((i) => (
                  <SkeletonPost key={i} />
                ))}
              >
                <Media />
              </Suspense>
            }
          />
          <Route
            path="photos"
            element={
              <Suspense
                fallback={[...Array(10).keys()].map((i) => (
                  <SkeletonPost key={i} />
                ))}
              >
                <Photos />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="egamnazar-login"
          element={
            <Suspense
              fallback={[...Array(10).keys()].map((i) => (
                <SkeletonPost key={i} />
              ))}
            >
              <LoginRegister />
            </Suspense>
          }
        />
        <Route
          path="404"
          element={
            <Suspense
              fallback={[...Array(10).keys()].map((i) => (
                <SkeletonPost key={i} />
              ))}
            >
              <FourZeroFour />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense
              fallback={[...Array(10).keys()].map((i) => (
                <SkeletonPost key={i} />
              ))}
            >
              <FourZeroFour />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
