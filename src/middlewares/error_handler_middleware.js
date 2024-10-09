export default function error_handling_middleware(error, req, res, next) {
	if (error.type === "Unprocessable Content") return res.status(422).send(error.message);
	return res.sendStatus(500);
}