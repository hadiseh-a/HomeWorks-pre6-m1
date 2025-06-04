const baseURL = "http://localhost:3000/member"; // Write down the base URL of the created API.

const getAllUser = async () => {
  try {
    const res = await fetch(baseURL);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const createUser = async (userData) => {
  try {
    const res = await fetch(baseURL, {
      method: "POST",
      body: JSON.stringify({ ...userData }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const deleteUser = async (id) => {
  try {
    const res = await fetch(`${baseURL}/${id}`, { method: "DELETE" });
    return res;
  } catch (error) {
    console.error(error);
  }
};

export { getAllUser, deleteUser, createUser };
