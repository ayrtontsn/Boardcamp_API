export default function error_handling_middleware(error, req, res, next) {
	if (error.type === "Unprocessable Content") return res.status(400).send(error.message);
	if (error.type === "Conflict") return res.status(409).send(error.message);
	if (error.type === "Not Found") return res.status(404).send(error.message);
	return res.sendStatus(500);
}