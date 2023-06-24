import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor() { }
  getBooks()
{
  return [
    {
      name: "Clean Code",
      author:  "Rober C martin",
      image:  "https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg",
      amount: 700,

    },
    {
      name:  "The Pragmatic Programmer",
      author: "Andrew Hunt",
      image: "https://books.google.com.bd/books/content?id=5wBQEp6ruIAC&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U1571Ssmd_XMXP7jp8SQA5id0GAMw&w=1280",
      amount: 800,
    },
    {
      name: "Introduction to Algorithms",
      author:  "Thomas H. Cormen",
      image:  "https://m.media-amazon.com/images/I/41SNoh5ZhOL._SX440_BO1,204,203,200_.jpg",
      amount: 500,
    },
    {
      name:  "Code Complete",
      author: "Steve McConnell",
      image:  "https://learning.oreilly.com/library/cover/0735619670/250w/",
      amount: 600,

    }
  ];
}
}
