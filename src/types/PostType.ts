export interface New {
    id: number,
    type: string,
    name: string,
    img: any,
    intro: string,
    conten: [
    ]
}
export interface Post {
    id: number,
    title: string,
    img: string[],
    location: string,
    date: string
}