import { Repository } from "../repository/repository";

const sampleData = [1, 2, 3, 4, 10, "I am data", "another data"];

test("should get all initial data loaded in repository", () => {    
    const repo = new Repository(sampleData);

    expect(repo.getAll().length).toEqual(7);
});

test("should add item to existing data", () => {
    const repo = new Repository(sampleData);

    repo.add("just some random data");

    const dataFromRepo = repo.getAll();

    expect(dataFromRepo.length).toEqual(8);
    expect(dataFromRepo[dataFromRepo.length-1]).toEqual("just some random data");
});

test('should delete first element in the data', () => {
    const repo = new Repository(sampleData);

    repo.removeItem();

    const dataFromRepo = repo.getAll();

    expect(dataFromRepo.length).toEqual(6);
});