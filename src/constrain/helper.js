import axios from "axios";

const sendRequest = async (method, url, dataObj) => {
  try {
    const response = await axios({
      method,
      url: `/api/${url}`,
      data: dataObj,
    });

    return response;
  } catch (error) {
    throw error;
  }
};

const getItems = async (url) => {
  try {
    const data = await sendRequest("GET", url);
    return data;
  } catch (error) {
    throw error;
  }
};

const postItem = async (url, dataObj) => {
  try {
    const data = await sendRequest("POST", url, dataObj);
    return data;
  } catch (error) {
    throw error;
  }
};

const patchItem = async (url, dataObj) => {
  try {
    const data = await sendRequest("PATCH", url, dataObj);
    return data;
  } catch (error) {
    throw error;
  }
};

const putItem = async (url, dataObj) => {
  try {
    const data = await sendRequest("PUT", url, dataObj);
    return data;
  } catch (error) {
    throw error;
  }
};

const deleteItem = async (url) => {
  try {
    const data = await sendRequest("DELETE", url);
    return data;
  } catch (error) {
    throw error;
  }
};

export { getItems, postItem, patchItem, putItem, deleteItem };
