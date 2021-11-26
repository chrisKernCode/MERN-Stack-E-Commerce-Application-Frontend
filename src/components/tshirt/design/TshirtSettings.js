import React from "react";
import "./TshirtDisplay.css";

const urlImgBase =
  "https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/";

const TshirtSettings = ({
  color,
  upperText,
  lowerText,
  uploadImage,
  textSize,
  textColor,
  saveDesign,
}) => {
  return (
    <div className="card bg-light container text-center">
      <h3 className="mt-3">T-Shirt Meme Designer</h3>
      <h4>Farbe wählen</h4>
      <div className="tshirt-color">
        <img
          onClick={color}
          src={`${urlImgBase}black.png`}
          alt="black-tshirt"
          id="black"
          style={{cursor: "pointer"}}
        />
        <img
          onClick={color}
          src={`${urlImgBase}white.png`}
          alt="white-tshirt"
          id="white"
          style={{cursor: "pointer"}}
        />
        <img
          onClick={color}
          src={`${urlImgBase}grey.png`}
          alt="grey-tshirt"
          id="grey"
          style={{cursor: "pointer"}}
        />
        <img
          onClick={color}
          src={`${urlImgBase}blue.png`}
          alt="blue-tshirt"
          id="blue"
          style={{cursor: "pointer"}}
        />
        <img
          onClick={color}
          src={`${urlImgBase}red.png`}
          alt="red-tshirt"
          id="red"
          style={{cursor: "pointer"}}
        />
      </div>
      <hr />
      <h4>Text eingeben</h4>
      <input
        onChange={upperText}
        type="text"
        className="form-control form-control-sm mb-2 text-center"
        placeholder="Text über dem Bild"
        style={{cursor: "pointer"}}
      />
      <input
        onChange={lowerText}
        type="text"
        className="form-control form-control-sm mb-2 text-center"
        placeholder="Text unter dem Bild"
        style={{cursor: "pointer"}}
      />
      <hr />
      <h4>Bild hochladen</h4>
      <div className="form-group mt-1">
        <input
          onChange={uploadImage}
          type="file"
          className="form-control-file"
          id="files"
        />
        <label for="files">Bild hochladen</label>
      </div>

      <hr />
      <h4>Schriftgröße ändern</h4>
      <input onChange={textSize} type="range" min="20" max="43" />
      <hr />
      <h4>Schriftfarbe ändern</h4>
      <select
        onChange={textColor}
        className="form-control form-control-sm mb-2"
      >
        <option value="white">Weiß</option>
        <option value="black">Schwarz</option>
        <option value="grey">Grau</option>
        <option value="blue">Blau</option>
        <option value="red">Rot</option>
      </select>
      <hr />
      <button
        className="btn btn-outline-info"
        id="saveDesign"
        onClick={saveDesign}
      >
        Design speichern
      </button>
    </div>
  );
};

export default TshirtSettings;
