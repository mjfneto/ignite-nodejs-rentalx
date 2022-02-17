import Category from "../models/Category";

interface ICreateCategoryDTO {
    category: string;
    description: string;
}

export default interface ICategoriesRepository {
    findByName(name: string): Category;
    list(): Category[];
    create({ category, description }: ICreateCategoryDTO): void;
}