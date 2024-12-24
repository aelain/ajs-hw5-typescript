import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';
import Smartphone from '../domain/Smartphone';

const movie = new Movie(5001, 'Fifth Element', 1997, 'France, Great Britain, USA', 'It Mu5t Be Found', 'Science fiction, action, comedy, romance', 126, 300);

test('New card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('Adding a movie', () => {
  const cart = new Cart();
  cart.add(movie);

  expect(cart.items[0].name).toBe('Fifth Element');
});

test('Calculating the total cost', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(movie);

  expect(cart.totalCost).toBe(3200);
});

test('Calculating the total cost with discount', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(movie);

  expect(cart.getTotalCostWithDiscount(5)).toBe(3040);
});

test('Removal a movie', () => {
  const cart = new Cart();
  cart.add(movie);
  cart.remove(5001);

  expect(cart.items.length).toBe(0);
});

test('Movie cannot be removed', () => {
  const cart = new Cart();
  cart.add(movie);
  cart.remove(5000);

  expect(cart.items.length).not.toBe(0);
});

const cart = new Cart();
cart.add(new Smartphone(3001, 'Samsung Galaxy A55 5G', 6.6, 256, 8, 50, 5000, 29000, 1));
cart.add(new Smartphone(3001, 'Samsung Galaxy A55 5G', 6.6, 256, 8, 50, 5000, 29000, 1));

test('Adding the same smartphones', () => {
  expect(cart.items.length).toBe(1);
});

test('Adding the same smartphones - count of items', () => {
  expect(cart.items[0].quantity).toBe(2);
});

test('Calculating the total cost including smartphones', () => {
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(movie);

  expect(cart.totalCost).toBe(61200);
});

test('Calculating smartphones the total cost including smartphones with discount', () => {
  expect(cart.getTotalCostWithDiscount(5)).toBe(58140);
});

test('Reducing the smartphones', () => {
  cart.reduceQuantity(3001);

  expect(cart.items[0].quantity).toBe(1);
});

test('Reducing the smartphones to 0 = removing', () => {
  cart.reduceQuantity(3001);

  expect(cart.items[0].quantity).toBeUndefined();
});

test('Reducing the smartphones - not found', () => {
  cart.reduceQuantity(3001);

  expect(cart.items[0].quantity).toBeUndefined();
});