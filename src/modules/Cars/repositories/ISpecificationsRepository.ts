import Specification from "../models/Specification";

export interface ICreateSpecificationDTO {
    specification: string;
    description: string;
}

export default interface ISpecificationsRepository {
    create({ specification, description }: ICreateSpecificationDTO): void;
    findByName(specification: string): Specification;
    list(): Specification[];
}