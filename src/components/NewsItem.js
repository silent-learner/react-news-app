import React from 'react'
import Moment from 'react-moment'
import image from './nullimage.jpg'


export default function NewsItem(props) {
  return (
    <div className="container p-0" style={{ height: "100%" }}  >
      <div className="card" style={{ height: "100%" }}>
        <img src={props.imageurl ? props.imageurl : image} className="card-img-top" style={{ height: '200px' }} alt="..." />
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title">{props.title}...</h5>
          <p className="card-text">{props.description}...</p>
          <div><p className="card-text"><small className="text-muted"><Moment fromNow>{new Date(props.date).toLocaleString()}</Moment> </small></p>
            <button disabled={props.link ? false : true} className="btn btn-success" ><a rel="noreferrer" href={props.link} target="_blank" style={{ color: "white", textDecoration: "none" }}>Read More</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}
