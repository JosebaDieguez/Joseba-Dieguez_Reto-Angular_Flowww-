import { Episode } from "./episode";
import { Origin } from "./origin";

export interface ICharacter {
         id?: number;
         name?: string;
         status?: string;
         species?: string;
         type?: string;
         gender?: string;
         origin?: Origin;
         location?: Location;
         image?: string;
         episode?: Episode[];
         url?: string;
         created?: string;
}

export class Character implements ICharacter {
    constructor(
        public id?: number,
        public name?: string,
        public status?: string,
        public species?: string,
        public type?: string,
        public gender?: string,
        public origin?: Origin,
        public location?: Location,
        public image?: string,
        public episode?: Episode[],
        public url?: string,
        public created?: string,
        ) {}
}
