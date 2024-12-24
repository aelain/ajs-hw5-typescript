import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';
import Smartphone from './domain/Smartphone';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(5001, 'Fifth Element', 1997, 'France, Great Britain, USA', 'It Mu5t Be Found', 'Science fiction, action, comedy, romance', 126, 300));
cart.add(new Smartphone(3001, 'Samsung Galaxy A55 5G', 6.6, 256, 8, 50, 5000, 28958, 1));

console.log(cart.items);
