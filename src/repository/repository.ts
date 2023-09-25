export class Repository {

    private data: any[];
    constructor(__data: any[]) {
        this.data = __data;
    }

    public add(newItem: any) {
        this.data = [...this.data, newItem];
    }

    /**
     * getAll
     */
    public getAll(): any[] {
        return this.data;
    }
    
    public removeItem() {
        this.data = this.data.filter((i, idx) => idx !== 0);
    }
}