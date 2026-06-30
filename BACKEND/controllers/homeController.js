import * as homeModel from "../models/homeModel.js";

export const getBannerController = async (req, res) => {
  try {
    const banner = await homeModel.getBanner();
    res.json(banner);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAcademicProgramsController = async (req, res) => {
  try {
    const academic_programs = await homeModel.getAcademicPrograms();
    res.json(academic_programs);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getMissionVisionController = async (req, res) => {
  try {
    const mission_vision = await homeModel.getMissionVision();
    res.json(mission_vision);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getReasonsController = async (req, res) => {
  try {
    const reasons = await homeModel.getReasons();
    res.json(reasons);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getChildrenActivityController = async (req, res) => {
  try {
    const children_actiivity = await homeModel.getChildrenActivity();
    res.json(children_actiivity);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
