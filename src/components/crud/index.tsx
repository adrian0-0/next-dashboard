import Api from "@components/axiosApi";
import Id from "@pages/api/empresa/[id]";

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

const editData = async (
  updatedData: any,
  setData: any,
  errEdit: string,
  path: string
) => {
  try {
    const res = await Api.put(path, updatedData);
    setData(res.data);
  } catch (err) {
    console.error(errEdit, err);
  }
};

export { getData, postData, editData };
