let myProfile = {
    name: "Gage Strong",
    photo: "./images/mypic.jpg",
    favoriteFoods: ["Steak", "Cheese Curds", "Chicken Alfredo"],
    hobbies: ["Funko Pop Collecting", "Video Games", "Reading"],
    placesLived: [],
  };
  
  myProfile.placesLived.push(
    {
      place: 'Cedar City UT',
      length: '3 years'
    },
    {
      place: 'Eagle Mountain, UT',
      length: '19 years'
    },
    {
      place: 'Orem, UT',
      length: '1 year'
    }
  );
  
  // Assign the value of the name property of the myProfile object to the HTML element with an ID of name.
  document.querySelector('#name').textContent = myProfile.name;
  
  // Assign the value of the photo property as the src attribute of the HTML <img> with an ID of photo.
  document.querySelector('#photo').src = myProfile.photo;
  
  // Assign the value of the name property as the alt attribute of the HTML <img> with an ID of photo.
  document.querySelector('#photo').alt = myProfile.name;
  
  // Display favorite foods
  myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });
  
  // Display hobbies
  myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });
  
  // Display places lived
  myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
  
    let dd = document.createElement('dd');
    dd.textContent = place.length;
  
    let dl = document.querySelector('#places-lived');
    dl.appendChild(dt);
    dl.appendChild(dd);
  });