import FetchedPosts from "./components/FetchedPosts";
import PostForm from "./components/PostForm";
import PostForms from "./components/PostForms";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col"> 
          <PostForms />
        </div>
      </div>
      <div className="row">
        <div className="col"> 
        <h2>Sync Posts</h2>
          <Posts />
        </div>
        <div className="col"> 
        <h2>Async Posts</h2>
          <FetchedPosts posts={[]} /> 
        </div>
      </div>
    </div>
  );
}

export default App;
