import axios from "axios";
import { useState } from "react";

const UserInteraction = ({ post }) => {
  const [likes, setLikes] = useState(post.likes || 0);
  const [isLiked, setIsLiked] = useState(false);

  const [comments, setComments] = useState(post.comments || []);
  const [newComment, setNewComment] = useState("");

  const handleLike = () => {
    const newLikes = isLiked ? likes - 1 : likes + 1;
    setLikes(newLikes);
    setIsLiked(!isLiked);
    // para enviar y almacenar en el back el like
    updateLikes(post.id, newLikes);
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const updateComments = [...comments, newComment];
    setComments(updateComments);
    setNewComment("");

    //Enviar el nuevo comentario al backend
    await addCommentToDataBase(post.id, newComment);
  };

  const updateLikes = async (postId, newLikes) => {
    try {
      const response = await axios.post(
        `http://api.example.com/posts/${postId}/likes`,
        { likes: newLikes }
      );
      if (response.status !== 200) {
        throw new Error("Error actualizando los likes");
      }
      console.log("Likes actualizados correctamente");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const addCommentToDataBase = async (postId, comment) => {
    try {
      const res = await axios.post(
        `http://api.example.com/posts/${postId}/comments`,
        { comment: comment }
      );
      if (res.status !== 200) {
        throw new Error("It was not possible to add the comment");
      } else {
        ("Comment was added successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <p>
        <mark>counter:</mark> {`${likes}`}
      </p>
      <button onClick={handleLike}> {isLiked ? "Unlike" : "Like"}</button>
      <div className="comments">
        <h4>Comentarios</h4>
        {comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
        <form onSubmit={handleCommentSubmit}>
          <input
            type="text"
            value={newComment}
            onChange={handleCommentChange}
            placeholder="Añadir un comentario"
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default UserInteraction;
