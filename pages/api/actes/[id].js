import { actes } from "../db.json";

export default (req, res) => {
  const { query, method } = req;

  switch (method) {
    case "GET":
      // Get data from your database
      res.status(200).json(
        actes.filter(acte => acte.id == query.id)[0]
      );
      break;
    case "PUT":
      // Update or create data in your database
      res.status(200).json({});
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
};
