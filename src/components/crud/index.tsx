import { Box, Text } from "@chakra-ui/react";
import Api from "@components/axiosApi";
import { stat } from "fs";

const postData = async (setData: any, errPost: string, path: string) => {
  try {
    const res = await Api.post(path, setData);
    return res;
  } catch (error: any) {
    showError(errPost);
  }
};

const getData = async (setData: any, errGet: string, path: string) => {
  try {
    const res = await Api.get(path);
    setData(res.data);
  } catch (err) {
    console.error(errGet, err);
  }
};

const editData = async (updatedData: any, errEdit: string, path: string) => {
  try {
    const res = await Api.put(path, updatedData);
    return res;
  } catch (error: any) {
    showError(errEdit);
  }
};

const deleteData = async (updatedData: any, delError: string, path: string) => {
  try {
    console.log(path);
    const res = await Api.delete(path);
    return res;
  } catch (error: any) {
    showError(delError);
  }
};

const showError = (errorMessage: string) => {
  alert(errorMessage);
};

export { getData, postData, editData, deleteData };
