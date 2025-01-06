/* eslint-disable react/prop-types */
// Importing a placeholder image for cases where no image is available
import image from '../assets/newsonepic.jpeg'

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div 
      className="card bg-dark text-light mb-3 ms-3 d-inline-block my-2 mx-2 px-2 py-2" 
      style={{ maxWidth: "350px" }}
    >
      {/* Displays the news image or a placeholder if src is unavailable */}
      <img 
        src={src ? src : image} 
        style={{ height: "200px", width: "327px" }} 
        className="card-img-top" 
        alt="news image" 
      />

      {/* Card body to display news details */}
      <div className="card-body">
        {/* Truncate title if it exceeds 50 characters */}
        <h5 className="card-title">{title.slice(0, 50)}</h5>

        {/* Truncate description if it exists and is over 90 characters; otherwise, display default text */}
        <p className="card-text">
          {description ? description.slice(0, 90) : "A press release is an official statement (written or recorded) that an organization issues to the news media and beyond."}
        </p>
        
        {/* Link button that navigates to the full news article */}
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  )
}

export default NewsItem;
