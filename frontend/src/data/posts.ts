import { IPost } from '../interfaces'

const { VITE_BACKEND_URL: backendUrl } = import.meta.env

export async function getPosts() {
  const response = await fetch(`${backendUrl}/posts`)
  return response.json()
}

export async function getPost(id: number) {
  const response = await fetch(`${backendUrl}/posts/${id}`)
  return response.json()
}

export async function createPost(post: IPost) {
  await fetch(`${backendUrl}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
}

export async function deletePost(id: number) {
  await fetch(`${backendUrl}/posts/${id}`, {
    method: 'DELETE'
  })
}

export async function updatePost(post: IPost) {
  await fetch(`${backendUrl}/posts/${post.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
}
