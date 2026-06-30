import API from "../api/API.js";

// Keep your single loaders if you need them elsewhere, but add this combined one:
export const tuitionLoader = async () => {
  try {
    // Run both API requests concurrently for faster performance
    const [feesRes, paymentRes] = await Promise.all([
      API.get("/getfees"),
      API.get("/getpaymethod"),
    ]);

    return {
      feesData: feesRes.data,
      paymethodData: paymentRes.data,
    };
  } catch (error) {
    if (error.response) {
      console.error("Backend Database Error Data:", error.response.data);
    }
    throw error;
  }
};
