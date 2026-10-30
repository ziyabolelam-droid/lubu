
const TITLES = [
  {
    "id": 1,
    "title": "American Psycho",
    "type": "Film",
    "genre": "Psychological thriller / dark comedy",
    "year": 2000,
    "duration": "1h 42m",
    "rating": 7.6,
    "ratingSource": "IMDb",
    "poster": "psycho.jpg",
    "trailer": "steel",
    "tags": [
      "trending",
      "popular"
    ],
    "description": "Patrick Bateman is a wealthy Manhattan investment banker whose polished public image hides a violent, increasingly unstable double life.",
    "externalUrl": "https://www.imdb.com/title/tt0144084/",
    "watchUrl": "https://tv.apple.com/us/movie/american-psycho/umc.cmc.4k3idfzm0x9j5okdedo2s4l50"
  },
  {
    "id": 2,
    "title": "The Polygamist",
    "type": "Series",
    "genre": "drama and super-novella",
    "year": 2026,
    "duration": "12 hours",
    "rating": 9.0,
    "ratingSource": "Not available",
    "poster": "polygamist.jpg",
    "trailer": "sintel",
    "tags": [
      "popular"
    ],
    "description": "onasi Gomora, a wealthy, self-made banking CEO and businessman whose public empire begins to unravel due to his secret affairs",
    "externalUrl": "https://www.imdb.com/find/?q=The%20Polygamist&s=tt",
    "watchUrl": "https://youtu.be/KBJllQVRuAA?si=GgNnxdS_lOtN3dfd"
  },
  {
    "id": 3,
    "title": "Tsotsi",
    "type": "Film",
    "genre": "Crime / drama",
    "year": 2005,
    "duration": "1h 34m",
    "rating": 7.2,
    "ratingSource": "IMDb",
    "poster": "tsotsi.jpg",
    "trailer": "bunny",
    "tags": [
      "trending",
      "popular"
    ],
    "description": "A young gang leader in Johannesburg steals a car and discovers a baby in the back seat. Caring for the child forces him to confront the violence and humanity in his life.",
    "externalUrl": "https://www.imdb.com/title/tt0468565/",
    "watchUrl": "https://www.miramax.com/movie/tsotsi/"
  },
  {
    "id": 4,
    "title": "Lifa Lami",
    "type": "Film",
    "genre": "Drama",
    "year": 2022,
    "duration": "1h 12m",
    "rating": 6.5,
    "ratingSource": "IMDB",
    "poster": "lifa.jpg",
    "trailer": "steel",
    "tags": [
      "trending",
      "new"
    ],
    "description": "After his love Mbali falls pregnant, a young man sets out on a journey to the city only to discover the loss of a valuable suitcase which has everything they need for this journey.",
    "externalUrl": "https://www.imdb.com/find/?q=Lifa%20Lami&s=tt",
    "watchUrl": null
  },
  {
    "id": 5,
    "title": "Adu",
    "type": "Film",
    "genre": "Drama",
    "year": 2020,
    "duration": "1h 59m",
    "rating": 6.8,
    "ratingSource": "IMDb",
    "poster": "adu.jpg",
    "trailer": "bunny",
    "tags": [
      "popular"
    ],
    "description": "Three interconnected stories unfold around a young boy, a family, and border patrol officers, exploring migration, family separation and the human cost of borders. This is the Spanish film Adú, not an Okavango wildlife documentary.",
    "externalUrl": "https://www.imdb.com/find/?q=Ad%C3%BA%202020&s=tt",
    "watchUrl": "https://www.netflix.com/ls/title/80993647?fromWatch=true"
  },
  {
    "id": 6,
    "title": "Marked",
    "type": "Film",
    "genre": "Drama",
    "year": 2025,
    "duration": "Not listed",
    "rating": 5.0,
    "ratingSource": "Not available",
    "poster": "marked.jpg",
    "trailer": "bunny",
    "tags": [
      "new"
    ],
    "description": "A religious former police officer plans a bold robbery with a sinister ally to fund her daughter's crucial operation.",
    "externalUrl": "https://www.imdb.com/find/?q=Marked&s=tt",
    "watchUrl": "https://movie-box.co/detail/marked-english-OTZp4GD0VW5?id=4994095488795394416&scene=&page_from=search_detail&type=/movie/detail"
  },
  {
    "id": 7,
    "title": "Beast",
    "type": "film",
    "genre": "Survival",
    "year": 2010,
    "duration": "1h 34",
    "rating": 6.7,
    "ratingSource": "Not available",
    "poster": "beast.jpg",
    "trailer": "steel",
    "tags": [
      "popular"
    ],
    "description": "A father and his two teenage daughters find themselves hunted by a massive rogue lion intent on proving that the savanna has but one apex predator.",
    "externalUrl": "https://www.imdb.com/find/?q=Beast&s=tt",
    "watchUrl": "https://www.imdb.com/title/tt13223398/"
  },
  {
    "id": 8,
    "title": "How to Ruin Christmas",
    "type": "Series",
    "genre": "Comedy / drama",
    "year": 2020,
    "duration": "3 seasons · 10 episodes",
    "rating": 6.5,
    "ratingSource": "IMDb",
    "poster": "happy.jpg",
    "trailer": "sintel",
    "tags": [
      "trending"
    ],
    "description": "South African family comedy-drama following outspoken Tumi Sello as she returns home for the holidays and becomes caught up in family celebrations that repeatedly spiral into chaos.",
    "externalUrl": "https://www.imdb.com/title/tt13492362/",
    "watchUrl": "https://www.netflix.com/title/81294417"
  },
  {
    "id": 9,
    "title": "Umthetho",
    "type": "Details pending",
    "genre": "Details pending",
    "year": 2026,
    "duration": "Not listed",
    "rating": 3.4,
    "ratingSource": "Not available",
    "poster": "umthetho.jpg",
    "trailer": "sintel",
    "tags": [
      "new"
    ],
    "description": "We are confirming the exact release so the information stays reliable. Open the title-information search to identify the correct production.",
    "externalUrl": "https://www.imdb.com/find/?q=Umthetho&s=tt",
    "watchUrl": null
  },
  {
    "id": 10,
    "title": "Lobola Man",
    "type": "Film",
    "genre": "Romantic comedy",
    "year": 2024,
    "duration": "1h 48m",
    "rating": 4.7,
    "ratingSource": "IMDb",
    "poster": "lobola.jpg",
    "trailer": "steel",
    "tags": [
      "popular"
    ],
    "description": "Ace Ngubeni is a smooth-talking lobola negotiator who takes on a difficult client. The deal becomes complicated when the client’s fiercely independent fiancée raises the stakes.",
    "externalUrl": "https://www.imdb.com/title/tt32615298/",
    "watchUrl": "https://www.netflix.com/title/81683815"
  },
  {
    "id": 11,
    "title": "Umjolo: My Beginning, My End!",
    "type": "Film",
    "genre": "Romance / comedy / drama",
    "year": 2025,
    "duration": "1h 14m",
    "rating": 7.8,
    "ratingSource": "IMDb rating not verified",
    "poster": "mjolo.jpg",
    "trailer": "steel",
    "tags": [
      "trending"
    ],
    "description": "Mayi, caught between family expectations and her free spirit, begins questioning her upcoming wedding after meeting a charming saxophonist.",
    "externalUrl": "https://www.imdb.com/find/?q=Umjolo%3A%20My%20Beginning%2C%20My%20End%21&s=tt",
    "watchUrl": "https://www.netflix.com/za/title/81903225"
  },
  {
    "id": 12,
    "title": "Fatal Seduction",
    "type": "Series",
    "genre": "Crime / drama / mystery thriller",
    "year": 2023,
    "duration": "3 seasons · 35 episodes",
    "rating": 5.0,
    "ratingSource": "IMDb",
    "poster": "fatal.jpg",
    "trailer": "bunny",
    "tags": [
      "new"
    ],
    "description": "A married university professor’s affair with a younger man sets off a chain of desire, suspicious deaths, secrets and betrayal involving the people closest to her.",
    "externalUrl": "https://www.imdb.com/title/tt27951663/",
    "watchUrl": "https://www.netflix.com/title/81598903"
  },
  {
    "id": 13,
    "title": "Love & Wine",
    "type": "Film",
    "genre": "Romantic comedy",
    "year": 2025,
    "duration": "1h 49m",
    "rating": 5.6,
    "ratingSource": "IMDb",
    "poster": "love.jpg",
    "trailer": "sintel",
    "tags": [
      "popular"
    ],
    "description": "A privileged young man falls for a hardworking medical student and pretends to come from a more modest background. His lie grows into a comic mess before forcing honest revelations.",
    "externalUrl": "https://www.imdb.com/title/tt38907962/",
    "watchUrl": "https://www.netflix.com/title/81717942"
  },
  {
    "id": 14,
    "title": "180",
    "type": "Film",
    "genre": "Crime / thriller / drama",
    "year": 2026,
    "duration": "1h 34m",
    "rating": 4.6,
    "ratingSource": "IMDb (check live rating)",
    "poster": "180.jpg",
    "trailer": "bunny",
    "tags": [
      "trending"
    ],
    "description": "After a road-rage incident leaves his son critically injured, a father is consumed by grief and anger and begins a dangerous pursuit of vengeance.",
    "externalUrl": "https://www.imdb.com/find/?q=180%202026%20South%20African%20film&s=tt",
    "watchUrl": "https://www.netflix.com/title/81684455"
  },
  {
    "id": 15,
    "title": "Beauty in Black",
    "type": "Series",
    "genre": "Drama",
    "year": 2024,
    "duration": "2 seasons (as of 2026)",
    "rating": null,
    "ratingSource": "IMDb rating not verified",
    "poster": "black.jpg",
    "trailer": "bunny",
    "tags": [
      "new"
    ],
    "description": "A drama series following two women from very different worlds whose lives become entangled with a powerful family and its beauty-business empire.",
    "externalUrl": "https://www.imdb.com/find/?q=Beauty%20in%20Black&s=tt",
    "watchUrl": "https://www.netflix.com/title/81610899"
  }
];
