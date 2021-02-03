namespace Firework {

    export interface Titel {
        rocketTitel: string;
    }

    export function generateContent(_titelList: Titel[]): void {
        console.log(_titelList);
        let nameOfRockets: Titel[] = _titelList;
        let group: HTMLElement | null = null;
        group = createSelect(nameOfRockets);
        let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#fireworkTitel");
        if (fieldset && group) //wenn das Fieldset UND (&&) die Gruppe definiert ist, dann kannst du die group als Kind anhängen
            fieldset.appendChild(group);
    }




    function createSelect(_nameOfRocket: Titel[]): HTMLElement | null {

       // let group: HTMLDivElement = document.createElement("div");
        let selection: HTMLSelectElement = document.createElement("select");
        selection.name = "LoadedTitels";

        for (let userName of _nameOfRocket) {
            let option: HTMLOptionElement = document.createElement("option");
          
            option.setAttribute("name", userName.rocketTitel);
            option.value = option.textContent =  userName.rocketTitel;
          
            selection.appendChild(option);
           // group.appendChild(selection);



        }
        return selection;
    }






















}















































