const home = document.getElementById('home')
const about = document.getElementById('about')
const skill = document.getElementById('skill')
const proyect = document.getElementById('proyect')
const contact = document.getElementById('contact')
const container = document.getElementById('container-content')



home.addEventListener('click', () => {
  container.innerHTML=`
  <section class="home">  
  <h4>Hola! Soy
    <h1>Kamaly Zapana
      <p>Hago lo que no sé, para aprender cómo hacerlo.</p>
      <p class="maquina">
        Frontend Developer<span>&#160;</span></p>
    </h1>
  </h4>
</section>`
  console.log('home')
})

about.addEventListener('click', () => {
  container.innerHTML=`
  <section class="about">
  <h1>MI HISTORIA</h1>
  <article class="text">
    <p>
      Me enamoré de este mundo a los 11 años, con mi primer pc de escritorio. Este me hizo descubrir un mundo de nuevas
      alternativas.
    </p>
    <p>
      Quería solucionar cualquier problema relacionado a mi PC y estudié ensamblaje a los 12 años; Luego junto a unos
      amigos extranjeros a quienes conocí en foros, creamos una radio en línea. Aprendí a editar audio y video para
      generar contenido.
    </p>
    <p>
      Descubrí que podía estar días buscando información específica; y fue así como abrí mi primer Blog personal con todo el contenido
      que iba descubriendo. <br> Al termino del colegio, tuve dificultades para encontrar un lugar donde me enseñen lo que tanto había deseado,
      "Crear tecnología"; sin embargo, la falta de un referente me llevó a ser autodidacta.
    </p>
    <p>
      Finalmente, elegí estudiar computación e informática, y fue en ese camino que encontré la oportunidad de pertenecer
      a LABORATORIA.
    </p>
    <p>
      Actualmente soy egresada en la especialidad de Frontend en donde he repotenciado mi metodología de aprendizaje
      y habilidades blandas. En mi encontrarás mucha disposición y ganas de aprender. Sería un gusto poder trabajar
      contigo.
    </p>
  </article>
</section>`
  console.log('about')
})

skill.addEventListener('click', () => {
  console.log('skill')
  container.innerHTML=`
  <section class="skill">
  <h1>CONOCIMIENTOS</h1>
  <figure class="group__figure">
    <figure><img class="images" src="assets/icons/javascript.svg" alt="javascript"/>
      <figcaption>javascript.svg</figcaption>
    </figure>
    <figure><img class="images" src="assets/icons/gulp.png" alt="javascript"/>
      <figcaption>gulp.png</figcaption>
    </figure>
    <figure><img class="images" src="assets/icons/css3.svg" alt="javascript"/>
      <figcaption>css3.svg</figcaption>
    </figure>
    <figure><img class="images" src="assets/icons/html5.svg" alt="javascript"/>
      <figcaption>html5.svg</figcaption>
    </figure>
    <figure><img class="images" src="assets/icons/github.png" alt="javascript"/>
      <figcaption>github.png</figcaption>
    </figure>
    <figure><img class="images" src="assets/icons/react.svg" alt="javascript"/>
      <figcaption>react.svg</figcaption>
    </figure>
    <figure><img class="images" src="assets/icons/bootstrap.png" alt="javascript"/>
      <figcaption>bootstrap.png</figcaption>
    </figure>
    <figure><img class="images" src="assets/icons/materialize.png" alt="javascript"/>
      <figcaption>materialize.png</figcaption>
    </figure>
    <figure><img class="images" src="assets/icons/apirest.png" alt="javascript"/>
      <figcaption>apirest.png</figcaption>
    </figure>
    <figure><img class="images" src="assets/icons/aws_cognito.png" alt="javascript"/>
      <figcaption>aws_cognito.png</figcaption>
    </figure>
    <figure><img class="images" src="assets/icons/jquery.png" alt="javascript"/>
      <figcaption>jquery.png</figcaption>
    </figure>
    <figure><img class="images" src="assets/icons/flexbox-css.png" alt="javascript"/>
      <figcaption>flexbox-css.png</figcaption>
    </figure>
    <figure><img class="images" src="assets/icons/jira.png" alt="javascript"/>
      <figcaption>jira.png</figcaption>
    </figure>
  </figure>
</section>`
})

