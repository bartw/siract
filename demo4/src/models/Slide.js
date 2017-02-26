import { getNextId } from '../services/idService';

export default class Slide {
    constructor() {
        this.id = getNextId();
        this.content = '# Slide ' + this.id;
    }
}