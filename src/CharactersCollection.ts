export class CharactersCollection {
    constructor(public data: string) { }

    get length(): number {
        return this.data.length
    }

    compare(leftIndex: number, rightIndex: number) {
        // TODO: write logic for compare function
    }
}