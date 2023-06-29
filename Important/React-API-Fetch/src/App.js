import "./styles.css";
import React from "react";
const getData = () => {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10`
  ).then((res) => res.json());
};
export default function App() {
  const [data, setData] = React.useState([]);
  const FetchData = async () => {
    try {
      const response = await getData();
      console.log(data);
      setData(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="App">
      <h1>Posts</h1>
      <button onClick={FetchData}>Get Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
