import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

/*Components*/
import Loader from "./index";

afterEach(cleanup);

describe("Test the loader", () => {
    test("The loader", () => {
        render(<Loader />);
        const loader = screen.getByTestId("loader-wrapper");
        expect(loader).toBeInTheDocument();
    });
});
