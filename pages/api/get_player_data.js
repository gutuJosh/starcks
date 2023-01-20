import { backend } from "../../config/app";
import axios from "axios";

export default async function handler(req, res) {

  const { id } = req.query;

  let url = `${backend}/players/${id}`;

  const result = await axios.get(url);

  res.status(200).json(result.data || {});
}
