const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mileStoneSchema = new Schema({
  ParentProjectID: {
    type: String,
    //required: true,
  },
  MileStoneID: {
    type: String,
    //required: true,
  },
  MileStoneName: {
    type: String,
    //required: true,
  },
  Tasks:{
    type: Array,
  },
  TargetDate: {
    type: String,
  }
});

module.exports = mongoose.model("mileStoneCollection", mileStoneSchema);
