import Api from "@components/axiosApi";

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

export { getData, postData };
