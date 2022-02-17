import ICategoriesRepository from "../../repositories/ICategoriesRepository";

interface IRequest {
    category: string;
    description: string;
}

export default class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) { }

    execute({ category, description }: IRequest): void {
        const categoryAlreadyExists = this.categoriesRepository.findByName(category);

        if (categoryAlreadyExists) throw new Error('Category exists');

        this.categoriesRepository.create({ category, description });
    }
}