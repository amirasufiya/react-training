import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  // const [name, setName] = useState('maria');
  //   const handleDelete = (id) => {
  //     const newBlogs = blogs.filter((blog) => blog.id !== id);
  //     setBlogs(newBlogs);
  //   };

  const { data: blogs, isPending, error } = useFetch(
    "http://localhost:8000/users"
  );

  return (
    <div className="home">
      {/* display loading message */}
      {error && <div> {error} </div>}
      {isPending && <div> Loading... </div>}
      {/* pass props here */}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      {/* <button onClick={() => setName('luigi')}>change name</button> */}
      {/* <p>{ name }</p> */}
      {/* <BlogList blogs={ blogs.filter((blog) => blog.author === 'mario' ) } title="Mario's Blogs" /> */}
    </div>
  );
};

export default Home;
