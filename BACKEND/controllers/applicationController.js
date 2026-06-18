import * as ApplicantModel from "../models/applicationModel.js";

//get all applicants
export const getAllApplicants = async (req, res) => {
  try {
    const applicants = await ApplicantModel.getAllApplicants();

    res.json(applicants);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//get first 5 applicants
export const getRecentApplicants = async (req, res) => {
  try {
    const applicants = await ApplicantModel.getRecentApplicants();

    res.json(applicants);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
