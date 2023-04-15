import React from 'react'
const NewsItem = (props) => {
 
    let {title, description, imageUrl, newsUrl, author, date,} = props;
    return (
      <div className="my-3">
        <div className="card">
      <img src={!imageUrl?"https://i0.wp.com/indiaeducationdiary.in/wp-content/uploads/2020/08/Default-Image-IED.png?fit=534%2C462&ssl=1":imageUrl } className="card-img-top" alt="..." style={{height:'250px',Width:'100px'}}/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text "><small className="text-muted">By {!author? "Unknown":author} on {new Date (date).toGMTString()} </small></p>
        <a rel="noreferrer"  href={newsUrl} target="_blank" className={`btn btn-sm btn-dark`}>Read More</a>
      </div>
    </div>
    </div>
    )
  }

export default NewsItem

// If !imageUrl ? Not a null then show default url : imageUrl