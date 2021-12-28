import React from 'react'
import Moment from 'react-moment'
import image from './no-image.jpg'

export default function NewsItem(props) {
  return (
    <div className="container p-0" style={{ height: "100%" }}  >
      <div className="card item-style" style={{ height: "100%" }}>
        <img src={props.imageurl ? props.imageurl : image} className="card-img-top" style={{ height: '200px' }} alt="..." />
        <div className="card-body d-flex flex-column justify-content-between" >
          <h5 className="card-title" style={{color : "white"}}>{props.title}...</h5>
          <p className="card-text" style={{color : "white"}}>{props.description}...</p>
          <div>
            <p className="card-text" ><small className="text-muted"><Moment fromNow>{new Date(props.date)}</Moment> </small></p>
            <a disabled={props.link ? false : true} className="btn btn-outline-light" rel="noreferrer" href={props.link} target="_blank" style={{textDecoration: "none" }}>Read More</a>
          </div>
        </div>
      </div>
    </div>
  )
}
