import React, { useEffect, useState, useRef } from "react";
import { useOutletContext, useParams } from "react-router-dom";

function Repo(props) {
  const { id } = useParams();
  const [repo, setRepo] = useState("testing");
  

  const [portfolio, scrollView, dynamicRoute] =
    useOutletContext();
  const ref = useRef();

  useEffect(() => {
    
    const tempRepo = portfolio.find((item) => item.id === Number(id));
    setRepo(tempRepo)
   

    if (dynamicRoute) {
      scrollView(ref);
    }
  }, [dynamicRoute, id, portfolio, scrollView]);


  console.log("rubbish")
  return (
    
    <div
      id="outlet"
      ref={ref}
      style={{
        marginTop: "50px",
        width: "100%",
        height: "300px",
        padding: "40px",
        border: "2px solid black",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fffff",
        justifyContent: "center",
        alignItems: "center",
        textAlign:"center",
       
      }}
    >
      <h4 alt="title and details of repositories">{repo?.name}</h4>
      <p alt="more details of repos">{repo?.description}</p>
      <p alt="more details of repos">{repo?.language}</p>
      <p alt="more details of repos">Forks Count: {repo?.forks_count}</p>

      
      <a href={repo?.html_url}>
        
        <button className="buttons">CLICK FOR MORE </button>
      </a>
    </div>
  );
}

export default Repo;
