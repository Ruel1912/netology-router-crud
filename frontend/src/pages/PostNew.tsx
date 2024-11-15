import { Link, useNavigate } from 'react-router-dom'
import PostForm from '../components/posts/PostForm'
import { createPost } from '../data/posts'
import { IPost } from '../interfaces'
import { routeList } from '../constants'

const PostNew = () => {

  const navigate = useNavigate();
  const addPost = async(post: IPost) => {
    await createPost(post);
    navigate(routeList.root);
  }
  return (
    <>
      <Link className="btn btn-primary w-fit" to={`${routeList.root}`}>
        Назад
      </Link>
      <PostForm onSubmit={addPost} formType="new" />
    </>
  )
}

export default PostNew