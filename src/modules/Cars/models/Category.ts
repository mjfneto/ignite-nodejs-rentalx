import { v4 as uuidv4 } from 'uuid'

export default class Category {
    id?: string;
    category: string;
    description: string;
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4()
        }
    }
}
