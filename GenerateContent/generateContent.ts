namespace Firework {

    export interface Rocket {
        rocketTitel: string;
        explosionSize: number;
        particlecolor: string;
        particleshape: string;
        quantity: number;
    }

    export function generateContent(_titelList: Rocket[]): void {

        let group: HTMLElement | null = null;
        let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#fireworkTitel");
        group = createSelect(_titelList);

        if (fieldset && group) //wenn das Fieldset UND (&&) die Gruppe definiert ist, dann kannst du die group als Kind anhängen
            fieldset.appendChild(group);
    }


    function createSelect(_titelList: Rocket[]): HTMLElement | null {

        let selection: HTMLSelectElement = document.createElement("select");
        selection.name = "LoadedTitels";
        selection.addEventListener("change", getDataFromServer);

        for (let titel of _titelList) {
            let option: HTMLOptionElement = document.createElement("option");
            option.setAttribute("name", titel.rocketTitel);
            option.value = option.textContent = titel.rocketTitel;
            selection.appendChild(option);
        }
        return selection;
    }
}















































