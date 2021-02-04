namespace Firework {

    export interface Titel {
        rocketTitel: string;
    }

    export function generateContent(_titelList: Titel[]): void {
        console.log(_titelList);
        let group: HTMLElement | null = null;
        let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#fireworkTitel");
        group = createSelect(_titelList);
        
        if (fieldset && group) //wenn das Fieldset UND (&&) die Gruppe definiert ist, dann kannst du die group als Kind anhängen
            fieldset.appendChild(group);
    }




    function createSelect(_titelList: Titel[]): HTMLElement | null {

        // let group: HTMLDivElement = document.createElement("div");
        let selection: HTMLSelectElement = document.createElement("select");
        selection.name = "LoadedTitels";
        //selection.id = "Test";

        for (let titel of _titelList) {
            let option: HTMLOptionElement = document.createElement("option");

            option.setAttribute("name", titel.rocketTitel);
            option.value = option.textContent = titel.rocketTitel;

            selection.appendChild(option);
            // group.appendChild(selection);



        }
        return selection;
    }






















}














































