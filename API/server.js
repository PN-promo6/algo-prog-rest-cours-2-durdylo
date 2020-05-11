const express = require('express');
const app = express();
const cors = require('cors');

let users = [
    {
        "id": "5eaecda0cba960e77fc9f205",
        "age": 29,
        "name": "Lesa Clark",
        "gender": "female",
        "company": "VINCH",
        "email": "lesaclark@trollery.com",
        "phone": "+1 (945) 413-2529",
        "latitude": -15.421613,
        "longitude": 101.274002
    },
    {
        "id": "5eaecda01070c34da892e9e5",
        "age": 34,
        "name": "Marsha Hansen",
        "gender": "female",
        "company": "VINCH",
        "email": "marshahansen@singavera.com",
        "phone": "+1 (909) 508-3857",
        "latitude": -44.617836,
        "longitude": 2.408834
    },
    {
        "id": "5eaecda01865876300aada64",
        "age": 28,
        "name": "Peck Johnson",
        "gender": "male",
        "company": "VINCH",
        "email": "peckjohnson@talkola.com",
        "phone": "+1 (964) 454-3417",
        "latitude": -75.566328,
        "longitude": 33.309041
    },
    {
        "id": "5eaecda0d132e8d506850631",
        "age": 30,
        "name": "Myrna Case",
        "gender": "female",
        "company": "VINCH",
        "email": "myrnacase@vinch.com",
        "phone": "+1 (915) 517-3973",
        "latitude": 20.926118,
        "longitude": 3.366088
    },
    {
        "id": "5eaecda010a868687280ce28",
        "age": 24,
        "name": "Kelli Alston",
        "gender": "female",
        "company": "FURNIGEER",
        "email": "kellialston@applidec.com",
        "phone": "+1 (957) 410-2377",
        "latitude": -50.476537,
        "longitude": -175.994997
    },
    {
        "id": "5eaecda0b40f4682d97117fb",
        "age": 31,
        "name": "Bates Johnston",
        "gender": "male",
        "company": "FURNIGEER",
        "email": "batesjohnston@earwax.com",
        "phone": "+1 (917) 583-3341",
        "latitude": -78.69636,
        "longitude": -0.632594
    },
    {
        "id": "5eaecda099f2a9c328ec3603",
        "age": 25,
        "name": "Mariana Monroe",
        "gender": "female",
        "company": "FURNIGEER",
        "email": "marianamonroe@furnigeer.com",
        "phone": "+1 (975) 514-2722",
        "latitude": 15.230689,
        "longitude": 131.753915
    },
    {
        "id": "5eaecda0fd696b8f0e33a6db",
        "age": 29,
        "name": "Letitia Andrews",
        "gender": "female",
        "company": "ISOLOGICA",
        "email": "letitiaandrews@parcoe.com",
        "phone": "+1 (858) 565-3095",
        "latitude": -86.176034,
        "longitude": -153.088186
    },
    {
        "id": "5eaecda0d01513c7cbbcffa4",
        "age": 37,
        "name": "Dina Buchanan",
        "gender": "female",
        "company": "ISOLOGICA",
        "email": "dinabuchanan@uniworld.com",
        "phone": "+1 (930) 542-2668",
        "latitude": -22.313357,
        "longitude": 149.910409
    },
    {
        "id": "5eaecda0ba6003ab1113ceac",
        "age": 30,
        "name": "Lottie Walters",
        "gender": "female",
        "company": "ISOLOGICA",
        "email": "lottiewalters@isologica.com",
        "phone": "+1 (956) 488-3898",
        "latitude": 23.420905,
        "longitude": -143.389375
    }
];

let posts = [
    {
        id: 0,
        titleMatch: "Shawn Michaels vs Undertaker",
        body: "This match change the future of pro wrestling and WWE",
        idUser: "5eaecda0cba960e77fc9f205",
        year: 2009,
        ppvOrWeekly: "Wrestlemania 25",
        stars: 5,
        federation: "WWE"
    },
    {
        id: 1,
        titleMatch: "Young Bucks vs Kenny Omega and Adam Page",
        body: "Amazing tag team match for the AEW tag team championship. The story is perfectly perform.",
        idUser: "5eaecda01070c34da892e9e5",
        year: 2020,
        ppvOrWeekly: "Revolution 2020",
        stars: 5,
        federation: "AEW"
    },
    {
        id: 2,
        titleMatch: "Undertaker vs Triple H inside Hell in a cell (with Shawn Michaels special guest referee)",
        body: "Amazing match with a perfect story telling. This match sign the end of an era.",
        idUser: "5eaecda01070c34da892e9e5",
        year: 2012,
        ppvOrWeekly: "Wrestlemania 28",
        stars: 4.5,
        federation: "WWE"
    },
    {
        id: 3,
        titleMatch: "John Cena vs CM Punk for the WWE championship",
        body: "The context of the match is perfect. Last day of CM Punk contract with WWE. In CM Punk home town Chicago the arena was on fire. If CM Punk win he lives WWE with the biggest title of the federation. The match open the doors of the hall of fame for the two superstars.",
        idUser: "5eaecda01865876300aada64",
        year: 2011,
        ppvOrWeekly: "Money In The Bank",
        stars: 5,
        federation: "WWE"
    }

]

let corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));

app.listen(3000);


app.get('/users', function (req, res) {
    res.send(users);
});

app.get('/posts', function (req, res) {
    res.send(posts);
});

app.get('/users/:id', function (req, res) {

    let id = req.params.id;

    for (let i = 0; i < users.length; i++) {

        let currentElement = users[i];
        if (currentElement.id == id) {
            res.send(currentElement);
            break;
        }
    }

    res.statusMessage = "User Not found";
    res.status();
});

// app.get('/posts/:id', function (req, res) {

//     let id = req.params.id;

//     for (let i = 0; i < posts.length; i++) {

//         let currentElement = posts[i];
//         if (currentElement.id == id) {
//             res.send(currentElement);
//             break;
//         }
//     }

//     res.statusMessage = "User Not found";
//     res.status();
// });


app.get('/posts/:idUser', function (req, res) {

    let idUser = req.params.idUser;
    let arrayOfPosts = [];
    for (let i = 0; i < posts.length; i++) {

        let currentElement = posts[i];
        if (currentElement.idUser == idUser) {
            arrayOfPosts.push(currentElement);

        }
    }
    res.send(arrayOfPosts);

    res.statusMessage = "User Not found";
    res.status();
});