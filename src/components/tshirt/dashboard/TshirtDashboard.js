import React, { Component } from "react";
import TshirtDisplay from "../design/TshirtDisplay"
import TshirtSettings from "../design/TshirtSettings"
import { connect } from "react-redux";
import { storage } from "../../../firebase"
import { saveDesign } from "../store/actions/saveDesignAction";
import { toast } from "react-toastify";

class TshirtDashboard extends Component {
  state = {
    tshirtColor: "black",
    upperText: "Text über dem Bild",
    lowerText: "Text unter dem Bild",
    memeing: "",
    url: "",
    textSize: 43,
    textColor: "white",
  };

  handleTshirtColor = (e) => {
    this.setState({ tshirtColor: e.target.id });
  };

  handleUpperText = (e) => {
    this.setState({ upperText: e.target.value });
  };

  handleLowerText = (e) => {
    this.setState({ lowerText: e.target.value });
  };

  handleTextSize = (E) => {
    this.setState({ textSize: E.target.value });
  };

  formatText() {
    const size = this.state.textSize;
    return parseInt(size);
  }

  handleTextColor = (e) => {
    
    this.setState({ textColor: e.target.value });
  };

  handleImageUpload = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          console.log(snapshot);
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              this.setState({ url });
            });
        }
      );
    }
  };

  handleSaveDesign = (e) => {
    if (e.target.id === "saveDesign") {
      this.props.saveDesign(this.state);
      toast.success("Design wurde gespeichert.")
    }      
  };

  render() {
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <TshirtDisplay display={this.state} textFormat={this.formatText()} />
          </div>
          <div className="col-lg-4">
            <TshirtSettings
              color={this.handleTshirtColor}
              upperText={this.handleUpperText}
              lowerText={this.handleLowerText}
              uploadImage={this.handleImageUpload}
              textSize={this.handleTextSize}
              textColor={this.handleTextColor}
              saveDesign={this.handleSaveDesign}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    saveDesign: (design) => dispatch(saveDesign(design)),
  };
};

export default connect(null, mapDispatchtoProps)(TshirtDashboard);
