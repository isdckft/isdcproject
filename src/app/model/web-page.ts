export class WebPage {
    constructor(
        public id : number,
        public pagetype: number,
        public name: string,
        public about: string,
        public url: string,
        public official: boolean,
        public date: Date
      ) {  }
}
