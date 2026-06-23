export const generateBouquetImage = async (prompt) => {
  const res = await fetch("http://localhost:5050/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  const data = await res.json();
  return data;
};