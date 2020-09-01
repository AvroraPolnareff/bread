import {RivenPageParser} from "../parsers/RivenParser";
import {rivenPage} from "./testData";

test("parses the page", () => {
    const parser = new RivenPageParser(rivenPage)
    expect(parser.parse()).toEqual({"bids": [], "createdAt": "8 minutes ago", "description": "", "updatedAt": "8 minutes ago"})
})