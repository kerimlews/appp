import './styles.css';

import React, { useEffect, useState } from 'react';
import TextInput from '../../components/TextInput';
import { get } from '../../global/ajax';
import { ComponentPropsType } from '../../global/types';
import useLogger from '../../helpers/hooks/use-logger';
import { debounce } from '../../helpers/utils';
import { Post as PostType, User } from '../../global/types';
import Post from './components/Post';

const Posts: React.FC<ComponentPropsType> = ({ message, name }) => {
  useLogger({ message, name });

  const [posts, setPosts] = useState<PostType[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<PostType[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    /* 
        This is just on test purpose - in this case it's better to load all users then one by one
        In real scenario we would query posts (take: 10) with username on the backend,
        and initialy load at least 3 comments or none. On button click load more comments
     */
    const fetchData = async () => {
      const postsResult = await get('posts');

      if (postsResult.data) {
        setPosts(postsResult.data);
        setFilteredPosts(postsResult.data);

        const userResult = await get('users');

        if (userResult.data) {
          setUsers(userResult.data);
        }
      }
    };

    fetchData();
  }, []);

  const handleSearch = (value: string) => {
    /* 
        endpoint search like - /posts?title=something
        should fully match the title to get it works
        thats the reason why 'includes' used here
      */
    debounce(() => {
      if (value) {
        const filteredPosts = posts.filter(post => post.title.includes(value));
        setFilteredPosts(filteredPosts);
      } else {
        setFilteredPosts(posts);
      }
    }, 300);
  };

  return (
    <div className="posts-container-wrapper">
      <TextInput message={message} onChange={handleSearch} placeholder="Search for posts..." />
      <div className="posts-list">
        {filteredPosts.map(post => {
          const userName = users.find(user => post.userId === user.id)?.name;

          return <Post key={post.id} message={message} name="Post" userName={userName} {...post} />;
        })}
      </div>
    </div>
  );
};

export default Posts;
