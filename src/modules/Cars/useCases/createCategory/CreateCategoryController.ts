import { Request, Response } from "express";
import CreateCategoryUseCase from "./CreateCategoryUseCase";

export default class CreateCategoryController {
    constructor(private createCategoryUseCase: CreateCategoryUseCase) { }

    handle(request: Request, response: Response) {
        const { category, description } = request.body;

        this.createCategoryUseCase.execute({ category, description });

        return response.status(201).send();
    }
}