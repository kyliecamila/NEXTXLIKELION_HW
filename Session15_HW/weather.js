const input = document.querySelector("#city");
const button = document.querySelector("#submit");
const weatherBox = document.querySelector("#weatherBox");
const weatherBox2 = document.querySelector("#weatherBox2");

const API_KEY = "c0d31ceeee717f971f47dd343c9b8195";

button.addEventListener("click", async () => {
  //input의 값을 가져와서 도시이름으로 url에 넣는다.
  const city = input.value;

  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    console.log(res);

    //res에서 원하는 값 가져오기
    const { main, description, icon } = res.data.weather[0];
    const temp = Math.round(res.data.main.temp - 273.15);
    const name = res.data.name;

    //사용자에게 보여주기
    weatherBox.innerHTML = `
      <div class="name">${name}</div>
      <img class="icon" src="http://openweathermap.org/img/w/${icon}.png">
      <div class="main">${main}</div>
      <div class="description">${description}</div>
      <div class="temp">${temp}°C</div>
    `;
  } catch (error) {
    console.log(error);
  }
  const city2 = "London";
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city2}&appid=${API_KEY}`
    );
    console.log(res);

    //res에서 원하는 값 가져오기
    const { main, description, icon } = res.data.weather[0];
    const temp = Math.round(res.data.main.temp - 273.15);
    const name = res.data.name;

    //사용자에게 보여주기
    weatherBox2.innerHTML = `
      <div class="name">${name}</div>
      <img class="icon" src="http://openweathermap.org/img/w/${icon}.png">
      <div class="main">${main}</div>
      <div class="description">${description}</div>
      <div class="temp">${temp}°C</div>
    `;
  } catch (error) {
    console.log(error);
  }

  const city3 = "Madrid";
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city3}&appid=${API_KEY}`
    );
    console.log(res);

    //res에서 원하는 값 가져오기
    const { main, description, icon } = res.data.weather[0];
    const temp = Math.round(res.data.main.temp - 273.15);
    const name = res.data.name;

    //사용자에게 보여주기
    weatherBox3.innerHTML = `
      <div class="name">${name}</div>
      <img class="icon" src="http://openweathermap.org/img/w/${icon}.png">
      <div class="main">${main}</div>
      <div class="description">${description}</div>
      <div class="temp">${temp}°C</div>
    `;
  } catch (error) {
    console.log(error);
  }

  
  const city4 = "New York";
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city4}&appid=${API_KEY}`
    );
    console.log(res);

    //res에서 원하는 값 가져오기
    const { main, description, icon } = res.data.weather[0];
    const temp = Math.round(res.data.main.temp - 273.15);
    const name = res.data.name;

    //사용자에게 보여주기
    weatherBox4.innerHTML = `
      <div class="name">${name}</div>
      <img class="icon" src="http://openweathermap.org/img/w/${icon}.png">
      <div class="main">${main}</div>
      <div class="description">${description}</div>
      <div class="temp">${temp}°C</div>
    `;
  } catch (error) {
    console.log(error);
  }
});
