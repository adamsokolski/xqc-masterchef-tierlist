export const season6 = {
  seasonName: "season6",
  // prettier-ignore
  contestants: {
            "contestant-1": { id:"contestant-1", name: "Ailsa", img: "/images/contestants/s6/Ailsa-von-Dobeneck.jpg"},
            "contestant-2": { id:"contestant-2", name: "Amanda", img: "/images/contestants/s6/Amanda-Saab.jpg"},
            "contestant-3": { id:"contestant-3", name: "Brianna", img: "/images/contestants/s6/Brianna-Watson.jpg"},
            "contestant-4": { id:"contestant-4", name: "Charlie", img: "/images/contestants/s6/Charlie-Chapman.jpg"},
            "contestant-5": { id:"contestant-5", name: "Christopher", img: "/images/contestants/s6/Christopher-Lu.png"},
            "contestant-6": { id:"contestant-6", name: "Claudia", img: "/images/contestants/s6/Claudia-Sandoval.jpg"},
            "contestant-7": { id:"contestant-7", name: "Dan", img: "/images/contestants/s6/Dan-Collado.jpg"},
            "contestant-8": { id:"contestant-8", name: "Darah", img: "/images/contestants/s6/Darah-Carattini.jpg"},
            "contestant-9": { id:"contestant-9", name: "Derrick", img: "/images/contestants/s6/Derrick-Peltz.jpg"},
            "contestant-10": { id:"contestant-10", name: "Hetal", img: "/images/contestants/s6/Hetal-Vasavada.jpg"},
            "contestant-11": { id:"contestant-11", name: "Jesse", img: "/images/contestants/s6/Jesse-Romero.jpg"},
            "contestant-12": { id:"contestant-12", name: "Justin", img: "/images/contestants/s6/Justin-Banister.jpg"},
            "contestant-13": { id:"contestant-13", name: "Katrina", img: "/images/contestants/s6/Katrina-Kozar.png"},
            "contestant-14": { id:"contestant-14", name: "Kerry", img: "/images/contestants/s6/Kerry-Prince.jpg"},
            "contestant-15": { id:"contestant-15", name: "Mateo", img: "/images/contestants/s6/Mateo-McConnell.jpg"},
            "contestant-16": { id:"contestant-16", name: "Nick", img: "/images/contestants/s6/Nick-Nappi.png"},
            "contestant-17": { id:"contestant-17", name: "Olivia", img: "/images/contestants/s6/Olivia-Crouppen.png"},
            "contestant-18": { id:"contestant-18", name: "Sara", img: "/images/contestants/s6/Sara-Zacek.png"},
            "contestant-19": { id:"contestant-19", name: "Shelly", img: "/images/contestants/s6/Shelly-Flash.jpg"},
            "contestant-20": { id:"contestant-20", name: "Stephen", img: "/images/contestants/s6/Stephen-Lee.jpg"},
            "contestant-21": { id:"contestant-21", name: "Tommy", img: "/images/contestants/s6/Tommy-Walton.jpg"},
            "contestant-22": { id:"contestant-22", name: "Veronica", img: "/images/contestants/s6/Veronica-Cili.jpg"},
          },

  columns: {
    "column-start": {
      id: "column-start",
      title: "Season 6 - Top 22",
      contestantsIds: [
        "contestant-1",
        "contestant-2",
        "contestant-3",
        "contestant-4",
        "contestant-5",
        "contestant-6",
        "contestant-7",
        "contestant-8",
        "contestant-9",
        "contestant-10",
        "contestant-11",
        "contestant-12",
        "contestant-13",
        "contestant-14",
        "contestant-15",
        "contestant-16",
        "contestant-17",
        "contestant-18",
        "contestant-19",
        "contestant-20",
        "contestant-21",
        "contestant-22",
      ],
    },
    "column-good": {
      id: "column-good",
      title: "Good",
      img: "/images/emotes/OkayChamp.png",
      contestantsIds: [],
    },
    "column-good-content": {
      id: "column-good-content",
      title: "",
      imgArr: [
        {
          img: "/images/emotes/OkayChamp.png",
        },
        {
          img: "/images/emotes/SillyChamp.png",
        },
      ],
      contestantsIds: [],
    },
    "column-content": {
      id: "column-content",
      title: "Content",
      img: "/images/emotes/SillyChamp.png",
      contestantsIds: [],
    },
    "column-content-bad": {
      id: "column-content-bad",
      title: "",
      imgArr: [
        {
          img: "/images/emotes/SillyChamp.png",
        },
        {
          img: "/images/emotes/WeirdChamp.png",
        },
      ],
      contestantsIds: [],
    },
    "column-bad": {
      id: "column-bad",
      title: "Weird",
      img: "/images/emotes/WeirdChamp.png",
      contestantsIds: [],
    },
  },
  columnOrder: [
    "column-start",
    "column-good",
    "column-good-content",
    "column-content",
    "column-content-bad",
    "column-bad",
  ],
};