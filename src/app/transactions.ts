import { TransactionType } from "./enums/type.enum";

export interface Transaction {
    type: string,
    _id: string,
    amount: number,
    name: {
        first: string,
        last: string,
    },
    company: string,
    email: string,
    phone: string,
    address: string
}

export const transactions : Transaction[] = [
    {
      "type": "loan",
      "_id": "6235ff3eba04e61c4f7e0977",
      "amount": 2710.24,
      "name": {
        "first": "Monica",
        "last": "Blackburn"
      },
      "company": "ECOSYS",
      "email": "monicablackburn@ecosys.com",
      "phone": "+1 (963) 590-3327",
      "address": "189 Roebling Street, Bluffview, Minnesota, 1393"
    },
    {
      "type": "income",
      "_id": "6235ff3ea21f6a24a447baa6",
      "amount": 1053.18,
      "name": {
        "first": "Cristina",
        "last": "Mcintyre"
      },
      "company": "CORMORAN",
      "email": "cristinamcintyre@cormoran.com",
      "phone": "+1 (959) 434-3717",
      "address": "142 Conklin Avenue, Beyerville, Connecticut, 6082"
    },
    {
      "type": "investment",
      "_id": "6235ff3e8f8e6666a2e0ed85",
      "amount": 2904.68,
      "name": {
        "first": "Nichole",
        "last": "Benton"
      },
      "company": "ZAPPIX",
      "email": "nicholebenton@zappix.com",
      "phone": "+1 (867) 454-2418",
      "address": "737 Bills Place, Frystown, West Virginia, 947"
    },
    {
      "type": "income",
      "_id": "6235ff3ec8e6e4d26ba6a43c",
      "amount": 3129.27,
      "name": {
        "first": "Tammie",
        "last": "Slater"
      },
      "company": "IZZBY",
      "email": "tammieslater@izzby.com",
      "phone": "+1 (991) 417-3034",
      "address": "671 Herkimer Place, Nile, Mississippi, 7480"
    },
    {
      "type": "income",
      "_id": "6235ff3ef485f183715d0711",
      "amount": 1945.69,
      "name": {
        "first": "Decker",
        "last": "Mcpherson"
      },
      "company": "ZUVY",
      "email": "deckermcpherson@zuvy.com",
      "phone": "+1 (850) 447-2415",
      "address": "630 Etna Street, Enetai, Florida, 6030"
    },
    {
      "type": "income",
      "_id": "6235ff3ebccb54e894a2a6a8",
      "amount": 1636.61,
      "name": {
        "first": "Dixie",
        "last": "Simmons"
      },
      "company": "LEXICONDO",
      "email": "dixiesimmons@lexicondo.com",
      "phone": "+1 (950) 464-2158",
      "address": "167 Schweikerts Walk, Konterra, Utah, 469"
    },
    {
      "type": "outcome",
      "_id": "6235ff3e028e9debfc749ff1",
      "amount": 2753.76,
      "name": {
        "first": "Holman",
        "last": "Acevedo"
      },
      "company": "XURBAN",
      "email": "holmanacevedo@xurban.com",
      "phone": "+1 (845) 539-2871",
      "address": "730 Colonial Road, Brutus, Colorado, 2072"
    },
    {
      "type": "outcome",
      "_id": "6235ff3eaca52db6db572fd6",
      "amount": 3205.83,
      "name": {
        "first": "Chrystal",
        "last": "Moran"
      },
      "company": "QUILK",
      "email": "chrystalmoran@quilk.com",
      "phone": "+1 (920) 458-3240",
      "address": "798 Main Street, Muir, New Mexico, 9629"
    },
    {
      "type": "loan",
      "_id": "6235ff3e7ccfa7f45dcee4b4",
      "amount": 1488.95,
      "name": {
        "first": "Eddie",
        "last": "Mcbride"
      },
      "company": "INDEXIA",
      "email": "eddiemcbride@indexia.com",
      "phone": "+1 (865) 423-3956",
      "address": "651 Canton Court, Condon, New York, 1178"
    },
    {
      "type": "outcome",
      "_id": "6235ff3e0135d430d49ea2c8",
      "amount": 3378.52,
      "name": {
        "first": "Ada",
        "last": "Cannon"
      },
      "company": "MEDICROIX",
      "email": "adacannon@medicroix.com",
      "phone": "+1 (990) 438-2456",
      "address": "212 Forest Place, Allendale, South Dakota, 1291"
    },
    {
      "type": "income",
      "_id": "6235ff3edffed9adfcf7c475",
      "amount": 3112.83,
      "name": {
        "first": "Trevino",
        "last": "Randall"
      },
      "company": "UNIA",
      "email": "trevinorandall@unia.com",
      "phone": "+1 (983) 458-3385",
      "address": "502 Montague Street, Smock, Marshall Islands, 8999"
    },
    {
      "type": "loan",
      "_id": "6235ff3e01dfbce06af07180",
      "amount": 1004.49,
      "name": {
        "first": "Lopez",
        "last": "Blankenship"
      },
      "company": "PLUTORQUE",
      "email": "lopezblankenship@plutorque.com",
      "phone": "+1 (870) 422-2907",
      "address": "641 Newkirk Avenue, Shawmut, Arkansas, 3336"
    },
    {
      "type": "outcome",
      "_id": "6235ff3e382cd7c106ae776d",
      "amount": 3062.5,
      "name": {
        "first": "Danielle",
        "last": "Bender"
      },
      "company": "ZOLAVO",
      "email": "daniellebender@zolavo.com",
      "phone": "+1 (999) 521-2003",
      "address": "999 Jackson Court, Dixonville, Arizona, 1741"
    },
    {
      "type": "income",
      "_id": "6235ff3e2ed146f46409c61a",
      "amount": 3404.53,
      "name": {
        "first": "Suzette",
        "last": "Conrad"
      },
      "company": "MARKETOID",
      "email": "suzetteconrad@marketoid.com",
      "phone": "+1 (919) 446-2454",
      "address": "555 Russell Street, Faxon, Michigan, 7693"
    },
    {
      "type": "outcome",
      "_id": "6235ff3e28323bac904b3856",
      "amount": 2275.49,
      "name": {
        "first": "Merle",
        "last": "Long"
      },
      "company": "TERRASYS",
      "email": "merlelong@terrasys.com",
      "phone": "+1 (861) 483-2311",
      "address": "546 Cass Place, Utting, South Carolina, 9759"
    },
    {
      "type": "investment",
      "_id": "6235ff3eeadcd9652ae0ef3b",
      "amount": 2500.16,
      "name": {
        "first": "Walter",
        "last": "Barrera"
      },
      "company": "TELPOD",
      "email": "walterbarrera@telpod.com",
      "phone": "+1 (980) 546-3771",
      "address": "425 School Lane, Joppa, Illinois, 4532"
    },
    {
      "type": "investment",
      "_id": "6235ff3e18a24f50a79fae46",
      "amount": 1529.11,
      "name": {
        "first": "Susan",
        "last": "Snyder"
      },
      "company": "ISOSWITCH",
      "email": "susansnyder@isoswitch.com",
      "phone": "+1 (915) 559-3331",
      "address": "624 Franklin Street, Mayfair, Puerto Rico, 8423"
    },
    {
      "type": "income",
      "_id": "6235ff3e1f9213d096be93dc",
      "amount": 3722.95,
      "name": {
        "first": "Tanner",
        "last": "Buck"
      },
      "company": "DAIDO",
      "email": "tannerbuck@daido.com",
      "phone": "+1 (913) 567-3132",
      "address": "545 Sumner Place, Campo, Idaho, 2400"
    },
    {
      "type": "loan",
      "_id": "6235ff3e2ab3d3767199034e",
      "amount": 3069.02,
      "name": {
        "first": "Ursula",
        "last": "Johns"
      },
      "company": "TURNLING",
      "email": "ursulajohns@turnling.com",
      "phone": "+1 (952) 510-2990",
      "address": "511 Suydam Place, Rivers, Alaska, 2779"
    },
    {
      "type": "outcome",
      "_id": "6235ff3eb01323b813c395fd",
      "amount": 3524.51,
      "name": {
        "first": "Hart",
        "last": "Whitfield"
      },
      "company": "EXTRAGENE",
      "email": "hartwhitfield@extragene.com",
      "phone": "+1 (965) 574-2532",
      "address": "742 Canal Avenue, Chamizal, Northern Mariana Islands, 909"
    },
    {
      "type": "investment",
      "_id": "6235ff3ed4c07b4a44bbcc86",
      "amount": 1799.41,
      "name": {
        "first": "Marianne",
        "last": "Huff"
      },
      "company": "HELIXO",
      "email": "mariannehuff@helixo.com",
      "phone": "+1 (968) 462-2350",
      "address": "957 Brevoort Place, Deputy, Pennsylvania, 9779"
    },
    {
      "type": "income",
      "_id": "6235ff3e7c00a2acff3def84",
      "amount": 1094.76,
      "name": {
        "first": "Caroline",
        "last": "Odonnell"
      },
      "company": "AVIT",
      "email": "carolineodonnell@avit.com",
      "phone": "+1 (987) 551-3817",
      "address": "514 Newton Street, Derwood, Maryland, 5361"
    },
    {
      "type": "outcome",
      "_id": "6235ff3e357046c602d6abc7",
      "amount": 1600.44,
      "name": {
        "first": "Gutierrez",
        "last": "Barker"
      },
      "company": "ZENTIME",
      "email": "gutierrezbarker@zentime.com",
      "phone": "+1 (953) 530-3943",
      "address": "834 Kingsway Place, Edgar, Wisconsin, 4088"
    },
    {
      "type": "outcome",
      "_id": "6235ff3ea232f09d106b9a20",
      "amount": 1649.44,
      "name": {
        "first": "Hardin",
        "last": "Casey"
      },
      "company": "ENTROFLEX",
      "email": "hardincasey@entroflex.com",
      "phone": "+1 (959) 467-2613",
      "address": "954 Perry Terrace, Alamo, Washington, 2329"
    },
    {
      "type": "outcome",
      "_id": "6235ff3e6e69e380570ef7b3",
      "amount": 3440.46,
      "name": {
        "first": "Mccoy",
        "last": "Clements"
      },
      "company": "MEDMEX",
      "email": "mccoyclements@medmex.com",
      "phone": "+1 (861) 510-2085",
      "address": "180 Oceanic Avenue, Thornport, Iowa, 7420"
    },
    {
      "type": "loan",
      "_id": "6235ff3e041836ee8eb74260",
      "amount": 2899.33,
      "name": {
        "first": "Wanda",
        "last": "Lester"
      },
      "company": "KOG",
      "email": "wandalester@kog.com",
      "phone": "+1 (900) 539-3870",
      "address": "448 Decatur Street, Fowlerville, North Carolina, 3904"
    },
    {
      "type": "income",
      "_id": "6235ff3e01fb486410fbe596",
      "amount": 2732.36,
      "name": {
        "first": "Barton",
        "last": "Sanford"
      },
      "company": "UTARA",
      "email": "bartonsanford@utara.com",
      "phone": "+1 (887) 491-2325",
      "address": "377 Dean Street, Allison, Oregon, 9854"
    },
    {
      "type": "loan",
      "_id": "6235ff3e49dee81b561433f3",
      "amount": 2885.19,
      "name": {
        "first": "Autumn",
        "last": "Edwards"
      },
      "company": "ZILLANET",
      "email": "autumnedwards@zillanet.com",
      "phone": "+1 (847) 547-2854",
      "address": "891 Seton Place, Duryea, Ohio, 725"
    },
    {
      "type": "income",
      "_id": "6235ff3e466d64c22aa0484c",
      "amount": 1326.16,
      "name": {
        "first": "Lakeisha",
        "last": "Phelps"
      },
      "company": "EVENTAGE",
      "email": "lakeishaphelps@eventage.com",
      "phone": "+1 (891) 450-2151",
      "address": "980 Mermaid Avenue, Ruckersville, Montana, 8173"
    },
    {
      "type": "investment",
      "_id": "6235ff3e021bf9af3da4cf6e",
      "amount": 1080.96,
      "name": {
        "first": "Chris",
        "last": "Jordan"
      },
      "company": "QNEKT",
      "email": "chrisjordan@qnekt.com",
      "phone": "+1 (935) 487-3859",
      "address": "943 Bedford Place, Driftwood, Tennessee, 8301"
    },
    {
      "type": "outcome",
      "_id": "6235ff3ea70ad8a222821ff2",
      "amount": 3865.57,
      "name": {
        "first": "Burt",
        "last": "Cash"
      },
      "company": "DRAGBOT",
      "email": "burtcash@dragbot.com",
      "phone": "+1 (826) 487-2035",
      "address": "208 Lewis Avenue, Spelter, Nebraska, 8255"
    },
    {
      "type": "investment",
      "_id": "6235ff3e4cfde31cde90cdbb",
      "amount": 3070.26,
      "name": {
        "first": "Kinney",
        "last": "Bolton"
      },
      "company": "SATIANCE",
      "email": "kinneybolton@satiance.com",
      "phone": "+1 (849) 517-2419",
      "address": "458 Greenwood Avenue, Cotopaxi, District Of Columbia, 8946"
    },
    {
      "type": "income",
      "_id": "6235ff3e9de1354cddc99c1a",
      "amount": 1716.89,
      "name": {
        "first": "Betty",
        "last": "Keller"
      },
      "company": "GENMOM",
      "email": "bettykeller@genmom.com",
      "phone": "+1 (906) 408-3789",
      "address": "264 Boynton Place, Ebro, New Hampshire, 4246"
    },
    {
      "type": "investment",
      "_id": "6235ff3ec68009baff9a6238",
      "amount": 2601.63,
      "name": {
        "first": "Parsons",
        "last": "Solis"
      },
      "company": "ACUMENTOR",
      "email": "parsonssolis@acumentor.com",
      "phone": "+1 (857) 448-2598",
      "address": "386 Lynch Street, Trail, Hawaii, 9398"
    },
    {
      "type": "outcome",
      "_id": "6235ff3ef6b65b67d17ad0c3",
      "amount": 1264.68,
      "name": {
        "first": "Moran",
        "last": "Daugherty"
      },
      "company": "ZAGGLES",
      "email": "morandaugherty@zaggles.com",
      "phone": "+1 (913) 474-3310",
      "address": "247 Shale Street, Glenville, Wyoming, 6610"
    },
    {
      "type": "investment",
      "_id": "6235ff3ee8bf3ac1f396be62",
      "amount": 3323.23,
      "name": {
        "first": "Rosalind",
        "last": "Harrell"
      },
      "company": "NAMEGEN",
      "email": "rosalindharrell@namegen.com",
      "phone": "+1 (896) 429-3729",
      "address": "405 Mill Avenue, Whitmer, California, 8356"
    },
    {
      "type": "loan",
      "_id": "6235ff3ef33fd685ee48b9c6",
      "amount": 2702.62,
      "name": {
        "first": "Reilly",
        "last": "Mendez"
      },
      "company": "QUILTIGEN",
      "email": "reillymendez@quiltigen.com",
      "phone": "+1 (923) 465-3116",
      "address": "382 Matthews Place, Hilltop, Delaware, 4787"
    },
    {
      "type": "loan",
      "_id": "6235ff3e61d2add369f36a6a",
      "amount": 2279.95,
      "name": {
        "first": "Maricela",
        "last": "Pratt"
      },
      "company": "COMTEXT",
      "email": "maricelapratt@comtext.com",
      "phone": "+1 (866) 475-2683",
      "address": "127 Lloyd Street, Elfrida, Kansas, 3888"
    },
    {
      "type": "outcome",
      "_id": "6235ff3efcabbd1790bfacd4",
      "amount": 3067.64,
      "name": {
        "first": "Peggy",
        "last": "Hicks"
      },
      "company": "COSMOSIS",
      "email": "peggyhicks@cosmosis.com",
      "phone": "+1 (816) 569-2126",
      "address": "258 Winthrop Street, Allentown, North Dakota, 886"
    },
    {
      "type": "income",
      "_id": "6235ff3e6541ce9bda911052",
      "amount": 2550.14,
      "name": {
        "first": "Myers",
        "last": "Oneill"
      },
      "company": "AUSTECH",
      "email": "myersoneill@austech.com",
      "phone": "+1 (992) 457-3933",
      "address": "953 Carlton Avenue, Cumminsville, Vermont, 5317"
    },
    {
      "type": "income",
      "_id": "6235ff3edc6b411a7920cac8",
      "amount": 3757.94,
      "name": {
        "first": "Mckee",
        "last": "Schultz"
      },
      "company": "BIOSPAN",
      "email": "mckeeschultz@biospan.com",
      "phone": "+1 (839) 531-2963",
      "address": "735 Noel Avenue, Rushford, Virgin Islands, 3169"
    },
    {
      "type": "investment",
      "_id": "6235ff3e789e3a80f77b8257",
      "amount": 1988.75,
      "name": {
        "first": "Sandra",
        "last": "Delacruz"
      },
      "company": "ZYPLE",
      "email": "sandradelacruz@zyple.com",
      "phone": "+1 (904) 526-3245",
      "address": "827 Wortman Avenue, Brady, Texas, 1924"
    },
    {
      "type": "investment",
      "_id": "6235ff3e7791bff787733f78",
      "amount": 1148.32,
      "name": {
        "first": "Sallie",
        "last": "Keith"
      },
      "company": "ZILLADYNE",
      "email": "salliekeith@zilladyne.com",
      "phone": "+1 (936) 507-2256",
      "address": "269 Rockaway Parkway, Wiscon, Palau, 842"
    },
    {
      "type": "income",
      "_id": "6235ff3ecc4a96cba137ebea",
      "amount": 1401.18,
      "name": {
        "first": "Vaughn",
        "last": "Ferguson"
      },
      "company": "GOLOGY",
      "email": "vaughnferguson@gology.com",
      "phone": "+1 (847) 486-2310",
      "address": "564 Poplar Street, Watchtower, Massachusetts, 5739"
    },
    {
      "type": "loan",
      "_id": "6235ff3e6e4c4d2af6bf6bb8",
      "amount": 1155.55,
      "name": {
        "first": "Louise",
        "last": "Gregory"
      },
      "company": "COMTOURS",
      "email": "louisegregory@comtours.com",
      "phone": "+1 (916) 558-3220",
      "address": "902 Ditmas Avenue, Wakulla, Nevada, 1139"
    },
    {
      "type": "investment",
      "_id": "6235ff3e91eca80bd819fc62",
      "amount": 1202.34,
      "name": {
        "first": "Lenora",
        "last": "French"
      },
      "company": "BITREX",
      "email": "lenorafrench@bitrex.com",
      "phone": "+1 (819) 486-3224",
      "address": "189 Blake Court, Berwind, Alabama, 4889"
    },
    {
      "type": "investment",
      "_id": "6235ff3efb03284326bc717e",
      "amount": 3210.13,
      "name": {
        "first": "Mcclain",
        "last": "Rivas"
      },
      "company": "ZEROLOGY",
      "email": "mcclainrivas@zerology.com",
      "phone": "+1 (811) 560-3585",
      "address": "763 Strong Place, Ventress, Indiana, 5986"
    },
    {
      "type": "income",
      "_id": "6235ff3e2036109be9d686be",
      "amount": 3297.63,
      "name": {
        "first": "Murphy",
        "last": "May"
      },
      "company": "ZYTREK",
      "email": "murphymay@zytrek.com",
      "phone": "+1 (950) 560-2051",
      "address": "184 Grand Street, Haring, Maine, 3106"
    },
    {
      "type": "income",
      "_id": "6235ff3eccc5bf82d13db1e0",
      "amount": 2546.64,
      "name": {
        "first": "Hurst",
        "last": "Ford"
      },
      "company": "OCTOCORE",
      "email": "hurstford@octocore.com",
      "phone": "+1 (897) 499-2713",
      "address": "394 Harrison Place, Wattsville, Guam, 8025"
    },
    {
      "type": "investment",
      "_id": "6235ff3e926ab75c03a11001",
      "amount": 3734.9,
      "name": {
        "first": "Eunice",
        "last": "Martin"
      },
      "company": "KINETICUT",
      "email": "eunicemartin@kineticut.com",
      "phone": "+1 (835) 560-2380",
      "address": "470 Belmont Avenue, Belleview, Oklahoma, 9189"
    },
    {
      "type": "income",
      "_id": "6235ff3e34a9be83f030cb1e",
      "amount": 2041.23,
      "name": {
        "first": "Michael",
        "last": "Newman"
      },
      "company": "XOGGLE",
      "email": "michaelnewman@xoggle.com",
      "phone": "+1 (830) 415-3772",
      "address": "872 Keap Street, Ripley, Georgia, 1199"
    },
    {
      "type": "investment",
      "_id": "6235ff3e01253ba6baee29f4",
      "amount": 2311.02,
      "name": {
        "first": "Natasha",
        "last": "Carr"
      },
      "company": "SPHERIX",
      "email": "natashacarr@spherix.com",
      "phone": "+1 (844) 476-3389",
      "address": "367 Catherine Street, Kirk, Virginia, 4627"
    },
    {
      "type": "income",
      "_id": "6235ff3e3349950c02a50a20",
      "amount": 1469.77,
      "name": {
        "first": "Conway",
        "last": "Barlow"
      },
      "company": "TALKOLA",
      "email": "conwaybarlow@talkola.com",
      "phone": "+1 (929) 581-2777",
      "address": "615 Lawrence Street, Brookfield, New Jersey, 2493"
    },
    {
      "type": "outcome",
      "_id": "6235ff3ef6fbe7eedfaeab1b",
      "amount": 3042.59,
      "name": {
        "first": "Barnett",
        "last": "Sexton"
      },
      "company": "BILLMED",
      "email": "barnettsexton@billmed.com",
      "phone": "+1 (902) 504-2786",
      "address": "376 Conselyea Street, Oretta, Federated States Of Micronesia, 5108"
    },
    {
      "type": "loan",
      "_id": "6235ff3e8bf9b2bd469193cc",
      "amount": 1208.37,
      "name": {
        "first": "Candy",
        "last": "Chavez"
      },
      "company": "SONGBIRD",
      "email": "candychavez@songbird.com",
      "phone": "+1 (998) 545-2842",
      "address": "205 Hawthorne Street, Muse, Rhode Island, 5521"
    },
    {
      "type": "outcome",
      "_id": "6235ff3e7ac32ed63634011e",
      "amount": 2175.91,
      "name": {
        "first": "Barr",
        "last": "Ruiz"
      },
      "company": "TALENDULA",
      "email": "barrruiz@talendula.com",
      "phone": "+1 (965) 598-2614",
      "address": "604 Williams Avenue, Oberlin, American Samoa, 8583"
    },
    {
      "type": "outcome",
      "_id": "6235ff3ed5f751010dad95b7",
      "amount": 3235.96,
      "name": {
        "first": "Jordan",
        "last": "Wilson"
      },
      "company": "VICON",
      "email": "jordanwilson@vicon.com",
      "phone": "+1 (885) 594-3360",
      "address": "602 Columbia Street, Brandywine, Louisiana, 5431"
    },
    {
      "type": "loan",
      "_id": "6235ff3e22c446767acd46a0",
      "amount": 1616.64,
      "name": {
        "first": "Stevenson",
        "last": "Austin"
      },
      "company": "IDETICA",
      "email": "stevensonaustin@idetica.com",
      "phone": "+1 (836) 433-3432",
      "address": "229 Dictum Court, Terlingua, Missouri, 1073"
    },
    {
      "type": "outcome",
      "_id": "6235ff3e691dc195ce781193",
      "amount": 3370.23,
      "name": {
        "first": "Augusta",
        "last": "Talley"
      },
      "company": "OCEANICA",
      "email": "augustatalley@oceanica.com",
      "phone": "+1 (920) 600-3334",
      "address": "387 Regent Place, Corriganville, Minnesota, 2166"
    },
    {
      "type": "loan",
      "_id": "6235ff3e10ea55ddd1e8752f",
      "amount": 2941.08,
      "name": {
        "first": "Gayle",
        "last": "Savage"
      },
      "company": "COMTRAK",
      "email": "gaylesavage@comtrak.com",
      "phone": "+1 (893) 522-3238",
      "address": "863 Cumberland Street, Gadsden, Connecticut, 332"
    },
    {
      "type": "investment",
      "_id": "6235ff3e8db0260623098995",
      "amount": 2211.38,
      "name": {
        "first": "Walton",
        "last": "Franklin"
      },
      "company": "SEQUITUR",
      "email": "waltonfranklin@sequitur.com",
      "phone": "+1 (930) 551-2016",
      "address": "305 Croton Loop, Kimmell, West Virginia, 505"
    },
    {
      "type": "income",
      "_id": "6235ff3edabfb15b75c74d09",
      "amount": 1586.64,
      "name": {
        "first": "Ellison",
        "last": "Preston"
      },
      "company": "EXTRAGEN",
      "email": "ellisonpreston@extragen.com",
      "phone": "+1 (941) 555-3058",
      "address": "600 Prince Street, Malott, Mississippi, 7984"
    },
    {
      "type": "loan",
      "_id": "6235ff3eadcec7805929a234",
      "amount": 2918.45,
      "name": {
        "first": "Marie",
        "last": "Howe"
      },
      "company": "GINKOGENE",
      "email": "mariehowe@ginkogene.com",
      "phone": "+1 (906) 457-3777",
      "address": "831 Cleveland Street, Vernon, Florida, 1643"
    },
    {
      "type": "outcome",
      "_id": "6235ff3e88adab88398f4865",
      "amount": 2916.64,
      "name": {
        "first": "Noelle",
        "last": "Gould"
      },
      "company": "SINGAVERA",
      "email": "noellegould@singavera.com",
      "phone": "+1 (803) 428-3397",
      "address": "847 Heath Place, Stollings, Utah, 3539"
    },
    {
      "type": "loan",
      "_id": "6235ff3ef554ebf51b5b827c",
      "amount": 1517.77,
      "name": {
        "first": "Yvette",
        "last": "James"
      },
      "company": "OPTICON",
      "email": "yvettejames@opticon.com",
      "phone": "+1 (902) 514-3236",
      "address": "313 Arkansas Drive, Knowlton, Colorado, 1247"
    },
    {
      "type": "loan",
      "_id": "6235ff3ea9ce29cfd7214f6d",
      "amount": 3183.62,
      "name": {
        "first": "Elvia",
        "last": "Phillips"
      },
      "company": "NEPTIDE",
      "email": "elviaphillips@neptide.com",
      "phone": "+1 (857) 475-3772",
      "address": "308 Stryker Court, Vallonia, New Mexico, 5734"
    },
    {
      "type": "income",
      "_id": "6235ff3e909f825f4ad8bc60",
      "amount": 2745.91,
      "name": {
        "first": "Garrison",
        "last": "Wong"
      },
      "company": "ZYTRAX",
      "email": "garrisonwong@zytrax.com",
      "phone": "+1 (853) 406-3613",
      "address": "216 Wilson Avenue, Flintville, New York, 3731"
    },
    {
      "type": "investment",
      "_id": "6235ff3eebc7f9098755647b",
      "amount": 3001.9,
      "name": {
        "first": "Alvarado",
        "last": "Gallegos"
      },
      "company": "ASSISTIA",
      "email": "alvaradogallegos@assistia.com",
      "phone": "+1 (837) 570-2838",
      "address": "110 Vermont Street, Brambleton, South Dakota, 9369"
    },
    {
      "type": "investment",
      "_id": "6235ff3ecdbf715eb01aa573",
      "amount": 1643.35,
      "name": {
        "first": "Wilcox",
        "last": "Livingston"
      },
      "company": "SPEEDBOLT",
      "email": "wilcoxlivingston@speedbolt.com",
      "phone": "+1 (913) 432-2682",
      "address": "404 Willow Street, Durham, Marshall Islands, 4306"
    },
    {
      "type": "income",
      "_id": "6235ff3e7cd5abdb06066269",
      "amount": 1102.43,
      "name": {
        "first": "Porter",
        "last": "Conner"
      },
      "company": "INQUALA",
      "email": "porterconner@inquala.com",
      "phone": "+1 (861) 572-2098",
      "address": "704 Stewart Street, Belmont, Arkansas, 9509"
    },
    {
      "type": "income",
      "_id": "6235ff3ea1d607a6defd40f6",
      "amount": 2132.99,
      "name": {
        "first": "Lavonne",
        "last": "Owens"
      },
      "company": "KANGLE",
      "email": "lavonneowens@kangle.com",
      "phone": "+1 (968) 568-3155",
      "address": "781 Cumberland Walk, Crenshaw, Arizona, 9950"
    },
    {
      "type": "investment",
      "_id": "6235ff3efbc72d5940f5ed84",
      "amount": 1762.34,
      "name": {
        "first": "Park",
        "last": "Kline"
      },
      "company": "ENJOLA",
      "email": "parkkline@enjola.com",
      "phone": "+1 (821) 505-2171",
      "address": "429 Vista Place, Escondida, Michigan, 4323"
    },
    {
      "type": "outcome",
      "_id": "6235ff3e1d75f9c889fb3b74",
      "amount": 1682.11,
      "name": {
        "first": "Wolfe",
        "last": "Morales"
      },
      "company": "PYRAMIS",
      "email": "wolfemorales@pyramis.com",
      "phone": "+1 (857) 574-3881",
      "address": "786 Grand Avenue, Verdi, South Carolina, 4173"
    },
    {
      "type": "income",
      "_id": "6235ff3e2d5b5e50d63d8ac0",
      "amount": 1351.56,
      "name": {
        "first": "Carter",
        "last": "Goodwin"
      },
      "company": "PRINTSPAN",
      "email": "cartergoodwin@printspan.com",
      "phone": "+1 (820) 445-2696",
      "address": "502 Butler Street, Harviell, Illinois, 9180"
    },
    {
      "type": "investment",
      "_id": "6235ff3e44343b7ebeb78b75",
      "amount": 3510.18,
      "name": {
        "first": "Eloise",
        "last": "Cote"
      },
      "company": "VERAQ",
      "email": "eloisecote@veraq.com",
      "phone": "+1 (906) 454-2846",
      "address": "872 Karweg Place, Sardis, Puerto Rico, 7884"
    },
    {
      "type": "investment",
      "_id": "6235ff3eae2ae94844753e4a",
      "amount": 1388.41,
      "name": {
        "first": "Doris",
        "last": "Welch"
      },
      "company": "REMOLD",
      "email": "doriswelch@remold.com",
      "phone": "+1 (868) 407-3583",
      "address": "601 Applegate Court, Ona, Idaho, 5935"
    },
    {
      "type": "income",
      "_id": "6235ff3ea58379bf05bd082a",
      "amount": 2201.98,
      "name": {
        "first": "Burke",
        "last": "Durham"
      },
      "company": "MEDIFAX",
      "email": "burkedurham@medifax.com",
      "phone": "+1 (825) 568-3459",
      "address": "650 Cox Place, Stouchsburg, Alaska, 8729"
    },
    {
      "type": "income",
      "_id": "6235ff3e2e695d614b409656",
      "amount": 2268.55,
      "name": {
        "first": "Macdonald",
        "last": "Hayden"
      },
      "company": "QUILM",
      "email": "macdonaldhayden@quilm.com",
      "phone": "+1 (889) 557-2806",
      "address": "633 Porter Avenue, Holtville, Northern Mariana Islands, 143"
    },
    {
      "type": "outcome",
      "_id": "6235ff3e1db6ed39af32e260",
      "amount": 1612.96,
      "name": {
        "first": "Margret",
        "last": "Torres"
      },
      "company": "IPLAX",
      "email": "margrettorres@iplax.com",
      "phone": "+1 (930) 598-3729",
      "address": "445 Ovington Avenue, Garnet, Pennsylvania, 1347"
    },
    {
      "type": "loan",
      "_id": "6235ff3ec99ec6d372a85c09",
      "amount": 1102,
      "name": {
        "first": "Gloria",
        "last": "Shaw"
      },
      "company": "COMSTAR",
      "email": "gloriashaw@comstar.com",
      "phone": "+1 (984) 557-3640",
      "address": "768 Crown Street, Beaverdale, Maryland, 8754"
    },
    {
      "type": "income",
      "_id": "6235ff3e4109bedf8cd91346",
      "amount": 2606.91,
      "name": {
        "first": "Foster",
        "last": "Boyer"
      },
      "company": "MULTRON",
      "email": "fosterboyer@multron.com",
      "phone": "+1 (905) 537-2213",
      "address": "103 Granite Street, Roberts, Wisconsin, 3428"
    },
    {
      "type": "outcome",
      "_id": "6235ff3e8c3b7b43ac2e6a2d",
      "amount": 2413.9,
      "name": {
        "first": "Robin",
        "last": "Powers"
      },
      "company": "RECRISYS",
      "email": "robinpowers@recrisys.com",
      "phone": "+1 (884) 459-2003",
      "address": "292 Doughty Street, Dorneyville, Washington, 2944"
    },
    {
      "type": "income",
      "_id": "6235ff3e7fc2cdec964a874f",
      "amount": 3393.26,
      "name": {
        "first": "Elizabeth",
        "last": "Hensley"
      },
      "company": "MAXEMIA",
      "email": "elizabethhensley@maxemia.com",
      "phone": "+1 (916) 431-3725",
      "address": "531 Kermit Place, Rose, Iowa, 4340"
    },
    {
      "type": "income",
      "_id": "6235ff3ef56876c755e77915",
      "amount": 1764.72,
      "name": {
        "first": "Fulton",
        "last": "Morse"
      },
      "company": "ACIUM",
      "email": "fultonmorse@acium.com",
      "phone": "+1 (895) 459-3594",
      "address": "415 Douglass Street, Neibert, North Carolina, 6626"
    },
    {
      "type": "investment",
      "_id": "6235ff3ec9517120a9fd6b27",
      "amount": 3433.83,
      "name": {
        "first": "Franks",
        "last": "Bennett"
      },
      "company": "ECRAZE",
      "email": "franksbennett@ecraze.com",
      "phone": "+1 (955) 568-2081",
      "address": "811 Chester Street, Adelino, Oregon, 6983"
    },
    {
      "type": "loan",
      "_id": "6235ff3e06ae89f7cf8b40de",
      "amount": 2444.42,
      "name": {
        "first": "Irwin",
        "last": "Garrison"
      },
      "company": "HONOTRON",
      "email": "irwingarrison@honotron.com",
      "phone": "+1 (844) 473-3728",
      "address": "442 Crooke Avenue, Axis, Ohio, 9783"
    },
    {
      "type": "investment",
      "_id": "6235ff3e9fda4b94034a3da5",
      "amount": 1372.66,
      "name": {
        "first": "Case",
        "last": "Fox"
      },
      "company": "EQUITOX",
      "email": "casefox@equitox.com",
      "phone": "+1 (939) 593-2281",
      "address": "357 Butler Place, Omar, Montana, 9475"
    },
    {
      "type": "income",
      "_id": "6235ff3ec75a5e3af242450c",
      "amount": 2038.74,
      "name": {
        "first": "Larsen",
        "last": "Walton"
      },
      "company": "ANARCO",
      "email": "larsenwalton@anarco.com",
      "phone": "+1 (891) 448-3732",
      "address": "463 Minna Street, Ronco, Tennessee, 4049"
    },
    {
      "type": "loan",
      "_id": "6235ff3e5a9a871278330a9f",
      "amount": 3186.72,
      "name": {
        "first": "Deana",
        "last": "Rocha"
      },
      "company": "FLEXIGEN",
      "email": "deanarocha@flexigen.com",
      "phone": "+1 (924) 400-2374",
      "address": "481 Frank Court, Crumpler, Nebraska, 1847"
    },
    {
      "type": "investment",
      "_id": "6235ff3e50278a0db6c23c7f",
      "amount": 3515.39,
      "name": {
        "first": "Angelina",
        "last": "Byrd"
      },
      "company": "TETAK",
      "email": "angelinabyrd@tetak.com",
      "phone": "+1 (880) 588-3530",
      "address": "661 Goodwin Place, Manchester, District Of Columbia, 1923"
    },
    {
      "type": "loan",
      "_id": "6235ff3e8429f95d616a8295",
      "amount": 2981.7,
      "name": {
        "first": "Arline",
        "last": "Salazar"
      },
      "company": "INTERFIND",
      "email": "arlinesalazar@interfind.com",
      "phone": "+1 (859) 425-3063",
      "address": "585 Willoughby Avenue, Moquino, New Hampshire, 6602"
    },
    {
      "type": "loan",
      "_id": "6235ff3efe6f74a91c466719",
      "amount": 1345.38,
      "name": {
        "first": "Jackie",
        "last": "Wolfe"
      },
      "company": "FLEETMIX",
      "email": "jackiewolfe@fleetmix.com",
      "phone": "+1 (865) 418-2226",
      "address": "868 Billings Place, Fulford, Hawaii, 9431"
    },
    {
      "type": "investment",
      "_id": "6235ff3e97c73b4a5c94c8f4",
      "amount": 2108.31,
      "name": {
        "first": "Alexandria",
        "last": "Chandler"
      },
      "company": "DATACATOR",
      "email": "alexandriachandler@datacator.com",
      "phone": "+1 (802) 499-3662",
      "address": "419 Schaefer Street, Slovan, Wyoming, 4325"
    },
    {
      "type": "outcome",
      "_id": "6235ff3ec2599b41553df8d0",
      "amount": 1527.13,
      "name": {
        "first": "Norman",
        "last": "Russell"
      },
      "company": "NETUR",
      "email": "normanrussell@netur.com",
      "phone": "+1 (835) 494-2101",
      "address": "666 Bushwick Avenue, Chalfant, California, 9226"
    },
    {
      "type": "outcome",
      "_id": "6235ff3e487aa329ee0f61e1",
      "amount": 3728.18,
      "name": {
        "first": "Carver",
        "last": "Bruce"
      },
      "company": "PRIMORDIA",
      "email": "carverbruce@primordia.com",
      "phone": "+1 (849) 481-3649",
      "address": "580 Prospect Street, Gilmore, Delaware, 3397"
    },
    {
      "type": "investment",
      "_id": "6235ff3eae0c0423909ae175",
      "amount": 2197.23,
      "name": {
        "first": "Alejandra",
        "last": "Charles"
      },
      "company": "DYMI",
      "email": "alejandracharles@dymi.com",
      "phone": "+1 (861) 590-2023",
      "address": "129 Kings Place, Orovada, Kansas, 8474"
    },
    {
      "type": "income",
      "_id": "6235ff3e6d6e6fc5eb99b905",
      "amount": 1847.94,
      "name": {
        "first": "Christina",
        "last": "Townsend"
      },
      "company": "MANGELICA",
      "email": "christinatownsend@mangelica.com",
      "phone": "+1 (831) 574-2054",
      "address": "862 Ainslie Street, Siglerville, North Dakota, 9006"
    },
    {
      "type": "outcome",
      "_id": "6235ff3ee9b1246d05b0ee98",
      "amount": 3534.15,
      "name": {
        "first": "Chase",
        "last": "Lynch"
      },
      "company": "ZAJ",
      "email": "chaselynch@zaj.com",
      "phone": "+1 (984) 446-2467",
      "address": "114 Willmohr Street, Saranap, Vermont, 498"
    },
    {
      "type": "loan",
      "_id": "6235ff3e4764fc24c3fe4889",
      "amount": 3149.32,
      "name": {
        "first": "Marcy",
        "last": "Sears"
      },
      "company": "ENDICIL",
      "email": "marcysears@endicil.com",
      "phone": "+1 (997) 589-3808",
      "address": "736 Kingston Avenue, Hickory, Virgin Islands, 4679"
    },
    {
      "type": "loan",
      "_id": "6235ff3ed076a9abebf69f8d",
      "amount": 3465.06,
      "name": {
        "first": "Eaton",
        "last": "Wells"
      },
      "company": "ENVIRE",
      "email": "eatonwells@envire.com",
      "phone": "+1 (924) 522-3886",
      "address": "555 Box Street, Thynedale, Texas, 5954"
    }
  ]