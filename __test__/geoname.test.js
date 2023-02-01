import { geonameAPI } from "../src/client/js/geoname"

// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
describe("Testing the submit functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the geonameAPI() function", () => {
        
        expect(geonameAPI).toBeDefined();
    })
});