proyect.addEventListener('click', () => {
  container.innerHTML=`
  <section class="proyect">
  <h1>MIS PROYECTOS</h1>
  <div class="star"></div>
  <div class="group__proyect">
    <figure><a href="https://kamalyzl.github.io/card-validator/public/index.html" target="_blank"><img class="proyect__img" src="https://user-images.githubusercontent.com/32285958/38772293-a4e3ed08-3ff8-11e8-9bbc-f807c755830b.PNG" alt="proyecto"/></a>
      <figcaption class="cards__text">
        <h2>Libreria ValidCard</h2>
        <p>Html 5.2 - Css - EDGrid - Google Fonts - Fontawesome</p>
        <p>
          ValidCard es un libreria basada en el algoritmo de Luhn, te ayudará a saber si una tarjeta de crédito es
          válida o invalida. Puedes usar datos como: fecha de vencimiento, código de verificación (cvv) y nombre
          completo que aparece en la tarjeta.
        </p><a class="card_icon" href="https://github.com/kamalyzl/card-validator" target="_blank"><i class="fab fa-github"></i></a>
      </figcaption>
    </figure>
    <figure><a href="https://kamalyzl.github.io/card-validator/public/index.html" target="_blank"><img class="proyect__img" src="https://user-images.githubusercontent.com/32285958/38772293-a4e3ed08-3ff8-11e8-9bbc-f807c755830b.PNG" alt="proyecto"/></a>
      <figcaption class="cards__text">
        <h2>Libreria ValidCard</h2>
        <p>Html 5.2 - Css - EDGrid - Google Fonts - Fontawesome</p>
        <p>
          ValidCard es un libreria basada en el algoritmo de Luhn, te ayudará a saber si una tarjeta de crédito es
          válida o invalida. Puedes usar datos como: fecha de vencimiento, código de verificación (cvv) y nombre
          completo que aparece en la tarjeta.
        </p><a class="card_icon" href="https://github.com/kamalyzl/card-validator" target="_blank"><i class="fab fa-github"></i></a>
      </figcaption>
    </figure>
    <figure><a href="https://kamalyzl.github.io/card-validator/public/index.html" target="_blank"><img class="proyect__img" src="https://user-images.githubusercontent.com/32285958/38772293-a4e3ed08-3ff8-11e8-9bbc-f807c755830b.PNG" alt="proyecto"/></a>
      <figcaption class="cards__text">
        <h2>Libreria ValidCard</h2>
        <p>Html 5.2 - Css - EDGrid - Google Fonts - Fontawesome</p>
        <p>
          ValidCard es un libreria basada en el algoritmo de Luhn, te ayudará a saber si una tarjeta de crédito es
          válida o invalida. Puedes usar datos como: fecha de vencimiento, código de verificación (cvv) y nombre
          completo que aparece en la tarjeta.
        </p><a class="card_icon" href="https://github.com/kamalyzl/card-validator" target="_blank"><i class="fab fa-github"></i></a>
      </figcaption>
    </figure>
    <figure><a href="https://kamalyzl.github.io/card-validator/public/index.html" target="_blank"><img class="proyect__img" src="https://user-images.githubusercontent.com/32285958/38772293-a4e3ed08-3ff8-11e8-9bbc-f807c755830b.PNG" alt="proyecto"/></a>
      <figcaption class="cards__text">
        <h2>Libreria ValidCard</h2>
        <p>Html 5.2 - Css - EDGrid - Google Fonts - Fontawesome</p>
        <p>
          ValidCard es un libreria basada en el algoritmo de Luhn, te ayudará a saber si una tarjeta de crédito es
          válida o invalida. Puedes usar datos como: fecha de vencimiento, código de verificación (cvv) y nombre
          completo que aparece en la tarjeta.
        </p><a class="card_icon" href="https://github.com/kamalyzl/card-validator" target="_blank"><i class="fab fa-github"></i></a>
      </figcaption>
    </figure>
    <figure><a href="https://kamalyzl.github.io/card-validator/public/index.html" target="_blank"><img class="proyect__img" src="https://user-images.githubusercontent.com/32285958/38772293-a4e3ed08-3ff8-11e8-9bbc-f807c755830b.PNG" alt="proyecto"/></a>
      <figcaption class="cards__text">
        <h2>Libreria ValidCard</h2>
        <p>Html 5.2 - Css - EDGrid - Google Fonts - Fontawesome</p>
        <p>
          ValidCard es un libreria basada en el algoritmo de Luhn, te ayudará a saber si una tarjeta de crédito es
          válida o invalida. Puedes usar datos como: fecha de vencimiento, código de verificación (cvv) y nombre
          completo que aparece en la tarjeta.
        </p><a class="card_icon" href="https://github.com/kamalyzl/card-validator" target="_blank"><i class="fab fa-github"></i></a>
      </figcaption>
    </figure>
    <figure><a href="https://kamalyzl.github.io/card-validator/public/index.html" target="_blank"><img class="proyect__img" src="https://user-images.githubusercontent.com/32285958/38772293-a4e3ed08-3ff8-11e8-9bbc-f807c755830b.PNG" alt="proyecto"/></a>
      <figcaption class="cards__text">
        <h2>Libreria ValidCard</h2>
        <p>Html 5.2 - Css - EDGrid - Google Fonts - Fontawesome</p>
        <p>
          ValidCard es un libreria basada en el algoritmo de Luhn, te ayudará a saber si una tarjeta de crédito es
          válida o invalida. Puedes usar datos como: fecha de vencimiento, código de verificación (cvv) y nombre
          completo que aparece en la tarjeta.
        </p><a class="card_icon" href="https://github.com/kamalyzl/card-validator" target="_blank"><i class="fab fa-github"></i></a>
      </figcaption>
    </figure>
  </div>
</section>`
  console.log('proyect')
})

contact.addEventListener('click', () => {
  console.log('contact')
})
 