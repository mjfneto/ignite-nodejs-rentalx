import { v4 as uuidv4 } from 'uuid'

export default class Specification {
    id?: string;
    specification: string;
    description: string;
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}
