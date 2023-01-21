import { backend } from "../../config/app";
import axios from "axios";

/**
 * @returns {Promise<Object>}
 */

export default async function handler(req, res) {


  const url = `${backend}/exchange/assets`;

  const result = await axios.get(url);

  res.status(200).json(result.data || {});
}
