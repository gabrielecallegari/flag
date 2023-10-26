// ------> Parte Firebase <----------
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHQrdzi9XI48SYL90KpHcdJZQBpLMZZGM",
  authDomain: "guesstheflag-b9575.firebaseapp.com",
  projectId: "guesstheflag-b9575",
  storageBucket: "guesstheflag-b9575.appspot.com",
  messagingSenderId: "842269099073",
  appId: "1:842269099073:web:9b37705607285c4355b2c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export function login(email, password, callback){
    
    signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
            callback(true, "autenticazione avvenuta")
        }
    ).catch(
        (error) => {
            callback(false, error.message)
        }
    )
}

export function registration(email, password, callback){
    createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
            callback(true, 0)
        }
    ).catch( 
        (error)=> {
            callback(false, error.code)
        }
    )
}


// ---------> Parte Stati <-----------
/* Continenti:
// 0 - Europa
// 1 - America
// 2 - Oceania
// 3 - Asia
// 4 - Africa
*/

export const states = [
    {
        stato: "Albania",
        capitale: "Tirana",
        bandiera: require(""),
        continente: 0,
        abitanti: 2877797,
        id: 0,
    },
    {
        stato: "Andorra",
        capitale: "Andorra la Vella",
        bandiera: require(""),
        continente: 0,
        abitanti: 77265,
        id: 1,
    },
    {
        stato: "Austria",
        capitale: "Vienna",
        bandiera: require(""),
        continente: 0,
        abitanti: 8902600,
        id: 2,
    },
    {
        stato: "Belgio",
        capitale: "Bruxelles",
        bandiera: require(""),
        continente: 0,
        abitanti: 11631060,
        id: 3,
    },
    {
        stato: "Bielorussia",
        capitale: "Minsk",
        bandiera: require(""),
        continente: 0,
        abitanti: 9349192,
        id: 4,
    },
    {
        stato: "Bosnia Erzegovina",
        capitale: "Sarajevo",
        bandiera: require(""),
        continente: 0,
        abitanti: 3280819,
        id: 5,
    },
    {
        stato: "Bulgaria",
        capitale: "Sofia",
        bandiera: require(""),
        continente: 0,
        abitanti: 6951482,
        id: 6,
    },
    {
        stato: "Cipro",
        capitale: "Nicosia",
        bandiera: require(""),
        continente: 0,
        abitanti: 1207359,
        id: 7,
    },
    {
        stato: "Croazia",
        capitale: "Zagabria",
        bandiera: require(""),
        continente: 0,
        abitanti: 4058165,
        id: 8,
    },
    {
        stato: "Danimarca",
        capitale: "Copenaghen",
        bandiera: require(""),
        continente: 0,
        abitanti: 5857374,
        id: 9,
    },
    {
        stato: "Estonia",
        capitale: "Tallin",
        bandiera: require(""),
        continente: 0,
        abitanti: 1326535,
        id: 10,
    },
    {
        stato: "Finlandia",
        capitale: "Helsinki",
        bandiera: require(""),
        continente: 0,
        abitanti: 5540720,
        id: 11,
    },
    {
        stato: "Francia",
        capitale: "Parigi",
        bandiera: require(""),
        continente: 0,
        abitanti: 67081000,
        id: 12,
    },
    {
        stato: "Germania",
        capitale: "Berlino",
        bandiera: require(""),
        continente: 0,
        abitanti: 83166711,
        id: 13,
    },
    {
        stato: "Grecia",
        capitale: "Atene",
        bandiera: require(""),
        continente: 0,
        abitanti: 10423054,
        id: 14,
    },
    {
        stato: "Irlanda",
        capitale: "Dublino",
        bandiera: require(""),
        continente: 0,
        abitanti: 4937786,
        id: 15,
    },
    {
        stato: "Islanda",
        capitale: "Reykjavik",
        bandiera: require(""),
        continente: 0,
        abitanti: 364260,
        id: 16,
    },
    {
        stato: "Italia",
        capitale: "Roma",
        bandiera: require(""),
        continente: 0,
        abitanti: 60317116,
        id: 17,
    },
    {
        stato: "Kosovo",
        capitale: "Pristina",
        bandiera: require(""),
        continente: 0,
        abitanti: 1808043,
        id: 18,
    },
    {
        stato: "Lettonia",
        capitale: "Riga",
        bandiera: require(""),
        continente: 0,
        abitanti: 1864424,
        id: 19,
    },
    {
        stato: "Liechtenstein",
        capitale: "Vaduz",
        bandiera: require(""),
        continente: 0,
        abitanti: 38574,
        id: 20,
    },
    {
        stato: "Lituania",
        capitale: "Vilnius",
        bandiera: require(""),
        continente: 0,
        abitanti: 2722289,
        id: 21,
    },
    {
        stato: "Lussemburgo",
        capitale: "Lussemburgo",
        bandiera: require(""),
        continente: 0,
        abitanti: 634730,
        id: 22,
    },
    {
        stato: "Malta",
        capitale: "La Valletta",
        bandiera: require(""),
        continente: 0,
        abitanti: 442784,
        id: 23,
    },
    {
        stato: "Moldavia",
        capitale: "Chisinau",
        bandiera: require(""),
        continente: 0,
        abitanti: 4027900,
        id: 24,
    },
    {
        stato: "Monte Carlo",
        capitale: "Monaco",
        bandiera: require(""),
        continente: 0,
        abitanti: 38300,
        id: 25,
    },
    {
        stato: "Montenegro",
        capitale: "Podgorica",
        bandiera: require(""),
        continente: 0,
        abitanti: 620029,
        id: 26,
    },
    {
        stato: "Norvegia",
        capitale: "Oslo",
        bandiera: require(""),
        continente: 0,
        abitanti: 5464023,
        id: 27,
    },
    {
        stato: "Paesi Bassi",
        capitale: "Amsterdam",
        bandiera: require(""),
        continente: 0,
        abitanti: 17474680,
        id: 28,
    },
    {
        stato: "Polonia",
        capitale: "Varsavia",
        bandiera: require(""),
        continente: 0,
        abitanti: 38002396,
        id: 29,
    },
    {
        stato: "Portogallo",
        capitale: "Lisbona",
        bandiera: require(""),
        continente: 0,
        abitanti: 10196709,
        id: 30,
    },
    {
        stato: "Regno Unito",
        capitale: "Londra",
        bandiera: require(""),
        continente: 0,
        abitanti: 68207116,
        id: 31,
    },
    {
        stato: "Repubblica Ceca",
        capitale: "Praga",
        bandiera: require(""),
        continente: 0,
        abitanti: 10708983,
        id: 32,
    },{
        stato: "Romania",
        capitale: "Bucarest",
        bandiera: require(""),
        continente: 0,
        abitanti: 19237691,
        id: 33,
    },
    {
        stato: "Russia",
        capitale: "Mosca",
        bandiera: require(""),
        continente: 0,
        abitanti: 144373535,
        id: 34,
    },
    {
        stato: "San Marino",
        capitale: "Città di San Marino",
        bandiera: require(""),
        continente: 34232,
        abitanti: 0,
        id: 35,
    },{
        stato: "Serbia",
        capitale: "Belgrado",
        bandiera: require(""),
        continente: 0,
        abitanti: 8737371,
        id: 36,
    },
    {
        stato: "Slovacchia",
        capitale: "Bratislava",
        bandiera: require(""),
        continente: 0,
        abitanti: 5459642,
        id: 37,
    },
    {
        stato: "Slovenia",
        capitale: "Lubiana",
        bandiera: require(""),
        continente: 0,
        abitanti: 2078938,
        id: 38,
    },{
        stato: "Svizzera",
        capitale: "Berna",
        bandiera: require(""),
        continente: 0,
        abitanti: 8631865,
        id: 39,
    },
    {
        stato: "Spanga",
        capitale: "Madrid",
        bandiera: require(""),
        continente: 0,
        abitanti: 46754784,
        id: 40,
    },
    {
        stato: "Svezia",
        capitale: "Stoccolma",
        bandiera: require(""),
        continente: 0,
        abitanti: 10438963,
        id: 41,
    },{
        stato: "Ucraina",
        capitale: "Kiev",
        bandiera: require(""),
        continente: 0,
        abitanti: 44419470,
        id: 42,
    },
    {
        stato: "Ungheria",
        capitale: "Budapest",
        bandiera: require(""),
        continente: 0,
        abitanti: 9660351,
        id: 43,
    },
    {
        stato: "Vaticano",
        capitale: "Città del Vaticano",
        bandiera: require(""),
        continente: 0,
        abitanti: 800,
        id: 44,
    },
    
]