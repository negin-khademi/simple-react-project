import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs,setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])
    // const [name, setName] = useState('mario');
    // const [age, setAge] = useState(25);
    // const handleClick = ()=>{
    //     setName('negin')
    //     setAge(30);
    // }

    return (
      <div className="home">
        <BlogList blogs={blogs} key={blogs.id}/>
        {/* <h2>Homepage</h2> */}
        {/* <p>{name} is {age} years old</p>
        <button onClick={handleClick}>click me</button>  */}
    </div>
    );
  }
   
  export default Home;