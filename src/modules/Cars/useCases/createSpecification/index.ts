import SpecificationsRepository from "../../repositories/implementations/SpecificationsRepository";
import CreateSpecificationController from "./CreateSpecificationController";
import CreateSpecificationsUseCase from "./CreateSpecificationUseCase";

const specificationsRepository = SpecificationsRepository.getInstance();

const createSpecificationUseCase = new CreateSpecificationsUseCase(specificationsRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

export default createSpecificationController;