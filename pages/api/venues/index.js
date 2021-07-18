
import {venues} from "../db.json";

export default (req, res) => {
    res.status(200).json(venues);
}