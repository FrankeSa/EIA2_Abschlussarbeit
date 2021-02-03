namespace Firework {

    export interface Titel {
        rocketTitel: string;
    }

    export function generateContent(_titelList: Titel[]): void {
        console.log(_titelList);


        for (let titel of _titelList) {

            let nameOfRocket: string = titel.rocketTitel;
            let group: HTMLElement | null = null;
            group = createSelect(nameOfRocket);
            let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#fireworkTitel");
            if (fieldset && group) //wenn das Fieldset UND (&&) die Gruppe definiert ist, dann kannst du die group als Kind anhängen
                fieldset.appendChild(group);
        }



    }




    function createSelect(_nameOfRocket: string): HTMLElement | null {

        let group: HTMLDivElement = document.createElement("div");
        let selection: HTMLSelectElement = document.createElement("select");
        selection.name = "LoadedTitels";
        let option: HTMLOptionElement = document.createElement("option");
        option.setAttribute("name", _nameOfRocket);
        option.value = option.textContent = _nameOfRocket;
        selection.appendChild(option);
        group.appendChild(selection);




        return group;
    }






















}















































