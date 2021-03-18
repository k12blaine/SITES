/* 1. Pick your favorite movie.
      Create an object below named myMovie with properties that represent the information (title, genre, year).

*/
    var myMovie = {
      title: 'Colombiana',
      genre: 'Action',
      year: 2011
    }




/* 2. Write another line of code that adds a new property to your movie called netflix and set it to true or false based
      on if the movie can currently be found on Netflix.
     (Note: Don't modify your movie creation code that you wrote above! Do this step in a separate line of code.)
     *Remember, true or false are boolean data types
*/
      netflix: false;



/* 3. Add and call a method (function inside of a property) to your movie called playMovie that prints "The movie is now
      playing on Netflix" or "The movie is unavailable on Netflix" based on the value of the netflix property.
    (Note: Again, don't modify your previous code! Do this step by writing a new line of code.)
*/
//define method
  playMovie : function() {
    console.log("The movie is unavailable on Netflix")
  }

//call method
    mymovie.playMovie()

/* 4. Recreate the following array by defining a Book constructor and creating 3 book objects from it (book1, book2, and book3),
      and then adding them to array library:
var library = [
   {                                                                               {
       author: 'Bill Gates',                                                        author:'JK. Rowling',
       title: 'The Road Ahead',                                                      Title: 'Harry Potter',
       readingStatus: true                                                            readingstatus: Fiction

   },                                                                               },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games',
       readingStatus: false
   }];
*/

//Define object constructor
function Book(author, title, readingStatus)
{
  this.author = author;
  this.title = title;
  this.readingStatus = readingStatus;

}

// 3function calls
var book1 = newBook("Bill Gates", "The Road Ahead", true)
var book2 = newBook("Bill Gates", "The Road Ahead", true)
var book3 = newBook("Bill Gates", "The Road Ahead", true)

//create array
var library = [book1, book2, book3];
