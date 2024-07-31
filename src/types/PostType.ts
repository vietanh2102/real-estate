export interface New {
    id: number,
    type: string,
    name: string,
    img: any,
    intro: string,
    conten: {
        main: string
    }
}
export interface Post {
    id: number,
    title: string,
    owner: {
        name: string,
        phone: number | string
    },
    type: string,
    img: string[],
    location: string,
    info: {
        decription: string
    },
    detail: {
        area: number,
        facade: number,
        price: number,
        room: number,
        floor: number,
        tolet: number
    }
    date: string
}