import { cleanup, render, fireEvent,screen } from '@solidjs/testing-library';
import {Counter} from "./counter";

describe("<Counter />", () => {
    afterEach(() => cleanup())

    it('Mount', async () => {
        const {container} = render(Counter)
        expect(container).toBeTruthy()
        expect(container.innerHTML).toContain("<button>0</button>")
        // expect(container.innerHTML).toMatchSnapshot()
    })

    it("Click", async () => {
        render(Counter)
        const btn = screen.getByRole("button")
        fireEvent.click(btn);
        expect(btn.innerHTML).toBe("1")
        fireEvent.click(btn);
        expect(btn.innerHTML).toBe("2")
    })
})