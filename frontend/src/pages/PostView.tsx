import { useNavigate, useParams } from 'react-router-dom'
import PostCard from '../components/posts/PostCard'
import { useEffect, useState } from 'react'
import { deletePost, getPost, updatePost } from '../data/posts'
import { IPost } from '../interfaces'
import { routeList } from '../constants'
import PostForm from '../components/posts/PostForm'
import { Button } from 'react-daisyui'

const PostView = () => {
  const [post, setPost] = useState<IPost>()
  const [openEdit, setOpenEdit] = useState(false)

  const { id } = useParams()
  const navigate = useNavigate()
  const postId = Number(id)

  function handleOpenEdit() {
    setOpenEdit(!openEdit)
  }

  function handleBackButton() {
    if (openEdit) {
      handleOpenEdit()
    } else {
      navigate(routeList.root)
    }
  }

  const onDelete = async (id: number) => {
    await deletePost(id)
    navigate(routeList.root)
  }

  const onUpdate = async (post: IPost) => {
    await updatePost(post)
    navigate(routeList.root)
  }

  useEffect(() => {
    const fetchPost = async () => {
      const { post } = await getPost(postId)
      setPost(post)
    }

    fetchPost()
  }, [postId])

  if (!post) return null

  return (
    <>
      <Button onClick={handleBackButton} className="btn w-fit btn-primary">
        Назад
      </Button>
      {openEdit ? (
        <PostForm onSubmit={onUpdate} formType="edit" post={post} />
      ) : (
        <PostCard
          post={post}
          onDelete={onDelete}
          setOpenEdit={handleOpenEdit}
          showControl={true}
        />
      )}
    </>
  )
}

export default PostView
