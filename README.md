# Book Search Application

This is a simple React application that allows users to search for books and add them to their personal bookshelf using local storage.

## Prerequisites

- Node.js (version 14 or above)
- npm (version 6 or above) or yarn

## Setup Instructions

Follow these steps to set up the project locally:

## Download The code 

Install dependencies:

Since the node_modules directory is not included in the repository, you'll need to install the project dependencies. Run the following command in the project directory:

## npm install


Run the application:

Once the dependencies are installed, you can start the development server with the following command:


## npm start

## Description of Book Search Application Functionality

1. Searching for Books:

The application fetches an initial list of books from the Open Library API based on a predefined query.
Users can search for books by typing in the search input. As the user types, the list of displayed books updates in real-time to match the query.
The search filters books based on their titles, making it easy for users to find specific books.
2. Adding Books to Bookshelf:

Users can add books to their personal bookshelf by clicking the "Add to Bookshelf" button on any book card.
Added books are stored in the browser's local storage, allowing the bookshelf to persist even after the page is refreshed.
3. Viewing and Managing Bookshelf:

The bookshelf page displays all the books that the user has added.
Users can navigate to the bookshelf page to view their saved books.
A "Clear Bookshelf" button allows users to remove all books from their bookshelf, which also clears the local storage.
4. Responsive Design:

The application is designed to be responsive, ensuring a good user experience on both desktop and mobile devices.
Layouts adjust to different screen sizes using CSS media queries, making the interface user-friendly on smaller screens like tablets and smartphones.
Key Features:
Real-Time Search: Immediate feedback as users type, enhancing the search experience.
Local Storage Integration: Persistence of user data without a backend server.
Clear All Functionality: Easy management of the bookshelf with a single click to clear all saved books.
Responsive Design: Optimized for both desktop and mobile usage, providing a seamless experience across devices.