import { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ComponentPropsType } from '../../../global/types';
import useLogger from '../../../helpers/hooks/use-logger';
import { Post as PostType, Comment as CommentType } from '../../../global/types';
import Button from '../../../components/Button';
import { get } from '../../../global/ajax';
import Comment from './Comment';

type Props = ComponentPropsType &
  Partial<PostType> & {
    userName?: string;
  };

const Post: React.FC<Props> = ({ userName, title, id, body, message, name }) => {
  useLogger({ message, name });

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<CommentType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleToggleShowComments = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    setShowComments(!showComments);
  };

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      const result = await get(`comments?postId=${id}`);

      if (result.data) {
        setComments(result.data);
      }

      setIsLoading(false);
    };

    if (showComments) fetchData();
  }, [id, showComments]);

  return (
    <Link to={`/post/${id}`} className="posts-list-post-details">
      <h2>Title: {title}</h2>
      <p>Body: {body}</p>
      {userName && <p>Username: {userName}</p>}
      <hr />
      <Button onClick={handleToggleShowComments} value="Toggle comments" className="btn btn-primary" />
      {showComments && (
        <div>
          <h3>Comments - {comments.length}</h3>
          {isLoading && <h2>Loading comments ...</h2>}
          {comments.map(comment => (
            <Comment key={comment.id} {...comment} />
          ))}
        </div>
      )}
    </Link>
  );
};

export default memo(Post);
