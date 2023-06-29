import React, {useEffect} from "react";

const getData=()=>{
  return fetch (
    `https://jsonplaceholder.typicode.com/posts?_limit=10`
  ).then((res)=>{
    res.json();
  })
}

function Post() {
  const [loading, setLoading]=React.useState(false);
  const [posts, setPosts]=React.useState([]);

  const [Page, setPage]= React.useState(1);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData=async()=>{
    setLoading(true);
    try{
      const data=await getData();
      setPosts(data);
      setLoading(false);
    }catch(err){
      console.log(err);
      setLoading(false);
    }
  };
  const handleChange=(changeBy)=>{
    setPage(Page+changeBy);
  }

  return loading?(
    <h1>Loading...</h1>
  ):(
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post)=>(
          <li>
          {post.id}{"--->"}
          {post.title}
          </li>
        ))}
      </ul>
      <button disabled={Page===1} onClick={()=>handleChange(-1)}>Previous</button>
      <button disabled>{Page}</button>
      <button onClick={()=>handleChange(-1)}>Next</button>
    </div>
  );
}
export default Post;