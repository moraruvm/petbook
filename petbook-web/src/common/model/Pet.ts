interface Pet {
    id: number,
    name: string,
    mainImage: string,
    images?: Array<string>,
    rating: number
}

export default Pet