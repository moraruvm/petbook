import Pet from "../../common/model/Pet";

// https://dog.ceo/dog-api/
export class MockData {
    public static PETS: Array<Pet> = [
        { id: 0, name: "Fido", mainImage: "https://images.dog.ceo/breeds/terrier-sealyham/n02095889_5282.jpg", rating: 2 },
        { id: 1, name: "Dido", mainImage: "https://images.dog.ceo/breeds/terrier-sealyham/n02095889_2977.jpg", rating: 2.3 },
        { id: 2, name: "Ringo", mainImage: "https://images.dog.ceo/breeds/ovcharka-caucasian/IMG_20191108_140417.jpg", rating: 4 },
        { id: 3, name: "Bingo", mainImage: "https://images.dog.ceo/breeds/husky/n02110185_12120.jpg", rating: 4.8 },
        { id: 4, name: "Wingo", mainImage: "https://images.dog.ceo/breeds/mountain-swiss/n02107574_2283.jpg", rating: 4.6 },
        { id: 5, name: "Dingo", mainImage: "https://images.dog.ceo/breeds/pekinese/n02086079_9151.jpg", rating: 1.2 },
        { id: 6, name: "Flingo", mainImage: "https://images.dog.ceo/breeds/dingo/n02115641_14084.jpg", rating: 4.3 },
        { id: 7, name: "Blacky", mainImage: "https://images.dog.ceo/breeds/terrier-sealyham/n02095889_1208.jpg", rating: 3.2 },
        { id: 8, name: "Flacky", mainImage: "https://images.dog.ceo/breeds/bouvier/n02106382_3770.jpg", rating: 2 },
        { id: 9, name: "Dracky", mainImage: "https://images.dog.ceo/breeds/frise-bichon/3.jpg", rating: 2.1 },
        { id: 10, name: "Wacky", mainImage: "https://images.dog.ceo/breeds/bulldog-english/murphy.jpg", rating: 3.8 },
        { id: 11, name: "Lacky", mainImage: "https://images.dog.ceo/breeds/cotondetulear/100_2013.jpg", rating: 4.5 },
        { id: 12, name: "Spot", mainImage: "https://images.dog.ceo/breeds/terrier-dandie/n02096437_1532.jpg", rating: 1 }
    ].sort((a, b) => b.rating - a.rating)
}