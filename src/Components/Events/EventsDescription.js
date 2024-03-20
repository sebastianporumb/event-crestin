import EventsList from "./EventsList";
import { EventsListData } from "./EventsList";
import NewEvent from "./NewEvents";

const EventsDescription = {
  e1: {
    image: EventsListData.find((event) => event.id === "e1").image,
    description: "Description for Concert Betel Orchestra.",
    details: `Muzica lui Morricone a fost refolosită în seriale de televiziune, inclusiv “The Simpsons” și “The Sopranos”, și în multe filme, inclusiv “Inglourious Basterds” și “Django Unchained”.

    Pe parcursul carierei sale, Morricone a compus muzica si pentru alti artisti, printre care: Paul Anka, Mina, Milva, Zucchero si Andrea Bocelli.
    
    În anul 2007, a primit premiul de onoare al Academiei Americane de Film „pentru contribuțiile sale magnifice și multiple la arta muzicii de film”, fiind al doilea compozitor de muzică de film care primește acest premiu (după Alex North).
    
    În 2016, Morricone este decernat cu primul său premiu Oscar, pentru partitura sa din filmul lui Quentin Tarantino „The Hateful Eight”.
    
    Printre alte realizări ale sale se numără trei premii Grammy, trei Globuri de Aur, șase BAFTA, zece David di Donatello, unsprezece Nastro d'Argento, două Premii de Film European, premiul de onoare Leul de Aur și premiul Polar Music Prize în 2010.
    
    DESPRE ORCHESTRA LE MUSE
    
    Orchestra ‘Le Muse’ va prezinta un concert în care vă veti bucura de cele mai cunoscute compoziții din povestea internațională a cinematografiei și scrise de inegalabilul compozitor Ennio Morricone.
    
    „Le Muse” este un ansamblu instrumental feminin, alcătuit din muzicieni care s-au remarcat în cadrul celebrului grup „Rondò Veneziano”.
    
    În proiectul „Ennio Morricone. Muzică de Oscar”, orchestra este compusă din muzicieni recunoscuți, pentru ca sonoritatea temelor originale propuse în cadrul concertului să fie reprezentată în cel mai bun mod. Vocalistă va fi Angelica Depaoli si invitata specială, celebra Susanna Rigacci.
    
    Ansamblul este dirijat de maestrul Andrea Albertini. Repertoriul propus de „Le Muse” a selectat din bogata opera a maestrului Morricone, alegând unele dintre cele mai faimoase coloane sonore din anii ’60 și până în prezent, inclusiv o secventa din celebrul serial “Caracatița” si coloana sonoră care a câștigat premiul Oscar, în 2016, “The Hateful Eight”.
    
    Mai multe informatii:
    
    · Website: www.themusicofenniomorricone.com`,
  },
  e2: {
    image: EventsListData.find((event) => event.id === "e2").image,
    description: "Description for Duminica tinerilor",
    details: "Additional details for the worship night event.",
  },
  e3: {
    image: EventsListData.find((event) => event.id === "e3").image,
    description: "Description for Duminica tinerilor",
    details: "Additional details for the worship night event.",
  },
  e4: {
    image: EventsListData.find((event) => event.id === "e4").image,
    description: "Description for Duminica tinerilor",
    details: "Additional details for the worship night event.",
  },
};

EventsDescription[NewEvent.id] = {
  image: NewEvent.image,
  description: NewEvent.description,
};

export default EventsDescription;
