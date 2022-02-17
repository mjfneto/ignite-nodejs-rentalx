import ISpecificationsRepository from "../../repositories/ISpecificationsRepository";

export default class CreateSpecificationsUseCase {
    constructor(private specificationsRepository: ISpecificationsRepository) { }

    execute({ specification, description }): void {
        const specificationAlreadyExists = this.specificationsRepository.findByName(specification);

        if (specificationAlreadyExists) throw new Error('Specification exists');

        this.specificationsRepository.create({ specification, description });
    }
}