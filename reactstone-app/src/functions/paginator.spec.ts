import 'mocha';
import { expect } from 'chai';
import { pageSize, paginator } from './paginator';

describe('paginator', () => {
    const totalItems:number = 75;
    const array:number[] = new Array(totalItems);
    const totalPages = Math.ceil(totalItems / pageSize);

    it('should return the first page', () => {
        const pageOne = paginator(array);
        expect(pageOne).to.be.lengthOf(pageSize)
    });

    it('should return the last page', () => {
        const lastPage = paginator(array, totalPages);
        expect(lastPage).to.be.lengthOf(totalItems - ((totalPages - 1) * pageSize))
    });
});