import { Router } from "express";
import createSpecificationController from "../modules/Cars/useCases/createSpecification";
import ListSpecificationsController from "../modules/Cars/useCases/listSpecifications";

export const specificationsRoutes = Router();

specificationsRoutes.post('/', (request, response) => {
    return createSpecificationController.handle(request, response);
});

specificationsRoutes.get('/', (request, response) => {
    return ListSpecificationsController.handle(request, response);
})
