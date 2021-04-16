import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: user, error, isPending } = useFetch(
    "http://localhost:8000/users/" + id
  );

  const history = useHistory();

  const handleDelete = () => {
    fetch("http://localhost:8000/users/" + user.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {/* <h2>Blog Details - {id} </h2> */}
      {isPending && <div> Loading... </div>}
      {error && <div> {error} </div>}

      {user && (
        <article>
          <h2>{user.title}</h2>
          <p>Written by {user.author}</p>
          <div>{user.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
