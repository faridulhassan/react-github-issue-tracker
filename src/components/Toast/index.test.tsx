import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

/*Components*/
import Toast from "./index";

afterEach(cleanup);

describe("Test the loader", () => {
    test("The loader", () => {
        const message = 'Something wrong!';
        render(<Toast message={message} />);
        const toast = screen.getByTestId("toast");
        expect(toast).toBeInTheDocument();
        expect(toast.innerHTML).toHaveTextContent(message);
    });
});
