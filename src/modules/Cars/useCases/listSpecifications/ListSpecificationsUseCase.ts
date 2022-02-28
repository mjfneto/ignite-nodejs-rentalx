import SpecificationsRepository from "../../repositories/implementations/SpecificationsRepository"

export default class ListSpecificationsUseCase {
    constructor(private specificationsRepository: SpecificationsRepository) { }

    execute() {
        return [...this.specificationsRepository.list()];
    }
}