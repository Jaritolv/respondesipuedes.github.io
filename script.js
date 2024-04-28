document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btnIniciar').addEventListener('click', iniciarJuego);

    let preguntas = [
        { pregunta: "¿Cuál es la capital de Francia?", respuestas: ["París", "Madrid", "Berlín", "Londres"], correcta: 0 },
        { pregunta: "¿Quién escribió 'Don Quijote de la Mancha'?", respuestas: ["Miguel de Cervantes", "Lope de Vega", "Garcilaso de la Vega", "Federico García Lorca"], correcta: 0 },
        { pregunta: "¿Qué planeta es conocido como el Planeta Rojo?", respuestas: ["Marte", "Venus", "Júpiter", "Saturno"], correcta: 0 },
        { pregunta: "¿En qué año cayó el Muro de Berlín?", respuestas: ["1989", "1991", "1987", "1990"], correcta: 0 },
        { pregunta: "¿Qué gas es más abundante en la atmósfera terrestre?", respuestas: ["Oxígeno", "Hidrógeno", "Nitrógeno", "Dióxido de carbono"], correcta: 2 },
        { pregunta: "¿Cuál es el río más largo del mundo?", respuestas: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"], correcta: 0 },
        { pregunta: "¿Quién pintó 'La última cena'?", respuestas: ["Leonardo da Vinci", "Michelangelo", "Rafael", "Donatello"], correcta: 0 },
        { pregunta: "¿Qué elemento químico tiene el símbolo 'O'?", respuestas: ["Oro", "Osmio", "Oxígeno", "Oligisto"], correcta: 2 },
        { pregunta: "¿Cuál es el país más poblado del mundo?", respuestas: ["India", "Estados Unidos", "China", "Indonesia"], correcta: 2 },
        { pregunta: "¿Quién es el autor de la teoría de la relatividad?", respuestas: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Galileo Galilei"], correcta: 1 },
        { pregunta: "¿En qué continente se encuentra Egipto?", respuestas: ["Europa", "África", "Asia", "América"], correcta: 1 },
        { pregunta: "¿Qué animal es el más grande que ha existido?", respuestas: ["Elefante africano", "Tiranosaurio rex", "Ballena azul", "Gigantopithecus"], correcta: 2 },
        { pregunta: "¿Cuál es la moneda oficial de Estados Unidos?", respuestas: ["Euro", "Dólar", "Libra", "Peso"], correcta: 1 },
        { pregunta: "¿Qué país ganó el mundial de fútbol en 2010?", respuestas: ["Brasil", "Alemania", "España", "Italia"], correcta: 2 },
        { pregunta: "¿Cuál es el libro sagrado del Islam?", respuestas: ["Biblia", "Torá", "Corán", "Vedas"], correcta: 2 },
	{ pregunta: "¿Cuál es la capital de Australia?", respuestas: ["Canberra", "Sydney", "Melbourne", "Perth"], correcta: 0 },
        { pregunta: "¿Quién pintó el techo de la Capilla Sixtina?", respuestas: ["Leonardo da Vinci", "Michelangelo", "Rafael", "Donatello"], correcta: 1 },
        { pregunta: "¿Qué año comenzó la Segunda Guerra Mundial?", respuestas: ["1914", "1939", "1945", "1935"], correcta: 1 },
        { pregunta: "¿Cuál es el libro más vendido en el mundo después de la Biblia?", respuestas: ["Don Quijote", "El Señor de los Anillos", "El Alquimista", "Harry Potter"], correcta: 0 },
        { pregunta: "¿Cuál es el río más largo de Europa?", respuestas: ["Danubio", "Volga", "Rin", "Elba"], correcta: 1 },
        { pregunta: "¿En qué país se originaron los juegos olímpicos?", respuestas: ["Italia", "Grecia", "Egipto", "China"], correcta: 1 },
        { pregunta: "¿Quién escribió 'Cien años de soledad'?", respuestas: ["Gabriel García Márquez", "Mario Vargas Llosa", "Julio Cortázar", "Carlos Fuentes"], correcta: 0 },
        { pregunta: "¿Cuál es el océano más grande del mundo?", respuestas: ["Atlántico", "Índico", "Pacífico", "Ártico"], correcta: 2 },
        { pregunta: "¿Qué país es el mayor productor de café en el mundo?", respuestas: ["Brasil", "Vietnam", "Colombia", "Etiopía"], correcta: 0 },
        { pregunta: "¿En qué año cayó el Imperio Romano de Occidente?", respuestas: ["476", "1453", "410", "1204"], correcta: 0 },
        { pregunta: "¿Cuál es el elemento químico con el símbolo 'Au'?", respuestas: ["Plomo", "Oro", "Plata", "Helio"], correcta: 1 },
        { pregunta: "¿Cuál es el planeta más cercano al Sol?", respuestas: ["Venus", "Marte", "Mercurio", "Tierra"], correcta: 2 },
        { pregunta: "¿Cuántos huesos tiene el cuerpo humano adulto?", respuestas: ["206", "205", "201", "208"], correcta: 0 },
        { pregunta: "¿Qué país tiene la mayor cantidad de islas en el mundo?", respuestas: ["Suecia", "Finlandia", "Noruega", "Indonesia"], correcta: 0 },
        { pregunta: "¿Qué año se lanzó el primer iPhone al mercado?", respuestas: ["2006", "2007", "2005", "2008"], correcta: 1 },
        { pregunta: "¿Cuál es el país más pequeño del mundo?", respuestas: ["Mónaco", "Maldivas", "San Marino", "Vaticano"], correcta: 3 },
        { pregunta: "¿Quién escribió la obra 'Hamlet'?", respuestas: ["William Shakespeare", "Charles Dickens", "Jorge Luis Borges", "Anton Chejov"], correcta: 0 },
        { pregunta: "¿Cuál es la velocidad de la luz?", respuestas: ["299,792 km/s", "150,000 km/s", "300,000 km/s", "299,792,458 m/s"], correcta: 3 },
        { pregunta: "¿Cuál es el país más grande del mundo por superficie?", respuestas: ["Rusia", "Canadá", "China", "Estados Unidos"], correcta: 0 },
        { pregunta: "¿Cuál es la capital de Canadá?", respuestas: ["Toronto", "Ottawa", "Montreal", "Vancouver"], correcta: 1 },
        { pregunta: "¿Qué artista famoso pintó 'La persistencia de la memoria'?", respuestas: ["Pablo Picasso", "Salvador Dalí", "Vincent van Gogh", "Claude Monet"], correcta: 1 },
        { pregunta: "¿Qué gas es más abundante en la atmósfera terrestre?", respuestas: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Argón"], correcta: 1 },
        { pregunta: "¿Cuál es el país más poblado del mundo?", respuestas: ["India", "Estados Unidos", "China", "Brasil"], correcta: 2 },
        { pregunta: "¿Qué país ganó el primer Mundial de Fútbol?", respuestas: ["Uruguay", "Alemania", "Brasil", "Argentina"], correcta: 0 },
        { pregunta: "¿Cuál es el principal ingrediente del guacamole?", respuestas: ["Tomate", "Cilantro", "Aguacate", "Cebolla"], correcta: 2 },
        { pregunta: "¿Qué científico es conocido por la teoría de la relatividad?", respuestas: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Stephen Hawking"], correcta: 1 },
        { pregunta: "¿Cuál es el metal más caro del mundo?", respuestas: ["Oro", "Platino", "Rodio", "Paladio"], correcta: 2 },
        { pregunta: "¿Qué animal es conocido como el rey de la selva?", respuestas: ["Tigre", "León", "Elefante", "Jaguar"], correcta: 1 },
        { pregunta: "¿En qué año llegó el hombre a la Luna?", respuestas: ["1969", "1970", "1965", "1972"], correcta: 0 },
        { pregunta: "¿Cuál es el libro sagrado del Islam?", respuestas: ["Biblia", "Torá", "Corán", "Vedas"], correcta: 2 },
        { pregunta: "¿Qué órgano del cuerpo humano produce la insulina?", respuestas: ["Hígado", "Páncreas", "Riñón", "Corazón"], correcta: 1 },
        { pregunta: "¿Cuál es la ciudad más poblada del mundo?", respuestas: ["Shanghái", "Tokio", "Nueva York", "Delhi"], correcta: 1 },
        { pregunta: "¿Qué elemento tiene el símbolo químico 'H'?", respuestas: ["Helio", "Hidrógeno", "Hafnio", "Hierro"], correcta: 1 },
        { pregunta: "¿Qué videojuego popularizó el término 'Battle Royale'?", respuestas: ["Fortnite", "PlayerUnknown's Battlegrounds", "Apex Legends", "Call of Duty"], correcta: 0 },
        { pregunta: "¿Quién fue el primer emperador romano?", respuestas: ["Julio César", "Nerón", "Augusto", "Trajano"], correcta: 2 },
        { pregunta: "¿Qué océano rodea la Isla de Madagascar?", respuestas: ["Océano Atlántico", "Océano Índico", "Océano Pacífico", "Océano Ártico"], correcta: 1 },
        { pregunta: "¿En qué continente se encuentra el desierto del Sahara?", respuestas: ["Asia", "África", "América", "Australia"], correcta: 1 },
        { pregunta: "¿Quién es el autor de 'El Principito'?", respuestas: ["Gabriel García Márquez", "Antoine de Saint-Exupéry", "Ernest Hemingway", "F. Scott Fitzgerald"], correcta: 1 },
        { pregunta: "¿Qué país es conocido como la tierra del sol naciente?", respuestas: ["China", "Japón", "India", "Australia"], correcta: 1 },
        { pregunta: "¿Cuál es el río más largo de América del Sur?", respuestas: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"], correcta: 0 },
        { pregunta: "¿Quién escribió 'Crimen y castigo'?", respuestas: ["Fyodor Dostoyevsky", "Leo Tolstoy", "Nikolai Gogol", "Anton Chekhov"], correcta: 0 },
        { pregunta: "¿Cuál es la capital de Japón?", respuestas: ["Tokio", "Pekín", "Seúl", "Osaka"], correcta: 0 },
        { pregunta: "¿Qué país tiene la forma de una bota?", respuestas: ["Italia", "España", "Francia", "Grecia"], correcta: 0 },
        { pregunta: "¿En qué año terminó la Primera Guerra Mundial?", respuestas: ["1918", "1920", "1915", "1922"], correcta: 0 },
        { pregunta: "¿Cuál es el proceso por el cual las plantas producen su propio alimento?", respuestas: ["Fotosíntesis", "Respiración", "Transpiración", "Metabolismo"], correcta: 0 },
        { pregunta: "¿Quién es conocido como 'el padre de la psicoanálisis'?", respuestas: ["Sigmund Freud", "Carl Jung", "Erich Fromm", "Alfred Adler"], correcta: 0 },
        { pregunta: "¿Cuál es el metal más pesado que se encuentra en la corteza terrestre?", respuestas: ["Oro", "Plomo", "Uranio", "Platino"], correcta: 2 },
        { pregunta: "¿Cuál es el ave más grande del mundo?", respuestas: ["Águila", "Buitre", "Avestruz", "Pingüino"], correcta: 2 },
        { pregunta: "¿Cuál es el año de la independencia de Estados Unidos?", respuestas: ["1776", "1789", "1800", "1812"], correcta: 0 },
        { pregunta: "¿Qué famoso científico formuló la teoría de la evolución por selección natural?", respuestas: ["Isaac Newton", "Charles Darwin", "Gregor Mendel", "Louis Pasteur"], correcta: 1 },
        { pregunta: "¿Cuál es el único mamífero que puede volar?", respuestas: ["Murciélago", "Ardilla", "Pájaro", "Mariposa"], correcta: 0 },
        { pregunta: "¿Cuál es el libro más vendido de todos los tiempos, excluyendo la Biblia?", respuestas: ["Don Quijote de la Mancha", "El Señor de los Anillos", "Harry Potter y la piedra filosofal", "El Principito"], correcta: 0 },
        { pregunta: "¿Quién es conocido como 'el rey del pop'?", respuestas: ["Michael Jackson", "Elvis Presley", "Prince", "Madonna"], correcta: 0 },
        { pregunta: "¿Cuál es el quinto planeta del sistema solar?", respuestas: ["Júpiter", "Saturno", "Urano", "Neptuno"], correcta: 0 },
        { pregunta: "¿Qué famoso pintor es conocido por su obra 'La noche estrellada'?", respuestas: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], correcta: 0 },
        { pregunta: "¿En qué año comenzó la Revolución Francesa?", respuestas: ["1789", "1776", "1804", "1812"], correcta: 0 },
        { pregunta: "¿Cuál es el símbolo químico del oxígeno?", respuestas: ["O", "Ox", "O2", "O3"], correcta: 0 },
        { pregunta: "¿En qué continente se encuentra el país de Mongolia?", respuestas: ["Asia", "África", "Europa", "Oceanía"], correcta: 0 },
        { pregunta: "¿Quién escribió 'El retrato de Dorian Gray'?", respuestas: ["Oscar Wilde", "Edgar Allan Poe", "Emily Brontë", "Jane Austen"], correcta: 0 },
    ];
    let preguntaActual = null;
    let score = 0;

    function iniciarJuego() {
        document.getElementById('inicio').style.display = 'none';
        document.getElementById('juego').style.display = 'block';
        mostrarPregunta();
    }

    function mostrarPregunta() {
        let pregunta = preguntas[Math.floor(Math.random() * preguntas.length)];
        preguntaActual = pregunta;
        document.getElementById('pregunta').textContent = pregunta.pregunta;
        document.getElementById('respuesta1').textContent = pregunta.respuestas[0];
        document.getElementById('respuesta2').textContent = pregunta.respuestas[1];
        document.getElementById('respuesta3').textContent = pregunta.respuestas[2];
        document.getElementById('respuesta4').textContent = pregunta.respuestas[3];
    }

    document.getElementById('respuesta1').addEventListener('click', () => verificarRespuesta(0));
    document.getElementById('respuesta2').addEventListener('click', () => verificarRespuesta(1));
    document.getElementById('respuesta3').addEventListener('click', () => verificarRespuesta(2));
    document.getElementById('respuesta4').addEventListener('click', () => verificarRespuesta(3));

    function verificarRespuesta(index) {
        if (index === preguntaActual.correcta) {
            score++;
            mostrarPregunta();
        } else {
            mostrarResultado();
        }
    }

    function mostrarResultado() {
        document.getElementById('juego').style.display = 'none';
        document.getElementById('resultado').style.display = 'block';
        document.getElementById('score').textContent = `Respondiste correctamente a ${score} preguntas.`;
    }

    document.getElementById('reiniciar').addEventListener('click', () => {
        document.getElementById('resultado').style.display = 'none';
        document.getElementById('inicio').style.display = 'block';
        score = 0;
    });
});
