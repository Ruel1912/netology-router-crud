import { Link } from 'react-router-dom'
import { routeList } from '../constants'
import PostList from '../components/posts/PostList'

const Root = () => {

  return (
    <>
      <Link className="btn w-fit btn-accent" to={`${routeList.postNew}`}>
        Создать пост
      </Link>
      <PostList />
    </>
  )
}

export default Root
