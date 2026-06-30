import * as tuitionModel from "../models/tuitionModel.js";

export const getFeesController = async (req, res) => {
  try {
    const fees = await tuitionModel.getFees();
    res.json(fees);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getPaymentMethodController = async (req, res) => {
  try {
    const payment_method = await tuitionModel.getPaymentMethod();
    res.json(payment_method);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
