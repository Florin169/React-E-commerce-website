import Payment from "../models/Payment.js";

export const paymentDetails = async (req, res) => {
  try {
    const paymentDetails = await Payment.insertMany();
  } catch (error) {}
};
