import axios from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

interface User {
  id: number;
  name: string;
  email: string;
}

(async () => {
  const url = "https://jsonplaceholder.typicode.com/users/1";
  const userData = await fetchData<User>(url);
  console.log(userData);
})();
