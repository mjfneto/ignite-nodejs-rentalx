import { Router } from 'express';
import createCategoryController from '../modules/Cars/useCases/createCategory';
import listCategoriesController from '../modules/Cars/useCases/listCategories';


export const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
    return listCategoriesController.handle(request, response);
});
