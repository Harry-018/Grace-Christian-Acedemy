import * as transpoModel from "../models/transpoModel.js";

export const getLocationsController = async (req, res) => {
  try {
    const locations = await transpoModel.getLocations();
    res.json(locations);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
