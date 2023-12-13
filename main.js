/*let myHeading = document.querySelector("h1"); // с помощью вызова функции querySelector(), захватив ссылку на наш заголовок и сохранив её в переменной, названной myHeading
myHeading.textContent = "Hello world!";//После этого, вы устанавливаете значение переменной myHeading в textContent свойство (которое представляет собой контент заголовка) "Hello world!"


  document.querySelector("html").onclick = function () {
    alert("Ouch! Stop poking me!");// ФУНКЦИЯ  Наиболее очевидным является событие клика, которое вызывается браузером, когда мы щёлкаем по чему-то мышью. Для демонстрации этого события введите следующую команду в вашу консоль, а затем щёлкните по текущей веб-странице:
  };
  */

  let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "cat.jpg") {
    myImage.setAttribute("src", "cat2.jpg");
  } else {
    myImage.setAttribute("src", "cat.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter your name.");//Эта функция содержит функцию prompt() (en-US), которая вызывает диалоговое окно, немного похожее на alert() кроме того, что prompt() просит пользователя ввести некоторые данные, и сохраняет эти данные в переменной, после того как пользователь нажимает OK.
    localStorage.setItem("name", myName);//Далее, мы вызываем API под названием localStorage, который позволяет нам хранить данные в браузере и извлекать их позднее.Мы используем функцию setItem() из localStorage для создания и хранения данных в свойстве под названием 'name', и устанавливаем это значение в переменную myName, которая содержит имя введённое пользователем.
    myHeading.textContent = "Have a wonderful day <3, " + myName;// В конце мы устанавливаем textContent заголовку в виде строки и имени пользователя.
  }
  
  if (!localStorage.getItem("name")) {//Этот блок сначала использует оператор отрицания (логическое НЕ, представленное в виде !) чтобы проверить, существуют ли данные в пункте name. Если нет, то функция setUserName() запускается для их создания. Если данные существуют (то есть, пользователь установил его во время предыдущего посещения), мы извлекаем сохранённое имя, с помощью getItem() и устанавливаем textContent заголовку в виде строки плюс имя пользователя, так же, как мы делали внутри setUserName().
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Have a wonderful day <3, " + storedName;
  }
  
  myButton.onclick = function () {
    setUserName();
  };
  