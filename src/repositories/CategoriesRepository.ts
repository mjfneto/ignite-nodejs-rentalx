import { Category } from '../../models/Category'

interface ICreateCategoryDTO {
    category: string;
    description: string;
}

class CategoriesRepository {
    private categories: Category[]

    constructor() {
        this.categories = []
    }

    create({ category, description }: ICreateCategoryDTO) {
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

export { CategoriesRepository }
