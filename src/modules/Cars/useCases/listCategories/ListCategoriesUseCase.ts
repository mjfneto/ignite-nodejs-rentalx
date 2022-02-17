import Category from "../../models/Category"
import CategoriesRepository from "../../repositories/implementations/CategoriesRepository";

export default class ListCategoriesUseCase {
    constructor(private categoriesRepository: CategoriesRepository) { };

    execute(): Category[] {
        return [...this.categoriesRepository.list()];
    }

}