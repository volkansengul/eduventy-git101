const people = [
  { name: "Kutluhan" },
  { name: "Çağrı" },
  { name: "Sena" },
  { name: "Doğu" },
  { name: "Berna" },
  { name: "Aytekin" },
  { name: "Semih" },
  { name: "Halenur" },
  { name: "Ufuk" },
  { name: "Emine" },
  { name: "Mümtaz" },
  { name: "Yaşar" },
];

const listElm = document.getElementById("list");

people.forEach((item, i) => {
  listElm.innerHTML += `<li id="user_${i}">${item.name}</li>`;
});

function getLuckyPerson() {
  let luckyNumber = Math.floor(Math.random() * people.length);
  let person = document.getElementById(`user_${luckyNumber}`);

  for (i = 0; i < people.length; i++) {
    let _person = document.getElementById(`user_${i}`);
    _person.classList.remove("lucky");
    _person.innerText = people[i].name;
  }

  person.classList.add("lucky");
  person.innerText = `${people[luckyNumber].name} - Lucky Person `;
}

console.log("merhaba dünya");

console.log('bunu da başkası yazdı');
