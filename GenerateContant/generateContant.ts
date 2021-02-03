namespace Firework {

    export interface Titel {
        [type: string]: string;
    }

    export function generateContant(_titelList: Titel[]): void {
        console.log(_titelList);


        for (let titel of _titelList)
            console.log(titel.rocketTitel);
    }

















































}