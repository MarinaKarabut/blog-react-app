import { Route, Switch } from "react-router-dom"
import { lazy, Suspense } from "react"

import Loader from "../shared/components/Loader"
import routes from "./routes"

const PostsPage = lazy(() => import("../client/pages/PostsPage"))
const SinglePostPage = lazy(() => import("../client/pages/SinglePostPage"))

const App = () => {
  const { posts, singlePost } = routes
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path={posts} component={PostsPage} />
        <Route exact path={singlePost} component={SinglePostPage} />
      </Switch>
    </Suspense>
  )
}

export default App
