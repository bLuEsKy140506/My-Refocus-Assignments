/* CASE#1: Album Store

Use arrays and objects to implement an album store.
The store should have its name, location and a list
of albums. Each album should have its name
and the name of the band.

Implement functions to show the list of albums
in the store and add a new album.
*/

const albumStore = {
  name: "Astrovision",
  location: "SM Department Store",
  albums: [
    {
      album_name: "Halik",
      band_name: "Aegis",
    },
    {
      album_name: "leaves",
      band_name: "ben&ben",
    },
    {
      album_name: "coast to coast",
      band_name: "Westlife",
    },
  ],
  displayAlbum: function () {
    for (item of this.albums) {
      console.log(
        `Album name: ${item.album_name} --- Band Name: ${item.band_name} `
      );
    }
  },
  addAlbum: function (album_name, band_name) {
    this.albums.push({ album_name: album_name, band_name: band_name });
  },
};

albumStore.displayAlbum();
albumStore.addAlbum("Yet to come", "BTS");
albumStore.displayAlbum();

/* CASE#2: Bank Account

Same to our home assignment on closure and callback

*/

function createBankAcc(name, checkBalance) {
  let balance = 500;

  function deposit(amount) {
    balance += amount;
    console.log(`Hi ${name}!, ${amount} has been deposited in your account`);
    console.log(`Your new balance is ${balance}`);
  }
  checkBalance(name, balance);
  return { checkBalance, deposit };
}

function checkBalance(name, balance) {
  console.log(`Hi ${name}!, Your balance is ${balance}`);
}

const bankAccountTest = createBankAcc("naruto", checkBalance);
bankAccountTest.deposit(500);
