import { faker } from "@faker-js/faker";
import { delay } from "./utils";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface Book {
  id: string;
  title: string;
  description: string;
  author: string;
  genre: string;
  publisher: string;
  imageUrl: string;
}

const generateUser = (): User => {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
  };
};

const generateBestSeller = (): Book => {
  return {
    id: faker.string.uuid(),
    title: faker.book.title(),
    description: faker.lorem.paragraphs(5, "\n\n"),
    author: faker.book.author(),
    genre: faker.book.genre(),
    publisher: faker.book.publisher(),
    imageUrl: faker.image.urlPicsumPhotos({ width: 800, height: 400 }),
  };
};

const generateBooks = (): Book[] => {
  const books = new Array(10).fill(0).map(() => {
    return {
      id: faker.string.uuid(),
      title: faker.book.title(),
      description: faker.lorem.paragraphs(5, "\n\n"),
      author: faker.book.author(),
      genre: faker.book.genre(),
      publisher: faker.book.publisher(),
      imageUrl: faker.image.urlPicsumPhotos({ width: 800, height: 400 }),
    };
  });

  return books;
};

export const getAllBooks = async (): Promise<Book[]> => {
  await delay(500);

  return generateBooks();
};

export const getBestSeller = async (): Promise<Book> => {
  await delay(500);

  return generateBestSeller();
};

export const getUser = async (): Promise<User> => {
  await delay(500);

  return generateUser();
};
