import { backend } from "../../config/app";
import axios from "axios";

export default async function handler(req, res) {


  let url = `${backend}/exchange/assets`;

  const result = await axios.get(url);

  res.status(200).json(result.data || {});
}
