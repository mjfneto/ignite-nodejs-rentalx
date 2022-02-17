import fs from 'fs';
import { parse } from 'csv-parse';
import ICategoriesRepository from '../../repositories/ICategoriesRepository';

interface IImportCategory {
    category: string;
    description: string;
}

export default class ImportCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) { }

    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const categories: IImportCategory[] = [];

            const stream = fs.createReadStream(file.path);

            const csvParser = parse();
            stream.pipe(csvParser);

            csvParser.on('data', (line) => {
                const [category, description] = line;

                categories.push({ category, description });
            });

            csvParser.on('end', () => {
                resolve(categories);

                fs.promises.unlink(file.path);
            })

            csvParser.on('error', (err) => reject(err));
        });
    }

    async execute(file: Express.Multer.File) {
        const categories = await this.loadCategories(file);

        categories.forEach(({ category, description }) => {
            const categoryExists = this.categoriesRepository.findByName(category);

            if (!categoryExists) {
                this.categoriesRepository.create({ category, description });
            }
        })
    }
}