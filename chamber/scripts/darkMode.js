const modeButton = document.querySelector("#mode");
const body = document.body;
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🌒")) {
        body.style.background = "#000000";
        body.style.color = "#3e8f40";
        main.style.background = "#000000";
        main.style.color = "#3e8f40";
        modeButton.textContent = "🔆";
    } else {
        body.style.background = "#eeeeee";
        body.style.color = "#000000";
        main.style.background = "#eeeeee";
        main.style.color = "#000000";
        modeButton.textContent = "🌒";
    }
});