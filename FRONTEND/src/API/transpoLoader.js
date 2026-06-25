export const transpoLoader = async () => {
  const res = await fetch("http://localhost:5000/transportation");
  return res.json();
};
