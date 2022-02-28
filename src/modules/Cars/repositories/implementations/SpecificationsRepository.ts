import Specification from "../../models/Specification";
import ISpecificationsRepository, { ICreateSpecificationDTO } from "../ISpecificationsRepository";

export default class SpecificationsRepository implements ISpecificationsRepository {
    private specifications: Specification[];
    private static INSTANCE: SpecificationsRepository;

    constructor() {
        this.specifications = [];
    }

    public static getInstance() {
        if (!SpecificationsRepository.INSTANCE) SpecificationsRepository.INSTANCE = new SpecificationsRepository();
        return SpecificationsRepository.INSTANCE;
    }

    create({ specification, description }: ICreateSpecificationDTO) {
        const newSpecification = new Specification();

        Object.assign(newSpecification, {
            specification,
            description,
            created_at: new Date()
        })

        this.specifications.push(newSpecification);
    }

    findByName(reqSpecification: any): Specification {
        return this.specifications.find(function ({ specification }) {
            return specification === reqSpecification;
        });
    }

    list() {
        return [...this.specifications];
    }
}