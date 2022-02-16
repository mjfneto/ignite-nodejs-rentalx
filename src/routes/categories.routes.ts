import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { Router, Request, Response, NextFunction } from 'express';

const categoriesRoute = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoute.use(checkExistingCategory);

categoriesRoute.post('/', (request, response) => {
    const { category, description } = request.body;

    categoriesRepository.create({ category, description });

    return response.status(201).send();
});

categoriesRoute.get('/', (request, response) => {
    const categories = categoriesRepository.list();

    return response.json(categories);
});

export { categoriesRoute };

// Middlewares

function checkExistingCategory(request: Request, response: Response, next: NextFunction) {
    const { category: reqCategory } = request.body;

    const existingCategory = categoriesRepository.findByName(reqCategory);

    if (existingCategory) {
        return response.status(400).json({ error: 'Bad request: category exists' });
    }

    next();
}
