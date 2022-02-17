import ICategoriesRepository from '../ICategoriesRepository'
import Category from '../../models/Category'

export default class CategoriesRepository implements ICategoriesRepository {
    private categories: Category[]
    private static INSTANCE: CategoriesRepository;

    private constructor() {
        this.categories = [];
    }

    public static getInstance() {
        if (!CategoriesRepository.INSTANCE) CategoriesRepository.INSTANCE = new CategoriesRepository();

        return CategoriesRepository.INSTANCE;
    }

    create({ category, description }) {
        const newCategory = new Category()

        Object.assign(newCategory, {
            category,
            description,
            created_at: new Date()
        })

        this.categories.push(newCategory)
    }

    list(): Category[] {
        return [...this.categories]
    }

    findByName(reqCategory: string): Category {
        return this.categories.find(function ({ category }) {
            return category == reqCategory
        })
    }
}
