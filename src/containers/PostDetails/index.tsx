import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../../global/ajax';
import { ComponentPropsType } from '../../global/types';
import useLogger from '../../helpers/hooks/use-logger';
import { Post } from '../../global/types';

const PostDetails: React.FC<ComponentPropsType> = ({ message, name }) => {
  useLogger({ message, name });
  let { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (id !== undefined) {
        const result = await get(`posts/${id}`);

        if (result.data) {
          setPost(result.data);
        }
      }
    };
    fetchData();
  }, [id]);

  if (!post) return <h3>Loading post details....</h3>;

  return (
    <div>
      <h3>title: {post.title}</h3>
      <p>body: {post.body}</p>
      <p>userid: {post.userId}</p>
    </div>
  );
};

export default PostDetails;
