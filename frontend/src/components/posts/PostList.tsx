import { useEffect, useState } from 'react';
import { IPost } from '../../interfaces'
import PostCard from './PostCard'
import { getPosts } from '../../data/posts';

const PostList = () => {
  
  const [posts, setPosts] = useState<IPost[]>([]) 

  const fetchPosts = async () => {
    const fetchedPosts = await getPosts();
    setPosts(fetchedPosts);
  };
  
  useEffect(() => {
    fetchPosts();
  }, [])

  return posts.map((post) => <PostCard key={post.id} post={post} />)
}

export default PostList
