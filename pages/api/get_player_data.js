import { backend } from "../../config/app";
import axios from "axios";

/**
 *
 * @param req
 * @param res
 * @returns {Promise<Object>}
 */

export default async function handler(req, res) {

  const { id } = req.query;

  const url = `${backend}/players/${id}`;

  const result = await axios.get(url);

  res.status(200).json(result.data || {});
}
