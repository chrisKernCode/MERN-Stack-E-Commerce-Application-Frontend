const initialState = {
  designs: [
    { id: 1, name: "Project One", tshirtColor: "black" },
    { id: 2, name: "Project Two", tshirtColor: "white" },
    { id: 3, name: "Project Three", tshirtColor: "grey" },
    { id: 4, name: "Project Four", tshirtColor: "blue" },
    { id: 5, name: "Project Five", tshirtColor: "red" },
  ],
};

const designReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_DESIGN": 
    console.log("design is saved in the database", action.design)
  }
  return state;
};

export default designReducer;
