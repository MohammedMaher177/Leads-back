import { Router } from "express";
import controller from "../../controllers/leads";
import { catchError } from "../../helper/ErrorHandler/ErrorHandler";
import { validate } from "../../middlewares/validate";
import * as validation from "../../controllers/validation";


const leadsRouter = Router()

leadsRouter.route("/")
    .get(catchError(controller.list))
    .post(validate(validation.create), catchError(controller.create))
leadsRouter.route("/:id")
    .get(catchError(controller.get))
    .patch(validate(validation.update), catchError(controller.update))
    .delete(catchError(controller.remove))

export default leadsRouter