import React from "react";
export default class ArticleCard extends React.Component {
  render() {
    const { imageUrl, title, description } = this.props;
    return (
      <div className="article card">
        <div className="row">
          <div className="col half">
            <img src={imageUrl} />
          </div>
          <div className="col half">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  }
}
