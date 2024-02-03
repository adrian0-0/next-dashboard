import { Box, Text } from "@chakra-ui/react";
import Api from "@components/axiosApi";
import { stat } from "fs";

const getData = async (setData: any, errGet: string, path: string) => {
  try {
    const res = await Api.get(path);
    setData(res.data);
  } catch (err) {
    console.error(errGet, err);
  }
};

const postData = async (setData: any, errPost: string, path: string) => {
  try {
    console.log("tesete");
  } catch (err) {
    console.error("Erro: Na coleta de dados dos professores", err);
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

const showError = (errorMessage: string) => {
  alert(errorMessage);
};

export { getData, postData, editData };
