"use strict";
window.addEventListener("DOMContentLoaded", () => {
    const plugs = new Plugs("button");
});
class Plugs {
    /**
     * @param buttonEl 
     */
    constructor(buttonEl) {
        var _a;
        this.button = document.querySelector(buttonEl);
        (_a = this.button) === null || _a === void 0 ? void 0 : _a.addEventListener("click", this.toggleTheme.bind(this));
    }

    toggleTheme() {
        var _a, _b;
        const pressed = ((_a = this.button) === null || _a === void 0 ? void 0 : _a.getAttribute("aria-pressed")) === "true";
        (_b = this.button) === null || _b === void 0 ? void 0 : _b.setAttribute("aria-pressed", `${!pressed}`);
        document.documentElement.setAttribute("data-dark", `${pressed}`);
    }
}