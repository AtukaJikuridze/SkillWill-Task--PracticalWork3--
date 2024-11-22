// ---------------------------- 1 ----------------------- //

function expo(num, quality, callback) {
  if (quality === 0) {
    return 1;
  } else {
    const result = num * expo(num, quality - 1, callback);
    return callback(result);
  }
}
function identity(x) {
  return x;
}

const result = expo(5, 3, function (result) {
  return result;
});
console.log(result);

// ---------------------------- 2 ----------------------- //
async function myFetchFunction() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users"); //posts ზე არ აკეთებდა გეთ რექუესთს აერორებდა და ამიტომ გავაკეთე იუზერებზე
  const data = await response.json();
  console.log(data);

  data.map((e) => {
    let card = document.createElement("div");
    let h1Name = document.createElement("h1");
    let h1Email = document.createElement("h1");
    let pUsername = document.createElement("p");
    let pPhoneNumber = document.createElement("p");
    card.classList.add("card");
    h1Name.textContent = `Name: ${e.name}`;
    h1Email.textContent = `Email :${e.email}`;
    pUsername.textContent = `Username: ${e.username}`;
    pPhoneNumber.textContent = `Phone : ${e.phone}`;
    card.append(h1Name, h1Email, pUsername, pPhoneNumber);
    document.querySelector(".container").appendChild(card);
  });
}
myFetchFunction();

// ---------------------------- 3 ----------------------- //

const deepCopy = async (object) => {
  return new Promise((resolve, reject) => {
    if (typeof object !== "object") reject("Not a object");
    resolve(JSON.parse(JSON.stringify(object)));
  });
};

const randomObj = {
  name: "avto",
  age: [
    1,
    2,
    3,
    { name1: "nika", ages: [1, 2, 4, 12, 4, 12, { name44: "gio" }] },
  ],
  someArr: [1, 2, 3, true, false, { myName: "avto" }],
};

deepCopy(randomObj).then((e) => console.log(e));
