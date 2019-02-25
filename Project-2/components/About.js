import React, { Component } from "react";
import axios from "axios";
class About extends Component {
  state = {
    photos: []
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/photos").then(response => {
      console.log(response);
      this.setState({
        photos: response.data.splice(0, 2)
      });
    });
  }

  render() {
    const { photos } = this.state;
    const photoList = photos.length ? (
      photos.map(photo => {
        return (
          <div className="photo card">
            <div className="card-content">
              <span className="card-title">{photo.title}</span>
              <p>{photo.url}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center" />
    );

    return (
      <div className="container">
        <p className="center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          iste nemo totam ratione ut. Accusantium nulla perspiciatis quis dolor,
          a quaerat consectetur illo debitis ullam repudiandae saepe
          exercitationem deleniti magnam? Dignissimos ullam itaque eos odit
          blanditiis maxime impedit quo, optio voluptas dicta placeat, commodi
          modi numquam debitis. Vero ducimus, debitis esse recusandae enim
          consequatur ut nostrum inventore id, a neque! Adipisci reiciendis
          perspiciatis voluptatum eaque velit quia dolor cupiditate fuga
          doloremque ut, earum sint architecto praesentium deserunt culpa?
          Tempore, eligendi assumenda aliquam corporis molestiae veritatis
          soluta ipsa sequi numquam unde?
        </p>
        {photoList}
      </div>
    );
  }
}

export default About;
