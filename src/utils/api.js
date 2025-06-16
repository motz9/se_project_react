const baseUrl = "http://localhost:3001";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

function request(url, method, body) {
  const defaultHeaders = { "Content-Type": "application/json" };
  const options = {
    method,
    headers: { ...defaultHeaders },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }
  return fetch(url, options).then(checkResponse);
}

function getItems() {
  return request(`${baseUrl}/items`, "GET", null);
}

function addItem({ name, imageUrl, weather }) {
  return request(`${baseUrl}/items`, "POST", { name, imageUrl, weather });
}

function removeItem(id) {
  return request(`${baseUrl}/items/${id}`, "DELETE");
}

export { getItems, addItem, removeItem };
