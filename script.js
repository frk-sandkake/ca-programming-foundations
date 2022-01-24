// Question 1 ʕ •ᴥ•ʔ
// My answer

const outOfStock = true;

if (outOfStock) {
    console.log("Out of stock");
} else {
    console.log("In stock");
}

// ***************************

// Question 2 (◡ ‿ ◡ ✿)
// My answer

for (let i = 15; i <= 25; i++) {
    if (i === 17 || i === 20) {
        console.log(i);
    }
}

// ***************************

// Question 3 (:3 っ)っ

var games = [
    {
        title: "Grand Theft Auto",
        rating: 4.48,
    },
    {
        title: "Portal",
        rating: 3.5,
    },
    {
        title: "Team Fortress",
        rating: null,
    },
    {
        title: "The Witcher",
        rating: 3.0,
    },
    {
        title: "The Elder Scrolls",
        rating: 2.9,
    },
];

const numberOfGames = games.length;

for (let i = 0; i < numberOfGames; i++) {
    let gameRating = games[i].rating;
    if (gameRating < 3.5 && gameRating !== null) {
        console.log('title: ', games[i].title); // shows just the title (from Hesh)
        console.log('rating: ', games[i].rating); // shows just the rating (from Hesh)
        console.log(games[i]); // shows the object (the one I used)
    }
}

// ***************************

// Question 4 📶
// My answer

function whatIDontLike(aboutSomething) {
    if (typeof aboutSomething === 'string') {
        console.log("I don't like " + aboutSomething);
    } else {
        console.log("Please send in a string");
    }
}

whatIDontLike("when people litter");
whatIDontLike(15);
whatIDontLike(false);
whatIDontLike(null);

// ***************************

// Question 5 🧮

// Answer from Sudi
function sudi(arg1, arg2) {
    if (arg1 >= 0 && arg2 >= 0) {
        return arg2 - arg1;
    } else {
        return "Invalid argument(s)";
    }
}

const subtraction = sudi(null, "2");
console.log(subtraction);

// Answers from Hesh:
// function showNumbers(a, b) {
//     let convertA = Number(a);
//     let convertB = Number(b);
//     if (isNaN(convertA) || isNaN(convertB)) {
//         return "Invalid arguments";
//     } else {
//         return convertA - convertB;
//     }
// }

// const subtraction = showNumbers(1, 42);
// console.log("subtraction:", subtraction);


// My answers:
// function getNumbers(num1, num2) {
//     num1 = Number(num1);
//     num2 = Number(num2);
//     if (isNaN(num1) || isNaN(num2)) {
//         return "Invalid argument(s)";
//     } else {
//         return num1 - num2;
//     }
// }

// var subtraction = getNumbers(1, 42);
// console.log(subtraction);

// ***************************

// Question 6 🛬

function find(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return arr[i];
        }
    }
    return -1;
}

const myFoundValue = find([0, 10, true, 4, "15"], 10);
console.log("Found value: ", myFoundValue);

// My answer:
// function find(arr, value) {
//     var findValue = arr.find(e => e === value);
//     if (findValue) {
//         return findValue;
//     } else {
//         return -1;
//     }
// }

// var array = [0, 10, true, 4, "15"];
// console.log(find(array, 10));
// console.log(find(array, 5));
// console.log(find(array, true));

// ***************************

// Question 7.
// My answer

var toys = [
    {
        name: "Lego",
        price: 15.6,
    },
    {
        name: "Master of the Universe",
        price: "28.3",
    },
    {
        name: "Barbie",
        price: null,
    },
    {
        name: "Mr Potato Head",
        price: 89.99,
    },
];

let theTotalSum = 0;

for (let i = 0; i < toys.length; i++) {
    // console.log(toys[i].price);
    toys[i].price = Number(toys[i].price);
    // console.log(toys[i].price);
    theTotalSum += toys[i].price;
}

console.log("Total Sum: ", theTotalSum);

// ***************************