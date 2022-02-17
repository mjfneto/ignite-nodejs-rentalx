import { Request, Response } from "express";
import CreateSpecificationsUseCase from "./CreateSpecificationUseCase";

export default class CreateSpecificationController {
    constructor(private createSpecificationUseCase: CreateSpecificationsUseCase) { }

    handle(request: Request, response: Response) {
        const { specification, description } = request.body;

        this.createSpecificationUseCase.execute({ specification, description });

        return response.status(201).send();
    }
}