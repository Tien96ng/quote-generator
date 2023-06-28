const quotesArr = [
  {
    id: 1,
    quote: "at turpis donec posuere metus vitae ipsum aliquam non mauris",
    name: "Liliane Marishenko",
  },
  {
    id: 2,
    quote:
      "maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum",
    name: "Devy Morgans",
  },
  {
    id: 3,
    quote:
      "id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra",
    name: "Margaretta Brinklow",
  },
  {
    id: 4,
    quote:
      "lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa",
    name: "Aleksandr Napoleone",
  },
  {
    id: 5,
    quote:
      "erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis",
    name: "Lotta Challenor",
  },
  {
    id: 6,
    quote:
      "morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui",
    name: "Vitia Bethell",
  },
  {
    id: 7,
    quote:
      "quisque erat eros viverra eget congue eget semper rutrum nulla nunc",
    name: "Jaquelin Crocroft",
  },
  {
    id: 8,
    quote:
      "nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus",
    name: "Padraic Farlamb",
  },
  {
    id: 9,
    quote:
      "orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in",
    name: "Davine Kuhnt",
  },
  {
    id: 10,
    quote:
      "odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est",
    name: "Tobit McAdam",
  },
  {
    id: 11,
    quote:
      "donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu",
    name: "Hanny Kellegher",
  },
  {
    id: 12,
    quote:
      "mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue",
    name: "Sadie Harral",
  },
  {
    id: 13,
    quote:
      "sapien quis libero nullam sit amet turpis elementum ligula vehicula",
    name: "Roze Housin",
  },
  {
    id: 14,
    quote:
      "eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante",
    name: "Peri Bettis",
  },
  {
    id: 15,
    quote:
      "massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris",
    name: "Orelie Lapley",
  },
  {
    id: 16,
    quote:
      "pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo",
    name: "Giuditta Canter",
  },
  {
    id: 17,
    quote:
      "mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum",
    name: "Sebastiano Francescotti",
  },
  {
    id: 18,
    quote: "congue etiam justo etiam pretium iaculis justo in hac habitasse",
    name: "Shaylah Spriggs",
  },
  {
    id: 19,
    quote:
      "ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse",
    name: "Jude Axe",
  },
  {
    id: 20,
    quote:
      "lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem",
    name: "Fanechka Pilcher",
  },
  {
    id: 21,
    quote:
      "auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet",
    name: "Joella Durward",
  },
  {
    id: 22,
    quote:
      "in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient",
    name: "Nertie Lafflin",
  },
  {
    id: 23,
    quote:
      "pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat",
    name: "Meriel Dingsdale",
  },
  {
    id: 24,
    quote:
      "a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet",
    name: "Enrichetta Pauling",
  },
  {
    id: 25,
    quote:
      "ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    name: "Guido Drinkwater",
  },
  {
    id: 26,
    quote:
      "gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras",
    name: "Ulick Petrasek",
  },
  {
    id: 27,
    quote:
      "consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi",
    name: "Lyssa Fardoe",
  },
  {
    id: 28,
    quote:
      "dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus",
    name: "Donny O'Fairy",
  },
  {
    id: 29,
    quote:
      "at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna",
    name: "Thibaut Faill",
  },
  {
    id: 30,
    quote:
      "proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie",
    name: "Tera Eller",
  },
  {
    id: 31,
    quote:
      "libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas",
    name: "Hank Brende",
  },
  {
    id: 32,
    quote:
      "turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy",
    name: "Bernardina Petrosian",
  },
  {
    id: 33,
    quote:
      "odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam",
    name: "Brittney Joseland",
  },
  {
    id: 34,
    quote: "nec molestie sed justo pellentesque viverra pede ac diam cras",
    name: "Almeria Burner",
  },
  {
    id: 35,
    quote:
      "fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu",
    name: "Major Skeleton",
  },
  {
    id: 36,
    quote: "elit ac nulla sed vel enim sit amet nunc viverra",
    name: "Arda Le Merchant",
  },
  {
    id: 37,
    quote:
      "ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices",
    name: "Wanids Lamort",
  },
  {
    id: 38,
    quote:
      "tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum",
    name: "Betty Blethin",
  },
  {
    id: 39,
    quote:
      "amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi",
    name: "Renault Murie",
  },
  {
    id: 40,
    quote:
      "ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue",
    name: "Terri-jo Friar",
  },
  {
    id: 41,
    quote:
      "dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus",
    name: "Jorry Hardinge",
  },
  {
    id: 42,
    quote:
      "leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper",
    name: "Justino Redwin",
  },
  {
    id: 43,
    quote: "quis justo maecenas rhoncus aliquam lacus morbi quis tortor id",
    name: "Petronia Peak",
  },
  {
    id: 44,
    quote:
      "aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean",
    name: "Gabriello Exter",
  },
  {
    id: 45,
    quote:
      "erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo",
    name: "Ricca Bariball",
  },
  {
    id: 46,
    quote:
      "erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac",
    name: "Chery Godball",
  },
  {
    id: 47,
    quote:
      "platea dictumst morbi vestibulum velit id pretium iaculis diam erat",
    name: "Graig Byham",
  },
  {
    id: 48,
    quote:
      "vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor",
    name: "Wyatan Juste",
  },
  {
    id: 49,
    quote:
      "elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor",
    name: "Ossie Theodoris",
  },
  {
    id: 50,
    quote:
      "viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec",
    name: "Starlin Buessen",
  },
  {
    id: 51,
    quote:
      "a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet",
    name: "Irma Ariss",
  },
  {
    id: 52,
    quote:
      "pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti",
    name: "Jyoti Adney",
  },
  {
    id: 53,
    quote:
      "montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean",
    name: "Toddy Torbett",
  },
  {
    id: 54,
    quote:
      "proin interdum mauris non ligula pellentesque ultrices phasellus id sapien",
    name: "Ginny Covill",
  },
  {
    id: 55,
    quote: "in congue etiam justo etiam pretium iaculis justo in hac",
    name: "Aridatha Sleight",
  },
  {
    id: 56,
    quote:
      "malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim",
    name: "Brady Lauxmann",
  },
  {
    id: 57,
    quote: "tellus nisi eu orci mauris lacinia sapien quis libero nullam",
    name: "Cointon Blackett",
  },
  {
    id: 58,
    quote: "congue diam id ornare imperdiet sapien urna pretium nisl ut",
    name: "Sig Decayette",
  },
  {
    id: 59,
    quote:
      "ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et",
    name: "Othelia Sabin",
  },
  {
    id: 60,
    quote: "erat eros viverra eget congue eget semper rutrum nulla nunc purus",
    name: "Sascha Blacklawe",
  },
  {
    id: 61,
    quote:
      "massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris",
    name: "Joelynn Cheson",
  },
  {
    id: 62,
    quote:
      "vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut",
    name: "Maddy Saunier",
  },
  {
    id: 63,
    quote:
      "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis",
    name: "Annmarie Brugmann",
  },
  {
    id: 64,
    quote:
      "pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet",
    name: "Hadlee Johansson",
  },
  {
    id: 65,
    quote:
      "in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac",
    name: "Gusella Rizzardini",
  },
  {
    id: 66,
    quote:
      "nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet",
    name: "Constance Streeton",
  },
  {
    id: 67,
    quote:
      "ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula",
    name: "Killian Graeber",
  },
  {
    id: 68,
    quote:
      "pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus",
    name: "Blondy Belfit",
  },
  {
    id: 69,
    quote:
      "nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus",
    name: "Gawain Chadbourne",
  },
  {
    id: 70,
    quote:
      "at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis",
    name: "Dixie Pitceathly",
  },
  {
    id: 71,
    quote:
      "sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in",
    name: "Lauren Chubb",
  },
  {
    id: 72,
    quote:
      "fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id",
    name: "Caryn Scaice",
  },
  {
    id: 73,
    quote:
      "id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo",
    name: "Ricard Greenroa",
  },
  {
    id: 74,
    quote: "blandit mi in porttitor pede justo eu massa donec dapibus",
    name: "Camellia Henryson",
  },
  {
    id: 75,
    quote:
      "praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor",
    name: "Anestassia Carstairs",
  },
  {
    id: 76,
    quote:
      "dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum",
    name: "Tierney Alfuso",
  },
  {
    id: 77,
    quote:
      "felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu",
    name: "Jenn McGrey",
  },
  {
    id: 78,
    quote: "suscipit nulla elit ac nulla sed vel enim sit amet nunc",
    name: "Celinka Chappell",
  },
  {
    id: 79,
    quote:
      "cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus",
    name: "Buddie Lambregts",
  },
  {
    id: 80,
    quote:
      "sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse",
    name: "Mildred Meade",
  },
  {
    id: 81,
    quote:
      "dolor sit amet consectetuer adipiscing elit proin risus praesent lectus",
    name: "Wilmette Tortoise",
  },
  {
    id: 82,
    quote:
      "vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet",
    name: "Beaufort Glenister",
  },
  {
    id: 83,
    quote: "proin leo odio porttitor id consequat in consequat ut nulla sed",
    name: "Danica Stihl",
  },
  {
    id: 84,
    quote:
      "nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim",
    name: "Belia Pamment",
  },
  {
    id: 85,
    quote:
      "donec dapibus duis at velit eu est congue elementum in hac habitasse",
    name: "Udale Andries",
  },
  {
    id: 86,
    quote:
      "justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    name: "Tito Corroyer",
  },
  {
    id: 87,
    quote:
      "ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna",
    name: "Pepito Brane",
  },
  {
    id: 88,
    quote: "aenean auctor gravida sem praesent id massa id nisl venenatis",
    name: "Madella Vevers",
  },
  {
    id: 89,
    quote:
      "volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam",
    name: "Abby Ramme",
  },
  {
    id: 90,
    quote:
      "aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo",
    name: "Anjela Garriock",
  },
  {
    id: 91,
    quote:
      "sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing",
    name: "Ashlie Denisard",
  },
  {
    id: 92,
    quote:
      "lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at",
    name: "Benyamin Jackman",
  },
  {
    id: 93,
    quote:
      "ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
    name: "Marillin Maddams",
  },
  {
    id: 94,
    quote:
      "montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl",
    name: "Jule Summerley",
  },
  {
    id: 95,
    quote:
      "non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl",
    name: "Aleen Foulger",
  },
  {
    id: 96,
    quote:
      "posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem",
    name: "Dinny Silliman",
  },
  {
    id: 97,
    quote:
      "aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices",
    name: "Carolee Yepiskov",
  },
  {
    id: 98,
    quote:
      "diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu",
    name: "Reinaldos Leheude",
  },
  {
    id: 99,
    quote:
      "nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor",
    name: "Keriann Covet",
  },
  {
    id: 100,
    quote:
      "ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue",
    name: "Bibi Gilston",
  },
];

export default quotesArr;
