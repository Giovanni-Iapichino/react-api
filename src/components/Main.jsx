import axios from "axios";

export default function Main() {
  const apiBaseUrl = "https://lanciweb.github.io/demo/api/actresses/";

  axios.get(`${apiBaseUrl}`).then((res) => {
    console.log(res.data);
  });

  const { results } = res.data;

  return;
}
