import React, { useEffect ,useState} from "react";

export default function News() {
    const [news, setnews] = useState([])
  useEffect(() => {
    fetch("http://localhost:3001/api/v1/news", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setnews(data)
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {
news.map(item=><div className="col-md-4" >
    <div className="card" >
  <img src={item.urlToImage} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">{item.description}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>)
        }
      </div>
    </div>
  );
}
