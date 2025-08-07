    var gameContent = {}
    var foundWords = [];
    var level = 1

    var dictofWords = {
    "9": [
        "abashedly",
        "abbotship",
        "abdominal",
        "abidingly",
        "abortment",
        "abovesaid",
        "abruption",
        "absinthic",
        "accentual",
        "acceptive",
        "accession",
        "accessive",
        "accipiter",
        "acclivous",
        "accretion",
        "accumbent",
        "acetamide",
        "aciculite",
        "acoumeter",
        "acquiesce",
        "acquisite",
        "acquitter",
        "acrophony",
        "acrospire",
        "actualize",
        "addressee",
        "adiaphory",
        "adjective",
        "adjutator",
        "admeasure",
        "admirable",
        "admirably",
        "admirance",
        "adultness",
        "adustible",
        "adversary",
        "aerognosy",
        "aerophoby",
        "aesthesia",
        "affiancer",
        "affidavit",
        "affiliate",
        "affirmant",
        "afflicter",
        "aforesaid",
        "aforetime",
        "aftergame",
        "aftermath",
        "agentship",
        "agminated",
        "agriology",
        "alabaster",
        "alacrious",
        "alembroth",
        "alertness",
        "alkalious",
        "allemande",
        "allodiary",
        "alluminor",
        "alongside",
        "alternacy",
        "altimeter",
        "altimetry",
        "aluminize",
        "amanitine",
        "amassette",
        "amazement",
        "ambustion",
        "ametropia",
        "amidships",
        "amissible",
        "amoebaeum",
        "amorosity",
        "amphibial",
        "amphibium",
        "amphigory",
        "anaerobic",
        "analeptic",
        "analogize",
        "analogous",
        "anarchism",
        "anatocism",
        "anchoress",
        "ankylosis",
        "anciently",
        "androgyne",
        "androides",
        "andromeda",
        "angelhood",
        "angriness",
        "angustate",
        "animalish",
        "animalize",
        "announcer",
        "annualist",
        "annulated",
        "anomalism",
        "antelucan",
        "antemetic",
        "antemural",
        "antenatal",
        "antennule",
        "antholite",
        "antipodal",
        "antipodes",
        "antrovert",
        "apetalous",
        "aphanitic",
        "aphrodite",
        "apishness",
        "aplanatic",
        "apocopate",
        "apostolic",
        "apparency",
        "appealant",
        "appetizer",
        "appliable",
        "apprehend",
        "apteryges",
        "apyrexial",
        "arbustive",
        "archeress",
        "archierey",
        "arcograph",
        "ardassine",
        "arduously",
        "arenation",
        "arendator",
        "arenulous",
        "areolated",
        "areometry",
        "aretology",
        "argentite",
        "arraigner",
        "arsenious",
        "arsesmart",
        "arthrodic",
        "arthropod",
        "ashlering",
        "asparagus",
        "aspersion",
        "aspirator",
        "assastion",
        "assaulter",
        "assembler",
        "assiduity",
        "assistant",
        "assoilyie",
        "astrakhan",
        "astringer",
        "astrolabe",
        "atheology",
        "atmolysis",
        "atmolyzer",
        "atomicism",
        "atonement",
        "attenuate",
        "attracter",
        "audacious",
        "augmenter",
        "authentic",
        "authoress",
        "authorize",
        "autophoby",
        "available",
        "availment",
        "avocation",
        "avoidable",
        "awakening",
        "awfulness",
        "azimuthal",
        "baboonish",
        "backarack",
        "backshish",
        "backwater",
        "bacterial",
        "baenomere",
        "baenosome",
        "bailiwick",
        "balefully",
        "balsamine",
        "bankeress",
        "baptismal",
        "barbarian",
        "barnabite",
        "barograph",
        "barrigudo",
        "basihyoid",
        "basketful",
        "battology",
        "bawdiness",
        "beardless",
        "bedraggle",
        "bedribble",
        "bedridden",
        "beggarism",
        "belecture",
        "believing",
        "belonging",
        "benignant",
        "berserker",
        "bescatter",
        "besetment",
        "beslobber",
        "beslubber",
        "bespatter",
        "bespeckle",
        "biangular",
        "bickering",
        "biflorous",
        "bilateral",
        "biliteral",
        "billboard",
        "bimembral",
        "bipontine",
        "birthmark",
        "bisaccate",
        "bisectrix",
        "biseptate",
        "bismillah",
        "bismuthic",
        "bivalency",
        "biventral",
        "blackcoat",
        "blackener",
        "blackhead",
        "blackness",
        "blankness",
        "bleachery",
        "bleaching",
        "bletonism",
        "blissless",
        "blondness",
        "bloomless",
        "blustrous",
        "boastless",
        "boatswain",
        "boatwoman",
        "bobtailed",
        "bodyguard",
        "bolognese",
        "bombinate",
        "bonhommie",
        "bonnilass",
        "bookmaker",
        "bookplate",
        "bookstore",
        "bootblack",
        "bootmaker",
        "botanizer",
        "botcherly",
        "bowstring",
        "branchery",
        "branchial",
        "breathful",
        "breathing",
        "breeching",
        "bregmatic",
        "brewhouse",
        "brickwork",
        "bridecake",
        "bridgepot",
        "brillante",
        "brillance",
        "broadcast",
        "brothelry",
        "budgeness",
        "bugginess",
        "burnisher",
        "burstwort",
        "bushelman",
        "butcherly",
        "bystander",
        "cabrerite",
        "cacophony",
        "cadastral",
        "cadaveric",
        "calcaneal",
        "calcaneum",
        "calciform",
        "calcinate",
        "calenture",
        "callidity",
        "calycular",
        "camarilla",
        "campanile",
        "camphoric",
        "cancerate",
        "cankerous",
        "cannabine",
        "capacious",
        "capitular",
        "capricorn",
        "caprifole",
        "captation",
        "carbonate",
        "carbonide",
        "carboxide",
        "carcelage",
        "carmelite",
        "carnalism",
        "carnivore",
        "carnosity",
        "carpetbag",
        "carpeting",
        "carpetway",
        "carpolite",
        "cassation",
        "casserole",
        "cassonade",
        "castalian",
        "catamaran",
        "catharsis",
        "catstitch",
        "cauponize",
        "causation",
        "cauterant",
        "cavaliero",
        "caveating",
        "cellarage",
        "cephaloid",
        "cephalous",
        "cerulific",
        "cerussite",
        "cetaceous",
        "chaetopod",
        "champerty",
        "changeful",
        "chantress",
        "chaomancy",
        "chargeful",
        "chavender",
        "chesstree",
        "chevrette",
        "chickaree",
        "chideress",
        "chidester",
        "chievance",
        "childlike",
        "childship",
        "chiliarch",
        "chironomy",
        "chloritic",
        "chloropal",
        "chlorosis",
        "chondrite",
        "choroidal",
        "chromatin",
        "chronique",
        "churchman",
        "cicatrose",
        "cineraria",
        "circinate",
        "circuiter",
        "circuline",
        "clatterer",
        "clavicorn",
        "claviform",
        "clearance",
        "cleavable",
        "climatize",
        "clocklike",
        "clockwork",
        "coadjutor",
        "coastways",
        "coaxation",
        "coccolite",
        "cochleare",
        "coemption",
        "coercible",
        "coetanean",
        "cognition",
        "cognitive",
        "coincider",
        "colaborer",
        "colcothar",
        "collation",
        "collative",
        "colleague",
        "collector",
        "colligate",
        "collusion",
        "collybist",
        "colonelcy",
        "colonical",
        "colonizer",
        "colophony",
        "colorable",
        "coltsfoot",
        "columella",
        "comatulid",
        "comforter",
        "commingle",
        "commodore",
        "commonage",
        "commotion",
        "compacter",
        "comradery",
        "concluder",
        "condemner",
        "condylome",
        "confessor",
        "confinity",
        "confitent",
        "confiture",
        "confixure",
        "conformer",
        "confusely",
        "confutant",
        "congruity",
        "conically",
        "conjugial",
        "conqueror",
        "conscious",
        "consenter",
        "constrain",
        "constrict",
        "contemner",
        "contented",
        "continent",
        "contorted",
        "copygraph",
        "cordially",
        "cordonnet",
        "cormoraut",
        "cornemuse",
        "cornfloor",
        "cornified",
        "corporale",
        "corporeal",
        "correctly",
        "corrupter",
        "coruscate",
        "cosupreme",
        "cotrustee",
        "cottonary",
        "cotyledon",
        "courtiery",
        "covellite",
        "covenable",
        "cowardice",
        "coxcombly",
        "crabeater",
        "crackling",
        "cracksman",
        "crapulous",
        "crataegus",
        "creatress",
        "creekfish",
        "cremation",
        "crenature",
        "crepitant",
        "cretinous",
        "crinitory",
        "crinosity",
        "crispness",
        "crocodile",
        "croconate",
        "crookedly",
        "crossbite",
        "crossbred",
        "crossroad",
        "croustade",
        "crowberry",
        "crowstone",
        "crusading",
        "crustific",
        "cryptical",
        "cryptonym",
        "cuckoldly",
        "culminate",
        "cumbrance",
        "curdiness",
        "curtilage",
        "curvative",
        "cushionet",
        "cutthroat",
        "cyclopean",
        "cynically",
        "daedalous",
        "dangerous",
        "dantesque",
        "darkening",
        "dashboard",
        "dayspring",
        "deadhouse",
        "dearworth",
        "debarment",
        "debarrass",
        "debauched",
        "decennium",
        "decession",
        "decidedly",
        "decilitre",
        "declarant",
        "declinate",
        "decretist",
        "decretive",
        "dedicator",
        "deduction"
    ],
    "5": [
        "abase",
        "abate",
        "abeam",
        "abode",
        "about",
        "above",
        "abuna",
        "abuzz",
        "accoy",
        "acold",
        "acton",
        "acute",
        "adeem",
        "adobe",
        "afire",
        "aflow",
        "afore",
        "afric",
        "agile",
        "aglow",
        "agone",
        "agood",
        "agree",
        "agush",
        "aheap",
        "aider",
        "airer",
        "alack",
        "albee",
        "album",
        "alfet",
        "algal",
        "algol",
        "alife",
        "align",
        "alley",
        "alloo",
        "allyl",
        "alman",
        "almeh",
        "alose",
        "aloud",
        "altar",
        "alure",
        "ament",
        "amply",
        "ampyx",
        "angry",
        "anorn",
        "anura",
        "apart",
        "apery",
        "aphid",
        "apian",
        "apoda",
        "aport",
        "apple",
        "araby",
        "arbor",
        "arear",
        "argal",
        "argus",
        "arist",
        "armil",
        "arret",
        "arsis",
        "arval",
        "askew",
        "aspen",
        "aspic",
        "assay",
        "asset",
        "assot",
        "atake",
        "ataxy",
        "atrip",
        "attic",
        "auget",
        "avens",
        "avile",
        "avise",
        "avoid",
        "await",
        "awake",
        "axile",
        "axman",
        "ayond",
        "backs",
        "bafta",
        "banat",
        "banco",
        "barth",
        "based",
        "basin",
        "bason",
        "basso",
        "baste",
        "basto",
        "beach",
        "beady",
        "beamy",
        "beget",
        "belam",
        "bemad",
        "benet",
        "berme",
        "berry",
        "beset",
        "besom",
        "beton",
        "betso",
        "bewig",
        "bewit",
        "bilbo",
        "binal",
        "bisie",
        "blade",
        "blain",
        "blame",
        "bland",
        "blast",
        "blear",
        "blend",
        "bless",
        "blirt",
        "blive",
        "blunt",
        "bobac",
        "bodge",
        "booty",
        "bossy",
        "bouri",
        "boyau",
        "braky",
        "brawn",
        "brent",
        "breve",
        "brick",
        "bride",
        "brief",
        "broad",
        "brood",
        "brook",
        "bruin",
        "bruit",
        "budge",
        "bunch",
        "burke",
        "burst",
        "busto",
        "cabob",
        "calid",
        "calla",
        "canoe",
        "canon",
        "caple",
        "capel",
        "capon",
        "carse",
        "carus",
        "cates",
        "cawky",
        "cedar",
        "cedry",
        "ceint",
        "cello",
        "cense",
        "cento",
        "cetic",
        "chafe",
        "chaff",
        "chain",
        "chare",
        "chary",
        "chase",
        "cheat",
        "cheer",
        "cheng",
        "cheve",
        "chian",
        "chine",
        "chive",
        "chore",
        "chose",
        "churl",
        "cibol",
        "cider",
        "cilia",
        "civic",
        "clamp",
        "clape",
        "clart",
        "clary",
        "clerk",
        "click",
        "clock",
        "cloom",
        "cloop",
        "clown",
        "cogue",
        "colly",
        "color",
        "comma",
        "cooee",
        "coomb",
        "copra",
        "coral",
        "corky",
        "corol",
        "couch",
        "coupe",
        "cover",
        "covet",
        "covey",
        "cramp",
        "crash",
        "crate",
        "crazy",
        "creak",
        "cress",
        "crisp",
        "crone",
        "cross",
        "croup",
        "crude",
        "crull",
        "crush",
        "crust",
        "cryer",
        "cuish",
        "curio",
        "curly",
        "cutty",
        "czech",
        "daily",
        "dandy",
        "dansk",
        "dashy",
        "dauby",
        "deare",
        "debit",
        "decay",
        "defix",
        "delph",
        "demit",
        "dense",
        "detur",
        "deuce",
        "devil",
        "didst",
        "dimit",
        "dimly",
        "dimmy",
        "diner",
        "diota",
        "disme",
        "divan",
        "dodge",
        "domed",
        "donat",
        "donee",
        "doole",
        "dooly",
        "doree",
        "doubt",
        "dowel",
        "dowle",
        "dowry",
        "dowse",
        "dowst",
        "drain",
        "drent",
        "droil",
        "drome",
        "drove",
        "drovy",
        "drith",
        "duchy",
        "dumpy",
        "dusky",
        "dwarf",
        "dying",
        "eagle",
        "eared",
        "early",
        "earth",
        "eccle",
        "ectad",
        "effet",
        "eigne",
        "elite",
        "eloge",
        "elogy",
        "elute",
        "elvan",
        "emmet",
        "emmew",
        "ennew",
        "enode",
        "ensue",
        "enter",
        "epure",
        "equus",
        "ergot",
        "erose",
        "error",
        "ether",
        "eurus",
        "evade",
        "exist",
        "extol",
        "fable",
        "faith",
        "fancy",
        "farse",
        "fauld",
        "faule",
        "feast",
        "feine",
        "felis",
        "ferie",
        "fetid",
        "feyne",
        "fifer",
        "fifth",
        "finer",
        "finns",
        "firer",
        "firry",
        "firth",
        "fitch",
        "fives",
        "flash",
        "fleak",
        "flear",
        "flesh",
        "fling",
        "flint",
        "flour",
        "flown",
        "fluff",
        "fluky",
        "flung",
        "flute",
        "focus",
        "folio",
        "fonly",
        "forth",
        "fovea",
        "fract",
        "frail",
        "frank",
        "fraud",
        "fresh",
        "frill",
        "frore",
        "frorn",
        "froze",
        "fuchs",
        "fucus",
        "fumer",
        "funge",
        "fussy",
        "fuzzy",
        "galea",
        "gally",
        "gamba",
        "gamic",
        "gaper",
        "garth",
        "garum",
        "gated",
        "gaudy",
        "gayly",
        "gelid",
        "gemma",
        "gerah",
        "ghoul",
        "girth",
        "gisle",
        "gland",
        "glass",
        "glaze",
        "glazy",
        "glede",
        "gleen",
        "gleet",
        "gloam",
        "gloar",
        "gloat",
        "glode",
        "glory",
        "gloss",
        "gluer",
        "gnash",
        "gnome",
        "godly",
        "golet",
        "gomer",
        "gorge",
        "gouty",
        "grade",
        "grail",
        "grame",
        "grasp",
        "grene",
        "greve",
        "gride",
        "griff",
        "grimy",
        "grind",
        "grond",
        "groom",
        "grove",
        "gruel",
        "gruff",
        "grunt",
        "guara",
        "guile",
        "gulch",
        "hades",
        "hairy",
        "hanse",
        "happy",
        "hards",
        "harem",
        "harle",
        "haugh",
        "hault",
        "haver",
        "hawse",
        "heady",
        "heard",
        "heart",
        "hefty",
        "hende",
        "herte",
        "hexyl",
        "hider",
        "hitch",
        "hives",
        "hobit",
        "hocco",
        "holwe",
        "hoven",
        "horal",
        "horny",
        "hotel",
        "humid",
        "humph",
        "hurry",
        "hymar",
        "image",
        "imbow",
        "inane",
        "ingot",
        "inial",
        "inmew",
        "inter",
        "irish",
        "itchy",
        "jaggy",
        "javel",
        "jolif",
        "jorum",
        "joust",
        "juicy",
        "juise",
        "jurat",
        "kalpa",
        "kayko",
        "kecky",
        "kedge",
        "kemps",
        "kempt",
        "ketol",
        "kibed",
        "knead",
        "knits",
        "krang",
        "kudos",
        "kydde",
        "kyley",
        "lanky",
        "lapel",
        "lapps",
        "latch",
        "lathy",
        "lawer",
        "laxly",
        "leach",
        "leany",
        "lease",
        "leash",
        "leech",
        "leman",
        "lepal",
        "lepry",
        "lifen",
        "light"
    ],
    "11": [
        "abandonment",
        "abbreviator",
        "abdominalia",
        "abecedarian",
        "academicals",
        "academician",
        "acataleptic",
        "accentually",
        "accipitrine",
        "accompanier",
        "accordingly",
        "accountable",
        "accountancy",
        "achlamydate",
        "achromatism",
        "acinetiform",
        "acquaintant",
        "acquiescent",
        "acquisitive",
        "acronycally",
        "actinolitic",
        "adjectively",
        "admarginate",
        "adnubilated",
        "adventuress",
        "adverbially",
        "advisedness",
        "aeolotropic",
        "aesthetican",
        "affectioned",
        "affirmatory",
        "afformative",
        "aganglionic",
        "aggrandizer",
        "aggravation",
        "aggregation",
        "agriologist",
        "alabastrian",
        "alabastrine",
        "alamodality",
        "albuminuria",
        "alethiology",
        "alkalescent",
        "allegorizer",
        "allodialism",
        "allogeneous",
        "allomorphic",
        "alphabetism",
        "altercative",
        "alveoliform",
        "amalgamated",
        "amativeness",
        "amenorrhoea",
        "americanize",
        "amovability",
        "amphipneust",
        "amphistylic",
        "anacamptics",
        "anachronous",
        "anagnorisis",
        "andranatomy",
        "angelophany",
        "anglophobia",
        "animalculum",
        "annihilable",
        "anniversary",
        "antecedency",
        "anteriority",
        "antheriform",
        "antiplastic",
        "antipyresis",
        "antipyrotic",
        "apathetical",
        "aphrodisian",
        "apostrophic",
        "appellation",
        "appellative",
        "appellatory",
        "appendicate",
        "apprecation",
        "apprehender",
        "apprizement",
        "approbatory",
        "appulsively",
        "arachnidium",
        "arachnoidal",
        "archdiocese",
        "architraved",
        "argumentize",
        "aristocracy",
        "arminianism",
        "arquebusade",
        "arrangement",
        "artificious",
        "artlessness",
        "assentation",
        "assentatory",
        "assertorial",
        "assignation",
        "assimilable",
        "association",
        "assubjugate",
        "asterolepis",
        "attemperate",
        "attractable",
        "attribution",
        "attributive",
        "austereness",
        "authentical",
        "authenticly",
        "autochthony",
        "automorphic",
        "averruncate",
        "axiomatical",
        "bacciferous",
        "bachelordom",
        "bachelorism",
        "backsettler",
        "badderlocks",
        "balanceable",
        "balancereef",
        "barracouata",
        "bdellometer",
        "bedizenment",
        "beleaguerer",
        "belligerent",
        "benediction",
        "beneficiate",
        "benevolence",
        "betrothment",
        "bicuspidate",
        "bifariously",
        "bifoliolate",
        "bifurcation",
        "bimetallism",
        "biographize",
        "bipartition",
        "bipyramidal",
        "blancmanger",
        "bloodstroke",
        "bloodsucker",
        "blunderhead",
        "bollandists",
        "bonapartean",
        "bookbinding",
        "bourgeoisie",
        "brankursine",
        "breadthwise",
        "breechcloth",
        "brusqueness",
        "burghership",
        "cacogastric",
        "cacographic",
        "calcivorous",
        "calyculated",
        "canaanitish",
        "canaliculus",
        "canceration",
        "candelabrum",
        "cantharidin",
        "capitalness",
        "capitellate",
        "capitularly",
        "capitulator",
        "caprigenous",
        "carousingly",
        "castigation",
        "catastrophe",
        "categorical",
        "catheterize",
        "catholicism",
        "cauliflower",
        "causticness",
        "cavalierism",
        "celestially",
        "celestinian",
        "cephalalgic",
        "cephalology",
        "cerebralist",
        "cerebricity",
        "ceremonious",
        "ceroplastic",
        "certainness",
        "chalkcutter",
        "chartaceous",
        "chastisable",
        "checkerwork",
        "chemosmosis",
        "chevronwise",
        "chiragrical",
        "chirography",
        "chirurgical",
        "cholecystis",
        "cholesteric",
        "chondrodite",
        "choregraphy",
        "chorography",
        "chrismation",
        "christendom",
        "christology",
        "chromoblast",
        "chromograph",
        "chrysoidine",
        "chyliferous",
        "chylopoetic",
        "cicatricial",
        "cineritious",
        "circulative",
        "circumvolve",
        "cisatlantic",
        "citharistic",
        "clairvoyant",
        "clapperclaw",
        "clavicornes",
        "closehauled",
        "closereefed",
        "clothesline",
        "coachfellow",
        "coadjuvancy",
        "cobblestone",
        "coessential",
        "coffeehouse",
        "coincidence",
        "cointension",
        "collectedly",
        "collectible",
        "colleterial",
        "colligation",
        "collitigant",
        "columnarity",
        "commaterial",
        "commendator",
        "commissural",
        "commonition",
        "commonitive",
        "communistic",
        "compactness",
        "compaginate",
        "comparative",
        "compartment",
        "compellably",
        "complotment",
        "comportable",
        "compositous",
        "compressive",
        "comradeship",
        "concaveness",
        "conceptacle",
        "conceptible",
        "concitation",
        "conclusible",
        "concolorous",
        "concordable",
        "concubinage",
        "concurrence",
        "condonation",
        "conductress",
        "confabulate",
        "confineless",
        "confirmator",
        "confirmedly",
        "conflicting",
        "conflictive",
        "confluxible",
        "conformable",
        "confutement",
        "conjunctiva",
        "conjunctive",
        "conjuncture",
        "conjuration",
        "connectedly",
        "consciously",
        "consecrator",
        "consecution",
        "consecutive",
        "consequence",
        "conservancy",
        "consimility",
        "consonantal",
        "conspecific",
        "constabless",
        "constellate",
        "constituent",
        "constrainer",
        "constructor",
        "consumingly",
        "containment",
        "contaminate",
        "contentious",
        "contentless",
        "contestable",
        "contextural",
        "continently",
        "contingency",
        "continuance",
        "continuator",
        "continuedly",
        "contradance",
        "convallarin",
        "conventical",
        "conversably",
        "convincible",
        "convivially",
        "convocation",
        "coparcenary",
        "copplestone",
        "corallinite",
        "corroborant",
        "corrumpable",
        "cosmothetic",
        "countercast",
        "counterdraw",
        "countermure",
        "counterpart",
        "counterseal",
        "cranioclast",
        "cratureless",
        "credibility",
        "cremaillere",
        "cremasteric",
        "crenelation",
        "criminalist",
        "crotaphitic",
        "crustaceous",
        "cryptograph",
        "crystallize",
        "crystalloid",
        "cubicalness",
        "culmination",
        "cupellation",
        "curatorship",
        "curialistic",
        "curvinerved",
        "cycloganoid",
        "cylindrical",
        "cyperaceous",
        "debauchedly",
        "decarbonize",
        "deceitfully",
        "declaration",
        "declination",
        "declinature",
        "decomposite",
        "decretorial",
        "decurionate",
        "defalcation",
        "defeasanced",
        "defensively",
        "defibrinize",
        "deflectable",
        "defoliation",
        "deglutinate",
        "degradingly",
        "degravation",
        "dehonestate",
        "delightsome",
        "delinquency",
        "deliverance",
        "demarcation",
        "demibrigade",
        "demigoddess",
        "democratism",
        "democratize",
        "demonocracy",
        "demonolatry",
        "demonstrate",
        "dendritical",
        "dendrometer",
        "denigration",
        "dentigerous",
        "depauperize",
        "deperditely",
        "deperdition",
        "dereliction",
        "dermopteran",
        "dermostosis",
        "dertrotheca",
        "desiccatory",
        "desightment",
        "designative",
        "despiciency",
        "despisement",
        "despumation",
        "destination",
        "destructive",
        "detenebrate",
        "deteriorate",
        "determinism",
        "deturbation",
        "devastation",
        "developable",
        "devicefully",
        "devouringly",
        "diagnostics",
        "dialyzation",
        "diaphoretic",
        "dichotomist",
        "dichroscope",
        "dicotyledon",
        "dictatorian",
        "didacticity",
        "differentia",
        "differently",
        "dilapidator",
        "dimensioned",
        "diphthongal",
        "diplomatial",
        "diplomatism",
        "disacquaint",
        "disapprover",
        "disavowance",
        "disceptator",
        "disciplinal",
        "discipliner",
        "discolorate",
        "discourager",
        "discubitory",
        "disdiaclast",
        "disentangle",
        "disgraceful",
        "disgracious",
        "disguisedfy",
        "dishonorary",
        "disjunctive",
        "dislikeness",
        "dismortgage",
        "dispensator",
        "disspermous",
        "disprovable",
        "disputative",
        "disquietful",
        "disquietous",
        "disregarder",
        "dissectible",
        "dissepiment",
        "dissimulate",
        "dissimulour",
        "dissolution",
        "distensible",
        "distracting",
        "disulphuric",
        "divergingly",
        "doctrinable",
        "dogmatician",
        "domesticate",
        "domiciliate",
        "downfalling",
        "downhearted",
        "downsitting",
        "dracunculus",
        "drillmaster",
        "drunkenhead",
        "drunkenness",
        "duodecimfid",
        "duplicative",
        "dynamically",
        "effascinate",
        "effigiation",
        "effranchise",
        "effulgently",
        "ejaculation",
        "elaborative",
        "elaboratory",
        "elatrometer",
        "electorship",
        "electrition",
        "electrocute",
        "electrotype",
        "elementally",
        "emaceration",
        "embarkation",
        "embellisher",
        "embiotocoid",
        "emblazoning",
        "emblematist",
        "emblematize",
        "embrocation",
        "embryonated",
        "emolumental",
        "enchiridion",
        "enclavement",
        "endometrium",
        "energetical",
        "engagedness",
        "enlightener",
        "enneagynous",
        "enneandrous",
        "entreatment",
        "enumeration",
        "environment",
        "epicerastic",
        "epicoracoid",
        "epidermeous",
        "epidictical",
        "epignathous",
        "epigraphics",
        "epileptical",
        "epithalamic",
        "equibalance",
        "equinoctial"
    ],
    "7": [
        "abactor",
        "abandum",
        "abassis",
        "abaxile",
        "abscind",
        "abscond",
        "absorpt",
        "abusage",
        "academe",
        "acceder",
        "accoast",
        "accrete",
        "acephal",
        "acerous",
        "acerval",
        "acetous",
        "achaian",
        "acidity",
        "aciform",
        "acinous",
        "acology",
        "acouchy",
        "acridly",
        "actinia",
        "aculeus",
        "adjutor",
        "adonize",
        "adorner",
        "adulter",
        "adunque",
        "adverse",
        "adviser",
        "aeolian",
        "aerator",
        "esopian",
        "affiant",
        "affinal",
        "aftward",
        "agamist",
        "agatine",
        "aggrate",
        "aggrege",
        "agilely",
        "agnatic",
        "agouara",
        "aidance",
        "ailment",
        "aisless",
        "alborak",
        "albumen",
        "alcayde",
        "alewife",
        "alfione",
        "aliform",
        "aliquot",
        "allonym",
        "almonry",
        "already",
        "amasser",
        "ambient",
        "ambitus",
        "ambrite",
        "amenage",
        "amender",
        "ammeter",
        "amylate",
        "amylose",
        "anaemic",
        "anagram",
        "anamese",
        "ancille",
        "andante",
        "andiron",
        "anemone",
        "angerly",
        "angioma",
        "anguine",
        "anhinga",
        "anilide",
        "animate",
        "animism",
        "annexer",
        "anomaly",
        "anormal",
        "antaean",
        "antares",
        "antonym",
        "anywise",
        "apertly",
        "aphetic",
        "apodous",
        "apology",
        "aporose",
        "apothem",
        "approve",
        "aprocta",
        "aproned",
        "aptness",
        "aptotic",
        "apyrexy",
        "aquilon",
        "arabism",
        "aracari",
        "arbored",
        "archway",
        "aridity",
        "ariette",
        "arraign",
        "arrange",
        "arrival",
        "article",
        "artisan",
        "asinine",
        "asonant",
        "assault",
        "assizor",
        "assober",
        "assuage",
        "astylar",
        "ataraxy",
        "atavism",
        "atheism",
        "atheous",
        "atrocha",
        "attagen",
        "aubaine",
        "auction",
        "auntter",
        "austral",
        "autopsy",
        "aviator",
        "avidity",
        "avocate",
        "awesome",
        "axially",
        "axolotl",
        "azarole",
        "azimuth",
        "azotize",
        "baalism",
        "bagpipe",
        "bagreef",
        "bajocco",
        "banging",
        "barilla",
        "barpost",
        "barrack",
        "barrage",
        "barrier",
        "barroom",
        "bartery",
        "bascule",
        "batable",
        "bateful",
        "batiste",
        "batsman",
        "battuta",
        "beastly",
        "beatify",
        "because",
        "bedevil",
        "bedight",
        "bedside",
        "bedsite",
        "bedwarf",
        "beechen",
        "befrill",
        "begrave",
        "beguile",
        "behoove",
        "belabor",
        "belated",
        "belibel",
        "bellied",
        "benefit",
        "benempt",
        "bengola",
        "benison",
        "benzoin",
        "benzoyl",
        "bepaint",
        "bepinch",
        "bertram",
        "beshine",
        "besogne",
        "bespice",
        "bespoke",
        "bespurt",
        "bestain",
        "bestead",
        "bestill",
        "betrust",
        "between",
        "bewreke",
        "biaxial",
        "bigness",
        "billman",
        "biotite",
        "birdlet",
        "birdman",
        "bitless",
        "bitters",
        "bittock",
        "blackly",
        "blankly",
        "blessed",
        "blickey",
        "bloater",
        "blonket",
        "blossom",
        "blowfly",
        "blowzed",
        "blubber",
        "blucher",
        "blusher",
        "boation",
        "bobbish",
        "bobtail",
        "bodiced",
        "bollard",
        "bolting",
        "bondage",
        "boomdas",
        "boorish",
        "bordage",
        "bosquet",
        "bossism",
        "botargo",
        "botcher",
        "boultin",
        "bouncer",
        "bourder",
        "brander",
        "breaded",
        "breeder",
        "bribery",
        "brickle",
        "brigade",
        "brigose",
        "brimmed",
        "brimmer",
        "brinded",
        "brocard",
        "bromide",
        "broncho",
        "bruiser",
        "brunion",
        "brutely",
        "bryozoa",
        "bubbler",
        "buckety",
        "buckeye",
        "buckish",
        "buffoon",
        "bugbane",
        "bugloss",
        "bulchin",
        "bullion",
        "bullish",
        "bullist",
        "buntine",
        "burdock",
        "burnous",
        "butting",
        "butyrin",
        "byssoid",
        "cachiri",
        "cafeneh",
        "caitiff",
        "calcify",
        "calcine",
        "calcule",
        "candiot",
        "cankery",
        "cannily",
        "canteen",
        "canzone",
        "capital",
        "capitol",
        "caponet",
        "cappeak",
        "capsule",
        "capture",
        "carabus",
        "carding",
        "careful",
        "carmine",
        "carotid",
        "cartway",
        "carvist",
        "cascade",
        "castled",
        "casuist",
        "caterer",
        "catfall",
        "cathead",
        "catling",
        "cauline",
        "cavalry",
        "cedared",
        "censure",
        "ceramic",
        "cerasin",
        "cerebel",
        "certain",
        "cestode",
        "cestoid",
        "cetylic",
        "chafery",
        "chagrin",
        "chalice",
        "chameck",
        "chandry",
        "chantor",
        "chantry",
        "charily",
        "chariot",
        "chasmed",
        "cheddar",
        "cheerer",
        "chemist",
        "cheroot",
        "chiefly",
        "chimere",
        "chloral",
        "choking",
        "choltry",
        "chorion",
        "churchy",
        "chylous",
        "ciliary",
        "cipolin",
        "circled",
        "cirsoid",
        "citable",
        "clarino",
        "clasper",
        "clayish",
        "cleaner",
        "cleanse",
        "cleaver",
        "clifted",
        "climber",
        "clotbur",
        "clumber",
        "codetta",
        "codfish",
        "coehorn",
        "cogware",
        "cohabit",
        "cohibit",
        "coinage",
        "cojuror",
        "collect",
        "collide",
        "collier",
        "collish",
        "combine",
        "combust",
        "comfrey",
        "command",
        "company",
        "compear",
        "compend",
        "complex",
        "complot",
        "comport",
        "compter",
        "concede",
        "concert",
        "conduit",
        "confess",
        "confide",
        "confirm",
        "conject",
        "conjure",
        "connive",
        "connote",
        "consume",
        "contact",
        "contour",
        "convert",
        "convive",
        "convoke",
        "cookery",
        "coontie",
        "coppery",
        "copying",
        "corinth",
        "cornage",
        "cornist",
        "cornute",
        "coronal",
        "corrode",
        "corsage",
        "corvine",
        "cottrel",
        "counsel",
        "coupler",
        "couplet",
        "courage",
        "courant",
        "courier",
        "courtly",
        "couteau",
        "cowhide",
        "crackle",
        "cranage",
        "creepie",
        "crevice",
        "cricket",
        "crincum",
        "crinite",
        "cripply",
        "crisply",
        "croaker",
        "crocker",
        "crocket",
        "crofter",
        "crooken",
        "cropper",
        "crucify",
        "crudity",
        "cruelty",
        "crumpet",
        "cruorin",
        "crustal",
        "crusted",
        "cryptal",
        "cubebic",
        "cubhood",
        "cuirass",
        "cuisine",
        "cuminic",
        "cuminil",
        "curcuma",
        "current",
        "curried",
        "cursive",
        "cushion",
        "cutling",
        "cyclops",
        "cyperus",
        "daddock",
        "dammara",
        "dampish",
        "danaite",
        "dangler",
        "darkful",
        "darling",
        "darrain",
        "darrein",
        "dartars",
        "dartoid",
        "dashing",
        "dasyure",
        "daunter",
        "deadish",
        "debased",
        "debauch",
        "decagon",
        "decalog",
        "decapod",
        "decayed",
        "decayer",
        "decease",
        "deceive",
        "decharm",
        "declare",
        "decline",
        "decrown",
        "defacer",
        "defence",
        "deictic",
        "deified",
        "demagog",
        "demarch",
        "demigod",
        "denture",
        "depaint",
        "deriver",
        "dernier",
        "derring",
        "descend",
        "descent",
        "deserve",
        "desight",
        "despume",
        "destroy",
        "detinue",
        "detract",
        "detrite",
        "deutzia",
        "deviant",
        "devilry",
        "devious",
        "devisal",
        "dewfall",
        "dextrad",
        "diarist"
    ],
    "8": [
        "abderian",
        "abderite",
        "abietene",
        "abnormal",
        "abscissa",
        "absonant",
        "absterse",
        "abusable",
        "abutilon",
        "abutment",
        "academic",
        "accadian",
        "accensor",
        "acceptor",
        "acentric",
        "acetated",
        "achenium",
        "achylous",
        "achymous",
        "acinaces",
        "acologic",
        "aconitic",
        "acreable",
        "acrodont",
        "actinoid",
        "actinost",
        "acuition",
        "aculeous",
        "addition",
        "adenitis",
        "adeption",
        "adjugate",
        "adjument",
        "adjuvant",
        "admiring",
        "adroitly",
        "adulator",
        "aduncity",
        "adynamic",
        "aegilops",
        "aerocyst",
        "aerology",
        "aeronaut",
        "aerostat",
        "aethogen",
        "affrayer",
        "againsay",
        "agenesis",
        "ageratum",
        "aggrieve",
        "aglimmer",
        "aglitter",
        "airwards",
        "akinesia",
        "alacrify",
        "albanian",
        "albiness",
        "alderman",
        "aleatory",
        "alehouse",
        "alfenide",
        "algaroba",
        "algidity",
        "alguazil",
        "alhambra",
        "alitrunk",
        "allerion",
        "allision",
        "allmouth",
        "allodial",
        "allottee",
        "alluring",
        "almighty",
        "almsdeed",
        "alomancy",
        "alquifou",
        "altarist",
        "alterity",
        "amblygon",
        "amblyopy",
        "ambreate",
        "ambrosin",
        "ambusher",
        "american",
        "amethyst",
        "amicably",
        "ammodyte",
        "amnestic",
        "amniotic",
        "amortize",
        "amphipod",
        "amurcous",
        "amusable",
        "anabasis",
        "anaglyph",
        "analemma",
        "analogal",
        "anapnoic",
        "anathema",
        "anchored",
        "anconeal",
        "anconeus",
        "anemonin",
        "angevine",
        "anginose",
        "animater",
        "anisette",
        "annexion",
        "annually",
        "annueler",
        "annulate",
        "annuller",
        "anomuran",
        "anophyte",
        "anorthic",
        "antedate",
        "anteroom",
        "anticous",
        "antidote",
        "antipode",
        "antithet",
        "aoristic",
        "apennine",
        "aperture",
        "aphanite",
        "aphonous",
        "aphthong",
        "apodixis",
        "apoplexy",
        "appetite",
        "apporter",
        "approach",
        "approval",
        "apterous",
        "aquarian",
        "araceous",
        "aramaism",
        "araneose",
        "arapaima",
        "arboreal",
        "archical",
        "aretaics",
        "armorial",
        "armozine",
        "arrected",
        "arterial",
        "assinego",
        "aspected",
        "asperity",
        "assenter",
        "assident",
        "assistor",
        "assument",
        "assuming",
        "assyrian",
        "asystole",
        "athenian",
        "atlantic",
        "atmology",
        "atropism",
        "attemper",
        "attestor",
        "auditory",
        "augurist",
        "austrine",
        "autocrat",
        "autotype",
        "avellane",
        "aviseful",
        "avoucher",
        "avoutrie",
        "awakener",
        "aweather",
        "babblery",
        "babehood",
        "bacchant",
        "bacchius",
        "backbone",
        "baconian",
        "baculite",
        "badgerer",
        "baffling",
        "balancer",
        "baldhead",
        "balearic",
        "balefire",
        "ballader",
        "bankside",
        "bannered",
        "banterer",
        "barebone",
        "bareness",
        "barkless",
        "barterer",
        "baseness",
        "basquish",
        "bassetto",
        "basylous",
        "bateless",
        "beakiron",
        "beavered",
        "bebloody",
        "beehouse",
        "befringe",
        "beggable",
        "begotten",
        "begrimer",
        "beheadal",
        "behovely",
        "bellical",
        "bemaster",
        "bemuddle",
        "benzoate",
        "beplumed",
        "bepraise",
        "bergeret",
        "bernicle",
        "berthage",
        "berthing",
        "besieger",
        "besotted",
        "besought",
        "besprent",
        "bestowal",
        "bestrode",
        "bethrall",
        "betrayer",
        "beverage",
        "bewailer",
        "bewrayer",
        "biblical",
        "bickerer",
        "biconvex",
        "biddable",
        "biforate",
        "bijugous",
        "billfish",
        "billhead",
        "biolysis",
        "birdseed",
        "birthday",
        "birthdom",
        "blackleg",
        "bladdery",
        "blandish",
        "blasting",
        "blatancy",
        "blazonry",
        "blendous",
        "blenniid",
        "blessing",
        "blissful",
        "blizzard",
        "blockage",
        "blossomy",
        "blowpipe",
        "blubbery",
        "boarding",
        "boatable",
        "bobbinet",
        "bocasine",
        "bodement",
        "bodiless",
        "boneache",
        "bontebok",
        "bookwork",
        "boracite",
        "bordeaux",
        "bordland",
        "boundary",
        "bourgeon",
        "bowingly",
        "brabbler",
        "bracelet",
        "brachial",
        "bractlet",
        "brakeman",
        "branchia",
        "brattice",
        "brazenly",
        "bridalty",
        "brighten",
        "britzska",
        "broidery",
        "brokenly",
        "bronchic",
        "brougham",
        "browless",
        "browning",
        "brownism",
        "browspot",
        "brutally",
        "budgerow",
        "bullhead",
        "burdener",
        "business",
        "bustling",
        "butchery",
        "buttweld",
        "cabalism",
        "cabalist",
        "cabalize",
        "cadaster",
        "caducous",
        "caesious",
        "caesural",
        "cageling",
        "calamint",
        "calculus",
        "calendar",
        "calliope",
        "callosan",
        "calycine",
        "campanes",
        "cancroid",
        "candidly",
        "canoeing",
        "canstick",
        "capnomor",
        "caponize",
        "capriped",
        "capstone",
        "capuccio",
        "capuchin",
        "caracole",
        "carburet",
        "cardioid",
        "careworn",
        "cargason",
        "carminic",
        "carneous",
        "carnifex",
        "caroched",
        "casemate",
        "castanea",
        "castlery",
        "castrato",
        "catstick",
        "causeuse",
        "caveator",
        "celibate",
        "cenanthy",
        "cenation",
        "cenatory",
        "cenotaph",
        "centinel",
        "cerastes",
        "cerberus",
        "cessavit",
        "cessible",
        "cessment",
        "cesspipe",
        "cesspool",
        "cetacean",
        "chaffery",
        "chainlet",
        "chalazal",
        "chaliced",
        "chanfrin",
        "chartist",
        "chasable",
        "chatwood",
        "cherubin",
        "chetvert",
        "childish",
        "chiretta",
        "chirping",
        "chloasma",
        "chlorate",
        "choragus",
        "christly",
        "chromite",
        "chromule",
        "chthonic",
        "churning",
        "chylific",
        "cilician",
        "circuity",
        "circulet",
        "cirriped",
        "ciselure",
        "citified",
        "civilian",
        "civilize",
        "claimant",
        "clambake",
        "clanship",
        "claptrap",
        "clavecin",
        "cleaning",
        "cleanser",
        "clearage",
        "clemency",
        "cliented",
        "climatal",
        "climatic",
        "clincher",
        "cloister",
        "cloudlet",
        "coaction",
        "coalesce",
        "cobstone",
        "cobwebby",
        "coercive",
        "coextend",
        "cogitate",
        "cognizee",
        "cohobate",
        "coistril",
        "cokernut",
        "colature",
        "coldness",
        "collagen",
        "collator",
        "colliery",
        "collogue",
        "colloquy",
        "colonial",
        "colonist",
        "colorate",
        "columbia",
        "columnar",
        "comatose",
        "comitial",
        "communal",
        "compages",
        "compinge",
        "complain",
        "compress",
        "conation",
        "condoler",
        "confeder",
        "confocal",
        "confrere",
        "congener",
        "congreet",
        "conserve",
        "constant",
        "contrite",
        "contrive",
        "converge",
        "converse",
        "convexed",
        "convince",
        "conylene",
        "cookshop",
        "coolness",
        "coquetry",
        "coranach",
        "cordelle",
        "cornered",
        "cornific",
        "cornloft",
        "cornuted",
        "cornutor",
        "corporas",
        "corselet",
        "corvetto",
        "corybant",
        "cosinage",
        "cossical",
        "costated",
        "costless",
        "cosurety",
        "cotenant",
        "coupable",
        "courtier",
        "cousinly",
        "cousinry",
        "coventry",
        "coverlet",
        "covetise",
        "cowardie",
        "cowquake",
        "credibly",
        "creeping",
        "crescive",
        "cresting",
        "cribbing",
        "crinkled",
        "cristate",
        "critique",
        "cromorna",
        "crookack",
        "crossrow",
        "crotched",
        "crotchet",
        "crowfoot",
        "crucifix",
        "cubiform",
        "cuboidal",
        "cuculoid",
        "cullible",
        "culminal",
        "cumbrous",
        "cumulose",
        "cunabula",
        "cupidity",
        "curarine",
        "curatrix"
    ],
    "6": [
        "abanga",
        "abater",
        "abdest",
        "abider",
        "abjure",
        "abloom",
        "ablush",
        "abraid",
        "absurd",
        "accede",
        "accept",
        "accite",
        "accost",
        "acquit",
        "acrite",
        "across",
        "adagio",
        "adaunt",
        "adduct",
        "adempt",
        "adject",
        "adjute",
        "adnate",
        "adread",
        "advene",
        "affear",
        "affile",
        "affirm",
        "affray",
        "afield",
        "afreet",
        "afront",
        "agamic",
        "aguise",
        "aidful",
        "alated",
        "alegar",
        "algoid",
        "alible",
        "aliene",
        "alight",
        "allect",
        "almner",
        "alsike",
        "althea",
        "alular",
        "alumen",
        "alumna",
        "alveus",
        "always",
        "amends",
        "amotus",
        "amylic",
        "ananas",
        "ancile",
        "ancome",
        "ancone",
        "andron",
        "anetic",
        "anhang",
        "anisic",
        "anlace",
        "anopsy",
        "answer",
        "anther",
        "antler",
        "antlia",
        "aonian",
        "apoise",
        "applot",
        "araise",
        "archil",
        "arenga",
        "armada",
        "armful",
        "arrear",
        "arthen",
        "ashine",
        "askant",
        "aslant",
        "assail",
        "assets",
        "assist",
        "assume",
        "astony",
        "astoop",
        "aswing",
        "ataxic",
        "atrypa",
        "attask",
        "atwain",
        "augean",
        "avoyer",
        "avulse",
        "ayeins",
        "azonic",
        "azymic",
        "babble",
        "bablah",
        "badger",
        "badian",
        "bagman",
        "bailie",
        "balaam",
        "balcon",
        "balker",
        "baltic",
        "bandit",
        "bandle",
        "bandog",
        "bangle",
        "banish",
        "bardic",
        "bargee",
        "barley",
        "barras",
        "barrel",
        "barret",
        "barton",
        "baston",
        "basyle",
        "batman",
        "battel",
        "battue",
        "bauble",
        "bawdry",
        "bawler",
        "bawrel",
        "beater",
        "bedbug",
        "bedeck",
        "beetle",
        "behead",
        "behest",
        "behoof",
        "bejade",
        "belial",
        "belief",
        "belock",
        "belute",
        "bemete",
        "bemire",
        "bemist",
        "bemoan",
        "bemoil",
        "benign",
        "bepelt",
        "bertha",
        "bethel",
        "betook",
        "betrim",
        "bevile",
        "bewail",
        "beylic",
        "biceps",
        "bidden",
        "biffin",
        "bigwig",
        "billed",
        "bimana",
        "binder",
        "birlaw",
        "biseye",
        "bishop",
        "bismer",
        "bitten",
        "bivial",
        "blende",
        "blight",
        "bloody",
        "blooth",
        "blower",
        "blowth",
        "bluing",
        "bodice",
        "boiled",
        "boiler",
        "bolide",
        "bombic",
        "bonded",
        "bonder",
        "bonito",
        "bonnet",
        "boreal",
        "bottom",
        "bounce",
        "bowwow",
        "bowyer",
        "bracer",
        "bragly",
        "brainy",
        "branch",
        "brassy",
        "brayer",
        "brazen",
        "breech",
        "breeze",
        "brewer",
        "brigue",
        "broken",
        "bronze",
        "brooch",
        "browny",
        "bruang",
        "bugger",
        "bulbel",
        "bulimy",
        "bullon",
        "bultow",
        "bummer",
        "burden",
        "burler",
        "burner",
        "burnie",
        "bursal",
        "burton",
        "byword",
        "cabree",
        "cachou",
        "caddow",
        "cadger",
        "cahoot",
        "caliph",
        "calker",
        "callot",
        "callow",
        "camber",
        "campus",
        "canary",
        "cancel",
        "cantab",
        "caprid",
        "cardia",
        "caress",
        "carpet",
        "carton",
        "carvel",
        "casern",
        "catsup",
        "caudex",
        "caudle",
        "cautel",
        "celery",
        "center",
        "ceriph",
        "cerise",
        "cerule",
        "ceruse",
        "cessor",
        "chacma",
        "chance",
        "chaste",
        "cheeky",
        "cheven",
        "chicky",
        "chintz",
        "chippy",
        "chorus",
        "chrism",
        "cicuta",
        "cierge",
        "cilice",
        "cinque",
        "cipher",
        "circle",
        "cirque",
        "citess",
        "citied",
        "civics",
        "clamor",
        "cliche",
        "cloaca",
        "clotty",
        "cloudy",
        "coarse",
        "cobble",
        "cobnut",
        "coccyx",
        "cocoon",
        "coelia",
        "celiac",
        "coifed",
        "collet",
        "collin",
        "column",
        "commit",
        "concha",
        "concur",
        "conoid",
        "consul",
        "cookee",
        "cooler",
        "cooper",
        "copped",
        "copple",
        "coptic",
        "corbel",
        "cornet",
        "cornin",
        "corona",
        "corpus",
        "corven",
        "cossas",
        "cosset",
        "costal",
        "coster",
        "cotyle",
        "coulee",
        "coupee",
        "cozily",
        "crache",
        "crater",
        "creant",
        "creasy",
        "create",
        "cretor",
        "cretan",
        "cretic",
        "crinal",
        "crined",
        "crinet",
        "critic",
        "crocin",
        "croise",
        "cronel",
        "croton",
        "cruise",
        "cuboid",
        "cucujo",
        "cudgel",
        "cullis",
        "culmen",
        "cultus",
        "cupola",
        "cuprum",
        "curacy",
        "curdle",
        "curser",
        "custos",
        "cymoid",
        "dabber",
        "dacapo",
        "dallop",
        "damask",
        "damson",
        "danish",
        "daphne",
        "dapple",
        "dargue",
        "daring",
        "darter",
        "dartle",
        "davyum",
        "dealer",
        "dearly",
        "debarb",
        "debtor",
        "decede",
        "decern",
        "decore",
        "decree",
        "deduit",
        "deesis",
        "defalk",
        "defier",
        "deflow",
        "deftly",
        "deloul",
        "deluge",
        "dement",
        "denary",
        "dentex",
        "depose",
        "depute",
        "deride",
        "desire",
        "detect",
        "deturn",
        "devast",
        "devote",
        "devove",
        "diaper",
        "dibble",
        "dietic",
        "digger",
        "dilate",
        "dimble",
        "dimera",
        "dining",
        "dinner",
        "diploe",
        "dipyre",
        "disbud",
        "disman",
        "divast",
        "divide",
        "doable",
        "docity",
        "dogged",
        "domage",
        "domain",
        "domett",
        "domify",
        "donary",
        "dorsel",
        "dossil",
        "dotard",
        "dotary",
        "drachm",
        "dradge",
        "dredge",
        "dreggy",
        "drivel",
        "drused",
        "ductor",
        "duffel",
        "duffer",
        "dynamo",
        "dynast",
        "easily",
        "eclair",
        "edenic",
        "eelpot",
        "effort",
        "effray",
        "egghot",
        "egoist",
        "elater",
        "elding",
        "elench",
        "elison",
        "emblem",
        "embody",
        "emboil",
        "embush",
        "emesis",
        "emmove",
        "empark",
        "empire",
        "empuse",
        "enable",
        "ending",
        "endure",
        "engird",
        "enhort",
        "enlard",
        "enlimn",
        "enlist",
        "enlute",
        "ennead",
        "enopla",
        "enrank",
        "enrapt",
        "enrive",
        "enroot",
        "ensoul",
        "entity",
        "entree",
        "envier",
        "eozoic",
        "epodic",
        "ermine",
        "escarp",
        "eskimo",
        "esloin",
        "espace",
        "espial",
        "etcher",
        "eunomy",
        "evener",
        "evenly",
        "evince",
        "examen",
        "excern",
        "exedra",
        "exhort",
        "expand",
        "expede",
        "expugn",
        "exuvia",
        "eyghen",
        "fabler",
        "fabric",
        "facies",
        "facing",
        "faffle",
        "falcon",
        "faller",
        "fallow",
        "fanged",
        "farfet",
        "father",
        "fathom",
        "faulty",
        "fausen",
        "fecial",
        "fecund",
        "feeble",
        "feebly",
        "fellon"
    ],
    "10": [
        "abalienate",
        "abdominous",
        "abhorrible",
        "abjunctive",
        "abjuratory",
        "ablastemic",
        "abnormally",
        "aboriginal",
        "abrenounce",
        "abridgment",
        "abscession",
        "absentment",
        "absinthism",
        "absinthium",
        "absistence",
        "absolutory",
        "absolvable",
        "abstracter",
        "absurdness",
        "accostable",
        "accountant",
        "accusation",
        "accusingly",
        "achromatic",
        "acolyctine",
        "acoustical",
        "acroterial",
        "actinology",
        "actinomere",
        "actinozoon",
        "actionable",
        "actionless",
        "actualness",
        "acturience",
        "adaptation",
        "additament",
        "adequately",
        "adhesively",
        "adjunctive",
        "adjuratory",
        "adjustment",
        "admittable",
        "admittedly",
        "admonisher",
        "admonitive",
        "adolescent",
        "adornation",
        "adulatress",
        "adulterize",
        "aegicrania",
        "affectible",
        "affluently",
        "affordable",
        "afterguard",
        "againstand",
        "agalactous",
        "aggrandize",
        "agreeingly",
        "agricultor",
        "ahorseback",
        "albescence",
        "alcoholate",
        "alcyonaria",
        "algebraize",
        "alkalizate",
        "alkaloidal",
        "allegement",
        "allegresse",
        "allegretto",
        "alliciency",
        "allonymous",
        "allotheism",
        "allottable",
        "altazimuth",
        "altisonant",
        "amatorious",
        "ambaginous",
        "ambagitory",
        "ambulacral",
        "ambulacrum",
        "ambulatory",
        "amethodist",
        "amiability",
        "amphibious",
        "amputation",
        "amygdalate",
        "anabaptize",
        "ancestress",
        "anchorable",
        "anchorless",
        "anchylotic",
        "ancistroid",
        "anelectric",
        "anenterous",
        "angioscope",
        "anglemeter",
        "anguineous",
        "angulation",
        "anhelation",
        "animatedly",
        "anisomeric",
        "annalistic",
        "answerable",
        "antagonism",
        "antecedent",
        "antetemple",
        "anticipate",
        "antidotary",
        "antilogous",
        "antiochian",
        "antiscolic",
        "antitheist",
        "antithesis",
        "antonomasy",
        "anywhither",
        "apiculated",
        "aporetical",
        "apostolate",
        "apotactite",
        "apothecary",
        "appearance",
        "appendance",
        "appendency",
        "appendical",
        "appetizing",
        "applausive",
        "appreciate",
        "aquiferous",
        "arachnidan",
        "arbitrator",
        "archaistic",
        "archbutler",
        "arguteness",
        "arietation",
        "arithmetic",
        "arsmetrike",
        "arthrology",
        "articulata",
        "ascendible",
        "asperation",
        "assailable",
        "assentient",
        "asseverate",
        "assignable",
        "astigmatic",
        "astrictive",
        "astrologer",
        "astroscopy",
        "athalamous",
        "attachable",
        "attendance",
        "attraction",
        "auguration",
        "australize",
        "autogeneal",
        "autogenous",
        "autography",
        "automatous",
        "auxiliarly",
        "avengeress",
        "aventurine",
        "avertiment",
        "avidiously",
        "avouchment",
        "babylonian",
        "balaustine",
        "balderdash",
        "baldheaded",
        "ballastage",
        "bankruptcy",
        "banstickle",
        "barehanded",
        "barricader",
        "barringout",
        "bathometer",
        "batrachian",
        "bawdyhouse",
        "beatifical",
        "becomingly",
        "bedswerver",
        "beggestere",
        "behooveful",
        "belgravian",
        "believable",
        "bellybound",
        "bellycheat",
        "bellycheer",
        "belswagger",
        "beneficial",
        "benignancy",
        "bestraddle",
        "bestraught",
        "betelguese",
        "betterment",
        "betterness",
        "bichromate",
        "bicipitous",
        "bickerment",
        "bifurcated",
        "bilaminate",
        "bimaculate",
        "binoculate",
        "binoxalate",
        "bipartient",
        "bipolarity",
        "bipunctual",
        "biquadrate",
        "biquintile",
        "birthplace",
        "bishoplike",
        "blacksmith",
        "blanquillo",
        "blattering",
        "blindstory",
        "bluebottle",
        "blustering",
        "bombardman",
        "bonnetless",
        "borsholder",
        "botuliform",
        "boyishness",
        "brachyuran",
        "braggingly",
        "brahminism",
        "brahminist",
        "branchiura",
        "brandisher",
        "brandywine",
        "brassiness",
        "bridegroom",
        "brightsome",
        "broadsword",
        "bronchitic",
        "bronchitis",
        "brontology",
        "broomstick",
        "brotelness",
        "brownstone",
        "browsewood",
        "buffoonery",
        "bureaucrat",
        "bushranger",
        "butlership",
        "byssaceous",
        "cacotechny",
        "cadaverous",
        "cajuputene",
        "calaverite",
        "calculable",
        "calculated",
        "caledonian",
        "callithump",
        "caloriduct",
        "calumnious",
        "campaigner",
        "camphorate",
        "cancellate",
        "candidness",
        "canonistic",
        "cantillate",
        "capability",
        "capaciosly",
        "capitation",
        "capitulate",
        "capnomancy",
        "capreoline",
        "capsulated",
        "caravaneer",
        "carbazotic",
        "carelessly",
        "carminated",
        "carnassial",
        "carolinian",
        "carpophyll",
        "carthusian",
        "caryatides",
        "casualness",
        "catagmatic",
        "catchdrain",
        "catenarian",
        "celibatist",
        "censorship",
        "centesimal",
        "centistere",
        "centralism",
        "centuriate",
        "cerebritis",
        "chalkiness",
        "chalkstone",
        "challenger",
        "chambering",
        "chandlerly",
        "chargeless",
        "chattelism",
        "chemically",
        "cherimoyer",
        "cherubical",
        "chessboard",
        "cheventein",
        "chimaeroid",
        "chirograph",
        "chiroplast",
        "chivalrous",
        "chlorodyne",
        "chromatype",
        "chromotype",
        "chronogram",
        "churchless",
        "churchyard",
        "chylaceous",
        "cicatricle",
        "cinquefoil",
        "circumduce",
        "circumfuse",
        "circumvent",
        "cisleithan",
        "clangorous",
        "claribella",
        "clavicular",
        "cleftgraft",
        "cleromancy",
        "clientship",
        "climatical",
        "clinometry",
        "clodhopper",
        "clubfooted",
        "coefficacy",
        "coelacanth",
        "coequality",
        "coexisting",
        "cofferwork",
        "coguardian",
        "cohibition",
        "colbertine",
        "coleorhiza",
        "collatable",
        "collection",
        "collingual",
        "colliquate",
        "collophore",
        "colloquist",
        "columnated",
        "combustion",
        "cometarium",
        "cometology",
        "commissure",
        "commitment",
        "commutable",
        "compaction",
        "compatible",
        "competitor",
        "completive",
        "compliance",
        "compliancy",
        "composture",
        "compotator",
        "comprobate",
        "compulsive",
        "compulsory",
        "conceptive",
        "conceptual",
        "concerning",
        "concertion",
        "concessory",
        "concionate",
        "confectory",
        "conference",
        "confervoid",
        "confessary",
        "confluence",
        "confutable",
        "congenious",
        "congruence",
        "conicality",
        "connivance",
        "consecrate",
        "consentant",
        "considerer",
        "consistent",
        "consolable",
        "conspiracy",
        "consulship",
        "consulting",
        "consumedly",
        "consummate",
        "contestant",
        "contiguate",
        "contingent",
        "contortion",
        "contramure",
        "convalesce",
        "conventual",
        "conviciate",
        "convicious",
        "convictism",
        "convulsive",
        "coparcener",
        "copartment",
        "coprolitic",
        "cordwainer",
        "corncutter",
        "corndodger",
        "cornerwise",
        "corniplume",
        "corollated",
        "corpuscule",
        "correctory",
        "cosentient",
        "countryman",
        "cousinship",
        "coverchief",
        "covetously",
        "cowslipped",
        "cragginess",
        "crankiness",
        "crapaudine",
        "creaturize",
        "creditable",
        "crescentic",
        "crewelwork",
        "cribration",
        "cringeling",
        "criosphinx",
        "crispation",
        "crispature",
        "crosspiece",
        "crotalaria",
        "crotaphite",
        "crustacean",
        "crustiness",
        "cuckoldize",
        "cuirassier",
        "culvertail",
        "cumulatist",
        "curability",
        "curateship",
        "curmurring",
        "cyamellone",
        "cyanophyll",
        "cyclostoma",
        "cyclostomi",
        "cyriologic",
        "cytococcus",
        "daintiness",
        "dazzlingly",
        "deathwatch",
        "decalogist",
        "deceivable",
        "deceivably",
        "deceptious",
        "decimalism",
        "decimalize",
        "decipiency",
        "decompound",
        "decorament",
        "decreeable",
        "decrescent",
        "decumbency",
        "dedecorous",
        "defailance",
        "defendable",
        "defendress",
        "defensible",
        "deficiency",
        "defilement",
        "definitive",
        "defoliated",
        "dehiscence",
        "delectable",
        "delegatory",
        "deligation",
        "delightful",
        "delitigate",
        "demagogism",
        "democratic",
        "demography",
        "demonomagy",
        "dendroidal",
        "denouement",
        "dentiloquy",
        "dentiphone",
        "deobstruct",
        "deosculate",
        "dependable",
        "depilatory",
        "deplorable",
        "deprecable",
        "deridingly",
        "derogately",
        "descendant",
        "descendent",
        "descending",
        "deshabille",
        "desiderate",
        "desirously",
        "desolation",
        "desolatory",
        "despicably",
        "desquamate",
        "destinable"
    ],
    "12": [
        "abalienation",
        "abirritation",
        "abirritative",
        "absinthiated",
        "accidentally",
        "accommodable",
        "accommodator",
        "accompletive",
        "accordionist",
        "accouchement",
        "accurateness",
        "accusatively",
        "accustomable",
        "achromatopsy",
        "acquiescency",
        "acroteleutic",
        "actinometric",
        "actinotrocha",
        "addictedness",
        "additionally",
        "adjudicature",
        "adjunctively",
        "admonishment",
        "admonitorial",
        "adorableness",
        "adventitious",
        "advisability",
        "advocateship",
        "aerification",
        "affectionate",
        "affluentness",
        "affrightment",
        "afterthought",
        "agreeability",
        "alexipharmic",
        "alkalescency",
        "allhallowmas",
        "allotropical",
        "amalgamation",
        "ambassadress",
        "ambidextrous",
        "amphitheatre",
        "anaphrodisia",
        "anarthropoda",
        "anathematize",
        "anchoretical",
        "animadverter",
        "anorthoscope",
        "antepileptic",
        "anthocarpous",
        "anthophagous",
        "anthropogeny",
        "anthropoidal",
        "antibrachial",
        "antigalastic",
        "antihysteric",
        "antimacassar",
        "antimetabole",
        "antinational",
        "antisepalous",
        "antistrophic",
        "antistrumous",
        "apocalyptist",
        "apogeotropic",
        "apollinarian",
        "apomecometer",
        "apostemation",
        "apparaillyng",
        "appendicitis",
        "appetibility",
        "approachable",
        "arbitrarious",
        "arborization",
        "archetypally",
        "archetypical",
        "architeuthis",
        "aristarchian",
        "aristophanic",
        "aristotelian",
        "arreptitious",
        "arthrogastra",
        "articulative",
        "asphyxiation",
        "asseverative",
        "assibilation",
        "assimilative",
        "astrological",
        "astronomical",
        "atheological",
        "bacchanalian",
        "bactericidal",
        "bargemastter",
        "becomingness",
        "beneficeless",
        "beneficently",
        "beneficially",
        "bibliopolism",
        "bibliothecal",
        "biliteralism",
        "binarseniate",
        "biomagnetism",
        "bipectinated",
        "bismuthinite",
        "blastodermic",
        "blastosphere",
        "blatherskite",
        "blockheadism",
        "borofluoride",
        "brachygraphy",
        "brevipennate",
        "bushwhacking",
        "cachinnation",
        "calumniatory",
        "canalization",
        "candlewaster",
        "capitulation",
        "captiousness",
        "cartesianism",
        "cataclysmist",
        "cataphractic",
        "catastrophic",
        "catechetical",
        "caterwauling",
        "catilinarian",
        "cautiousness",
        "centrolineal",
        "chameleonize",
        "chaplainship",
        "cheerfulness",
        "cheeseparing",
        "chenomorphae",
        "chirological",
        "chiromantist",
        "chivalrously",
        "chondrometer",
        "christianize",
        "chrysochlore",
        "chrysography",
        "churchwarden",
        "circumfluous",
        "circumjacent",
        "circumvolant",
        "civilization",
        "clairvoyance",
        "clamjamphrie",
        "coalitionist",
        "collaborator",
        "collectively",
        "colliquation",
        "commemorable",
        "commencement",
        "commendation",
        "complacently",
        "complainable",
        "complexioned",
        "conciliation",
        "conclamation",
        "concrescible",
        "concussation",
        "condemnatory",
        "conduplicate",
        "confidential",
        "confirmative",
        "confiscation",
        "conglomerate",
        "conglutinate",
        "connubiality",
        "consanguined",
        "conscionable",
        "conscription",
        "conservatory",
        "considerance",
        "consistently",
        "consistorian",
        "conspiringly",
        "constriction",
        "constringent",
        "contaminable",
        "contemperate",
        "contemptible",
        "contributory",
        "convalescent",
        "convincement",
        "convivialist",
        "convulsively",
        "coordination",
        "coordinative",
        "corporealist",
        "corradiation",
        "costermonger",
        "counterflory",
        "countershaft",
        "counterstand",
        "counterwheel",
        "countreplete",
        "covetousness",
        "creatureship",
        "crepusculous",
        "crepusculine",
        "crustalogist",
        "crystallurgy",
        "culvertailed",
        "cunctipotent",
        "curvicostate",
        "curvidentate",
        "cynarrhodium",
        "darwinianism",
        "debonairness",
        "decalcomanie",
        "decaphyllous",
        "decemdentate",
        "decemvirship",
        "decrustation",
        "dedecoration",
        "dedicatorial",
        "defiguration",
        "definiteness",
        "degenerately",
        "delinquently",
        "delitigation",
        "demisability",
        "demissionary",
        "democratical",
        "demonstrable",
        "demonstrator",
        "denunciation",
        "deordination",
        "depeculation",
        "descensional",
        "desertlessly",
        "devaporation",
        "devotionally",
        "dialectician",
        "diaphemetric",
        "dichromatism",
        "difficultate",
        "dilatability",
        "diminutively",
        "diploblastic",
        "disadventure",
        "disaggregate",
        "disagreeance",
        "disagreement",
        "disangelical",
        "disassiduity",
        "disassociate",
        "disboscation",
        "discerningly",
        "discerptible",
        "disciplinary",
        "discoblastic",
        "disconducive",
        "discongruity",
        "disconsolate",
        "discontented",
        "discontinuee",
        "discountable",
        "discussional",
        "disdainishly",
        "diseasedness",
        "disembellish",
        "disembrangle",
        "disestablish",
        "disgregation",
        "disingenuity",
        "disingenuous",
        "dispatchment",
        "dispensative",
        "disperseness",
        "disputatious",
        "disseminator",
        "dissociation",
        "dissolvative",
        "distinctness",
        "distrainable",
        "divarication",
        "doctrinarian",
        "dodecahedron",
        "dogmatically",
        "domesticator",
        "doubleminded",
        "dramaturgist",
        "draughtboard",
        "dreadfulness",
        "dysmenorrhea",
        "ebracteolate",
        "eccentricity",
        "ectoparasite",
        "edulcoration",
        "effemination",
        "electorality",
        "elextrometry",
        "electromotor",
        "elocutionist",
        "embattlement",
        "embranchment",
        "emigrational",
        "emotionalism",
        "enaliosauria",
        "enclitically",
        "endecagynous",
        "endochondral",
        "endometritis",
        "endoskeleton",
        "enormousness",
        "enswathement",
        "enthronement",
        "epexegetical",
        "epicureanism",
        "epididymitis",
        "episcoparian",
        "equalitarian",
        "equilibrious",
        "erythematous",
        "especialness",
        "esentialness",
        "ethnographer",
        "euhemeristic",
        "evanescently",
        "evangelicity",
        "evangelistic",
        "evisceration",
        "evolutionary",
        "excalfaction",
        "excandescent",
        "excrementive",
        "excruciating",
        "exheredation",
        "exhibitioner",
        "exophthalmic",
        "exorbitantly",
        "expatriation",
        "experiential",
        "exploitation",
        "expostulator",
        "expressional",
        "exterminator",
        "extrageneous",
        "extravagance",
        "fainthearted",
        "familiarness",
        "fantasticism",
        "farmsteading",
        "feldspathose",
        "felicitation",
        "fermentation",
        "fermentative",
        "ferruginated",
        "ferrugineous",
        "fissilingual",
        "flammivomous",
        "flatteringly",
        "fluctiferous",
        "foreordinate",
        "forswornness",
        "fraudulently",
        "freshmanship",
        "fructiculose",
        "fugitiveness",
        "fungilliform",
        "gamosepalous",
        "gastroscopic",
        "gelatigenous",
        "gemmiflorate",
        "genealogical",
        "geocentrical",
        "geognostical",
        "geographical",
        "geologically",
        "gigantomachy",
        "gladiatorism",
        "glandulosity",
        "globulimeter",
        "glossography",
        "gnomonically",
        "governorship",
        "gravelliness",
        "gymnoblastic",
        "haberdashery",
        "hagiographal",
        "hallelujatic",
        "hallucinator",
        "handsomeness",
        "hebdomadally",
        "hemimetabola",
        "hemispheroid",
        "henceforward",
        "heraldically",
        "hermetically",
        "heterogamous",
        "heteronymous",
        "hexacapsular",
        "hierological",
        "homeopathist",
        "homodynamous",
        "horizontally",
        "horometrical",
        "hottentotism",
        "housebuilder",
        "housekeeping",
        "housewarming",
        "humorousness",
        "hydrargyrate",
        "hydrobromide",
        "hymnographer",
        "hyperplastic",
        "hyperpyrexia",
        "hypocleidium",
        "hypocoristic",
        "hyposulphite",
        "hypothenusal",
        "ichthyopsida",
        "iconographer",
        "idealization",
        "ideographics",
        "idiocratical",
        "illacrymable",
        "illiberalism",
        "illuminative",
        "illusionable",
        "illustration",
        "immeasurable",
        "immeasurably",
        "immemorially",
        "immensurable",
        "immutability",
        "imparalleled",
        "impartialist",
        "impenetrable",
        "imperfection",
        "impetiginous",
        "importunable",
        "imposthumate",
        "improsperous",
        "inaccessible",
        "inaccurately",
        "inadvertency",
        "inaniloquous",
        "inapplicable",
        "inauguratory",
        "inauspicious",
        "incatenation",
        "incommutable",
        "incompassion",
        "inconcludent",
        "inconnection",
        "inconvenient",
        "incorporated",
        "incorrigibly",
        "incurability",
        "indefeasible",
        "indefinitely",
        "indeprivable",
        "indetermined",
        "indisputable",
        "industrially",
        "ineffaceable",
        "ineffaceably",
        "inernarrable",
        "inerrability",
        "inexactitude",
        "inexecutable",
        "inexpectable",
        "inexpectedly",
        "inexplicable",
        "inexplorable",
        "inexpressive",
        "inexpugnably",
        "inextricable",
        "infabricated",
        "infiniteness",
        "inflammatory",
        "infrasternal",
        "ingemination",
        "inhabitation",
        "inofficially",
        "insalivation",
        "inspectorate",
        "instilllator",
        "insufferable",
        "insufflation",
        "insupposable",
        "integumation",
        "intellectual",
        "intelligency",
        "intercarotid",
        "interception",
        "interclusion",
        "interconnect",
        "interjacency",
        "intermediary",
        "interminably",
        "intermixedly",
        "internuncial",
        "interpellant",
        "interpolable",
        "interreceive",
        "interrogatee",
        "interspinous",
        "interstitial"
    ],
    "14": [
        "abstractitious",
        "accompliceship",
        "accomplishable",
        "accrementitial",
        "achromatically",
        "acritochromacy",
        "advantageously",
        "agrostological",
        "alcoholization",
        "ambidextrously",
        "analogicalness",
        "answerableness",
        "antagonistical",
        "antimonarchist",
        "antiphlogistic",
        "antiquarianism",
        "antiseptically",
        "antitrochanter",
        "apheliotropism",
        "aphoristically",
        "appreciatingly",
        "apprehensively",
        "archiepiscopal",
        "arrondissement",
        "astrolithology",
        "autocratorical",
        "belletristical",
        "beneficialness",
        "bibliomaniacal",
        "bibliopegistic",
        "blandiloquence",
        "boroughmongery",
        "breathableness",
        "castrametation",
        "cholecystotomy",
        "chorographical",
        "circulatorious",
        "circumambiency",
        "circumrotation",
        "circumspective",
        "commissaryship",
        "compassionable",
        "concertmeister",
        "conclusiveness",
        "conditionality",
        "conduplication",
        "conglutination",
        "conglutinative",
        "congratulatory",
        "conjunctivitis",
        "connaturalness",
        "consanguineous",
        "consignificant",
        "constitutional",
        "contagiousness",
        "contesseration",
        "contraindicate",
        "controvertible",
        "cosmopolitical",
        "cotemporaneous",
        "counterfesance",
        "crystallomancy",
        "cyathophylloid",
        "decompoundable",
        "deflagrability",
        "demisemiquaver",
        "denominational",
        "desulphuration",
        "deutosulphuret",
        "diminutiveness",
        "disapprobation",
        "disapprovingly",
        "disconsolation",
        "disconvenience",
        "disembowelment",
        "disincorporate",
        "disoxygenation",
        "dispensatively",
        "disquisitional",
        "dissociability",
        "dissymmetrical",
        "distemperately",
        "divertissement",
        "dynactinometer",
        "ecclesiologist",
        "electrolytical",
        "electrolyzable",
        "embryoniferous",
        "encyclopedical",
        "enthronization",
        "epidemiography",
        "epigrammatizer",
        "eschatological",
        "experimentally",
        "expressionless",
        "extendlessness",
        "extinguishable",
        "ferriprussiate",
        "fissigemmation",
        "flowerlessness",
        "foreordination",
        "foreremembered",
        "formidableness",
        "forthrightness",
        "galactophagous",
        "galactopoietic",
        "galvanographic",
        "gelatiniferous",
        "glanduliferous",
        "grossification",
        "healthlessness",
        "heavenlyminded",
        "hemiholohedral",
        "heretification",
        "hierogrammatic",
        "hippocrepiform",
        "histographical",
        "hyperaesthesia",
        "hypertrophical",
        "immoderateness",
        "impassibleness",
        "imperscrutable",
        "implausibility",
        "inappreciation",
        "incapacitation",
        "incommunicable",
        "incompleteness",
        "incontentation",
        "incredibleness",
        "inculpableness",
        "indecisiveness",
        "indecorousness",
        "indemonstrable",
        "indestructible",
        "indeterminable",
        "indivisibility",
        "inflexibleness",
        "infratrochlear",
        "ingenerabillty",
        "inharmoniously",
        "inheritability",
        "inquisitorious",
        "inscrutability",
        "insurmountably",
        "intercommunity",
        "interknowledge",
        "interlaminated",
        "interlocutrice",
        "intermaxillary",
        "interplanetary",
        "intertwiningly",
        "intramercurial",
        "intramolecular",
        "intranquillity",
        "intransitively",
        "irreparability",
        "irrevocability",
        "isotherombrose",
        "isotrimorphism",
        "labyrinthiform",
        "latitudinarian",
        "leptodactylous",
        "lithographical",
        "malobservation",
        "melancholiness",
        "metallographic",
        "metallotherapy",
        "meteorographic",
        "microcephalous",
        "micropegmatite",
        "misappreciated",
        "misarrangement",
        "misconsequence",
        "misinstruction",
        "multiplication",
        "multiplicative",
        "myelencephalon",
        "necessarianism",
        "newfangledness",
        "nonappointment",
        "noncondensible",
        "nondevelopment",
        "nonexportation",
        "notobranchiata",
        "obstructionism",
        "omnipresential",
        "opisthocoelous",
        "organometallic",
        "overexcitement",
        "pachydactylous",
        "pachydermatous",
        "paleographical",
        "paradigmatical",
        "paraphrastical",
        "particularment",
        "pectoriloquial",
        "perfectibilian",
        "perfectibility",
        "perfectionment",
        "perissological",
        "persuasibility",
        "perterebration",
        "phantasmatical",
        "philopolemical",
        "philosophaster",
        "philotechnical",
        "phosphorescent",
        "photographical",
        "physiognomical",
        "plagiocephalic",
        "platyelminthes",
        "plesiomorphous",
        "podophthalmous",
        "polyautography",
        "postencephalon",
        "practicability",
        "prebendaryship",
        "predestination",
        "preexistentism",
        "prefecundatory",
        "preferableness",
        "preventability",
        "probabiliorist",
        "proboscidiform",
        "proceleusmatic",
        "proportionable",
        "proportionably",
        "proportionally",
        "pulmocutaneous",
        "quantification",
        "quinquelobared",
        "quinquepartite",
        "recalcitration",
        "reciprocornous",
        "recolonization",
        "recompensement",
        "reconciliation",
        "rehabilitation",
        "remonetization",
        "renidification",
        "resolvableness",
        "responsibility",
        "retrogradation",
        "rhinencephalon",
        "rhynchobdellea",
        "rotundifolious",
        "sacramentalism",
        "salutiferously",
        "sanguification",
        "sanguinivorous",
        "scleroskeleton",
        "selenographist",
        "sentimentalism",
        "sophistication",
        "spermatogenous",
        "spherosiderite",
        "sphygmographic",
        "sporangiophore",
        "stalactitiform",
        "stannofluoride",
        "stethoscopical",
        "stichometrical",
        "stradometrical",
        "stratification",
        "stultiloquence",
        "subarachnoidal",
        "subinfeudation",
        "subnotochordal",
        "substantiality",
        "superadvenient",
        "superannuation",
        "superscription",
        "supervacaneous",
        "supplicatingly",
        "syndesmography",
        "syphilitically",
        "thalamiflorous",
        "thermoelectric",
        "thysanopterous",
        "traditionarily",
        "transpatronize",
        "transplendency",
        "transregionate",
        "transverberate",
        "trinitarianism",
        "turnicimorphae",
        "uncontrollable",
        "understrapping",
        "valetudinarian",
        "viviparousness",
        "volatilization",
        "whippersnapper",
        "zingiberaceous",
        "zygobranchiate"
    ],
    "3": [
        "ado",
        "adz",
        "all",
        "are",
        "auf",
        "ave",
        "awe",
        "awk",
        "bad",
        "bah",
        "bam",
        "bay",
        "beg",
        "bet",
        "box",
        "bud",
        "bum",
        "cad",
        "cid",
        "cog",
        "cot",
        "coz",
        "cry",
        "cun",
        "cur",
        "dig",
        "dim",
        "din",
        "dom",
        "doa",
        "dop",
        "due",
        "dye",
        "ean",
        "ebb",
        "een",
        "eld",
        "ers",
        "ewe",
        "ewt",
        "eye",
        "eyr",
        "fib",
        "fid",
        "fix",
        "foe",
        "fop",
        "fro",
        "ery",
        "gat",
        "gay",
        "gif",
        "gig",
        "gim",
        "gum",
        "han",
        "haw",
        "hen",
        "hie",
        "hop",
        "hot",
        "hud",
        "hut",
        "icy",
        "ion",
        "irk",
        "ism",
        "jah",
        "jug",
        "kin",
        "lax",
        "lim",
        "loo",
        "lug",
        "mam",
        "mat",
        "mir",
        "moe",
        "mot",
        "mue",
        "nef",
        "nep",
        "ner",
        "nib",
        "nim",
        "nob",
        "nof",
        "oak",
        "ods",
        "oft",
        "ook",
        "pah",
        "pap",
        "pas",
        "paw",
        "pet",
        "piu",
        "pox",
        "poy",
        "rap",
        "rep",
        "rew",
        "rid",
        "rot",
        "rug",
        "rye",
        "sad",
        "sam",
        "sis",
        "sit",
        "sny",
        "spy",
        "sue",
        "sup",
        "sye",
        "tas",
        "ten",
        "tid",
        "too",
        "tow",
        "tub",
        "vie",
        "vim",
        "vis",
        "viz",
        "vox",
        "web",
        "wem",
        "wep",
        "who",
        "yes",
        "zif"
    ],
    "4": [
        "adit",
        "afar",
        "affy",
        "alew",
        "ally",
        "alto",
        "alum",
        "amic",
        "amyl",
        "anew",
        "anil",
        "anoa",
        "arab",
        "arch",
        "area",
        "arid",
        "army",
        "arse",
        "avel",
        "aves",
        "avie",
        "avis",
        "avow",
        "back",
        "bake",
        "bane",
        "bard",
        "base",
        "bash",
        "bate",
        "bear",
        "beem",
        "bevy",
        "bide",
        "bier",
        "bilk",
        "birr",
        "birt",
        "bitt",
        "blat",
        "blet",
        "blur",
        "bond",
        "book",
        "boom",
        "boon",
        "bord",
        "boud",
        "bowl",
        "brae",
        "brat",
        "brim",
        "bung",
        "bunt",
        "burg",
        "burl",
        "bury",
        "bush",
        "cack",
        "calm",
        "cany",
        "cape",
        "cave",
        "cede",
        "cell",
        "cess",
        "cham",
        "ches",
        "chew",
        "chop",
        "chud",
        "circ",
        "clap",
        "clay",
        "clip",
        "clod",
        "cloy",
        "clum",
        "coir",
        "coma",
        "comb",
        "cora",
        "cork",
        "coss",
        "cote",
        "cozy",
        "crag",
        "craw",
        "crux",
        "daff",
        "dale",
        "dane",
        "dang",
        "dare",
        "darr",
        "dash",
        "date",
        "dawk",
        "dear",
        "debt",
        "deck",
        "deer",
        "dees",
        "defy",
        "deil",
        "dell",
        "deme",
        "derf",
        "deva",
        "dial",
        "dink",
        "dite",
        "doll",
        "dolt",
        "dour",
        "doze",
        "dual",
        "duct",
        "duds",
        "dump",
        "dune",
        "dura",
        "dure",
        "dust",
        "duty",
        "dyad",
        "eath",
        "egad",
        "egal",
        "envy",
        "erin",
        "erse",
        "esox",
        "espy",
        "etch",
        "eugh",
        "evil",
        "eyen",
        "fade",
        "falk",
        "fane",
        "fast",
        "faun",
        "feat",
        "feel",
        "felt",
        "fend",
        "fico",
        "file",
        "film",
        "fint",
        "fist",
        "five",
        "flay",
        "flit",
        "flop",
        "flow",
        "foin",
        "font",
        "form",
        "foul",
        "fozy",
        "fray",
        "free",
        "frim",
        "frog",
        "fuel",
        "fuff",
        "fuga",
        "full",
        "fumy",
        "funk",
        "fuzz",
        "gain",
        "gaul",
        "geal",
        "gear",
        "geat",
        "gest",
        "gibe",
        "give",
        "glad",
        "glee",
        "glim",
        "glut",
        "gnof",
        "goad",
        "goby",
        "goer",
        "gold",
        "gong",
        "gord",
        "gore",
        "goud",
        "gout",
        "gres",
        "grim",
        "grot",
        "grum",
        "gull",
        "gulp",
        "gyle",
        "gyte",
        "gyve",
        "haft",
        "hair",
        "halt",
        "hame",
        "hand",
        "hare",
        "hark",
        "harl",
        "hawk",
        "heat",
        "hebe",
        "heel",
        "held",
        "helm",
        "help",
        "hemp",
        "heng",
        "hern",
        "hete",
        "hide",
        "high",
        "hind",
        "hogo",
        "holy",
        "hoom",
        "hued",
        "huff",
        "hurr",
        "icon",
        "inca",
        "iron",
        "isis",
        "jane",
        "jehu",
        "jerk",
        "jilt",
        "jove",
        "july",
        "jury",
        "kate",
        "keck",
        "keen",
        "keep",
        "keld",
        "kemb",
        "kibe",
        "kind",
        "king",
        "kish",
        "kith",
        "knab",
        "knob",
        "lakh",
        "laft",
        "lair",
        "laky",
        "lang",
        "lare",
        "lawe",
        "lawn",
        "leak",
        "lear",
        "leet",
        "lege",
        "lend",
        "lest",
        "leve",
        "limn",
        "limu",
        "ling",
        "link",
        "lion",
        "loft",
        "long",
        "loon",
        "louk",
        "luna",
        "lung",
        "luny",
        "lusk",
        "lust",
        "lyne",
        "mala",
        "male",
        "malt",
        "many",
        "mara",
        "mask",
        "maty",
        "maud",
        "maul",
        "mean",
        "meat",
        "melt",
        "mien",
        "miff",
        "migo",
        "moco",
        "moke",
        "moky",
        "mold",
        "mono",
        "moor",
        "mora",
        "morn",
        "mort",
        "move",
        "mule",
        "mumm",
        "mump",
        "must",
        "nail",
        "nart",
        "nine",
        "noll",
        "nook",
        "odin",
        "odor",
        "ogle",
        "ogre",
        "olpe",
        "omen",
        "only",
        "opus",
        "orby",
        "ovum",
        "paas",
        "pacu",
        "pali",
        "pall",
        "palm",
        "pang",
        "pant",
        "para",
        "pare",
        "part",
        "pave",
        "peep",
        "peer",
        "pelt",
        "peso",
        "phiz",
        "piet",
        "pily",
        "pink",
        "piny",
        "pipa",
        "pipy",
        "pirl",
        "pish",
        "plea",
        "plim",
        "ploy",
        "plug",
        "poke",
        "pome",
        "pood",
        "pory",
        "pour",
        "pray",
        "prie",
        "prim",
        "puer",
        "pull",
        "pulp",
        "pung",
        "pupa",
        "pupe",
        "pyet",
        "pyro",
        "quet",
        "quid",
        "quin",
        "raff",
        "ramp",
        "rank",
        "rate",
        "rath",
        "reap",
        "rear",
        "reem",
        "reif",
        "reit",
        "rhea",
        "ride",
        "rief",
        "rift",
        "rode",
        "roed",
        "roll",
        "romp",
        "roon",
        "rope",
        "rosy",
        "rota",
        "ruft",
        "ruga",
        "ruse",
        "rusk",
        "ryal",
        "sacs",
        "saki",
        "sand",
        "sank",
        "sans",
        "scad",
        "scud",
        "scup",
        "seak",
        "seet",
        "self",
        "sely",
        "sens",
        "sent",
        "serf",
        "serr",
        "shab",
        "shet",
        "ship",
        "shoo",
        "shot",
        "sice",
        "sick",
        "sift",
        "sigh",
        "silk",
        "silt",
        "size",
        "skip",
        "slam",
        "sley",
        "slop",
        "snet",
        "snig",
        "snip",
        "snod",
        "snot",
        "soda",
        "soja",
        "sold",
        "sole",
        "solo",
        "sori",
        "sorn",
        "sory",
        "sour",
        "spae",
        "spar",
        "spur",
        "sput",
        "stew",
        "stir",
        "stub",
        "stud",
        "stut",
        "such",
        "suds",
        "suit",
        "sulk",
        "sung",
        "swan",
        "swig",
        "swim",
        "syle",
        "tack",
        "tail",
        "tame",
        "tank",
        "tapa",
        "tape",
        "tatt",
        "team",
        "tear",
        "teil",
        "tell",
        "tend",
        "term",
        "tern",
        "test",
        "thak",
        "that",
        "thaw",
        "thin",
        "tiff",
        "tigh",
        "tith",
        "toat",
        "toco",
        "tola",
        "tolt",
        "tony",
        "toon",
        "tort",
        "town",
        "tozy",
        "trim"
    ],
    "13": [
        "abdominoscopy",
        "abortifacient",
        "absorbability",
        "accelerograph",
        "acceptability",
        "acceptilation",
        "accommodately",
        "accommodating",
        "accustomarily",
        "acetification",
        "acroceraunian",
        "adventurously",
        "affectibility",
        "afflictedness",
        "agglomeration",
        "agglutination",
        "agriculturism",
        "algebraically",
        "amarantaceous",
        "amphiprostyle",
        "amphisbaenoid",
        "amygdalaceous",
        "anachronistic",
        "anatomization",
        "andropetalous",
        "anemometrical",
        "anidiomatical",
        "anomophyllous",
        "antecommunion",
        "anthraquinone",
        "anthropogenic",
        "anthropomancy",
        "anticlinorium",
        "antinomianism",
        "antisplenetic",
        "apocrisiarius",
        "apodictically",
        "appendication",
        "appertainment",
        "apprehensible",
        "apprenticeage",
        "appropriative",
        "approximately",
        "approximative",
        "arbitrariness",
        "archaeography",
        "archaeologian",
        "archaeologist",
        "archencephala",
        "archiannelida",
        "architectress",
        "aromatization",
        "associational",
        "astrotheology",
        "bacterioscopy",
        "benedictional",
        "bewitchedness",
        "bibliothecary",
        "blamelessness",
        "blasphemously",
        "brachioganoid",
        "brachypterous",
        "brevirostrate",
        "brutalization",
        "bumptiousness",
        "campanularian",
        "cardiographic",
        "catechisation",
        "catechistical",
        "catechumenist",
        "causelessness",
        "cauterization",
        "centrostaltic",
        "cerographical",
        "certification",
        "chalaziferous",
        "charlatanical",
        "cheatableness",
        "chondrigenous",
        "chrematistics",
        "chromoplastid",
        "churchmanship",
        "circumagitate",
        "cleavelandite",
        "cobelligerent",
        "coelospermous",
        "collaboration",
        "columbiferous",
        "commiseration",
        "commissionary",
        "compactedness",
        "compatriotism",
        "comprehension",
        "concentration",
        "conceptualist",
        "concubinarian",
        "condescension",
        "confectionery",
        "confessionist",
        "conflagration",
        "conjecturable",
        "connaturalize",
        "conscientious",
        "consciousness",
        "consentaneity",
        "constableship",
        "constrainedly",
        "consuetudinal",
        "contemplation",
        "contertionist",
        "contrabandist",
        "contrariously",
        "contraversion",
        "cornification",
        "corrigibility",
        "counterstroke",
        "countretaille",
        "crebricostate",
        "cryptographal",
        "cynarctomachy",
        "declaratively",
        "deconcentrate",
        "deducibleness",
        "dehydrogenate",
        "dematerialize",
        "denationalize",
        "deoxygenation",
        "deprehensible",
        "desirableness",
        "despecificate",
        "despicability",
        "detersiveness",
        "diageotropism",
        "diaphanoscope",
        "diaphoretical",
        "disappendency",
        "disaventurous",
        "disconcertion",
        "disconformity",
        "discretionary",
        "disembarkment",
        "disenshrouded",
        "disestimation",
        "disguisedness",
        "disintegrable",
        "disnaturalize",
        "dispassionate",
        "displantation",
        "dispraisingly",
        "dispurveyance",
        "dissipativity",
        "dulcification",
        "effervescible",
        "egotistically",
        "egregiousness",
        "egyptological",
        "electroscopic",
        "electrotonize",
        "electrotonous",
        "elegiographer",
        "embarrassment",
        "embryological",
        "embryoplastic",
        "enaliosaurian",
        "encephalocele",
        "encyclopedian",
        "endolymphatic",
        "enigmatically",
        "entertainment",
        "epigrammatist",
        "epithumetical",
        "equinoctially",
        "equiponderous",
        "estrangedness",
        "eurypteroidea",
        "evangelically",
        "evangelistary",
        "exanthematous",
        "excarnificate",
        "exceptionless",
        "exclusiveness",
        "excrescential",
        "exemplifiable",
        "experimentist",
        "expostulatory",
        "extemporiness",
        "extermination",
        "exterritorial",
        "extracapsular",
        "extrajudicial",
        "extralimitary",
        "extravagation",
        "fertilization",
        "fibrospongiae",
        "floccillation",
        "foreknowingly",
        "forementioned",
        "forgetfulness",
        "garnetiferous",
        "generalizable",
        "gesticulation",
        "gesticulatory",
        "glossological",
        "gnathastegite",
        "granddaughter",
        "grandiloquent",
        "grandmotherly",
        "gratification",
        "gynandromorph",
        "haematogenous",
        "hairsplitting",
        "heptaspermous",
        "hermaphrodite",
        "herpetologist",
        "heteroclitous",
        "hexoctahedron",
        "histohaematin",
        "homoeomerical",
        "honorableness",
        "humorsomeness",
        "hydrocarburet",
        "hydrocephalic",
        "hydrogenation",
        "hydrophlorone",
        "hydroxanthane",
        "hymenopterous",
        "hyperboliform",
        "hyposulphuric",
        "ichthyologist",
        "imaginability",
        "impalpability",
        "impersonality",
        "impignoration",
        "impreparation",
        "impreventable",
        "improbability",
        "improvisation",
        "improvisatory",
        "inarticulated",
        "incapableness",
        "incastellated",
        "incoexistence",
        "incoincidence",
        "incommiscible",
        "inconceptible",
        "inconsideracy",
        "inconsistency",
        "inconveniency",
        "indispensably",
        "individualize",
        "industrialism",
        "ineligibility",
        "inerrableness",
        "inflorescence",
        "infraposition",
        "infrugiferous",
        "inhospitality",
        "inobservation",
        "inoculability",
        "inopportunely",
        "inorthography",
        "insignificant",
        "inspectorship",
        "instantaneous",
        "instigatingly",
        "instimulation",
        "instrumentist",
        "integumentary",
        "intelligencer",
        "interbrachial",
        "interjaculate",
        "intermediator",
        "intermication",
        "intermobility",
        "interparietal",
        "interpunction",
        "interrelation",
        "interrogative",
        "interrogatory",
        "intersomnious",
        "interstellary",
        "intertropical",
        "intervolution",
        "intracellular",
        "intrathoracic",
        "intratropical",
        "intropression",
        "inturgescence",
        "invariability",
        "inviolability",
        "irreclaimable",
        "irrefrangible",
        "irreligionist",
        "irritableness",
        "isogeothermic",
        "kilogrammetre",
        "knickknackery",
        "lacedaemonian",
        "laemodipodous",
        "languishingly",
        "leucophyllous",
        "librarianship",
        "lithochromics",
        "lophobranchii",
        "luteocobaltic",
        "machicolation",
        "magnoliaceous",
        "malacissation",
        "malacostomous",
        "malacostracan",
        "mandibuliform",
        "melostemonous",
        "mellification",
        "melodramatist",
        "mesologarithm",
        "metallochromy",
        "metallorganic",
        "metamorphoser",
        "metamorphosic",
        "metaphysician",
        "microcosmical",
        "micrometrical",
        "microorganism",
        "microphyllous",
        "ministerially",
        "misadvertence",
        "miscomprehend",
        "misconception",
        "misconjecture",
        "miserableness",
        "misexposition",
        "misproceeding",
        "modernization",
        "mollification",
        "monocephalous",
        "monochromatic",
        "monotrematous",
        "multicapsular",
        "multiplicable",
        "multiplicious",
        "multitudinary",
        "naphthylamine",
        "necessariness",
        "nectariferous",
        "negotiousness",
        "nervelessness",
        "neuroskeletal",
        "newfangleness",
        "nigrification",
        "noctivagation",
        "nomenclatress",
        "nonconforming",
        "nondeposition",
        "nonemphatical",
        "nonvernacular",
        "northwesterly",
        "ochlocratical",
        "odontophorous",
        "oligosiderite",
        "oligospermous",
        "omniprevalent",
        "oneirocritics",
        "ophiomorphite",
        "ophiomorphous",
        "oppositionist",
        "orchestration",
        "organicalness",
        "ornithosauria",
        "orthographist",
        "ostreophagist",
        "overbounteous",
        "overcredulous",
        "palindromical",
        "panstereorama",
        "parabronchium",
        "parallelistic",
        "paramagnetism",
        "paranthracene",
        "participation",
        "particularity",
        "partitionment",
        "pendulousness",
        "perichondrial",
        "periclitation",
        "perinephritis",
        "perishability",
        "pessimistical",
        "petitionarily",
        "philadelphian",
        "photographist",
        "phragmosiphon",
        "phycoxanthine",
        "piscicultural",
        "pistillaceous",
        "planipetalous",
        "platiniferous",
        "pneumatograph",
        "pneumogastric",
        "pneumonometer",
        "pneumotherapy",
        "polliniferous",
        "polychromatic",
        "polydactylism",
        "polygonometry",
        "polysulphuret",
        "potentiometer",
        "preambulation",
        "preambulatory",
        "precentorship",
        "precipitantly",
        "preconstitute",
        "precursorship",
        "predominantly",
        "prefigurement",
        "premonishment",
        "premonstrator",
        "prepossession",
        "prescriptible",
        "presstriction",
        "primitiveness",
        "primogenitive",
        "problematical",
        "procrastinate",
        "procuratorial",
        "prolegomenary",
        "propaedeutics",
        "proparoxytone",
        "prospectively",
        "protectorship",
        "proteranthous",
        "protoorganism",
        "protosilicate",
        "proventriulus",
        "proverbialism",
        "proverbialist",
        "providentness",
        "provinciality",
        "provincialize",
        "provisionally",
        "prudentiality",
        "pteridologist",
        "pusillanimity",
        "pyrheliometer",
        "quadragesimal",
        "quadricostate",
        "quadrifarious",
        "quadrilateral",
        "quadrinominal",
        "quadripennate",
        "quadrisection",
        "qualificative",
        "quantivalence",
        "quincuncially",
        "quinqueangled",
        "quinquennalia",
        "quodlibetical",
        "reaffirmation",
        "reaggravation",
        "recognization",
        "recriminative",
        "recriminatory",
        "reduplication",
        "reedification",
        "reestablisher",
        "refractometer",
        "refrigeratory",
        "refurnishment",
        "reimbursement",
        "reimportation",
        "reintegration",
        "rejuvenescent",
        "remastication",
        "repetitionary",
        "replenishment",
        "respirational",
        "retroactively",
        "retrospection",
        "reverentially",
        "reversibility",
        "rightwiseness",
        "rodomontadist",
        "sanctiloquent",
        "schizognathae",
        "scombriformes",
        "scripturalism",
        "semibarbarous",
        "sentimentally",
        "septentrional",
        "sesquitertial",
        "sharpshooting",
        "significative",
        "siphonoglyphe",
        "solemnization",
        "somatopleuric",
        "spermatozooid",
        "sphaerenchyma",
        "spiculigenous",
        "splanchnology",
        "staminiferous",
        "steganography"
    ],
    "16": [
        "abdominothoracic",
        "acanthocephalous",
        "acanthopterygian",
        "accommodableness",
        "acquaintanceship",
        "agrostographical",
        "anaglyptographic",
        "appreciativeness",
        "caducibranchiate",
        "cartographically",
        "conservativeness",
        "cosmographically",
        "crystallogenical",
        "destructibleness",
        "diphthongization",
        "dolichocephalous",
        "equitemporaneous",
        "gastroduodenitis",
        "gastrointestinal",
        "glossoepiglottic",
        "gynandromorphous",
        "hermaphroditical",
        "hydrodynamometer",
        "hydrometeorology",
        "hydrosulphureted",
        "hypochondriacism",
        "ichthyopterygium",
        "imperfectibility",
        "improportionable",
        "incensebreathing",
        "incomprehensible",
        "inconsequentness",
        "incontrovertible",
        "incorrespondency",
        "inharmoniousness",
        "intercitizenship",
        "interconvertible",
        "interpretatively",
        "interventricular",
        "intransgressible",
        "labyrinthibranch",
        "leucocytogenesis",
        "malacopterygious",
        "malacostracology",
        "maleconformation",
        "misinterpretable",
        "multiplicatively",
        "obdiplostemonous",
        "oppositipetalous",
        "oppositisepalous",
        "palliobranchiate",
        "pantochronometer",
        "persulphocyanate",
        "pharmacosiderite",
        "philanthropinist",
        "philosophistical",
        "pleuroperitoneal",
        "postremogeniture",
        "praiseworthiness",
        "preponderatingly",
        "prestidigitation",
        "preternaturality",
        "questionableness",
        "retrovaccination",
        "semitransparency",
        "septentrionality",
        "spiritualization",
        "stoichiometrical",
        "superfecundation",
        "tracheobronchial",
        "unaccomplishment",
        "unextinguishable"
    ],
    "15": [
        "acetabuliferous",
        "adsignification",
        "amphiarthrodial",
        "annihilationist",
        "anomalistically",
        "antepredicament",
        "anthropotomical",
        "antimonarchical",
        "antiperistaltic",
        "antisabbatarian",
        "approbativeness",
        "arboriculturist",
        "asclepiadaceous",
        "autochronograph",
        "batrachophagous",
        "bluestockingism",
        "categoricalness",
        "chamberlainship",
        "circumferential",
        "circumstantiate",
        "compassionately",
        "compendiousness",
        "compunctionless",
        "condescendingly",
        "confessionalist",
        "conjunctiveness",
        "consubstantiate",
        "contemporaneity",
        "contractibility",
        "controversially",
        "conventionalizw",
        "conventionalily",
        "conversationism",
        "counterirritate",
        "determinateness",
        "detrimentalness",
        "deutohydroguret",
        "dezincification",
        "disaffectionate",
        "discountenancer",
        "disentanglement",
        "disenthrallment",
        "disinthrallment",
        "distributionist",
        "doctrinarianism",
        "eclaircissement",
        "emancipationist",
        "enantiomorphous",
        "endolymphangial",
        "enfranchisement",
        "excrementitious",
        "experimentative",
        "extraprovincial",
        "extravagantness",
        "familiarization",
        "flibbertigibbet",
        "formularization",
        "glossographical",
        "helminthologist",
        "hendecasyllable",
        "heterodactylous",
        "heterogangliate",
        "hypercatalectic",
        "hypercritically",
        "hyperoxygenized",
        "ichthyodorulite",
        "immeasurability",
        "impatronization",
        "imperishability",
        "imponderability",
        "imprescriptibly",
        "inadmissibility",
        "incomprehensive",
        "inconsideration",
        "indemnification",
        "indistinguished",
        "individualistic",
        "ineffectiveness",
        "ineffervescible",
        "infinitesimally",
        "inquisitorially",
        "insignificative",
        "intellectualist",
        "intellectualize",
        "interarboration",
        "interfoliaceous",
        "interfollicular",
        "intermesenteric",
        "internationally",
        "intrinsicalness",
        "introsusception",
        "invulnerability",
        "irredeemability",
        "irrefragability",
        "irresistibility",
        "isomeromorphism",
        "jurisprudential",
        "kaleidoscopical",
        "laryngotracheal",
        "lexicographical",
        "machiavelianism",
        "myelencephalous",
        "myodynamiometer",
        "noncommissioned",
        "nonprofessional",
        "notwithstanding",
        "numismatologist",
        "omnipercipiency",
        "omphalopsychite",
        "organographical",
        "parenthetically",
        "penetrativeness",
        "perfunctoriness",
        "philomathematic",
        "phosphorescence",
        "photoheliograph",
        "phthisipneumony",
        "physiologically",
        "platinochloride",
        "platitudinarian",
        "plethysmography",
        "poikilothermous",
        "preapprehension",
        "preconsolidated",
        "predeliberation",
        "preexistimation",
        "prezygapophysis",
        "probationership",
        "prognostication",
        "proportionately",
        "proscriptionist",
        "prospectiveness",
        "pyroelectricity",
        "reapportionment",
        "retrogenerative",
        "retrospectively",
        "saccharomycetes",
        "scutibranchiate",
        "selenographical",
        "semicrystalline",
        "semicylyndrical",
        "semitransparent",
        "septentrionally",
        "southwestwardly",
        "sphenoethmoidal",
        "sublimification",
        "superintendency",
        "supersphenoidal",
        "supranaturalism",
        "sympathetically",
        "synchronization",
        "telethermometer",
        "tetrahexahedral",
        "tetrasyllabical",
        "transferography",
        "transpositional",
        "uncoformability",
        "unconsequential",
        "unembarrassment",
        "unexceptionable",
        "vasoconstrictor",
        "weatherboarding"
    ],
    "17": [
        "acromonogrammatic",
        "administratorship",
        "anthropomorphitic",
        "anthropophaginian",
        "comprehensibility",
        "concentrativeness",
        "constitutionalism",
        "demonstrativeness",
        "disciplinableness",
        "inefficaciousness",
        "insurmountability",
        "intercommunicable",
        "latitudinarianism",
        "opisthobranchiate",
        "photolithographer",
        "representationary",
        "siphonobranchiate",
        "splanchnapophysis",
        "sulphophosphorous",
        "superinpregnation",
        "supranaturalistic",
        "theophilanthropic"
    ],
    "2": [
        "an",
        "be",
        "fa",
        "hy",
        "io",
        "la",
        "li",
        "no",
        "of",
        "ra",
        "ta",
        "up",
        "yu"
    ],
    "18": [
        "antivaccinationist",
        "chromolithographer",
        "hydrometallurgical",
        "intercartilaginous",
        "laryngotracheotomy",
        "theophilanthropism",
        "theophilanthropist",
        "transubstantiation"
    ],
    "19": [
        "incontrovertibility"
    ],
    "21": [],
    "20": []
}
    var definitionOfWords = {
    "abactor": {
        "wordtype": "n.",
        "definition": "One who steals and drives away cattle or beasts by herds or droves."
    },
    "abalienate": {
        "wordtype": "v. t.",
        "definition": "To transfer the title of from one to another; to alienate."
    },
    "abalienation": {
        "wordtype": "n.",
        "definition": "The act of abalienating; alienation; estrangement."
    },
    "abandonment": {
        "wordtype": "n.",
        "definition": "The act of abandoning, or the state of being abandoned; total desertion; relinquishment."
    },
    "abandum": {
        "wordtype": "n.",
        "definition": "Anything forfeited or confiscated."
    },
    "abanga": {
        "wordtype": "n.",
        "definition": "A West Indian palm; also the fruit of this palm, the seeds of which are used as a remedy for diseases of the chest."
    },
    "abase": {
        "wordtype": "a.",
        "definition": "To lower or depress; to throw or cast down; as, to abase the eye."
    },
    "abashedly": {
        "wordtype": "adv.",
        "definition": "In an abashed manner."
    },
    "abassis": {
        "wordtype": "n.",
        "definition": "A silver coin of Persia, worth about twenty cents."
    },
    "abate": {
        "wordtype": "v. t.",
        "definition": "To beat down; to overthrow."
    },
    "abater": {
        "wordtype": "n.",
        "definition": "One who, or that which, abates."
    },
    "abaxile": {
        "wordtype": "a.",
        "definition": "Away from the axis or central line; eccentric."
    },
    "abbotship": {
        "wordtype": "n.",
        "definition": "The state or office of an abbot."
    },
    "abbreviator": {
        "wordtype": "n.",
        "definition": "One who abbreviates or shortens."
    },
    "abderian": {
        "wordtype": "a.",
        "definition": "Given to laughter; inclined to foolish or incessant merriment."
    },
    "abderite": {
        "wordtype": "n.",
        "definition": "An inhabitant of Abdera, in Thrace."
    },
    "abdest": {
        "wordtype": "n.",
        "definition": "Purification by washing the hands before prayer; -- a Mohammedan rite."
    },
    "abdominal": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the abdomen; ventral; as, the abdominal regions, muscles, cavity."
    },
    "abdominalia": {
        "wordtype": "n. pl.",
        "definition": "A group of cirripeds having abdominal appendages."
    },
    "abdominoscopy": {
        "wordtype": "n.",
        "definition": "Examination of the abdomen to detect abdominal disease."
    },
    "abdominothoracic": {
        "wordtype": "a.",
        "definition": "Relating to the abdomen and the thorax, or chest."
    },
    "abdominous": {
        "wordtype": "a.",
        "definition": "Having a protuberant belly; pot-bellied."
    },
    "abeam": {
        "wordtype": "adv.",
        "definition": "On the beam, that is, on a line which forms a right angle with the ship's keel; opposite to the center of the ship's side."
    },
    "abecedarian": {
        "wordtype": "n.",
        "definition": "One who is learning the alphabet; hence, a tyro."
    },
    "abhorrible": {
        "wordtype": "a.",
        "definition": "Detestable."
    },
    "abider": {
        "wordtype": "n.",
        "definition": "One who abides, or continues."
    },
    "abidingly": {
        "wordtype": "adv.",
        "definition": "Permanently."
    },
    "abietene": {
        "wordtype": "n.",
        "definition": "A volatile oil distilled from the resin or balsam of the nut pine (Pinus sabiniana) of Californiadjective"
    },
    "abirritation": {
        "wordtype": "n.",
        "definition": "A pathological condition opposite to that of irritation; debility; want of strength; astheniadjective"
    },
    "abirritative": {
        "wordtype": "a.",
        "definition": "Characterized by abirritation or debility."
    },
    "abjunctive": {
        "wordtype": "a.",
        "definition": "Exceptional."
    },
    "abjuratory": {
        "wordtype": "a.",
        "definition": "Containing abjuration."
    },
    "abjure": {
        "wordtype": "v. t.",
        "definition": "To renounce upon oath; to forswear; to disavow; as, to abjure allegiance to a prince. To abjure the realm, is to swear to abandon it forever."
    },
    "ablastemic": {
        "wordtype": "a.",
        "definition": "Non-germinal."
    },
    "abloom": {
        "wordtype": "adv.",
        "definition": "In or into bloom; in a blooming state."
    },
    "ablush": {
        "wordtype": "adv. & a.",
        "definition": "Blushing; ruddy."
    },
    "abnormal": {
        "wordtype": "a.",
        "definition": "Not conformed to rule or system; deviating from the type; anomalous; irregular."
    },
    "abnormally": {
        "wordtype": "adv.",
        "definition": "In an abnormal manner; irregularly."
    },
    "abode": {
        "wordtype": "",
        "definition": "pret. of Abide."
    },
    "aboriginal": {
        "wordtype": "a.",
        "definition": "First; original; indigenous; primitive; native; as, the aboriginal tribes of Americadjective"
    },
    "abortifacient": {
        "wordtype": "v.",
        "definition": "Producing miscarriage."
    },
    "abortment": {
        "wordtype": "n.",
        "definition": "Abortion."
    },
    "about": {
        "wordtype": "prep.",
        "definition": "Around; all round; on every side of."
    },
    "above": {
        "wordtype": "prep.",
        "definition": "In or to a higher place; higher than; on or over the upper surface; over; -- opposed to below or beneath."
    },
    "abovesaid": {
        "wordtype": "a.",
        "definition": "Mentioned or recited before."
    },
    "abraid": {
        "wordtype": "v. t. & i.",
        "definition": "To awake; to arouse; to stir or start up; also, to shout out."
    },
    "abrenounce": {
        "wordtype": "v. t.",
        "definition": "To renounce."
    },
    "abridgment": {
        "wordtype": "n.",
        "definition": "An epitome or compend, as of a book; a shortened or abridged form; an abbreviation."
    },
    "abruption": {
        "wordtype": "n.",
        "definition": "A sudden breaking off; a violent separation of bodies."
    },
    "abscession": {
        "wordtype": "n.",
        "definition": "A separating; removal; also, an abscess."
    },
    "abscind": {
        "wordtype": "v. t.",
        "definition": "To cut off."
    },
    "abscissa": {
        "wordtype": "n.",
        "definition": "One of the elements of reference by which a point, as of a curve, is referred to a system of fixed rectilineal coordinate axes."
    },
    "abscond": {
        "wordtype": "v. i.",
        "definition": "To hide, withdraw, or be concealed."
    },
    "absentment": {
        "wordtype": "n.",
        "definition": "The state of being absent; withdrawal."
    },
    "absinthiated": {
        "wordtype": "a.",
        "definition": "Impregnated with wormwood; as, absinthiated wine."
    },
    "absinthic": {
        "wordtype": "a.",
        "definition": "Relating to the common wormwood or to an acid obtained from it."
    },
    "absinthism": {
        "wordtype": "n.",
        "definition": "The condition of being poisoned by the excessive use of absinth."
    },
    "absinthium": {
        "wordtype": "n.",
        "definition": "The common wormwood (Artemisia absinthium), an intensely bitter plant, used as a tonic and for making the oil of wormwood."
    },
    "absistence": {
        "wordtype": "n.",
        "definition": "A standing aloof."
    },
    "absolutory": {
        "wordtype": "a.",
        "definition": "Serving to absolve; absolving."
    },
    "absolvable": {
        "wordtype": "a.",
        "definition": "That may be absolved."
    },
    "absonant": {
        "wordtype": "a.",
        "definition": "Discordant; contrary; -- opposed to consonant."
    },
    "absorbability": {
        "wordtype": "n.",
        "definition": "The state or quality of being absorbable."
    },
    "absorpt": {
        "wordtype": "a.",
        "definition": "Absorbed."
    },
    "absterse": {
        "wordtype": "v. t.",
        "definition": "To absterge; to cleanse; to purge away."
    },
    "abstracter": {
        "wordtype": "n.",
        "definition": "One who abstracts, or makes an abstract."
    },
    "abstractitious": {
        "wordtype": "a.",
        "definition": "Obtained from plants by distillation."
    },
    "absurd": {
        "wordtype": "n.",
        "definition": "An absurdity."
    },
    "absurdness": {
        "wordtype": "n.",
        "definition": "Absurdity."
    },
    "abuna": {
        "wordtype": "n.",
        "definition": "The Patriarch, or head of the Abyssinian Church."
    },
    "abusable": {
        "wordtype": "a.",
        "definition": "That may be abused."
    },
    "abusage": {
        "wordtype": "n.",
        "definition": "Abuse."
    },
    "abutilon": {
        "wordtype": "n.",
        "definition": "A genus of malvaceous plants of many species, found in the torrid and temperate zones of both continents; -- called also Indian mallow."
    },
    "abutment": {
        "wordtype": "n.",
        "definition": "State of abutting."
    },
    "abuzz": {
        "wordtype": "a.",
        "definition": "In a buzz; buzzing."
    },
    "academe": {
        "wordtype": "n.",
        "definition": "An academy."
    },
    "academic": {
        "wordtype": "n.",
        "definition": "One holding the philosophy of Socrates and Plato; a Platonist."
    },
    "academicals": {
        "wordtype": "n. pl.",
        "definition": "The articles of dress prescribed and worn at some colleges and universities."
    },
    "academician": {
        "wordtype": "n.",
        "definition": "A member of an academy, or society for promoting science, art, or literature, as of the French Academy, or the Royal Academy of arts."
    },
    "acanthocephalous": {
        "wordtype": "a.",
        "definition": "Having a spiny head, as one of the Acanthocephaladjective"
    },
    "acanthopterygian": {
        "wordtype": "a.",
        "definition": "Belonging to the order of fishes having spinose fins, as the perch."
    },
    "acataleptic": {
        "wordtype": "a.",
        "definition": "Incapable of being comprehended; incomprehensible."
    },
    "accadian": {
        "wordtype": "a.",
        "definition": "Pertaining to a race supposed to have lived in Babylonia before the Assyrian conquest."
    },
    "accede": {
        "wordtype": "v. i.",
        "definition": "To approach; to come forward; -- opposed to recede."
    },
    "acceder": {
        "wordtype": "n.",
        "definition": "One who accedes."
    },
    "accelerograph": {
        "wordtype": "n.",
        "definition": "An apparatus for studying the combustion of powder in guns, etc."
    },
    "accensor": {
        "wordtype": "n.",
        "definition": "One of the functionaries who light and trim the tapers."
    },
    "accentual": {
        "wordtype": "a.",
        "definition": "Of or pertaining to accent; characterized or formed by accent."
    },
    "accentually": {
        "wordtype": "adv.",
        "definition": "In an accentual manner; in accordance with accent."
    },
    "accept": {
        "wordtype": "v. t.",
        "definition": "To receive with a consenting mind (something offered); as, to accept a gift; -- often followed by of."
    },
    "acceptability": {
        "wordtype": "n.",
        "definition": "The quality of being acceptable; acceptableness."
    },
    "acceptilation": {
        "wordtype": "n.",
        "definition": "Gratuitous discharge; a release from debt or obligation without payment; free remission."
    },
    "acceptive": {
        "wordtype": "a.",
        "definition": "Fit for acceptance."
    },
    "acceptor": {
        "wordtype": "n.",
        "definition": "One who accepts"
    },
    "accession": {
        "wordtype": "n.",
        "definition": "A coming to; the act of acceding and becoming joined; as, a king's accession to a confederacy."
    },
    "accessive": {
        "wordtype": "a.",
        "definition": "Additional."
    },
    "accidentally": {
        "wordtype": "adv.",
        "definition": "In an accidental manner; unexpectedly; by chance; unintentionally; casually; fortuitously; not essentially."
    },
    "accipiter": {
        "wordtype": "n.",
        "definition": "A genus of rapacious birds; one of the Accipitres or Raptores."
    },
    "accipitrine": {
        "wordtype": "a.",
        "definition": "Like or belonging to the Accipitres; raptorial; hawklike."
    },
    "accite": {
        "wordtype": "v. t.",
        "definition": "To cite; to summon."
    },
    "acclivous": {
        "wordtype": "a.",
        "definition": "Sloping upward; rising as a hillside; -- opposed to declivous."
    },
    "accoast": {
        "wordtype": "v. t. & i.",
        "definition": "To lie or sail along the coast or side of; to accost."
    },
    "accommodable": {
        "wordtype": "a.",
        "definition": "That may be accommodated, fitted, or made to agree."
    },
    "accommodableness": {
        "wordtype": "n.",
        "definition": "The quality or condition of being accommodable."
    },
    "accommodately": {
        "wordtype": "adv.",
        "definition": "Suitably; fitly."
    },
    "accommodating": {
        "wordtype": "a.",
        "definition": "Affording, or disposed to afford, accommodation; obliging; as an accommodating man, spirit, arrangement."
    },
    "accommodator": {
        "wordtype": "n.",
        "definition": "He who, or that which, accommodates."
    },
    "accompanier": {
        "wordtype": "n.",
        "definition": "He who, or that which, accompanies."
    },
    "accompletive": {
        "wordtype": "a.",
        "definition": "Tending to accomplish."
    },
    "accompliceship": {
        "wordtype": "n.",
        "definition": "The state of being an accomplice."
    },
    "accomplishable": {
        "wordtype": "a.",
        "definition": "Capable of being accomplished; practicable."
    },
    "accordingly": {
        "wordtype": "adv.",
        "definition": "Agreeably; correspondingly; suitably; in a manner conformable."
    },
    "accordionist": {
        "wordtype": "n.",
        "definition": "A player on the accordion."
    },
    "accost": {
        "wordtype": "v. t.",
        "definition": "To join side to side; to border; hence, to sail along the coast or side of."
    },
    "accostable": {
        "wordtype": "a.",
        "definition": "Approachable; affable."
    },
    "accouchement": {
        "wordtype": "n.",
        "definition": "Delivery in childbed"
    },
    "accountable": {
        "wordtype": "a.",
        "definition": "Liable to be called on to render an account; answerable; as, every man is accountable to God for his conduct."
    },
    "accountancy": {
        "wordtype": "n.",
        "definition": "The art or employment of an accountant."
    },
    "accountant": {
        "wordtype": "n.",
        "definition": "One who renders account; one accountable."
    },
    "accoy": {
        "wordtype": "v. t.",
        "definition": "To render quiet; to soothe."
    },
    "accrementitial": {
        "wordtype": "a.",
        "definition": "Pertaining to accremention."
    },
    "accrete": {
        "wordtype": "v. i.",
        "definition": "To grow together."
    },
    "accretion": {
        "wordtype": "n.",
        "definition": "The act of increasing by natural growth; esp. the increase of organic bodies by the internal accession of parts; organic growth."
    },
    "accumbent": {
        "wordtype": "a.",
        "definition": "Leaning or reclining, as the ancients did at their meals."
    },
    "accurateness": {
        "wordtype": "n.",
        "definition": "The state or quality of being accurate; accuracy; exactness; nicety; precision."
    },
    "accusation": {
        "wordtype": "n.",
        "definition": "The act of accusing or charging with a crime or with a lighter offense."
    },
    "accusatively": {
        "wordtype": "adv.",
        "definition": "In an accusative manner."
    },
    "accusingly": {
        "wordtype": "adv.",
        "definition": "In an accusing manner."
    },
    "accustomable": {
        "wordtype": "a.",
        "definition": "Habitual; customary; wonted."
    },
    "accustomarily": {
        "wordtype": "adv.",
        "definition": "Customarily."
    },
    "acentric": {
        "wordtype": "a.",
        "definition": "Not centered; without a center."
    },
    "acephal": {
        "wordtype": "n.",
        "definition": "One of the Acephaladjective"
    },
    "acerous": {
        "wordtype": "a.",
        "definition": "Destitute of tentacles, as certain mollusks."
    },
    "acerval": {
        "wordtype": "a.",
        "definition": "Pertaining to a heap."
    },
    "acetabuliferous": {
        "wordtype": "a.",
        "definition": "Furnished with fleshy cups for adhering to bodies, as cuttlefish, etc."
    },
    "acetamide": {
        "wordtype": "n.",
        "definition": "A white crystalline solid, from ammonia by replacement of an equivalent of hydrogen by acetyl."
    },
    "acetated": {
        "wordtype": "a.",
        "definition": "Combined with acetic acid."
    },
    "acetification": {
        "wordtype": "n.",
        "definition": "The act of making acetous or sour; the process of converting, or of becoming converted, into vinegar."
    },
    "acetous": {
        "wordtype": "a.",
        "definition": "Having a sour taste; sour; acid."
    },
    "achaian": {
        "wordtype": "a.",
        "definition": "Of or pertaining to Achaia in Greece; also, Grecian."
    },
    "achenium": {
        "wordtype": "n.",
        "definition": "A small, dry, indehiscent fruit, containing a single seed, as in the buttercup; -- called a naked seed by the earlier botanists."
    },
    "achlamydate": {
        "wordtype": "a.",
        "definition": "Not possessing a mantle; -- said of certain gastropods."
    },
    "achromatic": {
        "wordtype": "a.",
        "definition": "Free from color; transmitting light without decomposing it into its primary colors."
    },
    "achromatically": {
        "wordtype": "adv.",
        "definition": "In an achromatic manner."
    },
    "achromatism": {
        "wordtype": "n.",
        "definition": "The state or quality of being achromatic; as, the achromatism of a lens; achromaticity."
    },
    "achromatopsy": {
        "wordtype": "n.",
        "definition": "Color blindness; inability to distinguish colors; Daltonism."
    },
    "achylous": {
        "wordtype": "a.",
        "definition": "Without chyle."
    },
    "achymous": {
        "wordtype": "a.",
        "definition": "Without chyme."
    },
    "aciculite": {
        "wordtype": "n.",
        "definition": "Needle ore."
    },
    "acidity": {
        "wordtype": "n.",
        "definition": "The quality of being sour; sourness; tartness; sharpness to the taste; as, the acidity of lemon juice."
    },
    "aciform": {
        "wordtype": "a.",
        "definition": "Shaped like a needle."
    },
    "acinaces": {
        "wordtype": "n.",
        "definition": "A short sword or saber."
    },
    "acinetiform": {
        "wordtype": "a.",
        "definition": "Resembling the Acinetae."
    },
    "acinous": {
        "wordtype": "a.",
        "definition": "Consisting of acini, or minute granular concretions; as, acinose or acinous glands."
    },
    "acold": {
        "wordtype": "a.",
        "definition": "Cold."
    },
    "acologic": {
        "wordtype": "a.",
        "definition": "Pertaining to acology."
    },
    "acology": {
        "wordtype": "n.",
        "definition": "Materia medica; the science of remedies."
    },
    "acolyctine": {
        "wordtype": "n.",
        "definition": "An organic base, in the form of a white powder, obtained from Aconitum lycoctonum."
    },
    "aconitic": {
        "wordtype": "a.",
        "definition": "Of or pertaining to aconite."
    },
    "acouchy": {
        "wordtype": "n.",
        "definition": "A small species of agouti (Dasyprocta acouchy)."
    },
    "acoumeter": {
        "wordtype": "n.",
        "definition": "An instrument for measuring the acuteness of the sense of hearing."
    },
    "acoustical": {
        "wordtype": "a.",
        "definition": "Of or pertaining to acoustics."
    },
    "acquaintanceship": {
        "wordtype": "n.",
        "definition": "A state of being acquainted; acquaintance."
    },
    "acquaintant": {
        "wordtype": "n.",
        "definition": "An acquaintance."
    },
    "acquiesce": {
        "wordtype": "v. i.",
        "definition": "To concur upon conviction; as, to acquiesce in an opinion; to assent to; usually, to concur, not heartily but so far as to forbear opposition."
    },
    "acquiescency": {
        "wordtype": "n.",
        "definition": "The quality of being acquiescent; acquiescence."
    },
    "acquiescent": {
        "wordtype": "a.",
        "definition": "Resting satisfied or submissive; disposed tacitly to submit; assentive; as, an acquiescent policy."
    },
    "acquisite": {
        "wordtype": "a.",
        "definition": "Acquired."
    },
    "acquisitive": {
        "wordtype": "a.",
        "definition": "Acquired."
    },
    "acquit": {
        "wordtype": "p. p.",
        "definition": "Acquitted; set free; rid of."
    },
    "acquitter": {
        "wordtype": "n.",
        "definition": "One who acquits or releases."
    },
    "acreable": {
        "wordtype": "a.",
        "definition": "Of an acre; per acre; as, the acreable produce."
    },
    "acridly": {
        "wordtype": "adv.",
        "definition": "In an acid manner."
    },
    "acrite": {
        "wordtype": "a.",
        "definition": "Acritan."
    },
    "acritochromacy": {
        "wordtype": "n.",
        "definition": "Color blindness; achromatopsy."
    },
    "acroceraunian": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the high mountain range of \"thunder-smitten\" peaks (now Kimara), between Epirus and Macedoniadjective"
    },
    "acrodont": {
        "wordtype": "n.",
        "definition": "One of a group of lizards having the teeth immovably united to the top of the alveolar ridge."
    },
    "acromonogrammatic": {
        "wordtype": "a.",
        "definition": "Having each verse begin with the same letter as that with which the preceding verse ends."
    },
    "acronycally": {
        "wordtype": "adv.",
        "definition": "In an acronycal manner as rising at the setting of the sun, and vice versadjective"
    },
    "acrophony": {
        "wordtype": "n.",
        "definition": "The use of a picture symbol of an object to represent phonetically the initial sound of the name of the object."
    },
    "acrospire": {
        "wordtype": "n.",
        "definition": "The sprout at the end of a seed when it begins to germinate; the plumule in germination; -- so called from its spiral form."
    },
    "across": {
        "wordtype": "n.",
        "definition": "From side to side; athwart; crosswise, or in a direction opposed to the length; quite over; as, a bridge laid across a river."
    },
    "acroteleutic": {
        "wordtype": "n.",
        "definition": "The end of a verse or psalm, or something added thereto, to be sung by the people, by way of a response."
    },
    "acroterial": {
        "wordtype": "a.",
        "definition": "Pertaining to an acroterium; as, acroterial ornaments."
    },
    "actinia": {
        "wordtype": "n.",
        "definition": "A genus in the family Actinidae."
    },
    "actinoid": {
        "wordtype": "a.",
        "definition": "Having the form of rays; radiated, as an actiniadjective"
    },
    "actinolitic": {
        "wordtype": "a.",
        "definition": "Of the nature of, or containing, actinolite."
    },
    "actinology": {
        "wordtype": "n.",
        "definition": "The science which treats of rays of light, especially of the actinic or chemical rays."
    },
    "actinomere": {
        "wordtype": "n.",
        "definition": "One of the radial segments composing the body of one of the Coelenteratadjective"
    },
    "actinometric": {
        "wordtype": "a.",
        "definition": "Pertaining to the measurement of the intensity of the solar rays, either (a) heating, or (b) actinic."
    },
    "actinost": {
        "wordtype": "n.",
        "definition": "One of the bones at the base of a paired fin of a fish."
    },
    "actinotrocha": {
        "wordtype": "n. pl.",
        "definition": "A peculiar larval form of Phoronis, a genus of marine worms, having a circle of ciliated tentacles."
    },
    "actinozoon": {
        "wordtype": "n.",
        "definition": "One of the Actinozoadjective"
    },
    "actionable": {
        "wordtype": "a.",
        "definition": "That may be the subject of an action or suit at law; as, to call a man a thief is actionable."
    },
    "actionless": {
        "wordtype": "a.",
        "definition": "Void of action."
    },
    "acton": {
        "wordtype": "n.",
        "definition": "A stuffed jacket worn under the mail, or (later) a jacket plated with mail."
    },
    "actualize": {
        "wordtype": "v. t.",
        "definition": "To make actual; to realize in action."
    },
    "actualness": {
        "wordtype": "n.",
        "definition": "Quality of being actual; actuality."
    },
    "acturience": {
        "wordtype": "n.",
        "definition": "Tendency or impulse to act."
    },
    "acuition": {
        "wordtype": "n.",
        "definition": "The act of sharpening."
    },
    "aculeous": {
        "wordtype": "a.",
        "definition": "Aculeate."
    },
    "aculeus": {
        "wordtype": "n.",
        "definition": "A prickle growing on the bark, as in some brambles and roses."
    },
    "acute": {
        "wordtype": "a.",
        "definition": "Sharp at the end; ending in a sharp point; pointed; -- opposed to blunt or obtuse; as, an acute angle; an acute leaf."
    },
    "adagio": {
        "wordtype": "a. & adv.",
        "definition": "Slow; slowly, leisurely, and gracefully. When repeated, adagio, adagio, it directs the movement to be very slow."
    },
    "adaptation": {
        "wordtype": "n.",
        "definition": "The act or process of adapting, or fitting; or the state of being adapted or fitted; fitness."
    },
    "adaunt": {
        "wordtype": "v. t.",
        "definition": "To daunt; to subdue; to mitigate."
    },
    "addictedness": {
        "wordtype": "n.",
        "definition": "The quality or state of being addicted; attachment."
    },
    "additament": {
        "wordtype": "n.",
        "definition": "An addition, or a thing added."
    },
    "addition": {
        "wordtype": "n.",
        "definition": "The act of adding two or more things together; -- opposed to subtraction or diminution."
    },
    "additionally": {
        "wordtype": "adv.",
        "definition": "By way of addition."
    },
    "addressee": {
        "wordtype": "n.",
        "definition": "One to whom anything is addressed."
    },
    "adduct": {
        "wordtype": "v. t.",
        "definition": "To draw towards a common center or a middle line."
    },
    "adeem": {
        "wordtype": "v. t.",
        "definition": "To revoke, as a legacy, grant, etc., or to satisfy it by some other gift."
    },
    "adempt": {
        "wordtype": "p. p.",
        "definition": "Takes away."
    },
    "adenitis": {
        "wordtype": "n.",
        "definition": "Glandular inflammation."
    },
    "adeption": {
        "wordtype": "a.",
        "definition": "An obtaining; attainment."
    },
    "adequately": {
        "wordtype": "adv.",
        "definition": "In an adequate manner."
    },
    "adhesively": {
        "wordtype": "adv.",
        "definition": "In an adhesive manner."
    },
    "adiaphory": {
        "wordtype": "n.",
        "definition": "Indifference."
    },
    "adit": {
        "wordtype": "n.",
        "definition": "Admission; approach; access."
    },
    "adject": {
        "wordtype": "v. t.",
        "definition": "To add or annex; to join."
    },
    "adjective": {
        "wordtype": "n.",
        "definition": "Added to a substantive as an attribute; of the nature of an adjunct; as, an adjective word or sentence."
    },
    "adjectively": {
        "wordtype": "adv.",
        "definition": "In the manner of an adjective; as, a word used adjectively."
    },
    "adjudicature": {
        "wordtype": "n.",
        "definition": "Adjudication."
    },
    "adjugate": {
        "wordtype": "v. t.",
        "definition": "To yoke to."
    },
    "adjument": {
        "wordtype": "n.",
        "definition": "Help; support; also, a helper."
    },
    "adjuvant": {
        "wordtype": "n.",
        "definition": "A substance added to an immunogenic agent to enhance the production of antibodies."
    },
    "adjunctive": {
        "wordtype": "a.",
        "definition": "Joining; having the quality of joining; forming an adjunct."
    },
    "adjunctively": {
        "wordtype": "adv.",
        "definition": "In an adjunctive manner."
    },
    "adjuratory": {
        "wordtype": "a.",
        "definition": "Containing an adjuration."
    },
    "adjustment": {
        "wordtype": "n.",
        "definition": "The act of adjusting, or condition of being adjusted; act of bringing into proper relations; regulation."
    },
    "adjutator": {
        "wordtype": "n.",
        "definition": "A corruption of Agitator."
    },
    "adjute": {
        "wordtype": "v. t.",
        "definition": "To add."
    },
    "adjutor": {
        "wordtype": "n.",
        "definition": "A helper or assistant."
    },
    "admarginate": {
        "wordtype": "v. t.",
        "definition": "To write in the margin."
    },
    "admeasure": {
        "wordtype": "v. t.",
        "definition": "To measure."
    },
    "administratorship": {
        "wordtype": "n.",
        "definition": "The position or office of an administrator."
    },
    "admirable": {
        "wordtype": "a.",
        "definition": "Fitted to excite wonder; wonderful; marvelous."
    },
    "admirably": {
        "wordtype": "adv.",
        "definition": "In an admirable manner."
    },
    "admirance": {
        "wordtype": "n.",
        "definition": "Admiration."
    },
    "admiring": {
        "wordtype": "a.",
        "definition": "Expressing admiration; as, an admiring glance."
    },
    "admittable": {
        "wordtype": "a.",
        "definition": "Admissible."
    },
    "admittedly": {
        "wordtype": "adv.",
        "definition": "Confessedly."
    },
    "admonisher": {
        "wordtype": "n.",
        "definition": "One who admonishes."
    },
    "admonishment": {
        "wordtype": "n.",
        "definition": "Admonition."
    },
    "admonitive": {
        "wordtype": "a.",
        "definition": "Admonitory."
    },
    "admonitorial": {
        "wordtype": "a.",
        "definition": "Admonitory."
    },
    "adnate": {
        "wordtype": "a.",
        "definition": "Grown to congenitally."
    },
    "adnubilated": {
        "wordtype": "a.",
        "definition": "Clouded; obscured."
    },
    "ado": {
        "wordtype": "n.",
        "definition": "To do; in doing; as, there is nothing ado."
    },
    "adobe": {
        "wordtype": "n.",
        "definition": "An unburnt brick dried in the sun; also used as an adjective, as, an adobe house, in Texas or New Mexico."
    },
    "adolescent": {
        "wordtype": "a.",
        "definition": "Growing; advancing from childhood to maturity."
    },
    "adonize": {
        "wordtype": "v. t.",
        "definition": "To beautify; to dandify."
    },
    "adorableness": {
        "wordtype": "n.",
        "definition": "The quality of being adorable, or worthy of adoration."
    },
    "adornation": {
        "wordtype": "n.",
        "definition": "Adornment."
    },
    "adorner": {
        "wordtype": "n.",
        "definition": "He who, or that which, adorns; a beautifier."
    },
    "adread": {
        "wordtype": "v. t. & i.",
        "definition": "To dread."
    },
    "adroitly": {
        "wordtype": "adv.",
        "definition": "In an adroit manner."
    },
    "adsignification": {
        "wordtype": "n.",
        "definition": "Additional signification."
    },
    "adulator": {
        "wordtype": "n.",
        "definition": "A servile or hypocritical flatterer."
    },
    "adulatress": {
        "wordtype": "n.",
        "definition": "A woman who flatters with servility."
    },
    "adulter": {
        "wordtype": "v. i.",
        "definition": "To commit adultery; to pollute."
    },
    "adulterize": {
        "wordtype": "v. i.",
        "definition": "To commit adultery."
    },
    "adultness": {
        "wordtype": "n.",
        "definition": "The state of being adult."
    },
    "adunque": {
        "wordtype": "a.",
        "definition": "Hooked; as, a parrot has an adunc bill."
    },
    "aduncity": {
        "wordtype": "n.",
        "definition": "Curvature inwards; hookedness."
    },
    "adustible": {
        "wordtype": "a.",
        "definition": "That may be burnt."
    },
    "advantageously": {
        "wordtype": "adv.",
        "definition": "Profitably; with advantage."
    },
    "advene": {
        "wordtype": "v. i.",
        "definition": "To accede, or come (to); to be added to something or become a part of it, though not essential."
    },
    "adventitious": {
        "wordtype": "a.",
        "definition": "Added extrinsically; not essentially inherent; accidental or causal; additional; supervenient; foreign."
    },
    "adventuress": {
        "wordtype": "n.",
        "definition": "A female adventurer; a woman who tries to gain position by equivocal means."
    },
    "adventurously": {
        "wordtype": "adv.",
        "definition": "In an adventurous manner; venturesomely; boldly; daringly."
    },
    "adverbially": {
        "wordtype": "adv.",
        "definition": "In the manner of an adverb."
    },
    "adversary": {
        "wordtype": "a.",
        "definition": "Opposed; opposite; adverse; antagonistic."
    },
    "adverse": {
        "wordtype": "a.",
        "definition": "Opposite."
    },
    "advisability": {
        "wordtype": "n.",
        "definition": "The quality of being advisable; advisableness."
    },
    "advisedness": {
        "wordtype": "n.",
        "definition": "Deliberate consideration; prudent procedure; caution."
    },
    "adviser": {
        "wordtype": "n.",
        "definition": "One who advises."
    },
    "advocateship": {
        "wordtype": "n.",
        "definition": "Office or duty of an advocate."
    },
    "adynamic": {
        "wordtype": "a.",
        "definition": "Pertaining to, or characterized by, debility of the vital powers; weak."
    },
    "adz": {
        "wordtype": "v. t.",
        "definition": "To cut with an adz."
    },
    "aegicrania": {
        "wordtype": "n. pl.",
        "definition": "Sculptured ornaments, used in classical architecture, representing rams' heads or skulls."
    },
    "aegilops": {
        "wordtype": "n.",
        "definition": "An ulcer or fistula in the inner corner of the eye."
    },
    "aeolian": {
        "wordtype": "a.",
        "definition": "Of or pertaining to Aeolia or Aeolis, in Asia Minor, colonized by the Greeks, or to its inhabitants; aeolic; as, the Aeolian dialect."
    },
    "aeolotropic": {
        "wordtype": "a.",
        "definition": "Exhibiting differences of quality or property in different directions; not isotropic."
    },
    "aerator": {
        "wordtype": "n.",
        "definition": "That which supplies with air; esp. an apparatus used for charging mineral waters with gas and in making soda water."
    },
    "aerification": {
        "wordtype": "n.",
        "definition": "The act of combining air with another substance, or the state of being filled with air."
    },
    "aerocyst": {
        "wordtype": "n.",
        "definition": "One of the air cells of algals."
    },
    "aerognosy": {
        "wordtype": "n.",
        "definition": "The science which treats of the properties of the air, and of the part it plays in nature."
    },
    "aerology": {
        "wordtype": "n.",
        "definition": "That department of physics which treats of the atmosphere."
    },
    "aeronaut": {
        "wordtype": "n.",
        "definition": "An aerial navigator; a balloonist."
    },
    "aerophoby": {
        "wordtype": "n.",
        "definition": "Dread of a current of air."
    },
    "aerostat": {
        "wordtype": "n.",
        "definition": "A balloon."
    },
    "esopian": {
        "wordtype": "a.",
        "definition": "Of or pertaining to Aesop, or in his manner."
    },
    "aesthesia": {
        "wordtype": "n.",
        "definition": "Perception by the senses; feeling; -- the opposite of anaesthesiadjective"
    },
    "aesthetican": {
        "wordtype": "n.",
        "definition": "One versed in aesthetics."
    },
    "aethogen": {
        "wordtype": "n.",
        "definition": "A compound of nitrogen and boro/, which, when heated before the blowpipe, gives a brilliant phosphorescent; boric nitride."
    },
    "afar": {
        "wordtype": "adv.",
        "definition": "At, to, or from a great distance; far away; -- often used with from preceding, or off following; as, he was seen from afar; I saw him afar off."
    },
    "affear": {
        "wordtype": "v. t.",
        "definition": "To frighten."
    },
    "affectibility": {
        "wordtype": "n.",
        "definition": "The quality or state of being affectible."
    },
    "affectible": {
        "wordtype": "a.",
        "definition": "That may be affected."
    },
    "affectionate": {
        "wordtype": "a.",
        "definition": "Having affection or warm regard; loving; fond; as, an affectionate brother."
    },
    "affectioned": {
        "wordtype": "a.",
        "definition": "Disposed."
    },
    "affiancer": {
        "wordtype": "n.",
        "definition": "One who makes a contract of marriage between two persons."
    },
    "affiant": {
        "wordtype": "n.",
        "definition": "One who makes an affidavit."
    },
    "affidavit": {
        "wordtype": "n.",
        "definition": "A sworn statement in writing; a declaration in writing, signed and made upon oath before an authorized magistrate."
    },
    "affile": {
        "wordtype": "v. t.",
        "definition": "To polish."
    },
    "affiliate": {
        "wordtype": "v. t.",
        "definition": "To adopt; to receive into a family as a son; hence, to bring or receive into close connection; to ally."
    },
    "affinal": {
        "wordtype": "a.",
        "definition": "Related by marriage; from the same source."
    },
    "affirm": {
        "wordtype": "v. t.",
        "definition": "to assert or confirm, as a judgment, decree, or order, brought before an appellate court for review."
    },
    "affirmant": {
        "wordtype": "n.",
        "definition": "One who affirms or asserts."
    },
    "affirmatory": {
        "wordtype": "a.",
        "definition": "Giving affirmation; assertive; affirmative."
    },
    "afflictedness": {
        "wordtype": "n.",
        "definition": "The state of being afflicted; affliction."
    },
    "afflicter": {
        "wordtype": "n.",
        "definition": "One who afflicts."
    },
    "affluently": {
        "wordtype": "adv.",
        "definition": "Abundantly; copiously."
    },
    "affluentness": {
        "wordtype": "n.",
        "definition": "Great plenty."
    },
    "affordable": {
        "wordtype": "a.",
        "definition": "That may be afforded."
    },
    "afformative": {
        "wordtype": "n.",
        "definition": "An affix."
    },
    "affray": {
        "wordtype": "v. t.",
        "definition": "To startle from quiet; to alarm."
    },
    "affrayer": {
        "wordtype": "n.",
        "definition": "One engaged in an affray."
    },
    "affrightment": {
        "wordtype": "n.",
        "definition": "Affright; the state of being frightened; sudden fear or alarm."
    },
    "affy": {
        "wordtype": "v. t.",
        "definition": "To confide (one's self to, or in); to trust."
    },
    "afield": {
        "wordtype": "adv.",
        "definition": "To, in, or on the field."
    },
    "afire": {
        "wordtype": "adv. & a.",
        "definition": "On fire."
    },
    "aflow": {
        "wordtype": "adv. & a.",
        "definition": "Flowing."
    },
    "afore": {
        "wordtype": "adv.",
        "definition": "Before."
    },
    "aforesaid": {
        "wordtype": "a.",
        "definition": "Said before, or in a preceding part; already described or identified."
    },
    "aforetime": {
        "wordtype": "adv.",
        "definition": "In time past; formerly."
    },
    "afric": {
        "wordtype": "a.",
        "definition": "African."
    },
    "afreet": {
        "wordtype": "n.",
        "definition": "A powerful evil jinnee, demon, or monstrous giant."
    },
    "afront": {
        "wordtype": "adv.",
        "definition": "In front; face to face."
    },
    "aftergame": {
        "wordtype": "n.",
        "definition": "A second game; hence, a subsequent scheme or expedient."
    },
    "afterguard": {
        "wordtype": "n.",
        "definition": "The seaman or seamen stationed on the poop or after part of the ship, to attend the after-sails."
    },
    "aftermath": {
        "wordtype": "n.",
        "definition": "A second moving; the grass which grows after the first crop of hay in the same season; rowen."
    },
    "afterthought": {
        "wordtype": "n.",
        "definition": "Reflection after an act; later or subsequent thought or expedient."
    },
    "aftward": {
        "wordtype": "adv.",
        "definition": "Toward the stern."
    },
    "againsay": {
        "wordtype": "v. t.",
        "definition": "To gainsay."
    },
    "againstand": {
        "wordtype": "v. t.",
        "definition": "To withstand."
    },
    "agalactous": {
        "wordtype": "a.",
        "definition": "Lacking milk to suckle with."
    },
    "agamic": {
        "wordtype": "a.",
        "definition": "Produced without sexual union; as, agamic or unfertilized eggs."
    },
    "agamist": {
        "wordtype": "n.",
        "definition": "An unmarried person; also, one opposed to marriage."
    },
    "aganglionic": {
        "wordtype": "a.",
        "definition": "Without gangliadjective"
    },
    "agatine": {
        "wordtype": "a.",
        "definition": "Pertaining to, or like, agate."
    },
    "agenesis": {
        "wordtype": "n.",
        "definition": "Any imperfect development of the body, or any anomaly of organization."
    },
    "agentship": {
        "wordtype": "n.",
        "definition": "Agency."
    },
    "ageratum": {
        "wordtype": "n.",
        "definition": "A genus of plants, one species of which (A. Mexicanum) has lavender-blue flowers in dense clusters."
    },
    "agglomeration": {
        "wordtype": "n.",
        "definition": "The act or process of collecting in a mass; a heaping together."
    },
    "agglutination": {
        "wordtype": "n.",
        "definition": "The act of uniting by glue or other tenacious substance; the state of being thus united; adhesion of parts."
    },
    "aggrandize": {
        "wordtype": "v. t.",
        "definition": "To make great; to enlarge; to increase; as, to aggrandize our conceptions, authority, distress."
    },
    "aggrandizer": {
        "wordtype": "n.",
        "definition": "One who aggrandizes, or makes great."
    },
    "aggrate": {
        "wordtype": "a.",
        "definition": "To please."
    },
    "aggravation": {
        "wordtype": "n.",
        "definition": "Exaggerated representation."
    },
    "aggregation": {
        "wordtype": "n.",
        "definition": "The act of aggregating, or the state of being aggregated; collection into a mass or sum; a collection of particulars; an aggregate."
    },
    "aggrege": {
        "wordtype": "v. t.",
        "definition": "To make heavy; to aggravate."
    },
    "aggrieve": {
        "wordtype": "v. i.",
        "definition": "To grieve; to lament."
    },
    "agile": {
        "wordtype": "a.",
        "definition": "Having the faculty of quick motion in the limbs; apt or ready to move; nimble; active; as, an agile boy; an agile tongue."
    },
    "agilely": {
        "wordtype": "adv.",
        "definition": "In an agile manner; nimbly."
    },
    "aglimmer": {
        "wordtype": "adv. & a.",
        "definition": "In a glimmering state."
    },
    "aglitter": {
        "wordtype": "adv. & a.",
        "definition": "Glittering; in a glitter."
    },
    "aglow": {
        "wordtype": "adv. & a.",
        "definition": "In a glow; glowing; as, cheeks aglow; the landscape all aglow."
    },
    "agminated": {
        "wordtype": "a.",
        "definition": "Grouped together; as, the agminated glands of Peyer in the small intestine."
    },
    "agnatic": {
        "wordtype": "a.",
        "definition": "Pertaining to descent by the male line of ancestors."
    },
    "agone": {
        "wordtype": "a. & adv.",
        "definition": "Ago."
    },
    "agood": {
        "wordtype": "adv.",
        "definition": "In earnest; heartily."
    },
    "agouara": {
        "wordtype": "n.",
        "definition": "The crab-eating raccoon (Procyon cancrivorus), found in the tropical parts of Americadjective"
    },
    "agree": {
        "wordtype": "adv.",
        "definition": "In good part; kindly."
    },
    "agreeability": {
        "wordtype": "n.",
        "definition": "Easiness of disposition."
    },
    "agreeingly": {
        "wordtype": "adv.",
        "definition": "In an agreeing manner (to); correspondingly; agreeably."
    },
    "agricultor": {
        "wordtype": "n.",
        "definition": "An agriculturist; a farmer."
    },
    "agriculturism": {
        "wordtype": "n.",
        "definition": "Agriculture."
    },
    "agriologist": {
        "wordtype": "n.",
        "definition": "One versed or engaged in agriology."
    },
    "agriology": {
        "wordtype": "n.",
        "definition": "Description or comparative study of the customs of savage or uncivilized tribes."
    },
    "agrostographical": {
        "wordtype": "a.",
        "definition": "Pertaining to agrostography."
    },
    "agrostological": {
        "wordtype": "a.",
        "definition": "Pertaining to agrostology."
    },
    "aguise": {
        "wordtype": "n.",
        "definition": "Dress."
    },
    "agush": {
        "wordtype": "adv. & a.",
        "definition": "In a gushing state."
    },
    "aheap": {
        "wordtype": "adv.",
        "definition": "In a heap; huddled together."
    },
    "ahorseback": {
        "wordtype": "adv.",
        "definition": "On horseback."
    },
    "aidance": {
        "wordtype": "n.",
        "definition": "Aid."
    },
    "aider": {
        "wordtype": "n.",
        "definition": "One who, or that which, aids."
    },
    "aidful": {
        "wordtype": "a.",
        "definition": "Helpful."
    },
    "ailment": {
        "wordtype": "n.",
        "definition": "Indisposition; morbid affection of the body; -- not applied ordinarily to acute diseases."
    },
    "airer": {
        "wordtype": "n.",
        "definition": "One who exposes to the air."
    },
    "airwards": {
        "wordtype": "adv.",
        "definition": "Toward the air; upward."
    },
    "aisless": {
        "wordtype": "a.",
        "definition": "Without an aisle."
    },
    "akinesia": {
        "wordtype": "n.",
        "definition": "Paralysis of the motor nerves; loss of movement."
    },
    "alabaster": {
        "wordtype": "n.",
        "definition": "A box or vessel for holding odoriferous ointments, etc.; -- so called from the stone of which it was originally made."
    },
    "alabastrian": {
        "wordtype": "a.",
        "definition": "Alabastrine."
    },
    "alabastrine": {
        "wordtype": "a.",
        "definition": "Of, pertaining to, or like, alabaster; as alabastrine limbs."
    },
    "alack": {
        "wordtype": "interj.",
        "definition": "An exclamation expressive of sorrow."
    },
    "alacrify": {
        "wordtype": "v. t.",
        "definition": "To rouse to action; to inspirit."
    },
    "alacrious": {
        "wordtype": "a.",
        "definition": "Brisk; joyously active; lively."
    },
    "alamodality": {
        "wordtype": "n.",
        "definition": "The quality of being a la mode; conformity to the mode or fashion; fashionableness."
    },
    "alated": {
        "wordtype": "a.",
        "definition": "Winged; having wings, or side appendages like wings."
    },
    "albanian": {
        "wordtype": "a.",
        "definition": "Of or pertaining to Albania, a province of Turkey."
    },
    "albee": {
        "wordtype": "conj.",
        "definition": "Although; albeit."
    },
    "albescence": {
        "wordtype": "n.",
        "definition": "The act of becoming white; whitishness."
    },
    "albiness": {
        "wordtype": "n.",
        "definition": "A female albino."
    },
    "alborak": {
        "wordtype": "n.",
        "definition": "The imaginary milk-white animal on which Mohammed was said to have been carried up to heaven; a white mule."
    },
    "album": {
        "wordtype": "n.",
        "definition": "A white tablet on which anything was inscribed, as a list of names, etc."
    },
    "albumen": {
        "wordtype": "n.",
        "definition": "The white of an egg."
    },
    "albuminuria": {
        "wordtype": "n.",
        "definition": "A morbid condition in which albumin is present in the urine."
    },
    "alcayde": {
        "wordtype": "n.",
        "definition": "A commander of a castle or fortress among the Spaniards, Portuguese, and Moors."
    },
    "alcoholate": {
        "wordtype": "n.",
        "definition": "A crystallizable compound of a salt with alcohol, in which the latter plays a part analogous to that of water of crystallization."
    },
    "alcoholization": {
        "wordtype": "n.",
        "definition": "The act of reducing a substance to a fine or impalpable powder."
    },
    "alcyonaria": {
        "wordtype": "n. pl.",
        "definition": "One of the orders of Anthozoadjective It includes the Alcyonacea, Pennatulacea, and Gorgonaceadjective"
    },
    "alderman": {
        "wordtype": "n.",
        "definition": "A senior or superior; a person of rank or dignity."
    },
    "aleatory": {
        "wordtype": "a.",
        "definition": "Depending on some uncertain contingency; as, an aleatory contract."
    },
    "alegar": {
        "wordtype": "n.",
        "definition": "Sour ale; vinegar made of ale."
    },
    "alehouse": {
        "wordtype": "n.",
        "definition": "A house where ale is retailed; hence, a tippling house."
    },
    "alembroth": {
        "wordtype": "n.",
        "definition": "The salt of wisdom of the alchemists, a double salt composed of the chlorides of ammonium and mercury. It was formerly used as a stimulant."
    },
    "alertness": {
        "wordtype": "n.",
        "definition": "The quality of being alert or on the alert; briskness; nimbleness; activity."
    },
    "alethiology": {
        "wordtype": "n.",
        "definition": "The science which treats of the nature of truth and evidence."
    },
    "alew": {
        "wordtype": "n.",
        "definition": "Halloo."
    },
    "alewife": {
        "wordtype": "n.",
        "definition": "A woman who keeps an alehouse."
    },
    "alexipharmic": {
        "wordtype": "n.",
        "definition": "An antidote against poison or infection; a counterpoison."
    },
    "alfenide": {
        "wordtype": "n.",
        "definition": "An alloy of nickel and silver electroplated with silver."
    },
    "alfet": {
        "wordtype": "n.",
        "definition": "A caldron of boiling water into which an accused person plunged his forearm as a test of innocence or guilt."
    },
    "alfione": {
        "wordtype": "n.",
        "definition": "An edible marine fish of California (Rhacochilus toxotes)."
    },
    "algal": {
        "wordtype": "a.",
        "definition": "Pertaining to, or like, algae."
    },
    "algaroba": {
        "wordtype": "n.",
        "definition": "The Carob, a leguminous tree of the Mediterranean region; also, its edible beans or pods, called St. John's bread."
    },
    "algebraically": {
        "wordtype": "adv.",
        "definition": "By algebraic process."
    },
    "algebraize": {
        "wordtype": "v. t.",
        "definition": "To perform by algebra; to reduce to algebraic form."
    },
    "algidity": {
        "wordtype": "n.",
        "definition": "Chilliness; coldness"
    },
    "algoid": {
        "wordtype": "a.",
        "definition": "Of the nature of, or resembling, an algadjective"
    },
    "algol": {
        "wordtype": "n.",
        "definition": "A fixed star, in Medusa's head, in the constellation Perseus, remarkable for its periodic variation in brightness."
    },
    "alguazil": {
        "wordtype": "n.",
        "definition": "An inferior officer of justice in Spain; a warrant officer; a constable."
    },
    "alhambra": {
        "wordtype": "n.",
        "definition": "The palace of the Moorish kings at Granadadjective"
    },
    "alible": {
        "wordtype": "a.",
        "definition": "Nutritive; nourishing."
    },
    "aliene": {
        "wordtype": "v. t.",
        "definition": "To alien or alienate; to transfer, as title or property; as, to aliene an estate."
    },
    "alife": {
        "wordtype": "adv.",
        "definition": "On my life; dearly."
    },
    "aliform": {
        "wordtype": "a.",
        "definition": "Wing-shaped; winglike."
    },
    "alight": {
        "wordtype": "v. i.",
        "definition": "To spring down, get down, or descend, as from on horseback or from a carriage; to dismount."
    },
    "align": {
        "wordtype": "v. t.",
        "definition": "To adjust or form to a line; to range or form in line; to bring into line; to aline."
    },
    "aliquot": {
        "wordtype": "a.",
        "definition": "An aliquot part of a number or quantity is one which will divide it without a remainder; thus, 5 is an aliquot part of 15. Opposed to aliquant."
    },
    "alitrunk": {
        "wordtype": "n.",
        "definition": "The segment of the body of an insect to which the wings are attached; the thorax."
    },
    "alkalescency": {
        "wordtype": "n.",
        "definition": "A tendency to become alkaline; or the state of a substance in which alkaline properties begin to be developed, or to predominant."
    },
    "alkalescent": {
        "wordtype": "a.",
        "definition": "Tending to the properties of an alkali; slightly alkaline."
    },
    "alkalious": {
        "wordtype": "a.",
        "definition": "Alkaline."
    },
    "alkalizate": {
        "wordtype": "a.",
        "definition": "Alkaline."
    },
    "alkaloidal": {
        "wordtype": "a.",
        "definition": "Pertaining to, resembling, or containing, alkali."
    },
    "all": {
        "wordtype": "a.",
        "definition": "Any."
    },
    "allect": {
        "wordtype": "v. t.",
        "definition": "To allure; to entice."
    },
    "allegement": {
        "wordtype": "n.",
        "definition": "Allegation."
    },
    "allegorizer": {
        "wordtype": "n.",
        "definition": "One who allegorizes, or turns things into allegory; an allegorist."
    },
    "allegresse": {
        "wordtype": "n.",
        "definition": "Joy; gladsomeness."
    },
    "allegretto": {
        "wordtype": "a.",
        "definition": "Quicker than andante, but not so quick as allegro."
    },
    "allemande": {
        "wordtype": "n.",
        "definition": "A figure in dancing."
    },
    "allerion": {
        "wordtype": "n.",
        "definition": "Am eagle without beak or feet, with expanded wings."
    },
    "alley": {
        "wordtype": "n.",
        "definition": "A narrow passage; especially a walk or passage in a garden or park, bordered by rows of trees or bushes; a bordered way."
    },
    "allhallowmas": {
        "wordtype": "n.",
        "definition": "The feast of All Saints."
    },
    "alliciency": {
        "wordtype": "n.",
        "definition": "Attractive power; attractiveness."
    },
    "allision": {
        "wordtype": "n.",
        "definition": "The act of dashing against, or striking upon."
    },
    "allmouth": {
        "wordtype": "n.",
        "definition": "The angler."
    },
    "allodial": {
        "wordtype": "a.",
        "definition": "Anything held allodially."
    },
    "allodialism": {
        "wordtype": "n.",
        "definition": "The allodial system."
    },
    "allodiary": {
        "wordtype": "n.",
        "definition": "One who holds an allodium."
    },
    "allogeneous": {
        "wordtype": "a.",
        "definition": "Different in nature or kind."
    },
    "allomorphic": {
        "wordtype": "a.",
        "definition": "Of or pertaining to allomorphism."
    },
    "allonym": {
        "wordtype": "n.",
        "definition": "The name of another person assumed by the author of a work."
    },
    "allonymous": {
        "wordtype": "a.",
        "definition": "Published under the name of some one other than the author."
    },
    "alloo": {
        "wordtype": "v. t. / i.",
        "definition": "To incite dogs by a call; to halloo."
    },
    "allotheism": {
        "wordtype": "n.",
        "definition": "The worship of strange gods."
    },
    "allotropical": {
        "wordtype": "a.",
        "definition": "Of or pertaining to allotropism."
    },
    "allottable": {
        "wordtype": "a.",
        "definition": "Capable of being allotted."
    },
    "allottee": {
        "wordtype": "n.",
        "definition": "One to whom anything is allotted; one to whom an allotment is made."
    },
    "alluminor": {
        "wordtype": "n.",
        "definition": "An illuminator of manuscripts and books; a limner."
    },
    "alluring": {
        "wordtype": "a.",
        "definition": "That allures; attracting; charming; tempting."
    },
    "ally": {
        "wordtype": "v. t.",
        "definition": "To connect or form a relation between by similitude, resemblance, friendship, or love."
    },
    "allyl": {
        "wordtype": "n.",
        "definition": "An organic radical, C3H5, existing especially in oils of garlic and mustard."
    },
    "alman": {
        "wordtype": "n.",
        "definition": "A German."
    },
    "almeh": {
        "wordtype": "n.",
        "definition": "An Egyptian dancing girl; an Almadjective"
    },
    "almighty": {
        "wordtype": "a.",
        "definition": "Unlimited in might; omnipotent; all-powerful; irresistible."
    },
    "almner": {
        "wordtype": "n.",
        "definition": "An almoner."
    },
    "almonry": {
        "wordtype": "n.",
        "definition": "The place where an almoner resides, or where alms are distributed."
    },
    "almsdeed": {
        "wordtype": "n.",
        "definition": "An act of charity."
    },
    "alomancy": {
        "wordtype": "n.",
        "definition": "Divination by means of salt."
    },
    "alongside": {
        "wordtype": "adv.",
        "definition": "Along or by the side; side by side with; -- often with of; as, bring the boat alongside; alongside of him; alongside of the tree."
    },
    "alose": {
        "wordtype": "v. t.",
        "definition": "To praise."
    },
    "aloud": {
        "wordtype": "adv.",
        "definition": "With a loud voice, or great noise; loudly; audibly."
    },
    "alphabetism": {
        "wordtype": "n.",
        "definition": "The expression of spoken sounds by an alphabet."
    },
    "alquifou": {
        "wordtype": "n.",
        "definition": "A lead ore found in Cornwall, England, and used by potters to give a green glaze to their wares; potter's ore."
    },
    "already": {
        "wordtype": "adv.",
        "definition": "Prior to some specified time, either past, present, or future; by this time; previously."
    },
    "alsike": {
        "wordtype": "n.",
        "definition": "A species of clover with pinkish or white flowers; Trifolium hybridum."
    },
    "altar": {
        "wordtype": "n.",
        "definition": "A raised structure (as a square or oblong erection of stone or wood) on which sacrifices are offered or incense burned to a deity."
    },
    "altarist": {
        "wordtype": "n.",
        "definition": "A chaplain."
    },
    "altazimuth": {
        "wordtype": "n.",
        "definition": "An instrument for taking azimuths and altitudes simultaneously."
    },
    "altercative": {
        "wordtype": "a.",
        "definition": "Characterized by wrangling; scolding."
    },
    "alterity": {
        "wordtype": "n.",
        "definition": "The state or quality of being other; a being otherwise."
    },
    "alternacy": {
        "wordtype": "n.",
        "definition": "Alternateness; alternation."
    },
    "althea": {
        "wordtype": "n.",
        "definition": "A genus of plants of the Mallow family. It includes the officinal marsh mallow, and the garden hollyhocks."
    },
    "altimeter": {
        "wordtype": "n.",
        "definition": "An instrument for taking altitudes, as a quadrant, sextant, etc."
    },
    "altimetry": {
        "wordtype": "n.",
        "definition": "The art of measuring altitudes, or heights."
    },
    "altisonant": {
        "wordtype": "a.",
        "definition": "High-sounding; lofty or pompous."
    },
    "alto": {
        "wordtype": "n.",
        "definition": "An alto singer."
    },
    "alular": {
        "wordtype": "a.",
        "definition": "Pertaining to the aluladjective"
    },
    "alum": {
        "wordtype": "v. t.",
        "definition": "To steep in, or otherwise impregnate with, a solution of alum; to treat with alum."
    },
    "alumen": {
        "wordtype": "n.",
        "definition": "Alum."
    },
    "aluminize": {
        "wordtype": "v. t.",
        "definition": "To treat or impregnate with alum; to alum."
    },
    "alumna": {
        "wordtype": "n. fem.",
        "definition": "A female pupil; especially, a graduate of a school or college."
    },
    "alure": {
        "wordtype": "n.",
        "definition": "A walk or passage; -- applied to passages of various kinds."
    },
    "alveoliform": {
        "wordtype": "a.",
        "definition": "Having the form of alveoli, or little sockets, cells, or cavities."
    },
    "alveus": {
        "wordtype": "n.",
        "definition": "The channel of a river."
    },
    "always": {
        "wordtype": "adv.",
        "definition": "At all times; ever; perpetually; throughout all time; continually; as, God is always the same."
    },
    "amalgamated": {
        "wordtype": "a.",
        "definition": "Coalesced; united; combined."
    },
    "amalgamation": {
        "wordtype": "n.",
        "definition": "The mixing or blending of different elements, races, societies, etc.; also, the result of such combination or blending; a homogeneous union."
    },
    "amanitine": {
        "wordtype": "n.",
        "definition": "The poisonous principle of some fungi."
    },
    "amarantaceous": {
        "wordtype": "a.",
        "definition": "Of, pertaining to, or resembling, the family of plants of which the amaranth is the type."
    },
    "amasser": {
        "wordtype": "n.",
        "definition": "One who amasses."
    },
    "amassette": {
        "wordtype": "n.",
        "definition": "An instrument of horn used for collecting painters' colors on the stone in the process of grinding."
    },
    "amativeness": {
        "wordtype": "n.",
        "definition": "The faculty supposed to influence sexual desire; propensity to love."
    },
    "amatorious": {
        "wordtype": "a.",
        "definition": "Amatory."
    },
    "amazement": {
        "wordtype": "n.",
        "definition": "The condition of being amazed; bewilderment [Obs.]; overwhelming wonder, as from surprise, sudden fear, horror, or admiration."
    },
    "ambaginous": {
        "wordtype": "a.",
        "definition": "Ambagious."
    },
    "ambagitory": {
        "wordtype": "a.",
        "definition": "Ambagious."
    },
    "ambassadress": {
        "wordtype": "n.",
        "definition": "A female ambassador; also, the wife of an ambassador."
    },
    "ambidextrous": {
        "wordtype": "a.",
        "definition": "Having the faculty of using both hands with equal ease."
    },
    "ambidextrously": {
        "wordtype": "adv.",
        "definition": "In an ambidextrous manner; cunningly."
    },
    "ambient": {
        "wordtype": "a.",
        "definition": "Encompassing on all sides; circumfused; investing."
    },
    "ambitus": {
        "wordtype": "n.",
        "definition": "A canvassing for votes."
    },
    "amblygon": {
        "wordtype": "n.",
        "definition": "An obtuse-angled figure, esp. and obtuse-angled triangle."
    },
    "amblyopy": {
        "wordtype": "n.",
        "definition": "Weakness of sight, without and opacity of the cornea, or of the interior of the eye; the first degree of amaurosis."
    },
    "ambreate": {
        "wordtype": "n.",
        "definition": "A salt formed by the combination of ambreic acid with a base or positive radical."
    },
    "ambrite": {
        "wordtype": "n.",
        "definition": "A fossil resin occurring in large masses in New Zealand."
    },
    "ambrosin": {
        "wordtype": "n.",
        "definition": "An early coin struck by the dukes of Milan, and bearing the figure of St. Ambrose on horseback."
    },
    "ambulacral": {
        "wordtype": "a.",
        "definition": "Of or pertaining to ambulacra; avenuelike; as, the ambulacral ossicles, plates, spines, and suckers of echinoderms."
    },
    "ambulacrum": {
        "wordtype": "n.",
        "definition": "One of the suckers on the feet of mites."
    },
    "ambulatory": {
        "wordtype": "a.",
        "definition": "Of or pertaining to walking; having the faculty of walking; formed or fitted for walking; as, an ambulatory animal."
    },
    "ambusher": {
        "wordtype": "n.",
        "definition": "One lying in ambush."
    },
    "ambustion": {
        "wordtype": "n.",
        "definition": "A burn or scald."
    },
    "amenage": {
        "wordtype": "v. t.",
        "definition": "To manage."
    },
    "amender": {
        "wordtype": "n.",
        "definition": "One who amends."
    },
    "amends": {
        "wordtype": "n. sing. & pl.",
        "definition": "Compensation for a loss or injury; recompense; reparation."
    },
    "amenorrhoea": {
        "wordtype": "n.",
        "definition": "Retention or suppression of the menstrual discharge."
    },
    "ament": {
        "wordtype": "n.",
        "definition": "A species of inflorescence; a catkin."
    },
    "american": {
        "wordtype": "a.",
        "definition": "Of or pertaining to America; as, the American continent: American Indians."
    },
    "americanize": {
        "wordtype": "v. t.",
        "definition": "To render American; to assimilate to the Americans in customs, ideas, etc.; to stamp with American characteristics."
    },
    "amethodist": {
        "wordtype": "n.",
        "definition": "One without method; a quack."
    },
    "amethyst": {
        "wordtype": "",
        "definition": "A variety of crystallized quartz, of a purple or bluish violet color, of different shades. It is much used as a jeweler's stone."
    },
    "ametropia": {
        "wordtype": "n.",
        "definition": "Any abnormal condition of the refracting powers of the eye."
    },
    "amiability": {
        "wordtype": "n.",
        "definition": "The quality of being amiable; amiableness; sweetness of disposition."
    },
    "amic": {
        "wordtype": "a.",
        "definition": "Related to, or derived, ammonia; -- used chiefly as a suffix; as, amic acid; phosphamic acid."
    },
    "amicably": {
        "wordtype": "adv.",
        "definition": "In an amicable manner."
    },
    "amidships": {
        "wordtype": "adv.",
        "definition": "In the middle of a ship, with regard to her length, and sometimes also her breadth."
    },
    "amissible": {
        "wordtype": "a.",
        "definition": "Liable to be lost."
    },
    "ammeter": {
        "wordtype": "n.",
        "definition": "A contraction of amperometer or amperemeter."
    },
    "ammodyte": {
        "wordtype": "n.",
        "definition": "One of a genus of fishes; the sand eel."
    },
    "amnestic": {
        "wordtype": "a.",
        "definition": "Causing loss of memory."
    },
    "amniotic": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the amnion; characterized by an amnion; as, the amniotic fluid; the amniotic sac."
    },
    "amoebaeum": {
        "wordtype": "n.",
        "definition": "A poem in which persons are represented at speaking alternately; as the third and seventh eclogues of Virgil."
    },
    "amorosity": {
        "wordtype": "n.",
        "definition": "The quality of being amorous; lovingness."
    },
    "amortize": {
        "wordtype": "v. t.",
        "definition": "To make as if dead; to destroy."
    },
    "amotus": {
        "wordtype": "a.",
        "definition": "Elevated, -- as a toe, when raised so high that the tip does not touch the ground."
    },
    "amovability": {
        "wordtype": "n.",
        "definition": "Liability to be removed or dismissed from office."
    },
    "amphiarthrodial": {
        "wordtype": "a.",
        "definition": "Characterized by amphiarthrosis."
    },
    "amphibial": {
        "wordtype": "a. & n.",
        "definition": "Amphibian."
    },
    "amphibious": {
        "wordtype": "a.",
        "definition": "Having the ability to live both on land and in water, as frogs, crocodiles, beavers, and some plants."
    },
    "amphibium": {
        "wordtype": "n.",
        "definition": "An amphibian."
    },
    "amphigory": {
        "wordtype": "n.",
        "definition": "A nonsense verse; a rigmarole, with apparent meaning, which on further attention proves to be meaningless."
    },
    "amphipneust": {
        "wordtype": "n.",
        "definition": "One of a tribe of Amphibia, which have both lungs and gills at the same time, as the proteus and siren."
    },
    "amphipod": {
        "wordtype": "n.",
        "definition": "One of the Amphipodadjective"
    },
    "amphiprostyle": {
        "wordtype": "a.",
        "definition": "Doubly prostyle; having columns at each end, but not at the sides."
    },
    "amphisbaenoid": {
        "wordtype": "a.",
        "definition": "Like or pertaining to the lizards of the genus Amphisbaenadjective"
    },
    "amphistylic": {
        "wordtype": "a.",
        "definition": "Having the mandibular arch articulated with the hyoid arch and the cranium, as in the cestraciont sharks; -- said of a skull."
    },
    "amphitheatre": {
        "wordtype": "n.",
        "definition": "An oval or circular building with rising tiers of seats about an open space called the arenadjective"
    },
    "amply": {
        "wordtype": "adv.",
        "definition": "In an ample manner."
    },
    "amputation": {
        "wordtype": "n.",
        "definition": "The act of amputating; esp. the operation of cutting off a limb or projecting part of the body."
    },
    "ampyx": {
        "wordtype": "n.",
        "definition": "A woman's headband (sometimes of metal), for binding the front hair."
    },
    "amurcous": {
        "wordtype": "a.",
        "definition": "Full off dregs; foul."
    },
    "amusable": {
        "wordtype": "a.",
        "definition": "Capable of being amused."
    },
    "amygdalaceous": {
        "wordtype": "a.",
        "definition": "Akin to, or derived from, the almond."
    },
    "amygdalate": {
        "wordtype": "a.",
        "definition": "Pertaining to, resembling, or made of, almonds."
    },
    "amyl": {
        "wordtype": "n.",
        "definition": "A hydrocarbon radical, C5H11, of the paraffine series found in amyl alcohol or fusel oil, etc."
    },
    "amylate": {
        "wordtype": "n.",
        "definition": "A compound of the radical amyl with oxygen and a positive atom or radical."
    },
    "amylic": {
        "wordtype": "a.",
        "definition": "Pertaining to, or derived from, amyl; as, amylic ether."
    },
    "amylose": {
        "wordtype": "n.",
        "definition": "One of the starch group (C6H10O5)n of the carbohydrates; as, starch, arabin, dextrin, cellulose, etc."
    },
    "an": {
        "wordtype": "conj.",
        "definition": "If; -- a word used by old English authors."
    },
    "anabaptize": {
        "wordtype": "v. t.",
        "definition": "To rebaptize; to rechristen; also, to rename."
    },
    "anabasis": {
        "wordtype": "n.",
        "definition": "The first period, or increase, of a disease; augmentation."
    },
    "anacamptics": {
        "wordtype": "n.",
        "definition": "The science of reflected light, now called catoptrics."
    },
    "anachronistic": {
        "wordtype": "a.",
        "definition": "Erroneous in date; containing an anachronism."
    },
    "anachronous": {
        "wordtype": "a.",
        "definition": "Containing an anachronism; anachronistic."
    },
    "anaemic": {
        "wordtype": "a.",
        "definition": "Of or pertaining to anaemiadjective"
    },
    "anaerobic": {
        "wordtype": "a.",
        "definition": "Relating to, or like, anaerobies; anaerobiotic."
    },
    "anaglyph": {
        "wordtype": "n.",
        "definition": "Any sculptured, chased, or embossed ornament worked in low relief, as a cameo."
    },
    "anaglyptographic": {
        "wordtype": "a.",
        "definition": "Of or pertaining to anaglyptography; as, anaglyptographic engraving."
    },
    "anagnorisis": {
        "wordtype": "n.",
        "definition": "The unfolding or denouement."
    },
    "anagram": {
        "wordtype": "v. t.",
        "definition": "To anagrammatize."
    },
    "analemma": {
        "wordtype": "n.",
        "definition": "A scale of the sun's declination for each day of the year, drawn across the torrid zone on an artificial terrestrial globe."
    },
    "analeptic": {
        "wordtype": "a.",
        "definition": "Restorative; giving strength after disease."
    },
    "analogal": {
        "wordtype": "a.",
        "definition": "Analogous."
    },
    "analogicalness": {
        "wordtype": "n.",
        "definition": "Quality of being analogical."
    },
    "analogize": {
        "wordtype": "v. i.",
        "definition": "To employ, or reason by, analogy."
    },
    "analogous": {
        "wordtype": "a.",
        "definition": "Having analogy; corresponding to something else; bearing some resemblance or proportion; -- often followed by to."
    },
    "anamese": {
        "wordtype": "a.",
        "definition": "Of or pertaining to Anam, to southeastern Asiadjective"
    },
    "ananas": {
        "wordtype": "n.",
        "definition": "The pineapple (Ananassa sativa)."
    },
    "anaphrodisia": {
        "wordtype": "n.",
        "definition": "Absence of sexual appetite."
    },
    "anapnoic": {
        "wordtype": "a.",
        "definition": "Relating to respiration."
    },
    "anarchism": {
        "wordtype": "n.",
        "definition": "The doctrine or practice of anarchists."
    },
    "anarthropoda": {
        "wordtype": "n. pl.",
        "definition": "One of the divisions of Articulata in which there are no jointed legs, as the annelids; -- opposed to Arthropodadjective"
    },
    "anathema": {
        "wordtype": "n.",
        "definition": "An imprecation; a curse; a malediction."
    },
    "anathematize": {
        "wordtype": "v. t.",
        "definition": "To pronounce an anathema against; to curse. Hence: To condemn publicly as something accursed."
    },
    "anatocism": {
        "wordtype": "n.",
        "definition": "Compound interest."
    },
    "anatomization": {
        "wordtype": "n.",
        "definition": "The act of anatomizing."
    },
    "ancestress": {
        "wordtype": "n.",
        "definition": "A female ancestor."
    },
    "anchorable": {
        "wordtype": "a.",
        "definition": "Fit for anchorage."
    },
    "anchored": {
        "wordtype": "a.",
        "definition": "Held by an anchor; at anchor; held safely; as, an anchored bark; also, shaped like an anchor; forked; as, an anchored tongue."
    },
    "anchoress": {
        "wordtype": "n.",
        "definition": "A female anchoret."
    },
    "anchoretical": {
        "wordtype": "a.",
        "definition": "Pertaining to an anchoret or hermit; after the manner of an anchoret."
    },
    "anchorless": {
        "wordtype": "a.",
        "definition": "Without an anchor or stay. Hence: Drifting; unsettled."
    },
    "ankylosis": {
        "wordtype": "n.",
        "definition": "Stiffness or fixation of a joint; formation of a stiff joint."
    },
    "anchylotic": {
        "wordtype": "a.",
        "definition": "Of or pertaining to anchylosis."
    },
    "anciently": {
        "wordtype": "adv.",
        "definition": "In ancient times."
    },
    "ancile": {
        "wordtype": "n.",
        "definition": "The sacred shield of the Romans, said to have-fallen from heaven in the reign of Numadjective It was the palladium of Rome."
    },
    "ancille": {
        "wordtype": "n.",
        "definition": "A maidservant; a handmaid."
    },
    "ancistroid": {
        "wordtype": "a.",
        "definition": "Hook-shaped."
    },
    "ancome": {
        "wordtype": "n.",
        "definition": "A small ulcerous swelling, coming suddenly; also, a whitlow."
    },
    "ancone": {
        "wordtype": "n.",
        "definition": "The corner or quoin of a wall, cross-beam, or rafter."
    },
    "anconeal": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the ancon or elbow."
    },
    "anconeus": {
        "wordtype": "n.",
        "definition": "A muscle of the elbow and forearm."
    },
    "andante": {
        "wordtype": "a.",
        "definition": "Moving moderately slow, but distinct and flowing; quicker than larghetto, and slower than allegretto."
    },
    "andiron": {
        "wordtype": "n.",
        "definition": "A utensil for supporting wood when burning in a fireplace, one being placed on each side; a firedog; as, a pair of andirons."
    },
    "andranatomy": {
        "wordtype": "n.",
        "definition": "The dissection of a human body, especially of a male; androtomy."
    },
    "androgyne": {
        "wordtype": "n.",
        "definition": "An hermaphrodite."
    },
    "androides": {
        "wordtype": "n.",
        "definition": "A machine or automaton in the form of a human being."
    },
    "andromeda": {
        "wordtype": "n.",
        "definition": "A northern constellation, supposed to represent the mythical Andromedadjective"
    },
    "andron": {
        "wordtype": "n.",
        "definition": "The apartment appropriated for the males. This was in the lower part of the house."
    },
    "andropetalous": {
        "wordtype": "a.",
        "definition": "Produced by the conversion of the stamens into petals, as double flowers, like the garden ranunculus."
    },
    "anelectric": {
        "wordtype": "a.",
        "definition": "Not becoming electrified by friction; -- opposed to idioelectric."
    },
    "anemometrical": {
        "wordtype": "a.",
        "definition": "Of or pertaining to anemometry."
    },
    "anemone": {
        "wordtype": "n.",
        "definition": "A genus of plants of the Ranunculus or Crowfoot family; windflower. Some of the species are cultivated in gardens."
    },
    "anemonin": {
        "wordtype": "n.",
        "definition": "An acrid, poisonous, crystallizable substance, obtained from some species of anemone."
    },
    "anenterous": {
        "wordtype": "a.",
        "definition": "Destitute of a stomach or an intestine."
    },
    "anetic": {
        "wordtype": "a.",
        "definition": "Soothing."
    },
    "anew": {
        "wordtype": "adv.",
        "definition": "Over again; another time; in a new form; afresh; as, to arm anew; to create anew."
    },
    "angelhood": {
        "wordtype": "n.",
        "definition": "The state of being an angel; angelic nature."
    },
    "angelophany": {
        "wordtype": "n.",
        "definition": "The actual appearance of an angel to man."
    },
    "angerly": {
        "wordtype": "adv.",
        "definition": "Angrily."
    },
    "angevine": {
        "wordtype": "a.",
        "definition": "Of or pertaining to Anjou in France."
    },
    "anginose": {
        "wordtype": "a.",
        "definition": "Pertaining to angina or angina pectoris."
    },
    "angioma": {
        "wordtype": "n.",
        "definition": "A tumor composed chiefly of dilated blood vessels."
    },
    "angioscope": {
        "wordtype": "n.",
        "definition": "An instrument for examining the capillary vessels of animals and plants."
    },
    "anglemeter": {
        "wordtype": "n.",
        "definition": "An instrument to measure angles, esp. one used by geologists to measure the dip of stratadjective"
    },
    "anglophobia": {
        "wordtype": "n.",
        "definition": "Intense dread of, or aversion to, England or the English."
    },
    "angriness": {
        "wordtype": "n.",
        "definition": "The quality of being angry, or of being inclined to anger."
    },
    "angry": {
        "wordtype": "superl.",
        "definition": "Troublesome; vexatious; rigorous."
    },
    "anguine": {
        "wordtype": "a.",
        "definition": "Of, pertaining to, or resembling, a snake or serpent."
    },
    "anguineous": {
        "wordtype": "a.",
        "definition": "Snakelike."
    },
    "angulation": {
        "wordtype": "n.",
        "definition": "A making angular; angular formation."
    },
    "angustate": {
        "wordtype": "a.",
        "definition": "Narrowed."
    },
    "anhang": {
        "wordtype": "v. t.",
        "definition": "To hang."
    },
    "anhelation": {
        "wordtype": "n.",
        "definition": "Short and rapid breathing; a panting; asthmadjective"
    },
    "anhinga": {
        "wordtype": "n.",
        "definition": "An aquatic bird of the southern United States (Platus anhinga); the darter, or snakebird."
    },
    "anidiomatical": {
        "wordtype": "a.",
        "definition": "Not idiomatic."
    },
    "anil": {
        "wordtype": "n.",
        "definition": "A West Indian plant (Indigofera anil), one of the original sources of indigo; also, the indigo dye."
    },
    "anilide": {
        "wordtype": "n.",
        "definition": "One of a class of compounds which may be regarded as amides in which more or less of the hydrogen has been replaced by phenyl."
    },
    "animadverter": {
        "wordtype": "n.",
        "definition": "One who animadverts; a censurer; also [Obs.], a chastiser."
    },
    "animalculum": {
        "wordtype": "n.",
        "definition": "An animalcule."
    },
    "animalish": {
        "wordtype": "a.",
        "definition": "Like an animal."
    },
    "animalize": {
        "wordtype": "v. t.",
        "definition": "To endow with the properties of an animal; to represent in animal form."
    },
    "animate": {
        "wordtype": "v. t.",
        "definition": "To give natural life to; to make alive; to quicken; as, the soul animates the body."
    },
    "animatedly": {
        "wordtype": "adv.",
        "definition": "With animation."
    },
    "animater": {
        "wordtype": "n.",
        "definition": "One who animates."
    },
    "animism": {
        "wordtype": "n.",
        "definition": "The doctrine, taught by Stahl, that the soul is the proper principle of life and development in the body."
    },
    "anisette": {
        "wordtype": "n.",
        "definition": "A French cordial or liqueur flavored with anise seeds."
    },
    "anisic": {
        "wordtype": "a.",
        "definition": "Of or derived from anise; as, anisic acid; anisic alcohol."
    },
    "anisomeric": {
        "wordtype": "a.",
        "definition": "Not isomeric; not made of the same components in the same proportions."
    },
    "anlace": {
        "wordtype": "n.",
        "definition": "A broad dagger formerly worn at the girdle."
    },
    "annalistic": {
        "wordtype": "a.",
        "definition": "Pertaining to, or after the manner of, an annalist; as, the dry annalistic style."
    },
    "annexer": {
        "wordtype": "n.",
        "definition": "One who annexes."
    },
    "annexion": {
        "wordtype": "n.",
        "definition": "Annexation."
    },
    "annihilable": {
        "wordtype": "a.",
        "definition": "Capable of being annihilated."
    },
    "annihilationist": {
        "wordtype": "n.",
        "definition": "One who believes that eternal punishment consists in annihilation or extinction of being; a destructionist."
    },
    "anniversary": {
        "wordtype": "a.",
        "definition": "Returning with the year, at a stated time; annual; yearly; as, an anniversary feast."
    },
    "announcer": {
        "wordtype": "n.",
        "definition": "One who announces."
    },
    "annualist": {
        "wordtype": "n.",
        "definition": "One who writes for, or who edits, an annual."
    },
    "annually": {
        "wordtype": "adv.",
        "definition": "Yearly; year by year."
    },
    "annueler": {
        "wordtype": "n.",
        "definition": "A priest employed in saying annuals, or anniversary Masses."
    },
    "annulate": {
        "wordtype": "n.",
        "definition": "One of the Annulatadjective"
    },
    "annulated": {
        "wordtype": "a.",
        "definition": "Furnished with, or composed of, rings; ringed; surrounded by rings of color."
    },
    "annuller": {
        "wordtype": "n.",
        "definition": "One who annuls."
    },
    "anoa": {
        "wordtype": "n.",
        "definition": "A small wild ox of Celebes (Anoa depressicornis), allied to the buffalo, but having long nearly straight horns."
    },
    "anomalism": {
        "wordtype": "n.",
        "definition": "An anomaly; a deviation from rule."
    },
    "anomalistically": {
        "wordtype": "adv.",
        "definition": "With irregularity."
    },
    "anomaly": {
        "wordtype": "n.",
        "definition": "Deviation from the common rule; an irregularity; anything anomalous."
    },
    "anomophyllous": {
        "wordtype": "a.",
        "definition": "Having leaves irregularly placed."
    },
    "anomuran": {
        "wordtype": "a.",
        "definition": "Irregular in the character of the tail or abdomen; as, the anomural crustaceans."
    },
    "anophyte": {
        "wordtype": "n.",
        "definition": "A moss or mosslike plant which cellular stems, having usually an upward growth and distinct leaves."
    },
    "anopsy": {
        "wordtype": "a.",
        "definition": "Want or defect of sight; blindness."
    },
    "anormal": {
        "wordtype": "a.",
        "definition": "Not according to rule; abnormal."
    },
    "anorn": {
        "wordtype": "v. t.",
        "definition": "To adorn."
    },
    "anorthic": {
        "wordtype": "a.",
        "definition": "Having unequal oblique axes; as, anorthic crystals."
    },
    "anorthoscope": {
        "wordtype": "n.",
        "definition": "An optical toy for producing amusing figures or pictures by means of two revolving disks, on one of which distorted figures are painted."
    },
    "answer": {
        "wordtype": "n.",
        "definition": "To speak in defense against; to reply to in defense; as, to answer a charge; to answer an accusation."
    },
    "answerable": {
        "wordtype": "a.",
        "definition": "Capable of being answered or refuted; admitting a satisfactory answer."
    },
    "answerableness": {
        "wordtype": "n.",
        "definition": "The quality of being answerable, liable, responsible, or correspondent."
    },
    "antaean": {
        "wordtype": "a.",
        "definition": "Pertaining to Antaeus, a giant athlete slain by Hercules."
    },
    "antagonism": {
        "wordtype": "n.",
        "definition": "Opposition of action; counteraction or contrariety of things or principles."
    },
    "antagonistical": {
        "wordtype": "a.",
        "definition": "Opposing in combat, combating; contending or acting against; as, antagonistic forces."
    },
    "antares": {
        "wordtype": "n.",
        "definition": "The principal star in Scorpio: -- called also the Scorpion's Heart."
    },
    "antecedency": {
        "wordtype": "n.",
        "definition": "The state or condition of being antecedent; priority."
    },
    "antecedent": {
        "wordtype": "a.",
        "definition": "Going before in time; prior; anterior; preceding; as, an event antecedent to the Deluge; an antecedent cause."
    },
    "antecommunion": {
        "wordtype": "n.",
        "definition": "A name given to that part of the Anglican liturgy for the communion, which precedes the consecration of the elements."
    },
    "antedate": {
        "wordtype": "n.",
        "definition": "Prior date; a date antecedent to another which is the actual date."
    },
    "antelucan": {
        "wordtype": "a.",
        "definition": "Held or being before light; -- a word applied to assemblies of Christians, in ancient times of persecution, held before light in the morning."
    },
    "antemetic": {
        "wordtype": "a.",
        "definition": "Tending to check vomiting."
    },
    "antemural": {
        "wordtype": "n.",
        "definition": "An outwork of a strong, high wall, with turrets, in front of the gateway (as of an old castle), for defending the entrance."
    },
    "antenatal": {
        "wordtype": "a.",
        "definition": "Before birth."
    },
    "antennule": {
        "wordtype": "n.",
        "definition": "A small antenna; -- applied to the smaller pair of antennae or feelers of Crustaceadjective"
    },
    "antepileptic": {
        "wordtype": "a.",
        "definition": "Good against epilepsy."
    },
    "antepredicament": {
        "wordtype": "n.",
        "definition": "A prerequisite to a clear understanding of the predicaments and categories, such as definitions of common terms."
    },
    "anteriority": {
        "wordtype": "n.",
        "definition": "The state of being anterior or preceding in time or in situation; priority."
    },
    "anteroom": {
        "wordtype": "n.",
        "definition": "A room before, or forming an entrance to, another; a waiting room."
    },
    "antetemple": {
        "wordtype": "n.",
        "definition": "The portico, or narthex in an ancient temple or church."
    },
    "anther": {
        "wordtype": "n.",
        "definition": "That part of the stamen containing the pollen, or fertilizing dust, which, when mature, is emitted for the impregnation of the ovary."
    },
    "antheriform": {
        "wordtype": "a.",
        "definition": "Shaped like an anther; anther-shaped."
    },
    "anthocarpous": {
        "wordtype": "a.",
        "definition": "Having some portion of the floral envelopes attached to the pericarp to form the fruit, as in the checkerberry, the mulberry, and the pineapple."
    },
    "antholite": {
        "wordtype": "n.",
        "definition": "A fossil plant, like a petrified flower."
    },
    "anthophagous": {
        "wordtype": "a.",
        "definition": "Eating flowers; -- said of certain insects."
    },
    "anthraquinone": {
        "wordtype": "n.",
        "definition": "A hydrocarbon, C6H4.C2O2.C6H4, subliming in shining yellow needles. It is obtained by oxidation of anthracene."
    },
    "anthropogenic": {
        "wordtype": "a.",
        "definition": "Of or pertaining to anthropogeny."
    },
    "anthropogeny": {
        "wordtype": "n.",
        "definition": "The science or study of human generation, or the origin and development of man."
    },
    "anthropoidal": {
        "wordtype": "a.",
        "definition": "Anthropoid."
    },
    "anthropomancy": {
        "wordtype": "n.",
        "definition": "Divination by the entrails of human being."
    },
    "anthropomorphitic": {
        "wordtype": "a.",
        "definition": "to anthropomorphism."
    },
    "anthropophaginian": {
        "wordtype": "n.",
        "definition": "One who east human flesh."
    },
    "anthropotomical": {
        "wordtype": "a.",
        "definition": "Pertaining to anthropotomy, or the dissection of human bodies."
    },
    "antibrachial": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the antibrachium, or forearm."
    },
    "anticipate": {
        "wordtype": "v. t.",
        "definition": "To be before in doing; to do or take before another; to preclude or prevent by prior action."
    },
    "anticlinorium": {
        "wordtype": "n.",
        "definition": "The upward elevation of the crust of the earth, resulting from a geanticlinal."
    },
    "anticous": {
        "wordtype": "a.",
        "definition": "Facing toward the axis of the flower, as in the introrse anthers of the water lily."
    },
    "antidotary": {
        "wordtype": "a.",
        "definition": "Antidotal."
    },
    "antidote": {
        "wordtype": "v. t.",
        "definition": "To counteract or prevent the effects of, by giving or taking an antidote."
    },
    "antigalastic": {
        "wordtype": "a.",
        "definition": "Causing a diminution or a suppression of the secretion of milk."
    },
    "antihysteric": {
        "wordtype": "a.",
        "definition": "Counteracting hysteriadjective"
    },
    "antilogous": {
        "wordtype": "a.",
        "definition": "Of the contrary name or character; -- opposed to analogous."
    },
    "antimacassar": {
        "wordtype": "n.",
        "definition": "A cover for the back or arms of a chair or sofa, etc., to prevent them from being soiled by macassar or other oil from the hair."
    },
    "antimetabole": {
        "wordtype": "n.",
        "definition": "A figure in which the same words or ideas are repeated in transposed order."
    },
    "antimonarchical": {
        "wordtype": "",
        "definition": "Opposed to monarchial government."
    },
    "antimonarchist": {
        "wordtype": "n.",
        "definition": "An enemy to monarchial government."
    },
    "antinational": {
        "wordtype": "a.",
        "definition": "Antagonistic to one's country or nation, or to a national government."
    },
    "antinomianism": {
        "wordtype": "n.",
        "definition": "The tenets or practice of Antinomians."
    },
    "antiochian": {
        "wordtype": "a.",
        "definition": "Pertaining to Antiochus, a contemporary with Cicero, and the founder of a sect of philosophers."
    },
    "antiperistaltic": {
        "wordtype": "a.",
        "definition": "Opposed to, or checking motion; acting upward; -- applied to an inverted action of the intestinal tube."
    },
    "antiphlogistic": {
        "wordtype": "a.",
        "definition": "Opposed to the doctrine of phlogiston."
    },
    "antiplastic": {
        "wordtype": "a.",
        "definition": "Diminishing plasticity."
    },
    "antipodal": {
        "wordtype": "a.",
        "definition": "Pertaining to the antipodes; situated on the opposite side of the globe."
    },
    "antipode": {
        "wordtype": "n.",
        "definition": "One of the antipodes; anything exactly opposite."
    },
    "antipodes": {
        "wordtype": "n.",
        "definition": "Those who live on the side of the globe diametrically opposite."
    },
    "antipyresis": {
        "wordtype": "n.",
        "definition": "The condition or state of being free from fever."
    },
    "antipyrotic": {
        "wordtype": "a.",
        "definition": "Good against burns or pyrosis."
    },
    "antiquarianism": {
        "wordtype": "n.",
        "definition": "Character of an antiquary; study or love of antiquities."
    },
    "antisabbatarian": {
        "wordtype": "n.",
        "definition": "One of a sect which opposes the observance of the Christian Sabbath."
    },
    "antiscolic": {
        "wordtype": "a.",
        "definition": "Anthelmintic."
    },
    "antisepalous": {
        "wordtype": "a.",
        "definition": "Standing before a sepal, or calyx leaf."
    },
    "antiseptically": {
        "wordtype": "adv.",
        "definition": "By means of antiseptics."
    },
    "antisplenetic": {
        "wordtype": "a.",
        "definition": "Good as a remedy against disease of the spleen."
    },
    "antistrophic": {
        "wordtype": "a.",
        "definition": "Of or pertaining to an antistrophe."
    },
    "antistrumous": {
        "wordtype": "a.",
        "definition": "Good against scrofulous disorders."
    },
    "antitheist": {
        "wordtype": "n.",
        "definition": "A disbeliever in the existence of God."
    },
    "antithesis": {
        "wordtype": "n.",
        "definition": "The second of two clauses forming an antithesis."
    },
    "antithet": {
        "wordtype": "n.",
        "definition": "An antithetic or contrasted statement."
    },
    "antitrochanter": {
        "wordtype": "n.",
        "definition": "An articular surface on the ilium of birds against which the great trochanter of the femur plays."
    },
    "antivaccinationist": {
        "wordtype": "n.",
        "definition": "An antivaccinist."
    },
    "antler": {
        "wordtype": "n.",
        "definition": "The entire horn, or any branch of the horn, of a cervine animal, as of a stag."
    },
    "antlia": {
        "wordtype": "n.",
        "definition": "The spiral tubular proboscis of lepidopterous insects. See Lepidopteradjective"
    },
    "antonomasy": {
        "wordtype": "n.",
        "definition": "Antonomasiadjective"
    },
    "antonym": {
        "wordtype": "n.",
        "definition": "A word of opposite meaning; a counterterm; -- used as a correlative of synonym."
    },
    "antrovert": {
        "wordtype": "v. t.",
        "definition": "To bend forward."
    },
    "anura": {
        "wordtype": "n. pl.",
        "definition": "One of the orders of amphibians characterized by the absence of a tail, as the frogs and toads."
    },
    "anywhither": {
        "wordtype": "adv.",
        "definition": "To or towards any place."
    },
    "anywise": {
        "wordtype": "adv.",
        "definition": "In any wise or way; at all."
    },
    "aonian": {
        "wordtype": "a.",
        "definition": "Pertaining to Aonia, in B/otia, or to the Muses, who were supposed to dwell there."
    },
    "aoristic": {
        "wordtype": "a.",
        "definition": "Indefinite; pertaining to the aorist tense."
    },
    "apart": {
        "wordtype": "adv.",
        "definition": "Separately, in regard to space or company; in a state of separation as to place; aside."
    },
    "apathetical": {
        "wordtype": "a.",
        "definition": "Void of feeling; not susceptible of deep emotion; passionless; indifferent."
    },
    "apennine": {
        "wordtype": "a.",
        "definition": "Of, pertaining to, or designating, the Apennines, a chain of mountains extending through Italy."
    },
    "apertly": {
        "wordtype": "adv.",
        "definition": "Openly; clearly."
    },
    "aperture": {
        "wordtype": "n.",
        "definition": "The act of opening."
    },
    "apery": {
        "wordtype": "n.",
        "definition": "A place where apes are kept."
    },
    "apetalous": {
        "wordtype": "a.",
        "definition": "Having no petals, or flower leaves. [See Illust. under Anther]."
    },
    "aphanite": {
        "wordtype": "n.",
        "definition": "A very compact, dark-colored /ock, consisting of hornblende, or pyroxene, and feldspar, but neither of them in perceptible grains."
    },
    "aphanitic": {
        "wordtype": "a.",
        "definition": "Resembling aphanite; having a very fine-grained structure."
    },
    "apheliotropism": {
        "wordtype": "n.",
        "definition": "The habit of bending from the sunlight; -- said of certain plants."
    },
    "aphetic": {
        "wordtype": "a.",
        "definition": "Shortened by dropping a letter or a syllable from the beginning of a word; as, an aphetic word or form."
    },
    "aphid": {
        "wordtype": "n.",
        "definition": "One of the genus Aphis; an aphidian."
    },
    "aphonous": {
        "wordtype": "a.",
        "definition": "Without voice; voiceless; nonvocal."
    },
    "aphoristically": {
        "wordtype": "adv.",
        "definition": "In the form or manner of aphorisms; pithily."
    },
    "aphrodisian": {
        "wordtype": "a.",
        "definition": "Pertaining to Aphrodite or Venus. \"Aphrodisian dames\" [that is, courtesans]."
    },
    "aphrodite": {
        "wordtype": "n.",
        "definition": "The Greek goddess of love, corresponding to the Venus of the Romans."
    },
    "aphthong": {
        "wordtype": "n.",
        "definition": "A letter, or a combination of letters, employed in spelling a word, but in the pronunciation having no sound."
    },
    "apian": {
        "wordtype": "a.",
        "definition": "Belonging to bees."
    },
    "apiculated": {
        "wordtype": "a.",
        "definition": "Terminated abruptly by a small, distinct point, as a leaf."
    },
    "apishness": {
        "wordtype": "n.",
        "definition": "The quality of being apish; mimicry; foppery."
    },
    "aplanatic": {
        "wordtype": "a.",
        "definition": "Having two or more parts of different curvatures, so combined as to remove spherical aberration; -- said of a lens."
    },
    "apocalyptist": {
        "wordtype": "n.",
        "definition": "The writer of the Apocalypse."
    },
    "apocopate": {
        "wordtype": "v. t.",
        "definition": "To cut off or drop; as, to apocopate a word, or the last letter, syllable, or part of a word."
    },
    "apocrisiarius": {
        "wordtype": "n.",
        "definition": "A delegate or deputy; especially, the pope's nuncio or legate at Constantinople."
    },
    "apoda": {
        "wordtype": "n.",
        "definition": "A group of cirripeds, destitute of footlike organs."
    },
    "apodictically": {
        "wordtype": "adv.",
        "definition": "So as to be evident beyond contradiction."
    },
    "apodixis": {
        "wordtype": "n.",
        "definition": "Full demonstration."
    },
    "apodous": {
        "wordtype": "a.",
        "definition": "Apodal; apod."
    },
    "apogeotropic": {
        "wordtype": "a.",
        "definition": "Bending away from the ground; -- said of leaves, etc."
    },
    "apoise": {
        "wordtype": "adv.",
        "definition": "Balanced."
    },
    "apollinarian": {
        "wordtype": "a.",
        "definition": "In honor of Apollo; as, the Apollinarian games."
    },
    "apology": {
        "wordtype": "n.",
        "definition": "Anything provided as a substitute; a makeshift."
    },
    "apomecometer": {
        "wordtype": "n.",
        "definition": "An instrument for measuring the height of objects."
    },
    "apoplexy": {
        "wordtype": "n.",
        "definition": "Sudden diminution or loss of consciousness, sensation, and voluntary motion, usually caused by pressure on the brain."
    },
    "aporetical": {
        "wordtype": "a.",
        "definition": "Doubting; skeptical."
    },
    "aporose": {
        "wordtype": "a.",
        "definition": "Without pores."
    },
    "aport": {
        "wordtype": "adv.",
        "definition": "On or towards the port or left side; -- said of the helm."
    },
    "apostemation": {
        "wordtype": "n.",
        "definition": "The formation of an aposteme; the process of suppuration."
    },
    "apostolate": {
        "wordtype": "n.",
        "definition": "The dignity, office, or mission, of an apostle; apostleship."
    },
    "apostolic": {
        "wordtype": "n.",
        "definition": "A member of one of certain ascetic sects which at various times professed to imitate the practice of the apostles."
    },
    "apostrophic": {
        "wordtype": "a.",
        "definition": "Pertaining to an apostrophe, grammatical or rhetorical."
    },
    "apotactite": {
        "wordtype": "n.",
        "definition": "One of a sect of ancient Christians, who, in supposed imitation of the first believers, renounced all their possessions."
    },
    "apothecary": {
        "wordtype": "n.",
        "definition": "One who prepares and sells drugs or compounds for medicinal purposes."
    },
    "apothem": {
        "wordtype": "n.",
        "definition": "The perpendicular from the center to one of the sides of a regular polygon."
    },
    "apparaillyng": {
        "wordtype": "v.",
        "definition": "Preparation."
    },
    "apparency": {
        "wordtype": "n.",
        "definition": "Appearance."
    },
    "appealant": {
        "wordtype": "n.",
        "definition": "An appellant."
    },
    "appearance": {
        "wordtype": "n.",
        "definition": "The act of appearing or coming into sight; the act of becoming visible to the eye; as, his sudden appearance surprised me."
    },
    "appellation": {
        "wordtype": "n.",
        "definition": "The act of appealing; appeal."
    },
    "appellative": {
        "wordtype": "a.",
        "definition": "Pertaining to a common name; serving as a distinctive denomination; denominative; naming."
    },
    "appellatory": {
        "wordtype": "a.",
        "definition": "Containing an appeal."
    },
    "appendance": {
        "wordtype": "n.",
        "definition": "Something appendant."
    },
    "appendency": {
        "wordtype": "n.",
        "definition": "State of being appendant; appendance."
    },
    "appendical": {
        "wordtype": "a.",
        "definition": "Of or like an appendix."
    },
    "appendicate": {
        "wordtype": "v. t.",
        "definition": "To append."
    },
    "appendication": {
        "wordtype": "n.",
        "definition": "An appendage."
    },
    "appendicitis": {
        "wordtype": "n.",
        "definition": "Inflammation of the vermiform appendix."
    },
    "appertainment": {
        "wordtype": "n.",
        "definition": "That which appertains to a person; an appurtenance."
    },
    "appetibility": {
        "wordtype": "n.",
        "definition": "The quality of being desirable."
    },
    "appetite": {
        "wordtype": "n.",
        "definition": "The desire for some personal gratification, either of the body or of the mind."
    },
    "appetizer": {
        "wordtype": "n.",
        "definition": "Something which creates or whets an appetite."
    },
    "appetizing": {
        "wordtype": "a.",
        "definition": "Exciting appetite; as, appetizing food."
    },
    "applausive": {
        "wordtype": "a.",
        "definition": "Expressing applause; approbative."
    },
    "apple": {
        "wordtype": "n.",
        "definition": "The fleshy pome or fruit of a rosaceous tree (Pyrus malus) cultivated in numberless varieties in the temperate zones."
    },
    "appliable": {
        "wordtype": "a.",
        "definition": "Applicable; also, compliant."
    },
    "applot": {
        "wordtype": "v. t.",
        "definition": "To divide into plots or parts; to apportion."
    },
    "apporter": {
        "wordtype": "n.",
        "definition": "A bringer in; an importer."
    },
    "apprecation": {
        "wordtype": "n.",
        "definition": "Earnest prayer; devout wish."
    },
    "appreciate": {
        "wordtype": "v. t.",
        "definition": "To set a price or value on; to estimate justly; to value."
    },
    "appreciatingly": {
        "wordtype": "adv.",
        "definition": "In an appreciating manner; with appreciation."
    },
    "appreciativeness": {
        "wordtype": "n.",
        "definition": "The quality of being appreciative; quick recognition of excellence."
    },
    "apprehend": {
        "wordtype": "v. t.",
        "definition": "To take or seize; to take hold of."
    },
    "apprehender": {
        "wordtype": "n.",
        "definition": "One who apprehends."
    },
    "apprehensible": {
        "wordtype": "a.",
        "definition": "Capable of being apprehended or conceived."
    },
    "apprehensively": {
        "wordtype": "adv.",
        "definition": "In an apprehensive manner; with apprehension of danger."
    },
    "apprenticeage": {
        "wordtype": "n.",
        "definition": "Apprenticeship."
    },
    "apprizement": {
        "wordtype": "n.",
        "definition": "Appraisement."
    },
    "approach": {
        "wordtype": "v. i.",
        "definition": "To come or go near, in place or time; to draw nigh; to advance nearer."
    },
    "approachable": {
        "wordtype": "a.",
        "definition": "Capable of being approached; accessible; as, approachable virtue."
    },
    "approbativeness": {
        "wordtype": "n.",
        "definition": "The quality of being approbative."
    },
    "approbatory": {
        "wordtype": "a.",
        "definition": "Containing or expressing approbation; commendatory."
    },
    "appropriative": {
        "wordtype": "a.",
        "definition": "Appropriating; making, or tending to, appropriation; as, an appropriative act."
    },
    "approval": {
        "wordtype": "n.",
        "definition": "Approbation; sanction."
    },
    "approve": {
        "wordtype": "v. t.",
        "definition": "To show to be real or true; to prove."
    },
    "approximately": {
        "wordtype": "adv.",
        "definition": "With approximation; so as to approximate; nearly."
    },
    "approximative": {
        "wordtype": "a.",
        "definition": "Approaching; approximate."
    },
    "appulsively": {
        "wordtype": "adv.",
        "definition": "By appulsion."
    },
    "aprocta": {
        "wordtype": "n. pl.",
        "definition": "A group of Turbellaria in which there is no anal aperture."
    },
    "aproned": {
        "wordtype": "a.",
        "definition": "Wearing an apron."
    },
    "apterous": {
        "wordtype": "a.",
        "definition": "Destitute of wings; apteral; as, apterous insects."
    },
    "apteryges": {
        "wordtype": "n. pl.",
        "definition": "An order of birds, including the genus Apteryx."
    },
    "aptness": {
        "wordtype": "n.",
        "definition": "Fitness; suitableness; appropriateness; as, the aptness of things to their end."
    },
    "aptotic": {
        "wordtype": "a.",
        "definition": "Pertaining to, or characterized by, aptotes; uninflected; as, aptotic languages."
    },
    "apyrexy": {
        "wordtype": "n.",
        "definition": "The absence or intermission of fever."
    },
    "apyrexial": {
        "wordtype": "a.",
        "definition": "Relating to apyrexy."
    },
    "aquarian": {
        "wordtype": "a.",
        "definition": "Of or pertaining to an aquarium."
    },
    "aquiferous": {
        "wordtype": "a.",
        "definition": "Consisting or conveying water or a watery fluid; as, aquiferous vessels; the aquiferous system."
    },
    "aquilon": {
        "wordtype": "n.",
        "definition": "The north wind."
    },
    "arab": {
        "wordtype": "n.",
        "definition": "One of a swarthy race occupying Arabia, and numerous in Syria, Northern Africa, etc."
    },
    "arabism": {
        "wordtype": "n.",
        "definition": "An Arabic idiom peculiarly of language."
    },
    "araby": {
        "wordtype": "n.",
        "definition": "The country of Arabiadjective"
    },
    "aracari": {
        "wordtype": "n.",
        "definition": "A South American bird, of the genus Pleroglossius, allied to the toucans. There are several species."
    },
    "araceous": {
        "wordtype": "a.",
        "definition": "Of or pertaining to an order of plants, of which the genus Arum is the type."
    },
    "arachnidan": {
        "wordtype": "n.",
        "definition": "One of the Arachnidadjective"
    },
    "arachnidium": {
        "wordtype": "n.",
        "definition": "The glandular organ in which the material for the web of spiders is secreted."
    },
    "arachnoidal": {
        "wordtype": "a.",
        "definition": "Pertaining to the arachnoid membrane; arachnoid."
    },
    "araise": {
        "wordtype": "v. t.",
        "definition": "To raise."
    },
    "aramaism": {
        "wordtype": "n.",
        "definition": "An idiom of the Aramaic."
    },
    "araneose": {
        "wordtype": "a.",
        "definition": "Of the aspect of a spider's web; arachnoid."
    },
    "arapaima": {
        "wordtype": "n.",
        "definition": "A large fresh-water food fish of South Americadjective"
    },
    "arbitrariness": {
        "wordtype": "n.",
        "definition": "The quality of being arbitrary; despoticalness; tyranny."
    },
    "arbitrarious": {
        "wordtype": "a.",
        "definition": "Arbitrary; despotic."
    },
    "arbitrator": {
        "wordtype": "n.",
        "definition": "A person, or one of two or more persons, chosen by parties who have a controversy, to determine their differences. See Arbitration."
    },
    "arbor": {
        "wordtype": "n.",
        "definition": "A kind of latticework formed of, or covered with, vines, branches of trees, or other plants, for shade; a bower."
    },
    "arboreal": {
        "wordtype": "a.",
        "definition": "Of or pertaining to a tree, or to trees; of nature of trees."
    },
    "arbored": {
        "wordtype": "a.",
        "definition": "Furnished with an arbor; lined with trees."
    },
    "arboriculturist": {
        "wordtype": "n.",
        "definition": "One who cultivates trees."
    },
    "arborization": {
        "wordtype": "n.",
        "definition": "The appearance or figure of a tree or plant, as in minerals or fossils; a dendrite."
    },
    "arbustive": {
        "wordtype": "a.",
        "definition": "Containing copses of trees or shrubs; covered with shrubs."
    },
    "arch": {
        "wordtype": "n.",
        "definition": "Any part of a curved line."
    },
    "archaeography": {
        "wordtype": "n.",
        "definition": "A description of, or a treatise on, antiquity or antiquities."
    },
    "archaeologian": {
        "wordtype": "n.",
        "definition": "An archaeologist."
    },
    "archaeologist": {
        "wordtype": "n.",
        "definition": "One versed in archaeology; an antiquary."
    },
    "archaistic": {
        "wordtype": "a.",
        "definition": "Like, or imitative of, anything archaic; pertaining to an archaism."
    },
    "archbutler": {
        "wordtype": "n.",
        "definition": "A chief butler; -- an officer of the German empire."
    },
    "archdiocese": {
        "wordtype": "n.",
        "definition": "The diocese of an archbishop."
    },
    "archencephala": {
        "wordtype": "n. pl.",
        "definition": "The division that includes man alone."
    },
    "archeress": {
        "wordtype": "n.",
        "definition": "A female archer."
    },
    "archetypally": {
        "wordtype": "adv.",
        "definition": "With reference to the archetype; originally. \"Parts archetypally distinct.\""
    },
    "archetypical": {
        "wordtype": "a.",
        "definition": "Relating to an archetype; archetypal."
    },
    "archiannelida": {
        "wordtype": "n. pl.",
        "definition": "A group of Annelida remarkable for having no external segments or distinct ventral nerve ganglions."
    },
    "archical": {
        "wordtype": "pref.",
        "definition": "Chief; primary; primordial."
    },
    "archiepiscopal": {
        "wordtype": "a.",
        "definition": "Of or pertaining to an archbishop; as, Canterbury is an archiepiscopal see."
    },
    "archierey": {
        "wordtype": "n.",
        "definition": "The higher order of clergy in Russia, including metropolitans, archbishops, and bishops."
    },
    "archil": {
        "wordtype": "n.",
        "definition": "The plant from which the dye is obtained."
    },
    "architectress": {
        "wordtype": "n.",
        "definition": "A female architect."
    },
    "architeuthis": {
        "wordtype": "n.",
        "definition": "A genus of gigantic cephalopods, allied to the squids, found esp. in the North Atlantic and about New Zealand."
    },
    "architraved": {
        "wordtype": "a.",
        "definition": "Furnished with an architrave."
    },
    "archway": {
        "wordtype": "n.",
        "definition": "A way or passage under an arch."
    },
    "arcograph": {
        "wordtype": "n.",
        "definition": "An instrument for drawing a circular arc without the use of a central point; a cyclograph."
    },
    "ardassine": {
        "wordtype": "n.",
        "definition": "A very fine sort of Persian silk."
    },
    "arduously": {
        "wordtype": "adv.",
        "definition": "In an arduous manner; with difficulty or laboriousness."
    },
    "are": {
        "wordtype": "n.",
        "definition": "The unit of superficial measure, being a square of which each side is ten meters in length; 100 square meters, or about 119.6 square yards."
    },
    "area": {
        "wordtype": "n.",
        "definition": "Any plane surface, as of the floor of a room or church, or of the ground within an inclosure; an open space in a building."
    },
    "arear": {
        "wordtype": "v. t. & i.",
        "definition": "To raise; to set up; to stir up."
    },
    "arenation": {
        "wordtype": "n.",
        "definition": "A sand bath; application of hot sand to the body."
    },
    "arendator": {
        "wordtype": "n.",
        "definition": "In some provinces of Russia, one who farms the rents or revenues."
    },
    "arenga": {
        "wordtype": "n.",
        "definition": "A palm tree (Saguerus saccharifer) which furnishes sago, wine, and fibers for ropes; the gomuti palm."
    },
    "arenulous": {
        "wordtype": "a.",
        "definition": "Full of fine sand; like sand."
    },
    "areolated": {
        "wordtype": "a.",
        "definition": "Divided into small spaces or areolations, as the wings of insects, the leaves of plants, or the receptacle of compound flowers."
    },
    "areometry": {
        "wordtype": "n.",
        "definition": "The art or process of measuring the specific gravity of fluids."
    },
    "aretaics": {
        "wordtype": "n.",
        "definition": "The ethical theory which excludes all relations between virtue and happiness; the science of virtue; -- contrasted with eudemonics."
    },
    "aretology": {
        "wordtype": "n.",
        "definition": "That part of moral philosophy which treats of virtue, its nature, and the means of attaining to it."
    },
    "argal": {
        "wordtype": "adv.",
        "definition": "A ludicrous corruption of the Latin word ergo, therefore."
    },
    "argentite": {
        "wordtype": "n.",
        "definition": "Sulphide of silver; -- also called vitreous silver, or silver glance. It has a metallic luster, a lead-gray color, and is sectile like lead."
    },
    "argumentize": {
        "wordtype": "v. i.",
        "definition": "To argue or discuss."
    },
    "argus": {
        "wordtype": "n.",
        "definition": "One very vigilant; a guardian always watchful."
    },
    "arguteness": {
        "wordtype": "n.",
        "definition": "Acuteness."
    },
    "arid": {
        "wordtype": "a.",
        "definition": "Exhausted of moisture; parched with heat; dry; barren."
    },
    "aridity": {
        "wordtype": "n.",
        "definition": "The state or quality of being arid or without moisture; dryness."
    },
    "arietation": {
        "wordtype": "n.",
        "definition": "The act of butting like a ram; act of using a battering-ram."
    },
    "ariette": {
        "wordtype": "n.",
        "definition": "A short aria, or air."
    },
    "arist": {
        "wordtype": "",
        "definition": "3d sing. pres. of Arise, for ariseth."
    },
    "aristarchian": {
        "wordtype": "a.",
        "definition": "Severely critical."
    },
    "aristocracy": {
        "wordtype": "n.",
        "definition": "Government by the best citizens."
    },
    "aristophanic": {
        "wordtype": "a.",
        "definition": "Of or pertaining to Aristophanes, the Athenian comic poet."
    },
    "aristotelian": {
        "wordtype": "a.",
        "definition": "Of or pertaining to Aristotle, the famous Greek philosopher (384-322 b. c.)."
    },
    "arithmetic": {
        "wordtype": "n.",
        "definition": "The science of numbers; the art of computation by figures."
    },
    "armada": {
        "wordtype": "v. t.",
        "definition": "A fleet of armed ships; a squadron. Specifically, the Spanish fleet which was sent to assail England, adjective d. 1558."
    },
    "armful": {
        "wordtype": "n.",
        "definition": "As much as the arm can hold."
    },
    "armil": {
        "wordtype": "n.",
        "definition": "A bracelet."
    },
    "arminianism": {
        "wordtype": "n.",
        "definition": "The religious doctrines or tenets of the Arminians."
    },
    "armorial": {
        "wordtype": "a.",
        "definition": "Belonging to armor, or to the heraldic arms or escutcheon of a family."
    },
    "armozine": {
        "wordtype": "n.",
        "definition": "A thick plain silk, generally black, and used for clerical."
    },
    "army": {
        "wordtype": "n.",
        "definition": "A body of persons organized for the advancement of a cause; as, the Blue Ribbon Army."
    },
    "aromatization": {
        "wordtype": "n.",
        "definition": "The act of impregnating or secting with aromadjective"
    },
    "arquebusade": {
        "wordtype": "n.",
        "definition": "The shot of an arquebus."
    },
    "arraign": {
        "wordtype": "v. t.",
        "definition": "To call or set as a prisoner at the bar of a court to answer to the matter charged in an indictment or complaint."
    },
    "arraigner": {
        "wordtype": "n.",
        "definition": "One who arraigns."
    },
    "arrange": {
        "wordtype": "v. t.",
        "definition": "To put in proper order; to dispose (persons, or parts) in the manner intended, or best suited for the purpose; as, troops arranged for battle."
    },
    "arrangement": {
        "wordtype": "n.",
        "definition": "The act of arranging or putting in an orderly condition; the state of being arranged or put in order; disposition in suitable form."
    },
    "arrear": {
        "wordtype": "adv.",
        "definition": "To or in the rear; behind; backwards."
    },
    "arrected": {
        "wordtype": "a.",
        "definition": "Lifted up; raised; erect."
    },
    "arreptitious": {
        "wordtype": "a.",
        "definition": "Snatched away; seized or possessed, as a demoniac; raving; mad; crack-brained."
    },
    "arret": {
        "wordtype": "n.",
        "definition": "A judgment, decision, or decree of a court or high tribunal; also, a decree of a sovereign."
    },
    "arrival": {
        "wordtype": "n.",
        "definition": "The act of arriving, or coming; the act of reaching a place from a distance, whether by water (as in its original sense) or by land."
    },
    "arrondissement": {
        "wordtype": "n.",
        "definition": "A subdivision of a department."
    },
    "arse": {
        "wordtype": "n.",
        "definition": "The buttocks, or hind part of an animal; the posteriors; the fundament; the bottom."
    },
    "arsenious": {
        "wordtype": "a.",
        "definition": "Pertaining to, consisting of, or containing, arsenic; as, arsenious powder or glass."
    },
    "arsesmart": {
        "wordtype": "n.",
        "definition": "Smartweed; water pepper."
    },
    "arsis": {
        "wordtype": "n.",
        "definition": "That elevation of voice now called metrical accentuation, or the rhythmic accent."
    },
    "arsmetrike": {
        "wordtype": "n.",
        "definition": "Arithmetic."
    },
    "arterial": {
        "wordtype": "a.",
        "definition": "Of or pertaining to an artery, or the arteries; as, arterial action; the arterial system."
    },
    "arthen": {
        "wordtype": "a.",
        "definition": "Same as"
    },
    "arthrodic": {
        "wordtype": "a.",
        "definition": "Of or pertaining to arthrodiadjective"
    },
    "arthrogastra": {
        "wordtype": "n. pl.",
        "definition": "A division of the Arachnida, having the abdomen annulated, including the scorpions, harvestmen, etc.; pedipalpi."
    },
    "arthrology": {
        "wordtype": "n.",
        "definition": "That part of anatomy which treats of joints."
    },
    "arthropod": {
        "wordtype": "n.",
        "definition": "One of the Arthropodadjective"
    },
    "article": {
        "wordtype": "n.",
        "definition": "A literary composition, forming an independent portion of a magazine, newspaper, or cyclopediadjective"
    },
    "articulata": {
        "wordtype": "v.",
        "definition": "One of the four subkingdoms in the classification of Cuvier. It has been much modified by later writers."
    },
    "articulative": {
        "wordtype": "a.",
        "definition": "Of or pertaining to articulation."
    },
    "artificious": {
        "wordtype": "a.",
        "definition": "Artificial."
    },
    "artisan": {
        "wordtype": "n.",
        "definition": "One who professes and practices some liberal art; an artist."
    },
    "artlessness": {
        "wordtype": "n.",
        "definition": "The quality of being artless, or void of art or guile; simplicity; sincerity."
    },
    "arval": {
        "wordtype": "n.",
        "definition": "A funeral feast."
    },
    "ascendible": {
        "wordtype": "a.",
        "definition": "Capable of being ascended; climbable."
    },
    "asclepiadaceous": {
        "wordtype": "a.",
        "definition": "Of, pertaining to, or resembling, plants of the Milkweed family."
    },
    "ashine": {
        "wordtype": "a.",
        "definition": "Shining; radiant."
    },
    "ashlering": {
        "wordtype": "n.",
        "definition": "The act of bedding ashlar in mortar."
    },
    "assinego": {
        "wordtype": "n.",
        "definition": "A stupid fellow."
    },
    "asinine": {
        "wordtype": "a.",
        "definition": "Of or belonging to, or having the qualities of, the ass, as stupidity and obstinacy."
    },
    "askant": {
        "wordtype": "adv.",
        "definition": "Sideways; obliquely; with a side glance; with disdain, envy, or suspicion."
    },
    "askew": {
        "wordtype": "adv. & a.",
        "definition": "Awry; askance; asquint; oblique or obliquely; -- sometimes indicating scorn, or contempt, or entry."
    },
    "aslant": {
        "wordtype": "adv. & a.",
        "definition": "Toward one side; in a slanting direction; obliquely."
    },
    "asonant": {
        "wordtype": "a.",
        "definition": "Not sounding or sounded."
    },
    "asparagus": {
        "wordtype": "n.",
        "definition": "The young and tender shoots of A. officinalis, which form a valuable and well-known article of food."
    },
    "aspected": {
        "wordtype": "a.",
        "definition": "Having an aspect."
    },
    "aspen": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the aspen, or resembling it; made of aspen wood."
    },
    "asperation": {
        "wordtype": "n.",
        "definition": "The act of asperating; a making or becoming rough."
    },
    "asperity": {
        "wordtype": "n.",
        "definition": "Roughness of surface; unevenness; -- opposed to smoothness."
    },
    "aspersion": {
        "wordtype": "n.",
        "definition": "A sprinkling, as with water or dust, in a literal sense."
    },
    "asphyxiation": {
        "wordtype": "n.",
        "definition": "The act of causing asphyxia; a state of asphyxiadjective"
    },
    "aspic": {
        "wordtype": "n.",
        "definition": "The venomous asp."
    },
    "aspirator": {
        "wordtype": "n.",
        "definition": "An apparatus for passing air or gases through or over certain liquids or solids, or for exhausting a closed vessel, by means of suction."
    },
    "assail": {
        "wordtype": "v. t.",
        "definition": "To encounter or meet purposely with the view of mastering, as an obstacle, difficulty, or the like."
    },
    "assailable": {
        "wordtype": "a.",
        "definition": "Capable of being assailed."
    },
    "assastion": {
        "wordtype": "n.",
        "definition": "Roasting."
    },
    "assault": {
        "wordtype": "n.",
        "definition": "To make an assault upon, as by a sudden rush of armed men; to attack with unlawful or insulting physical violence or menaces."
    },
    "assaulter": {
        "wordtype": "n.",
        "definition": "One who assaults, or violently attacks; an assailant."
    },
    "assay": {
        "wordtype": "n.",
        "definition": "Trial; attempt; essay."
    },
    "assembler": {
        "wordtype": "n.",
        "definition": "One who assembles a number of individuals; also, one of a number assembled."
    },
    "assentation": {
        "wordtype": "n.",
        "definition": "Insincere, flattering, or obsequious assent; hypocritical or pretended concurrence."
    },
    "assentatory": {
        "wordtype": "a.",
        "definition": "Flattering; obsequious."
    },
    "assenter": {
        "wordtype": "n.",
        "definition": "One who assents."
    },
    "assentient": {
        "wordtype": "a.",
        "definition": "Assenting."
    },
    "assertorial": {
        "wordtype": "a.",
        "definition": "Asserting that a thing is; -- opposed to problematical and apodeictical."
    },
    "asset": {
        "wordtype": "n.",
        "definition": "Any article or separable part of one's assets."
    },
    "assets": {
        "wordtype": "n. pl.",
        "definition": "Effects of an insolvent debtor or bankrupt, applicable to the payment of debts."
    },
    "asseverate": {
        "wordtype": "v. t.",
        "definition": "To affirm or aver positively, or with solemnity."
    },
    "asseverative": {
        "wordtype": "a.",
        "definition": "Characterized by asseveration; asserting positively."
    },
    "assibilation": {
        "wordtype": "n.",
        "definition": "Change of a non-sibilant letter to a sibilant, as of -tion to -shun, duke to ditch."
    },
    "assident": {
        "wordtype": "a.",
        "definition": "Usually attending a disease, but not always; as, assident signs, or symptoms."
    },
    "assiduity": {
        "wordtype": "n.",
        "definition": "Constant or close application or attention, particularly to some business or enterprise; diligence."
    },
    "assignable": {
        "wordtype": "a.",
        "definition": "Capable of being assigned, allotted, specified, or designated; as, an assignable note or bill; an assignable reason; an assignable quantity."
    },
    "assignation": {
        "wordtype": "n.",
        "definition": "The act of assigning or allotting; apportionment."
    },
    "assimilable": {
        "wordtype": "a.",
        "definition": "That may be assimilated; that may be likened, or appropriated and incorporated."
    },
    "assimilative": {
        "wordtype": "a.",
        "definition": "Tending to, or characterized by, assimilation; that assimilates or causes assimilation; as, an assimilative process or substance."
    },
    "assist": {
        "wordtype": "v. t.",
        "definition": "To give support to in some undertaking or effort, or in time of distress; to help; to aid; to succor."
    },
    "assistant": {
        "wordtype": "a.",
        "definition": "Helping; lending aid or support; auxiliary."
    },
    "assistor": {
        "wordtype": "n.",
        "definition": "A assister."
    },
    "assizor": {
        "wordtype": "n.",
        "definition": "A juror."
    },
    "assober": {
        "wordtype": "v. t.",
        "definition": "To make or keep sober."
    },
    "association": {
        "wordtype": "n.",
        "definition": "The act of associating, or state of being associated; union; connection, whether of persons of things."
    },
    "associational": {
        "wordtype": "a.",
        "definition": "Of or pertaining to association, or to an association."
    },
    "assoilyie": {
        "wordtype": "v. t.",
        "definition": "To absolve; to acquit by sentence of court."
    },
    "assot": {
        "wordtype": "v. t.",
        "definition": "To besot; to befool; to beguile; to infatuate."
    },
    "assuage": {
        "wordtype": "v. i.",
        "definition": "To abate or subside."
    },
    "assubjugate": {
        "wordtype": "v. t.",
        "definition": "To bring into subjection."
    },
    "assume": {
        "wordtype": "v. t.",
        "definition": "To take to or upon one's self; to take formally and demonstratively; sometimes, to appropriate or take unjustly."
    },
    "assument": {
        "wordtype": "n.",
        "definition": "A patch; an addition; a piece put on."
    },
    "assuming": {
        "wordtype": "a.",
        "definition": "Pretentious; taking much upon one's self; presumptuous."
    },
    "assyrian": {
        "wordtype": "a.",
        "definition": "Of or pertaining to Assyria, or to its inhabitants."
    },
    "asterolepis": {
        "wordtype": "n.",
        "definition": "A genus of fishes, some of which were eighteen or twenty feet long, found in a fossil state in the Old Red Sandstone."
    },
    "astigmatic": {
        "wordtype": "a.",
        "definition": "Affected with, or pertaining to, astigmatism; as, astigmatic eyes; also, remedying astigmatism; as, astigmatic lenses."
    },
    "astony": {
        "wordtype": "v. t.",
        "definition": "To stun; to bewilder; to astonish; to dismay."
    },
    "astoop": {
        "wordtype": "adv.",
        "definition": "In a stooping or inclined position."
    },
    "astrakhan": {
        "wordtype": "a.",
        "definition": "Of or pertaining to Astrakhan in Russia or its products; made of an Astrakhan skin."
    },
    "astrictive": {
        "wordtype": "a.",
        "definition": "Binding; astringent."
    },
    "astringer": {
        "wordtype": "n.",
        "definition": "A falconer who keeps a goshawk."
    },
    "astrolabe": {
        "wordtype": "n.",
        "definition": "An instrument for observing or showing the positions of the stars. It is now disused."
    },
    "astrolithology": {
        "wordtype": "n.",
        "definition": "The science of aerolites."
    },
    "astrologer": {
        "wordtype": "n.",
        "definition": "One who studies the stars; an astronomer."
    },
    "astrological": {
        "wordtype": "a.",
        "definition": "Of or pertaining to astrology; professing or practicing astrology."
    },
    "astronomical": {
        "wordtype": "a.",
        "definition": "Of or pertaining to astronomy; in accordance with the methods or principles of astronomy."
    },
    "astroscopy": {
        "wordtype": "n.",
        "definition": "Observation of the stars."
    },
    "astrotheology": {
        "wordtype": "n.",
        "definition": "Theology founded on observation or knowledge of the celestial bodies."
    },
    "astylar": {
        "wordtype": "a.",
        "definition": "Without columns or pilasters."
    },
    "aswing": {
        "wordtype": "adv.",
        "definition": "In a state of swinging."
    },
    "asystole": {
        "wordtype": "n.",
        "definition": "A weakening or cessation of the contractile power of the heart."
    },
    "atake": {
        "wordtype": "v. t.",
        "definition": "To overtake."
    },
    "ataraxy": {
        "wordtype": "n.",
        "definition": "Perfect peace of mind, or calmness."
    },
    "atavism": {
        "wordtype": "n.",
        "definition": "The recurrence of any peculiarity or disease of an ancestor in a subsequent generation, after an intermission for a generation or two."
    },
    "ataxy": {
        "wordtype": "n.",
        "definition": "Disorder; irregularity."
    },
    "ataxic": {
        "wordtype": "a.",
        "definition": "Characterized by ataxy, that is, (a) by great irregularity of functions or symptoms, or (b) by a want of coordinating power in movements."
    },
    "athalamous": {
        "wordtype": "a.",
        "definition": "Not furnished with shields or beds for the spores, as the thallus of certain lichens."
    },
    "atheism": {
        "wordtype": "n.",
        "definition": "The disbelief or denial of the existence of a God, or supreme intelligent Being."
    },
    "athenian": {
        "wordtype": "a.",
        "definition": "Of or pertaining to Athens, the metropolis of Greece."
    },
    "atheological": {
        "wordtype": "a.",
        "definition": "Opposed to theology; atheistic."
    },
    "atheology": {
        "wordtype": "n.",
        "definition": "Antagonism to theology."
    },
    "atheous": {
        "wordtype": "a.",
        "definition": "Atheistic; impious."
    },
    "atlantic": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the isle of Atlantis."
    },
    "atmology": {
        "wordtype": "n.",
        "definition": "That branch of science which treats of the laws and phenomena of aqueous vapor."
    },
    "atmolysis": {
        "wordtype": "n.",
        "definition": "The act or process of separating mingled gases of unequal diffusibility by transmission through porous substances."
    },
    "atmolyzer": {
        "wordtype": "n.",
        "definition": "An apparatus for effecting atmolysis."
    },
    "atomicism": {
        "wordtype": "n.",
        "definition": "Atomism."
    },
    "atonement": {
        "wordtype": "n.",
        "definition": "Reconciliation; restoration of friendly relations; agreement; concord."
    },
    "atrip": {
        "wordtype": "adv.",
        "definition": "Just hove clear of the ground; -- said of the anchor."
    },
    "atrocha": {
        "wordtype": "n.",
        "definition": "A kind of chaetopod larva in which no circles of cilia are developed."
    },
    "atropism": {
        "wordtype": "n.",
        "definition": "A condition of the system produced by long use of belladonnadjective"
    },
    "atrypa": {
        "wordtype": "n.",
        "definition": "A extinct genus of Branchiopoda, very common in Silurian limestones."
    },
    "attachable": {
        "wordtype": "a.",
        "definition": "Capable of being attached; esp., liable to be taken by writ or precept."
    },
    "attagen": {
        "wordtype": "n.",
        "definition": "A species of sand grouse (Syrrghaptes Pallasii) found in Asia and rarely in southern Europe."
    },
    "attask": {
        "wordtype": "v. t.",
        "definition": "To take to task; to blame."
    },
    "attemper": {
        "wordtype": "v. t.",
        "definition": "To reduce, modify, or moderate, by mixture; to temper; to regulate, as temperature."
    },
    "attemperate": {
        "wordtype": "a.",
        "definition": "Tempered; proportioned; properly adapted."
    },
    "attendance": {
        "wordtype": "v. t.",
        "definition": "Attention; regard; careful application."
    },
    "attenuate": {
        "wordtype": "v. t.",
        "definition": "To lessen the amount, force, or value of; to make less complex; to weaken."
    },
    "attestor": {
        "wordtype": "n.",
        "definition": "One who attests."
    },
    "attic": {
        "wordtype": "a.",
        "definition": "A low story above the main order or orders of a facade, in the classical styles; -- a term introduced in the 17th century. Hence:"
    },
    "attractable": {
        "wordtype": "a.",
        "definition": "Capable of being attracted; subject to attraction."
    },
    "attracter": {
        "wordtype": "n.",
        "definition": "One who, or that which, attracts."
    },
    "attraction": {
        "wordtype": "n.",
        "definition": "The act or property of attracting; the effect of the power or operation of attraction."
    },
    "attribution": {
        "wordtype": "n.",
        "definition": "The act of attributing or ascribing, as a quality, character, or function, to a thing or person, an effect to a cause."
    },
    "attributive": {
        "wordtype": "a.",
        "definition": "Attributing; pertaining to, expressing, or assigning an attribute; of the nature of an attribute."
    },
    "atwain": {
        "wordtype": "adv.",
        "definition": "In twain; asunder."
    },
    "aubaine": {
        "wordtype": "n.",
        "definition": "Succession to the goods of a stranger not naturalized."
    },
    "auction": {
        "wordtype": "n.",
        "definition": "A public sale of property to the highest bidder, esp. by a person licensed and authorized for the purpose; a vendue."
    },
    "audacious": {
        "wordtype": "a.",
        "definition": "Daring; spirited; adventurous."
    },
    "auditory": {
        "wordtype": "n.",
        "definition": "An assembly of hearers; an audience."
    },
    "auf": {
        "wordtype": "n.",
        "definition": "A changeling or elf child, -- that is, one left by fairies; a deformed or foolish child; a simpleton; an oaf."
    },
    "augean": {
        "wordtype": "a.",
        "definition": "Hence: Exceedingly filthy or corrupt."
    },
    "auget": {
        "wordtype": "n.",
        "definition": "A priming tube connecting the charge chamber with the gallery, or place where the slow match is applied."
    },
    "augmenter": {
        "wordtype": "n.",
        "definition": "One who, or that which, augments or increases anything."
    },
    "auguration": {
        "wordtype": "n.",
        "definition": "The practice of augury."
    },
    "augurist": {
        "wordtype": "n.",
        "definition": "An augur."
    },
    "auntter": {
        "wordtype": "n.",
        "definition": "Adventure; hap."
    },
    "austereness": {
        "wordtype": "n.",
        "definition": "Harshness or astringent sourness to the taste; acerbity."
    },
    "austral": {
        "wordtype": "a.",
        "definition": "Southern; lying or being in the south; as, austral land; austral ocean."
    },
    "australize": {
        "wordtype": "v. i.",
        "definition": "To tend toward the south pole, as a magnet."
    },
    "austrine": {
        "wordtype": "n.",
        "definition": "Southern; southerly; austral."
    },
    "authentic": {
        "wordtype": "n.",
        "definition": "Authoritative."
    },
    "authentical": {
        "wordtype": "a.",
        "definition": "Authentic."
    },
    "authenticly": {
        "wordtype": "adv.",
        "definition": "Authentically."
    },
    "authoress": {
        "wordtype": "n.",
        "definition": "A female author."
    },
    "authorize": {
        "wordtype": "v. t.",
        "definition": "To clothe with authority, warrant, or legal power; to give a right to act; to empower; as, to authorize commissioners to settle a boundary."
    },
    "autochronograph": {
        "wordtype": "n.",
        "definition": "An instrument for the instantaneous self-recording or printing of time."
    },
    "autochthony": {
        "wordtype": "n.",
        "definition": "An aboriginal or autochthonous condition."
    },
    "autocrat": {
        "wordtype": "a.",
        "definition": "One who rules with undisputed sway in any company or relation; a despot."
    },
    "autocratorical": {
        "wordtype": "a.",
        "definition": "Pertaining to an autocrator; absolute."
    },
    "autogeneal": {
        "wordtype": "a.",
        "definition": "Self-produced; autogenous."
    },
    "autogenous": {
        "wordtype": "a.",
        "definition": "Self-generated; produced independently."
    },
    "autography": {
        "wordtype": "n.",
        "definition": "The science of autographs; a person's own handwriting; an autograph."
    },
    "automatous": {
        "wordtype": "a.",
        "definition": "Automatic."
    },
    "automorphic": {
        "wordtype": "a.",
        "definition": "Patterned after one's self."
    },
    "autophoby": {
        "wordtype": "n.",
        "definition": "Fear of one's self; fear of being egotistical."
    },
    "autopsy": {
        "wordtype": "a.",
        "definition": "Personal observation or examination; seeing with one's own eyes; ocular view."
    },
    "autotype": {
        "wordtype": "n.",
        "definition": "A facsimile."
    },
    "auxiliarly": {
        "wordtype": "adv.",
        "definition": "By way of help."
    },
    "available": {
        "wordtype": "a.",
        "definition": "Having sufficient power, force, or efficacy, for the object; effectual; valid; as, an available pleadjective"
    },
    "availment": {
        "wordtype": "n.",
        "definition": "Profit; advantage."
    },
    "ave": {
        "wordtype": "n.",
        "definition": "An ave Mariadjective"
    },
    "avel": {
        "wordtype": "v. t.",
        "definition": "To pull away."
    },
    "avellane": {
        "wordtype": "a.",
        "definition": "In the form of four unhusked filberts; as, an avellane cross."
    },
    "avengeress": {
        "wordtype": "n.",
        "definition": "A female avenger."
    },
    "avens": {
        "wordtype": "n.",
        "definition": "A plant of the genus Geum, esp. Geum urbanum, or herb bennet."
    },
    "aventurine": {
        "wordtype": "n.",
        "definition": "A variety of translucent quartz, spangled throughout with scales of yellow micadjective"
    },
    "averruncate": {
        "wordtype": "v. t.",
        "definition": "To avert; to ward off."
    },
    "avertiment": {
        "wordtype": "n.",
        "definition": "Advertisement."
    },
    "aves": {
        "wordtype": "n. pl.",
        "definition": "The class of Vertebrata that includes the birds."
    },
    "aviator": {
        "wordtype": "n.",
        "definition": "An experimenter in aviation."
    },
    "avidiously": {
        "wordtype": "adv.",
        "definition": "Eagerly; greedily."
    },
    "avidity": {
        "wordtype": "n.",
        "definition": "Greediness; strong appetite; eagerness; intenseness of desire; as, to eat with avidity."
    },
    "avie": {
        "wordtype": "adv.",
        "definition": "Emulously."
    },
    "avile": {
        "wordtype": "v. t.",
        "definition": "To abase or debase; to vilify; to depreciate."
    },
    "avis": {
        "wordtype": "n.",
        "definition": "Advice; opinion; deliberation."
    },
    "avise": {
        "wordtype": "v. t.",
        "definition": "To look at; to view; to think of."
    },
    "aviseful": {
        "wordtype": "a.",
        "definition": "Watchful; circumspect."
    },
    "avocate": {
        "wordtype": "a.",
        "definition": "To call off or away; to withdraw; to transfer to another tribunal."
    },
    "avocation": {
        "wordtype": "n.",
        "definition": "A calling away; a diversion."
    },
    "avoid": {
        "wordtype": "a.",
        "definition": "To empty."
    },
    "avoidable": {
        "wordtype": "a.",
        "definition": "Capable of being vacated; liable to be annulled or made invalid; voidable."
    },
    "avoucher": {
        "wordtype": "n.",
        "definition": "One who avouches."
    },
    "avouchment": {
        "wordtype": "n.",
        "definition": "The act of avouching; positive declaration."
    },
    "avoutrie": {
        "wordtype": "n.",
        "definition": "Adultery."
    },
    "avow": {
        "wordtype": "v. t.",
        "definition": "To declare openly, as something believed to be right; to own or acknowledge frankly; as, a man avows his principles or his crimes."
    },
    "avoyer": {
        "wordtype": "n.",
        "definition": "A chief magistrate of a free imperial city or canton of Switzerland."
    },
    "avulse": {
        "wordtype": "v. t.",
        "definition": "To pluck or pull off."
    },
    "await": {
        "wordtype": "v. t.",
        "definition": "To watch for; to look out for."
    },
    "awake": {
        "wordtype": "v. t.",
        "definition": "To rouse from sleep; to wake; to awaken."
    },
    "awakener": {
        "wordtype": "n.",
        "definition": "One who, or that which, awakens."
    },
    "awakening": {
        "wordtype": "n.",
        "definition": "The act of awaking, or ceasing to sleep. Specifically: A revival of religion, or more general attention to religious matters than usual."
    },
    "awe": {
        "wordtype": "n.",
        "definition": "Dread; great fear mingled with respect."
    },
    "aweather": {
        "wordtype": "adv.",
        "definition": "On the weather side, or toward the wind; in the direction from which the wind blows; -- opposed to alee; as, helm aweather!"
    },
    "awesome": {
        "wordtype": "a.",
        "definition": "Causing awe; appalling; awful; as, an awesome sight."
    },
    "awfulness": {
        "wordtype": "n.",
        "definition": "The quality of striking with awe, or with reverence; dreadfulness; solemnity; as, the awfulness of this sacred place."
    },
    "awk": {
        "wordtype": "a.",
        "definition": "Odd; out of order; perverse."
    },
    "axially": {
        "wordtype": "adv.",
        "definition": "In relation to, or in a line with, an axis; in the axial (magnetic) line."
    },
    "axile": {
        "wordtype": "a.",
        "definition": "Situated in the axis of anything; as an embryo which lies in the axis of a seed."
    },
    "axiomatical": {
        "wordtype": "a.",
        "definition": "Of or pertaining to an axiom; having the nature of an axiom; self-evident; characterized by axioms."
    },
    "axman": {
        "wordtype": "n.",
        "definition": "One who wields an ax."
    },
    "axolotl": {
        "wordtype": "n.",
        "definition": "An amphibian of the salamander tribe found in the elevated lakes of Mexico; the siredon."
    },
    "ayeins": {
        "wordtype": "adv. & prep.",
        "definition": "Again; back against."
    },
    "ayond": {
        "wordtype": "prep. & adv.",
        "definition": "Beyond."
    },
    "azarole": {
        "wordtype": "n.",
        "definition": "The Neapolitan medlar (Crataegus azarolus), a shrub of southern Europe; also, its fruit."
    },
    "azimuth": {
        "wordtype": "n.",
        "definition": "The quadrant of an azimuth circle."
    },
    "azimuthal": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the azimuth; in a horizontal circle."
    },
    "azonic": {
        "wordtype": "a.",
        "definition": "Confined to no zone or region; not local."
    },
    "azotize": {
        "wordtype": "v. t.",
        "definition": "To impregnate with azote, or nitrogen; to nitrogenize."
    },
    "azymic": {
        "wordtype": "a.",
        "definition": "Azymous."
    },
    "baalism": {
        "wordtype": "n.",
        "definition": "Worship of Baal; idolatry."
    },
    "babble": {
        "wordtype": "v. i.",
        "definition": "To utter words indistinctly or unintelligibly; to utter inarticulate sounds; as a child babbles."
    },
    "babblery": {
        "wordtype": "n.",
        "definition": "Babble."
    },
    "babehood": {
        "wordtype": "n.",
        "definition": "Babyhood."
    },
    "bablah": {
        "wordtype": "n.",
        "definition": "The ring of the fruit of several East Indian species of acacia; neb-neb. It contains gallic acid and tannin, and is used for dyeing drab."
    },
    "baboonish": {
        "wordtype": "a.",
        "definition": "Like a baboon."
    },
    "babylonian": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the real or to the mystical Babylon, or to the ancient kingdom of Babylonia; Chaldean."
    },
    "bacchanalian": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the festival of Bacchus; relating to or given to reveling and drunkenness."
    },
    "bacchant": {
        "wordtype": "n.",
        "definition": "A priest of Bacchus."
    },
    "bacchius": {
        "wordtype": "n.",
        "definition": "A metrical foot composed of a short syllable and two long ones; according to some, two long and a short."
    },
    "bacciferous": {
        "wordtype": "a.",
        "definition": "Producing berries."
    },
    "backarack": {
        "wordtype": "n.",
        "definition": "A kind of wine made at Bacharach on the Rhine."
    },
    "bachelordom": {
        "wordtype": "n.",
        "definition": "The state of bachelorhood; the whole body of bachelors."
    },
    "bachelorism": {
        "wordtype": "n.",
        "definition": "Bachelorhood; also, a manner or peculiarity belonging to bachelors."
    },
    "back": {
        "wordtype": "n.",
        "definition": "An extended upper part, as of a mountain or ridge."
    },
    "backbone": {
        "wordtype": "n.",
        "definition": "The column of bones in the back which sustains and gives firmness to the frame; the spine; the vertebral or spinal column."
    },
    "backs": {
        "wordtype": "n. pl.",
        "definition": "Among leather dealers, the thickest and stoutest tanned hides."
    },
    "backsettler": {
        "wordtype": "n.",
        "definition": "One living in the back or outlying districts of a community."
    },
    "backshish": {
        "wordtype": "n.",
        "definition": "In Egypt and the Turkish empire, a gratuity; a \"tip\"."
    },
    "backwater": {
        "wordtype": "n.",
        "definition": "An accumulation of water overflowing the low lands, caused by an obstruction."
    },
    "baconian": {
        "wordtype": "a.",
        "definition": "Of or pertaining to Lord Bacon, or to his system of philosophy."
    },
    "bacterial": {
        "wordtype": "a.",
        "definition": "Of or pertaining to bacteriadjective"
    },
    "bactericidal": {
        "wordtype": "a.",
        "definition": "Destructive of bacteriadjective"
    },
    "bacterioscopy": {
        "wordtype": "n.",
        "definition": "The application of a knowledge of bacteria for their detection and identification, as in the examination of polluted water."
    },
    "baculite": {
        "wordtype": "n.",
        "definition": "A cephalopod of the extinct genus Baculites, found fossil in the Cretaceous rocks. It is like an uncoiled ammonite."
    },
    "bad": {
        "wordtype": "imp.",
        "definition": "Bade."
    },
    "badderlocks": {
        "wordtype": "n.",
        "definition": "A large black seaweed (Alaria esculenta) sometimes eaten in Europe; -- also called murlins, honeyware, and henware."
    },
    "badger": {
        "wordtype": "n.",
        "definition": "A brush made of badgers' hair, used by artists."
    },
    "badgerer": {
        "wordtype": "n.",
        "definition": "One who badgers."
    },
    "badian": {
        "wordtype": "n.",
        "definition": "An evergreen Chinese shrub of the Magnolia family (Illicium anisatum), and its aromatic seeds; Chinese anise; star anise."
    },
    "baenomere": {
        "wordtype": "n.",
        "definition": "One of the somites (arthromeres) that make up the thorax of Arthropods."
    },
    "baenosome": {
        "wordtype": "n.",
        "definition": "The thorax of Arthropods."
    },
    "baffling": {
        "wordtype": "a.",
        "definition": "Frustrating; discomfiting; disconcerting; as, baffling currents, winds, tasks."
    },
    "bafta": {
        "wordtype": "n.",
        "definition": "A coarse stuff, usually of cotton, originally made in Indiadjective Also, an imitation of this fabric made for export."
    },
    "bagman": {
        "wordtype": "n.",
        "definition": "A commercial traveler; one employed to solicit orders for manufacturers and tradesmen."
    },
    "bagpipe": {
        "wordtype": "n.",
        "definition": "A musical wind instrument, now used chiefly in the Highlands of Scotland."
    },
    "bagreef": {
        "wordtype": "n.",
        "definition": "The lower reef of fore and aft sails; also, the upper reef of topsails."
    },
    "bah": {
        "wordtype": "interj.",
        "definition": "An exclamation expressive of extreme contempt."
    },
    "bailie": {
        "wordtype": "n.",
        "definition": "An officer in Scotland, whose office formerly corresponded to that of sheriff, but now corresponds to that of an English alderman."
    },
    "bailiwick": {
        "wordtype": "n.",
        "definition": "The precincts within which a bailiff has jurisdiction; the limits of a bailiff's authority."
    },
    "bajocco": {
        "wordtype": "n.",
        "definition": "A small copper coin formerly current in the Roman States, worth about a cent and a half."
    },
    "bake": {
        "wordtype": "v. t.",
        "definition": "To prepare, as food, by cooking in a dry heat, either in an oven or under coals, or on heated stone or metal; as, to bake bread, meat, apples."
    },
    "balaam": {
        "wordtype": "n.",
        "definition": "A paragraph describing something wonderful, used to fill out a newspaper column; -- an allusion to the miracle of Balaam's ass speaking."
    },
    "balanceable": {
        "wordtype": "a.",
        "definition": "Such as can be balanced."
    },
    "balancer": {
        "wordtype": "n.",
        "definition": "One who balances, or uses a balance."
    },
    "balancereef": {
        "wordtype": "n.",
        "definition": "The last reef in a fore-and-aft sail, taken to steady the ship."
    },
    "balaustine": {
        "wordtype": "n.",
        "definition": "The pomegranate tree (Punica granatum). The bark of the root, the rind of the fruit, and the flowers are used medicinally."
    },
    "balcon": {
        "wordtype": "n.",
        "definition": "A balcony."
    },
    "balderdash": {
        "wordtype": "n.",
        "definition": "A worthless mixture, especially of liquors."
    },
    "baldhead": {
        "wordtype": "n.",
        "definition": "A person whose head is bald."
    },
    "baldheaded": {
        "wordtype": "a.",
        "definition": "Having a bald head."
    },
    "balearic": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the isles of Majorca, Minorca, Ivica, etc., in the Mediterranean Sea, off the coast of Valenciadjective"
    },
    "balefire": {
        "wordtype": "n.",
        "definition": "A signal fire; an alarm fire."
    },
    "balefully": {
        "wordtype": "adv.",
        "definition": "In a baleful manner; perniciously."
    },
    "balker": {
        "wordtype": "n.",
        "definition": "One who, or that which balks."
    },
    "ballader": {
        "wordtype": "n.",
        "definition": "A writer of ballads."
    },
    "ballastage": {
        "wordtype": "n.",
        "definition": "A toll paid for the privilege of taking up ballast in a port or harbor."
    },
    "balsamine": {
        "wordtype": "n.",
        "definition": "The Impatiens balsamina, or garden balsam."
    },
    "baltic": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the sea which separates Norway and Sweden from Jutland, Denmark, and Germany; situated on the Baltic Seadjective"
    },
    "bam": {
        "wordtype": "n.",
        "definition": "An imposition; a cheat; a hoax."
    },
    "banat": {
        "wordtype": "n.",
        "definition": "The territory governed by a ban."
    },
    "banco": {
        "wordtype": "n.",
        "definition": "A bank, especially that of Venice."
    },
    "bandit": {
        "wordtype": "n.",
        "definition": "An outlaw; a brigand."
    },
    "bandle": {
        "wordtype": "n.",
        "definition": "An Irish measure of two feet in length."
    },
    "bandog": {
        "wordtype": "n.",
        "definition": "A mastiff or other large and fierce dog, usually kept chained or tied up."
    },
    "bane": {
        "wordtype": "n.",
        "definition": "That which destroys life, esp. poison of a deadly quality."
    },
    "banging": {
        "wordtype": "a.",
        "definition": "Huge; great in size."
    },
    "bangle": {
        "wordtype": "v. t.",
        "definition": "To waste by little and little; to fritter away."
    },
    "banish": {
        "wordtype": "v. t.",
        "definition": "To condemn to exile, or compel to leave one's country, by authority of the ruling power."
    },
    "bankeress": {
        "wordtype": "n.",
        "definition": "A female banker."
    },
    "bankruptcy": {
        "wordtype": "n.",
        "definition": "The state of being actually or legally bankrupt."
    },
    "bankside": {
        "wordtype": "n.",
        "definition": "The slope of a bank, especially of the bank of a steam."
    },
    "bannered": {
        "wordtype": "a.",
        "definition": "Furnished with, or bearing, banners."
    },
    "banstickle": {
        "wordtype": "n.",
        "definition": "A small fish, the three-spined stickleback."
    },
    "banterer": {
        "wordtype": "n.",
        "definition": "One who banters or rallies."
    },
    "baptismal": {
        "wordtype": "a.",
        "definition": "Pertaining to baptism; as, baptismal vows."
    },
    "barbarian": {
        "wordtype": "n.",
        "definition": "A foreigner."
    },
    "bard": {
        "wordtype": "n.",
        "definition": "Hence: A poet; as, the bard of Avon."
    },
    "bardic": {
        "wordtype": "a.",
        "definition": "Of or pertaining to bards, or their poetry."
    },
    "barebone": {
        "wordtype": "n.",
        "definition": "A very lean person; one whose bones show through the skin."
    },
    "barehanded": {
        "wordtype": "n.",
        "definition": "Having bare hands."
    },
    "bareness": {
        "wordtype": "n.",
        "definition": "The state of being bare."
    },
    "bargee": {
        "wordtype": "n.",
        "definition": "A bargeman."
    },
    "bargemastter": {
        "wordtype": "n.",
        "definition": "The proprietor or manager of a barge, or one of the crew of a barge."
    },
    "barilla": {
        "wordtype": "n.",
        "definition": "A name given to several species of Salsola from which soda is made, by burning the barilla in heaps and lixiviating the ashes."
    },
    "barkless": {
        "wordtype": "a.",
        "definition": "Destitute of bark."
    },
    "barley": {
        "wordtype": "n.",
        "definition": "A valuable grain, of the family of grasses, genus Hordeum, used for food, and for making malt, from which are prepared beer, ale, and whisky."
    },
    "barnabite": {
        "wordtype": "n.",
        "definition": "A member of a religious order, named from St. Barnabas."
    },
    "barograph": {
        "wordtype": "n.",
        "definition": "An instrument for recording automatically the variations of atmospheric pressure."
    },
    "barpost": {
        "wordtype": "n.",
        "definition": "A post sunk in the ground to receive the bars closing a passage into a field."
    },
    "barrack": {
        "wordtype": "n.",
        "definition": "A movable roof sliding on four posts, to cover hay, straw, etc."
    },
    "barracouata": {
        "wordtype": "n.",
        "definition": "A voracious pikelike, marine fish, of the genus Sphyraena, sometimes used as food."
    },
    "barrage": {
        "wordtype": "n.",
        "definition": "An artificial bar or obstruction placed in a river or water course to increase the depth of water; as, the barrages of the Nile."
    },
    "barras": {
        "wordtype": "n.",
        "definition": "A resin, called also galipot."
    },
    "barrel": {
        "wordtype": "n.",
        "definition": "A solid drum, or a hollow cylinder or case; as, the barrel of a windlass; the barrel of a watch, within which the spring is coiled."
    },
    "barret": {
        "wordtype": "n.",
        "definition": "A kind of cap formerly worn by soldiers; -- called also barret cap. Also, the flat cap worn by Roman Catholic ecclesiastics."
    },
    "barricader": {
        "wordtype": "n.",
        "definition": "One who constructs barricades."
    },
    "barrier": {
        "wordtype": "n.",
        "definition": "A carpentry obstruction, stockade, or other obstacle made in a passage in order to stop an enemy."
    },
    "barrigudo": {
        "wordtype": "n.",
        "definition": "A large, dark-colored, South American monkey, of the genus Lagothrix, having a long prehensile tail."
    },
    "barringout": {
        "wordtype": "n.",
        "definition": "The act of closing the doors of a schoolroom against a schoolmaster; -- a boyish mode of rebellion in schools."
    },
    "barroom": {
        "wordtype": "n.",
        "definition": "A room containing a bar or counter at which liquors are sold."
    },
    "barterer": {
        "wordtype": "n.",
        "definition": "One who barters."
    },
    "bartery": {
        "wordtype": "n.",
        "definition": "Barter."
    },
    "barth": {
        "wordtype": "n.",
        "definition": "A place of shelter for cattle."
    },
    "barton": {
        "wordtype": "n.",
        "definition": "The demesne lands of a manor; also, the manor itself."
    },
    "bascule": {
        "wordtype": "n.",
        "definition": "In mechanics an apparatus on the principle of the seesaw, in which one end rises as the other falls."
    },
    "base": {
        "wordtype": "a.",
        "definition": "Of little, or less than the usual, height; of low growth; as, base shrubs."
    },
    "based": {
        "wordtype": "a.",
        "definition": "Having a base, or having as a base; supported; as, broad-based."
    },
    "baseness": {
        "wordtype": "n.",
        "definition": "The quality or condition of being base; degradation; vileness."
    },
    "bash": {
        "wordtype": "v. t. & i.",
        "definition": "To abash; to disconcert or be disconcerted or put out of countenance."
    },
    "basihyoid": {
        "wordtype": "n.",
        "definition": "The central tongue bone."
    },
    "basin": {
        "wordtype": "n.",
        "definition": "A hollow vessel or dish, to hold water for washing, and for various other uses."
    },
    "basketful": {
        "wordtype": "n.",
        "definition": "As much as a basket will contain."
    },
    "bason": {
        "wordtype": "n.",
        "definition": "A basin."
    },
    "basquish": {
        "wordtype": "a.",
        "definition": "Pertaining to the country, people, or language of Biscay; Basque"
    },
    "bassetto": {
        "wordtype": "n.",
        "definition": "A tenor or small bass viol."
    },
    "basso": {
        "wordtype": "a.",
        "definition": "The bass or lowest part; as, to sing basso."
    },
    "baste": {
        "wordtype": "v. t.",
        "definition": "To beat with a stick; to cudgel."
    },
    "basto": {
        "wordtype": "n.",
        "definition": "The ace of clubs in quadrille and omber."
    },
    "baston": {
        "wordtype": "n.",
        "definition": "A staff or cudgel."
    },
    "basyle": {
        "wordtype": "n.",
        "definition": "A positive or nonacid constituent of compound, either elementary, or, if compound, performing the functions of an element."
    },
    "basylous": {
        "wordtype": "a.",
        "definition": "Pertaining to, or having the nature of, a basyle; electro-positive; basic; -- opposed to chlorous."
    },
    "batable": {
        "wordtype": "a.",
        "definition": "Disputable."
    },
    "bate": {
        "wordtype": "n.",
        "definition": "Strife; contention."
    },
    "bateful": {
        "wordtype": "a.",
        "definition": "Exciting contention; contentious."
    },
    "bateless": {
        "wordtype": "a.",
        "definition": "Not to be abated."
    },
    "bathometer": {
        "wordtype": "n.",
        "definition": "An instrument for measuring depths, esp. one for taking soundings without a sounding line."
    },
    "batiste": {
        "wordtype": "n.",
        "definition": "Originally, cambric or lawn of fine linen; now applied also to cloth of similar texture made of cotton."
    },
    "batman": {
        "wordtype": "n.",
        "definition": "A man who has charge of a bathorse and his load."
    },
    "batrachian": {
        "wordtype": "a.",
        "definition": "Pertaining to the Batrachiadjective"
    },
    "batrachophagous": {
        "wordtype": "a.",
        "definition": "Feeding on frogs."
    },
    "batsman": {
        "wordtype": "n.",
        "definition": "The one who wields the bat in cricket, baseball, etc."
    },
    "battel": {
        "wordtype": "n.",
        "definition": "Provisions ordered from the buttery; also, the charges for them; -- only in the pl., except when used adjectively."
    },
    "battology": {
        "wordtype": "n.",
        "definition": "A needless repetition of words in speaking or writing."
    },
    "battue": {
        "wordtype": "v. t.",
        "definition": "The act of beating the woods, bushes, etc., for game."
    },
    "battuta": {
        "wordtype": "n.",
        "definition": "The measuring of time by beating."
    },
    "bauble": {
        "wordtype": "n.",
        "definition": "A trifling piece of finery; a gewgaw; that which is gay and showy without real value; a cheap, showy plaything."
    },
    "bawdiness": {
        "wordtype": "n.",
        "definition": "Obscenity; lewdness."
    },
    "bawdry": {
        "wordtype": "n.",
        "definition": "The practice of procuring women for the gratification of lust."
    },
    "bawdyhouse": {
        "wordtype": "n.",
        "definition": "A house of prostitution; a house of ill fame; a brothel."
    },
    "bawler": {
        "wordtype": "n.",
        "definition": "One who bawls."
    },
    "bawrel": {
        "wordtype": "n.",
        "definition": "A kind of hawk."
    },
    "bay": {
        "wordtype": "a.",
        "definition": "Reddish brown; of the color of a chestnut; -- applied to the color of horses."
    },
    "bdellometer": {
        "wordtype": "n.",
        "definition": "A cupping glass to which are attached a scarificator and an exhausting syringe."
    },
    "be": {
        "wordtype": "v. i.",
        "definition": "To exist actually, or in the world of fact; to have ex/stence."
    },
    "beach": {
        "wordtype": "n.",
        "definition": "Pebbles, collectively; shingle."
    },
    "beady": {
        "wordtype": "a.",
        "definition": "Resembling beads; small, round, and glistening."
    },
    "beakiron": {
        "wordtype": "n.",
        "definition": "A bickern; a bench anvil with a long beak, adapted to reach the interior surface of sheet metal ware; the horn of an anvil."
    },
    "beamy": {
        "wordtype": "a.",
        "definition": "Emitting beams of light; radiant; shining."
    },
    "bear": {
        "wordtype": "v. t.",
        "definition": "To support or sustain; to hold up."
    },
    "beardless": {
        "wordtype": "a.",
        "definition": "Without a beard. Hence: Not having arrived at puberty or manhood; youthful."
    },
    "beastly": {
        "wordtype": "a.",
        "definition": "Pertaining to, or having the form, nature, or habits of, a beast."
    },
    "beater": {
        "wordtype": "n.",
        "definition": "One who, or that which, beats."
    },
    "beatifical": {
        "wordtype": "a.",
        "definition": "Having the power to impart or complete blissful enjoyment; blissful."
    },
    "beatify": {
        "wordtype": "v. t.",
        "definition": "To pronounce or regard as happy, or supremely blessed, or as conferring happiness."
    },
    "beavered": {
        "wordtype": "a.",
        "definition": "Covered with, or wearing, a beaver or hat."
    },
    "bebloody": {
        "wordtype": "v. t.",
        "definition": "To make bloody; to stain with blood."
    },
    "because": {
        "wordtype": "conj.",
        "definition": "By or for the cause that; on this account that; for the reason that."
    },
    "becomingly": {
        "wordtype": "adv.",
        "definition": "In a becoming manner."
    },
    "becomingness": {
        "wordtype": "n.",
        "definition": "The quality of being becoming, appropriate, or fit; congruity; fitness."
    },
    "bedbug": {
        "wordtype": "n.",
        "definition": "A wingless, bloodsucking, hemipterous insect (Cimex Lectularius), sometimes infesting houses and especially beds. See Illustration in Appendix."
    },
    "bedeck": {
        "wordtype": "v. t.",
        "definition": "To deck, ornament, or adorn; to grace."
    },
    "bedevil": {
        "wordtype": "v. t.",
        "definition": "To throw into utter disorder and confusion, as if by the agency of evil spirits; to bring under diabolical influence; to torment."
    },
    "bedight": {
        "wordtype": "v. t.",
        "definition": "To bedeck; to array or equip; to adorn."
    },
    "bedizenment": {
        "wordtype": "n.",
        "definition": "That which bedizens; the act of dressing, or the state of being dressed, tawdrily."
    },
    "bedraggle": {
        "wordtype": "v. t.",
        "definition": "To draggle; to soil, as garments which, in walking, are suffered to drag in dust, mud, etc."
    },
    "bedribble": {
        "wordtype": "v. t.",
        "definition": "To dribble upon."
    },
    "bedridden": {
        "wordtype": "v. i.",
        "definition": "Confined to the bed by sickness or infirmity."
    },
    "bedside": {
        "wordtype": "n.",
        "definition": "The side of a bed."
    },
    "bedsite": {
        "wordtype": "n.",
        "definition": "A recess in a room for a bed."
    },
    "bedswerver": {
        "wordtype": "n.",
        "definition": "One who swerves from and is unfaithful to the marriage vow."
    },
    "bedwarf": {
        "wordtype": "v. t.",
        "definition": "To make a dwarf of; to stunt or hinder the growth of; to dwarf."
    },
    "beechen": {
        "wordtype": "a.",
        "definition": "Consisting, or made, of the wood or bark of the beech; belonging to the beech."
    },
    "beehouse": {
        "wordtype": "n.",
        "definition": "A house for bees; an apiary."
    },
    "beem": {
        "wordtype": "n.",
        "definition": "A trumpet."
    },
    "beetle": {
        "wordtype": "v. t.",
        "definition": "A heavy mallet, used to drive wedges, beat pavements, etc."
    },
    "befrill": {
        "wordtype": "v. t.",
        "definition": "To furnish or deck with a frill."
    },
    "befringe": {
        "wordtype": "v. t.",
        "definition": "To furnish with a fringe; to form a fringe upon; to adorn as with fringe."
    },
    "beg": {
        "wordtype": "n.",
        "definition": "A title of honor in Turkey and in some other parts of the East; a bey."
    },
    "beget": {
        "wordtype": "v. t.",
        "definition": "To procreate, as a father or sire; to generate; -- commonly said of the father."
    },
    "beggable": {
        "wordtype": "a.",
        "definition": "Capable of being begged."
    },
    "beggarism": {
        "wordtype": "n.",
        "definition": "Beggary."
    },
    "beggestere": {
        "wordtype": "n.",
        "definition": "A beggar."
    },
    "begotten": {
        "wordtype": "",
        "definition": "past participle of Beget."
    },
    "begrave": {
        "wordtype": "v. t.",
        "definition": "To bury; also, to engrave."
    },
    "begrimer": {
        "wordtype": "n.",
        "definition": "One who, or that which, begrimes."
    },
    "beguile": {
        "wordtype": "v. t.",
        "definition": "To delude by guile, artifice, or craft; to deceive or impose on, as by a false statement; to lure."
    },
    "behead": {
        "wordtype": "v. t.",
        "definition": "To sever the head from; to take off the head of."
    },
    "beheadal": {
        "wordtype": "n.",
        "definition": "Beheading."
    },
    "behest": {
        "wordtype": "n.",
        "definition": "That which is willed or ordered; a command; a mandate; an injunction."
    },
    "behoof": {
        "wordtype": "v. t.",
        "definition": "Advantage; profit; benefit; interest; use."
    },
    "behoove": {
        "wordtype": "v. t.",
        "definition": "To be necessary for; to be fit for; to be meet for, with respect to necessity, duty, or convenience; -- mostly used impersonally."
    },
    "behooveful": {
        "wordtype": "a.",
        "definition": "Advantageous; useful; profitable."
    },
    "behovely": {
        "wordtype": "a. & adv.",
        "definition": "Useful, or usefully."
    },
    "bejade": {
        "wordtype": "v. t.",
        "definition": "To jade or tire."
    },
    "belabor": {
        "wordtype": "v. t.",
        "definition": "To ply diligently; to work carefully upon."
    },
    "belam": {
        "wordtype": "v. t.",
        "definition": "To beat or bang."
    },
    "belated": {
        "wordtype": "a.",
        "definition": "Delayed beyond the usual time; too late; overtaken by night; benighted."
    },
    "beleaguerer": {
        "wordtype": "n.",
        "definition": "One who beleaguers."
    },
    "belecture": {
        "wordtype": "v. t.",
        "definition": "To vex with lectures; to lecture frequently."
    },
    "belgravian": {
        "wordtype": "a.",
        "definition": "Belonging to Belgravia (a fashionable quarter of London, around Pimlico), or to fashionable life; aristocratic."
    },
    "belial": {
        "wordtype": "n.",
        "definition": "An evil spirit; a wicked and unprincipled person; the personification of evil."
    },
    "belibel": {
        "wordtype": "v. t.",
        "definition": "To libel or traduce; to calumniate."
    },
    "belief": {
        "wordtype": "n.",
        "definition": "A persuasion of the truths of religion; faith."
    },
    "believable": {
        "wordtype": "a.",
        "definition": "Capable of being believed; credible."
    },
    "believing": {
        "wordtype": "a.",
        "definition": "That believes; having belief."
    },
    "belletristical": {
        "wordtype": "a.",
        "definition": "Occupied with, or pertaining to, belles-lettres."
    },
    "bellical": {
        "wordtype": "a.",
        "definition": "Of or pertaining to war; warlike; martial."
    },
    "bellied": {
        "wordtype": "a.",
        "definition": "Having (such) a belly; puffed out; -- used in composition; as, pot-bellied; shad-bellied."
    },
    "belligerent": {
        "wordtype": "p. pr.",
        "definition": "Waging war; carrying on war."
    },
    "bellybound": {
        "wordtype": "a.",
        "definition": "Costive; constipated."
    },
    "bellycheat": {
        "wordtype": "n.",
        "definition": "An apron or covering for the front of the person."
    },
    "bellycheer": {
        "wordtype": "n.",
        "definition": "Good cheer; viands."
    },
    "belock": {
        "wordtype": "v. t.",
        "definition": "To lock, or fasten as with a lock."
    },
    "belonging": {
        "wordtype": "n.",
        "definition": "That which belongs to one; that which pertains to one; hence, goods or effects."
    },
    "belswagger": {
        "wordtype": "n.",
        "definition": "A lewd man; also, a bully."
    },
    "belute": {
        "wordtype": "v. t.",
        "definition": "To bespatter, as with mud."
    },
    "bemad": {
        "wordtype": "v. t.",
        "definition": "To make mad."
    },
    "bemaster": {
        "wordtype": "v. t.",
        "definition": "To master thoroughly."
    },
    "bemete": {
        "wordtype": "v. t.",
        "definition": "To mete."
    },
    "bemire": {
        "wordtype": "v. t.",
        "definition": "To drag through, encumber with, or fix in, the mire; to soil by passing through mud or dirt."
    },
    "bemist": {
        "wordtype": "v. t.",
        "definition": "To envelop in mist."
    },
    "bemoan": {
        "wordtype": "v. t.",
        "definition": "To express deep grief for by moaning; to express sorrow for; to lament; to bewail; to pity or sympathize with."
    },
    "bemoil": {
        "wordtype": "v. t.",
        "definition": "To soil or encumber with mire and dirt."
    },
    "bemuddle": {
        "wordtype": "v. t.",
        "definition": "To muddle; to stupefy or bewilder; to confuse."
    },
    "benediction": {
        "wordtype": "n.",
        "definition": "The act of blessing."
    },
    "benedictional": {
        "wordtype": "n.",
        "definition": "A book of benedictions."
    },
    "beneficeless": {
        "wordtype": "a.",
        "definition": "Having no benefice."
    },
    "beneficently": {
        "wordtype": "adv.",
        "definition": "In a beneficent manner; with beneficence."
    },
    "beneficial": {
        "wordtype": "a.",
        "definition": "Conferring benefits; useful; profitable; helpful; advantageous; serviceable; contributing to a valuable end; -- followed by to."
    },
    "beneficially": {
        "wordtype": "adv.",
        "definition": "In a beneficial or advantageous manner; profitably; helpfully."
    },
    "beneficialness": {
        "wordtype": "n.",
        "definition": "The quality of being beneficial; profitableness."
    },
    "beneficiate": {
        "wordtype": "v. t.",
        "definition": "To reduce (ores)."
    },
    "benefit": {
        "wordtype": "n.",
        "definition": "An act of kindness; a favor conferred."
    },
    "benempt": {
        "wordtype": "p. p.",
        "definition": "Promised; vowed."
    },
    "benet": {
        "wordtype": "v. t.",
        "definition": "To catch in a net; to insnare."
    },
    "benevolence": {
        "wordtype": "n.",
        "definition": "The disposition to do good; good will; charitableness; love of mankind, accompanied with a desire to promote their happiness."
    },
    "bengola": {
        "wordtype": "n.",
        "definition": "A Bengal light."
    },
    "benign": {
        "wordtype": "a.",
        "definition": "Of a kind or gentle disposition; gracious; generous; favorable; benignant."
    },
    "benignancy": {
        "wordtype": "n.",
        "definition": "Benignant quality; kindliness."
    },
    "benignant": {
        "wordtype": "a.",
        "definition": "Kind; gracious; favorable."
    },
    "benison": {
        "wordtype": "n.",
        "definition": "Blessing; beatitude; benediction."
    },
    "benzoate": {
        "wordtype": "n.",
        "definition": "A salt formed by the union of benzoic acid with any salifiable base."
    },
    "benzoin": {
        "wordtype": "n.",
        "definition": "A white crystalline substance, C14H12O2, obtained from benzoic aldehyde and some other sources."
    },
    "benzoyl": {
        "wordtype": "n.",
        "definition": "A compound radical, C6H5.CO; the base of benzoic acid, of the oil of bitter almonds, and of an extensive series of compounds."
    },
    "bepaint": {
        "wordtype": "v. t.",
        "definition": "To paint; to cover or color with, or as with, paint."
    },
    "bepelt": {
        "wordtype": "v. t.",
        "definition": "To pelt roundly."
    },
    "bepinch": {
        "wordtype": "v. t.",
        "definition": "To pinch, or mark with pinches."
    },
    "beplumed": {
        "wordtype": "a.",
        "definition": "Decked with feathers."
    },
    "bepraise": {
        "wordtype": "v. t.",
        "definition": "To praise greatly or extravagantly."
    },
    "bergeret": {
        "wordtype": "n.",
        "definition": "A pastoral song."
    },
    "berme": {
        "wordtype": "n.",
        "definition": "A ledge at the bottom of a bank or cutting, to catch earth that may roll down the slope, or to strengthen the bank."
    },
    "bernicle": {
        "wordtype": "n.",
        "definition": "A bernicle goose."
    },
    "berry": {
        "wordtype": "n.",
        "definition": "Any small fleshy fruit, as the strawberry, mulberry, huckleberry, etc."
    },
    "berserker": {
        "wordtype": "n.",
        "definition": "One of a class of legendary heroes, who fought frenzied by intoxicating liquors, and naked, regardless of wounds."
    },
    "bertha": {
        "wordtype": "n.",
        "definition": "A kind of collar or cape worn by ladies."
    },
    "berthage": {
        "wordtype": "n.",
        "definition": "A place for mooring vessels in a dock or harbor."
    },
    "berthing": {
        "wordtype": "n.",
        "definition": "The planking outside of a vessel, above the sheer strake."
    },
    "bertram": {
        "wordtype": "n.",
        "definition": "Pellitory of Spain (Anacyclus pyrethrum)."
    },
    "bescatter": {
        "wordtype": "v. t.",
        "definition": "To scatter over."
    },
    "beset": {
        "wordtype": "v. t.",
        "definition": "To set or stud (anything) with ornaments or prominent objects."
    },
    "besetment": {
        "wordtype": "n.",
        "definition": "The act of besetting, or the state of being beset; also, that which besets one, as a sin."
    },
    "beshine": {
        "wordtype": "v. t.",
        "definition": "To shine upon; to illumine."
    },
    "besieger": {
        "wordtype": "n.",
        "definition": "One who besieges; -- opposed to the besieged."
    },
    "beslobber": {
        "wordtype": "v. t.",
        "definition": "To slobber on; to smear with spittle running from the mouth. Also Fig.: as, to beslobber with praise."
    },
    "beslubber": {
        "wordtype": "v. t.",
        "definition": "To beslobber."
    },
    "besogne": {
        "wordtype": "n.",
        "definition": "A worthless fellow; a bezonian."
    },
    "besom": {
        "wordtype": "n.",
        "definition": "A brush of twigs for sweeping; a broom; anything which sweeps away or destroys."
    },
    "besotted": {
        "wordtype": "a.",
        "definition": "Made sottish, senseless, or infatuated; characterized by drunken stupidity, or by infatuation; stupefied."
    },
    "besought": {
        "wordtype": "",
        "definition": "past participle of Beseech."
    },
    "bespatter": {
        "wordtype": "v. t.",
        "definition": "To soil by spattering; to sprinkle, esp. with dirty water, mud, or anything which will leave foul spots or stains."
    },
    "bespeckle": {
        "wordtype": "v. t.",
        "definition": "To mark with speckles or spots."
    },
    "bespice": {
        "wordtype": "v. t.",
        "definition": "To season with spice, or with some spicy drug."
    },
    "bespoke": {
        "wordtype": "",
        "definition": "imperfect & past participle of Bespeak."
    },
    "besprent": {
        "wordtype": "p. p.",
        "definition": "Sprinkled over; strewed."
    },
    "bespurt": {
        "wordtype": "v. t.",
        "definition": "To spurt on or over; to asperse."
    },
    "bestain": {
        "wordtype": "v. t.",
        "definition": "To stain."
    },
    "bestead": {
        "wordtype": "v. t.",
        "definition": "To put in a certain situation or condition; to circumstance; to place."
    },
    "bestill": {
        "wordtype": "v. t.",
        "definition": "To make still."
    },
    "bestowal": {
        "wordtype": "n.",
        "definition": "The act of bestowing; disposal."
    },
    "bestraddle": {
        "wordtype": "v. t.",
        "definition": "To bestride."
    },
    "bestraught": {
        "wordtype": "a.",
        "definition": "Out of one's senses; distracted; mad."
    },
    "bestrode": {
        "wordtype": "",
        "definition": "imperfect & past participle of Bestride."
    },
    "bet": {
        "wordtype": "v. t.",
        "definition": "To stake or pledge upon the event of a contingent issue; to wager."
    },
    "betelguese": {
        "wordtype": "n.",
        "definition": "A bright star of the first magnitude, near one shoulder of Orion."
    },
    "bethel": {
        "wordtype": "n.",
        "definition": "A place of worship; a hallowed spot."
    },
    "bethrall": {
        "wordtype": "v. t.",
        "definition": "To reduce to thralldom; to inthrall."
    },
    "beton": {
        "wordtype": "n.",
        "definition": "The French name for concrete; hence, concrete made after the French fashion."
    },
    "betook": {
        "wordtype": "",
        "definition": "imperfect of Betake."
    },
    "betrayer": {
        "wordtype": "n.",
        "definition": "One who, or that which, betrays."
    },
    "betrim": {
        "wordtype": "v. t.",
        "definition": "To set in order; to adorn; to deck, to embellish; to trim."
    },
    "betrothment": {
        "wordtype": "n.",
        "definition": "The act of betrothing, or the state of being betrothed; betrothal."
    },
    "betrust": {
        "wordtype": "v. t.",
        "definition": "To trust or intrust."
    },
    "betso": {
        "wordtype": "n.",
        "definition": "A small brass Venetian coin."
    },
    "betterment": {
        "wordtype": "n.",
        "definition": "A making better; amendment; improvement."
    },
    "betterness": {
        "wordtype": "n.",
        "definition": "The quality of being better or superior; superiority."
    },
    "between": {
        "wordtype": "prep.",
        "definition": "In the space which separates; betwixt; as, New York is between Boston and Philadelphiadjective"
    },
    "beverage": {
        "wordtype": "v. t.",
        "definition": "Liquid for drinking; drink; -- usually applied to drink artificially prepared and of an agreeable flavor; as, an intoxicating beverage."
    },
    "bevile": {
        "wordtype": "n.",
        "definition": "A chief broken or opening like a carpenter's bevel."
    },
    "bevy": {
        "wordtype": "n.",
        "definition": "A company; an assembly or collection of persons, especially of ladies."
    },
    "bewail": {
        "wordtype": "v. t.",
        "definition": "To express deep sorrow for, as by wailing; to lament; to wail over."
    },
    "bewailer": {
        "wordtype": "n.",
        "definition": "One who bewails or laments."
    },
    "bewig": {
        "wordtype": "v. t.",
        "definition": "To cover (the head) with a wig."
    },
    "bewit": {
        "wordtype": "n.",
        "definition": "A double slip of leather by which bells are fastened to a hawk's legs."
    },
    "bewitchedness": {
        "wordtype": "n.",
        "definition": "The state of being bewitched."
    },
    "bewrayer": {
        "wordtype": "n.",
        "definition": "One who, or that which, bewrays; a revealer."
    },
    "bewreke": {
        "wordtype": "v. t.",
        "definition": "To wreak; to avenge."
    },
    "beylic": {
        "wordtype": "n.",
        "definition": "The territory ruled by a bey."
    },
    "biangular": {
        "wordtype": "a.",
        "definition": "Having two angles or corners."
    },
    "biaxial": {
        "wordtype": "a.",
        "definition": "Having two axes; as, biaxial polarization."
    },
    "biblical": {
        "wordtype": "a.",
        "definition": "Pertaining to, or derived from, the Bible; as, biblical learning; biblical authority."
    },
    "bibliomaniacal": {
        "wordtype": "a.",
        "definition": "Pertaining to a passion for books; relating to a bibliomaniac."
    },
    "bibliopegistic": {
        "wordtype": "a.",
        "definition": "Pertaining to the art of binding books."
    },
    "bibliopolism": {
        "wordtype": "n.",
        "definition": "The trade or business of selling books."
    },
    "bibliothecal": {
        "wordtype": "a.",
        "definition": "Belonging to a library."
    },
    "bibliothecary": {
        "wordtype": "n.",
        "definition": "A librarian."
    },
    "biceps": {
        "wordtype": "n.",
        "definition": "A muscle having two heads or origins; -- applied particularly to a flexor in the arm, and to another in the thigh."
    },
    "bichromate": {
        "wordtype": "n.",
        "definition": "A salt containing two parts of chromic acid to one of the other ingredients; as, potassium bichromate; -- called also dichromate."
    },
    "bicipitous": {
        "wordtype": "a.",
        "definition": "Having two heads; bicipital."
    },
    "bickerer": {
        "wordtype": "n.",
        "definition": "One who bickers."
    },
    "bickering": {
        "wordtype": "n.",
        "definition": "A skirmishing."
    },
    "bickerment": {
        "wordtype": "n.",
        "definition": "Contention."
    },
    "biconvex": {
        "wordtype": "a.",
        "definition": "Convex on both sides; as, a biconvex lens."
    },
    "bicuspidate": {
        "wordtype": "a.",
        "definition": "Having two points or prominences; ending in two points; -- said of teeth, leaves, fruit, etc."
    },
    "biddable": {
        "wordtype": "a.",
        "definition": "Obedient; docile."
    },
    "bidden": {
        "wordtype": "",
        "definition": "past participle of Bid."
    },
    "bide": {
        "wordtype": "v. t.",
        "definition": "To dwell; to inhabit; to abide; to stay."
    },
    "bier": {
        "wordtype": "n.",
        "definition": "A handbarrow or portable frame on which a corpse is placed or borne to the grave."
    },
    "bifariously": {
        "wordtype": "adv.",
        "definition": "In a bifarious manner."
    },
    "biffin": {
        "wordtype": "n.",
        "definition": "A sort of apple peculiar to Norfolk, Eng."
    },
    "biflorous": {
        "wordtype": "a.",
        "definition": "Bearing two flowers; two-flowered."
    },
    "bifoliolate": {
        "wordtype": "a.",
        "definition": "Having two leaflets, as some compound leaves."
    },
    "biforate": {
        "wordtype": "a.",
        "definition": "Having two perforations."
    },
    "bifurcated": {
        "wordtype": "a.",
        "definition": "Two-pronged; forked."
    },
    "bifurcation": {
        "wordtype": "n.",
        "definition": "A forking, or division into two branches."
    },
    "bigness": {
        "wordtype": "n.",
        "definition": "The state or quality of being big; largeness; size; bulk."
    },
    "bigwig": {
        "wordtype": "a.",
        "definition": "A person of consequence; as, the bigwigs of society."
    },
    "bijugous": {
        "wordtype": "a.",
        "definition": "Bijugate."
    },
    "bilaminate": {
        "wordtype": "a.",
        "definition": "Formed of, or having, two laminae, or thin plates."
    },
    "bilateral": {
        "wordtype": "a.",
        "definition": "Having two sides; arranged upon two sides; affecting two sides or two parties."
    },
    "bilbo": {
        "wordtype": "n.",
        "definition": "A rapier; a sword; so named from Bilbao, in Spain."
    },
    "biliteral": {
        "wordtype": "a.",
        "definition": "Consisting of two letters; as, a biliteral root of a Sanskrit verb."
    },
    "biliteralism": {
        "wordtype": "n.",
        "definition": "The property or state of being biliteral."
    },
    "bilk": {
        "wordtype": "n.",
        "definition": "A thwarting an adversary in cribbage by spoiling his score; a balk."
    },
    "billboard": {
        "wordtype": "n.",
        "definition": "A flat surface, as of a panel or of a fence, on which bills are posted; a bulletin board."
    },
    "billed": {
        "wordtype": "a.",
        "definition": "Furnished with, or having, a bill, as a bird; -- used in composition; as, broad-billed."
    },
    "billfish": {
        "wordtype": "n.",
        "definition": "A name applied to several distinct fishes"
    },
    "billhead": {
        "wordtype": "n.",
        "definition": "A printed form, used by merchants in making out bills or rendering accounts."
    },
    "billman": {
        "wordtype": "n.",
        "definition": "One who uses, or is armed with, a bill or hooked ax."
    },
    "bimaculate": {
        "wordtype": "a.",
        "definition": "Having, or marked with, two spots."
    },
    "bimana": {
        "wordtype": "n. pl.",
        "definition": "Animals having two hands; -- a term applied by Cuvier to man as a special order of Mammaliadjective"
    },
    "bimembral": {
        "wordtype": "a.",
        "definition": "Having two members; as, a bimembral sentence."
    },
    "bimetallism": {
        "wordtype": "n.",
        "definition": "The legalized use of two metals (as gold and silver) in the currency of a country, at a fixed relative value; -- in opposition to monometallism."
    },
    "binal": {
        "wordtype": "a.",
        "definition": "Twofold; double."
    },
    "binarseniate": {
        "wordtype": "n.",
        "definition": "A salt having two equivalents of arsenic acid to one of the base."
    },
    "binder": {
        "wordtype": "n.",
        "definition": "One who binds; as, a binder of sheaves; one whose trade is to bind; as, a binder of books."
    },
    "binoculate": {
        "wordtype": "a.",
        "definition": "Having two eyes."
    },
    "binoxalate": {
        "wordtype": "n.",
        "definition": "A salt having two equivalents of oxalic acid to one of the base; an acid oxalate."
    },
    "biographize": {
        "wordtype": "v. t.",
        "definition": "To write a history of the life of."
    },
    "biolysis": {
        "wordtype": "n.",
        "definition": "The destruction of life."
    },
    "biomagnetism": {
        "wordtype": "n.",
        "definition": "Animal magnetism."
    },
    "biotite": {
        "wordtype": "n.",
        "definition": "Mica containing iron and magnesia, generally of a black or dark green color; -- a common constituent of crystalline rocks. See Micadjective"
    },
    "bipartient": {
        "wordtype": "p. pr.",
        "definition": "Dividing into two parts."
    },
    "bipartition": {
        "wordtype": "n.",
        "definition": "The act of dividing into two parts, or of making two correspondent parts, or the state of being so divided."
    },
    "bipectinated": {
        "wordtype": "a.",
        "definition": "Having two margins toothed like a comb."
    },
    "bipolarity": {
        "wordtype": "n.",
        "definition": "Bipolar quality."
    },
    "bipontine": {
        "wordtype": "a.",
        "definition": "Relating to books printed at Deuxponts, or Bipontium (Zweibrucken), in Bavariadjective"
    },
    "bipunctual": {
        "wordtype": "a.",
        "definition": "Having two points."
    },
    "bipyramidal": {
        "wordtype": "a.",
        "definition": "Consisting of two pyramids placed base to base; having a pyramid at each of the extremities of a prism, as in quartz crystals."
    },
    "biquadrate": {
        "wordtype": "n.",
        "definition": "The fourth power, or the square of the square. Thus 4x4=16, the square of 4, and 16x16=256, the biquadrate of 4."
    },
    "biquintile": {
        "wordtype": "n.",
        "definition": "An aspect of the planets when they are distant from each other by twice the fifth part of a great circle -- that is, twice 72 degrees."
    },
    "birdlet": {
        "wordtype": "n.",
        "definition": "A little bird; a nestling."
    },
    "birdman": {
        "wordtype": "n.",
        "definition": "A fowler or birdcatcher."
    },
    "birdseed": {
        "wordtype": "n.",
        "definition": "Canary seed, hemp, millet or other small seeds used for feeding caged birds."
    },
    "birlaw": {
        "wordtype": "n.",
        "definition": "A law made by husbandmen respecting rural affairs; a rustic or local law or by-law."
    },
    "birr": {
        "wordtype": "v. i.",
        "definition": "To make, or move with, a whirring noise, as of wheels in motion."
    },
    "birt": {
        "wordtype": "n.",
        "definition": "A fish of the turbot kind; the brill."
    },
    "birthday": {
        "wordtype": "n.",
        "definition": "The day in which any person is born; day of origin or commencement."
    },
    "birthdom": {
        "wordtype": "n.",
        "definition": "The land of one's birth; one's inheritance."
    },
    "birthmark": {
        "wordtype": "n.",
        "definition": "Some peculiar mark or blemish on the body at birth."
    },
    "birthplace": {
        "wordtype": "n.",
        "definition": "The town, city, or country, where a person is born; place of origin or birth, in its more general sense."
    },
    "bisaccate": {
        "wordtype": "a.",
        "definition": "Having two little bags, sacs, or pouches."
    },
    "bisectrix": {
        "wordtype": "n.",
        "definition": "The line bisecting the angle between the optic axes of a biaxial crystal."
    },
    "biseptate": {
        "wordtype": "a.",
        "definition": "With two partitions or septadjective"
    },
    "biseye": {
        "wordtype": "",
        "definition": "past participle of Besee."
    },
    "bishop": {
        "wordtype": "n.",
        "definition": "A spiritual overseer, superintendent, or director."
    },
    "bishoplike": {
        "wordtype": "a.",
        "definition": "Resembling a bishop; belonging to a bishop."
    },
    "bisie": {
        "wordtype": "v. t.",
        "definition": "To busy; to employ."
    },
    "bismer": {
        "wordtype": "n.",
        "definition": "Shame; abuse."
    },
    "bismillah": {
        "wordtype": "interj.",
        "definition": "An adjuration or exclamation common among the Mohammedans."
    },
    "bismuthic": {
        "wordtype": "a.",
        "definition": "Of or pertaining to bismuth; containing bismuth, when this element has its higher valence; as, bismuthic oxide."
    },
    "bismuthinite": {
        "wordtype": "n.",
        "definition": "Native bismuth sulphide; -- sometimes called bismuthite."
    },
    "bitless": {
        "wordtype": "a.",
        "definition": "Not having a bit or bridle."
    },
    "bitt": {
        "wordtype": "v. t.",
        "definition": "To put round the bitts; as, to bitt the cable, in order to fasten it or to slacken it gradually, which is called veering away."
    },
    "bitten": {
        "wordtype": "",
        "definition": "past participle of Bite."
    },
    "bitters": {
        "wordtype": "n. pl.",
        "definition": "A liquor, generally spirituous in which a bitter herb, leaf, or root is steeped."
    },
    "bittock": {
        "wordtype": "n.",
        "definition": "A small bit of anything, of indefinite size or quantity; a short distance."
    },
    "bivalency": {
        "wordtype": "n.",
        "definition": "The quality of being bivalent."
    },
    "biventral": {
        "wordtype": "a.",
        "definition": "Having two bellies or protuberances; as, a biventral, or digastric, muscle, or the biventral lobe of the cerebellum."
    },
    "bivial": {
        "wordtype": "a.",
        "definition": "Of or relating to the bivium."
    },
    "blackcoat": {
        "wordtype": "n.",
        "definition": "A clergyman; -- familiarly so called, as a soldier is sometimes called a redcoat or a bluecoat."
    },
    "blackener": {
        "wordtype": "n.",
        "definition": "One who blackens."
    },
    "blackhead": {
        "wordtype": "n.",
        "definition": "The scaup duck."
    },
    "blackleg": {
        "wordtype": "n.",
        "definition": "A notorious gambler."
    },
    "blackly": {
        "wordtype": "adv.",
        "definition": "In a black manner; darkly, in color; gloomily; threateningly; atrociously."
    },
    "blackness": {
        "wordtype": "n.",
        "definition": "The quality or state of being black; black color; atrociousness or enormity in wickedness."
    },
    "blacksmith": {
        "wordtype": "n.",
        "definition": "A smith who works in iron with a forge, and makes iron utensils, horseshoes, etc."
    },
    "bladdery": {
        "wordtype": "a.",
        "definition": "Having bladders; also, resembling a bladder."
    },
    "blade": {
        "wordtype": "n.",
        "definition": "The cutting part of an instrument; as, the blade of a knife or a sword."
    },
    "blain": {
        "wordtype": "n.",
        "definition": "An inflammatory swelling or sore; a bulla, pustule, or blister."
    },
    "blame": {
        "wordtype": "v. t.",
        "definition": "To censure; to express disapprobation of; to find fault with; to reproach."
    },
    "blamelessness": {
        "wordtype": "n.",
        "definition": "The quality or state of being blameless; innocence."
    },
    "blancmanger": {
        "wordtype": "n.",
        "definition": "A sort of fricassee with white sauce, variously made of capon, fish, etc."
    },
    "bland": {
        "wordtype": "a.",
        "definition": "Mild; soft; gentle; smooth and soothing in manner; suave; as, a bland temper; bland persuasion; a bland sycophant."
    },
    "blandiloquence": {
        "wordtype": "n.",
        "definition": "Mild, flattering speech."
    },
    "blandish": {
        "wordtype": "v. t.",
        "definition": "To flatter with kind words or affectionate actions; to caress; to cajole."
    },
    "blankly": {
        "wordtype": "adv.",
        "definition": "In a blank manner; without expression; vacuously; as, to stare blankly."
    },
    "blankness": {
        "wordtype": "n.",
        "definition": "The state of being blank."
    },
    "blanquillo": {
        "wordtype": "n.",
        "definition": "A large fish of Florida and the W. Indies (Caulolatilus chrysops). It is red, marked with yellow."
    },
    "blasphemously": {
        "wordtype": "adv.",
        "definition": "In a blasphemous manner."
    },
    "blast": {
        "wordtype": "",
        "definition": "A suffix or terminal formative, used principally in biological terms, and signifying growth, formation; as, bioblast, epiblast, mesoblast, etc."
    },
    "blasting": {
        "wordtype": "n.",
        "definition": "A blast; destruction by a blast, or by some pernicious cause."
    },
    "blastodermic": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the blastoderm."
    },
    "blastosphere": {
        "wordtype": "n.",
        "definition": "The hollow globe or sphere formed by the arrangement of the blastomeres on the periphery of an impregnated ovum."
    },
    "blat": {
        "wordtype": "v. i.",
        "definition": "To cry, as a calf or sheep; to bleat; to make a senseless noise; to talk inconsiderately."
    },
    "blatancy": {
        "wordtype": "n.",
        "definition": "Blatant quality."
    },
    "blatherskite": {
        "wordtype": "n.",
        "definition": "A blustering, talkative fellow."
    },
    "blattering": {
        "wordtype": "n.",
        "definition": "Senseless babble or boasting."
    },
    "blazonry": {
        "wordtype": "n.",
        "definition": "A coat of arms; an armorial bearing or bearings."
    },
    "bleachery": {
        "wordtype": "n.",
        "definition": "A place or an establishment where bleaching is done."
    },
    "bleaching": {
        "wordtype": "n.",
        "definition": "The act or process of whitening, by removing color or stains; esp. the process of whitening fabrics by chemical agents."
    },
    "blear": {
        "wordtype": "v.",
        "definition": "Dim or sore with water or rheum; -- said of the eyes."
    },
    "blend": {
        "wordtype": "v. t.",
        "definition": "To pollute by mixture or association; to spoil or corrupt; to blot; to stain."
    },
    "blende": {
        "wordtype": "n.",
        "definition": "A general term for some minerals, chiefly metallic sulphides which have a somewhat brilliant but nonmetallic luster."
    },
    "blendous": {
        "wordtype": "a.",
        "definition": "Pertaining to, consisting of, or containing, blende."
    },
    "blenniid": {
        "wordtype": "a.",
        "definition": "Of, pertaining to, or resembling, the blennies."
    },
    "bless": {
        "wordtype": "v. t.",
        "definition": "To make or pronounce holy; to consecrate"
    },
    "blessed": {
        "wordtype": "a.",
        "definition": "Hallowed; consecrated; worthy of blessing or adoration; heavenly; holy."
    },
    "blessing": {
        "wordtype": "v. t.",
        "definition": "The act of one who blesses."
    },
    "blet": {
        "wordtype": "n.",
        "definition": "A form of decay in fruit which is overripe."
    },
    "bletonism": {
        "wordtype": "n.",
        "definition": "The supposed faculty of perceiving subterraneous springs and currents by sensation; -- so called from one Bleton, of France."
    },
    "blickey": {
        "wordtype": "n.",
        "definition": "A tin dinner pail."
    },
    "blight": {
        "wordtype": "v. t.",
        "definition": "To affect with blight; to blast; to prevent the growth and fertility of."
    },
    "blindstory": {
        "wordtype": "n.",
        "definition": "The triforium as opposed to the clearstory."
    },
    "blirt": {
        "wordtype": "n.",
        "definition": "A gust of wind and rain."
    },
    "blissful": {
        "wordtype": "a.",
        "definition": "Full of, characterized by, or causing, joy and felicity; happy in the highest degree."
    },
    "blissless": {
        "wordtype": "a.",
        "definition": "Destitute of bliss."
    },
    "blive": {
        "wordtype": "adv.",
        "definition": "Quickly; forthwith."
    },
    "blizzard": {
        "wordtype": "n.",
        "definition": "A gale of piercingly cold wind, usually accompanied with fine and blinding snow; a furious blast."
    },
    "bloater": {
        "wordtype": "n.",
        "definition": "The common herring, esp. when of large size, smoked, and half dried; -- called also bloat herring."
    },
    "blockage": {
        "wordtype": "n.",
        "definition": "The act of blocking up; the state of being blocked up."
    },
    "blockheadism": {
        "wordtype": "n.",
        "definition": "That which characterizes a blockhead; stupidity."
    },
    "blonket": {
        "wordtype": "a.",
        "definition": "Gray; bluish gray."
    },
    "blondness": {
        "wordtype": "n.",
        "definition": "The state of being blond."
    },
    "bloodstroke": {
        "wordtype": "n.",
        "definition": "Loss of sensation and motion from hemorrhage or congestion in the brain."
    },
    "bloodsucker": {
        "wordtype": "n.",
        "definition": "Any animal that sucks blood; esp., the leech (Hirudo medicinalis), and related species."
    },
    "bloody": {
        "wordtype": "a.",
        "definition": "Containing or resembling blood; of the nature of blood; as, bloody excretions; bloody sweat."
    },
    "bloomless": {
        "wordtype": "a.",
        "definition": "Without bloom or flowers."
    },
    "blooth": {
        "wordtype": "n.",
        "definition": "Bloom; a blossoming."
    },
    "blossom": {
        "wordtype": "n.",
        "definition": "A blooming period or stage of development; something lovely that gives rich promise."
    },
    "blossomy": {
        "wordtype": "a.",
        "definition": "Full of blossoms; flowery."
    },
    "blower": {
        "wordtype": "n.",
        "definition": "One who, or that which, blows."
    },
    "blowfly": {
        "wordtype": "n.",
        "definition": "Any species of fly of the genus Musca that deposits its eggs or young larvae (called flyblows and maggots) upon meat or other animal products."
    },
    "blowpipe": {
        "wordtype": "n.",
        "definition": "A tube for directing a jet of air into a fire or into the flame of a lamp or candle, so as to concentrate the heat on some object."
    },
    "blowth": {
        "wordtype": "n.",
        "definition": "A blossoming; a bloom."
    },
    "blowzed": {
        "wordtype": "a.",
        "definition": "Having high color from exposure to the weather; ruddy-faced; blowzy; disordered."
    },
    "blubber": {
        "wordtype": "n.",
        "definition": "A bubble."
    },
    "blubbery": {
        "wordtype": "a.",
        "definition": "Swollen; protuberant."
    },
    "blucher": {
        "wordtype": "n.",
        "definition": "A kind of half boot, named from the Prussian general Blucher."
    },
    "bluebottle": {
        "wordtype": "n.",
        "definition": "A plant (Centaurea cyanus) which grows in grain fields. It receives its name from its blue bottle-shaped flowers."
    },
    "bluestockingism": {
        "wordtype": "n.",
        "definition": "The character or manner of a bluestocking; female pedantry."
    },
    "bluing": {
        "wordtype": "n.",
        "definition": "The act of rendering blue; as, the bluing of steel."
    },
    "blunderhead": {
        "wordtype": "n.",
        "definition": "A stupid, blundering fellow."
    },
    "blunt": {
        "wordtype": "a.",
        "definition": "Having a thick edge or point, as an instrument; dull; not sharp."
    },
    "blur": {
        "wordtype": "v. t.",
        "definition": "To cause imperfection of vision in; to dim; to darken."
    },
    "blusher": {
        "wordtype": "n.",
        "definition": "One that blushes."
    },
    "blustering": {
        "wordtype": "a.",
        "definition": "Exhibiting noisy violence, as the wind; stormy; tumultuous."
    },
    "blustrous": {
        "wordtype": "a.",
        "definition": "Blusterous."
    },
    "boarding": {
        "wordtype": "n.",
        "definition": "The act of entering a ship, whether with a hostile or a friendly purpose."
    },
    "boastless": {
        "wordtype": "a.",
        "definition": "Without boasting or ostentation."
    },
    "boatable": {
        "wordtype": "a.",
        "definition": "Such as can be transported in a boat."
    },
    "boation": {
        "wordtype": "n.",
        "definition": "A crying out; a roaring; a bellowing; reverberation."
    },
    "boatswain": {
        "wordtype": "n.",
        "definition": "The jager gull."
    },
    "boatwoman": {
        "wordtype": "n.",
        "definition": "A woman who manages a boat."
    },
    "bobac": {
        "wordtype": "n.",
        "definition": "The Poland marmot (Arctomys bobac)."
    },
    "bobbinet": {
        "wordtype": "n.",
        "definition": "A kind of cotton lace which is wrought by machines, and not by hand."
    },
    "bobbish": {
        "wordtype": "a.",
        "definition": "Hearty; in good spirits."
    },
    "bobtail": {
        "wordtype": "n.",
        "definition": "An animal (as a horse or dog) with a short tail."
    },
    "bobtailed": {
        "wordtype": "a.",
        "definition": "Having the tail cut short, or naturally short; curtailed; as, a bobtailed horse or dog; a bobtailed coat."
    },
    "bocasine": {
        "wordtype": "n.",
        "definition": "A sort of fine buckram."
    },
    "bodement": {
        "wordtype": "n.",
        "definition": "An omen; a prognostic."
    },
    "bodge": {
        "wordtype": "n.",
        "definition": "A botch; a patch."
    },
    "bodice": {
        "wordtype": "n.",
        "definition": "A kind of under waist stiffened with whalebone, etc., worn esp. by women; a corset; stays."
    },
    "bodiced": {
        "wordtype": "a.",
        "definition": "Wearing a bodice."
    },
    "bodiless": {
        "wordtype": "a.",
        "definition": "Having no body."
    },
    "bodyguard": {
        "wordtype": "n.",
        "definition": "A guard to protect or defend the person; a lifeguard."
    },
    "boiled": {
        "wordtype": "a.",
        "definition": "Dressed or cooked by boiling; subjected to the action of a boiling liquid; as, boiled meat; a boiled dinner; boiled clothes."
    },
    "boiler": {
        "wordtype": "n.",
        "definition": "One who boils."
    },
    "bolide": {
        "wordtype": "n.",
        "definition": "A kind of bright meteor; a bolis."
    },
    "bollandists": {
        "wordtype": "n. pl.",
        "definition": "The Jesuit editors of the \"Acta Sanctorum\", or Lives of the Saints; -- named from John Bolland, who began the work."
    },
    "bollard": {
        "wordtype": "n.",
        "definition": "An upright wooden or iron post in a boat or on a dock, used in veering or fastening ropes."
    },
    "bolognese": {
        "wordtype": "a.",
        "definition": "Of or pertaining to Bolognadjective"
    },
    "bolting": {
        "wordtype": "n.",
        "definition": "A darting away; a starting off or aside."
    },
    "bombardman": {
        "wordtype": "n.",
        "definition": "One who carried liquor or beer in a can or bombard."
    },
    "bombic": {
        "wordtype": "a.",
        "definition": "Pertaining to, or obtained from, the silkworm; as, bombic acid."
    },
    "bombinate": {
        "wordtype": "v. i.",
        "definition": "To hum; to boom."
    },
    "bonapartean": {
        "wordtype": "a.",
        "definition": "Of or pertaining to Napoleon Bonaparte or his family."
    },
    "bond": {
        "wordtype": "n.",
        "definition": "The state of being bound; imprisonment; captivity, restraint."
    },
    "bondage": {
        "wordtype": "a.",
        "definition": "Obligation; tie of duty."
    },
    "bonded": {
        "wordtype": "a.",
        "definition": "Placed under, or covered by, a bond, as for the payment of duties, or for conformity to certain regulations."
    },
    "bonder": {
        "wordtype": "n.",
        "definition": "One who places goods under bond or in a bonded warehouse."
    },
    "boneache": {
        "wordtype": "n.",
        "definition": "Pain in the bones."
    },
    "bonhommie": {
        "wordtype": "n.",
        "definition": "good nature; pleasant and easy manner."
    },
    "bonito": {
        "wordtype": "n.",
        "definition": "The medregal (Seriola fasciata), an edible fish of the southern of the United States and the West Indies."
    },
    "bonnet": {
        "wordtype": "n.",
        "definition": "A headdress for men and boys; a cap."
    },
    "bonnetless": {
        "wordtype": "a.",
        "definition": "Without a bonnet."
    },
    "bonnilass": {
        "wordtype": "n.",
        "definition": "A \"bonny lass\"; a beautiful girl."
    },
    "bontebok": {
        "wordtype": "n.",
        "definition": "The pied antelope of South Africa (Alcelaphus pygarga). Its face and rump are white. Called also nunni."
    },
    "book": {
        "wordtype": "n.",
        "definition": "A composition, written or printed; a treatise."
    },
    "bookbinding": {
        "wordtype": "n.",
        "definition": "The art, process, or business of binding books."
    },
    "bookmaker": {
        "wordtype": "n.",
        "definition": "One who writes and publishes books; especially, one who gathers his materials from other books; a compiler."
    },
    "bookplate": {
        "wordtype": "n.",
        "definition": "A label, placed upon or in a book, showing its ownership or its position in a library."
    },
    "bookstore": {
        "wordtype": "n.",
        "definition": "A store where books are kept for sale; -- called in England a bookseller's shop."
    },
    "bookwork": {
        "wordtype": "n.",
        "definition": "Work done upon a book or books (as in a printing office), in distinction from newspaper or job work."
    },
    "boom": {
        "wordtype": "n.",
        "definition": "A long pole or spar, run out for the purpose of extending the bottom of a particular sail; as, the jib boom, the studding-sail boom, etc."
    },
    "boomdas": {
        "wordtype": "n.",
        "definition": "A small African hyracoid mammal (Dendrohyrax arboreus) resembling the daman."
    },
    "boon": {
        "wordtype": "n.",
        "definition": "A prayer or petition."
    },
    "boorish": {
        "wordtype": "a.",
        "definition": "Like a boor; clownish; uncultured; unmannerly."
    },
    "bootblack": {
        "wordtype": "n.",
        "definition": "One who blacks boots."
    },
    "bootmaker": {
        "wordtype": "n.",
        "definition": "One who makes boots."
    },
    "booty": {
        "wordtype": "n.",
        "definition": "That which is seized by violence or obtained by robbery, especially collective spoil taken in war; plunder; pillage."
    },
    "boracite": {
        "wordtype": "n.",
        "definition": "A mineral of a white or gray color occurring massive and in isometric crystals; in composition it is a magnesium borate with magnesium chloride."
    },
    "bord": {
        "wordtype": "n.",
        "definition": "A board; a table."
    },
    "bordage": {
        "wordtype": "n.",
        "definition": "The base or servile tenure by which a bordar held his cottage."
    },
    "bordeaux": {
        "wordtype": "a.",
        "definition": "Pertaining to Bordeaux in the south of France."
    },
    "bordland": {
        "wordtype": "n.",
        "definition": "Either land held by a bordar, or the land which a lord kept for the maintenance of his board, or table."
    },
    "boreal": {
        "wordtype": "a.",
        "definition": "Northern; pertaining to the north, or to the north wind; as, a boreal bird; a boreal blast."
    },
    "borofluoride": {
        "wordtype": "n.",
        "definition": "A double fluoride of boron and hydrogen, or some other positive element, or radical; -- called also fluoboride, and formerly fluoborate."
    },
    "boroughmongery": {
        "wordtype": "n.",
        "definition": "The practices of a boroughmonger."
    },
    "borsholder": {
        "wordtype": "a.",
        "definition": "The head or chief of a tithing, or borough (see 2d Borough); the headborough; a parish constable."
    },
    "bosquet": {
        "wordtype": "n.",
        "definition": "A grove; a thicket; shrubbery; an inclosure formed by branches of trees, regularly or irregularly disposed."
    },
    "bossism": {
        "wordtype": "n.",
        "definition": "The rule or practices of bosses, esp. political bosses."
    },
    "bossy": {
        "wordtype": "a.",
        "definition": "Ornamented with bosses; studded."
    },
    "botanizer": {
        "wordtype": "n.",
        "definition": "One who botanizes."
    },
    "botargo": {
        "wordtype": "n.",
        "definition": "A sort of cake or sausage, made of the salted roes of the mullet, much used on the coast of the Mediterranean as an incentive to drink."
    },
    "botcher": {
        "wordtype": "n.",
        "definition": "One who mends or patches, esp. a tailor or cobbler."
    },
    "botcherly": {
        "wordtype": "a.",
        "definition": "Bungling; awkward."
    },
    "bottom": {
        "wordtype": "n.",
        "definition": "The lowest part of anything; the foot; as, the bottom of a tree or well; the bottom of a hill, a lane, or a page."
    },
    "botuliform": {
        "wordtype": "a.",
        "definition": "Having the shape of a sausage."
    },
    "boud": {
        "wordtype": "n.",
        "definition": "A weevil; a worm that breeds in malt, biscuit, etc."
    },
    "boultin": {
        "wordtype": "n.",
        "definition": "One of the shafts of a clustered column."
    },
    "bounce": {
        "wordtype": "v. i.",
        "definition": "To strike or thump, so as to rebound, or to make a sudden noise; a knock loudly."
    },
    "bouncer": {
        "wordtype": "n.",
        "definition": "One who bounces; a large, heavy person who makes much noise in moving."
    },
    "boundary": {
        "wordtype": "n.",
        "definition": "That which indicates or fixes a limit or extent, or marks a bound, as of a territory; a bounding or separating line; a real or imaginary limit."
    },
    "bourder": {
        "wordtype": "n.",
        "definition": "A jester."
    },
    "bourgeoisie": {
        "wordtype": "n.",
        "definition": "The French middle class, particularly such as are concerned in, or dependent on, trade."
    },
    "bourgeon": {
        "wordtype": "v. i.",
        "definition": "To sprout; to put forth buds; to shoot forth, as a branch."
    },
    "bouri": {
        "wordtype": "n.",
        "definition": "A mullet (Mugil capito) found in the rivers of Southern Europe and in Africadjective"
    },
    "bowingly": {
        "wordtype": "adv.",
        "definition": "In a bending manner."
    },
    "bowl": {
        "wordtype": "n.",
        "definition": "A concave vessel of various forms (often approximately hemispherical), to hold liquids, etc."
    },
    "bowstring": {
        "wordtype": "n.",
        "definition": "The string of a bow."
    },
    "bowwow": {
        "wordtype": "n.",
        "definition": "An onomatopoetic name for a dog or its bark."
    },
    "bowyer": {
        "wordtype": "n.",
        "definition": "An archer; one who uses bow."
    },
    "box": {
        "wordtype": "n.",
        "definition": "A receptacle or case of any firm material and of various shapes."
    },
    "boyau": {
        "wordtype": "n.",
        "definition": "A winding or zigzag trench forming a path or communication from one siegework to another, to a magazine, etc."
    },
    "boyishness": {
        "wordtype": "n.",
        "definition": "The manners or behavior of a boy."
    },
    "brabbler": {
        "wordtype": "n.",
        "definition": "A clamorous, quarrelsome, noisy fellow; a wrangler."
    },
    "bracelet": {
        "wordtype": "n.",
        "definition": "An ornamental band or ring, for the wrist or the arm; in modern times, an ornament encircling the wrist, worn by women or girls."
    },
    "bracer": {
        "wordtype": "n.",
        "definition": "That which braces, binds, or makes firm; a band or bandage."
    },
    "brachial": {
        "wordtype": "a.",
        "definition": "Pertaining or belonging to the arm; as, the brachial artery; the brachial nerve."
    },
    "brachioganoid": {
        "wordtype": "n.",
        "definition": "One of the Brachioganoidei."
    },
    "brachygraphy": {
        "wordtype": "n.",
        "definition": "Stenography."
    },
    "brachypterous": {
        "wordtype": "a.",
        "definition": "Having short wings."
    },
    "brachyuran": {
        "wordtype": "n.",
        "definition": "One of the Brachyuradjective"
    },
    "bractlet": {
        "wordtype": "n.",
        "definition": "A bract on the stalk of a single flower, which is itself on a main stalk that support several flowers."
    },
    "brae": {
        "wordtype": "n.",
        "definition": "A hillside; a slope; a bank; a hill."
    },
    "braggingly": {
        "wordtype": "adv.",
        "definition": "Boastingly."
    },
    "bragly": {
        "wordtype": "adv.",
        "definition": "In a manner to be bragged of; finely; proudly."
    },
    "brahminism": {
        "wordtype": "n.",
        "definition": "The religion or system of doctrines of the Brahmans; the religion of Brahmadjective"
    },
    "brahminist": {
        "wordtype": "n.",
        "definition": "An adherent of the religion of the Brahmans."
    },
    "brainy": {
        "wordtype": "a.",
        "definition": "Having an active or vigorous mind."
    },
    "brakeman": {
        "wordtype": "n.",
        "definition": "A man in charge of a brake or brakes."
    },
    "braky": {
        "wordtype": "a.",
        "definition": "Full of brakes; abounding with brambles, shrubs, or ferns; rough; thorny."
    },
    "branch": {
        "wordtype": "n.",
        "definition": "A shoot or secondary stem growing from the main stem, or from a principal limb or bough of a tree or other plant."
    },
    "branchery": {
        "wordtype": "n.",
        "definition": "A system of branches."
    },
    "branchia": {
        "wordtype": "n.",
        "definition": "A gill; a respiratory organ for breathing the air contained in water, such as many aquatic and semiaquatic animals have."
    },
    "branchial": {
        "wordtype": "a.",
        "definition": "Of or pertaining to branchiae or gills."
    },
    "branchiura": {
        "wordtype": "n. pl.",
        "definition": "A group of Entomostraca, with suctorial mouths, including species parasitic on fishes, as the carp lice (Argulus)."
    },
    "brander": {
        "wordtype": "n.",
        "definition": "One who, or that which, brands; a branding iron."
    },
    "brandisher": {
        "wordtype": "n.",
        "definition": "One who brandishes."
    },
    "brandywine": {
        "wordtype": "n.",
        "definition": "Brandy."
    },
    "brankursine": {
        "wordtype": "n.",
        "definition": "Bear's-breech, or Acanthus."
    },
    "brassiness": {
        "wordtype": "n.",
        "definition": "The state, condition, or quality of being brassy."
    },
    "brassy": {
        "wordtype": "a.",
        "definition": "Of or pertaining to brass; having the nature, appearance, or hardness, of brass."
    },
    "brat": {
        "wordtype": "n.",
        "definition": "A coarse garment or cloak; also, coarse clothing, in general."
    },
    "brattice": {
        "wordtype": "n.",
        "definition": "A wall of separation in a shaft or gallery used for ventilation."
    },
    "brawn": {
        "wordtype": "n.",
        "definition": "A muscle; flesh."
    },
    "brayer": {
        "wordtype": "n.",
        "definition": "An implement for braying and spreading ink in hand printing."
    },
    "brazen": {
        "wordtype": "a.",
        "definition": "Pertaining to, made of, or resembling, brass."
    },
    "brazenly": {
        "wordtype": "adv.",
        "definition": "In a bold, impudent manner."
    },
    "breaded": {
        "wordtype": "a.",
        "definition": "Braided"
    },
    "breadthwise": {
        "wordtype": "ads.",
        "definition": "In the direction of the breadth."
    },
    "breathableness": {
        "wordtype": "n.",
        "definition": "State of being breathable."
    },
    "breathful": {
        "wordtype": "a.",
        "definition": "Full of breath; full of odor; fragrant."
    },
    "breathing": {
        "wordtype": "n.",
        "definition": "Respiration; the act of inhaling and exhaling air."
    },
    "breech": {
        "wordtype": "n.",
        "definition": "The lower part of the body behind; the buttocks."
    },
    "breechcloth": {
        "wordtype": "n.",
        "definition": "A cloth worn around the breech."
    },
    "breeching": {
        "wordtype": "n.",
        "definition": "A whipping on the breech, or the act of whipping on the breech."
    },
    "breeder": {
        "wordtype": "n.",
        "definition": "One who, or that which, breeds, produces, brings up, etc."
    },
    "breeze": {
        "wordtype": "n.",
        "definition": "A light, gentle wind; a fresh, soft-blowing wind."
    },
    "bregmatic": {
        "wordtype": "a.",
        "definition": "Pertaining to the bregmadjective"
    },
    "brent": {
        "wordtype": "imp. & p. p.",
        "definition": "Burnt."
    },
    "breve": {
        "wordtype": "n.",
        "definition": "Any writ or precept under seal, issued out of any court."
    },
    "brevipennate": {
        "wordtype": "a.",
        "definition": "Short-winged; -- applied to birds which can not fly, owing to their short wings, as the ostrich, cassowary, and emu."
    },
    "brevirostrate": {
        "wordtype": "a.",
        "definition": "Short-billed; having a short beak."
    },
    "brewer": {
        "wordtype": "n.",
        "definition": "One who brews; one whose occupation is to prepare malt liquors."
    },
    "brewhouse": {
        "wordtype": "n.",
        "definition": "A house or building appropriated to brewing; a brewery."
    },
    "bribery": {
        "wordtype": "n.",
        "definition": "Robbery; extortion."
    },
    "brick": {
        "wordtype": "n.",
        "definition": "Bricks, collectively, as designating that kind of material; as, a load of brick; a thousand of brick."
    },
    "brickle": {
        "wordtype": "a.",
        "definition": "Brittle; easily broken."
    },
    "brickwork": {
        "wordtype": "n.",
        "definition": "Anything made of bricks."
    },
    "bridalty": {
        "wordtype": "n.",
        "definition": "Celebration of the nuptial feast."
    },
    "bride": {
        "wordtype": "n.",
        "definition": "A woman newly married, or about to be married."
    },
    "bridecake": {
        "wordtype": "n.",
        "definition": "Rich or highly ornamented cake, to be distributed to the guests at a wedding, or sent to friends after the wedding."
    },
    "bridegroom": {
        "wordtype": "n.",
        "definition": "A man newly married, or just about to be married."
    },
    "bridgepot": {
        "wordtype": "n.",
        "definition": "The adjustable socket, or step, of a millstone spindle."
    },
    "brief": {
        "wordtype": "a.",
        "definition": "Short in duration."
    },
    "brigade": {
        "wordtype": "n.",
        "definition": "A body of troops, whether cavalry, artillery, infantry, or mixed, consisting of two or more regiments, under the command of a brigadier general."
    },
    "brighten": {
        "wordtype": "a.",
        "definition": "To make bright or brighter; to make to shine; to increase the luster of; to give a brighter hue to."
    },
    "brightsome": {
        "wordtype": "a.",
        "definition": "Bright; clear; luminous; brilliant."
    },
    "brigose": {
        "wordtype": "n.",
        "definition": "Contentious; quarrelsome."
    },
    "brigue": {
        "wordtype": "n.",
        "definition": "A cabal, intrigue, faction, contention, strife, or quarrel."
    },
    "brillante": {
        "wordtype": "a.",
        "definition": "In a gay, showy, and sparkling style."
    },
    "brillance": {
        "wordtype": "n.",
        "definition": "Brilliancy."
    },
    "brim": {
        "wordtype": "n.",
        "definition": "The rim, border, or upper edge of a cup, dish, or any hollow vessel used for holding anything."
    },
    "brimmed": {
        "wordtype": "a.",
        "definition": "Having a brim; -- usually in composition."
    },
    "brimmer": {
        "wordtype": "n.",
        "definition": "A brimful bowl; a bumper."
    },
    "brinded": {
        "wordtype": "a.",
        "definition": "Of a gray or tawny color with streaks of darker hue; streaked; brindled."
    },
    "britzska": {
        "wordtype": "n.",
        "definition": "A long carriage, with a calash top, so constructed as to give space for reclining at night, when used on a journey."
    },
    "broad": {
        "wordtype": "superl.",
        "definition": "Wide; extend in breadth, or from side to side; -- opposed to narrow; as, a broad street, a broad table; an inch broad."
    },
    "broadcast": {
        "wordtype": "n.",
        "definition": "A casting or throwing seed in all directions, as from the hand in sowing."
    },
    "broadsword": {
        "wordtype": "n.",
        "definition": "A sword with a broad blade and a cutting edge; a claymore."
    },
    "brocard": {
        "wordtype": "n.",
        "definition": "An elementary principle or maximum; a short, proverbial rule, in law, ethics, or metaphysics."
    },
    "broidery": {
        "wordtype": "n.",
        "definition": "Embroidery."
    },
    "broken": {
        "wordtype": "v. t.",
        "definition": "Separated into parts or pieces by violence; divided into fragments; as, a broken chain or rope; a broken dish."
    },
    "brokenly": {
        "wordtype": "adv.",
        "definition": "In a broken, interrupted manner; in a broken state; in broken language."
    },
    "bromide": {
        "wordtype": "n.",
        "definition": "A compound of bromine with a positive radical."
    },
    "bronchic": {
        "wordtype": "a.",
        "definition": "Bronchial."
    },
    "bronchitic": {
        "wordtype": "a.",
        "definition": "Of or pertaining to bronchitis; as, bronchitic inflammation."
    },
    "bronchitis": {
        "wordtype": "n.",
        "definition": "Inflammation, acute or chronic, of the bronchial tubes or any part of them."
    },
    "broncho": {
        "wordtype": "n.",
        "definition": "A native or a Mexican horse of small size."
    },
    "brontology": {
        "wordtype": "n.",
        "definition": "A treatise upon thunder."
    },
    "bronze": {
        "wordtype": "a.",
        "definition": "A statue, bust, etc., cast in bronze."
    },
    "brooch": {
        "wordtype": "n.",
        "definition": "A painting all of one color, as a sepia painting, or an India painting."
    },
    "brood": {
        "wordtype": "v. t.",
        "definition": "The young birds hatched at one time; a hatch; as, a brood of chickens."
    },
    "brook": {
        "wordtype": "v. t.",
        "definition": "A natural stream of water smaller than a river or creek."
    },
    "broomstick": {
        "wordtype": "n.",
        "definition": "A stick used as a handle of a broom."
    },
    "brotelness": {
        "wordtype": "n.",
        "definition": "Brittleness."
    },
    "brothelry": {
        "wordtype": "n.",
        "definition": "Lewdness; obscenity; a brothel."
    },
    "brougham": {
        "wordtype": "n.",
        "definition": "A light, close carriage, with seats inside for two or four, and the fore wheels so arranged as to turn short."
    },
    "browless": {
        "wordtype": "a.",
        "definition": "Without shame."
    },
    "browning": {
        "wordtype": "n.",
        "definition": "The act or operation of giving a brown color, as to gun barrels, etc."
    },
    "brownism": {
        "wordtype": "n.",
        "definition": "The views or teachings of Robert Brown of the Brownists."
    },
    "brownstone": {
        "wordtype": "n.",
        "definition": "A dark variety of sandstone, much used for building purposes."
    },
    "browny": {
        "wordtype": "a.",
        "definition": "Brown or, somewhat brown."
    },
    "browsewood": {
        "wordtype": "n.",
        "definition": "Shrubs and bushes upon which animals browse."
    },
    "browspot": {
        "wordtype": "n.",
        "definition": "A rounded organ between the eyes of the frog; the interocular gland."
    },
    "bruang": {
        "wordtype": "n.",
        "definition": "The Malayan sun bear."
    },
    "bruin": {
        "wordtype": "a.",
        "definition": "A bear; -- so called in popular tales and fables."
    },
    "bruiser": {
        "wordtype": "n.",
        "definition": "One who, or that which, bruises."
    },
    "bruit": {
        "wordtype": "n.",
        "definition": "Report; rumor; fame."
    },
    "brunion": {
        "wordtype": "n.",
        "definition": "A nectarine."
    },
    "brusqueness": {
        "wordtype": "n.",
        "definition": "Quality of being brusque; roughness joined with promptness; bluntness."
    },
    "brutalization": {
        "wordtype": "n.",
        "definition": "The act or process of making brutal; state of being brutalized."
    },
    "brutally": {
        "wordtype": "adv.",
        "definition": "In a brutal manner; cruelly."
    },
    "brutely": {
        "wordtype": "adv.",
        "definition": "In a rude or violent manner."
    },
    "bryozoa": {
        "wordtype": "n. pl.",
        "definition": "A class of Molluscoidea, including minute animals which by budding form compound colonies; -- called also Polyzoadjective"
    },
    "bubbler": {
        "wordtype": "v. t.",
        "definition": "To cheat; to deceive."
    },
    "buckety": {
        "wordtype": "n.",
        "definition": "Paste used by weavers to dress their webs."
    },
    "buckeye": {
        "wordtype": "n.",
        "definition": "A name given to several American trees and shrubs of the same genus (Aesculus) as the horse chestnut."
    },
    "buckish": {
        "wordtype": "a.",
        "definition": "Dandified; foppish."
    },
    "bud": {
        "wordtype": "v. i.",
        "definition": "To put forth or produce buds, as a plant; to grow, as a bud does, into a flower or shoot."
    },
    "budge": {
        "wordtype": "v. i.",
        "definition": "To move off; to stir; to walk away."
    },
    "budgeness": {
        "wordtype": "n.",
        "definition": "Sternness; severity."
    },
    "budgerow": {
        "wordtype": "n.",
        "definition": "A large and commodious, but generally cumbrous and sluggish boat, used for journeys on the Ganges."
    },
    "buffoon": {
        "wordtype": "n.",
        "definition": "A man who makes a practice of amusing others by low tricks, antic gestures, etc.; a droll; a mimic; a harlequin; a clown; a merry-andrew."
    },
    "buffoonery": {
        "wordtype": "n.",
        "definition": "The arts and practices of a buffoon, as low jests, ridiculous pranks, vulgar tricks and postures."
    },
    "bugbane": {
        "wordtype": "n.",
        "definition": "A perennial white-flowered herb of the order Ranunculaceae and genus Cimiciguga; bugwort. There are several species."
    },
    "bugger": {
        "wordtype": "n.",
        "definition": "One guilty of buggery or unnatural vice; a sodomite."
    },
    "bugginess": {
        "wordtype": "a.",
        "definition": "The state of being infested with bugs."
    },
    "bugloss": {
        "wordtype": "n.",
        "definition": "A plant of the genus Anchusa, and especially the A. officinalis, sometimes called alkanet; oxtongue."
    },
    "bulbel": {
        "wordtype": "n.",
        "definition": "A separable bulb formed on some flowering plants."
    },
    "bulchin": {
        "wordtype": "n.",
        "definition": "A little bull."
    },
    "bulimy": {
        "wordtype": "n.",
        "definition": "A disease in which there is a perpetual and insatiable appetite for food; a diseased and voracious appetite."
    },
    "bullhead": {
        "wordtype": "n.",
        "definition": "In America, several species of Amiurus; -- called also catfish, horned pout, and bullpout."
    },
    "bullion": {
        "wordtype": "n.",
        "definition": "Uncoined gold or silver in the mass."
    },
    "bullish": {
        "wordtype": "a.",
        "definition": "Partaking of the nature of a bull, or a blunder."
    },
    "bullist": {
        "wordtype": "n.",
        "definition": "A writer or drawer up of papal bulls."
    },
    "bullon": {
        "wordtype": "n.",
        "definition": "A West Indian fish (Scarus Croicensis)."
    },
    "bultow": {
        "wordtype": "n.",
        "definition": "A trawl; a boulter; the mode of fishing with a boulter or spiller."
    },
    "bum": {
        "wordtype": "n.",
        "definition": "The buttock."
    },
    "bummer": {
        "wordtype": "n.",
        "definition": "An idle, worthless fellow, who is without any visible means of support; a dissipated sponger."
    },
    "bumptiousness": {
        "wordtype": "n.",
        "definition": "Conceitedness."
    },
    "bunch": {
        "wordtype": "n.",
        "definition": "A protuberance; a hunch; a knob or lump; a hump."
    },
    "bung": {
        "wordtype": "n.",
        "definition": "The large stopper of the orifice in the bilge of a cask."
    },
    "bunt": {
        "wordtype": "n.",
        "definition": "A fungus (Ustilago foetida) which affects the ear of cereals, filling the grains with a fetid dust; -- also called pepperbrand."
    },
    "buntine": {
        "wordtype": "n.",
        "definition": "A thin woolen stuff, used chiefly for flags, colors, and ships' signals."
    },
    "burden": {
        "wordtype": "n.",
        "definition": "That which is borne or carried; a load."
    },
    "burdener": {
        "wordtype": "n.",
        "definition": "One who loads; an oppressor."
    },
    "burdock": {
        "wordtype": "n.",
        "definition": "A genus of coarse biennial herbs (Lappa), bearing small burs which adhere tenaciously to clothes, or to the fur or wool of animals."
    },
    "bureaucrat": {
        "wordtype": "n.",
        "definition": "An official of a bureau; esp. an official confirmed in a narrow and arbitrary routine."
    },
    "burg": {
        "wordtype": "n.",
        "definition": "A fortified town."
    },
    "burghership": {
        "wordtype": "n.",
        "definition": "The state or privileges of a burgher."
    },
    "burke": {
        "wordtype": "v. t.",
        "definition": "To dispose of quietly or indirectly; to suppress; to smother; to shelve; as, to burke a parliamentary question."
    },
    "burl": {
        "wordtype": "v. t.",
        "definition": "To dress or finish up (cloth); to pick knots, burs, loose threads, etc., from, as in finishing cloth."
    },
    "burler": {
        "wordtype": "n.",
        "definition": "One who burls or dresses cloth."
    },
    "burner": {
        "wordtype": "n.",
        "definition": "One who, or that which, burns or sets fire to anything."
    },
    "burnie": {
        "wordtype": "n.",
        "definition": "A small brook."
    },
    "burnisher": {
        "wordtype": "n.",
        "definition": "One who burnishes."
    },
    "burnous": {
        "wordtype": "n.",
        "definition": "A cloaklike garment and hood woven in one piece, worn by Arabs."
    },
    "bursal": {
        "wordtype": "a.",
        "definition": "Of or pertaining to a bursa or to bursae."
    },
    "burst": {
        "wordtype": "v. t.",
        "definition": "To break."
    },
    "burstwort": {
        "wordtype": "n.",
        "definition": "A plant (Herniaria glabra) supposed to be valuable for the cure of hernia or rupture."
    },
    "burton": {
        "wordtype": "n.",
        "definition": "A peculiar tackle, formed of two or more blocks, or pulleys, the weight being suspended to a hook block in the bight of the running part."
    },
    "bury": {
        "wordtype": "n.",
        "definition": "A borough; a manor; as, the Bury of St. Edmond's"
    },
    "bush": {
        "wordtype": "n.",
        "definition": "A thicket, or place abounding in trees or shrubs; a wild forest."
    },
    "bushelman": {
        "wordtype": "n.",
        "definition": "A tailor's assistant for repairing garments; -- called also busheler."
    },
    "bushranger": {
        "wordtype": "n.",
        "definition": "One who roams, or hides, among the bushes; especially, in Australia, an escaped criminal living in the bush."
    },
    "bushwhacking": {
        "wordtype": "n.",
        "definition": "Traveling, or working a way, through bushes; pulling by the bushes, as in hauling a boat along the bushy margin of a stream."
    },
    "business": {
        "wordtype": "n.",
        "definition": "Any particular occupation or employment engaged in for livelihood or gain, as agriculture, trade, art, or a profession."
    },
    "bustling": {
        "wordtype": "a.",
        "definition": "Agitated; noisy; tumultuous; characterized by confused activity; as, a bustling crowd."
    },
    "busto": {
        "wordtype": "n.",
        "definition": "A bust; a statue."
    },
    "butcherly": {
        "wordtype": "a.",
        "definition": "Like a butcher; without compunction; savage; bloody; inhuman; fell."
    },
    "butchery": {
        "wordtype": "n.",
        "definition": "The business of a butcher."
    },
    "butlership": {
        "wordtype": "n.",
        "definition": "The office of a butler."
    },
    "butting": {
        "wordtype": "n.",
        "definition": "An abuttal; a boundary."
    },
    "buttweld": {
        "wordtype": "v. t.",
        "definition": "To unite by a butt weld."
    },
    "butyrin": {
        "wordtype": "n.",
        "definition": "A butyrate of glycerin; a fat contained in small quantity in milk, which helps to give to butter its peculiar flavor."
    },
    "byssaceous": {
        "wordtype": "a.",
        "definition": "Byssuslike; consisting of fine fibers or threads, as some very delicate filamentous algae."
    },
    "byssoid": {
        "wordtype": "a.",
        "definition": "Byssaceous."
    },
    "bystander": {
        "wordtype": "n.",
        "definition": "One who stands near; a spectator; one who has no concern with the business transacting."
    },
    "byword": {
        "wordtype": "n.",
        "definition": "A common saying; a proverb; a saying that has a general currency."
    },
    "cabalism": {
        "wordtype": "n.",
        "definition": "The secret science of the cabalists."
    },
    "cabalist": {
        "wordtype": "n.",
        "definition": "One versed in the cabala, or the mysteries of Jewish traditions."
    },
    "cabalize": {
        "wordtype": "v. i.",
        "definition": "To use cabalistic language."
    },
    "cabob": {
        "wordtype": "n.",
        "definition": "A small piece of mutton or other meat roasted on a skewer; -- so called in Turkey and Persiadjective"
    },
    "cabree": {
        "wordtype": "n.",
        "definition": "The pronghorn antelope."
    },
    "cabrerite": {
        "wordtype": "n.",
        "definition": "An apple-green mineral, a hydrous arseniate of nickel, cobalt, and magnesia; -- so named from the Sierra Cabrera, Spain."
    },
    "cachinnation": {
        "wordtype": "n.",
        "definition": "Loud or immoderate laughter; -- often a symptom of hysterical or maniacal affections."
    },
    "cachiri": {
        "wordtype": "n.",
        "definition": "A fermented liquor made in Cayenne from the grated root of the manioc, and resembling perry."
    },
    "cachou": {
        "wordtype": "n.",
        "definition": "A silvered aromatic pill, used to correct the odor of the breath."
    },
    "cack": {
        "wordtype": "v. i.",
        "definition": "To ease the body by stool; to go to stool."
    },
    "cacogastric": {
        "wordtype": "a.",
        "definition": "Troubled with bad digestion."
    },
    "cacographic": {
        "wordtype": "a.",
        "definition": "Pertaining to, or characterized by, cacography; badly written or spelled."
    },
    "cacophony": {
        "wordtype": "n.",
        "definition": "An uncouth or disagreable sound of words, owing to the concurrence of harsh letters or syllables."
    },
    "cacotechny": {
        "wordtype": "n.",
        "definition": "A corruption or corrupt state of art."
    },
    "cad": {
        "wordtype": "n.",
        "definition": "A person who stands at the door of an omnibus to open and shut it, and to receive fares; an idle hanger-on about innyards."
    },
    "cadastral": {
        "wordtype": "a.",
        "definition": "Of or pertaining to landed property."
    },
    "cadaster": {
        "wordtype": "n.",
        "definition": "An official statement of the quantity and value of real estate for the purpose of apportioning the taxes payable on such property."
    },
    "cadaveric": {
        "wordtype": "a.",
        "definition": "Of, pertaining to, or resembling, a corpse, or the changes produced by death; cadaverous; as, cadaveric rigidity."
    },
    "cadaverous": {
        "wordtype": "a.",
        "definition": "Having the appearance or color of a dead human body; pale; ghastly; as, a cadaverous look."
    },
    "caddow": {
        "wordtype": "n.",
        "definition": "A jackdaw."
    },
    "cadger": {
        "wordtype": "v. t.",
        "definition": "A packman or itinerant huckster."
    },
    "caducibranchiate": {
        "wordtype": "a.",
        "definition": "With temporary gills: -- applied to those Amphibia in which the gills do not remain in adult life."
    },
    "caducous": {
        "wordtype": "",
        "definition": "Dropping off or disappearing early, as the calyx of a poppy, or the gills of a tadpole."
    },
    "caesious": {
        "wordtype": "a.",
        "definition": "Of the color of lavender; pale blue with a slight mixture of gray."
    },
    "caesural": {
        "wordtype": "a.",
        "definition": "Of or pertaining to a caesuradjective"
    },
    "cafeneh": {
        "wordtype": "n.",
        "definition": "A humble inn or house of rest for travelers, where coffee is sold."
    },
    "cageling": {
        "wordtype": "n.",
        "definition": "A bird confined in a cage; esp. a young bird."
    },
    "cahoot": {
        "wordtype": "n.",
        "definition": "Partnership; as, to go in cahoot with a person."
    },
    "caitiff": {
        "wordtype": "a.",
        "definition": "Captive; wretched; unfortunate."
    },
    "cajuputene": {
        "wordtype": "n.",
        "definition": "A colorless or greenish oil extracted from cajuput."
    },
    "calamint": {
        "wordtype": "n.",
        "definition": "A genus of perennial plants (Calamintha) of the Mint family, esp. the C. Nepeta and C. Acinos, which are called also basil thyme."
    },
    "calaverite": {
        "wordtype": "n.",
        "definition": "A bronze-yellow massive mineral with metallic luster; a telluride of gold; -- first found in Calaveras County Californiadjective"
    },
    "calcaneal": {
        "wordtype": "a.",
        "definition": "Pertaining to the calcaneum; as, calcaneal arteries."
    },
    "calcaneum": {
        "wordtype": "n.",
        "definition": "One of the bones of the tarsus which in man, forms the great bone of the heel; -- called also fibulare."
    },
    "calciform": {
        "wordtype": "a.",
        "definition": "In the form of chalk or lime."
    },
    "calcify": {
        "wordtype": "v. t.",
        "definition": "To make stony or calcareous by the deposit or secretion of salts of lime."
    },
    "calcinate": {
        "wordtype": "v. i.",
        "definition": "To calcine."
    },
    "calcine": {
        "wordtype": "v. i.",
        "definition": "To oxidize, as a metal by the action of heat; to reduce to a metallic calx."
    },
    "calcivorous": {
        "wordtype": "a.",
        "definition": "Eroding, or eating into, limestone."
    },
    "calculable": {
        "wordtype": "a.",
        "definition": "That may be calculated or ascertained by calculation."
    },
    "calculated": {
        "wordtype": "p. p. & a.",
        "definition": "Adapted by calculation, contrivance. or forethought to accomplish a purpose; as, to use arts calculated to deceive the people."
    },
    "calcule": {
        "wordtype": "n.",
        "definition": "Reckoning; computation."
    },
    "calculus": {
        "wordtype": "n.",
        "definition": "A method of computation; any process of reasoning by the use of symbols; any branch of mathematics that may involve calculation."
    },
    "caledonian": {
        "wordtype": "a.",
        "definition": "Of or pertaining to Caledonia or Scotland; Scottish; Scotch."
    },
    "calendar": {
        "wordtype": "v. t.",
        "definition": "To enter or write in a calendar; to register."
    },
    "calenture": {
        "wordtype": "v. i.",
        "definition": "To see as in the delirium of one affected with calenture."
    },
    "calid": {
        "wordtype": "a.",
        "definition": "Hot; burning; ardent."
    },
    "caliph": {
        "wordtype": "n.",
        "definition": "Successor or vicar; -- a title of the successors of Mohammed both as temporal and spiritual rulers, now used by the sultans of Turkey."
    },
    "calker": {
        "wordtype": "n.",
        "definition": "One who calks."
    },
    "calla": {
        "wordtype": "n.",
        "definition": "A genus of plants, of the order Araceae."
    },
    "callidity": {
        "wordtype": "n.",
        "definition": "Acuteness of discernment; cunningness; shrewdness."
    },
    "calliope": {
        "wordtype": "n.",
        "definition": "The Muse that presides over eloquence and heroic poetry; mother of Orpheus, and chief of the nine Muses."
    },
    "callithump": {
        "wordtype": "n.",
        "definition": "A somewhat riotous parade, accompanied with the blowing of tin horns, and other discordant noises; also, a burlesque serenade; a charivari."
    },
    "callosan": {
        "wordtype": "a.",
        "definition": "Of the callosum."
    },
    "callot": {
        "wordtype": "n.",
        "definition": "A plant coif or skullcap. Same as Calotte."
    },
    "callow": {
        "wordtype": "a.",
        "definition": "Destitute of feathers; naked; unfledged."
    },
    "calm": {
        "wordtype": "n.",
        "definition": "To make calm; to render still or quiet, as elements; as, to calm the winds."
    },
    "caloriduct": {
        "wordtype": "n.",
        "definition": "A tube or duct for conducting heat; a caliduct."
    },
    "calumniatory": {
        "wordtype": "a.",
        "definition": "Containing calumny; slanderous."
    },
    "calumnious": {
        "wordtype": "a.",
        "definition": "Containing or implying calumny; false, malicious, and injurious to reputation; slanderous; as, calumnious reports."
    },
    "calycine": {
        "wordtype": "a.",
        "definition": "Pertaining to a calyx; having the nature of a calyx."
    },
    "calycular": {
        "wordtype": "a.",
        "definition": "Pertaining to, or resembling, the bracts of a calycle."
    },
    "calyculated": {
        "wordtype": "a.",
        "definition": "Having a set of bracts resembling a calyx."
    },
    "camarilla": {
        "wordtype": "n.",
        "definition": "The private audience chamber of a king."
    },
    "camber": {
        "wordtype": "n.",
        "definition": "An upward convexity of a deck or other surface; as, she has a high camber (said of a vessel having an unusual convexity of deck)."
    },
    "campaigner": {
        "wordtype": "n.",
        "definition": "One who has served in an army in several campaigns; an old soldier; a veteran."
    },
    "campanes": {
        "wordtype": "n. pl.",
        "definition": "Bells."
    },
    "campanile": {
        "wordtype": "n.",
        "definition": "A bell tower, esp. one built separate from a church."
    },
    "campanularian": {
        "wordtype": "n.",
        "definition": "A hydroid of the family ampanularidae, characterized by having the polyps or zooids inclosed in bell-shaped calicles or hydrothecae."
    },
    "camphorate": {
        "wordtype": "v. t.",
        "definition": "To impregnate or treat with camphor."
    },
    "camphoric": {
        "wordtype": "a.",
        "definition": "Of, pertaining to, or derived from, camphor."
    },
    "campus": {
        "wordtype": "n.",
        "definition": "The principal grounds of a college or school, between the buildings or within the main inclosure; as, the college campus."
    },
    "canaanitish": {
        "wordtype": "a.",
        "definition": "Of or pertaining to Canaan or the Canaanites."
    },
    "canaliculus": {
        "wordtype": "n.",
        "definition": "A minute canal."
    },
    "canalization": {
        "wordtype": "n.",
        "definition": "Construction of, or furnishing with, a canal or canals."
    },
    "canary": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the Canary Islands; as, canary wine; canary birds."
    },
    "cancel": {
        "wordtype": "v. i.",
        "definition": "To inclose or surround, as with a railing, or with latticework."
    },
    "cancellate": {
        "wordtype": "v. t.",
        "definition": "Consisting of a network of veins, without intermediate parenchyma, as the leaves of certain plants; latticelike."
    },
    "cancerate": {
        "wordtype": "v. i.",
        "definition": "To grow into a canser; to become cancerous."
    },
    "canceration": {
        "wordtype": "n.",
        "definition": "The act or state of becoming cancerous or growing into a cancer."
    },
    "cancroid": {
        "wordtype": "a.",
        "definition": "Resembling a crab; pertaining to the Cancroidea, one of the families of crabs, including the genus Cancer."
    },
    "candelabrum": {
        "wordtype": "n.",
        "definition": "A lamp stand of any sort."
    },
    "candidly": {
        "wordtype": "adv.",
        "definition": "In a candid manner."
    },
    "candidness": {
        "wordtype": "n.",
        "definition": "The quality of being candid."
    },
    "candiot": {
        "wordtype": "a.",
        "definition": "Of or pertaining to Candia; Cretary."
    },
    "candlewaster": {
        "wordtype": "n.",
        "definition": "One who consumes candles by being up late for study or dissipation."
    },
    "cankerous": {
        "wordtype": "a.",
        "definition": "Affecting like a canker."
    },
    "cankery": {
        "wordtype": "a.",
        "definition": "Like a canker; full of canker."
    },
    "cannabine": {
        "wordtype": "a.",
        "definition": "Pertaining to hemp; hempen."
    },
    "cannily": {
        "wordtype": "adv.",
        "definition": "In a canny manner."
    },
    "canoe": {
        "wordtype": "n.",
        "definition": "A boat made of bark or skins, used by savages."
    },
    "canoeing": {
        "wordtype": "n.",
        "definition": "The act or art of using a canoe."
    },
    "canon": {
        "wordtype": "n.",
        "definition": "A law or rule."
    },
    "canonistic": {
        "wordtype": "a.",
        "definition": "Of or pertaining to a canonist."
    },
    "canstick": {
        "wordtype": "n.",
        "definition": "Candlestick."
    },
    "cantab": {
        "wordtype": "n.",
        "definition": "A Cantabrigian."
    },
    "canteen": {
        "wordtype": "n.",
        "definition": "A vessel used by soldiers for carrying water, liquor, or other drink."
    },
    "cantharidin": {
        "wordtype": "n.",
        "definition": "The active principle of the cantharis, or Spanish fly, a volatile, acrid, bitter solid, crystallizing in four-sided prisms."
    },
    "cantillate": {
        "wordtype": "v. i.",
        "definition": "To chant; to recite with musical tones."
    },
    "cany": {
        "wordtype": "a.",
        "definition": "Of or pertaining to cane or canes; abounding with canes."
    },
    "canzone": {
        "wordtype": "n.",
        "definition": "A song or air for one or more voices, of Provencal origin, resembling, though not strictly, the madrigal."
    },
    "capability": {
        "wordtype": "n.",
        "definition": "The quality of being capable; capacity; capableness; esp. intellectual power or ability."
    },
    "capacious": {
        "wordtype": "a.",
        "definition": "Having capacity; able to contain much; large; roomy; spacious; extended; broad; as, a capacious vessel, room, bay, or harbor."
    },
    "capaciosly": {
        "wordtype": "adv.",
        "definition": "In a capacious manner or degree; comprehensively."
    },
    "cape": {
        "wordtype": "n.",
        "definition": "A piece or point of land, extending beyond the adjacent coast into the sea or a lake; a promontory; a headland."
    },
    "caple": {
        "wordtype": "n.",
        "definition": "A horse; a nag."
    },
    "capel": {
        "wordtype": "n.",
        "definition": "A composite stone (quartz, schorl, and hornblende) in the walls of tin and copper lodes."
    },
    "capital": {
        "wordtype": "n.",
        "definition": "Of or pertaining to the head."
    },
    "capitalness": {
        "wordtype": "n.",
        "definition": "The quality of being capital; preeminence."
    },
    "capitation": {
        "wordtype": "n.",
        "definition": "A numbering of heads or individuals."
    },
    "capitellate": {
        "wordtype": "a.",
        "definition": "Having a very small knoblike termination, or collected into minute capituladjective"
    },
    "capitol": {
        "wordtype": "",
        "definition": "The temple of Jupiter, at Rome, on the Mona Capitolinus, where the Senate met."
    },
    "capitular": {
        "wordtype": "n.",
        "definition": "An act passed in a chapter."
    },
    "capitularly": {
        "wordtype": "adv.",
        "definition": "In the manner or form of an ecclesiastical chapter."
    },
    "capitulate": {
        "wordtype": "n.",
        "definition": "To settle or draw up the heads or terms of an agreement, as in chapters or articles; to agree."
    },
    "capitulation": {
        "wordtype": "n.",
        "definition": "A reducing to heads or articles; a formal agreement."
    },
    "capitulator": {
        "wordtype": "n.",
        "definition": "One who capitulates."
    },
    "capnomancy": {
        "wordtype": "n.",
        "definition": "Divination by means of the ascent or motion of smoke."
    },
    "capnomor": {
        "wordtype": "n.",
        "definition": "A limpid, colorless oil with a peculiar odor, obtained from beech tar."
    },
    "capon": {
        "wordtype": "v. t.",
        "definition": "To castrate; to make a capon of."
    },
    "caponet": {
        "wordtype": "n.",
        "definition": "A young capon."
    },
    "caponize": {
        "wordtype": "v. t.",
        "definition": "To castrate, as a fowl."
    },
    "cappeak": {
        "wordtype": "n.",
        "definition": "The front piece of a cap; -- now more commonly called visor."
    },
    "capreoline": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the roebuck."
    },
    "capricorn": {
        "wordtype": "n.",
        "definition": "A southern constellation, represented on ancient monuments by the figure of a goat, or a figure with its fore part like a fish."
    },
    "caprid": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the tribe of ruminants of which the goat, or genus Capra, is the type."
    },
    "caprifole": {
        "wordtype": "n.",
        "definition": "The woodbine or honeysuckle."
    },
    "caprigenous": {
        "wordtype": "a.",
        "definition": "Of the goat kind."
    },
    "capriped": {
        "wordtype": "a.",
        "definition": "Having feet like those of a goat."
    },
    "capstone": {
        "wordtype": "n.",
        "definition": "A fossil echinus of the genus Cannulus; -- so called from its supposed resemblance to a cap."
    },
    "capsulated": {
        "wordtype": "a.",
        "definition": "Inclosed in a capsule, or as in a chest or box."
    },
    "capsule": {
        "wordtype": "n.",
        "definition": "A small saucer of clay for roasting or melting samples of ores, etc.; a scorifier."
    },
    "captation": {
        "wordtype": "n.",
        "definition": "A courting of favor or applause, by flattery or address; a captivating quality; an attraction."
    },
    "captiousness": {
        "wordtype": "n.",
        "definition": "Captious disposition or manner."
    },
    "capture": {
        "wordtype": "n.",
        "definition": "The act of seizing by force, or getting possession of by superior power or by stratagem; as, the capture of an enemy, a vessel, or a criminal."
    },
    "capuccio": {
        "wordtype": "n.",
        "definition": "A capoch or hood."
    },
    "capuchin": {
        "wordtype": "n.",
        "definition": "A garment for women, consisting of a cloak and hood, resembling, or supposed to resemble, that of capuchin monks."
    },
    "carabus": {
        "wordtype": "n.",
        "definition": "A genus of ground beetles, including numerous species. They devour many injurious insects."
    },
    "caracole": {
        "wordtype": "n.",
        "definition": "A half turn which a horseman makes, either to the right or the left."
    },
    "caravaneer": {
        "wordtype": "n.",
        "definition": "The leader or driver of the camels in caravan."
    },
    "carbazotic": {
        "wordtype": "a.",
        "definition": "Containing, or derived from, carbon and nitrogen."
    },
    "carbonate": {
        "wordtype": "n.",
        "definition": "A salt or carbonic acid, as in limestone, some forms of lead ore, etc."
    },
    "carbonide": {
        "wordtype": "n.",
        "definition": "A carbide."
    },
    "carboxide": {
        "wordtype": "n.",
        "definition": "A compound of carbon and oxygen, as carbonyl, with some element or radical; as, potassium carboxide."
    },
    "carburet": {
        "wordtype": "v. t.",
        "definition": "To combine or to impregnate with carbon, as by passing through or over a liquid hydrocarbon; to carbonize or carburize."
    },
    "carcelage": {
        "wordtype": "n.",
        "definition": "Prison fees."
    },
    "cardia": {
        "wordtype": "n.",
        "definition": "The heart."
    },
    "carding": {
        "wordtype": "v. t.",
        "definition": "A roll of wool or other fiber as it comes from the carding machine."
    },
    "cardiographic": {
        "wordtype": "a.",
        "definition": "Of or pertaining to, or produced by, a cardiograph."
    },
    "cardioid": {
        "wordtype": "n.",
        "definition": "An algebraic curve, so called from its resemblance to a heart."
    },
    "careful": {
        "wordtype": "a.",
        "definition": "Full of care; anxious; solicitous."
    },
    "carelessly": {
        "wordtype": "adv.",
        "definition": "In a careless manner."
    },
    "caress": {
        "wordtype": "n.",
        "definition": "An act of endearment; any act or expression of affection; an embracing, or touching, with tenderness."
    },
    "careworn": {
        "wordtype": "a.",
        "definition": "Worn or burdened with care; as, careworn look or face."
    },
    "cargason": {
        "wordtype": "n.",
        "definition": "A cargo."
    },
    "carmelite": {
        "wordtype": "n.",
        "definition": "A nun of the Order of Our lady of Mount Carmel."
    },
    "carminated": {
        "wordtype": "a.",
        "definition": "Of, relating to, or mixed with, carmine; as, carminated lake."
    },
    "carmine": {
        "wordtype": "n.",
        "definition": "A rich red or crimson color with a shade of purple."
    },
    "carminic": {
        "wordtype": "a.",
        "definition": "Of or pertaining to, or derived from, carmine."
    },
    "carnalism": {
        "wordtype": "n.",
        "definition": "The state of being carnal; carnality; sensualism."
    },
    "carnassial": {
        "wordtype": "a.",
        "definition": "Adapted to eating flesh."
    },
    "carneous": {
        "wordtype": "a.",
        "definition": "Consisting of, or like, flesh; carnous; fleshy."
    },
    "carnifex": {
        "wordtype": "n.",
        "definition": "The public executioner at Rome, who executed persons of the lowest rank; hence, an executioner or hangman."
    },
    "carnivore": {
        "wordtype": "n.",
        "definition": "One of the Carnivoradjective"
    },
    "carnosity": {
        "wordtype": "n.",
        "definition": "A fleshy excrescence; esp. a small excrescence or fungous growth."
    },
    "caroched": {
        "wordtype": "a.",
        "definition": "Placed in a caroche."
    },
    "carolinian": {
        "wordtype": "n.",
        "definition": "A native or inhabitant of north or South Carolinadjective"
    },
    "carotid": {
        "wordtype": "n.",
        "definition": "One of the two main arteries of the neck, by which blood is conveyed from the aorta to the head. [See Illust. of Aortadjective]"
    },
    "carousingly": {
        "wordtype": "adv.",
        "definition": "In the manner of a carouser."
    },
    "carpet": {
        "wordtype": "n.",
        "definition": "A smooth soft covering resembling or suggesting a carpet."
    },
    "carpetbag": {
        "wordtype": "n.",
        "definition": "A portable bag for travelers; -- so called because originally made of carpet."
    },
    "carpeting": {
        "wordtype": "n.",
        "definition": "The act of covering with carpets."
    },
    "carpetway": {
        "wordtype": "n.",
        "definition": "A border of greensward left round the margin of a plowed field."
    },
    "carpolite": {
        "wordtype": "n.",
        "definition": "A general term for a fossil fruit, nut, or seed."
    },
    "carpophyll": {
        "wordtype": "n.",
        "definition": "A leaf converted into a fruit or a constituent portion of a fruit; a carpel. [See Illust. of Gymnospermous.]"
    },
    "carse": {
        "wordtype": "n.",
        "definition": "Low, fertile land; a river valley."
    },
    "cartesianism": {
        "wordtype": "n.",
        "definition": "The philosophy of Descartes."
    },
    "carthusian": {
        "wordtype": "n.",
        "definition": "A member of an exceeding austere religious order, founded at Chartreuse in France by St. Bruno, in the year 1086."
    },
    "cartographically": {
        "wordtype": "adv.",
        "definition": "By cartography."
    },
    "carton": {
        "wordtype": "n.",
        "definition": "Pasteboard for paper boxes; also, a pasteboard box."
    },
    "cartway": {
        "wordtype": "n.",
        "definition": "A way or road for carts."
    },
    "carus": {
        "wordtype": "n.",
        "definition": "Coma with complete insensibility; deep lethargy."
    },
    "carvel": {
        "wordtype": "n.",
        "definition": "A species of jellyfish; sea blubber."
    },
    "carvist": {
        "wordtype": "n.",
        "definition": "A hawk which is of proper age and training to be carried on the hand; a hawk in its first year."
    },
    "caryatides": {
        "wordtype": "n. pl.",
        "definition": "Caryatids."
    },
    "cascade": {
        "wordtype": "n.",
        "definition": "A fall of water over a precipice, as in a river or brook; a waterfall less than a cataract."
    },
    "casemate": {
        "wordtype": "n.",
        "definition": "A hollow molding, chiefly in cornices."
    },
    "casern": {
        "wordtype": "n.",
        "definition": "A lodging for soldiers in garrison towns, usually near the rampart; barracks."
    },
    "cassation": {
        "wordtype": "n.",
        "definition": "The act of annulling."
    },
    "casserole": {
        "wordtype": "n.",
        "definition": "A small round dish with a handle, usually of porcelain."
    },
    "cassonade": {
        "wordtype": "n.",
        "definition": "Raw sugar; sugar not refined."
    },
    "castalian": {
        "wordtype": "a.",
        "definition": "Of or pertaining to Castalia, a mythical fountain of inspiration on Mt. Parnassus sacred to the Muses."
    },
    "castanea": {
        "wordtype": "n.",
        "definition": "A genus of nut-bearing trees or shrubs including the chestnut and chinquapin."
    },
    "castigation": {
        "wordtype": "n.",
        "definition": "Corrective punishment; chastisement; reproof; pungent criticism."
    },
    "castled": {
        "wordtype": "a.",
        "definition": "Having a castle or castles; supporting a castle; as, a castled height or crag."
    },
    "castlery": {
        "wordtype": "n.",
        "definition": "The government of a castle."
    },
    "castrametation": {
        "wordtype": "n.",
        "definition": "The art or act of encamping; the making or laying out of a camp."
    },
    "castrato": {
        "wordtype": "n.",
        "definition": "A male person castrated for the purpose of improving his voice for singing; an artificial, or male, soprano."
    },
    "casualness": {
        "wordtype": "n.",
        "definition": "The quality of being casual."
    },
    "casuist": {
        "wordtype": "v. i.",
        "definition": "To play the casuist."
    },
    "cataclysmist": {
        "wordtype": "n.",
        "definition": "One who believes that the most important geological phenomena have been produced by cataclysms."
    },
    "catagmatic": {
        "wordtype": "a.",
        "definition": "Having the quality of consolidating broken bones."
    },
    "catamaran": {
        "wordtype": "n.",
        "definition": "Any vessel with twin hulls, whether propelled by sails or by steam; esp., one of a class of double-hulled pleasure boats remarkable for speed."
    },
    "cataphractic": {
        "wordtype": "a.",
        "definition": "Of, pertaining to, or resembling, a cataphract."
    },
    "catastrophe": {
        "wordtype": "n.",
        "definition": "The final event in a romance or a dramatic piece; a denouement, as a death in a tragedy, or a marriage in a comedy."
    },
    "catastrophic": {
        "wordtype": "a.",
        "definition": "Of a pertaining to a catastrophe."
    },
    "catchdrain": {
        "wordtype": "n.",
        "definition": "A ditch or drain along the side of a hill to catch the surface water; also, a ditch at the side of a canal to catch the surplus water."
    },
    "catsup": {
        "wordtype": "n.",
        "definition": "A table sauce made from mushrooms, tomatoes, walnuts, etc."
    },
    "catechetical": {
        "wordtype": "a.",
        "definition": "Relating to or consisting in, asking questions and receiving answers, according to the ancient manner of teaching."
    },
    "catechisation": {
        "wordtype": "n.",
        "definition": "The act of catechising."
    },
    "catechistical": {
        "wordtype": "a.",
        "definition": "Of or pertaining to a catechist or to a catechism."
    },
    "catechumenist": {
        "wordtype": "n.",
        "definition": "A catechumen."
    },
    "categorical": {
        "wordtype": "a.",
        "definition": "Of or pertaining to a category."
    },
    "categoricalness": {
        "wordtype": "n.",
        "definition": "The quality of being categorical, positive, or absolute."
    },
    "catenarian": {
        "wordtype": "a.",
        "definition": "Relating to a chain; like a chain; as, a catenary curve."
    },
    "caterer": {
        "wordtype": "n.",
        "definition": "One who caters."
    },
    "caterwauling": {
        "wordtype": "n.",
        "definition": "The cry of cats; a harsh, disagreeable noise or cry like the cry of cats."
    },
    "cates": {
        "wordtype": "n.",
        "definition": "Provisions; food; viands; especially, luxurious food; delicacies; dainties."
    },
    "catfall": {
        "wordtype": "n.",
        "definition": "A rope used in hoisting the anchor to the cathead."
    },
    "catharsis": {
        "wordtype": "n.",
        "definition": "A natural or artificial purgation of any passage, as of the mouth, bowels, etc."
    },
    "cathead": {
        "wordtype": "n.",
        "definition": "A projecting piece of timber or iron near the bow of vessel, to which the anchor is hoisted and secured."
    },
    "catheterize": {
        "wordtype": "v. t.",
        "definition": "To operate on with a catheter."
    },
    "catholicism": {
        "wordtype": "n.",
        "definition": "The state or quality of being catholic or universal; catholicity."
    },
    "catilinarian": {
        "wordtype": "a.",
        "definition": "Pertaining to Catiline, the Roman conspirator; resembling Catiline's conspiracy."
    },
    "catling": {
        "wordtype": "n.",
        "definition": "A little cat; a kitten."
    },
    "catstick": {
        "wordtype": "n.",
        "definition": "A stick or club employed in the game of ball called cat or tipcat."
    },
    "catstitch": {
        "wordtype": "v. t.",
        "definition": "To fold and sew down the edge of with a coarse zigzag stitch."
    },
    "caudex": {
        "wordtype": "n.",
        "definition": "The stem of a tree., esp. a stem without a branch, as of a palm or a tree fern; also, the perennial rootstock of an herbaceous plant."
    },
    "caudle": {
        "wordtype": "n.",
        "definition": "A kind of warm drink for sick persons, being a mixture of wine with eggs, bread, sugar, and spices."
    },
    "cauliflower": {
        "wordtype": "n.",
        "definition": "An annual variety of Brassica oleracea, or cabbage, of which the cluster of young flower stalks and buds is eaten as a vegetable."
    },
    "cauline": {
        "wordtype": "a.",
        "definition": "Growing immediately on a caulis; of or pertaining to a caulis."
    },
    "cauponize": {
        "wordtype": "v. i.",
        "definition": "To sell wine or victuals."
    },
    "causation": {
        "wordtype": "n.",
        "definition": "The act of causing; also the act or agency by which an effect is produced."
    },
    "causelessness": {
        "wordtype": "n.",
        "definition": "The state of being causeless."
    },
    "causeuse": {
        "wordtype": "n.",
        "definition": "A kind of sofa for two persons. A tete-/-tete."
    },
    "causticness": {
        "wordtype": "n.",
        "definition": "The quality of being caustic; causticity."
    },
    "cautel": {
        "wordtype": "n.",
        "definition": "Caution; prudence; wariness."
    },
    "cauterant": {
        "wordtype": "n.",
        "definition": "A cauterizing substance."
    },
    "cauterization": {
        "wordtype": "n.",
        "definition": "The act of searing some morbid part by the application of a cautery or caustic; also, the effect of such application."
    },
    "cautiousness": {
        "wordtype": "n.",
        "definition": "The quality of being cautious."
    },
    "cavaliero": {
        "wordtype": "n.",
        "definition": "A cavalier; a gallant; a libertine."
    },
    "cavalierism": {
        "wordtype": "n.",
        "definition": "The practice or principles of cavaliers."
    },
    "cavalry": {
        "wordtype": "n.",
        "definition": "That part of military force which serves on horseback."
    },
    "cave": {
        "wordtype": "n.",
        "definition": "A hollow place in the earth, either natural or artificial; a subterraneous cavity; a cavern; a den."
    },
    "caveating": {
        "wordtype": "n.",
        "definition": "Shifting the sword from one side of an adversary's sword to the other."
    },
    "caveator": {
        "wordtype": "n.",
        "definition": "One who enters a caveat."
    },
    "cawky": {
        "wordtype": "a.",
        "definition": "Of or pertaining to cawk; like cawk."
    },
    "cedar": {
        "wordtype": "n.",
        "definition": "The name of several evergreen trees. The wood is remarkable for its durability and fragrant odor."
    },
    "cedared": {
        "wordtype": "a.",
        "definition": "Covered, or furnished with, cedars."
    },
    "cede": {
        "wordtype": "v. t.",
        "definition": "To yield or surrender; to give up; to resign; as, to cede a fortress, a province, or country, to another nation, by treaty."
    },
    "cedry": {
        "wordtype": "a.",
        "definition": "Of the nature of cedar."
    },
    "ceint": {
        "wordtype": "n.",
        "definition": "A girdle."
    },
    "celery": {
        "wordtype": "n.",
        "definition": "A plant of the Parsley family (Apium graveolens), of which the blanched leafstalks are used as a salad."
    },
    "celestially": {
        "wordtype": "adv.",
        "definition": "In a celestial manner."
    },
    "celestinian": {
        "wordtype": "n.",
        "definition": "A monk of the austere branch of the Franciscan Order founded by Celestine V. in the 13th centry."
    },
    "celibate": {
        "wordtype": "n.",
        "definition": "Celibate state; celibacy."
    },
    "celibatist": {
        "wordtype": "n.",
        "definition": "One who lives unmarried."
    },
    "cell": {
        "wordtype": "n.",
        "definition": "A very small and close apartment, as in a prison or in a monastery or convent; the hut of a hermit."
    },
    "cellarage": {
        "wordtype": "n.",
        "definition": "The space or storerooms of a cellar; a cellar."
    },
    "cello": {
        "wordtype": "n.",
        "definition": "A contraction for Violoncello."
    },
    "cenanthy": {
        "wordtype": "n.",
        "definition": "The absence or suppression of the essential organs (stamens and pistil) in a flower."
    },
    "cenation": {
        "wordtype": "n.",
        "definition": "Meal-taking; dining or supping."
    },
    "cenatory": {
        "wordtype": "a.",
        "definition": "Of or pertaining to dinner or supper."
    },
    "cenotaph": {
        "wordtype": "n.",
        "definition": "An empty tomb or a monument erected in honor of a person who is buried elsewhere."
    },
    "cense": {
        "wordtype": "n.",
        "definition": "A census; -- also, a public rate or tax."
    },
    "censorship": {
        "wordtype": "n.",
        "definition": "The office or power of a censor; as, to stand for a censorship."
    },
    "censure": {
        "wordtype": "n.",
        "definition": "Judgment either favorable or unfavorable; opinion."
    },
    "center": {
        "wordtype": "n.",
        "definition": "The middle or central portion of anything."
    },
    "centesimal": {
        "wordtype": "a.",
        "definition": "Hundredth."
    },
    "centinel": {
        "wordtype": "n.",
        "definition": "Sentinel."
    },
    "centistere": {
        "wordtype": "n.",
        "definition": "The hundredth part of a stere, equal to .353 cubic feet."
    },
    "cento": {
        "wordtype": "n.",
        "definition": "A literary or a musical composition formed by selections from different authors disposed in a new order."
    },
    "centralism": {
        "wordtype": "n.",
        "definition": "The state or condition of being central; the combination of several parts into one whole; centralization."
    },
    "centrolineal": {
        "wordtype": "a.",
        "definition": "Converging to a center; -- applied to lines drawn so as to meet in a point or center."
    },
    "centrostaltic": {
        "wordtype": "a.",
        "definition": "A term applied to the action of nerve force in the spinal center."
    },
    "centuriate": {
        "wordtype": "a.",
        "definition": "Pertaining to, or divided into, centuries or hundreds."
    },
    "cephalalgic": {
        "wordtype": "a.",
        "definition": "Relating to, or affected with, headache."
    },
    "cephaloid": {
        "wordtype": "a.",
        "definition": "Shaped like the head."
    },
    "cephalology": {
        "wordtype": "n.",
        "definition": "The science which treats of the head."
    },
    "cephalous": {
        "wordtype": "a.",
        "definition": "Having a head; -- applied chiefly to the Cephalata, a division of mollusks."
    },
    "ceramic": {
        "wordtype": "a.",
        "definition": "Of or pertaining to pottery; relating to the art of making earthenware; as, ceramic products; ceramic ornaments for ceilings."
    },
    "cerasin": {
        "wordtype": "n.",
        "definition": "A white amorphous substance, the insoluble part of cherry gum; -- called also meta-arabinic acid."
    },
    "cerastes": {
        "wordtype": "n.",
        "definition": "A genus of poisonous African serpents, with a horny scale over each eye; the horned viper."
    },
    "cerberus": {
        "wordtype": "n.",
        "definition": "A genus of East Indian serpents, allied to the pythons; the bokadam."
    },
    "cerebel": {
        "wordtype": "n.",
        "definition": "The cerebellum."
    },
    "cerebralist": {
        "wordtype": "n.",
        "definition": "One who accepts cerebralism."
    },
    "cerebricity": {
        "wordtype": "n.",
        "definition": "Brain power."
    },
    "cerebritis": {
        "wordtype": "n.",
        "definition": "Inflammation of the cerebrum."
    },
    "ceremonious": {
        "wordtype": "a.",
        "definition": "Consisting of outward forms and rites; ceremonial. [In this sense ceremonial is now preferred.]"
    },
    "ceriph": {
        "wordtype": "n.",
        "definition": "One of the fine lines of a letter, esp. one of the fine cross strokes at the top and bottom of letters."
    },
    "cerise": {
        "wordtype": "a.",
        "definition": "Cherry-colored; a light bright red; -- applied to textile fabrics, especially silk."
    },
    "cerographical": {
        "wordtype": "a.",
        "definition": "Of or pertaining to cerography."
    },
    "ceroplastic": {
        "wordtype": "a.",
        "definition": "Relating to the art of modeling in wax."
    },
    "certain": {
        "wordtype": "a.",
        "definition": "Assured in mind; having no doubts; free from suspicions concerning."
    },
    "certainness": {
        "wordtype": "n.",
        "definition": "Certainty."
    },
    "certification": {
        "wordtype": "n.",
        "definition": "The act of certifying."
    },
    "cerule": {
        "wordtype": "a.",
        "definition": "Blue; cerulean."
    },
    "cerulific": {
        "wordtype": "a.",
        "definition": "Producing a blue or sky color."
    },
    "ceruse": {
        "wordtype": "n.",
        "definition": "A cosmetic containing white lead."
    },
    "cerussite": {
        "wordtype": "n.",
        "definition": "Native lead carbonate; a mineral occurring in colorless, white, or yellowish transparent crystals, with an adamantine, also massive and compact."
    },
    "cess": {
        "wordtype": "n.",
        "definition": "A rate or tax."
    },
    "cessavit": {
        "wordtype": "n.",
        "definition": "A writ given by statute to recover lands when the tenant has for two years failed to perform the conditions of his tenure."
    },
    "cessible": {
        "wordtype": "a.",
        "definition": "Giving way; yielding."
    },
    "cessment": {
        "wordtype": "v. t.",
        "definition": "An assessment or tax."
    },
    "cessor": {
        "wordtype": "v. t.",
        "definition": "An assessor."
    },
    "cesspipe": {
        "wordtype": "n.",
        "definition": "A pipe for carrying off waste water, etc., from a sink or cesspool."
    },
    "cesspool": {
        "wordtype": "n.",
        "definition": "A cistern in the course, or the termination, of a drain, to collect sedimentary or superfluous matter; a privy vault; any receptacle of filth."
    },
    "cestode": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the Cestoideadjective"
    },
    "cestoid": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the Cestoideadjective"
    },
    "cetacean": {
        "wordtype": "n.",
        "definition": "One of the Cetaceadjective"
    },
    "cetaceous": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the Cetaceadjective"
    },
    "cetic": {
        "wordtype": "a.",
        "definition": "Of or pertaining to a whale."
    },
    "cetylic": {
        "wordtype": "a.",
        "definition": "Of, pertaining to, or derived from, spermaceti."
    },
    "chacma": {
        "wordtype": "n.",
        "definition": "A large species of African baboon (Cynocephalus porcarius); -- called also ursine baboon. [See Illust. of Baboon.]"
    },
    "chaetopod": {
        "wordtype": "a.",
        "definition": "Pertaining to the Chaetopodadjective"
    },
    "chafe": {
        "wordtype": "v. t.",
        "definition": "To excite heat in by friction; to rub in order to stimulate and make warm."
    },
    "chafery": {
        "wordtype": "v. t.",
        "definition": "An open furnace or forge, in which blooms are heated before being wrought into bars."
    },
    "chaff": {
        "wordtype": "n.",
        "definition": "The glumes or husks of grains and grasses separated from the seed by threshing and winnowing, etc."
    },
    "chaffery": {
        "wordtype": "n.",
        "definition": "Traffic; bargaining."
    },
    "chagrin": {
        "wordtype": "n.",
        "definition": "Vexation; mortification."
    },
    "chain": {
        "wordtype": "n.",
        "definition": "That which confines, fetters, or secures, as a chain; a bond; as, the chains of habit."
    },
    "chainlet": {
        "wordtype": "n.",
        "definition": "A small chain."
    },
    "chalazal": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the chalazadjective"
    },
    "chalaziferous": {
        "wordtype": "a.",
        "definition": "Having or bearing chalazas."
    },
    "chalice": {
        "wordtype": "n.",
        "definition": "A cup or bowl; especially, the cup used in the sacrament of the Lord's Supper."
    },
    "chaliced": {
        "wordtype": "a.",
        "definition": "Having a calyx or cup; cup-shaped."
    },
    "chalkcutter": {
        "wordtype": "n.",
        "definition": "A man who digs chalk."
    },
    "chalkiness": {
        "wordtype": "n.",
        "definition": "The state of being chalky."
    },
    "chalkstone": {
        "wordtype": "n.",
        "definition": "A mass of chalk."
    },
    "challenger": {
        "wordtype": "n.",
        "definition": "One who challenges."
    },
    "cham": {
        "wordtype": "v. t.",
        "definition": "To chew."
    },
    "chambering": {
        "wordtype": "n.",
        "definition": "Lewdness."
    },
    "chamberlainship": {
        "wordtype": "n.",
        "definition": "Office of a chamberlain."
    },
    "chameck": {
        "wordtype": "n.",
        "definition": "A kind of spider monkey (Ateles chameck), having the thumbs rudimentary and without a nail."
    },
    "chameleonize": {
        "wordtype": "v. t.",
        "definition": "To change into various colors."
    },
    "champerty": {
        "wordtype": "n.",
        "definition": "Partnership in power; equal share of authority."
    },
    "chance": {
        "wordtype": "n.",
        "definition": "The operation or activity of such agent."
    },
    "chandlerly": {
        "wordtype": "a.",
        "definition": "Like a chandler; in a petty way."
    },
    "chandry": {
        "wordtype": "n.",
        "definition": "Chandlery."
    },
    "chanfrin": {
        "wordtype": "n.",
        "definition": "The fore part of a horse's head."
    },
    "changeful": {
        "wordtype": "a.",
        "definition": "Full of change; mutable; inconstant; fickle; uncertain."
    },
    "chantor": {
        "wordtype": "n.",
        "definition": "A chanter."
    },
    "chantress": {
        "wordtype": "n.",
        "definition": "A female chanter or singer."
    },
    "chantry": {
        "wordtype": "n.",
        "definition": "An endowment or foundation for the chanting of masses and offering of prayers, commonly for the founder."
    },
    "chaomancy": {
        "wordtype": "n.",
        "definition": "Divination by means of appearances in the air."
    },
    "chaplainship": {
        "wordtype": "n.",
        "definition": "The office or business of a chaplain."
    },
    "chare": {
        "wordtype": "v. t.",
        "definition": "To perform; to do; to finish."
    },
    "chargeful": {
        "wordtype": "a.",
        "definition": "Costly; expensive."
    },
    "chargeless": {
        "wordtype": "a.",
        "definition": "Free from, or with little, charge."
    },
    "charily": {
        "wordtype": "adv.",
        "definition": "In a chary manner; carefully; cautiously; frugally."
    },
    "chariot": {
        "wordtype": "n.",
        "definition": "A two-wheeled car or vehicle for war, racing, state processions, etc."
    },
    "charlatanical": {
        "wordtype": "a.",
        "definition": "Of or like a charlatan; making undue pretension; empirical; pretentious; quackish."
    },
    "chartaceous": {
        "wordtype": "a.",
        "definition": "Resembling paper or parchment; of paper-like texture; papery."
    },
    "chartist": {
        "wordtype": "n.",
        "definition": "A supporter or partisan of chartism."
    },
    "chary": {
        "wordtype": "a.",
        "definition": "Careful; wary; cautious; not rash, reckless, or spendthrift; saving; frugal."
    },
    "chasable": {
        "wordtype": "a.",
        "definition": "Capable of being chased; fit for hunting."
    },
    "chase": {
        "wordtype": "v. t.",
        "definition": "To pursue eagerly, as hunters pursue game."
    },
    "chasmed": {
        "wordtype": "a.",
        "definition": "Having gaps or a chasm."
    },
    "chaste": {
        "wordtype": "a.",
        "definition": "Pure from unlawful sexual intercourse; virtuous; continent."
    },
    "chastisable": {
        "wordtype": "a.",
        "definition": "Capable or deserving of chastisement; punishable."
    },
    "chattelism": {
        "wordtype": "n.",
        "definition": "The act or condition of holding chattels; the state of being a chattel."
    },
    "chatwood": {
        "wordtype": "n.",
        "definition": "Little sticks; twigs for burning; fuel."
    },
    "chavender": {
        "wordtype": "n.",
        "definition": "The chub."
    },
    "cheat": {
        "wordtype": "n.",
        "definition": "An act of deception or fraud; that which is the means of fraud or deception; a fraud; a trick; imposition; imposture."
    },
    "cheatableness": {
        "wordtype": "n.",
        "definition": "Capability of being cheated."
    },
    "checkerwork": {
        "wordtype": "n.",
        "definition": "Work consisting of or showing checkers varied alternately as to colors or materials."
    },
    "cheddar": {
        "wordtype": "a.",
        "definition": "Of or pertaining to, or made at, Cheddar, in England; as, Cheddar cheese."
    },
    "cheeky": {
        "wordtype": "",
        "definition": "a Brazen-faced; impudent; bold."
    },
    "cheer": {
        "wordtype": "n.",
        "definition": "The face; the countenance or its expression."
    },
    "cheerer": {
        "wordtype": "n.",
        "definition": "One who cheers; one who, or that which, gladdens."
    },
    "cheerfulness": {
        "wordtype": "n.",
        "definition": "Good spirits; a state of moderate joy or gayety; alacrity."
    },
    "cheeseparing": {
        "wordtype": "n.",
        "definition": "A thin portion of the rind of a cheese."
    },
    "chemically": {
        "wordtype": "adv.",
        "definition": "According to chemical principles; by chemical process or operation."
    },
    "chemist": {
        "wordtype": "n.",
        "definition": "A person versed in chemistry or given to chemical investigation; an analyst; a maker or seller of chemicals or drugs."
    },
    "chemosmosis": {
        "wordtype": "n.",
        "definition": "Chemical action taking place through an intervening membrane."
    },
    "cheng": {
        "wordtype": "n.",
        "definition": "A chinese reed instrument, with tubes, blown by the mouth."
    },
    "chenomorphae": {
        "wordtype": "n. pl.",
        "definition": "An order of birds, including the swans, ducks, geese, flamingoes and screamers."
    },
    "cherimoyer": {
        "wordtype": "n.",
        "definition": "A small downy-leaved tree (Anona Cherimolia), with fragrant flowers. It is a native of Peru."
    },
    "cheroot": {
        "wordtype": "n.",
        "definition": "A kind of cigar, originally brought from Mania, in the Philippine Islands; now often made of inferior or adulterated tobacco."
    },
    "cherubical": {
        "wordtype": "a.",
        "definition": "Of or pertaining to cherubs; angelic."
    },
    "cherubin": {
        "wordtype": "a.",
        "definition": "Cherubic; angelic."
    },
    "ches": {
        "wordtype": "",
        "definition": "pret. of Chese."
    },
    "chessboard": {
        "wordtype": "n.",
        "definition": "The board used in the game of chess, having eight rows of alternate light and dark squares, eight in each row. See Checkerboard."
    },
    "chesstree": {
        "wordtype": "n.",
        "definition": "A piece of oak bolted perpendicularly on the side of a vessel, to aid in drawing down and securing the clew of the mainsail."
    },
    "chetvert": {
        "wordtype": "n.",
        "definition": "A measure of grain equal to 0.7218 of an imperial quarter, or 5.95 Winchester bushels."
    },
    "cheve": {
        "wordtype": "v. i.",
        "definition": "To come to an issue; to turn out; to succeed; as, to cheve well in a enterprise."
    },
    "cheven": {
        "wordtype": "n.",
        "definition": "A river fish; the chub."
    },
    "cheventein": {
        "wordtype": "n.",
        "definition": "A variant of Chieftain."
    },
    "chevrette": {
        "wordtype": "n.",
        "definition": "A machine for raising guns or mortar into their carriages."
    },
    "chevronwise": {
        "wordtype": "adv.",
        "definition": "In the manner of a chevron; as, the field may be divided chevronwise."
    },
    "chew": {
        "wordtype": "v. t.",
        "definition": "To bite and grind with the teeth; to masticate."
    },
    "chian": {
        "wordtype": "a.",
        "definition": "Of or pertaining to Chios, an island in the Aegean Seadjective"
    },
    "chickaree": {
        "wordtype": "n.",
        "definition": "The American red squirrel (Sciurus Hudsonius); -- so called from its cry."
    },
    "chicky": {
        "wordtype": "n.",
        "definition": "A chicken; -- used as a diminutive or pet name, especially in calling fowls."
    },
    "chideress": {
        "wordtype": "n.",
        "definition": "She who chides."
    },
    "chidester": {
        "wordtype": "n.",
        "definition": "A female scold."
    },
    "chiefly": {
        "wordtype": "adv.",
        "definition": "In the first place; principally; preeminently; above; especially."
    },
    "chievance": {
        "wordtype": "n.",
        "definition": "An unlawful bargain; traffic in which money is exported as discount."
    },
    "childish": {
        "wordtype": "a.",
        "definition": "Of, pertaining to, befitting, or resembling, a child."
    },
    "childlike": {
        "wordtype": "a.",
        "definition": "Resembling a child, or that which belongs to children; becoming a child; meek; submissive; dutiful."
    },
    "childship": {
        "wordtype": "n.",
        "definition": "The state or relation of being a child."
    },
    "chiliarch": {
        "wordtype": "n.",
        "definition": "The commander or chief of a thousand men."
    },
    "chimaeroid": {
        "wordtype": "a.",
        "definition": "Related to, or like, the chimaeradjective"
    },
    "chimere": {
        "wordtype": "n.",
        "definition": "The upper robe worn by a bishop, to which lawn sleeves are usually attached."
    },
    "chine": {
        "wordtype": "n.",
        "definition": "A chink or cleft; a narrow and deep ravine; as, Shanklin Chine in the Isle of Wight, a quarter of a mile long and 230 feet deep."
    },
    "chintz": {
        "wordtype": "n.",
        "definition": "Cotton cloth, printed with flowers and other devices, in a number of different colors, and often glazed."
    },
    "chippy": {
        "wordtype": "a.",
        "definition": "Abounding in, or resembling, chips; dry and tasteless."
    },
    "chiragrical": {
        "wordtype": "a.",
        "definition": "Having the gout in the hand, or subject to that disease."
    },
    "chiretta": {
        "wordtype": "n.",
        "definition": "A plant (Agathotes Chirayta) found in Northern India, having medicinal properties to the gentian, and esteemed as a tonic and febrifuge."
    },
    "chirograph": {
        "wordtype": "n.",
        "definition": "The last part of a fine of land, commonly called the foot of the fine."
    },
    "chirography": {
        "wordtype": "n.",
        "definition": "The art of telling fortunes by examining the hand."
    },
    "chirological": {
        "wordtype": "a.",
        "definition": "Relating to chirology."
    },
    "chiromantist": {
        "wordtype": "n.",
        "definition": "A chiromancer."
    },
    "chironomy": {
        "wordtype": "n.",
        "definition": "The art of moving the hands in oratory or in pantomime; gesture"
    },
    "chiroplast": {
        "wordtype": "n.",
        "definition": "An instrument to guid the hands and fingers of pupils in playing on the piano, etc."
    },
    "chirping": {
        "wordtype": "a.",
        "definition": "Cheering; enlivening."
    },
    "chirurgical": {
        "wordtype": "a.",
        "definition": "Surgical"
    },
    "chivalrous": {
        "wordtype": "a.",
        "definition": "Pertaining to chivalry or knight-errantry; warlike; heroic; gallant; high-spirited; high-minded; magnanimous."
    },
    "chivalrously": {
        "wordtype": "adv.",
        "definition": "In a chivalrous manner; gallantly; magnanimously."
    },
    "chive": {
        "wordtype": "n.",
        "definition": "A filament of a stamen."
    },
    "chloasma": {
        "wordtype": "n.",
        "definition": "A cutaneous affection characterized by yellow or yellowish brown pigmented spots."
    },
    "chloral": {
        "wordtype": "n.",
        "definition": "A colorless oily liquid, CCl3.CHO, of a pungent odor and harsh taste, obtained by the action of chlorine upon ordinary or ethyl alcohol."
    },
    "chlorate": {
        "wordtype": "n.",
        "definition": "A salt of chloric acid; as, chlorate of potassium."
    },
    "chloritic": {
        "wordtype": "a.",
        "definition": "Pertaining to, or containing, chlorite; as, chloritic sand."
    },
    "chlorodyne": {
        "wordtype": "n.",
        "definition": "A patent anodyne medicine, containing opium, chloroform, Indian hemp, etc."
    },
    "chloropal": {
        "wordtype": "n.",
        "definition": "A massive mineral, greenish in color, and opal-like in appearance. It is essentially a hydrous silicate of iron."
    },
    "chlorosis": {
        "wordtype": "n.",
        "definition": "A disease in plants, causing the flowers to turn green or the leaves to lose their normal green color."
    },
    "choking": {
        "wordtype": "a.",
        "definition": "That chokes; producing the feeling of strangulation."
    },
    "cholecystis": {
        "wordtype": "n.",
        "definition": "The gall bladder."
    },
    "cholecystotomy": {
        "wordtype": "n.",
        "definition": "The operation of making an opening in the gall bladder, as for the removal of a gallstone."
    },
    "cholesteric": {
        "wordtype": "a.",
        "definition": "Pertaining to cholesterin, or obtained from it; as, cholesteric acid."
    },
    "choltry": {
        "wordtype": "n.",
        "definition": "A Hindoo caravansary."
    },
    "chondrigenous": {
        "wordtype": "a.",
        "definition": "Affording chondrin."
    },
    "chondrite": {
        "wordtype": "n.",
        "definition": "A meteoric stone characterized by the presence of chondrules."
    },
    "chondrodite": {
        "wordtype": "n.",
        "definition": "A fluosilicate of magnesia and iron, yellow to red in color, often occurring in granular form in a crystalline limestone."
    },
    "chondrometer": {
        "wordtype": "n.",
        "definition": "A steelyard for weighting grain."
    },
    "chop": {
        "wordtype": "v. t.",
        "definition": "To cut by striking repeatedly with a sharp instrument; to cut into pieces; to mince; -- often with up."
    },
    "choragus": {
        "wordtype": "n.",
        "definition": "A chorus leader; esp. one who provided at his own expense and under his own supervision one of the choruses for the musical contents at Athens."
    },
    "chore": {
        "wordtype": "n.",
        "definition": "A small job; in the pl., the regular or daily light work of a household or farm, either within or without doors."
    },
    "choregraphy": {
        "wordtype": "n.",
        "definition": "The art of representing dancing by signs, as music is represented by notes."
    },
    "chorion": {
        "wordtype": "n.",
        "definition": "The outer membrane which invests the fetus in the womb; also, the similar membrane investing many ova at certain stages of development."
    },
    "chorographical": {
        "wordtype": "a.",
        "definition": "Pertaining to chorography."
    },
    "chorography": {
        "wordtype": "n.",
        "definition": "the mapping or description of a region or district."
    },
    "choroidal": {
        "wordtype": "a.",
        "definition": "Pertaining to the choroid coat."
    },
    "chorus": {
        "wordtype": "n.",
        "definition": "A band of singers and dancers."
    },
    "chose": {
        "wordtype": "n.",
        "definition": "A thing; personal property."
    },
    "chrematistics": {
        "wordtype": "n.",
        "definition": "The science of wealth; the science, or a branch of the science, of political economy."
    },
    "chrism": {
        "wordtype": "n.",
        "definition": "The same as Chrisom."
    },
    "chrismation": {
        "wordtype": "n.",
        "definition": "The act of applying the chrism, or consecrated oil."
    },
    "christendom": {
        "wordtype": "n.",
        "definition": "The profession of faith in Christ by baptism; hence, the Christian religion, or the adoption of it."
    },
    "christianize": {
        "wordtype": "v. t.",
        "definition": "To make Christian; to convert to Christianity; as, to Christianize pagans."
    },
    "christly": {
        "wordtype": "a.",
        "definition": "Christlike."
    },
    "christology": {
        "wordtype": "n.",
        "definition": "A treatise on Christ; that department of theology which treats of the personality, attributes, or life of Christ."
    },
    "chromatin": {
        "wordtype": "n.",
        "definition": "Tissue which is capable of being stained by dyes."
    },
    "chromatype": {
        "wordtype": "n.",
        "definition": "A colored photographic picture taken upon paper made sensitive with potassium bichromate or some other salt of chromium."
    },
    "chromite": {
        "wordtype": "n.",
        "definition": "A black submetallic mineral consisting of oxide of chromium and iron; -- called also chromic iron."
    },
    "chromoblast": {
        "wordtype": "n.",
        "definition": "An embryonic cell which develops into a pigment cell."
    },
    "chromograph": {
        "wordtype": "n.",
        "definition": "An apparatus by which a number of copies of written matter, maps, plans, etc., can be made; -- called also hectograph."
    },
    "chromolithographer": {
        "wordtype": "n.",
        "definition": "One who is engaged in chromolithography."
    },
    "chromoplastid": {
        "wordtype": "n.",
        "definition": "A protoplasmic granule of some other color than green; -- also called chromoleucite."
    },
    "chromotype": {
        "wordtype": "n.",
        "definition": "A photographic picture in the natural colors."
    },
    "chromule": {
        "wordtype": "n.",
        "definition": "A general name for coloring matter of plants other than chlorophyll, especially that of petals."
    },
    "chronique": {
        "wordtype": "n.",
        "definition": "A chronicle."
    },
    "chronogram": {
        "wordtype": "n.",
        "definition": "The record or inscription made by a chronograph."
    },
    "chrysochlore": {
        "wordtype": "n.",
        "definition": "A South African mole of the genus Chrysochloris; the golden mole, the fur of which reflects brilliant metallic hues of green and gold."
    },
    "chrysography": {
        "wordtype": "n.",
        "definition": "The art of writing in letters of gold."
    },
    "chrysoidine": {
        "wordtype": "n.",
        "definition": "An artificial, yellow, crystalline dye, C6H5N2.C6H3(NH2)2. Also, one of a group of dyestuffs resembling chrysoidine proper."
    },
    "chthonic": {
        "wordtype": "a.",
        "definition": "Pertaining to the earth; earthy; as, chthonic religions."
    },
    "chud": {
        "wordtype": "v. t.",
        "definition": "To champ; to bite."
    },
    "churchless": {
        "wordtype": "a.",
        "definition": "Without a church."
    },
    "churchman": {
        "wordtype": "n.",
        "definition": "An ecclesiastic or clergyman."
    },
    "churchmanship": {
        "wordtype": "n.",
        "definition": "The state or quality of being a churchman; attachment to the church."
    },
    "churchwarden": {
        "wordtype": "n.",
        "definition": "A clay tobacco pipe, with a long tube."
    },
    "churchy": {
        "wordtype": "a.",
        "definition": "Relating to a church; unduly fond of church forms."
    },
    "churchyard": {
        "wordtype": "n.",
        "definition": "The ground adjoining a church, in which the dead are buried; a cemetery."
    },
    "churl": {
        "wordtype": "n.",
        "definition": "A rustic; a countryman or laborer."
    },
    "churning": {
        "wordtype": "n.",
        "definition": "The act of one who churns."
    },
    "chylaceous": {
        "wordtype": "a.",
        "definition": "Possessed of the properties of chyle; consisting of chyle."
    },
    "chyliferous": {
        "wordtype": "a.",
        "definition": "Transmitting or conveying chyle; as, chyliferous vessels."
    },
    "chylific": {
        "wordtype": "a.",
        "definition": "Chylifactive."
    },
    "chylopoetic": {
        "wordtype": "a.",
        "definition": "Concerned in the formation of chyle; as, the chylopoetic organs."
    },
    "chylous": {
        "wordtype": "a.",
        "definition": "Consisting of, or similar to, chyle."
    },
    "cibol": {
        "wordtype": "n.",
        "definition": "A perennial alliaceous plant (Allium fistulosum), sometimes called Welsh onion. Its fistular leaves areused in cookery."
    },
    "cicatricial": {
        "wordtype": "a.",
        "definition": "Relating to, or having the character of, a cicatrix."
    },
    "cicatricle": {
        "wordtype": "n.",
        "definition": "The germinating point in the embryo of a seed; the point in the yolk of an egg at which development begins."
    },
    "cicatrose": {
        "wordtype": "a.",
        "definition": "Full of scars."
    },
    "cicuta": {
        "wordtype": "n.",
        "definition": "a genus of poisonous umbelliferous plants, of which the water hemlock or cowbane is best known."
    },
    "cid": {
        "wordtype": "n.",
        "definition": "An epic poem, which celebrates the exploits of the Spanish national hero, Ruy Diaz."
    },
    "cider": {
        "wordtype": "n.",
        "definition": "The expressed juice of apples. It is used as a beverage, for making vinegar, and for other purposes."
    },
    "cierge": {
        "wordtype": "n.",
        "definition": "A wax candle used in religous rites."
    },
    "cilia": {
        "wordtype": "n. pl.",
        "definition": "The eyelashes."
    },
    "ciliary": {
        "wordtype": "a.",
        "definition": "Pertaining to or connected with the cilia in animal or vegetable organisms; as, ciliary motion."
    },
    "cilice": {
        "wordtype": "n.",
        "definition": "A kind of haircloth undergarment."
    },
    "cilician": {
        "wordtype": "a.",
        "definition": "Of or pertaining to Cilicia in Asia Minor."
    },
    "cineraria": {
        "wordtype": "n.",
        "definition": "A Linnaean genus of free-flowering composite plants, mostly from South Africadjective Several species are cultivated for ornament."
    },
    "cineritious": {
        "wordtype": "a.",
        "definition": "Like ashes; having the color of ashes, -- as the cortical substance of the brain."
    },
    "cinque": {
        "wordtype": "n.",
        "definition": "Five; the number five in dice or cards."
    },
    "cinquefoil": {
        "wordtype": "n.",
        "definition": "An ornamental foliation having five points or cups, used in windows, panels, etc."
    },
    "cipher": {
        "wordtype": "n.",
        "definition": "A character [0] which, standing by itself, expresses nothing, but when placed at the right hand of a whole number, increases its value tenfold."
    },
    "cipolin": {
        "wordtype": "n.",
        "definition": "A whitish marble, from Rome, containiing pale greenish zones. It consists of calcium carbonate, with zones and cloudings of talc."
    },
    "circ": {
        "wordtype": "n.",
        "definition": "An amphitheatrical circle for sports; a circus."
    },
    "circinate": {
        "wordtype": "a.",
        "definition": "Rolled together downward, the tip occupying the center; -- a term used in reference to foliation or leafing, as in ferns."
    },
    "circle": {
        "wordtype": "n.",
        "definition": "The line that bounds such a figure; a circumference; a ring."
    },
    "circled": {
        "wordtype": "a.",
        "definition": "Having the form of a circle; round."
    },
    "circuiter": {
        "wordtype": "n.",
        "definition": "One who travels a circuit, as a circuit judge."
    },
    "circuity": {
        "wordtype": "n.",
        "definition": "A going round in a circle; a course not direct; a roundabout way of proceeding."
    },
    "circulative": {
        "wordtype": "a.",
        "definition": "Promoting circulation; circulating."
    },
    "circulatorious": {
        "wordtype": "a.",
        "definition": "Travelling from house to house or from town to town; itinerant."
    },
    "circulet": {
        "wordtype": "n.",
        "definition": "A circlet."
    },
    "circuline": {
        "wordtype": "a.",
        "definition": "Proceeding in a circle; circular."
    },
    "circumagitate": {
        "wordtype": "v. t.",
        "definition": "To agitate on all sides."
    },
    "circumambiency": {
        "wordtype": "n.",
        "definition": "The act of surrounding or encompassing."
    },
    "circumduce": {
        "wordtype": "v. t.",
        "definition": "To declare elapsed, as the time allowed for introducing evidence."
    },
    "circumferential": {
        "wordtype": "a.",
        "definition": "Pertaining to the circumference; encompassing; encircling; circuitous."
    },
    "circumfluous": {
        "wordtype": "a.",
        "definition": "Flowing round; surrounding in the manner of a fluid."
    },
    "circumfuse": {
        "wordtype": "v. t.",
        "definition": "To pour round; to spread round."
    },
    "circumjacent": {
        "wordtype": "a.",
        "definition": "Lying round; bordering on every side."
    },
    "circumrotation": {
        "wordtype": "n.",
        "definition": "The act of rolling or revolving round, as a wheel; circumvolution; the state of being whirled round."
    },
    "circumspective": {
        "wordtype": "a.",
        "definition": "Looking around every way; cautious; careful of consequences; watchful of danger."
    },
    "circumstantiate": {
        "wordtype": "v. t.",
        "definition": "To place in particular circumstances; to invest with particular accidents or adjuncts."
    },
    "circumvent": {
        "wordtype": "v. t.",
        "definition": "To gain advantage over by arts, stratagem, or deception; to decieve; to delude; to get around."
    },
    "circumvolant": {
        "wordtype": "a.",
        "definition": "Flying around."
    },
    "circumvolve": {
        "wordtype": "v. t.",
        "definition": "To roll round; to cause to revolve; to put into a circular motion."
    },
    "cirque": {
        "wordtype": "n.",
        "definition": "A circle; a circus; a circular erection or arrangement of objects."
    },
    "cirriped": {
        "wordtype": "n.",
        "definition": "One of the Cirripediadjective"
    },
    "cirsoid": {
        "wordtype": "a.",
        "definition": "Varicose."
    },
    "cisatlantic": {
        "wordtype": "a.",
        "definition": "On this side of the Atlantic Ocean; -- used of the eastern or the western side, according to the standpoint of the writer."
    },
    "ciselure": {
        "wordtype": "n.",
        "definition": "The process of chasing on metals; also, the work thus chased."
    },
    "cisleithan": {
        "wordtype": "a.",
        "definition": "On the Austrian side of the river Leitha; Austrian."
    },
    "citable": {
        "wordtype": "a.",
        "definition": "Capable of being cited."
    },
    "citess": {
        "wordtype": "n.",
        "definition": "A city woman"
    },
    "citharistic": {
        "wordtype": "a.",
        "definition": "Pertaining, or adapted, to the citharadjective"
    },
    "citied": {
        "wordtype": "a.",
        "definition": "Belonging to, or resembling, a city."
    },
    "citified": {
        "wordtype": "a.",
        "definition": "Aping, or having, the manners of a city."
    },
    "civic": {
        "wordtype": "a.",
        "definition": "Relating to, or derived from, a city or citizen; relating to man as a member of society, or to civil affairs."
    },
    "civics": {
        "wordtype": "n.",
        "definition": "The science of civil government."
    },
    "civilian": {
        "wordtype": "n.",
        "definition": "A student of the civil law at a university or college."
    },
    "civilization": {
        "wordtype": "n.",
        "definition": "The act of civilizing, or the state of being civilized; national culture; refinement."
    },
    "civilize": {
        "wordtype": "v. t.",
        "definition": "To reclaim from a savage state; to instruct in the rules and customs of civilization; to educate; to refine."
    },
    "claimant": {
        "wordtype": "n.",
        "definition": "One who claims; one who asserts a right or title; a claimer."
    },
    "clairvoyance": {
        "wordtype": "n.",
        "definition": "A power, attributed to some persons while in a mesmeric state, of discering objects not perceptible by the senses in their normal condition."
    },
    "clairvoyant": {
        "wordtype": "a.",
        "definition": "Pertaining to clairvoyance; discerning objects while in a mesmeric state which are not present to the senses."
    },
    "clambake": {
        "wordtype": "n.",
        "definition": "The backing or steaming of clams on heated stones, between layers of seaweed; hence, a picnic party, gathered on such an occasion."
    },
    "clamjamphrie": {
        "wordtype": "n.",
        "definition": "Low, worthless people; the rabble."
    },
    "clamor": {
        "wordtype": "n.",
        "definition": "A great outcry or vociferation; loud and continued shouting or exclamation."
    },
    "clamp": {
        "wordtype": "n.",
        "definition": "Something rigid that holds fast or binds things together; a piece of wood or metal, used to hold two or more pieces together."
    },
    "clangorous": {
        "wordtype": "a.",
        "definition": "Making a clangor; having a ringing, metallic sound."
    },
    "clanship": {
        "wordtype": "n.",
        "definition": "A state of being united together as in a clan; an association under a chieftain."
    },
    "clap": {
        "wordtype": "v. t.",
        "definition": "To thrust, drive, put, or close, in a hasty or abrupt manner; -- often followed by to, into, on, or upon."
    },
    "clape": {
        "wordtype": "n.",
        "definition": "A bird; the flicker."
    },
    "clapperclaw": {
        "wordtype": "v. t.",
        "definition": "To fight and scratch."
    },
    "claptrap": {
        "wordtype": "n.",
        "definition": "A contrivance for clapping in theaters."
    },
    "claribella": {
        "wordtype": "n.",
        "definition": "A soft, sweet stop, or set of open wood pipes in an organ."
    },
    "clarino": {
        "wordtype": "n.",
        "definition": "A reed stop in an organ."
    },
    "clart": {
        "wordtype": "v. t.",
        "definition": "To daub, smear, or spread, as with mud, etc."
    },
    "clary": {
        "wordtype": "v. i.",
        "definition": "To make a loud or shrill noise."
    },
    "clasper": {
        "wordtype": "n.",
        "definition": "One who, or that which, clasps, as a tendril."
    },
    "clatterer": {
        "wordtype": "n.",
        "definition": "One who clatters."
    },
    "clavecin": {
        "wordtype": "n.",
        "definition": "The harpsichord."
    },
    "clavicorn": {
        "wordtype": "n.",
        "definition": "One of the Clavicornes."
    },
    "clavicornes": {
        "wordtype": "n. pl.",
        "definition": "A group of beetles having club-shaped antennae."
    },
    "clavicular": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the clavicle."
    },
    "claviform": {
        "wordtype": "a.",
        "definition": "Club-shaped; clavate."
    },
    "clay": {
        "wordtype": "n.",
        "definition": "Earth in general, as representing the elementary particles of the human body; hence, the human body as formed from such particles."
    },
    "clayish": {
        "wordtype": "a.",
        "definition": "Partaking of the nature of clay, or containing particles of it."
    },
    "cleaner": {
        "wordtype": "n.",
        "definition": "One who, or that which, cleans."
    },
    "cleaning": {
        "wordtype": "n.",
        "definition": "The act of making clean."
    },
    "cleanse": {
        "wordtype": "v. t.",
        "definition": "To render clean; to free from fith, pollution, infection, guilt, etc.; to clean."
    },
    "cleanser": {
        "wordtype": "n.",
        "definition": "One who, or that which, cleanses; a detergent."
    },
    "clearage": {
        "wordtype": "n.",
        "definition": "The act of removing anything; clearance."
    },
    "clearance": {
        "wordtype": "n.",
        "definition": "The act of clearing; as, to make a thorough clearance."
    },
    "cleavable": {
        "wordtype": "a.",
        "definition": "Capable of cleaving or being divided."
    },
    "cleavelandite": {
        "wordtype": "n.",
        "definition": "A variety of albite, white and lamellar in structure."
    },
    "cleaver": {
        "wordtype": "n.",
        "definition": "One who cleaves, or that which cleaves; especially, a butcher's instrument for cutting animal bodies into joints or pieces."
    },
    "cleftgraft": {
        "wordtype": "v. t.",
        "definition": "To ingraft by cleaving the stock and inserting a scion."
    },
    "clemency": {
        "wordtype": "n.",
        "definition": "Disposition to forgive and spare, as offenders; mildness of temper; gentleness; tenderness; mercy."
    },
    "clerk": {
        "wordtype": "n.",
        "definition": "A clergyman or ecclesiastic."
    },
    "cleromancy": {
        "wordtype": "n.",
        "definition": "A divination by throwing dice or casting lots."
    },
    "cliche": {
        "wordtype": "n.",
        "definition": "A stereotype plate or any similar reproduction of ornament, or lettering, in relief."
    },
    "click": {
        "wordtype": "v. i.",
        "definition": "To make a slight, sharp noise (or a succession of such noises), as by gentle striking; to tick."
    },
    "cliented": {
        "wordtype": "a.",
        "definition": "Supplied with clients."
    },
    "clientship": {
        "wordtype": "n.",
        "definition": "Condition of a client; state of being under the protection of a patron."
    },
    "clifted": {
        "wordtype": "a.",
        "definition": "Broken; fissured."
    },
    "climatal": {
        "wordtype": "a.",
        "definition": "Climatic."
    },
    "climatic": {
        "wordtype": "a.",
        "definition": "Of or pertaining to a climate; depending on, or limited by, a climate."
    },
    "climatical": {
        "wordtype": "a.",
        "definition": "Climatic."
    },
    "climatize": {
        "wordtype": "v. t. & i.",
        "definition": "To acclimate or become acclimated."
    },
    "climber": {
        "wordtype": "n.",
        "definition": "One who, or that which, climbs"
    },
    "clincher": {
        "wordtype": "n.",
        "definition": "One who, or that which, clinches; that which holds fast."
    },
    "clinometry": {
        "wordtype": "n.",
        "definition": "That art or operation of measuring the inclination of stratadjective"
    },
    "clip": {
        "wordtype": "v. t.",
        "definition": "To embrace, hence; to encompass."
    },
    "cloaca": {
        "wordtype": "n.",
        "definition": "A sewer; as, the Cloaca Maxima of Rome."
    },
    "clock": {
        "wordtype": "n.",
        "definition": "A watch, esp. one that strikes."
    },
    "clocklike": {
        "wordtype": "a.",
        "definition": "Like a clock or like clockwork; mechanical."
    },
    "clockwork": {
        "wordtype": "n.",
        "definition": "The machinery of a clock, or machinery resembling that of a clock; machinery which produces regularity of movement."
    },
    "clod": {
        "wordtype": "n.",
        "definition": "A lump or mass, especially of earth, turf, or clay."
    },
    "clodhopper": {
        "wordtype": "n.",
        "definition": "A rude, rustic fellow."
    },
    "cloister": {
        "wordtype": "v. t.",
        "definition": "An inclosed place."
    },
    "cloom": {
        "wordtype": "v. t.",
        "definition": "To close with glutinous matter."
    },
    "cloop": {
        "wordtype": "n.",
        "definition": "The sound made when a cork is forcibly drawn from a bottle."
    },
    "closehauled": {
        "wordtype": "a.",
        "definition": "Under way and moving as nearly as possible toward the direction from which the wind blows; -- said of a sailing vessel."
    },
    "closereefed": {
        "wordtype": "a.",
        "definition": "Having all the reefs taken in; -- said of a sail."
    },
    "clotbur": {
        "wordtype": "n.",
        "definition": "The burdock."
    },
    "clothesline": {
        "wordtype": "n.",
        "definition": "A rope or wire on which clothes are hung to dry."
    },
    "clotty": {
        "wordtype": "n.",
        "definition": "Full of clots, or clods."
    },
    "cloudlet": {
        "wordtype": "n.",
        "definition": "A little cloud."
    },
    "cloudy": {
        "wordtype": "n.",
        "definition": "Overcast or obscured with clouds; clouded; as, a cloudy sky."
    },
    "clown": {
        "wordtype": "n.",
        "definition": "A man of coarse nature and manners; an awkward fellow; an ill-bred person; a boor."
    },
    "cloy": {
        "wordtype": "v. t.",
        "definition": "To fill or choke up; to stop up; to clog."
    },
    "clubfooted": {
        "wordtype": "a.",
        "definition": "Having a clubfoot."
    },
    "clum": {
        "wordtype": "interj.",
        "definition": "Silence; hush."
    },
    "clumber": {
        "wordtype": "n.",
        "definition": "A kind of field spaniel, with short legs and stout body, which, unlike other spaniels, hunts silently."
    },
    "coachfellow": {
        "wordtype": "n.",
        "definition": "One of a pair of horses employed to draw a coach; hence (Fig.), a comrade."
    },
    "coaction": {
        "wordtype": "n.",
        "definition": "Force; compulsion, either in restraining or impelling."
    },
    "coadjutor": {
        "wordtype": "n.",
        "definition": "One who aids another; an assistant; a coworker."
    },
    "coadjuvancy": {
        "wordtype": "n.",
        "definition": "Joint help; cooperation."
    },
    "coalesce": {
        "wordtype": "n.",
        "definition": "To grow together; to unite by growth into one body; as, the parts separated by a wound coalesce."
    },
    "coalitionist": {
        "wordtype": "n.",
        "definition": "One who joins or promotes a coalition; one who advocates coalition."
    },
    "coarse": {
        "wordtype": "superl.",
        "definition": "Not refined; rough; rude; unpolished; gross; indelicate; as, coarse manners; coarse language."
    },
    "coastways": {
        "wordtype": "adv.",
        "definition": "By way of, or along, the coast."
    },
    "coaxation": {
        "wordtype": "n.",
        "definition": "The act of croaking."
    },
    "cobble": {
        "wordtype": "n.",
        "definition": "A cobblestone."
    },
    "cobblestone": {
        "wordtype": "n.",
        "definition": "A large pebble; a rounded stone not too large to be handled; a small boulder; -- used for paving streets and for other purposes."
    },
    "cobelligerent": {
        "wordtype": "a.",
        "definition": "Carrying on war in conjunction with another power."
    },
    "cobnut": {
        "wordtype": "n.",
        "definition": "A large roundish variety of the cultivated hazelnut."
    },
    "cobstone": {
        "wordtype": "n.",
        "definition": "Cobblestone."
    },
    "cobwebby": {
        "wordtype": "a.",
        "definition": "Abounding in cobwebs, or any fine web; resembling a cobweb."
    },
    "coccolite": {
        "wordtype": "n.",
        "definition": "A granular variety of pyroxene, green or white in color."
    },
    "coccyx": {
        "wordtype": "n.",
        "definition": "The end of the vertebral column beyond the sacrum in man and tailless monkeys. It is composed of several vertebrae more or less consolidated."
    },
    "cochleare": {
        "wordtype": "n.",
        "definition": "A spoon."
    },
    "cocoon": {
        "wordtype": "n.",
        "definition": "The case constructed by any insect to contain its larva or pupadjective"
    },
    "codetta": {
        "wordtype": "n.",
        "definition": "A short passage connecting two sections, but not forming part of either; a short codadjective"
    },
    "codfish": {
        "wordtype": "n.",
        "definition": "A kind of fish. Same as Cod."
    },
    "coefficacy": {
        "wordtype": "n.",
        "definition": "Joint efficacy."
    },
    "coehorn": {
        "wordtype": "n.",
        "definition": "A small bronze mortar mounted on a wooden block with handles, and light enough to be carried short distances by two men."
    },
    "coelacanth": {
        "wordtype": "a.",
        "definition": "Having hollow spines, as some ganoid fishes."
    },
    "coelia": {
        "wordtype": "n.",
        "definition": "A cavity."
    },
    "celiac": {
        "wordtype": "a.",
        "definition": "Relating to the abdomen, or to the cavity of the abdomen."
    },
    "coelospermous": {
        "wordtype": "a.",
        "definition": "Hollow-seeded; having the ventral face of the seedlike carpels incurved at the ends, as in coriander seed."
    },
    "coemption": {
        "wordtype": "n.",
        "definition": "The act of buying the whole quantity of any commodity."
    },
    "coequality": {
        "wordtype": "n.",
        "definition": "The state of being on an equality, as in rank or power."
    },
    "coercible": {
        "wordtype": "a.",
        "definition": "Capable of being coerced."
    },
    "coercive": {
        "wordtype": "a.",
        "definition": "Serving or intended to coerce; having power to constrain."
    },
    "coessential": {
        "wordtype": "a.",
        "definition": "Partaking of the same essence."
    },
    "coetanean": {
        "wordtype": "n.",
        "definition": "A person coetaneous with another; a contemporary."
    },
    "coexisting": {
        "wordtype": "a.",
        "definition": "Coexistent."
    },
    "coextend": {
        "wordtype": "v. t.",
        "definition": "To extend through the same space or time with another; to extend to the same degree."
    },
    "coffeehouse": {
        "wordtype": "n.",
        "definition": "A house of entertainment, where guests are supplied with coffee and other refreshments, and where men meet for conversation."
    },
    "cofferwork": {
        "wordtype": "n.",
        "definition": "Rubblework faced with stone."
    },
    "cog": {
        "wordtype": "v. t.",
        "definition": "To seduce, or draw away, by adulation, artifice, or falsehood; to wheedle; to cozen; to cheat."
    },
    "cogitate": {
        "wordtype": "v. i.",
        "definition": "To engage in continuous thought; to think."
    },
    "cognition": {
        "wordtype": "v. t.",
        "definition": "The act of knowing; knowledge; perception."
    },
    "cognitive": {
        "wordtype": "a.",
        "definition": "Knowing, or apprehending by the understanding; as, cognitive power."
    },
    "cognizee": {
        "wordtype": "n.",
        "definition": "One to whom a fine of land was acknowledged."
    },
    "coguardian": {
        "wordtype": "n.",
        "definition": "A joint guardian."
    },
    "cogue": {
        "wordtype": "n.",
        "definition": "A small wooden vessel; a pail."
    },
    "cogware": {
        "wordtype": "n.",
        "definition": "A coarse, narrow cloth, like frieze, used by the lower classes in the sixteenth century."
    },
    "cohabit": {
        "wordtype": "v.",
        "definition": "To inhabit or reside in company, or in the same place or country."
    },
    "cohibit": {
        "wordtype": "v. t.",
        "definition": "To restrain."
    },
    "cohibition": {
        "wordtype": "n.",
        "definition": "Hindrance; restraint."
    },
    "cohobate": {
        "wordtype": "v. t.",
        "definition": "To repeat the distillation of, pouring the liquor back upon the matter remaining in the vessel."
    },
    "coifed": {
        "wordtype": "a.",
        "definition": "Wearing a coif."
    },
    "coinage": {
        "wordtype": "v. t.",
        "definition": "The act or process of converting metal into money."
    },
    "coincidence": {
        "wordtype": "n.",
        "definition": "The condition of occupying the same place in space; as, the coincidence of circles, surfaces, etc."
    },
    "coincider": {
        "wordtype": "n.",
        "definition": "One who coincides with another in an opinion."
    },
    "cointension": {
        "wordtype": "n.",
        "definition": "The condition of being of equal in intensity; -- applied to relations; as, 3:6 and 6:12 are relations of cointension."
    },
    "coir": {
        "wordtype": "n.",
        "definition": "A material for cordage, matting, etc., consisting of the prepared fiber of the outer husk of the cocoanut."
    },
    "coistril": {
        "wordtype": "n.",
        "definition": "An inferior groom or lad employed by an esquire to carry the knight's arms and other necessaries."
    },
    "cojuror": {
        "wordtype": "n.",
        "definition": "One who swears to another's credibility."
    },
    "cokernut": {
        "wordtype": "n.",
        "definition": "The cocoanut."
    },
    "colaborer": {
        "wordtype": "n.",
        "definition": "One who labors with another; an associate in labor."
    },
    "colature": {
        "wordtype": "n.",
        "definition": "The process of straining; the matter strained; a strainer."
    },
    "colbertine": {
        "wordtype": "n.",
        "definition": "A kind of lace."
    },
    "colcothar": {
        "wordtype": "n.",
        "definition": "Polishing rouge; a reddish brown oxide of iron, used in polishing glass, and also as a pigment; -- called also crocus Martis."
    },
    "coldness": {
        "wordtype": "n.",
        "definition": "The state or quality of being cold."
    },
    "coleorhiza": {
        "wordtype": "n.",
        "definition": "A sheath in the embryo of grasses, inclosing the caulicle."
    },
    "collaboration": {
        "wordtype": "n.",
        "definition": "The act of working together; united labor."
    },
    "collaborator": {
        "wordtype": "n.",
        "definition": "An associate in labor, especially in literary or scientific labor."
    },
    "collagen": {
        "wordtype": "n.",
        "definition": "The chemical basis of ordinary connective tissue, as of tendons or sinews and of bone. On being boiled in water it becomes gelatin or glue."
    },
    "collatable": {
        "wordtype": "a.",
        "definition": "Capable of being collated."
    },
    "collation": {
        "wordtype": "v. t.",
        "definition": "The gathering and examination of sheets preparatory to binding."
    },
    "collative": {
        "wordtype": "a.",
        "definition": "Passing or held by collation; -- said of livings of which the bishop and the patron are the same person."
    },
    "collator": {
        "wordtype": "n.",
        "definition": "One who collates manuscripts, books, etc."
    },
    "colleague": {
        "wordtype": "n.",
        "definition": "A partner or associate in some civil or ecclesiastical office or employment. It is never used of partners in trade or manufactures."
    },
    "collect": {
        "wordtype": "v. t.",
        "definition": "To gather into one body or place; to assemble or bring together; to obtain by gathering."
    },
    "collectedly": {
        "wordtype": "adv.",
        "definition": "Composedly; coolly."
    },
    "collectible": {
        "wordtype": "a.",
        "definition": "Capable of being collected."
    },
    "collection": {
        "wordtype": "n.",
        "definition": "The act or process of collecting or of gathering; as, the collection of specimens."
    },
    "collectively": {
        "wordtype": "adv.",
        "definition": "In a mass, or body; in a collected state; in the aggregate; unitedly."
    },
    "collector": {
        "wordtype": "n.",
        "definition": "A compiler of books; one who collects scattered passages and puts them together in one book."
    },
    "collet": {
        "wordtype": "n.",
        "definition": "A small collar or neckband."
    },
    "colleterial": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the colleterium of insects."
    },
    "collide": {
        "wordtype": "v. i.",
        "definition": "To strike or dash against each other; to come into collision; to clash; as, the vessels collided; their interests collided."
    },
    "collier": {
        "wordtype": "n.",
        "definition": "One engaged in the business of digging mineral coal or making charcoal, or in transporting or dealing in coal."
    },
    "colliery": {
        "wordtype": "n.",
        "definition": "The place where coal is dug; a coal mine, and the buildings, etc., belonging to it."
    },
    "colligate": {
        "wordtype": "v. t.",
        "definition": "To tie or bind together."
    },
    "colligation": {
        "wordtype": "n.",
        "definition": "A binding together."
    },
    "collin": {
        "wordtype": "n.",
        "definition": "A very pure form of gelatin."
    },
    "collingual": {
        "wordtype": "a.",
        "definition": "Having, or pertaining to, the same language."
    },
    "colliquate": {
        "wordtype": "v. t. & i.",
        "definition": "To change from solid to fluid; to make or become liquid; to melt."
    },
    "colliquation": {
        "wordtype": "n.",
        "definition": "A melting together; the act of melting; fusion."
    },
    "collish": {
        "wordtype": "n.",
        "definition": "A tool to polish the edge of a sole."
    },
    "collitigant": {
        "wordtype": "a.",
        "definition": "Disputing or wrangling."
    },
    "collogue": {
        "wordtype": "v. i.",
        "definition": "To talk or confer secretly and confidentially; to converse, especially with evil intentions; to plot mischief."
    },
    "collophore": {
        "wordtype": "n.",
        "definition": "A suckerlike organ at the base of the abdomen of insects belonging to the Collemboladjective"
    },
    "colloquist": {
        "wordtype": "n.",
        "definition": "A speaker in a colloquy or dialogue."
    },
    "colloquy": {
        "wordtype": "n.",
        "definition": "Mutual discourse of two or more persons; conference; conversation."
    },
    "collusion": {
        "wordtype": "n.",
        "definition": "A secret agreement and cooperation for a fraudulent or deceitful purpose; a playing into each other's hands; deceit; fraud; cunning."
    },
    "colly": {
        "wordtype": "n.",
        "definition": "The black grime or soot of coal."
    },
    "collybist": {
        "wordtype": "n.",
        "definition": "A money changer."
    },
    "colonelcy": {
        "wordtype": "n.",
        "definition": "The office, rank, or commission of a colonel."
    },
    "colonial": {
        "wordtype": "a.",
        "definition": "Of or pertaining to a colony; as, colonial rights, traffic, wars."
    },
    "colonical": {
        "wordtype": "a.",
        "definition": "Of or pertaining to husbandmen."
    },
    "colonist": {
        "wordtype": "n.",
        "definition": "A member or inhabitant of a colony."
    },
    "colonizer": {
        "wordtype": "n.",
        "definition": "One who promotes or establishes a colony; a colonist."
    },
    "colophony": {
        "wordtype": "n.",
        "definition": "Rosin."
    },
    "color": {
        "wordtype": "n.",
        "definition": "Any hue distinguished from white or black."
    },
    "colorable": {
        "wordtype": "a.",
        "definition": "Specious; plausible; having an appearance of right or justice."
    },
    "colorate": {
        "wordtype": "a.",
        "definition": "Colored."
    },
    "coltsfoot": {
        "wordtype": "n.",
        "definition": "A perennial herb (Tussilago Farfara), whose leaves and rootstock are sometimes employed in medicine."
    },
    "columbia": {
        "wordtype": "n.",
        "definition": "America; the United States; -- a poetical appellation given in honor of Columbus, the discoverer."
    },
    "columbiferous": {
        "wordtype": "a.",
        "definition": "Producing or containing columbium."
    },
    "columella": {
        "wordtype": "n.",
        "definition": "An axis to which a carpel of a compound pistil may be attached, as in the case of the geranium; or which is left when a pod opens."
    },
    "column": {
        "wordtype": "n.",
        "definition": "A body of troops formed in ranks, one behind the other; -- contradistinguished from line. Compare Ploy, and Deploy."
    },
    "columnar": {
        "wordtype": "a.",
        "definition": "Formed in columns; having the form of a column or columns; like the shaft of a column."
    },
    "columnarity": {
        "wordtype": "n.",
        "definition": "The state or quality of being columnar."
    },
    "columnated": {
        "wordtype": "a.",
        "definition": "Having columns; as, columnated temples."
    },
    "coma": {
        "wordtype": "n.",
        "definition": "The envelope of a comet; a nebulous covering, which surrounds the nucleus or body of a comet."
    },
    "comatose": {
        "wordtype": "a.",
        "definition": "Relating to, or resembling, coma; drowsy; lethargic; as, comatose sleep; comatose fever."
    },
    "comatulid": {
        "wordtype": "n.",
        "definition": "Any crinoid of the genus Antedon or allied generadjective"
    },
    "comb": {
        "wordtype": "n.",
        "definition": "An instrument with teeth, for straightening, cleansing, and adjusting the hair, or for keeping it in place."
    },
    "combine": {
        "wordtype": "v. t.",
        "definition": "To bind; to hold by a moral tie."
    },
    "combust": {
        "wordtype": "a.",
        "definition": "Burnt; consumed."
    },
    "combustion": {
        "wordtype": "n.",
        "definition": "The state of burning."
    },
    "cometarium": {
        "wordtype": "n.",
        "definition": "An instrument, intended to represent the revolution of a comet round the sun."
    },
    "cometology": {
        "wordtype": "n.",
        "definition": "The department of astronomy relating to comets."
    },
    "comforter": {
        "wordtype": "n.",
        "definition": "One who administers comfort or consolation."
    },
    "comfrey": {
        "wordtype": "n.",
        "definition": "A rough, hairy, perennial plant of several species, of the genus Symphytum."
    },
    "comitial": {
        "wordtype": "a.",
        "definition": "Relating to the comitia, or popular assemblies of the Romans for electing officers and passing laws."
    },
    "comma": {
        "wordtype": "n.",
        "definition": "A character or point [,] marking the smallest divisions of a sentence, written or printed."
    },
    "command": {
        "wordtype": "v. t.",
        "definition": "To order with authority; to lay injunction upon; to direct; to bid; to charge."
    },
    "commaterial": {
        "wordtype": "a.",
        "definition": "Consisting of the same material."
    },
    "commemorable": {
        "wordtype": "a.",
        "definition": "Worthy to be commemorated."
    },
    "commencement": {
        "wordtype": "n.",
        "definition": "The first existence of anything; act or fact of commencing; rise; origin; beginning; start."
    },
    "commendation": {
        "wordtype": "n.",
        "definition": "The act of commending; praise; favorable representation in words; recommendation."
    },
    "commendator": {
        "wordtype": "n.",
        "definition": "One who holds a benefice in commendam; a commendatary."
    },
    "commingle": {
        "wordtype": "v. t. & i.",
        "definition": "To mingle together; to mix in one mass, or intimately; to blend."
    },
    "commiseration": {
        "wordtype": "n.",
        "definition": "The act of commiserating; sorrow for the wants, afflictions, or distresses of another; pity; compassion."
    },
    "commissaryship": {
        "wordtype": "n.",
        "definition": "The office or employment of a commissary."
    },
    "commissionary": {
        "wordtype": "a.",
        "definition": "Of, pertaining to, or conferring, a commission; conferred by a commission or warrant."
    },
    "commissural": {
        "wordtype": "a.",
        "definition": "Of or pertaining to a commissure."
    },
    "commissure": {
        "wordtype": "n.",
        "definition": "A joint, seam, or closure; the place where two bodies, or parts of a body, meet and unite; an interstice, cleft, or juncture."
    },
    "commit": {
        "wordtype": "v. t.",
        "definition": "To give in trust; to put into charge or keeping; to intrust; to consign; -- used with to, unto."
    },
    "commitment": {
        "wordtype": "n.",
        "definition": "The act of committing, or putting in charge, keeping, or trust; consignment; esp., the act of committing to prison."
    },
    "commodore": {
        "wordtype": "n.",
        "definition": "A captain commanding a squadron, or a division of a fleet, or having the temporary rank of rear admiral."
    },
    "commonage": {
        "wordtype": "n.",
        "definition": "The right of pasturing on a common; the right of using anything in common with others."
    },
    "commonition": {
        "wordtype": "n.",
        "definition": "Advice; warning; instruction."
    },
    "commonitive": {
        "wordtype": "a.",
        "definition": "Monitory."
    },
    "commotion": {
        "wordtype": "n.",
        "definition": "Disturbed or violent motion; agitation."
    },
    "communal": {
        "wordtype": "a.",
        "definition": "Pertaining to a commune."
    },
    "communistic": {
        "wordtype": "a.",
        "definition": "Of or pertaining to communism or communists; as, communistic theories."
    },
    "commutable": {
        "wordtype": "a.",
        "definition": "Capable of being commuted or interchanged."
    },
    "compactedness": {
        "wordtype": "n.",
        "definition": "A state of being compact."
    },
    "compacter": {
        "wordtype": "n.",
        "definition": "One who makes a compact."
    },
    "compaction": {
        "wordtype": "n.",
        "definition": "The act of making compact, or the state of being compact."
    },
    "compactness": {
        "wordtype": "n.",
        "definition": "The state or quality of being compact; close union of parts; density."
    },
    "compages": {
        "wordtype": "v. t.",
        "definition": "A system or structure of many parts united."
    },
    "compaginate": {
        "wordtype": "v. t.",
        "definition": "To unite or hold together; as, the side pieces compaginate the frame."
    },
    "company": {
        "wordtype": "n.",
        "definition": "The state of being a companion or companions; the act of accompanying; fellowship; companionship; society; friendly intercourse."
    },
    "comparative": {
        "wordtype": "a.",
        "definition": "Of or pertaining to comparison."
    },
    "compartment": {
        "wordtype": "n.",
        "definition": "One of the sections into which the hold of a ship is divided by water-tight bulkheads."
    },
    "compassionable": {
        "wordtype": "a.",
        "definition": "Deserving compassion or pity; pitiable."
    },
    "compassionately": {
        "wordtype": "adv.",
        "definition": "In a compassionate manner; mercifully."
    },
    "compatible": {
        "wordtype": "a.",
        "definition": "Capable of existing in harmony; congruous; suitable; not repugnant; -- usually followed by with."
    },
    "compatriotism": {
        "wordtype": "n.",
        "definition": "The condition of being compatriots."
    },
    "compear": {
        "wordtype": "v. i.",
        "definition": "To appear."
    },
    "compellably": {
        "wordtype": "adv.",
        "definition": "By compulsion."
    },
    "compend": {
        "wordtype": "n.",
        "definition": "A compendium; an epitome; a summary."
    },
    "compendiousness": {
        "wordtype": "n.",
        "definition": "The state or quality of being compendious."
    },
    "competitor": {
        "wordtype": "n.",
        "definition": "One who seeks what another seeks, or claims what another claims; one who competes; a rival."
    },
    "compinge": {
        "wordtype": "v. t.",
        "definition": "To compress; to shut up."
    },
    "complacently": {
        "wordtype": "adv.",
        "definition": "In a complacent manner."
    },
    "complain": {
        "wordtype": "v. i.",
        "definition": "To make a formal accusation; to make a charge."
    },
    "complainable": {
        "wordtype": "a.",
        "definition": "That may be complained of."
    },
    "completive": {
        "wordtype": "a.",
        "definition": "Making complete."
    },
    "complex": {
        "wordtype": "n.",
        "definition": "Composed of two or more parts; composite; not simple; as, a complex being; a complex ideadjective"
    },
    "complexioned": {
        "wordtype": "a.",
        "definition": "Having (such) a complexion; -- used in composition; as, a dark-complexioned or a ruddy-complexioned person."
    },
    "compliance": {
        "wordtype": "n.",
        "definition": "The act of complying; a yielding; as to a desire, demand, or proposal; concession; submission."
    },
    "compliancy": {
        "wordtype": "n.",
        "definition": "Compliance; disposition to yield to others."
    },
    "complot": {
        "wordtype": "n.",
        "definition": "A plotting together; a confederacy in some evil design; a conspiracy."
    },
    "complotment": {
        "wordtype": "n.",
        "definition": "A plotting together."
    },
    "comport": {
        "wordtype": "v. i.",
        "definition": "To bear or endure; to put up (with); as, to comport with an injury."
    },
    "comportable": {
        "wordtype": "a.",
        "definition": "Suitable; consistent."
    },
    "compositous": {
        "wordtype": "a.",
        "definition": "Belonging to the Compositae; composite."
    },
    "composture": {
        "wordtype": "n.",
        "definition": "Manure; compost."
    },
    "compotator": {
        "wordtype": "n.",
        "definition": "One who drinks with another."
    },
    "comprehensibility": {
        "wordtype": "n.",
        "definition": "The quality or state of being comprehensible; capability of being understood."
    },
    "comprehension": {
        "wordtype": "n.",
        "definition": "The act of comprehending, containing, or comprising; inclusion."
    },
    "compress": {
        "wordtype": "v. t.",
        "definition": "To embrace sexually."
    },
    "compressive": {
        "wordtype": "a.",
        "definition": "Compressing, or having power or tendency to compress; as, a compressive force."
    },
    "comprobate": {
        "wordtype": "v. i.",
        "definition": "To agree; to concur."
    },
    "compter": {
        "wordtype": "n.",
        "definition": "A counter."
    },
    "compulsive": {
        "wordtype": "a.",
        "definition": "Having power to compel; exercising or applying compulsion."
    },
    "compulsory": {
        "wordtype": "a.",
        "definition": "Having the power of compulsion; constraining."
    },
    "compunctionless": {
        "wordtype": "a.",
        "definition": "Without compunction."
    },
    "comradery": {
        "wordtype": "n.",
        "definition": "The spirit of comradeship; comradeship."
    },
    "comradeship": {
        "wordtype": "n.",
        "definition": "The state of being a comrade; intimate fellowship."
    },
    "conation": {
        "wordtype": "n.",
        "definition": "The power or act which directs or impels to effort of any kind, whether muscular or psychical."
    },
    "concaveness": {
        "wordtype": "n.",
        "definition": "Hollowness; concavity."
    },
    "concede": {
        "wordtype": "v. t.",
        "definition": "To yield or suffer; to surrender; to grant; as, to concede the point in question."
    },
    "concentration": {
        "wordtype": "n.",
        "definition": "The act or process of concentrating; the process of becoming concentrated, or the state of being concentrated; concentration."
    },
    "concentrativeness": {
        "wordtype": "n.",
        "definition": "The quality of concentrating."
    },
    "conceptacle": {
        "wordtype": "n.",
        "definition": "That in which anything is contained; a vessel; a receiver or receptacle."
    },
    "conceptible": {
        "wordtype": "a.",
        "definition": "Capable of being conceived; conceivable."
    },
    "conceptive": {
        "wordtype": "a.",
        "definition": "Capable of conceiving."
    },
    "conceptual": {
        "wordtype": "a.",
        "definition": "Pertaining to conception."
    },
    "conceptualist": {
        "wordtype": "n.",
        "definition": "One who maintains the theory of conceptualism."
    },
    "concerning": {
        "wordtype": "prep.",
        "definition": "Pertaining to; regarding; having relation to; respecting; as regards."
    },
    "concert": {
        "wordtype": "v. t.",
        "definition": "To plan together; to settle or adjust by conference, agreement, or consultation."
    },
    "concertion": {
        "wordtype": "n.",
        "definition": "Act of concerting; adjustment."
    },
    "concertmeister": {
        "wordtype": "n.",
        "definition": "The head violinist or leader of the strings in an orchestra; the sub-leader of the orchestra; concert master."
    },
    "concessory": {
        "wordtype": "a.",
        "definition": "Conceding; permissive."
    },
    "concha": {
        "wordtype": "n.",
        "definition": "The plain semidome of an apse; sometimes used for the entire apse."
    },
    "conciliation": {
        "wordtype": "n.",
        "definition": "The act or process of conciliating; the state of being conciliated."
    },
    "concionate": {
        "wordtype": "v. i.",
        "definition": "To preach."
    },
    "concitation": {
        "wordtype": "n.",
        "definition": "The act of stirring up, exciting, or agitating."
    },
    "conclamation": {
        "wordtype": "n.",
        "definition": "An outcry or shout of many together."
    },
    "concluder": {
        "wordtype": "n.",
        "definition": "One who concludes."
    },
    "conclusible": {
        "wordtype": "a.",
        "definition": "Demonstrable; determinable."
    },
    "conclusiveness": {
        "wordtype": "n.",
        "definition": "The quality of being conclusive; decisiveness."
    },
    "concolorous": {
        "wordtype": "a.",
        "definition": "Of the same color throughout."
    },
    "concordable": {
        "wordtype": "a.",
        "definition": "Capable of according; agreeing; harmonious."
    },
    "concrescible": {
        "wordtype": "a.",
        "definition": "Capable of being changed from a liquid to a solid state."
    },
    "concubinage": {
        "wordtype": "n.",
        "definition": "The cohabiting of a man and a woman who are not legally married; the state of being a concubine."
    },
    "concubinarian": {
        "wordtype": "a. & n.",
        "definition": "Concubinary."
    },
    "concur": {
        "wordtype": "v. i.",
        "definition": "To run together; to meet."
    },
    "concurrence": {
        "wordtype": "n.",
        "definition": "The act of concurring; a meeting or coming together; union; conjunction; combination."
    },
    "concussation": {
        "wordtype": "n.",
        "definition": "A violent shock or agitation."
    },
    "condemnatory": {
        "wordtype": "a.",
        "definition": "Condemning; containing or imposing condemnation or censure; as, a condemnatory sentence or decree."
    },
    "condemner": {
        "wordtype": "n.",
        "definition": "One who condemns or censures."
    },
    "condescendingly": {
        "wordtype": "adv.",
        "definition": "In a condescending manner."
    },
    "condescension": {
        "wordtype": "n.",
        "definition": "The act of condescending; voluntary descent from one's rank or dignity in intercourse with an inferior; courtesy toward inferiors."
    },
    "conditionality": {
        "wordtype": "n.",
        "definition": "The quality of being conditional, or limited; limitation by certain terms."
    },
    "condoler": {
        "wordtype": "n.",
        "definition": "One who condoles."
    },
    "condonation": {
        "wordtype": "n.",
        "definition": "The act of condoning or pardoning."
    },
    "conductress": {
        "wordtype": "n.",
        "definition": "A woman who leads or directs; a directress."
    },
    "conduit": {
        "wordtype": "n.",
        "definition": "A pipe, canal, channel, or passage for conveying water or fluid."
    },
    "conduplicate": {
        "wordtype": "a.",
        "definition": "Folded lengthwise along the midrib, the upper face being within; -- said of leaves or petals in vernation or aestivation."
    },
    "conduplication": {
        "wordtype": "n.",
        "definition": "A doubling together or folding; a duplication."
    },
    "condylome": {
        "wordtype": "n.",
        "definition": "A wartlike new growth on the outer skin or adjoining mucous membrane."
    },
    "confabulate": {
        "wordtype": "v. i.",
        "definition": "To talk familiarly together; to chat; to prattle."
    },
    "confectionery": {
        "wordtype": "n.",
        "definition": "Sweetmeats, in general; things prepared and sold by a confectioner; confections; candies."
    },
    "confectory": {
        "wordtype": "a.",
        "definition": "Pertaining to the art of making sweetmeats."
    },
    "confeder": {
        "wordtype": "v. i.",
        "definition": "To confederate."
    },
    "conference": {
        "wordtype": "n.",
        "definition": "The act of comparing two or more things together; comparison."
    },
    "confervoid": {
        "wordtype": "a.",
        "definition": "Like, or related to, the confervae."
    },
    "confess": {
        "wordtype": "v. t.",
        "definition": "To make acknowledgment or avowal in a matter pertaining to one's self; to acknowledge, own, or admit, as a crime, a fault, a debt."
    },
    "confessary": {
        "wordtype": "n.",
        "definition": "One who makes a confession."
    },
    "confessionalist": {
        "wordtype": "n.",
        "definition": "A priest hearing, or sitting to hear, confession."
    },
    "confessionist": {
        "wordtype": "n.",
        "definition": "One professing a certain faith."
    },
    "confessor": {
        "wordtype": "n.",
        "definition": "A priest who hears the confessions of others and is authorized to grant them absolution."
    },
    "confide": {
        "wordtype": "v. i.",
        "definition": "To put faith (in); to repose confidence; to trust; -- usually followed by in; as, the prince confides in his ministers."
    },
    "confidential": {
        "wordtype": "a.",
        "definition": "Enjoying, or treated with, confidence; trusted in; trustworthy; as, a confidential servant or clerk."
    },
    "confineless": {
        "wordtype": "a.",
        "definition": "Without limitation or end; boundless."
    },
    "confinity": {
        "wordtype": "n.",
        "definition": "Community of limits; contiguity."
    },
    "confirm": {
        "wordtype": "v. t.",
        "definition": "To make firm or firmer; to add strength to; to establish; as, health is confirmed by exercise."
    },
    "confirmative": {
        "wordtype": "a.",
        "definition": "Tending to confirm or establish."
    },
    "confirmator": {
        "wordtype": "n.",
        "definition": "One who, or that which, confirms; a confirmer."
    },
    "confirmedly": {
        "wordtype": "adv.",
        "definition": "With confirmation."
    },
    "confiscation": {
        "wordtype": "n.",
        "definition": "The act or process of taking property or condemning it to be taken, as forfeited to the public use."
    },
    "confitent": {
        "wordtype": "n.",
        "definition": "One who confesses his sins and faults."
    },
    "confiture": {
        "wordtype": "n.",
        "definition": "Composition; preparation, as of a drug, or confection; a sweetmeat."
    },
    "confixure": {
        "wordtype": "n.",
        "definition": "Act of fastening."
    },
    "conflagration": {
        "wordtype": "n.",
        "definition": "A fire extending to many objects, or over a large space; a general burning."
    },
    "conflicting": {
        "wordtype": "a.",
        "definition": "Being in conflict or collision, or in opposition; contending; contradictory; incompatible; contrary; opposing."
    },
    "conflictive": {
        "wordtype": "a.",
        "definition": "Tending to conflict; conflicting."
    },
    "confluence": {
        "wordtype": "n.",
        "definition": "The act of flowing together; the meeting or junction of two or more streams; the place of meeting."
    },
    "confluxible": {
        "wordtype": "a.",
        "definition": "Inclined to flow or run together."
    },
    "confocal": {
        "wordtype": "a.",
        "definition": "Having the same foci; as, confocal quadrics."
    },
    "conformable": {
        "wordtype": "a.",
        "definition": "Corresponding in form, character, opinions, etc.; similar; like; consistent; proper or suitable; -- usually followed by to."
    },
    "conformer": {
        "wordtype": "n.",
        "definition": "One who conforms; one who complies with established forms or doctrines."
    },
    "confrere": {
        "wordtype": "n.",
        "definition": "Fellow member of a fraternity; intimate associate."
    },
    "confusely": {
        "wordtype": "adv.",
        "definition": "Confusedly; obscurely."
    },
    "confutable": {
        "wordtype": "a.",
        "definition": "That may be confuted."
    },
    "confutant": {
        "wordtype": "n.",
        "definition": "One who undertakes to confute."
    },
    "confutement": {
        "wordtype": "n.",
        "definition": "Confutation."
    },
    "congener": {
        "wordtype": "n.",
        "definition": "A thing of the same genus, species, or kind; a thing allied in nature, character, or action."
    },
    "congenious": {
        "wordtype": "a.",
        "definition": "Congeneric."
    },
    "conglomerate": {
        "wordtype": "a.",
        "definition": "Gathered into a ball or a mass; collected together; concentrated; as, conglomerate rays of light."
    },
    "conglutinate": {
        "wordtype": "a.",
        "definition": "Glued together; united, as by some adhesive substance."
    },
    "conglutination": {
        "wordtype": "n.",
        "definition": "A gluing together; a joining by means of some tenacious substance; junction; union."
    },
    "conglutinative": {
        "wordtype": "a.",
        "definition": "Conglutinant."
    },
    "congratulatory": {
        "wordtype": "a.",
        "definition": "Expressive of sympathetic joy; as, a congratulatory letter."
    },
    "congreet": {
        "wordtype": "v. t.",
        "definition": "To salute mutually."
    },
    "congruence": {
        "wordtype": "n.",
        "definition": "Suitableness of one thing to another; agreement; consistency."
    },
    "congruity": {
        "wordtype": "n.",
        "definition": "The state or quality of being congruous; the relation or agreement between things; fitness; harmony; correspondence; consistency."
    },
    "conicality": {
        "wordtype": "n.",
        "definition": "Conicalness."
    },
    "conically": {
        "wordtype": "adv.",
        "definition": "In the form of a cone."
    },
    "conject": {
        "wordtype": "n.",
        "definition": "To throw together, or to throw."
    },
    "conjecturable": {
        "wordtype": "a.",
        "definition": "Capable of being conjectured or guessed."
    },
    "conjugial": {
        "wordtype": "a.",
        "definition": "Conjugal."
    },
    "conjunctiva": {
        "wordtype": "n.",
        "definition": "The mucous membrane which covers the external surface of the ball of the eye and the inner surface of the lids; the conjunctival membrane."
    },
    "conjunctive": {
        "wordtype": "a.",
        "definition": "Serving to unite; connecting together."
    },
    "conjunctiveness": {
        "wordtype": "n.",
        "definition": "The state or quality of being conjunctive."
    },
    "conjunctivitis": {
        "wordtype": "n.",
        "definition": "Inflammation of the conjunctivadjective"
    },
    "conjuncture": {
        "wordtype": "n.",
        "definition": "The act of joining, or state of being joined; union; connection; combination."
    },
    "conjuration": {
        "wordtype": "n.",
        "definition": "The act of calling or summoning by a sacred name, or in solemn manner; the act of binding by an oath; an earnest entreaty; adjuration."
    },
    "conjure": {
        "wordtype": "v. t.",
        "definition": "To call on or summon by a sacred name or in solemn manner; to implore earnestly; to adjure."
    },
    "connaturalize": {
        "wordtype": "v. t.",
        "definition": "To bring to the same nature as something else; to adapt."
    },
    "connaturalness": {
        "wordtype": "n.",
        "definition": "Participation of the same nature; natural union."
    },
    "connectedly": {
        "wordtype": "adv.",
        "definition": "In a connected manner."
    },
    "connivance": {
        "wordtype": "n.",
        "definition": "Intentional failure or forbearance to discover a fault or wrongdoing; voluntary oversight; passive consent or cooperation."
    },
    "connive": {
        "wordtype": "v. i.",
        "definition": "To open and close the eyes rapidly; to wink."
    },
    "connote": {
        "wordtype": "v. t.",
        "definition": "To mark along with; to suggest or indicate as additional; to designate by implication; to include in the meaning; to imply."
    },
    "connubiality": {
        "wordtype": "n.",
        "definition": "The quality of being connubial; something characteristics of the conjugal state; an expression of connubial tenderness."
    },
    "conoid": {
        "wordtype": "n.",
        "definition": "Anything that has a form resembling that of a cone."
    },
    "conqueror": {
        "wordtype": "n.",
        "definition": "One who conquers."
    },
    "consanguined": {
        "wordtype": "a.",
        "definition": "Of kin blood; related."
    },
    "consanguineous": {
        "wordtype": "a.",
        "definition": "Of the same blood; related by birth; descended from the same parent or ancestor."
    },
    "conscientious": {
        "wordtype": "a.",
        "definition": "Characterized by a regard to conscience; conformed to the dictates of conscience; -- said of actions."
    },
    "conscionable": {
        "wordtype": "a.",
        "definition": "Governed by, or according to, conscience; reasonable; just."
    },
    "conscious": {
        "wordtype": "a.",
        "definition": "Possessing the faculty of knowing one's own thoughts or mental operations."
    },
    "consciously": {
        "wordtype": "adv.",
        "definition": "In a conscious manner; with knowledge of one's own mental operations or actions."
    },
    "consciousness": {
        "wordtype": "n.",
        "definition": "The state of being conscious; knowledge of one's own existence, condition, sensations, mental operations, acts, etc."
    },
    "conscription": {
        "wordtype": "n.",
        "definition": "An enrolling or registering."
    },
    "consecrate": {
        "wordtype": "a.",
        "definition": "Consecrated; devoted; dedicated; sacred."
    },
    "consecrator": {
        "wordtype": "n.",
        "definition": "One who consecrates; one who performs the rites by which a person or thing is devoted or dedicated to sacred purposes."
    },
    "consecution": {
        "wordtype": "n.",
        "definition": "A following, or sequel; actual or logical dependence."
    },
    "consecutive": {
        "wordtype": "a.",
        "definition": "Following as a consequence or result; actually or logically dependent; consequential; succeeding."
    },
    "consentaneity": {
        "wordtype": "n.",
        "definition": "Mutual agreement."
    },
    "consentant": {
        "wordtype": "a.",
        "definition": "Consenting."
    },
    "consenter": {
        "wordtype": "a.",
        "definition": "One who consents."
    },
    "consequence": {
        "wordtype": "n.",
        "definition": "That which follows something on which it depends; that which is produced by a cause; a result."
    },
    "conservancy": {
        "wordtype": "n.",
        "definition": "Conservation, as from injury, defilement, or irregular use."
    },
    "conservativeness": {
        "wordtype": "a.",
        "definition": "The quality of being conservative."
    },
    "conservatory": {
        "wordtype": "a.",
        "definition": "Having the quality of preserving from loss, decay, or injury."
    },
    "conserve": {
        "wordtype": "v. t.",
        "definition": "To keep in a safe or sound state; to save; to preserve; to protect."
    },
    "considerance": {
        "wordtype": "n.",
        "definition": "Act of considering; consideration."
    },
    "considerer": {
        "wordtype": "n.",
        "definition": "One who considers; a man of reflection; a thinker."
    },
    "consignificant": {
        "wordtype": "a.",
        "definition": "Having joint or equal signification; synonymous."
    },
    "consimility": {
        "wordtype": "n.",
        "definition": "Common resemblance."
    },
    "consistent": {
        "wordtype": "a.",
        "definition": "Possessing firmness or fixedness; firm; hard; solid."
    },
    "consistently": {
        "wordtype": "adv.",
        "definition": "In a consistent manner."
    },
    "consistorian": {
        "wordtype": "a.",
        "definition": "Pertaining to a Presbyterian consistory; -- a contemptuous term of 17th century controversy."
    },
    "consolable": {
        "wordtype": "a.",
        "definition": "Capable of receiving consolation."
    },
    "consonantal": {
        "wordtype": "a.",
        "definition": "Of the nature of a consonant; pertaining to consonants."
    },
    "conspecific": {
        "wordtype": "a.",
        "definition": "Of the same species."
    },
    "conspiracy": {
        "wordtype": "n.",
        "definition": "A combination of men for an evil purpose; an agreement, between two or more persons, to commit a crime in concert, as treason; a plot."
    },
    "conspiringly": {
        "wordtype": "adv.",
        "definition": "In the manner of a conspirator; by conspiracy."
    },
    "constableship": {
        "wordtype": "n.",
        "definition": "The office or functions of a constable."
    },
    "constabless": {
        "wordtype": "n.",
        "definition": "The wife of a constable."
    },
    "constant": {
        "wordtype": "v. t.",
        "definition": "Firm; solid; fixed; immovable; -- opposed to fluid."
    },
    "constellate": {
        "wordtype": "v. i. ",
        "definition": "To join luster; to shine with united radiance, or one general light."
    },
    "constituent": {
        "wordtype": "a.",
        "definition": "Serving to form, compose, or make up; elemental; component."
    },
    "constitutional": {
        "wordtype": "a.",
        "definition": "In accordance with, or authorized by, the constitution of a state or a society; as, constitutional reforms."
    },
    "constitutionalism": {
        "wordtype": "n.",
        "definition": "The theory, principles, or authority of constitutional government; attachment or adherence to a constitution or constitutional government."
    },
    "constrain": {
        "wordtype": "v. t.",
        "definition": "To secure by bonds; to chain; to bond or confine; to hold tightly; to constringe."
    },
    "constrainedly": {
        "wordtype": "adv.",
        "definition": "By constraint or compulsion; in a constrained manner."
    },
    "constrainer": {
        "wordtype": "n.",
        "definition": "One who constrains."
    },
    "constrict": {
        "wordtype": "v. t.",
        "definition": "To draw together; to render narrower or smaller; to bind; to cramp; to contract or cause to shrink."
    },
    "constriction": {
        "wordtype": "n.",
        "definition": "The act of constricting by means of some inherent power or by movement or change in the thing itself, as distinguished from compression."
    },
    "constringent": {
        "wordtype": "a.",
        "definition": "Having the quality of contracting, binding, or compressing."
    },
    "constructor": {
        "wordtype": "n.",
        "definition": "A constructer."
    },
    "consubstantiate": {
        "wordtype": "v. t. ",
        "definition": "To cause to unite, or to regard as united, in one common substance or nature."
    },
    "consuetudinal": {
        "wordtype": "a.",
        "definition": "According to custom; customary; usual."
    },
    "consul": {
        "wordtype": "n.",
        "definition": "One of the two chief magistrates of the republic."
    },
    "consulship": {
        "wordtype": "n.",
        "definition": "The office of a consul; consulate."
    },
    "consulting": {
        "wordtype": "a.",
        "definition": "That consults."
    },
    "consume": {
        "wordtype": "v. t.",
        "definition": "To destroy, as by decomposition, dissipation, waste, or fire; to use up; to expend; to waste; to burn up; to eat up; to devour."
    },
    "consumedly": {
        "wordtype": "adv.",
        "definition": "Excessively."
    },
    "consumingly": {
        "wordtype": "adv.",
        "definition": "In a consuming manner."
    },
    "consummate": {
        "wordtype": "a.",
        "definition": "Carried to the utmost extent or degree; of the highest quality; complete; perfect."
    },
    "contact": {
        "wordtype": "n.",
        "definition": "A close union or junction of bodies; a touching or meeting."
    },
    "contagiousness": {
        "wordtype": "n.",
        "definition": "Quality of being contagious."
    },
    "containment": {
        "wordtype": "n.",
        "definition": "That which is contained; the extent; the substance."
    },
    "contaminable": {
        "wordtype": "a.",
        "definition": "Capable of being contaminated."
    },
    "contaminate": {
        "wordtype": "v. t.",
        "definition": "To soil, stain, or corrupt by contact; to tarnish; to sully; to taint; to pollute; to defile."
    },
    "contemner": {
        "wordtype": "n.",
        "definition": "One who contemns; a despiser; a scorner."
    },
    "contemperate": {
        "wordtype": "v. t.",
        "definition": "To temper; to moderate."
    },
    "contemplation": {
        "wordtype": "n.",
        "definition": "The act of the mind in considering with attention; continued attention of the mind to a particular subject; meditation; musing; study."
    },
    "contemporaneity": {
        "wordtype": "n.",
        "definition": "The state of being contemporaneous."
    },
    "contemptible": {
        "wordtype": "a.",
        "definition": "Worthy of contempt; deserving of scorn or disdain; mean; vile; despicable."
    },
    "contented": {
        "wordtype": "a.",
        "definition": "Content; easy in mind; satisfied; quiet; willing."
    },
    "contentious": {
        "wordtype": "a.",
        "definition": "Fond of contention; given to angry debate; provoking dispute or contention; quarrelsome."
    },
    "contentless": {
        "wordtype": "a.",
        "definition": "Discontented; dissatisfied."
    },
    "contesseration": {
        "wordtype": "n.",
        "definition": "An assemblage; a collection; harmonious union."
    },
    "contestable": {
        "wordtype": "a.",
        "definition": "Capable of being contested; debatable."
    },
    "contestant": {
        "wordtype": "n.",
        "definition": "One who contests; an opponent; a litigant; a disputant; one who claims that which has been awarded to another."
    },
    "contextural": {
        "wordtype": "a.",
        "definition": "Pertaining to contexture or arrangement of parts; producing contexture; interwoven."
    },
    "contiguate": {
        "wordtype": "a.",
        "definition": "Contiguous; touching."
    },
    "continent": {
        "wordtype": "a.",
        "definition": "Serving to restrain or limit; restraining; opposing."
    },
    "continently": {
        "wordtype": "adv.",
        "definition": "In a continent manner; chastely; moderately; temperately."
    },
    "contingency": {
        "wordtype": "n.",
        "definition": "Union or connection; the state of touching or contact."
    },
    "contingent": {
        "wordtype": "a.",
        "definition": "Possible, or liable, but not certain, to occur; incidental; casual."
    },
    "continuance": {
        "wordtype": "n.",
        "definition": "A holding on, or remaining in a particular state; permanence, as of condition, habits, abode, etc.; perseverance; constancy; duration; stay."
    },
    "continuator": {
        "wordtype": "n.",
        "definition": "One who, or that which, continues; esp., one who continues a series or a work; a continuer."
    },
    "continuedly": {
        "wordtype": "adv.",
        "definition": "Continuously."
    },
    "contorted": {
        "wordtype": "a.",
        "definition": "Twisted, or twisted together."
    },
    "contortion": {
        "wordtype": "n.",
        "definition": "A twisting; a writhing; wry motion; a twist; as, the contortion of the muscles of the face."
    },
    "contertionist": {
        "wordtype": "n.",
        "definition": "One who makes or practices contortions."
    },
    "contour": {
        "wordtype": "n.",
        "definition": "The outline of a figure or body, or the line or lines representing such an outline; the line that bounds; periphery."
    },
    "contrabandist": {
        "wordtype": "n.",
        "definition": "One who traffics illegally; a smuggler."
    },
    "contractibility": {
        "wordtype": "n.",
        "definition": "Capability of being contracted; quality of being contractible; as, the contractibility and dilatability of air."
    },
    "contradance": {
        "wordtype": "n.",
        "definition": "A dance in which the partners are arranged face to face, or in opposite lines."
    },
    "contraindicate": {
        "wordtype": "v. t.",
        "definition": "To indicate, as by a symptom, some method of treatment contrary to that which the general tenor of the case would seem to require."
    },
    "contramure": {
        "wordtype": "n.",
        "definition": "An outer wall."
    },
    "contrariously": {
        "wordtype": "adv.",
        "definition": "Contrarily; oppositely."
    },
    "contraversion": {
        "wordtype": "n.",
        "definition": "A turning to the opposite side; antistrophe."
    },
    "contributory": {
        "wordtype": "n.",
        "definition": "One who contributes, or is liable to be called upon to contribute, as toward the discharge of a common indebtedness."
    },
    "contrite": {
        "wordtype": "a.",
        "definition": "Thoroughly bruised or broken."
    },
    "contrive": {
        "wordtype": "v. t.",
        "definition": "To form by an exercise of ingenuity; to devise; to invent; to design; to plan."
    },
    "controversially": {
        "wordtype": "adv.",
        "definition": "In a controversial manner."
    },
    "controvertible": {
        "wordtype": "a.",
        "definition": "Capable of being controverted; disputable; admitting of question."
    },
    "convalesce": {
        "wordtype": "v. i.",
        "definition": "To recover health and strength gradually, after sickness or weakness; as, a patient begins to convalesce."
    },
    "convalescent": {
        "wordtype": "a.",
        "definition": "Recovering from sickness or debility; partially restored to health or strength."
    },
    "convallarin": {
        "wordtype": "n.",
        "definition": "A white, crystalline glucoside, of an irritating taste, extracted from the convallaria or lily of the valley."
    },
    "conventical": {
        "wordtype": "a.",
        "definition": "Of or from, or pertaining to, a convent."
    },
    "conventionalizw": {
        "wordtype": "v. t.",
        "definition": "To make conventional; to bring under the influence of, or cause to conform to, conventional rules; to establish by usage."
    },
    "conventionalily": {
        "wordtype": "adv.",
        "definition": "In a conventional manner."
    },
    "conventual": {
        "wordtype": "a.",
        "definition": "Of or pertaining to a convent; monastic."
    },
    "converge": {
        "wordtype": "v. i.",
        "definition": "To tend to one point; to incline and approach nearer together; as, lines converge."
    },
    "conversably": {
        "wordtype": "adv.",
        "definition": "In a conversable manner."
    },
    "conversationism": {
        "wordtype": "n.",
        "definition": "A word or phrase used in conversation; a colloquialism."
    },
    "converse": {
        "wordtype": "v. i.",
        "definition": "To keep company; to hold intimate intercourse; to commune; -- followed by with."
    },
    "convert": {
        "wordtype": "v. t.",
        "definition": "To cause to turn; to turn."
    },
    "convexed": {
        "wordtype": "a.",
        "definition": "Made convex; protuberant in a spherical form."
    },
    "conviciate": {
        "wordtype": "v. i.",
        "definition": "To utter reproaches; to raise a clamor; to rail."
    },
    "convicious": {
        "wordtype": "a.",
        "definition": "Expressing reproach; abusive; railing; taunting."
    },
    "convictism": {
        "wordtype": "n.",
        "definition": "The policy or practice of transporting convicts to penal settlements."
    },
    "convince": {
        "wordtype": "v. t.",
        "definition": "To overpower; to overcome; to subdue or master."
    },
    "convincement": {
        "wordtype": "n.",
        "definition": "Act of convincing, or state of being convinced; conviction."
    },
    "convincible": {
        "wordtype": "a.",
        "definition": "Capable of being convinced or won over."
    },
    "convive": {
        "wordtype": "v. i.",
        "definition": "To feast together; to be convivial."
    },
    "convivialist": {
        "wordtype": "n.",
        "definition": "A person of convivial habits."
    },
    "convivially": {
        "wordtype": "adv.",
        "definition": "In a convivial manner."
    },
    "convocation": {
        "wordtype": "n.",
        "definition": "The act of calling or assembling by summons."
    },
    "convoke": {
        "wordtype": "v. t.",
        "definition": "To call together; to summon to meet; to assemble by summons."
    },
    "convulsive": {
        "wordtype": "a.",
        "definition": "Producing, or attended with, convulsions or spasms; characterized by convulsions; convulsionary."
    },
    "convulsively": {
        "wordtype": "adv.",
        "definition": "in a convulsive manner."
    },
    "conylene": {
        "wordtype": "n.",
        "definition": "An oily substance, C8H14, obtained from several derivatives of conine."
    },
    "cooee": {
        "wordtype": "n.",
        "definition": "A peculiar whistling sound made by the Australian aborigenes as a call or signal."
    },
    "cookee": {
        "wordtype": "n.",
        "definition": "A female cook."
    },
    "cookery": {
        "wordtype": "n.",
        "definition": "The art or process of preparing food for the table, by dressing, compounding, and the application of heat."
    },
    "cookshop": {
        "wordtype": "n.",
        "definition": "An eating house."
    },
    "cooler": {
        "wordtype": "n.",
        "definition": "That which cools, or abates heat or excitement."
    },
    "coolness": {
        "wordtype": "n.",
        "definition": "The state of being cool; a moderate degree of cold; a moderate degree, or a want, of passion; want of ardor, zeal, or affection; calmness."
    },
    "coomb": {
        "wordtype": "n.",
        "definition": "A dry measure of four bushels, or half a quarter."
    },
    "coontie": {
        "wordtype": "n.",
        "definition": "A cycadaceous plant of Florida and the West Indies, the Zamia integrifolia, from the stems of which a kind of sago is prepared."
    },
    "cooper": {
        "wordtype": "n.",
        "definition": "One who makes barrels, hogsheads, casks, etc."
    },
    "coordination": {
        "wordtype": "n.",
        "definition": "The state of being coordinate, or of equal rank, dignity, power, etc."
    },
    "coordinative": {
        "wordtype": "a.",
        "definition": "Expressing coordination."
    },
    "coparcenary": {
        "wordtype": "n.",
        "definition": "Partnership in inheritance; joint heirship; joint right of succession to an inheritance."
    },
    "coparcener": {
        "wordtype": "n.",
        "definition": "One who has an equal portion with others of an inheritance."
    },
    "copartment": {
        "wordtype": "n.",
        "definition": "A compartment."
    },
    "copped": {
        "wordtype": "a.",
        "definition": "Rising to a point or head; conical; pointed; crested."
    },
    "coppery": {
        "wordtype": "a.",
        "definition": "Mixed with copper; containing copper, or made of copper; like copper."
    },
    "copple": {
        "wordtype": "n.",
        "definition": "Something rising in a conical shape; specifically, a hill rising to a point."
    },
    "copplestone": {
        "wordtype": "n.",
        "definition": "A cobblestone."
    },
    "copra": {
        "wordtype": "n.",
        "definition": "The dried meat of the cocoanut, from which cocoanut oil is expressed."
    },
    "coprolitic": {
        "wordtype": "a.",
        "definition": "Containing, pertaining to, or of the nature of, coprolites."
    },
    "coptic": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the Copts."
    },
    "copygraph": {
        "wordtype": "n.",
        "definition": "A contrivance for producing manifold copies of a writing or drawing."
    },
    "copying": {
        "wordtype": "a. & n.",
        "definition": "From Copy, verb"
    },
    "coquetry": {
        "wordtype": "n.",
        "definition": "Attempts to attract admiration, notice, or love, for the mere gratification of vanity; trifling in love."
    },
    "cora": {
        "wordtype": "n.",
        "definition": "The Arabian gazelle (Gazella Arabica), found from persia to North Africadjective"
    },
    "coral": {
        "wordtype": "n.",
        "definition": "The hard parts or skeleton of various Anthozoa, and of a few Hydrozoadjective Similar structures are also formed by some Bryozoadjective"
    },
    "corallinite": {
        "wordtype": "n.",
        "definition": "A fossil coralline."
    },
    "coranach": {
        "wordtype": "n.",
        "definition": "A lamentation for the dead; a dirge."
    },
    "corbel": {
        "wordtype": "n.",
        "definition": "A bracket supporting a superincumbent object, or receiving the spring of an arch. Corbels were employed largely in Gothic architecture."
    },
    "cordelle": {
        "wordtype": "n.",
        "definition": "A twisted cord; a tassel."
    },
    "cordially": {
        "wordtype": "adv.",
        "definition": "In a cordial manner."
    },
    "cordonnet": {
        "wordtype": "n.",
        "definition": "Doubled and twisted thread, made of coarse silk, and used for tassels, fringes, etc."
    },
    "cordwainer": {
        "wordtype": "n.",
        "definition": "A worker in cordwain, or cordovan leather; a shoemaker."
    },
    "corinth": {
        "wordtype": "n.",
        "definition": "A city of Greece, famed for its luxury and extravagance."
    },
    "cork": {
        "wordtype": "n.",
        "definition": "A stopper for a bottle or cask, cut out of cork."
    },
    "corky": {
        "wordtype": "a.",
        "definition": "Consisting of, or like, cork; dry shriveled up."
    },
    "cormoraut": {
        "wordtype": "a.",
        "definition": "Ravenous; voracious."
    },
    "cornage": {
        "wordtype": "n.",
        "definition": "Anancient tenure of land, which obliged the tenant to give notice of an invasion by blowing a horn."
    },
    "corncutter": {
        "wordtype": "n.",
        "definition": "A machine for cutting up stalks of corn for food of cattle."
    },
    "corndodger": {
        "wordtype": "n.",
        "definition": "A cake made of the meal of Indian corn, wrapped in a covering of husks or paper, and baked under the embers."
    },
    "cornemuse": {
        "wordtype": "n.",
        "definition": "A wind instrument nearly identical with the bagpipe."
    },
    "cornered": {
        "wordtype": "p. a.",
        "definition": "1 Having corners or angles."
    },
    "cornerwise": {
        "wordtype": "adv.",
        "definition": "With the corner in front; diagonally; not square."
    },
    "cornet": {
        "wordtype": "n.",
        "definition": "An obsolete rude reed instrument (Ger. Zinken), of the oboe family."
    },
    "cornfloor": {
        "wordtype": "n.",
        "definition": "A thrashing floor."
    },
    "cornific": {
        "wordtype": "a.",
        "definition": "Producing horns; forming horn."
    },
    "cornification": {
        "wordtype": "n.",
        "definition": "Conversion into, or formation of, horn; a becoming like horn."
    },
    "cornified": {
        "wordtype": "a.",
        "definition": "Converted into horn; horny."
    },
    "cornin": {
        "wordtype": "n.",
        "definition": "A bitter principle obtained from dogwood (Cornus florida), as a white crystalline substance; -- called also cornic acid."
    },
    "corniplume": {
        "wordtype": "n.",
        "definition": "A hornlike tuft of feathers on the head of some birds."
    },
    "cornist": {
        "wordtype": "n.",
        "definition": "A performer on the cornet or horn."
    },
    "cornloft": {
        "wordtype": "n.",
        "definition": "A loft for corn; a granary."
    },
    "cornuted": {
        "wordtype": "a.",
        "definition": "Bearing horns; horned; horn-shaped."
    },
    "cornute": {
        "wordtype": "v. t.",
        "definition": "To bestow horns upon; to make a cuckold of; to cuckold."
    },
    "cornutor": {
        "wordtype": "n.",
        "definition": "A cuckold maker."
    },
    "corol": {
        "wordtype": "n.",
        "definition": "A corolladjective"
    },
    "corollated": {
        "wordtype": "a.",
        "definition": "Having a corolla or corollas; like a corolladjective"
    },
    "corona": {
        "wordtype": "n.",
        "definition": "A crown or garland bestowed among the Romans as a reward for distinguished services."
    },
    "coronal": {
        "wordtype": "a.",
        "definition": "Of or pertaining to a corona (in any of the senses)."
    },
    "corporale": {
        "wordtype": "a.",
        "definition": "A fine linen cloth, on which the sacred elements are consecrated in the eucharist, or with which they are covered; a communion cloth."
    },
    "corporas": {
        "wordtype": "n.",
        "definition": "The corporal, or communion cloth."
    },
    "corporeal": {
        "wordtype": "a.",
        "definition": "Having a body; consisting of, or pertaining to, a material body or substance; material; -- opposed to spiritual or immaterial."
    },
    "corporealist": {
        "wordtype": "n.",
        "definition": "One who denies the reality of spiritual existences; a materialist."
    },
    "corpus": {
        "wordtype": "n.",
        "definition": "A body, living or dead; the corporeal substance of a thing."
    },
    "corpuscule": {
        "wordtype": "n.",
        "definition": "A corpuscle."
    },
    "corradiation": {
        "wordtype": "n.",
        "definition": "A conjunction or concentration of rays in one point."
    },
    "correctly": {
        "wordtype": "adv.",
        "definition": "In a correct manner; exactly; acurately; without fault or error."
    },
    "correctory": {
        "wordtype": "a.",
        "definition": "Containing or making correction; corrective."
    },
    "corrigibility": {
        "wordtype": "n.",
        "definition": "Quality of being corrigible; capability of being corrected; corrigibleness."
    },
    "corroborant": {
        "wordtype": "a.",
        "definition": "Strengthening; supporting; corroborating."
    },
    "corrode": {
        "wordtype": "v. t.",
        "definition": "To consume; to wear away; to prey upon; to impair."
    },
    "corrumpable": {
        "wordtype": "a.",
        "definition": "Corruptible."
    },
    "corrupter": {
        "wordtype": "n.",
        "definition": "One who corrupts; one who vitiates or taints; as, a corrupter of morals."
    },
    "corsage": {
        "wordtype": "n.",
        "definition": "The waist or bodice of a lady's dress; as, a low corsage."
    },
    "corselet": {
        "wordtype": "n.",
        "definition": "The thorax of an insect."
    },
    "coruscate": {
        "wordtype": "v. i.",
        "definition": "To glitter in flashes; to flash."
    },
    "corven": {
        "wordtype": "",
        "definition": "past participle of Carve."
    },
    "corvetto": {
        "wordtype": "n.",
        "definition": "A curvet."
    },
    "corvine": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the crow; crowlike."
    },
    "corybant": {
        "wordtype": "n.",
        "definition": "One of the priests of Cybele in Phrygiadjective The rites of the Corybants were accompanied by wild music, dancing, etc."
    },
    "cosentient": {
        "wordtype": "a.",
        "definition": "Perceiving together."
    },
    "cosinage": {
        "wordtype": "n.",
        "definition": "Collateral relationship or kindred by blood; consanguinity."
    },
    "cosmographically": {
        "wordtype": "adv.",
        "definition": "In a cosmographic manner; in accordance with cosmography."
    },
    "cosmopolitical": {
        "wordtype": "a.",
        "definition": "Having the character of a cosmopolite."
    },
    "cosmothetic": {
        "wordtype": "a.",
        "definition": "Assuming or positing the actual existence or reality of the physical or external world."
    },
    "coss": {
        "wordtype": "n.",
        "definition": "A Hindoo measure of distance, varying from one and a half to two English miles."
    },
    "cossas": {
        "wordtype": "n.",
        "definition": "Plain India muslin, of various qualities and widths."
    },
    "cosset": {
        "wordtype": "n.",
        "definition": "A lamb reared without the aid of the dam. Hence: A pet, in general."
    },
    "cossical": {
        "wordtype": "a.",
        "definition": "Of or relating to algebra; as, cossic numbers, or the cossic art."
    },
    "costal": {
        "wordtype": "a.",
        "definition": "Pertaining to the ribs or the sides of the body; as, costal nerves."
    },
    "costated": {
        "wordtype": "a.",
        "definition": "Having ribs, or the appearance of ribs; (Bot.) having one or more longitudinal ribs."
    },
    "coster": {
        "wordtype": "n.",
        "definition": "One who hawks about fruit, green vegetables, fish, etc."
    },
    "costermonger": {
        "wordtype": "n.",
        "definition": "An apple seller; a hawker of, or dealer in, any kind of fruit or vegetables; a fruiterer."
    },
    "costless": {
        "wordtype": "a.",
        "definition": "Costing nothing."
    },
    "cosupreme": {
        "wordtype": "n.",
        "definition": "A partaker of supremacy; one jointly supreme."
    },
    "cosurety": {
        "wordtype": "n.",
        "definition": "One who is surety with another."
    },
    "cot": {
        "wordtype": "n.",
        "definition": "A small house; a cottage or hut."
    },
    "cote": {
        "wordtype": "n.",
        "definition": "A cottage or hut."
    },
    "cotemporaneous": {
        "wordtype": "a.",
        "definition": "Living or being at the same time; contemporaneous."
    },
    "cotenant": {
        "wordtype": "n.",
        "definition": "A tenant in common, or a joint tenant."
    },
    "cotrustee": {
        "wordtype": "n.",
        "definition": "A joint trustee."
    },
    "cottonary": {
        "wordtype": "a.",
        "definition": "Relating to, or composed of, cotton; cottony."
    },
    "cottrel": {
        "wordtype": "n.",
        "definition": "A trammel, or hook to support a pot over a fire."
    },
    "cotyle": {
        "wordtype": "n.",
        "definition": "A cuplike cavity or organ. Same as Acetabulum."
    },
    "cotyledon": {
        "wordtype": "n.",
        "definition": "One of the patches of villi found in some forms of placentadjective"
    },
    "couch": {
        "wordtype": "v. t.",
        "definition": "To lay upon a bed or other resting place."
    },
    "coulee": {
        "wordtype": "n.",
        "definition": "A stream"
    },
    "counsel": {
        "wordtype": "n.",
        "definition": "Interchange of opinions; mutual advising; consultation."
    },
    "countercast": {
        "wordtype": "n.",
        "definition": "A trick; a delusive contrivance."
    },
    "counterdraw": {
        "wordtype": "v. t.",
        "definition": "To copy, as a design or painting, by tracing with a pencil on oiled paper, or other transparent substance."
    },
    "counterfesance": {
        "wordtype": "a.",
        "definition": "The act of forging; forgery."
    },
    "counterflory": {
        "wordtype": "a.",
        "definition": "Adorned with flowers (usually fleurs-de-lis) so divided that the tops appear on one side and the bottoms on the others; -- said of any ordinary."
    },
    "counterirritate": {
        "wordtype": "v. t.",
        "definition": "To produce counter irritation in; to treat with one morbid process for the purpose of curing another."
    },
    "countermure": {
        "wordtype": "n.",
        "definition": "A wall raised behind another, to supply its place when breached or destroyed. [R.] Cf. Contramure."
    },
    "counterpart": {
        "wordtype": "n.",
        "definition": "A part corresponding to another part; anything which answers, or corresponds, to another; a copy; a duplicate; a facsimile."
    },
    "counterseal": {
        "wordtype": "v. t.",
        "definition": "To seal or ratify with another or others."
    },
    "countershaft": {
        "wordtype": "n.",
        "definition": "An intermediate shaft; esp., one which receives motion from a line shaft in a factory and transmits it to a machine."
    },
    "counterstand": {
        "wordtype": "n.",
        "definition": "Resistance; opposition; a stand against."
    },
    "counterstroke": {
        "wordtype": "n.",
        "definition": "A stroke or blow in return."
    },
    "counterwheel": {
        "wordtype": "v. t.",
        "definition": "To cause to wheel or turn in an opposite direction."
    },
    "countreplete": {
        "wordtype": "v. t.",
        "definition": "To counterplead."
    },
    "countretaille": {
        "wordtype": "n.",
        "definition": "A counter tally; correspondence (in sound)."
    },
    "countryman": {
        "wordtype": "n.",
        "definition": "An inhabitant or native of a region."
    },
    "coupable": {
        "wordtype": "a.",
        "definition": "Culpable."
    },
    "coupe": {
        "wordtype": "n.",
        "definition": "The front compartment of a French diligence; also, the front compartment (usually for three persons) of a car or carriage on British railways."
    },
    "coupee": {
        "wordtype": "n.",
        "definition": "A motion in dancing, when one leg is a little bent, and raised from the floor, and with the other a forward motion is made."
    },
    "coupler": {
        "wordtype": "n.",
        "definition": "One who couples; that which couples, as a link, ring, or shackle, to connect cars."
    },
    "couplet": {
        "wordtype": "n.",
        "definition": "Two taken together; a pair or couple; especially two lines of verse that rhyme with each other."
    },
    "courage": {
        "wordtype": "n.",
        "definition": "The heart; spirit; temper; disposition."
    },
    "courant": {
        "wordtype": "a.",
        "definition": "Represented as running; -- said of a beast borne in a coat of arms."
    },
    "courier": {
        "wordtype": "n.",
        "definition": "A messenger sent with haste to convey letters or dispatches, usually on public business."
    },
    "courtier": {
        "wordtype": "n.",
        "definition": "One who is in attendance at the court of a prince; one who has an appointment at court."
    },
    "courtiery": {
        "wordtype": "n.",
        "definition": "The manners of a courtier; courtliness."
    },
    "courtly": {
        "wordtype": "a.",
        "definition": "Relating or belonging to a court."
    },
    "cousinly": {
        "wordtype": "a.",
        "definition": "Like or becoming a cousin."
    },
    "cousinry": {
        "wordtype": "n.",
        "definition": "A body or collection of cousins; the whole number of persons who stand in the relation of cousins to a given person or persons."
    },
    "cousinship": {
        "wordtype": "n.",
        "definition": "The relationship of cousins; state of being cousins; cousinhood."
    },
    "couteau": {
        "wordtype": "n.",
        "definition": "A knife; a dagger."
    },
    "covellite": {
        "wordtype": "n.",
        "definition": "A native sulphide of copper, occuring in masses of a dark blue color; -- hence called indigo copper."
    },
    "covenable": {
        "wordtype": "a.",
        "definition": "Fit; proper; suitable."
    },
    "coventry": {
        "wordtype": "n.",
        "definition": "A town in the county of Warwick, England."
    },
    "cover": {
        "wordtype": "v. t.",
        "definition": "To overspread the surface of (one thing) with another; as, to cover wood with paint or lacquer; to cover a table with a cloth."
    },
    "coverchief": {
        "wordtype": "n.",
        "definition": "A covering for the head."
    },
    "coverlet": {
        "wordtype": "n.",
        "definition": "The uppermost cover of a bed or of any piece of furniture."
    },
    "covet": {
        "wordtype": "v. t.",
        "definition": "To wish for with eagerness; to desire possession of; -- used in a good sense."
    },
    "covetise": {
        "wordtype": "v. t.",
        "definition": "Avarice."
    },
    "covetously": {
        "wordtype": "adv.",
        "definition": "In a covetous manner."
    },
    "covetousness": {
        "wordtype": "n.",
        "definition": "Strong desire."
    },
    "covey": {
        "wordtype": "n.",
        "definition": "A company; a bevy; as, a covey of girls."
    },
    "cowardice": {
        "wordtype": "n.",
        "definition": "Want of courage to face danger; extreme timidity; pusillanimity; base fear of danger or hurt; lack of spirit."
    },
    "cowardie": {
        "wordtype": "n.",
        "definition": "Cowardice."
    },
    "cowhide": {
        "wordtype": "n.",
        "definition": "The hide of a cow."
    },
    "cowquake": {
        "wordtype": "n.",
        "definition": "A genus of plants (Briza); quaking grass."
    },
    "cowslipped": {
        "wordtype": "a.",
        "definition": "Adorned with cowslips."
    },
    "coxcombly": {
        "wordtype": "a.",
        "definition": "like a coxcomb."
    },
    "coz": {
        "wordtype": "n.",
        "definition": "A contraction of cousin."
    },
    "cozily": {
        "wordtype": "adv.",
        "definition": "Snugly; comfortably."
    },
    "cozy": {
        "wordtype": "superl.",
        "definition": "Snug; comfortable; easy; contented."
    },
    "crabeater": {
        "wordtype": "n.",
        "definition": "The cobiadjective"
    },
    "crache": {
        "wordtype": "v.",
        "definition": "To scratch."
    },
    "crackle": {
        "wordtype": "v. i.",
        "definition": "To make slight cracks; to make small, sharp, sudden noises, rapidly or frequently repeated; to crepitate; as, burning thorns crackle."
    },
    "crackling": {
        "wordtype": "n.",
        "definition": "The making of small, sharp cracks or reports, frequently repeated."
    },
    "cracksman": {
        "wordtype": "n.",
        "definition": "A burglar."
    },
    "crag": {
        "wordtype": "n.",
        "definition": "A steep, rugged rock; a rough, broken cliff, or point of a rock, on a ledge."
    },
    "cragginess": {
        "wordtype": "n.",
        "definition": "The state of being craggy."
    },
    "cramp": {
        "wordtype": "n.",
        "definition": "That which confines or contracts; a restraint; a shackle; a hindrance."
    },
    "cranage": {
        "wordtype": "n.",
        "definition": "The liberty of using a crane, as for loading and unloading vessels."
    },
    "cranioclast": {
        "wordtype": "n.",
        "definition": "An instrument for crushing the head of a fetus, to facilitate delivery in difficult eases."
    },
    "crankiness": {
        "wordtype": "n.",
        "definition": "Crankness."
    },
    "crapaudine": {
        "wordtype": "n.",
        "definition": "Turning on pivots at the top and bottom; -- said of a door."
    },
    "crapulous": {
        "wordtype": "a.",
        "definition": "Surcharged with liquor; sick from excessive indulgence in liquor; drunk; given to excesses."
    },
    "crash": {
        "wordtype": "v. t. ",
        "definition": "To break in pieces violently; to dash together with noise and violence."
    },
    "crataegus": {
        "wordtype": "n.",
        "definition": "A genus of small, hardy trees, including the hawthorn, much used for ornamental purposes."
    },
    "crate": {
        "wordtype": "n.",
        "definition": "A large basket or hamper of wickerwork, used for the transportation of china, crockery, and similar wares."
    },
    "crater": {
        "wordtype": "n.",
        "definition": "The pit left by the explosion of a mine."
    },
    "craw": {
        "wordtype": "n.",
        "definition": "The crop of a bird."
    },
    "crazy": {
        "wordtype": "a.",
        "definition": "Characterized by weakness or feebleness; decrepit; broken; falling to decay; shaky; unsafe."
    },
    "creak": {
        "wordtype": "v. i.",
        "definition": "To make a prolonged sharp grating or squeaking sound, as by the friction of hard substances; as, shoes creak."
    },
    "creant": {
        "wordtype": "a.",
        "definition": "Creative; formative."
    },
    "creasy": {
        "wordtype": "a.",
        "definition": "Full of creases."
    },
    "create": {
        "wordtype": "a.",
        "definition": "Created; composed; begotten."
    },
    "cretor": {
        "wordtype": "n.",
        "definition": "One who creates, produces, or constitutes. Specifically, the Supreme Being."
    },
    "creatress": {
        "wordtype": "n.",
        "definition": "She who creates."
    },
    "cratureless": {
        "wordtype": "a.",
        "definition": "Without created beings; alone."
    },
    "creatureship": {
        "wordtype": "n.",
        "definition": "The condition of being a creature."
    },
    "creaturize": {
        "wordtype": "v. t.",
        "definition": "To make like a creature; to degrade"
    },
    "crebricostate": {
        "wordtype": "a.",
        "definition": "Marked with closely set ribs or ridges."
    },
    "credibility": {
        "wordtype": "n.",
        "definition": "The quality of being credible; credibleness; as, the credibility of facts; the credibility of witnesses."
    },
    "credibly": {
        "wordtype": "adv.",
        "definition": "In a manner inducing belief; as, I have been credibly informed of the event."
    },
    "creditable": {
        "wordtype": "a.",
        "definition": "Worthy of belief."
    },
    "creekfish": {
        "wordtype": "n.",
        "definition": "The chub sucker."
    },
    "creepie": {
        "wordtype": "n.",
        "definition": "A low stool."
    },
    "creeping": {
        "wordtype": "a.",
        "definition": "Crawling, or moving close to the ground."
    },
    "cremaillere": {
        "wordtype": "n.",
        "definition": "An indented or zigzaged line of intrenchment."
    },
    "cremasteric": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the cremaster; as, the cremasteric artery."
    },
    "cremation": {
        "wordtype": "n.",
        "definition": "A burning; esp., the act or practice of cremating the dead."
    },
    "crenature": {
        "wordtype": "n.",
        "definition": "A rounded tooth or notch of a crenate leaf, or any part that is crenate; -- called also crenelle."
    },
    "crenelation": {
        "wordtype": "n.",
        "definition": "The act of crenelating, or the state of being crenelated; an indentation or an embrasure."
    },
    "crepitant": {
        "wordtype": "a.",
        "definition": "Having a crackling sound; crackling; rattling."
    },
    "crepusculous": {
        "wordtype": "a.",
        "definition": "Pertaining to twilight; glimmering; hence, imperfectly clear or luminous."
    },
    "crepusculine": {
        "wordtype": "a.",
        "definition": "Crepuscular."
    },
    "crescentic": {
        "wordtype": "a.",
        "definition": "Crescent-shaped."
    },
    "crescive": {
        "wordtype": "a.",
        "definition": "Increasing; growing."
    },
    "cress": {
        "wordtype": "n.",
        "definition": "A plant of various species, chiefly cruciferous. The leaves have a moderately pungent taste, and are used as a salad and antiscorbutic."
    },
    "cresting": {
        "wordtype": "n.",
        "definition": "An ornamental finish on the top of a wall or ridge of a roof."
    },
    "cretan": {
        "wordtype": "a.",
        "definition": "Pertaining to Crete, or Candiadjective"
    },
    "cretic": {
        "wordtype": "n.",
        "definition": "A poetic foot, composed of one short syllable between two long ones (- / -)."
    },
    "cretinous": {
        "wordtype": "a.",
        "definition": "Having the characteristics of a cretin."
    },
    "crevice": {
        "wordtype": "n.",
        "definition": "A narrow opening resulting from a split or crack or the separation of a junction; a cleft; a fissure; a rent."
    },
    "crewelwork": {
        "wordtype": "n.",
        "definition": "Embroidery in crewels, commonly done upon some plain material, such as linen."
    },
    "cribbing": {
        "wordtype": "n.",
        "definition": "The act of inclosing or confining in a crib or in close quarters."
    },
    "cribration": {
        "wordtype": "n.",
        "definition": "The act or process of separating the finer parts of drugs from the coarser by sifting."
    },
    "cricket": {
        "wordtype": "n.",
        "definition": "A low stool."
    },
    "criminalist": {
        "wordtype": "n.",
        "definition": "One versed in criminal law."
    },
    "crinal": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the hair."
    },
    "crincum": {
        "wordtype": "n.",
        "definition": "A twist or bend; a turn; a whimsey."
    },
    "crined": {
        "wordtype": "a.",
        "definition": "Having the hair of a different tincture from the rest of the body; as, a charge crined of a red tincture."
    },
    "crinet": {
        "wordtype": "n.",
        "definition": "A very fine, hairlike feather."
    },
    "cringeling": {
        "wordtype": "n.",
        "definition": "One who cringes meanly; a fawner."
    },
    "crinite": {
        "wordtype": "a.",
        "definition": "Having the appearance of a tuft of hair; having a hairlike tail or train."
    },
    "crinitory": {
        "wordtype": "a.",
        "definition": "Of or relating to hair; as, a crinitory covering."
    },
    "crinkled": {
        "wordtype": "a.",
        "definition": "Having short bends, turns, or wrinkles; wrinkled; wavy; zigzag."
    },
    "crinosity": {
        "wordtype": "n.",
        "definition": "Hairiness."
    },
    "criosphinx": {
        "wordtype": "n.",
        "definition": "A sphinx with the head of a ram."
    },
    "cripply": {
        "wordtype": "a.",
        "definition": "Lame; disabled; in a crippled condition."
    },
    "crisp": {
        "wordtype": "a.",
        "definition": "Curling in stiff curls or ringlets; as, crisp hair."
    },
    "crispation": {
        "wordtype": "n.",
        "definition": "The act or process of curling, or the state of being curled."
    },
    "crispature": {
        "wordtype": "n.",
        "definition": "The state of being crispate."
    },
    "crisply": {
        "wordtype": "adv.",
        "definition": "In a crisp manner."
    },
    "crispness": {
        "wordtype": "n.",
        "definition": "The state or quality of being crisp."
    },
    "cristate": {
        "wordtype": "a.",
        "definition": "Crested."
    },
    "critic": {
        "wordtype": "n.",
        "definition": "One who passes a rigorous or captious judgment; one who censures or finds fault; a harsh examiner or judge; a caviler; a carper."
    },
    "critique": {
        "wordtype": "n.",
        "definition": "The art of criticism."
    },
    "croaker": {
        "wordtype": "n.",
        "definition": "One who croaks, murmurs, grumbles, or complains unreasonably; one who habitually forebodes evil."
    },
    "crocin": {
        "wordtype": "n.",
        "definition": "The coloring matter of Chinese yellow pods, the fruit of Gardenia grandifloradjective"
    },
    "crocker": {
        "wordtype": "n.",
        "definition": "A potter."
    },
    "crocket": {
        "wordtype": "n.",
        "definition": "An ornament often resembling curved and bent foliage, projecting from the sloping edge of a gable, spire, etc."
    },
    "crocodile": {
        "wordtype": "n.",
        "definition": "A fallacious dilemma, mythically supposed to have been first used by a crocodile."
    },
    "croconate": {
        "wordtype": "n.",
        "definition": "A salt formed by the union of croconic acid with a base."
    },
    "crofter": {
        "wordtype": "n.",
        "definition": "One who rents and tills a small farm or helding; as, the crofters of Scotland."
    },
    "croise": {
        "wordtype": "n.",
        "definition": "A pilgrim bearing or wearing a cross."
    },
    "cromorna": {
        "wordtype": "n.",
        "definition": "A certain reed stop in the organ, of a quality of tone resembling that of the oboe."
    },
    "crone": {
        "wordtype": "n.",
        "definition": "An old ewe."
    },
    "cronel": {
        "wordtype": "n.",
        "definition": "The iron head of a tilting spear."
    },
    "crookack": {
        "wordtype": "a.",
        "definition": "Hunched."
    },
    "crookedly": {
        "wordtype": "adv.",
        "definition": "In a curved or crooked manner; in a perverse or untoward manner."
    },
    "crooken": {
        "wordtype": "v. t.",
        "definition": "To make crooked."
    },
    "cropper": {
        "wordtype": "n.",
        "definition": "One that crops."
    },
    "cross": {
        "wordtype": "n.",
        "definition": "Affiction regarded as a test of patience or virtue; trial; disappointment; opposition; misfortune."
    },
    "crossbite": {
        "wordtype": "n.",
        "definition": "A deception; a cheat."
    },
    "crossbred": {
        "wordtype": "a.",
        "definition": "Produced by mixing distinct breeds; mongrel."
    },
    "crosspiece": {
        "wordtype": "n.",
        "definition": "A piece of any structure which is fitted or framed crosswise."
    },
    "crossroad": {
        "wordtype": "n.",
        "definition": "A road that crosses another; an obscure road intersecting or avoiding the main road."
    },
    "crossrow": {
        "wordtype": "n.",
        "definition": "The alphabet; -- called also Christcross-row."
    },
    "crotalaria": {
        "wordtype": "n.",
        "definition": "A genus of leguminous plants; rattlebox."
    },
    "crotaphite": {
        "wordtype": "n.",
        "definition": "The temple or temporal fossadjective Also used adjectively."
    },
    "crotaphitic": {
        "wordtype": "n.",
        "definition": "Pertaining to the temple; temporal."
    },
    "crotched": {
        "wordtype": "a.",
        "definition": "Having a crotch; forked."
    },
    "crotchet": {
        "wordtype": "n.",
        "definition": "A forked support; a crotch."
    },
    "croton": {
        "wordtype": "n.",
        "definition": "A genus of euphorbiaceous plants belonging to tropical countries."
    },
    "croup": {
        "wordtype": "n.",
        "definition": "The hinder part or buttocks of certain quadrupeds, especially of a horse; hence, the place behind the saddle."
    },
    "croustade": {
        "wordtype": "n.",
        "definition": "Bread baked in a mold, and scooped out, to serve minces upon."
    },
    "crowberry": {
        "wordtype": "n.",
        "definition": "A heathlike plant of the genus Empetrum, and its fruit, a black, scarcely edible berry; -- also called crakeberry."
    },
    "crowfoot": {
        "wordtype": "n.",
        "definition": "The genus Ranunculus, of many species; some are common weeds, others are flowering plants of considerable beauty."
    },
    "crowstone": {
        "wordtype": "n.",
        "definition": "The top stone of the gable end of a house."
    },
    "crucifix": {
        "wordtype": "n.",
        "definition": "The cross or religion of Christ."
    },
    "crucify": {
        "wordtype": "v. t.",
        "definition": "To fasten to a cross; to put to death by nailing the hands and feet to a cross or gibbet."
    },
    "crude": {
        "wordtype": "superl.",
        "definition": "Unripe; not mature or perfect; immature."
    },
    "crudity": {
        "wordtype": "n.",
        "definition": "The condition of being crude; rawness."
    },
    "cruelty": {
        "wordtype": "n.",
        "definition": "The attribute or quality of being cruel; a disposition to give unnecessary pain or suffering to others; inhumanity; barbarity."
    },
    "cruise": {
        "wordtype": "v. i.",
        "definition": "To sail back and forth on the ocean; to sail, as for the potection of commerce, in search of an enemy, for plunder, or for pleasure."
    },
    "crull": {
        "wordtype": "a.",
        "definition": "Curly; curled."
    },
    "crumpet": {
        "wordtype": "n.",
        "definition": "A kind of large, thin muffin or cake, light and spongy, and cooked on a griddle or spider."
    },
    "cruorin": {
        "wordtype": "n.",
        "definition": "The coloring matter of the blood in the living animal; haemoglobin."
    },
    "crusading": {
        "wordtype": "a.",
        "definition": "Of or pertaining to a crusade; as, a crusading spirit."
    },
    "crush": {
        "wordtype": "v. t.",
        "definition": "To reduce to fine particles by pounding or grinding; to comminute; as, to crush quartz."
    },
    "crust": {
        "wordtype": "n.",
        "definition": "The hard exterior or surface of bread, in distinction from the soft part or crumb; or a piece of bread grown dry or hard."
    },
    "crustacean": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the Crustacea; crustaceous."
    },
    "crustaceous": {
        "wordtype": "a.",
        "definition": "Belonging to the Crustacea; crustacean."
    },
    "crustal": {
        "wordtype": "a.",
        "definition": "Relating to a crust."
    },
    "crustalogist": {
        "wordtype": "n.",
        "definition": "One versed in crustalogy."
    },
    "crusted": {
        "wordtype": "a.",
        "definition": "Incrusted; covered with, or containing, crust; as, old, crusted port wine."
    },
    "crustific": {
        "wordtype": "a.",
        "definition": "Producing or forming a crust or skin."
    },
    "crustiness": {
        "wordtype": "n.",
        "definition": "The state or quality of having crust or being like crust; hardness."
    },
    "crux": {
        "wordtype": "n.",
        "definition": "Anything that is very puzzling or difficult to explain."
    },
    "cry": {
        "wordtype": "v. i.",
        "definition": "To make a loud call or cry; to call or exclaim vehemently or earnestly; to shout; to vociferate; to proclaim; to pray; to implore."
    },
    "cryer": {
        "wordtype": "n.",
        "definition": "The female of the hawk; a falcon-gentil."
    },
    "cryptal": {
        "wordtype": "a.",
        "definition": "Of or pertaining to crypts."
    },
    "cryptical": {
        "wordtype": "a.",
        "definition": "Hidden; secret; occult."
    },
    "cryptograph": {
        "wordtype": "n.",
        "definition": "Cipher; something written in cipher."
    },
    "cryptographal": {
        "wordtype": "a.",
        "definition": "Pertaining to cryptography; cryptographical."
    },
    "cryptonym": {
        "wordtype": "n.",
        "definition": "A secret name; a name by which a person is known only to the initiated."
    },
    "crystallize": {
        "wordtype": "v. t.",
        "definition": "To cause to form crystals, or to assume the crystalline form."
    },
    "crystallogenical": {
        "wordtype": "a.",
        "definition": "Pertaining to the production of crystals; crystal-producing; as, crystallogenic attraction."
    },
    "crystalloid": {
        "wordtype": "a.",
        "definition": "Crystal-like; transparent like crystal."
    },
    "crystallomancy": {
        "wordtype": "n.",
        "definition": "Divination by means of a crystal or other transparent body, especially a beryl."
    },
    "crystallurgy": {
        "wordtype": "n.",
        "definition": "Crystallization."
    },
    "cubebic": {
        "wordtype": "a.",
        "definition": "Pertaining to, or derived from, cubebs; as, cubebic acid (a soft olive-green resin extracted from cubebs)."
    },
    "cubhood": {
        "wordtype": "n.",
        "definition": "The state of being a cub."
    },
    "cubicalness": {
        "wordtype": "n.",
        "definition": "The quality of being cubical."
    },
    "cubiform": {
        "wordtype": "a.",
        "definition": "Of the form of a cube."
    },
    "cuboid": {
        "wordtype": "a.",
        "definition": "Cube-shaped, or nearly so; as, the cuboid bone of the foot."
    },
    "cuboidal": {
        "wordtype": "a.",
        "definition": "Cuboid."
    },
    "cuckoldize": {
        "wordtype": "v. t.",
        "definition": "To cuckold."
    },
    "cuckoldly": {
        "wordtype": "a.",
        "definition": "Having the qualities of a cuckold; mean-spirited; sneaking."
    },
    "cucujo": {
        "wordtype": "n.",
        "definition": "The fire beetle of Mexico and the West Indies."
    },
    "cuculoid": {
        "wordtype": "a.",
        "definition": "Like or belonging to the cuckoos (Cuculidae)."
    },
    "cudgel": {
        "wordtype": "n.",
        "definition": "A staff used in cudgel play, shorter than the quarterstaff, and wielded with one hand; hence, any heavy stick used as a weapon."
    },
    "cuirass": {
        "wordtype": "n.",
        "definition": "A piece of defensive armor, covering the body from the neck to the girdle"
    },
    "cuirassier": {
        "wordtype": "n.",
        "definition": "A soldier armed with a cuirass."
    },
    "cuish": {
        "wordtype": "n.",
        "definition": "Defensive armor for the thighs."
    },
    "cuisine": {
        "wordtype": "n.",
        "definition": "The kitchen or cooking department."
    },
    "cullible": {
        "wordtype": "a.",
        "definition": "Easily deceived; gullible."
    },
    "cullis": {
        "wordtype": "n.",
        "definition": "A strong broth of meat, strained and made clear for invalids; also, a savory jelly."
    },
    "culmen": {
        "wordtype": "n.",
        "definition": "Top; summit; acme."
    },
    "culminal": {
        "wordtype": "a.",
        "definition": "Pertaining to a culmen."
    },
    "culminate": {
        "wordtype": "v. i.",
        "definition": "To reach its highest point of altitude; to come to the meridian; to be vertical or directly overhead."
    },
    "culmination": {
        "wordtype": "n.",
        "definition": "The attainment of the highest point of altitude reached by a heavently body; passage across the meridian; transit."
    },
    "cultus": {
        "wordtype": "n. sing. & pl.",
        "definition": "Established or accepted religious rites or usages of worship; state of religious development. Cf. Cult, 2."
    },
    "culvertail": {
        "wordtype": "n.",
        "definition": "Dovetail."
    },
    "culvertailed": {
        "wordtype": "a.",
        "definition": "United or fastened by a dovetailed joint."
    },
    "cumbrance": {
        "wordtype": "n.",
        "definition": "Encumbrance."
    },
    "cumbrous": {
        "wordtype": "a.",
        "definition": "Rendering action or motion difficult or toilsome; serving to obstruct or hinder; burdensome; clogging."
    },
    "cuminic": {
        "wordtype": "a.",
        "definition": "Pertaining to, or derived from, cumin, or from oil of caraway; as, cuminic acid."
    },
    "cuminil": {
        "wordtype": "n .",
        "definition": "A substance, analogous to benzil, obtained from oil of caraway."
    },
    "cumulatist": {
        "wordtype": "n.",
        "definition": "One who accumulates; one who collects."
    },
    "cumulose": {
        "wordtype": "a.",
        "definition": "Full of heaps."
    },
    "cun": {
        "wordtype": "v. t.",
        "definition": "To con (a ship)."
    },
    "cunabula": {
        "wordtype": "n. pl.",
        "definition": "The earliest abode; original dwelling place; originals; as, the cunabula of the human race."
    },
    "cunctipotent": {
        "wordtype": "a.",
        "definition": "All-powerful; omnipotent."
    },
    "cupellation": {
        "wordtype": "n.",
        "definition": "The act or process of refining gold or silver, etc., in a cupel."
    },
    "cupidity": {
        "wordtype": "n.",
        "definition": "A passionate desire; love."
    },
    "cupola": {
        "wordtype": "n.",
        "definition": "A roof having a rounded form, hemispherical or nearly so; also, a ceiling having the same form. When on a large scale it is usually called dome."
    },
    "cuprum": {
        "wordtype": "n.",
        "definition": "Copper."
    },
    "cur": {
        "wordtype": "n.",
        "definition": "A mongrel or inferior dog."
    },
    "curability": {
        "wordtype": "n.",
        "definition": "The state of being curable; curableness."
    },
    "curacy": {
        "wordtype": "n.",
        "definition": "The office or employment of a curate."
    },
    "curarine": {
        "wordtype": "n.",
        "definition": "A deadly alkaloid extracted from the curare poison and from the Strychnos toxiferadjective It is obtained in crystalline colorless salts."
    },
    "curateship": {
        "wordtype": "n.",
        "definition": "A curacy."
    },
    "curatorship": {
        "wordtype": "n.",
        "definition": "The office of a curator."
    },
    "curatrix": {
        "wordtype": "n.",
        "definition": "A woman who cures."
    },
    "curcuma": {
        "wordtype": "n.",
        "definition": "A genus of plants of the order Scitamineae, including the turmeric plant (Curcuma longa)."
    },
    "curdiness": {
        "wordtype": "n.",
        "definition": "The state of being curdy."
    },
    "curdle": {
        "wordtype": "v. i.",
        "definition": "To change into curd; to coagulate; as, rennet causes milk to curdle."
    },
    "curialistic": {
        "wordtype": "a.",
        "definition": "Pertaining to a court."
    },
    "curio": {
        "wordtype": "n.",
        "definition": "Any curiosity or article of virtu."
    },
    "curly": {
        "wordtype": "a.",
        "definition": "Curling or tending to curl; having curls; full of ripples; crinkled."
    },
    "curmurring": {
        "wordtype": "n.",
        "definition": "Murmuring; grumbling; -- sometimes applied to the rumbling produced by a slight attack of the gripes."
    },
    "current": {
        "wordtype": "a.",
        "definition": "Running or moving rapidly."
    },
    "curried": {
        "wordtype": "n.",
        "definition": "Dressed by currying; cleaned; prepared."
    },
    "curser": {
        "wordtype": "n.",
        "definition": "One who curses."
    },
    "cursive": {
        "wordtype": "a.",
        "definition": "Running; flowing."
    },
    "curtilage": {
        "wordtype": "n.",
        "definition": "A yard, courtyard, or piece of ground, included within the fence surrounding a dwelling house."
    },
    "curvative": {
        "wordtype": "a.",
        "definition": "Having the margins only a little curved; -- said of leaves."
    },
    "curvicostate": {
        "wordtype": "a.",
        "definition": "Having bent ribs."
    },
    "curvidentate": {
        "wordtype": "a.",
        "definition": "Having curved teeth."
    },
    "curvinerved": {
        "wordtype": "a.",
        "definition": "Having the ribs or the veins of the leaves curved; -- called also curvinervate and curve-veined."
    },
    "cushion": {
        "wordtype": "n.",
        "definition": "A case or bag stuffed with some soft and elastic material, and used to sit or recline upon; a soft pillow or pad."
    },
    "cushionet": {
        "wordtype": "n.",
        "definition": "A little cushion."
    },
    "custos": {
        "wordtype": "n.",
        "definition": "A keeper; a custodian; a superintendent."
    },
    "cutling": {
        "wordtype": "n.",
        "definition": "The art of making edged tools or cutlery."
    },
    "cutthroat": {
        "wordtype": "a.",
        "definition": "Murderous; cruel; barbarous."
    },
    "cutty": {
        "wordtype": "n.",
        "definition": "A short spoon."
    },
    "cyamellone": {
        "wordtype": "n.",
        "definition": "A complex derivative of cyanogen, regarded as an acid, and known chiefly in its salts; -- called also hydromellonic acid."
    },
    "cyanophyll": {
        "wordtype": "n.",
        "definition": "A blue coloring matter supposed by some to be one of the component parts of chlorophyll."
    },
    "cyathophylloid": {
        "wordtype": "a.",
        "definition": "Like, or pertaining to, the family Cyathophyllidae."
    },
    "cycloganoid": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the Cycloganoidei."
    },
    "cyclopean": {
        "wordtype": "a.",
        "definition": "Pertaining to the Cyclops; characteristic of the Cyclops; huge; gigantic; vast and rough; massive; as, Cyclopean labors; Cyclopean architecture."
    },
    "cyclops": {
        "wordtype": "n. sing. & pl.",
        "definition": "A portable forge, used by tinkers, etc."
    },
    "cyclostoma": {
        "wordtype": "n. pl.",
        "definition": "A division of Bryozoa, in which the cells have circular apertures."
    },
    "cyclostomi": {
        "wordtype": "n. pl.",
        "definition": "A glass of fishes having a suckerlike mouth, without jaws, as the lamprey; the Marsipobranchii."
    },
    "cylindrical": {
        "wordtype": "a.",
        "definition": "Having the form of a cylinder, or of a section of its convex surface; partaking of the properties of the cylinder."
    },
    "cymoid": {
        "wordtype": "a.",
        "definition": "Having the form of a cyme."
    },
    "cynarctomachy": {
        "wordtype": "n.",
        "definition": "Bear baiting with a dog."
    },
    "cynarrhodium": {
        "wordtype": "n.",
        "definition": "A fruit like that of the rose, consisting of a cup formed of the calyx tube and receptacle, and containing achenes."
    },
    "cynically": {
        "wordtype": "adv.",
        "definition": "In a cynical manner."
    },
    "cyperaceous": {
        "wordtype": "a.",
        "definition": "Of, pertaining to, or resembling, a large family of plants of which the sedge is the type."
    },
    "cyperus": {
        "wordtype": "n.",
        "definition": "A large genus of plants belonging to the Sedge family, and including the species called galingale, several bulrushes, and the Egyptian papyrus."
    },
    "cyriologic": {
        "wordtype": "a.",
        "definition": "Relating to capital letters."
    },
    "cytococcus": {
        "wordtype": "n.",
        "definition": "The nucleus of the cytula or parent cell."
    },
    "czech": {
        "wordtype": "n.",
        "definition": "One of the Czechs."
    },
    "dabber": {
        "wordtype": "n.",
        "definition": "That with which one dabs; hence, a pad or other device used by printers, engravers, etc., as for dabbing type or engraved plates with ink."
    },
    "dacapo": {
        "wordtype": "",
        "definition": "From the beginning; a direction to return to, and end with, the first strain; -- indicated by the letters D. C. Also, the strain so repeated."
    },
    "daddock": {
        "wordtype": "n.",
        "definition": "The rotten body of a tree."
    },
    "daedalous": {
        "wordtype": "a.",
        "definition": "Having a variously cut or incised margin; -- said of leaves."
    },
    "daff": {
        "wordtype": "v. t.",
        "definition": "To cast aside; to put off; to doff."
    },
    "daily": {
        "wordtype": "a.",
        "definition": "Happening, or belonging to, each successive day; diurnal; as, daily labor; a daily bulletin."
    },
    "daintiness": {
        "wordtype": "n.",
        "definition": "The quality of being dainty; nicety; niceness; elegance; delicacy; deliciousness; fastidiousness; squeamishness."
    },
    "dale": {
        "wordtype": "n.",
        "definition": "A low place between hills; a vale or valley."
    },
    "dallop": {
        "wordtype": "n.",
        "definition": "A tuft or clump."
    },
    "damask": {
        "wordtype": "n.",
        "definition": "Damask silk; silk woven with an elaborate pattern of flowers and the like."
    },
    "dammara": {
        "wordtype": "n.",
        "definition": "A large tree of the order Coniferae, indigenous to the East Indies and Australasia; -- called also Agathis. There are several species."
    },
    "dampish": {
        "wordtype": "a.",
        "definition": "Moderately damp or moist."
    },
    "damson": {
        "wordtype": "n.",
        "definition": "A small oval plum of a blue color, the fruit of a variety of the Prunus domestica; -- called also damask plum."
    },
    "danaite": {
        "wordtype": "n.",
        "definition": "A cobaltiferous variety of arsenopyrite."
    },
    "dandy": {
        "wordtype": "n.",
        "definition": "One who affects special finery or gives undue attention to dress; a fop; a coxcomb."
    },
    "dane": {
        "wordtype": "n.",
        "definition": "A native, or a naturalized inhabitant, of Denmark."
    },
    "dang": {
        "wordtype": "",
        "definition": "imperfect of Ding."
    },
    "dangerous": {
        "wordtype": "a.",
        "definition": "Attended or beset with danger; full of risk; perilous; hazardous; unsafe."
    },
    "dangler": {
        "wordtype": "n.",
        "definition": "One who dangles about or after others, especially after women; a trifler."
    },
    "danish": {
        "wordtype": "a.",
        "definition": "Belonging to the Danes, or to their language or country."
    },
    "dansk": {
        "wordtype": "a.",
        "definition": "Danish."
    },
    "dantesque": {
        "wordtype": "a.",
        "definition": "Dantelike; Dantean."
    },
    "daphne": {
        "wordtype": "n.",
        "definition": "A genus of diminutive Shrubs, mostly evergreen, and with fragrant blossoms."
    },
    "dapple": {
        "wordtype": "n.",
        "definition": "One of the spots on a dappled animal."
    },
    "dare": {
        "wordtype": "v. i.",
        "definition": "To have adequate or sufficient courage for any purpose; to be bold or venturesome; not to be afraid; to venture."
    },
    "dargue": {
        "wordtype": "n.",
        "definition": "A day's work; also, a fixed amount of work, whether more or less than that of a day."
    },
    "daring": {
        "wordtype": "n.",
        "definition": "Boldness; fearlessness; adventurousness; also, a daring act."
    },
    "darkening": {
        "wordtype": "n.",
        "definition": "Twilight; gloaming."
    },
    "darkful": {
        "wordtype": "a.",
        "definition": "Full of darkness."
    },
    "darling": {
        "wordtype": "n.",
        "definition": "One dearly beloved; a favorite."
    },
    "darr": {
        "wordtype": "n.",
        "definition": "The European black tern."
    },
    "darrain": {
        "wordtype": "v. t.",
        "definition": "To make ready to fight; to array."
    },
    "darrein": {
        "wordtype": "a.",
        "definition": "Last; as, darrein continuance, the last continuance."
    },
    "dartars": {
        "wordtype": "n.",
        "definition": "A kind of scab or ulceration on the skin of lambs."
    },
    "darter": {
        "wordtype": "n.",
        "definition": "One who darts, or who throw darts; that which darts."
    },
    "dartle": {
        "wordtype": "v. t. & i.",
        "definition": "To pierce or shoot through; to dart repeatedly: -- frequentative of dart."
    },
    "dartoid": {
        "wordtype": "a.",
        "definition": "Like the dartos; dartoic; as, dartoid tissue."
    },
    "darwinianism": {
        "wordtype": "n.",
        "definition": "Darwinism."
    },
    "dash": {
        "wordtype": "v. t.",
        "definition": "To throw with violence or haste; to cause to strike violently or hastily; -- often used with against."
    },
    "dashboard": {
        "wordtype": "n.",
        "definition": "The float of a paddle wheel."
    },
    "dashing": {
        "wordtype": "a.",
        "definition": "Bold; spirited; showy."
    },
    "dashy": {
        "wordtype": "a.",
        "definition": "Calculated to arrest attention; ostentatiously fashionable; showy."
    },
    "dasyure": {
        "wordtype": "n.",
        "definition": "A carnivorous marsupial quadruped of Australia, belonging to the genus Dasyurus. There are several species."
    },
    "date": {
        "wordtype": "n.",
        "definition": "The fruit of the date palm; also, the date palm itself."
    },
    "dauby": {
        "wordtype": "a.",
        "definition": "Smeary; viscous; glutinous; adhesive."
    },
    "daunter": {
        "wordtype": "n.",
        "definition": "One who daunts."
    },
    "davyum": {
        "wordtype": "n.",
        "definition": "A rare metallic element found in platinum ore. It is a white malleable substance. Symbol Dadjective Atomic weight 154."
    },
    "dawk": {
        "wordtype": "v. t.",
        "definition": "To cut or mark with an incision; to gash."
    },
    "dayspring": {
        "wordtype": "n.",
        "definition": "The beginning of the day, or first appearance of light; the dawn; hence, the beginning."
    },
    "dazzlingly": {
        "wordtype": "adv.",
        "definition": "In a dazzling manner."
    },
    "deadhouse": {
        "wordtype": "n.",
        "definition": "A morgue; a place for the temporary reception and exposure of dead bodies."
    },
    "deadish": {
        "wordtype": "a.",
        "definition": "Somewhat dead, dull, or lifeless; deathlike."
    },
    "dealer": {
        "wordtype": "n.",
        "definition": "One who distributes cards to the players."
    },
    "dear": {
        "wordtype": "superl.",
        "definition": "Bearing a high price; high-priced; costly; expensive."
    },
    "deare": {
        "wordtype": "",
        "definition": "variant of Dere, verb t. & n."
    },
    "dearly": {
        "wordtype": "adv.",
        "definition": "In a dear manner; with affection; heartily; earnestly; as, to love one dearly."
    },
    "dearworth": {
        "wordtype": "a.",
        "definition": "Precious."
    },
    "deathwatch": {
        "wordtype": "n.",
        "definition": "A small wingless insect, of the family Psocidae, which makes a similar but fainter sound; -- called also deathtick."
    },
    "debarb": {
        "wordtype": "v. t.",
        "definition": "To deprive of the beard."
    },
    "debarment": {
        "wordtype": "n.",
        "definition": "Hindrance from approach; exclusion."
    },
    "debarrass": {
        "wordtype": "v. t.",
        "definition": "To disembarrass; to relieve."
    },
    "debased": {
        "wordtype": "a.",
        "definition": "Turned upside down from its proper position; inverted; reversed."
    },
    "debauch": {
        "wordtype": "n.",
        "definition": "Excess in eating or drinking; intemperance; drunkenness; lewdness; debauchery."
    },
    "debauched": {
        "wordtype": "a.",
        "definition": "Dissolute; dissipated."
    },
    "debauchedly": {
        "wordtype": "adv.",
        "definition": "In a profligate manner."
    },
    "debit": {
        "wordtype": "n.",
        "definition": "A debt; an entry on the debtor (Dr.) side of an account; -- mostly used adjectively; as, the debit side of an account."
    },
    "debonairness": {
        "wordtype": "n.",
        "definition": "The quality of being debonair; good humor; gentleness; courtesy."
    },
    "debt": {
        "wordtype": "n.",
        "definition": "A duty neglected or violated; a fault; a sin; a trespass."
    },
    "debtor": {
        "wordtype": "n.",
        "definition": "One who owes a debt; one who is indebted; -- correlative to creditor."
    },
    "decagon": {
        "wordtype": "n.",
        "definition": "A plane figure having ten sides and ten angles; any figure having ten angles. A regular decagon is one that has all its sides and angles equal."
    },
    "decalcomanie": {
        "wordtype": "n.",
        "definition": "The art or process of transferring pictures and designs to china, glass, marble, etc., and permanently fixing them thereto."
    },
    "decalog": {
        "wordtype": "n.",
        "definition": "Decalogue."
    },
    "decalogist": {
        "wordtype": "n.",
        "definition": "One who explains the decalogue."
    },
    "decaphyllous": {
        "wordtype": "a.",
        "definition": "Having ten leaves."
    },
    "decapod": {
        "wordtype": "n.",
        "definition": "A crustacean with ten feet or legs, as a crab; one of the Decapodadjective Also used adjectively."
    },
    "decarbonize": {
        "wordtype": "v. t.",
        "definition": "To deprive of carbon; as, to decarbonize steel; to decarbonize the blood."
    },
    "decay": {
        "wordtype": "v. t.",
        "definition": "To cause to decay; to impair."
    },
    "decayed": {
        "wordtype": "a.",
        "definition": "Fallen, as to physical or social condition; affected with decay; rotten; as, decayed vegetation or vegetables; a decayed fortune or gentleman."
    },
    "decayer": {
        "wordtype": "n.",
        "definition": "A causer of decay."
    },
    "decease": {
        "wordtype": "n.",
        "definition": "Departure, especially departure from this life; death."
    },
    "decede": {
        "wordtype": "n.",
        "definition": "To withdraw."
    },
    "deceitfully": {
        "wordtype": "adv.",
        "definition": "With intent to deceive."
    },
    "deceivable": {
        "wordtype": "a.",
        "definition": "Fitted to deceive; deceitful."
    },
    "deceivably": {
        "wordtype": "adv.",
        "definition": "In a deceivable manner."
    },
    "deceive": {
        "wordtype": "v. t.",
        "definition": "To beguile; to amuse, so as to divert the attention; to while away; to take away as if by deception."
    },
    "decemdentate": {
        "wordtype": "a.",
        "definition": "Having ten points or teeth."
    },
    "decemvirship": {
        "wordtype": "n.",
        "definition": "The office of a decemvir."
    },
    "decennium": {
        "wordtype": "n.",
        "definition": "A period of ten years."
    },
    "deceptious": {
        "wordtype": "a.",
        "definition": "Tending deceive; delusive."
    },
    "decern": {
        "wordtype": "v. t.",
        "definition": "To perceive, discern, or decide."
    },
    "decession": {
        "wordtype": "n.",
        "definition": "Departure; decrease; -- opposed to accesion."
    },
    "decharm": {
        "wordtype": "v. t.",
        "definition": "To free from a charm; to disenchant."
    },
    "decidedly": {
        "wordtype": "adv.",
        "definition": "In a decided manner; indisputably; clearly; thoroughly."
    },
    "decilitre": {
        "wordtype": "n.",
        "definition": "A measure of capacity or volume in the metric system; one tenth of a liter, equal to 6.1022 cubic inches, or 3.38 fluid ounces."
    },
    "decimalism": {
        "wordtype": "n.",
        "definition": "The system of a decimal currency, decimal weights, measures, etc."
    },
    "decimalize": {
        "wordtype": "v. t.",
        "definition": "To reduce to a decimal system; as, to decimalize the currency."
    },
    "decipiency": {
        "wordtype": "n.",
        "definition": "State of being deceived; hallucination."
    },
    "deck": {
        "wordtype": "v. t.",
        "definition": "To cover; to overspread."
    },
    "declarant": {
        "wordtype": "n.",
        "definition": "One who declares."
    },
    "declaration": {
        "wordtype": "n.",
        "definition": "That which is declared or proclaimed; announcement; distinct statement; formal expression; avowal."
    },
    "declaratively": {
        "wordtype": "adv.",
        "definition": "By distinct assertion; not impliedly; in the form of a declaration."
    },
    "declare": {
        "wordtype": "v. t.",
        "definition": "To make clear; to free from obscurity."
    },
    "declinate": {
        "wordtype": "a.",
        "definition": "Bent downward or aside; (Bot.) bending downward in a curve; declined."
    },
    "declination": {
        "wordtype": "n.",
        "definition": "The act or state of bending downward; inclination; as, declination of the head."
    },
    "declinature": {
        "wordtype": "n.",
        "definition": "The act of declining or refusing; as, the declinature of an office."
    },
    "decline": {
        "wordtype": "v. i.",
        "definition": "To turn or bend aside; to deviate; to stray; to withdraw; as, a line that declines from straightness; conduct that declines from sound morals."
    },
    "decomposite": {
        "wordtype": "a.",
        "definition": "Compounded more than once; compounded with things already composite."
    },
    "decompound": {
        "wordtype": "v. t.",
        "definition": "To compound or mix with that is already compound; to compound a second time."
    },
    "decompoundable": {
        "wordtype": "a.",
        "definition": "Capable of being decompounded."
    },
    "deconcentrate": {
        "wordtype": "v. t.",
        "definition": "To withdraw from concentration; to decentralize."
    },
    "decorament": {
        "wordtype": "v. t.",
        "definition": "Ornament."
    },
    "decore": {
        "wordtype": "v. t.",
        "definition": "To decorate; to beautify."
    },
    "decree": {
        "wordtype": "n.",
        "definition": "A decision, order, or sentence, given in a cause by a court of equity or admiralty."
    },
    "decreeable": {
        "wordtype": "a.",
        "definition": "Capable of being decreed."
    },
    "decrescent": {
        "wordtype": "a.",
        "definition": "Becoming less by gradual diminution; decreasing; as, a decrescent moon."
    },
    "decretist": {
        "wordtype": "n.",
        "definition": "One who studies, or professes the knowledge of, the decretals."
    },
    "decretive": {
        "wordtype": "n.",
        "definition": "Having the force of a decree; determining."
    },
    "decretorial": {
        "wordtype": "a.",
        "definition": "Decretory; authoritative."
    },
    "decrown": {
        "wordtype": "v. t.",
        "definition": "To deprive of a crown; to discrown."
    },
    "decrustation": {
        "wordtype": "n.",
        "definition": "The removal of a crust."
    },
    "decumbency": {
        "wordtype": "n.",
        "definition": "The act or posture of lying down."
    },
    "decurionate": {
        "wordtype": "n.",
        "definition": "The office of a decurion."
    },
    "dedecoration": {
        "wordtype": "n.",
        "definition": "Disgrace; dishonor."
    },
    "dedecorous": {
        "wordtype": "a.",
        "definition": "Disgraceful; unbecoming."
    },
    "dedicator": {
        "wordtype": "n.",
        "definition": "One who dedicates; more especially, one who inscribes a book to the favor of a patron, or to one whom he desires to compliment."
    },
    "dedicatorial": {
        "wordtype": "a.",
        "definition": "Dedicatory."
    },
    "deducibleness": {
        "wordtype": "n.",
        "definition": "The quality of being deducible; deducibility."
    },
    "deduction": {
        "wordtype": "n.",
        "definition": "Act or process of deducing or inferring."
    },
    "deduit": {
        "wordtype": "n.",
        "definition": "Delight; pleasure."
    },
    "deer": {
        "wordtype": "n. sing. & pl.",
        "definition": "Any animal; especially, a wild animal."
    },
    "dees": {
        "wordtype": "n. pl.",
        "definition": "Dice."
    },
    "deesis": {
        "wordtype": "n.",
        "definition": "An invocation of, or address to, the Supreme Being."
    },
    "defacer": {
        "wordtype": "n.",
        "definition": "One who, or that which, defaces or disfigures."
    },
    "defailance": {
        "wordtype": "n.",
        "definition": "Failure; miscarriage."
    },
    "defalcation": {
        "wordtype": "n.",
        "definition": "A lopping off; a diminution; abatement; deficit. Specifically: Reduction of a claim by deducting a counterclaim; set- off."
    },
    "defalk": {
        "wordtype": "v. t.",
        "definition": "To lop off; to abate."
    },
    "defeasanced": {
        "wordtype": "a.",
        "definition": "Liable to defeasance; capable of being made void or forfeited."
    },
    "defendable": {
        "wordtype": "a.",
        "definition": "Capable of being defended; defensible."
    },
    "defendress": {
        "wordtype": "n.",
        "definition": "A female defender."
    },
    "defence": {
        "wordtype": "n.",
        "definition": "The act of defending, or the state of being defended; protection, as from violence or danger."
    },
    "defensible": {
        "wordtype": "a.",
        "definition": "Capable of being defended; as, a defensible city, or a defensible cause."
    },
    "defensively": {
        "wordtype": "adv.",
        "definition": "On the defensive."
    },
    "defibrinize": {
        "wordtype": "v. t.",
        "definition": "To defibrinate."
    },
    "deficiency": {
        "wordtype": "n.",
        "definition": "The state of being deficient; inadequacy; want; failure; imperfection; shortcoming; defect."
    },
    "defier": {
        "wordtype": "n.",
        "definition": "One who dares and defies; a contemner; as, a defier of the laws."
    },
    "defiguration": {
        "wordtype": "n.",
        "definition": "Disfiguration; mutilation."
    },
    "defilement": {
        "wordtype": "n.",
        "definition": "The act of defiling, or state of being defiled, whether physically or morally; pollution; foulness; dirtiness; uncleanness."
    },
    "definiteness": {
        "wordtype": "n.",
        "definition": "The state of being definite; determinateness; precision; certainty."
    },
    "definitive": {
        "wordtype": "a.",
        "definition": "Determinate; positive; final; conclusive; unconditional; express."
    },
    "defix": {
        "wordtype": "v. t.",
        "definition": "To fix; to fasten; to establish."
    },
    "deflagrability": {
        "wordtype": "n.",
        "definition": "The state or quality of being deflagrable."
    },
    "deflectable": {
        "wordtype": "a.",
        "definition": "Capable of being deflected."
    },
    "deflow": {
        "wordtype": "v. i.",
        "definition": "To flow down."
    },
    "defoliated": {
        "wordtype": "a.",
        "definition": "Deprived of leaves, as by their natural fall."
    },
    "defoliation": {
        "wordtype": "n.",
        "definition": "The separation of ripened leaves from a branch or stem; the falling or shedding of the leaves."
    },
    "deftly": {
        "wordtype": "adv.",
        "definition": "Aptly; fitly; dexterously; neatly."
    },
    "defy": {
        "wordtype": "v. t.",
        "definition": "To renounce or dissolve all bonds of affiance, faith, or obligation with; to reject, refuse, or renounce."
    },
    "degenerately": {
        "wordtype": "adv.",
        "definition": "In a degenerate manner; unworthily."
    },
    "deglutinate": {
        "wordtype": "v. t.",
        "definition": "To loosen or separate by dissolving the glue which unties; to unglue."
    },
    "degradingly": {
        "wordtype": "adv.",
        "definition": "In a degrading manner."
    },
    "degravation": {
        "wordtype": "a.",
        "definition": "The act of making heavy."
    },
    "dehiscence": {
        "wordtype": "n.",
        "definition": "The act of gaping."
    },
    "dehonestate": {
        "wordtype": "v. t.",
        "definition": "To disparage."
    },
    "dehydrogenate": {
        "wordtype": "v. t.",
        "definition": "To deprive of, or free from, hydrogen."
    },
    "deictic": {
        "wordtype": "a.",
        "definition": "Direct; proving directly; -- applied to reasoning, and opposed to elenchtic or refutative."
    },
    "deified": {
        "wordtype": "a.",
        "definition": "Honored or worshiped as a deity; treated with supreme regard; godlike."
    },
    "deil": {
        "wordtype": "n.",
        "definition": "Devil; -- spelt also deel."
    },
    "delectable": {
        "wordtype": "a.",
        "definition": "Highly pleasing; delightful."
    },
    "delegatory": {
        "wordtype": "a.",
        "definition": "Holding a delegated position."
    },
    "deligation": {
        "wordtype": "n.",
        "definition": "A binding up; a bandaging."
    },
    "delightful": {
        "wordtype": "a.",
        "definition": "Highly pleasing; affording great pleasure and satisfaction."
    },
    "delightsome": {
        "wordtype": "a.",
        "definition": "Very pleasing; delightful."
    },
    "delinquency": {
        "wordtype": "n.",
        "definition": "Failure or omission of duty; a fault; a misdeed; an offense; a misdemeanor; a crime."
    },
    "delinquently": {
        "wordtype": "adv.",
        "definition": "So as to fail in duty."
    },
    "delitigate": {
        "wordtype": "v. i.",
        "definition": "To chide; to rail heartily."
    },
    "delitigation": {
        "wordtype": "n.",
        "definition": "Chiding; brawl."
    },
    "deliverance": {
        "wordtype": "n.",
        "definition": "The act of delivering or freeing from restraint, captivity, peril, and the like; rescue; as, the deliverance of a captive."
    },
    "dell": {
        "wordtype": "n.",
        "definition": "A small, retired valley; a ravine."
    },
    "deloul": {
        "wordtype": "n.",
        "definition": "A special breed of the dromedary used for rapid traveling; the swift camel; -- called also herire, and maharik."
    },
    "delph": {
        "wordtype": "n.",
        "definition": "Delftware."
    },
    "deluge": {
        "wordtype": "n.",
        "definition": "Fig.: Anything which overwhelms, or causes great destruction."
    },
    "demagog": {
        "wordtype": "n.",
        "definition": "Demagogue."
    },
    "demagogism": {
        "wordtype": "n.",
        "definition": "The practices of a demagogue."
    },
    "demarcation": {
        "wordtype": "n.",
        "definition": "The act of marking, or of ascertaining and setting a limit; separation; distinction."
    },
    "demarch": {
        "wordtype": "n.",
        "definition": "March; walk; gait."
    },
    "dematerialize": {
        "wordtype": "v. t.",
        "definition": "To deprive of material or physical qualities or characteristics."
    },
    "deme": {
        "wordtype": "n.",
        "definition": "A territorial subdivision of Attica (also of modern Greece), corresponding to a township."
    },
    "dement": {
        "wordtype": "v. t.",
        "definition": "To deprive of reason; to make mad."
    },
    "demibrigade": {
        "wordtype": "n.",
        "definition": "A half brigade."
    },
    "demigod": {
        "wordtype": "n.",
        "definition": "A half god, or an inferior deity; a fabulous hero, the offspring of a deity and a mortal."
    },
    "demigoddess": {
        "wordtype": "n.",
        "definition": "A female demigod."
    },
    "demisability": {
        "wordtype": "n.",
        "definition": "The state of being demisable."
    },
    "demisemiquaver": {
        "wordtype": "n.",
        "definition": "A short note, equal in time to the half of a semiquaver, or the thirty-second part of a whole note."
    },
    "demissionary": {
        "wordtype": "a.",
        "definition": "Pertaining to transfer or conveyance; as, a demissionary deed."
    },
    "demit": {
        "wordtype": "v. t.",
        "definition": "To let fall; to depress."
    },
    "democratic": {
        "wordtype": "a.",
        "definition": "Pertaining to democracy; favoring democracy, or constructed upon the principle of government by the people."
    },
    "democratical": {
        "wordtype": "a.",
        "definition": "Democratic."
    },
    "democratism": {
        "wordtype": "n.",
        "definition": "The principles or spirit of a democracy."
    },
    "democratize": {
        "wordtype": "v. t.",
        "definition": "To render democratic."
    },
    "demography": {
        "wordtype": "n.",
        "definition": "The study of races, as to births, marriages, mortality, health, etc."
    },
    "demonocracy": {
        "wordtype": "n.",
        "definition": "The power or government of demons."
    },
    "demonolatry": {
        "wordtype": "n.",
        "definition": "The worship of demons."
    },
    "demonomagy": {
        "wordtype": "n.",
        "definition": "Magic in which the aid of demons is invoked; black or infernal magic."
    },
    "demonstrable": {
        "wordtype": "a.",
        "definition": "Capable of being demonstrated; that can be proved beyond doubt or question."
    },
    "demonstrate": {
        "wordtype": "v. t.",
        "definition": "To point out; to show; to exhibit; to make evident."
    },
    "demonstrativeness": {
        "wordtype": "n.",
        "definition": "The state or quality of being demonstrative."
    },
    "demonstrator": {
        "wordtype": "n.",
        "definition": "One who demonstrates; one who proves anything with certainty, or establishes it by indubitable evidence."
    },
    "denary": {
        "wordtype": "a.",
        "definition": "Containing ten; tenfold; proceeding by tens; as, the denary, or decimal, scale."
    },
    "denationalize": {
        "wordtype": "v. t.",
        "definition": "To divest or deprive of national character or rights."
    },
    "dendritical": {
        "wordtype": "a.",
        "definition": "Pertaining to a dendrite, or to arborescent crystallization; having a form resembling a shrub or tree; arborescent."
    },
    "dendroidal": {
        "wordtype": "a.",
        "definition": "Resembling a shrub or tree in form; treelike."
    },
    "dendrometer": {
        "wordtype": "n.",
        "definition": "An instrument to measure the height and diameter of trees."
    },
    "denigration": {
        "wordtype": "n.",
        "definition": "The act of making black."
    },
    "denominational": {
        "wordtype": "a.",
        "definition": "Pertaining to a denomination, especially to a sect or society."
    },
    "denouement": {
        "wordtype": "n.",
        "definition": "The unraveling or discovery of a plot; the catastrophe, especially of a drama or a romance."
    },
    "dense": {
        "wordtype": "a.",
        "definition": "Stupid; gross; crass; as, dense ignorance."
    },
    "dentex": {
        "wordtype": "n.",
        "definition": "An edible European marine fish (Sparus dentex, or Dentex vulgaris) of the family Percidae."
    },
    "dentigerous": {
        "wordtype": "a.",
        "definition": "Bearing teeth or toothlike structures."
    },
    "dentiloquy": {
        "wordtype": "n.",
        "definition": "The habit or practice of speaking through the teeth, or with them closed."
    },
    "dentiphone": {
        "wordtype": "n.",
        "definition": "An instrument which, placed against the teeth, conveys sound to the auditory nerve; an audiphone."
    },
    "denture": {
        "wordtype": "n.",
        "definition": "An artificial tooth, block, or set of teeth."
    },
    "denunciation": {
        "wordtype": "n.",
        "definition": "Proclamation; announcement; a publishing."
    },
    "deobstruct": {
        "wordtype": "v. t.",
        "definition": "To remove obstructions or impediments in; to clear from anything that hinders the passage of fluids; as, to deobstruct the pores or lacteals."
    },
    "deordination": {
        "wordtype": "n.",
        "definition": "Disorder; dissoluteness."
    },
    "deosculate": {
        "wordtype": "v. t.",
        "definition": "To kiss warmly."
    },
    "deoxygenation": {
        "wordtype": "n.",
        "definition": "The act or operation of depriving of oxygen."
    },
    "depaint": {
        "wordtype": "p. p.",
        "definition": "Painted."
    },
    "depauperize": {
        "wordtype": "v. t.",
        "definition": "To free from paupers; to rescue from poverty."
    },
    "depeculation": {
        "wordtype": "n.",
        "definition": "A robbing or embezzlement."
    },
    "dependable": {
        "wordtype": "a.",
        "definition": "Worthy of being depended on; trustworthy."
    },
    "deperditely": {
        "wordtype": "adv.",
        "definition": "Hopelessly; despairingly; in the manner of one ruined; as, deperditely wicked."
    },
    "deperdition": {
        "wordtype": "n.",
        "definition": "Loss; destruction."
    },
    "depilatory": {
        "wordtype": "a.",
        "definition": "Having the quality or power of removing hair."
    },
    "deplorable": {
        "wordtype": "a.",
        "definition": "Worthy of being deplored or lamented; lamentable; causing grief; hence, sad; calamitous; grievous; wretched; as, life's evils are deplorable."
    },
    "depose": {
        "wordtype": "v. t.",
        "definition": "To lay down; to divest one's self of; to lay aside."
    },
    "deprecable": {
        "wordtype": "a.",
        "definition": "That may or should be deprecated."
    },
    "deprehensible": {
        "wordtype": "a.",
        "definition": "That may be caught or discovered; apprehensible."
    },
    "depute": {
        "wordtype": "v. t.",
        "definition": "To appoint as deputy or agent; to commission to act in one's place; to delegate."
    },
    "dereliction": {
        "wordtype": "n.",
        "definition": "The act of leaving with an intention not to reclaim or resume; an utter forsaking abandonment."
    },
    "derf": {
        "wordtype": "a.",
        "definition": "Strong; powerful; fierce."
    },
    "deride": {
        "wordtype": "v. t.",
        "definition": "To laugh at with contempt; to laugh to scorn; to turn to ridicule or make sport of; to mock; to scoff at."
    },
    "deridingly": {
        "wordtype": "adv.",
        "definition": "By way of derision or mockery."
    },
    "deriver": {
        "wordtype": "n.",
        "definition": "One who derives."
    },
    "dermopteran": {
        "wordtype": "n.",
        "definition": "An insect which has the anterior pair of wings coriaceous, and does not use them in flight, as the earwig."
    },
    "dermostosis": {
        "wordtype": "n.",
        "definition": "Ossification of the dermis."
    },
    "dernier": {
        "wordtype": "a.",
        "definition": "Last; final."
    },
    "derogately": {
        "wordtype": "adv.",
        "definition": "In a derogatory manner."
    },
    "derring": {
        "wordtype": "a.",
        "definition": "Daring or warlike."
    },
    "dertrotheca": {
        "wordtype": "n.",
        "definition": "The horny covering of the end of the bill of birds."
    },
    "descend": {
        "wordtype": "v. i.",
        "definition": "To enter mentally; to retire."
    },
    "descendant": {
        "wordtype": "a.",
        "definition": "Descendent."
    },
    "descendent": {
        "wordtype": "a.",
        "definition": "Descending; falling; proceeding from an ancestor or source."
    },
    "descending": {
        "wordtype": "a.",
        "definition": "Of or pertaining to descent; moving downwards."
    },
    "descensional": {
        "wordtype": "a.",
        "definition": "Pertaining to descension."
    },
    "descent": {
        "wordtype": "n.",
        "definition": "The act of descending, or passing downward; change of place from higher to lower."
    },
    "desertlessly": {
        "wordtype": "adv.",
        "definition": "Undeservedly."
    },
    "deserve": {
        "wordtype": "v. t.",
        "definition": "To serve; to treat; to benefit."
    },
    "deshabille": {
        "wordtype": "n.",
        "definition": "An undress; a careless toilet."
    },
    "desiccatory": {
        "wordtype": "a.",
        "definition": "Desiccative."
    },
    "desiderate": {
        "wordtype": "v. t.",
        "definition": "To desire; to feel the want of; to lack; to miss; to want."
    },
    "desight": {
        "wordtype": "n.",
        "definition": "An unsightly object."
    },
    "desightment": {
        "wordtype": "n.",
        "definition": "The act of making unsightly; disfigurement."
    },
    "designative": {
        "wordtype": "a.",
        "definition": "Serving to designate or indicate; pointing out."
    },
    "desirableness": {
        "wordtype": "n.",
        "definition": "The quality of being desirable."
    },
    "desire": {
        "wordtype": "v. t.",
        "definition": "To long for; to wish for earnestly; to covet."
    },
    "desirously": {
        "wordtype": "adv.",
        "definition": "With desire; eagerly."
    },
    "desolation": {
        "wordtype": "n.",
        "definition": "The act of desolating or laying waste; destruction of inhabitants; depopulation."
    },
    "desolatory": {
        "wordtype": "a.",
        "definition": "Causing desolation."
    },
    "despecificate": {
        "wordtype": "v. t.",
        "definition": "To discriminate; to separate according to specific signification or qualities; to specificate; to desynonymize."
    },
    "despicability": {
        "wordtype": "n.",
        "definition": "Despicableness."
    },
    "despicably": {
        "wordtype": "adv.",
        "definition": "In a despicable or mean manner; contemptibly; as, despicably stingy."
    },
    "despiciency": {
        "wordtype": "n.",
        "definition": "A looking down; despection."
    },
    "despisement": {
        "wordtype": "n.",
        "definition": "A despising."
    },
    "despumation": {
        "wordtype": "n.",
        "definition": "The act of throwing up froth or scum; separation of the scum or impurities from liquids; scumming; clarification."
    },
    "despume": {
        "wordtype": "v. t.",
        "definition": "To free from spume or scum."
    },
    "desquamate": {
        "wordtype": "v. i.",
        "definition": "To peel off in the form of scales; to scale off, as the skin in certain diseases."
    },
    "destinable": {
        "wordtype": "a.",
        "definition": "Determined by destiny; fated."
    },
    "destination": {
        "wordtype": "n.",
        "definition": "The act of destining or appointing."
    },
    "destroy": {
        "wordtype": "v. t.",
        "definition": "To ruin; to bring to naught; to put an end to; to annihilate; to consume."
    },
    "destructibleness": {
        "wordtype": "n.",
        "definition": "The quality of being destructible."
    },
    "destructive": {
        "wordtype": "n.",
        "definition": "One who destroys; a radical reformer; a destructionist."
    },
    "desulphuration": {
        "wordtype": "n.",
        "definition": "The act or process of depriving of sulphur."
    },
    "detect": {
        "wordtype": "a.",
        "definition": "Detected."
    },
    "detenebrate": {
        "wordtype": "v. t.",
        "definition": "To remove darkness from."
    },
    "deteriorate": {
        "wordtype": "v. t.",
        "definition": "To make worse; to make inferior in quality or value; to impair; as, to deteriorate the mind."
    },
    "determinateness": {
        "wordtype": "n.",
        "definition": "State of being determinate."
    },
    "determinism": {
        "wordtype": "n.",
        "definition": "The doctrine that the will is not free, but is inevitably and invincibly determined by motives."
    },
    "detersiveness": {
        "wordtype": "n.",
        "definition": "The quality of cleansing."
    },
    "detinue": {
        "wordtype": "n.",
        "definition": "A person or thing detained"
    },
    "detract": {
        "wordtype": "v. t.",
        "definition": "To take away; to withdraw."
    },
    "detrimentalness": {
        "wordtype": "n.",
        "definition": "The quality of being detrimental; injuriousness."
    },
    "detrite": {
        "wordtype": "a.",
        "definition": "Worn out."
    },
    "detur": {
        "wordtype": "n.",
        "definition": "A present of books given to a meritorious undergraduate student as a prize."
    },
    "deturbation": {
        "wordtype": "n.",
        "definition": "The act of deturbating."
    },
    "deturn": {
        "wordtype": "v. t.",
        "definition": "To turn away."
    },
    "deuce": {
        "wordtype": "n.",
        "definition": "Two; a card or a die with two spots; as, the deuce of hearts."
    },
    "deutohydroguret": {
        "wordtype": "n.",
        "definition": "A compound containing in the molecule two atoms of hydrogen united with some other element or radical."
    },
    "deutosulphuret": {
        "wordtype": "n.",
        "definition": "A disulphide."
    },
    "deutzia": {
        "wordtype": "n.",
        "definition": "A genus of shrubs with pretty white flowers, much cultivated."
    },
    "deva": {
        "wordtype": "n.",
        "definition": "A god; a deity; a divine being; an idol; a king."
    },
    "devaporation": {
        "wordtype": "n.",
        "definition": "The change of vapor into water, as in the formation of rain."
    },
    "devast": {
        "wordtype": "v. t.",
        "definition": "To devastate."
    },
    "devastation": {
        "wordtype": "n.",
        "definition": "The act of devastating, or the state of being devastated; a laying waste."
    },
    "developable": {
        "wordtype": "a.",
        "definition": "Capable of being developed."
    },
    "deviant": {
        "wordtype": "a.",
        "definition": "Deviating."
    },
    "devicefully": {
        "wordtype": "adv.",
        "definition": "In a deviceful manner."
    },
    "devil": {
        "wordtype": "n.",
        "definition": "The Evil One; Satan, represented as the tempter and spiritual of mankind."
    },
    "devilry": {
        "wordtype": "n.",
        "definition": "Conduct suitable to the devil; extreme wickedness; deviltry."
    },
    "devious": {
        "wordtype": "a.",
        "definition": "Out of a straight line; winding; varying from directness; as, a devious path or way."
    },
    "devisal": {
        "wordtype": "n.",
        "definition": "A devising."
    },
    "devote": {
        "wordtype": "v. t.",
        "definition": "To execrate; to curse."
    },
    "devotionally": {
        "wordtype": "adv.",
        "definition": "In a devotional manner; toward devotion."
    },
    "devouringly": {
        "wordtype": "adv.",
        "definition": "In a devouring manner."
    },
    "devove": {
        "wordtype": "v. t.",
        "definition": "To devote."
    },
    "dewfall": {
        "wordtype": "n.",
        "definition": "The falling of dew; the time when dew begins to fall."
    },
    "dextrad": {
        "wordtype": "adv.",
        "definition": "Toward the right side; dextrally."
    },
    "dezincification": {
        "wordtype": "n.",
        "definition": "The act or process of freeing from zinc; also, the condition resulting from the removal of zinc."
    },
    "diageotropism": {
        "wordtype": "n.",
        "definition": "The tendency of organs (as roots) of plants to assume a position oblique or transverse to a direction towards the center of the earth."
    },
    "diagnostics": {
        "wordtype": "n.",
        "definition": "That part of medicine which has to do with ascertaining the nature of diseases by means of their symptoms or signs."
    },
    "dial": {
        "wordtype": "n.",
        "definition": "The graduated face of a timepiece, on which the time of day is shown by pointers or hands."
    },
    "dialectician": {
        "wordtype": "n.",
        "definition": "One versed in dialectics; a logician; a reasoner."
    },
    "dialyzation": {
        "wordtype": "n.",
        "definition": "The act or process of dialysis."
    },
    "diaper": {
        "wordtype": "n.",
        "definition": "Surface decoration of any sort which consists of the constant repetition of one or more simple figures or units of design evenly spaced."
    },
    "diaphanoscope": {
        "wordtype": "n.",
        "definition": "A dark box constructed for viewing transparent pictures, with or without a lens."
    },
    "diaphemetric": {
        "wordtype": "a.",
        "definition": "Relating to the measurement of the tactile sensibility of parts; as, diaphemetric compasses."
    },
    "diaphoretical": {
        "wordtype": "a.",
        "definition": "Having the power to increase perspiration."
    },
    "diaphoretic": {
        "wordtype": "n.",
        "definition": "A medicine or agent which promotes perspiration."
    },
    "diarist": {
        "wordtype": "n.",
        "definition": "One who keeps a diary."
    },
    "dibble": {
        "wordtype": "v. i.",
        "definition": "A pointed implement used to make holes in the ground in which no set out plants or to plant seeds."
    },
    "dichotomist": {
        "wordtype": "n.",
        "definition": "One who dichotomizes."
    },
    "dichromatism": {
        "wordtype": "n.",
        "definition": "The state of being dichromatic."
    },
    "dichroscope": {
        "wordtype": "n.",
        "definition": "An instrument for examining the dichroism of crystals."
    },
    "dicotyledon": {
        "wordtype": "n.",
        "definition": "A plant whose seeds divide into two seed lobes, or cotyledons, in germinating."
    },
    "dictatorian": {
        "wordtype": "a.",
        "definition": "Dictatorial."
    },
    "didacticity": {
        "wordtype": "n.",
        "definition": "Aptitude for teaching."
    },
    "didst": {
        "wordtype": "",
        "definition": "the 2d pers. sing. imperfect of Do."
    },
    "dietic": {
        "wordtype": "a.",
        "definition": "Dietetic."
    },
    "differentia": {
        "wordtype": "n.",
        "definition": "The formal or distinguishing part of the essence of a species; the characteristic attribute of a species; specific difference."
    },
    "differently": {
        "wordtype": "adv.",
        "definition": "In a different manner; variously."
    },
    "difficultate": {
        "wordtype": "v. t.",
        "definition": "To render difficult; to difficilitate."
    },
    "dig": {
        "wordtype": "v. t.",
        "definition": "To get by digging; as, to dig potatoes, or gold."
    },
    "digger": {
        "wordtype": "n.",
        "definition": "One who, or that which, digs."
    },
    "dilapidator": {
        "wordtype": "n.",
        "definition": "One who causes dilapidation."
    },
    "dilatability": {
        "wordtype": "n.",
        "definition": "The quality of being dilatable, or admitting expansion; -- opposed to contractibility."
    },
    "dilate": {
        "wordtype": "v. t.",
        "definition": "To enlarge upon; to relate at large; to tell copiously or diffusely."
    },
    "dim": {
        "wordtype": "superl.",
        "definition": "Not bright or distinct; wanting luminousness or clearness; obscure in luster or sound; dusky; darkish; obscure; indistinct; overcast; tarnished."
    },
    "dimble": {
        "wordtype": "n.",
        "definition": "A bower; a dingle."
    },
    "dimensioned": {
        "wordtype": "a.",
        "definition": "Having dimensions."
    },
    "dimera": {
        "wordtype": "n. pl.",
        "definition": "A division of Coleoptera, having two joints to the tarsi."
    },
    "diminutively": {
        "wordtype": "adv.",
        "definition": "In a diminutive manner."
    },
    "diminutiveness": {
        "wordtype": "n.",
        "definition": "The quality of being diminutive; smallness; littleness; minuteness."
    },
    "dimit": {
        "wordtype": "v. t.",
        "definition": "To dismiss, let go, or release."
    },
    "dimly": {
        "wordtype": "adv.",
        "definition": "In a dim or obscure manner; not brightly or clearly; with imperfect sight."
    },
    "dimmy": {
        "wordtype": "a.",
        "definition": "Somewhat dim; as, dimmish eyes."
    },
    "din": {
        "wordtype": "n.",
        "definition": "Loud, confused, harsh noise; a loud, continuous, rattling or clanging sound; clamor; roar."
    },
    "diner": {
        "wordtype": "n.",
        "definition": "One who dines."
    },
    "dining": {
        "wordtype": "n. & a.",
        "definition": "from Dine, adjective"
    },
    "dink": {
        "wordtype": "a.",
        "definition": "Trim; neat."
    },
    "dinner": {
        "wordtype": "n.",
        "definition": "The principal meal of the day, eaten by most people about midday, but by many (especially in cities) at a later hour."
    },
    "diota": {
        "wordtype": "n.",
        "definition": "A vase or drinking cup having two handles or ears."
    },
    "diphthongal": {
        "wordtype": "a.",
        "definition": "Relating or belonging to a diphthong; having the nature of a diphthong."
    },
    "diphthongization": {
        "wordtype": "n.",
        "definition": "The act of changing into a diphthong."
    },
    "diploblastic": {
        "wordtype": "a.",
        "definition": "Characterizing the ovum when it has two primary germinal layers."
    },
    "diploe": {
        "wordtype": "n.",
        "definition": "The soft, spongy, or cancellated substance between the plates of the skull."
    },
    "diplomatial": {
        "wordtype": "a.",
        "definition": "Diplomatic."
    },
    "diplomatism": {
        "wordtype": "n.",
        "definition": "Diplomacy."
    },
    "dipyre": {
        "wordtype": "n.",
        "definition": "A mineral of the scapolite group; -- so called from the double effect of fire upon it, in fusing it, and rendering it phosphorescent."
    },
    "disacquaint": {
        "wordtype": "v. t.",
        "definition": "To render unacquainted; to make unfamiliar."
    },
    "disadventure": {
        "wordtype": "n.",
        "definition": "Misfortune; mishap."
    },
    "disaffectionate": {
        "wordtype": "a.",
        "definition": "Not disposed to affection; unfriendly; disaffected."
    },
    "disaggregate": {
        "wordtype": "v. t.",
        "definition": "To destroy the aggregation of; to separate into component parts, as an aggregate mass."
    },
    "disagreeance": {
        "wordtype": "n.",
        "definition": "Disagreement."
    },
    "disagreement": {
        "wordtype": "n.",
        "definition": "The state of disagreeing; a being at variance; dissimilitude; diversity."
    },
    "disangelical": {
        "wordtype": "a.",
        "definition": "Not angelical."
    },
    "disappendency": {
        "wordtype": "n.",
        "definition": "A detachment or separation from a former connection."
    },
    "disapprobation": {
        "wordtype": "n.",
        "definition": "The act of disapproving; mental condemnation of what is judged wrong, unsuitable, or inexpedient; feeling of censure."
    },
    "disapprover": {
        "wordtype": "n.",
        "definition": "One who disapproves."
    },
    "disapprovingly": {
        "wordtype": "adv.",
        "definition": "In a disapproving manner."
    },
    "disassiduity": {
        "wordtype": "n.",
        "definition": "Want of assiduity or care."
    },
    "disassociate": {
        "wordtype": "v. t.",
        "definition": "To disconnect from things associated; to disunite; to dissociate."
    },
    "disaventurous": {
        "wordtype": "a.",
        "definition": "Misadventurous; unfortunate."
    },
    "disavowance": {
        "wordtype": "n.",
        "definition": "Disavowal."
    },
    "disboscation": {
        "wordtype": "n.",
        "definition": "Converting forest land into cleared or arable land; removal of a forest."
    },
    "disbud": {
        "wordtype": "v.",
        "definition": "To deprive of buds or shoots, as for training, or economizing the vital strength of a tree."
    },
    "disceptator": {
        "wordtype": "n.",
        "definition": "One who arbitrates or decides."
    },
    "discerningly": {
        "wordtype": "adv.",
        "definition": "In a discerning manner; with judgment; judiciously; acutely."
    },
    "discerptible": {
        "wordtype": "a.",
        "definition": "Capable of being discerped."
    },
    "disciplinableness": {
        "wordtype": "n.",
        "definition": "The quality of being improvable by discipline."
    },
    "disciplinal": {
        "wordtype": "a.",
        "definition": "Relating to discipline."
    },
    "disciplinary": {
        "wordtype": "a.",
        "definition": "Pertaining to discipline; intended for discipline; corrective; belonging to a course of training."
    },
    "discipliner": {
        "wordtype": "n.",
        "definition": "One who disciplines."
    },
    "discoblastic": {
        "wordtype": "a.",
        "definition": "Applied to a form of egg cleavage seen in osseous fishes, which occurs only in a small disk that separates from the rest of the egg."
    },
    "discolorate": {
        "wordtype": "v. t.",
        "definition": "To discolor."
    },
    "disconcertion": {
        "wordtype": "n.",
        "definition": "The act of disconcerting, or state of being disconcerted; discomposure; perturbation."
    },
    "disconducive": {
        "wordtype": "a.",
        "definition": "Not conductive; impeding; disadvantageous."
    },
    "disconformity": {
        "wordtype": "n.",
        "definition": "Want of conformity or correspondence; inconsistency; disagreement."
    },
    "discongruity": {
        "wordtype": "n.",
        "definition": "Incongruity; disagreement; unsuitableness."
    },
    "disconsolate": {
        "wordtype": "n.",
        "definition": "Disconsolateness."
    },
    "disconsolation": {
        "wordtype": "n.",
        "definition": "Dejection; grief."
    },
    "discontented": {
        "wordtype": "p. p. & a.",
        "definition": "Dissatisfied; uneasy in mind; malcontent."
    },
    "discontinuee": {
        "wordtype": "n.",
        "definition": "One whose possession of an estate is broken off, or discontinued; one whose estate is subject to discontinuance."
    },
    "disconvenience": {
        "wordtype": "n.",
        "definition": "Unsuitableness; incongruity."
    },
    "discountable": {
        "wordtype": "a.",
        "definition": "Capable of being, or suitable to be, discounted; as, certain forms are necessary to render notes discountable at a bank."
    },
    "discountenancer": {
        "wordtype": "n.",
        "definition": "One who discountenances; one who disfavors."
    },
    "discourager": {
        "wordtype": "n.",
        "definition": "One who discourages."
    },
    "discretionary": {
        "wordtype": "",
        "definition": "Left to discretion; unrestrained except by discretion or judgment; as, an ambassador with discretionary powers."
    },
    "discubitory": {
        "wordtype": "a.",
        "definition": "Leaning; fitted for a reclining posture."
    },
    "discussional": {
        "wordtype": "a.",
        "definition": "Pertaining to discussion."
    },
    "disdainishly": {
        "wordtype": "adv.",
        "definition": "Disdainfully."
    },
    "disdiaclast": {
        "wordtype": "n.",
        "definition": "One of the dark particles forming the doubly refracting disks of muscle fibers."
    },
    "diseasedness": {
        "wordtype": "n.",
        "definition": "The state of being diseased; a morbid state; sickness."
    },
    "disembarkment": {
        "wordtype": "n.",
        "definition": "Disembarkation."
    },
    "disembellish": {
        "wordtype": "v. t.",
        "definition": "To deprive of embellishment; to disadorn."
    },
    "disembowelment": {
        "wordtype": "n.",
        "definition": "The act of disemboweling, or state of being disemboweled; evisceration."
    },
    "disembrangle": {
        "wordtype": "v. t.",
        "definition": "To free from wrangling or litigation."
    },
    "disenshrouded": {
        "wordtype": "a.",
        "definition": "Freed from a shroudlike covering; unveiled."
    },
    "disentangle": {
        "wordtype": "v. t.",
        "definition": "To extricate from complication and perplexity; disengage from embarrassing connection or intermixture; to disembroil; to set free; to separate."
    },
    "disentanglement": {
        "wordtype": "n.",
        "definition": "The act of disentangling or clearing from difficulties."
    },
    "disenthrallment": {
        "wordtype": "n.",
        "definition": "Liberation from bondage; emancipation; disinthrallment."
    },
    "disestablish": {
        "wordtype": "v. t.",
        "definition": "To unsettle; to break up (anything established); to deprive, as a church, of its connection with the state."
    },
    "disestimation": {
        "wordtype": "n.",
        "definition": "Disesteem."
    },
    "disgraceful": {
        "wordtype": "a.",
        "definition": "Bringing disgrace; causing shame; shameful; dishonorable; unbecoming; as, profaneness is disgraceful to a man."
    },
    "disgracious": {
        "wordtype": "a.",
        "definition": "Wanting grace; unpleasing; disagreeable."
    },
    "disgregation": {
        "wordtype": "n.",
        "definition": "The process of separation, or the condition of being separate, as of the molecules of a body."
    },
    "disguisedfy": {
        "wordtype": "adv.",
        "definition": "In disguise."
    },
    "disguisedness": {
        "wordtype": "n.",
        "definition": "The state of being disguised."
    },
    "dishonorary": {
        "wordtype": "a.",
        "definition": "Bringing dishonor on; tending to disgrace; lessening reputation."
    },
    "disincorporate": {
        "wordtype": "v. t.",
        "definition": "To deprive of corporate powers, rights, or privileges; to divest of the condition of a corporate body."
    },
    "disingenuity": {
        "wordtype": "n.",
        "definition": "Disingenuousness."
    },
    "disingenuous": {
        "wordtype": "a.",
        "definition": "Not noble; unbecoming true honor or dignity; mean; unworthy; as, disingenuous conduct or schemes."
    },
    "disintegrable": {
        "wordtype": "a.",
        "definition": "Capable of being disintegrated, or reduced to fragments or powder."
    },
    "disinthrallment": {
        "wordtype": "n.",
        "definition": "A releasing from thralldom or slavery; disenthrallment."
    },
    "disjunctive": {
        "wordtype": "a.",
        "definition": "Tending to disjoin; separating; disjoining."
    },
    "dislikeness": {
        "wordtype": "n.",
        "definition": "Unlikeness."
    },
    "disman": {
        "wordtype": "v. t.",
        "definition": "To unman."
    },
    "disme": {
        "wordtype": "n.",
        "definition": "A tenth; a tenth part; a tithe."
    },
    "dismortgage": {
        "wordtype": "v. t.",
        "definition": "To redeem from mortgage."
    },
    "disnaturalize": {
        "wordtype": "v. t.",
        "definition": "To make alien; to deprive of the privileges of birth."
    },
    "disoxygenation": {
        "wordtype": "n.",
        "definition": "Deoxidation."
    },
    "dispassionate": {
        "wordtype": "a.",
        "definition": "Free from passion; not warped, prejudiced, swerved, or carried away by passion or feeling; judicial; calm; composed."
    },
    "dispatchment": {
        "wordtype": "n.",
        "definition": "The act of dispatching."
    },
    "dispensative": {
        "wordtype": "a.",
        "definition": "Granting dispensation."
    },
    "dispensatively": {
        "wordtype": "adv.",
        "definition": "By dispensation."
    },
    "dispensator": {
        "wordtype": "n.",
        "definition": "A distributer; a dispenser."
    },
    "disspermous": {
        "wordtype": "a.",
        "definition": "Containing only two seeds; two-seeded."
    },
    "disperseness": {
        "wordtype": "n.",
        "definition": "Dispersedness."
    },
    "displantation": {
        "wordtype": "n.",
        "definition": "The act of displanting; removal; displacement."
    },
    "dispraisingly": {
        "wordtype": "adv.",
        "definition": "By way of dispraise."
    },
    "disprovable": {
        "wordtype": "a.",
        "definition": "Capable of being disproved or refuted."
    },
    "dispurveyance": {
        "wordtype": "n.",
        "definition": "Want of provisions; /ack of food."
    },
    "disputatious": {
        "wordtype": "a.",
        "definition": "Inclined to dispute; apt to civil or controvert; characterized by dispute; as, a disputatious person or temper."
    },
    "disputative": {
        "wordtype": "a.",
        "definition": "Disposed to dispute; inclined to cavil or to reason in opposition; as, a disputative temper."
    },
    "disquietful": {
        "wordtype": "a.",
        "definition": "Producing inquietude or uneasiness."
    },
    "disquietous": {
        "wordtype": "a.",
        "definition": "Causing uneasiness."
    },
    "disquisitional": {
        "wordtype": "a.",
        "definition": "Pertaining to disquisition; of the nature of disquisition."
    },
    "disregarder": {
        "wordtype": "n.",
        "definition": "One who disregards."
    },
    "dissectible": {
        "wordtype": "a.",
        "definition": "Capable of being dissected, or separated by dissection."
    },
    "disseminator": {
        "wordtype": "n.",
        "definition": "One who, or that which, disseminates, spreads, or propagates; as, disseminators of disease."
    },
    "dissepiment": {
        "wordtype": "n.",
        "definition": "A separating tissue; a partition; a septum."
    },
    "dissimulate": {
        "wordtype": "a.",
        "definition": "Feigning; simulating; pretending."
    },
    "dissimulour": {
        "wordtype": "n.",
        "definition": "A dissembler."
    },
    "dissipativity": {
        "wordtype": "n.",
        "definition": "The rate at which palpable energy is dissipated away into other forms of energy."
    },
    "dissociability": {
        "wordtype": "n.",
        "definition": "Want of sociability; unsociableness."
    },
    "dissociation": {
        "wordtype": "n.",
        "definition": "The act of dissociating or disuniting; a state of separation; disunion."
    },
    "dissolution": {
        "wordtype": "n.",
        "definition": "The act of dissolving, sundering, or separating into component parts; separation."
    },
    "dissolvative": {
        "wordtype": "n.",
        "definition": "Having the power to dissolve anything; solvent."
    },
    "dissymmetrical": {
        "wordtype": "a.",
        "definition": "Not having symmetry; asymmetrical; unsymmetrical."
    },
    "distemperately": {
        "wordtype": "adv.",
        "definition": "Unduly."
    },
    "distensible": {
        "wordtype": "a.",
        "definition": "Capable of being distended or dilated."
    },
    "distinctness": {
        "wordtype": "n.",
        "definition": "The quality or state of being distinct; a separation or difference that prevents confusion of parts or things."
    },
    "distracting": {
        "wordtype": "a.",
        "definition": "Tending or serving to distract."
    },
    "distrainable": {
        "wordtype": "a.",
        "definition": "Capable of being, or liable to be, distrained."
    },
    "distributionist": {
        "wordtype": "n.",
        "definition": "A distributer."
    },
    "disulphuric": {
        "wordtype": "a.",
        "definition": "Applied to an acid having in each molecule two atoms of sulphur in the higher state of oxidation."
    },
    "dite": {
        "wordtype": "v. t.",
        "definition": "To prepare for action or use; to make ready; to dight."
    },
    "divan": {
        "wordtype": "n.",
        "definition": "A book; esp., a collection of poems written by one author; as, the divan of Hafiz."
    },
    "divarication": {
        "wordtype": "n.",
        "definition": "A separation into two parts or branches; a forking; a divergence."
    },
    "divast": {
        "wordtype": "a.",
        "definition": "Devastated; laid waste."
    },
    "divergingly": {
        "wordtype": "adv.",
        "definition": "In a diverging manner."
    },
    "divertissement": {
        "wordtype": "n.",
        "definition": "A short ballet, or other entertainment, between the acts of a play."
    },
    "divide": {
        "wordtype": "v. t.",
        "definition": "To part asunder (a whole); to sever into two or more parts or pieces; to sunder; to separate into parts."
    },
    "doable": {
        "wordtype": "a.",
        "definition": "Capable of being done."
    },
    "docity": {
        "wordtype": "n.",
        "definition": "Teachableness."
    },
    "doctrinable": {
        "wordtype": "a.",
        "definition": "Of the nature of, or constituting, doctrine."
    },
    "doctrinarian": {
        "wordtype": "n.",
        "definition": "A doctrinaire."
    },
    "doctrinarianism": {
        "wordtype": "n.",
        "definition": "The principles or practices of the Doctrinaires."
    },
    "dodecahedron": {
        "wordtype": "n.",
        "definition": "A solid having twelve faces."
    },
    "dodge": {
        "wordtype": "v. i.",
        "definition": "To start suddenly aside, as to avoid a blow or a missile; to shift place by a sudden start."
    },
    "dogged": {
        "wordtype": "a.",
        "definition": "Sullen; morose."
    },
    "dogmatically": {
        "wordtype": "adv.",
        "definition": "In a dogmatic manner; positively; magisterially."
    },
    "dogmatician": {
        "wordtype": "n.",
        "definition": "A dogmatist."
    },
    "dolichocephalous": {
        "wordtype": "a.",
        "definition": "Having the cranium, or skull, long to its breadth; long-headed; -- opposed to brachycephalic."
    },
    "doll": {
        "wordtype": "n.",
        "definition": "A child's puppet; a toy baby for a little girl."
    },
    "dolt": {
        "wordtype": "n.",
        "definition": "A heavy, stupid fellow; a blockhead; a numskull; an ignoramus; a dunce; a dullard."
    },
    "dom": {
        "wordtype": "n.",
        "definition": "In Portugal and Brazil, the title given to a member of the higher classes."
    },
    "domage": {
        "wordtype": "n.",
        "definition": "Damage; hurt."
    },
    "domain": {
        "wordtype": "n.",
        "definition": "Dominion; empire; authority."
    },
    "domed": {
        "wordtype": "a.",
        "definition": "Furnished with a dome; shaped like a dome."
    },
    "domesticate": {
        "wordtype": "a.",
        "definition": "To make domestic; to habituate to home life; as, to domesticate one's self."
    },
    "domesticator": {
        "wordtype": "n.",
        "definition": "One who domesticates."
    },
    "domett": {
        "wordtype": "n.",
        "definition": "A kind of baize of which the ward is cotton and the weft woolen."
    },
    "domiciliate": {
        "wordtype": "v. t.",
        "definition": "To establish in a permanent residence; to domicile."
    },
    "domify": {
        "wordtype": "v. t.",
        "definition": "To divide, as the heavens, into twelve houses. See House, in astrological sense."
    },
    "doa": {
        "wordtype": "n.",
        "definition": "Lady; mistress; madam; -- a title of respect used in Spain, prefixed to the Christian name of a lady."
    },
    "donary": {
        "wordtype": "n.",
        "definition": "A thing given to a sacred use."
    },
    "donat": {
        "wordtype": "n.",
        "definition": "A grammar."
    },
    "donee": {
        "wordtype": "n.",
        "definition": "The person to whom a gift or donation is made."
    },
    "doole": {
        "wordtype": "n.",
        "definition": "Sorrow; dole."
    },
    "dooly": {
        "wordtype": "n.",
        "definition": "A kind of litter suspended from men's shoulders, for carrying persons or things; a palanquin."
    },
    "dop": {
        "wordtype": "v. i.",
        "definition": "To dip."
    },
    "doree": {
        "wordtype": "n.",
        "definition": "A European marine fish (Zeus faber), of a yellow color. See Illust. of John Doree."
    },
    "dorsel": {
        "wordtype": "n.",
        "definition": "A pannier."
    },
    "dossil": {
        "wordtype": "n.",
        "definition": "A small ovoid or cylindrical roil or pledget of lint, for keeping a sore, wound, etc., open; a tent."
    },
    "dotard": {
        "wordtype": "v. i.",
        "definition": "One whose mind is impaired by age; one in second childhood."
    },
    "dotary": {
        "wordtype": "n.",
        "definition": "A dotard's weakness; dotage."
    },
    "doubleminded": {
        "wordtype": "a.",
        "definition": "Having different minds at different times; unsettled; undetermined."
    },
    "doubt": {
        "wordtype": "v. i.",
        "definition": "To suspect; to fear; to be apprehensive."
    },
    "dour": {
        "wordtype": "a.",
        "definition": "Hard; inflexible; obstinate; sour in aspect; hardy; bold."
    },
    "dowel": {
        "wordtype": "n.",
        "definition": "A piece of wood driven into a wall, so that other pieces may be nailed to it."
    },
    "dowle": {
        "wordtype": "n.",
        "definition": "Feathery or wool-like down; filament of a feather."
    },
    "downfalling": {
        "wordtype": "a.",
        "definition": "Falling down."
    },
    "downhearted": {
        "wordtype": "a.",
        "definition": "Dejected; low-spirited."
    },
    "downsitting": {
        "wordtype": "n.",
        "definition": "The act of sitting down; repose; a resting."
    },
    "dowry": {
        "wordtype": "n.",
        "definition": "A gift; endowment."
    },
    "dowse": {
        "wordtype": "v. t.",
        "definition": "To plunge, or duck into water; to immerse; to douse."
    },
    "dowst": {
        "wordtype": "n.",
        "definition": "A dowse."
    },
    "doze": {
        "wordtype": "v. i.",
        "definition": "To slumber; to sleep lightly; to be in a dull or stupefied condition, as if half asleep; to be drowsy."
    },
    "drachm": {
        "wordtype": "n.",
        "definition": "A drachmadjective"
    },
    "dracunculus": {
        "wordtype": "n.",
        "definition": "A fish; the dragonet."
    },
    "dradge": {
        "wordtype": "n.",
        "definition": "Inferior ore, separated from the better by cobbing."
    },
    "drain": {
        "wordtype": "v. t.",
        "definition": "To draw off by degrees; to cause to flow gradually out or off; hence, to cause the exhaustion of."
    },
    "dramaturgist": {
        "wordtype": "n.",
        "definition": "One versed in dramaturgy."
    },
    "draughtboard": {
        "wordtype": "n.",
        "definition": "A checkered board on which draughts are played. See Checkerboard."
    },
    "dreadfulness": {
        "wordtype": "n.",
        "definition": "The quality of being dreadful."
    },
    "dredge": {
        "wordtype": "n.",
        "definition": "Very fine mineral matter held in suspension in water."
    },
    "dreggy": {
        "wordtype": "a.",
        "definition": "Containing dregs or lees; muddy; foul; feculent."
    },
    "drent": {
        "wordtype": "p. p.",
        "definition": "Drenched; drowned."
    },
    "drillmaster": {
        "wordtype": "n.",
        "definition": "One who teaches drill, especially in the way of gymnastics."
    },
    "drivel": {
        "wordtype": "v. i.",
        "definition": "To be weak or foolish; to dote; as, a driveling hero; driveling love."
    },
    "droil": {
        "wordtype": "v. i.",
        "definition": "To work sluggishly or slowly; to plod."
    },
    "drome": {
        "wordtype": "n.",
        "definition": "The crab plover (Dromas ardeola), a peculiar North African bird, allied to the oyster catcher."
    },
    "drove": {
        "wordtype": "n.",
        "definition": "A collection of cattle driven, or cattle collected for driving; a number of animals, as oxen, sheep, or swine, driven in a body."
    },
    "drovy": {
        "wordtype": "a.",
        "definition": "Turbid; muddy; filthy."
    },
    "drunkenhead": {
        "wordtype": "n.",
        "definition": "Drunkenness."
    },
    "drunkenness": {
        "wordtype": "n.",
        "definition": "The state of being drunken with, or as with, alcoholic liquor; intoxication; inebriety; -- used of the casual state or the habit."
    },
    "drused": {
        "wordtype": "a.",
        "definition": "Covered with a large number of minute crystals."
    },
    "drith": {
        "wordtype": "n.",
        "definition": "Drought."
    },
    "dual": {
        "wordtype": "a.",
        "definition": "Expressing, or consisting of, the number two; belonging to two; as, the dual number of nouns, etc. , in Greek."
    },
    "duchy": {
        "wordtype": "n.",
        "definition": "The territory or dominions of a duke; a dukedom."
    },
    "duct": {
        "wordtype": "n.",
        "definition": "Any tube or canal by which a fluid or other substance is conducted or conveyed."
    },
    "ductor": {
        "wordtype": "n.",
        "definition": "One who leads."
    },
    "duds": {
        "wordtype": "n. pl.",
        "definition": "Old or inferior clothes; tattered garments."
    },
    "due": {
        "wordtype": "a.",
        "definition": "Owed, as a debt; that ought to be paid or done to or for another; payable; owing and demandable."
    },
    "duffel": {
        "wordtype": "n.",
        "definition": "A kind of coarse woolen cloth, having a thick nap or frieze."
    },
    "duffer": {
        "wordtype": "n.",
        "definition": "A peddler or hawker, especially of cheap, flashy articles, as sham jewelry; hence, a sham or cheat."
    },
    "dulcification": {
        "wordtype": "n.",
        "definition": "The act of dulcifying or sweetening."
    },
    "dump": {
        "wordtype": "n.",
        "definition": "A thick, ill-shapen piece; a clumsy leaden counter used by boys in playing chuck farthing."
    },
    "dumpy": {
        "wordtype": "superl.",
        "definition": "Short and thick; of low stature and disproportionately stout."
    },
    "dune": {
        "wordtype": "n.",
        "definition": "A low hill of drifting sand usually formed on the coats, but often carried far inland by the prevailing winds."
    },
    "duodecimfid": {
        "wordtype": "a.",
        "definition": "Divided into twelve parts."
    },
    "duplicative": {
        "wordtype": "a.",
        "definition": "Having the quality of duplicating or doubling."
    },
    "dura": {
        "wordtype": "n.",
        "definition": "Short form for Dura mater."
    },
    "dure": {
        "wordtype": "a.",
        "definition": "Hard; harsh; severe; rough; toilsome."
    },
    "dusky": {
        "wordtype": "a.",
        "definition": "Partially dark or obscure; not luminous; dusk; as, a dusky valley."
    },
    "dust": {
        "wordtype": "n.",
        "definition": "A single particle of earth or other matter."
    },
    "duty": {
        "wordtype": "n.",
        "definition": "That which is due; payment."
    },
    "dwarf": {
        "wordtype": "n.",
        "definition": "An animal or plant which is much below the ordinary size of its species or kind; especially, a diminutive human being."
    },
    "dyad": {
        "wordtype": "n.",
        "definition": "Two units treated as one; a couple; a pair."
    },
    "dye": {
        "wordtype": "v. t.",
        "definition": "To stain; to color; to give a new and permanent color to, as by the application of dyestuffs."
    },
    "dying": {
        "wordtype": "a.",
        "definition": "In the act of dying; destined to death; mortal; perishable; as, dying bodies."
    },
    "dynactinometer": {
        "wordtype": "n.",
        "definition": "An instrument for measuring the intensity of the photogenic (light-producing) rays, and computing the power of object glasses."
    },
    "dynamically": {
        "wordtype": "adv.",
        "definition": "In accordance with the principles of dynamics or moving forces."
    },
    "dynamo": {
        "wordtype": "n.",
        "definition": "A dynamo-electric machine."
    },
    "dynast": {
        "wordtype": "n.",
        "definition": "A ruler; a governor; a prince."
    },
    "dysmenorrhea": {
        "wordtype": "n.",
        "definition": "Difficult and painful menstruation."
    },
    "eagle": {
        "wordtype": "n.",
        "definition": "A gold coin of the United States, of the value of ten dollars."
    },
    "ean": {
        "wordtype": "v. t. & i.",
        "definition": "To bring forth, as young; to yean."
    },
    "eared": {
        "wordtype": "a.",
        "definition": "Having (such or so many) ears; -- used in composition; as, long-eared-eared; sharp-eared; full-eared; ten-eared."
    },
    "early": {
        "wordtype": "adv.",
        "definition": "Soon; in good season; seasonably; betimes; as, come early."
    },
    "earth": {
        "wordtype": "n.",
        "definition": "The solid materials which make up the globe, in distinction from the air or water; the dry land."
    },
    "easily": {
        "wordtype": "adv.",
        "definition": "With ease; without difficulty or much effort; as, this task may be easily performed; that event might have been easily foreseen."
    },
    "eath": {
        "wordtype": "a. & adv.",
        "definition": "Easy or easily."
    },
    "ebb": {
        "wordtype": "n.",
        "definition": "The European bunting."
    },
    "ebracteolate": {
        "wordtype": "a.",
        "definition": "Without bracteoles, or little bracts; -- said of a pedicel or flower stalk."
    },
    "eccentricity": {
        "wordtype": "n.",
        "definition": "The state of being eccentric; deviation from the customary line of conduct; oddity."
    },
    "eccle": {
        "wordtype": "n.",
        "definition": "The European green woodpecker; -- also called ecall, eaquall, yaffle."
    },
    "ecclesiologist": {
        "wordtype": "n.",
        "definition": "One versed in ecclesiology."
    },
    "eclair": {
        "wordtype": "n.",
        "definition": "A kind of frosted cake, containing flavored cream."
    },
    "eclaircissement": {
        "wordtype": "v. t.",
        "definition": "The clearing up of anything which is obscure or not easily understood; an explanation."
    },
    "ectad": {
        "wordtype": "adv.",
        "definition": "Toward the outside or surface; -- opposed to entad."
    },
    "ectoparasite": {
        "wordtype": "n.",
        "definition": "Any parasite which lives on the exterior of animals; -- opposed to endoparasite."
    },
    "edenic": {
        "wordtype": "a.",
        "definition": "Of or pertaining to Eden; paradisaic."
    },
    "edulcoration": {
        "wordtype": "n.",
        "definition": "The act of sweetening or edulcorating."
    },
    "eelpot": {
        "wordtype": "n.",
        "definition": "A boxlike structure with funnel-shaped traps for catching eels; an eelbuck."
    },
    "een": {
        "wordtype": "n.",
        "definition": "The old plural of Eye."
    },
    "effascinate": {
        "wordtype": "v. t.",
        "definition": "To charm; to bewitch."
    },
    "effemination": {
        "wordtype": "n.",
        "definition": "Effeminacy; womanishness."
    },
    "effervescible": {
        "wordtype": "a.",
        "definition": "Capable of effervescing."
    },
    "effet": {
        "wordtype": "n.",
        "definition": "The common newt; -- called also asker, eft, evat, and ewt."
    },
    "effigiation": {
        "wordtype": "n.",
        "definition": "The act of forming in resemblance; an effigy."
    },
    "effort": {
        "wordtype": "n.",
        "definition": "A force acting on a body in the direction of its motion."
    },
    "effranchise": {
        "wordtype": "v. t.",
        "definition": "To enfranchise."
    },
    "effray": {
        "wordtype": "v. t.",
        "definition": "To frighten; to scare."
    },
    "effulgently": {
        "wordtype": "adv.",
        "definition": "In an effulgent manner."
    },
    "egad": {
        "wordtype": "interj.",
        "definition": "An exclamation expressing exultation or surprise, etc."
    },
    "egal": {
        "wordtype": "a.",
        "definition": "Equal; impartial."
    },
    "egghot": {
        "wordtype": "n.",
        "definition": "A kind of posset made of eggs, brandy, sugar, and ale."
    },
    "egoist": {
        "wordtype": "n.",
        "definition": "One given overmuch to egoism or thoughts of self."
    },
    "egotistically": {
        "wordtype": "adv.",
        "definition": "With egotism."
    },
    "egregiousness": {
        "wordtype": "n.",
        "definition": "The state of being egregious."
    },
    "egyptological": {
        "wordtype": "a.",
        "definition": "Of, pertaining to, or devoted to, Egyptology."
    },
    "eigne": {
        "wordtype": "a.",
        "definition": "Eldest; firstborn."
    },
    "ejaculation": {
        "wordtype": "n.",
        "definition": "The act of throwing or darting out with a sudden force and rapid flight."
    },
    "elaborative": {
        "wordtype": "a.",
        "definition": "Serving or tending to elaborate; constructing with labor and minute attention to details."
    },
    "elaboratory": {
        "wordtype": "a.",
        "definition": "Tending to elaborate."
    },
    "elater": {
        "wordtype": "n.",
        "definition": "One who, or that which, elates."
    },
    "elatrometer": {
        "wordtype": "n.",
        "definition": "An instrument for measuring the degree of rarefaction of air contained in the receiver of an air pump."
    },
    "eld": {
        "wordtype": "a.",
        "definition": "Old."
    },
    "elding": {
        "wordtype": "n.",
        "definition": "Fuel."
    },
    "electorality": {
        "wordtype": "n.",
        "definition": "The territory or dignity of an elector; electorate."
    },
    "electorship": {
        "wordtype": "n.",
        "definition": "The office or status of an elector."
    },
    "electrition": {
        "wordtype": "n.",
        "definition": "The recognition by an animal body of the electrical condition of external objects."
    },
    "electrocute": {
        "wordtype": "v. t.",
        "definition": "To execute or put to death by electricity. -- E*lec`tro*cu\"tion, n. [Recent; Newspaper words]"
    },
    "electrolytical": {
        "wordtype": "a.",
        "definition": "Pertaining to electrolysis; as, electrolytic action."
    },
    "electrolyzable": {
        "wordtype": "a.",
        "definition": "Capable of being electrolyzed, or decomposed by electricity."
    },
    "elextrometry": {
        "wordtype": "n.",
        "definition": "The art or process of making electrical measurements."
    },
    "electromotor": {
        "wordtype": "n.",
        "definition": "A mover or exciter of electricity; as apparatus for generating a current of electricity."
    },
    "electroscopic": {
        "wordtype": "a.",
        "definition": "Relating to, or made by means of, the electroscope."
    },
    "electrotonize": {
        "wordtype": "v. t.",
        "definition": "To cause or produce electrotonus."
    },
    "electrotonous": {
        "wordtype": "a.",
        "definition": "Electrotonic."
    },
    "electrotype": {
        "wordtype": "n.",
        "definition": "A facsimile plate made by electrotypy for use in printing; also, an impression or print from such plate. Also used adjectively."
    },
    "elegiographer": {
        "wordtype": "n.",
        "definition": "An elegist."
    },
    "elementally": {
        "wordtype": "adv.",
        "definition": "According to elements; literally; as, the words, \"Take, eat; this is my body,\" elementally understood."
    },
    "elench": {
        "wordtype": "n.",
        "definition": "That part of an argument on which its conclusiveness depends; that which convinces of refutes an antagonist; a refutation."
    },
    "elison": {
        "wordtype": "n.",
        "definition": "Division; separation."
    },
    "elite": {
        "wordtype": "n.",
        "definition": "A choice or select body; the flower; as, the elite of society."
    },
    "elocutionist": {
        "wordtype": "n.",
        "definition": "One who is versed in elocution; a teacher of elocution."
    },
    "eloge": {
        "wordtype": "n.",
        "definition": "A panegyrical funeral oration."
    },
    "elogy": {
        "wordtype": "n.",
        "definition": "The praise bestowed on a person or thing; panegyric; eulogy."
    },
    "elute": {
        "wordtype": "v. t.",
        "definition": "To wash out."
    },
    "elvan": {
        "wordtype": "a.",
        "definition": "Pertaining to elves; elvish."
    },
    "emaceration": {
        "wordtype": "n.",
        "definition": "Emaciation."
    },
    "emancipationist": {
        "wordtype": "n.",
        "definition": "An advocate of emancipation, esp. the emancipation of slaves."
    },
    "embarkation": {
        "wordtype": "n.",
        "definition": "The act of putting or going on board of a vessel; as, the embarkation of troops."
    },
    "embarrassment": {
        "wordtype": "n.",
        "definition": "Difficulty or perplexity arising from the want of money to pay debts."
    },
    "embattlement": {
        "wordtype": "n.",
        "definition": "The fortifying of a building or a wall by means of battlements."
    },
    "embellisher": {
        "wordtype": "n.",
        "definition": "One who embellishes."
    },
    "embiotocoid": {
        "wordtype": "a.",
        "definition": "Belonging to, or resembling, the Embiotocidae."
    },
    "emblazoning": {
        "wordtype": "n.",
        "definition": "The act or art of heraldic decoration; delineation of armorial bearings."
    },
    "emblem": {
        "wordtype": "n.",
        "definition": "Inlay; inlaid or mosaic work; something ornamental inserted in a surface."
    },
    "emblematist": {
        "wordtype": "n.",
        "definition": "A writer or inventor of emblems."
    },
    "emblematize": {
        "wordtype": "v. t.",
        "definition": "To represent by, or as by, an emblem; to symbolize."
    },
    "embody": {
        "wordtype": "v. i.",
        "definition": "To unite in a body, a mass, or a collection; to coalesce."
    },
    "emboil": {
        "wordtype": "v. i.",
        "definition": "To boil with anger; to effervesce."
    },
    "embranchment": {
        "wordtype": "n.",
        "definition": "The branching forth, as of trees."
    },
    "embrocation": {
        "wordtype": "n.",
        "definition": "The act of moistening and rubbing a diseased part with spirit, oil, etc."
    },
    "embryological": {
        "wordtype": "a.",
        "definition": "Of or pertaining to embryology."
    },
    "embryonated": {
        "wordtype": "a.",
        "definition": "In the state of, or having, an embryonal."
    },
    "embryoniferous": {
        "wordtype": "a.",
        "definition": "Having an embryo."
    },
    "embryoplastic": {
        "wordtype": "n.",
        "definition": "Relating to, or aiding in, the formation of an embryo; as, embryoplastic cells."
    },
    "embush": {
        "wordtype": "v. t.",
        "definition": "To place or hide in a thicket; to ambush."
    },
    "emesis": {
        "wordtype": "n.",
        "definition": "A vomiting."
    },
    "emigrational": {
        "wordtype": "a.",
        "definition": "Relating to emigration."
    },
    "emmet": {
        "wordtype": "n.",
        "definition": "An ant."
    },
    "emmew": {
        "wordtype": "v. t.",
        "definition": "To mew or coop up."
    },
    "emmove": {
        "wordtype": "v. t.",
        "definition": "To move; to rouse; to excite."
    },
    "emolumental": {
        "wordtype": "a.",
        "definition": "Pertaining to an emolument; profitable."
    },
    "emotionalism": {
        "wordtype": "n.",
        "definition": "The cultivation of an emotional state of mind; tendency to regard things in an emotional manner."
    },
    "empark": {
        "wordtype": "v. t.",
        "definition": "To make a park of; to inclose, as with a fence; to impark."
    },
    "empire": {
        "wordtype": "n.",
        "definition": "Supreme power; sovereignty; sway; dominion."
    },
    "empuse": {
        "wordtype": "n.",
        "definition": "A phantom or specter."
    },
    "enable": {
        "wordtype": "v. t.",
        "definition": "To give strength or ability to; to make firm and strong."
    },
    "enaliosauria": {
        "wordtype": "n. pl.",
        "definition": "An extinct group of marine reptiles, embracing both the Ichthyosauria and the Plesiosauria, now regarded as distinct orders."
    },
    "enaliosaurian": {
        "wordtype": "a.",
        "definition": "Pertaining to the Enaliosauriadjective"
    },
    "enantiomorphous": {
        "wordtype": "a.",
        "definition": "Similar, but not superposable, i. e., related to each other as a right-handed to a left-handed glove; -- said of certain hemihedral crystals."
    },
    "encephalocele": {
        "wordtype": "n.",
        "definition": "Hernia of the brain."
    },
    "enchiridion": {
        "wordtype": "n.",
        "definition": "Handbook; a manual of devotions."
    },
    "enclavement": {
        "wordtype": "n.",
        "definition": "The state of being an enclave."
    },
    "enclitically": {
        "wordtype": "adv.",
        "definition": "In an enclitic manner; by throwing the accent back."
    },
    "encyclopedian": {
        "wordtype": "a.",
        "definition": "Embracing the whole circle of learning, or a wide range of subjects."
    },
    "encyclopedical": {
        "wordtype": "a.",
        "definition": "Pertaining to, or of the nature of, an encyclopedia; embracing a wide range of subjects."
    },
    "endecagynous": {
        "wordtype": "a.",
        "definition": "Having eleven pistils; as, an endecagynous flower."
    },
    "ending": {
        "wordtype": "n.",
        "definition": "Termination; concluding part; result; conclusion; destruction; death."
    },
    "endochondral": {
        "wordtype": "a.",
        "definition": "Growing or developing within cartilage; -- applied esp. to developing bone."
    },
    "endolymphangial": {
        "wordtype": "a.",
        "definition": "Within a lymphatic vessel."
    },
    "endolymphatic": {
        "wordtype": "a.",
        "definition": "Pertaining to, or containing, endolymph; as, the endolymphatic duct."
    },
    "endometritis": {
        "wordtype": "n.",
        "definition": "Inflammation of the endometrium."
    },
    "endometrium": {
        "wordtype": "n.",
        "definition": "The membrane lining the inner surface of the uterus, or womb."
    },
    "endoskeleton": {
        "wordtype": "n.",
        "definition": "The bony, cartilaginous, or other internal framework of an animal, as distinguished from the exoskeleton."
    },
    "endure": {
        "wordtype": "v. i.",
        "definition": "To continue in the same state without perishing; to last; to remain."
    },
    "energetical": {
        "wordtype": "a.",
        "definition": "Having energy or energies; possessing a capacity for vigorous action or for exerting force; active."
    },
    "enfranchisement": {
        "wordtype": "n.",
        "definition": "Releasing from slavery or custody."
    },
    "engagedness": {
        "wordtype": "n.",
        "definition": "The state of being deeply interested; earnestness; zeal."
    },
    "engird": {
        "wordtype": "v. t.",
        "definition": "To gird; to encompass."
    },
    "enhort": {
        "wordtype": "v. t.",
        "definition": "To encourage."
    },
    "enigmatically": {
        "wordtype": "adv.",
        "definition": "Darkly; obscurely."
    },
    "enlard": {
        "wordtype": "v. t.",
        "definition": "To cover or dress with lard or grease; to fatten."
    },
    "enlightener": {
        "wordtype": "n.",
        "definition": "One who enlightens or illuminates; one who, or that which, communicates light to the eye, or clear views to the mind."
    },
    "enlimn": {
        "wordtype": "v. t.",
        "definition": "To adorn by illuminating or ornamenting with colored and decorated letters and figures, as a book or manuscript."
    },
    "enlist": {
        "wordtype": "v. t.",
        "definition": "To enter on a list; to enroll; to register."
    },
    "enlute": {
        "wordtype": "v. t.",
        "definition": "To coat with clay; to lute."
    },
    "ennead": {
        "wordtype": "n.",
        "definition": "The number nine or a group of nine."
    },
    "enneagynous": {
        "wordtype": "a.",
        "definition": "Having or producing nine pistils or styles; -- said of a flower or plant."
    },
    "enneandrous": {
        "wordtype": "a.",
        "definition": "Having nine stamens."
    },
    "ennew": {
        "wordtype": "v. t.",
        "definition": "To make new."
    },
    "enode": {
        "wordtype": "v. t.",
        "definition": "To clear of knots; to make clear."
    },
    "enopla": {
        "wordtype": "n. pl.",
        "definition": "One of the orders of Nemertina, characterized by the presence of a peculiar armature of spines or plates in the proboscis."
    },
    "enormousness": {
        "wordtype": "n.",
        "definition": "The state of being enormous."
    },
    "enrank": {
        "wordtype": "v. t.",
        "definition": "To place in ranks or in order."
    },
    "enrapt": {
        "wordtype": "p. a.",
        "definition": "Thrown into ecstasy; transported; enraptured."
    },
    "enrive": {
        "wordtype": "v. t.",
        "definition": "To rive; to cleave."
    },
    "enroot": {
        "wordtype": "v. t.",
        "definition": "To fix by the root; to fix fast; to implant deep."
    },
    "ensoul": {
        "wordtype": "v. t.",
        "definition": "To indue or imbue (a body) with soul."
    },
    "ensue": {
        "wordtype": "v. t.",
        "definition": "To follow; to pursue; to follow and overtake."
    },
    "enswathement": {
        "wordtype": "n.",
        "definition": "The act of enswathing, or the state of being enswathed."
    },
    "enter": {
        "wordtype": "v. t.",
        "definition": "To unite in; to join; to be admitted to; to become a member of; as, to enter an association, a college, an army."
    },
    "entertainment": {
        "wordtype": "n.",
        "definition": "The act of receiving as host, or of amusing, admitting, or cherishing; hospitable reception; also, reception or treatment, in general."
    },
    "enthronement": {
        "wordtype": "n.",
        "definition": "The act of enthroning, or state of being enthroned."
    },
    "enthronization": {
        "wordtype": "n.",
        "definition": "The act of enthroning; hence, the admission of a bishop to his stall or throne in his cathedral."
    },
    "entity": {
        "wordtype": "n.",
        "definition": "A real being, whether in thought (as an ideal conception) or in fact; being; essence; existence."
    },
    "entreatment": {
        "wordtype": "n.",
        "definition": "Entreaty; invitation."
    },
    "entree": {
        "wordtype": "n.",
        "definition": "A coming in, or entrance; hence, freedom of access; permission or right to enter; as, to have the entree of a house."
    },
    "enumeration": {
        "wordtype": "n.",
        "definition": "The act of enumerating, making separate mention, or recounting."
    },
    "envier": {
        "wordtype": "n.",
        "definition": "One who envies; one who desires inordinately what another possesses."
    },
    "environment": {
        "wordtype": "n.",
        "definition": "Act of environing; state of being environed."
    },
    "envy": {
        "wordtype": "n.",
        "definition": "Malice; ill will; spite."
    },
    "eozoic": {
        "wordtype": "a.",
        "definition": "Of or pertaining to rocks or strata older than the Paleozoic, in many of which the eozoon has been found."
    },
    "epexegetical": {
        "wordtype": "a.",
        "definition": "Relating to epexegesis; explanatory; exegetical."
    },
    "epicerastic": {
        "wordtype": "a.",
        "definition": "Lenient; assuaging."
    },
    "epicoracoid": {
        "wordtype": "n.",
        "definition": "A ventral cartilaginous or bony element of the coracoid in the shoulder girdle of some vertebrates."
    },
    "epicureanism": {
        "wordtype": "n.",
        "definition": "Attachment to the doctrines of Epicurus; the principles or belief of Epicurus."
    },
    "epidemiography": {
        "wordtype": "n.",
        "definition": "A treatise upon, or history of, epidemic diseases."
    },
    "epidermeous": {
        "wordtype": "a.",
        "definition": "Epidermal."
    },
    "epidictical": {
        "wordtype": "a.",
        "definition": "Serving to explain; demonstrative."
    },
    "epididymitis": {
        "wordtype": "n.",
        "definition": "Inflammation of the epididymis, one of the common results of gonorrheadjective"
    },
    "epignathous": {
        "wordtype": "a.",
        "definition": "Hook-billed; having the upper mandible longer than the lower."
    },
    "epigrammatist": {
        "wordtype": "n.",
        "definition": "One who composes epigrams, or makes use of them."
    },
    "epigrammatizer": {
        "wordtype": "n.",
        "definition": "One who writes in an affectedly pointed style."
    },
    "epigraphics": {
        "wordtype": "n.",
        "definition": "The science or study of epigraphs."
    },
    "epileptical": {
        "wordtype": "a.",
        "definition": "Epileptic."
    },
    "episcoparian": {
        "wordtype": "a.",
        "definition": "Episcopal."
    },
    "epithalamic": {
        "wordtype": "a.",
        "definition": "Belonging to, or designed for, an epithalamium."
    },
    "epithumetical": {
        "wordtype": "a.",
        "definition": "Pertaining to sexual desire; sensual."
    },
    "epodic": {
        "wordtype": "a.",
        "definition": "Pertaining to, or resembling, an epode."
    },
    "epure": {
        "wordtype": "n.",
        "definition": "A draught or model from which to build; especially, one of the full size of the work to be done; a detailed drawing."
    },
    "equalitarian": {
        "wordtype": "n.",
        "definition": "One who believes in equalizing the condition of men; a leveler."
    },
    "equibalance": {
        "wordtype": "n.",
        "definition": "Equal weight; equiponderance."
    },
    "equilibrious": {
        "wordtype": "a.",
        "definition": "Evenly poised; balanced."
    },
    "equinoctial": {
        "wordtype": "a.",
        "definition": "Pertaining to an equinox, or the equinoxes, or to the time of equal day and night; as, the equinoctial line."
    },
    "equinoctially": {
        "wordtype": "adv.",
        "definition": "Towards the equinox."
    },
    "equiponderous": {
        "wordtype": "a.",
        "definition": "Having equal weight."
    },
    "equitemporaneous": {
        "wordtype": "a.",
        "definition": "Contemporaneous."
    },
    "equus": {
        "wordtype": "n.",
        "definition": "A genus of mammals, including the horse, ass, etc."
    },
    "ergot": {
        "wordtype": "n.",
        "definition": "A stub, like soft horn, about the size of a chestnut, situated behind and below the pastern joint."
    },
    "erin": {
        "wordtype": "n.",
        "definition": "An early, and now a poetic, name of Ireland."
    },
    "ermine": {
        "wordtype": "n.",
        "definition": "By metonymy, the office or functions of a judge, whose state robe, lined with ermine, is emblematical of purity and honor without stain."
    },
    "erose": {
        "wordtype": "a.",
        "definition": "Irregular or uneven as if eaten or worn away."
    },
    "error": {
        "wordtype": "n.",
        "definition": "A wandering; a roving or irregular course."
    },
    "ers": {
        "wordtype": "n.",
        "definition": "The bitter vetch (Ervum Ervilia)."
    },
    "erse": {
        "wordtype": "n.",
        "definition": "A name sometimes given to that dialect of the Celtic which is spoken in the Highlands of Scotland; -- called, by the Highlanders, Gaelic."
    },
    "erythematous": {
        "wordtype": "a.",
        "definition": "Relating to, or causing, erythemadjective"
    },
    "escarp": {
        "wordtype": "v. t.",
        "definition": "To make into, or furnish with, a steep slope, like that of a scrap."
    },
    "eschatological": {
        "wordtype": "a.",
        "definition": "Pertaining to the last or final things."
    },
    "eskimo": {
        "wordtype": "n.",
        "definition": "One of a peculiar race inhabiting Arctic America and Greenland. In many respects the Eskimos resemble the Mongolian race."
    },
    "esloin": {
        "wordtype": "v. t.",
        "definition": "To remove; to banish; to withdraw; to avoid; to eloign."
    },
    "esox": {
        "wordtype": "n.",
        "definition": "A genus of fresh-water fishes, including pike and pickerel."
    },
    "espace": {
        "wordtype": "n.",
        "definition": "Space."
    },
    "especialness": {
        "wordtype": "n.",
        "definition": "The state of being especial."
    },
    "espial": {
        "wordtype": "n.",
        "definition": "The act of espying; notice; discovery."
    },
    "espy": {
        "wordtype": "v. t.",
        "definition": "To inspect narrowly; to examine and keep watch upon; to watch; to observe."
    },
    "esentialness": {
        "wordtype": "n.",
        "definition": "Essentiality."
    },
    "estrangedness": {
        "wordtype": "n.",
        "definition": "State of being estranged; estrangement."
    },
    "etch": {
        "wordtype": "n.",
        "definition": "A variant of Eddish."
    },
    "etcher": {
        "wordtype": "n.",
        "definition": "One who etches."
    },
    "ether": {
        "wordtype": "n.",
        "definition": "Supposed matter above the air; the air itself."
    },
    "ethnographer": {
        "wordtype": "n.",
        "definition": "One who investigates ethnography."
    },
    "eugh": {
        "wordtype": "n.",
        "definition": "The yew."
    },
    "euhemeristic": {
        "wordtype": "a.",
        "definition": "Of or pertaining to euhemerism."
    },
    "eunomy": {
        "wordtype": "n.",
        "definition": "Equal law, or a well-adjusted constitution of government."
    },
    "eurus": {
        "wordtype": "n.",
        "definition": "The east wind."
    },
    "eurypteroidea": {
        "wordtype": "n. pl.",
        "definition": "An extinct order of Merostomata, of which the genus Eurypterus is the type. They are found only in Paleozoic rocks."
    },
    "evade": {
        "wordtype": "v. t.",
        "definition": "To escape; to slip away; -- sometimes with from."
    },
    "evanescently": {
        "wordtype": "adv. In a vanishing ",
        "definition": "; imperceptibly."
    },
    "evangelically": {
        "wordtype": "adv.",
        "definition": "In an evangelical manner."
    },
    "evangelicity": {
        "wordtype": "n.",
        "definition": "Evangelicism."
    },
    "evangelistary": {
        "wordtype": "n.",
        "definition": "A selection of passages from the Gospels, as a lesson in divine service."
    },
    "evangelistic": {
        "wordtype": "a.",
        "definition": "Pertaining to the four evangelists; designed or fitted to evangelize; evangelical; as, evangelistic efforts."
    },
    "evener": {
        "wordtype": "n.",
        "definition": "One who, or that which makes even."
    },
    "evenly": {
        "wordtype": "adv.",
        "definition": "With an even, level, or smooth surface; without roughness, elevations, or depression; uniformly; equally; comfortably; impartially; serenely."
    },
    "evil": {
        "wordtype": "a.",
        "definition": "Having or exhibiting bad moral qualities; morally corrupt; wicked; wrong; vicious; as, evil conduct, thoughts, heart, words, and the like."
    },
    "evince": {
        "wordtype": "v. t.",
        "definition": "To conquer; to subdue."
    },
    "evisceration": {
        "wordtype": "a.",
        "definition": "A disemboweling."
    },
    "evolutionary": {
        "wordtype": "a.",
        "definition": "Relating to evolution; as, evolutionary discussions."
    },
    "ewe": {
        "wordtype": "n.",
        "definition": "The female of the sheep, and of sheeplike animals."
    },
    "ewt": {
        "wordtype": "n.",
        "definition": "The newt."
    },
    "examen": {
        "wordtype": "a.",
        "definition": "Examination; inquiry."
    },
    "exanthematous": {
        "wordtype": "a.",
        "definition": "Of, relating to, or characterized by, exanthema; efflorescent; as, an exanthematous eruption."
    },
    "excalfaction": {
        "wordtype": "n.",
        "definition": "A heating or warming; calefaction."
    },
    "excandescent": {
        "wordtype": "a.",
        "definition": "White or glowing with heat."
    },
    "excarnificate": {
        "wordtype": "v. t.",
        "definition": "To clear of flesh; to excarnate."
    },
    "exceptionless": {
        "wordtype": "a.",
        "definition": "Without exception."
    },
    "excern": {
        "wordtype": "v. t.",
        "definition": "To excrete; to throw off through the pores; as, fluids are excerned in perspiration."
    },
    "exclusiveness": {
        "wordtype": "n.",
        "definition": "Quality of being exclusive."
    },
    "excrementitious": {
        "wordtype": "a.",
        "definition": "Pertaining to, or consisting of, excrement; of the nature of excrement."
    },
    "excrementive": {
        "wordtype": "a.",
        "definition": "Serving to excrete; connected with excretion or excrement."
    },
    "excrescential": {
        "wordtype": "a.",
        "definition": "Pertaining to, or resembling, an excrescence."
    },
    "excruciating": {
        "wordtype": "",
        "definition": "Torturing; racking."
    },
    "exedra": {
        "wordtype": "n.",
        "definition": "A room in a public building, furnished with seats."
    },
    "exemplifiable": {
        "wordtype": "a.",
        "definition": "That can be exemplified."
    },
    "exheredation": {
        "wordtype": "n.",
        "definition": "A disinheriting; disherisor."
    },
    "exhibitioner": {
        "wordtype": "n.",
        "definition": "One who has a pension or allowance granted for support."
    },
    "exhort": {
        "wordtype": "v. i.",
        "definition": "To deliver exhortation; to use words or arguments to incite to good deeds."
    },
    "exist": {
        "wordtype": "v. i.",
        "definition": "To be as a fact and not as a mode; to have an actual or real being, whether material or spiritual."
    },
    "exophthalmic": {
        "wordtype": "a.",
        "definition": "Of or pertaining to, or characterized by, exophthalmiadjective"
    },
    "exorbitantly": {
        "wordtype": "adv.",
        "definition": "In an exorbitant, excessive, or irregular manner; enormously."
    },
    "expand": {
        "wordtype": "v. t.",
        "definition": "To lay open by extending; to open wide; to spread out; to diffuse; as, a flower expands its leaves."
    },
    "expatriation": {
        "wordtype": "n.",
        "definition": "The act of banishing, or the state of banishment; especially, the forsaking of one's own country with a renunciation of allegiance."
    },
    "expede": {
        "wordtype": "v. t.",
        "definition": "To expedite; to hasten."
    },
    "experiential": {
        "wordtype": "a.",
        "definition": "Derived from, or pertaining to, experience."
    },
    "experimentally": {
        "wordtype": "adv.",
        "definition": "By experiment; by experience or trial."
    },
    "experimentative": {
        "wordtype": "a.",
        "definition": "Experimental; of the nature of experiment."
    },
    "experimentist": {
        "wordtype": "n.",
        "definition": "An experimenter."
    },
    "exploitation": {
        "wordtype": "n.",
        "definition": "The act of exploiting or utilizing."
    },
    "expostulator": {
        "wordtype": "n.",
        "definition": "One who expostulates."
    },
    "expostulatory": {
        "wordtype": "a.",
        "definition": "Containing expostulation or remonstrance; as, an expostulatory discourse or letter."
    },
    "expressional": {
        "wordtype": "a.",
        "definition": "Of, or relating to, expression; phraseological; also, vividly representing or suggesting an idea or sentiment."
    },
    "expressionless": {
        "wordtype": "a.",
        "definition": "Destitute of expression."
    },
    "expugn": {
        "wordtype": "v. t.",
        "definition": "To take by assault; to storm; to overcome; to vanquish; as, to expugn cities; to expugn a person by arguments."
    },
    "extemporiness": {
        "wordtype": "n.",
        "definition": "The quality of being done or devised extempore"
    },
    "extendlessness": {
        "wordtype": "n.",
        "definition": "Unlimited extension."
    },
    "extermination": {
        "wordtype": "n.",
        "definition": "Elimination."
    },
    "exterminator": {
        "wordtype": "n.",
        "definition": "One who, or that which, exterminates."
    },
    "exterritorial": {
        "wordtype": "a.",
        "definition": "Beyond the territorial limits; foreign to, or exempt from, the territorial jurisdiction."
    },
    "extinguishable": {
        "wordtype": "a.",
        "definition": "Capable of being quenched, destroyed, or suppressed."
    },
    "extol": {
        "wordtype": "v. t.",
        "definition": "To place on high; to lift up; to elevate."
    },
    "extracapsular": {
        "wordtype": "a.",
        "definition": "Situated outside of a capsule, esp. outside the capsular ligament of a joint."
    },
    "extrageneous": {
        "wordtype": "a.",
        "definition": "Belonging to another race or kind."
    },
    "extrajudicial": {
        "wordtype": "a.",
        "definition": "Out of or beyond the proper authority of a court or judge; beyond jurisdiction; not legally required."
    },
    "extralimitary": {
        "wordtype": "a.",
        "definition": "Being beyond the limit or bounds; as, extraliminary land."
    },
    "extraprovincial": {
        "wordtype": "a.",
        "definition": "Not within of pertaining to the same province or jurisdiction."
    },
    "extravagance": {
        "wordtype": "n.",
        "definition": "A wandering beyond proper limits; an excursion or sally from the usual way, course, or limit."
    },
    "extravagantness": {
        "wordtype": "n.",
        "definition": "The state of being extravagant or in excess; excess; extravagance."
    },
    "extravagation": {
        "wordtype": "n.",
        "definition": "A wandering beyond limits; excess."
    },
    "exuvia": {
        "wordtype": "",
        "definition": "n. sing. of Exuviae."
    },
    "eye": {
        "wordtype": "n.",
        "definition": "A brood; as, an eye of pheasants."
    },
    "eyen": {
        "wordtype": "n. pl.",
        "definition": "Eyes."
    },
    "eyghen": {
        "wordtype": "n. pl.",
        "definition": "Eyes."
    },
    "eyr": {
        "wordtype": "n.",
        "definition": "Air."
    },
    "fa": {
        "wordtype": "n.",
        "definition": "A syllable applied to the fourth tone of the diatonic scale in solmization."
    },
    "fable": {
        "wordtype": "n.",
        "definition": "The plot, story, or connected series of events, forming the subject of an epic or dramatic poem."
    },
    "fabler": {
        "wordtype": "n.",
        "definition": "A writer of fables; a fabulist; a dealer in untruths or falsehoods."
    },
    "fabric": {
        "wordtype": "n.",
        "definition": "The structure of anything; the manner in which the parts of a thing are united; workmanship; texture; make; as cloth of a beautiful fabric."
    },
    "facies": {
        "wordtype": "n.",
        "definition": "The anterior part of the head; the face."
    },
    "facing": {
        "wordtype": "n.",
        "definition": "A lining placed near the edge of a garment for ornament or protection."
    },
    "fade": {
        "wordtype": "a.",
        "definition": "Weak; insipid; tasteless; commonplace."
    },
    "faffle": {
        "wordtype": "v. i.",
        "definition": "To stammer."
    },
    "fainthearted": {
        "wordtype": "a.",
        "definition": "Wanting in courage; depressed by fear; easily discouraged or frightened; cowardly; timorous; dejected."
    },
    "faith": {
        "wordtype": "n.",
        "definition": "Fidelity to one's promises, or allegiance to duty, or to a person honored and beloved; loyalty."
    },
    "falcon": {
        "wordtype": "n.",
        "definition": "One of a family (Falconidae) of raptorial birds, characterized by a short, hooked beak, strong claws, and powerful flight."
    },
    "falk": {
        "wordtype": "n.",
        "definition": "The razorbill."
    },
    "faller": {
        "wordtype": "n.",
        "definition": "One who, or that which, falls."
    },
    "fallow": {
        "wordtype": "a.",
        "definition": "Pale red or pale yellow; as, a fallow deer or greyhound."
    },
    "familiarization": {
        "wordtype": "n.",
        "definition": "The act or process of making familiar; the result of becoming familiar; as, familiarization with scenes of blood."
    },
    "familiarness": {
        "wordtype": "n.",
        "definition": "Familiarity."
    },
    "fancy": {
        "wordtype": "n.",
        "definition": "An image or representation of anything formed in the mind; conception; thought; idea; conceit."
    },
    "fane": {
        "wordtype": "n.",
        "definition": "A temple; a place consecrated to religion; a church."
    },
    "fanged": {
        "wordtype": "a.",
        "definition": "Having fangs or tusks; as, a fanged adder. Also used figuratively."
    },
    "fantasticism": {
        "wordtype": "n.",
        "definition": "The quality of being fantastical; fancifulness; whimsicality."
    },
    "farfet": {
        "wordtype": "p. p.",
        "definition": "Farfetched."
    },
    "farmsteading": {
        "wordtype": "n.",
        "definition": "A farmstead."
    },
    "farse": {
        "wordtype": "n.",
        "definition": "An addition to, or a paraphrase of, some part of the Latin service in the vernacular; -- common in English before the Reformation."
    },
    "fast": {
        "wordtype": "v. i.",
        "definition": "To abstain from food; to omit to take nourishment in whole or in part; to go hungry."
    },
    "father": {
        "wordtype": "n.",
        "definition": "One who has begotten a child, whether son or daughter; a generator; a male parent."
    },
    "fathom": {
        "wordtype": "n.",
        "definition": "The measure or extant of one's capacity; depth, as of intellect; profundity; reach; penetration."
    },
    "fauld": {
        "wordtype": "n.",
        "definition": "The arch over the dam of a blast furnace; the tymp arch."
    },
    "faule": {
        "wordtype": "n.",
        "definition": "A fall or falling band."
    },
    "faulty": {
        "wordtype": "a.",
        "definition": "Containing faults, blemishes, or defects; imperfect; not fit for the use intended."
    },
    "faun": {
        "wordtype": "n.",
        "definition": "A god of fields and shipherds, diddering little from the satyr. The fauns are usually represented as half goat and half man."
    },
    "fausen": {
        "wordtype": "n.",
        "definition": "A young eel."
    },
    "feast": {
        "wordtype": "n.",
        "definition": "A festival; a holiday; a solemn, or more commonly, a joyous, anniversary."
    },
    "feat": {
        "wordtype": "n.",
        "definition": "An act; a deed; an exploit."
    },
    "fecial": {
        "wordtype": "a.",
        "definition": "Pertaining to heralds, declarations of war, and treaties of peace; as, fecial law."
    },
    "fecund": {
        "wordtype": "a.",
        "definition": "Fruitful in children; prolific."
    },
    "feeble": {
        "wordtype": "superl.",
        "definition": "Deficient in physical strength; weak; infirm; debilitated."
    },
    "feebly": {
        "wordtype": "adv.",
        "definition": "In a feeble manner."
    },
    "feel": {
        "wordtype": "v. t.",
        "definition": "To touch; to handle; to examine by touching; as, feel this piece of silk; hence, to make trial of; to test; often with out."
    },
    "feine": {
        "wordtype": "v. t. & i.",
        "definition": "To feign."
    },
    "feldspathose": {
        "wordtype": "a.",
        "definition": "Pertaining to, or consisting of, feldspar."
    },
    "felicitation": {
        "wordtype": "n.",
        "definition": "The act of felicitating; a wishing of joy or happiness; congratulation."
    },
    "felis": {
        "wordtype": "n.",
        "definition": "A genus of carnivorous mammals, including the domestic cat, the lion, tiger, panther, and similar animals."
    },
    "fellon": {
        "wordtype": "n.",
        "definition": "Variant of Felon."
    },
    "felt": {
        "wordtype": "",
        "definition": "imperfect & past participle / adjective from Feel."
    },
    "fend": {
        "wordtype": "n.",
        "definition": "A fiend."
    },
    "ferie": {
        "wordtype": "n.",
        "definition": "A holiday."
    },
    "fermentation": {
        "wordtype": "n.",
        "definition": "A state of agitation or excitement, as of the intellect or the feelings."
    },
    "fermentative": {
        "wordtype": "a.",
        "definition": "Causing, or having power to cause, fermentation; produced by fermentation; fermenting; as, a fermentative process."
    },
    "ferriprussiate": {
        "wordtype": "n.",
        "definition": "A ferricyanate; a ferricyanide."
    },
    "ferruginated": {
        "wordtype": "a.",
        "definition": "Having the color or properties of the rust of iron."
    },
    "ferrugineous": {
        "wordtype": "a.",
        "definition": "Ferruginous."
    },
    "fertilization": {
        "wordtype": "n.",
        "definition": "The act or process of rendering fertile."
    },
    "fetid": {
        "wordtype": "a.",
        "definition": "Having an offensive smell; stinking."
    },
    "feyne": {
        "wordtype": "v. t.",
        "definition": "To feign."
    },
    "fib": {
        "wordtype": "n.",
        "definition": "A falsehood; a lie; -- used euphemistically."
    },
    "fibrospongiae": {
        "wordtype": "n. pl.",
        "definition": "An order of sponges having a fibrous skeleton, including the commercial sponges."
    },
    "fico": {
        "wordtype": "n.",
        "definition": "A fig; an insignificant trifle, no more than the snap of one's thumb; a sign of contempt made by the fingers, expressing. A fig for you."
    },
    "fid": {
        "wordtype": "n.",
        "definition": "A square bar of wood or iron, used to support the topmast, being passed through a hole or mortise at its heel, and resting on the trestle trees."
    },
    "fifer": {
        "wordtype": "n.",
        "definition": "One who plays on a fife."
    },
    "fifth": {
        "wordtype": "a.",
        "definition": "Next in order after the fourth; -- the ordinal of five."
    },
    "file": {
        "wordtype": "n.",
        "definition": "An orderly succession; a line; a row"
    },
    "film": {
        "wordtype": "n.",
        "definition": "A thin skin; a pellicle; a membranous covering, causing opacity; hence, any thin, slight covering."
    },
    "finer": {
        "wordtype": "n.",
        "definition": "One who fines or purifies."
    },
    "finns": {
        "wordtype": "n. pl.",
        "definition": "Natives of Finland; Finlanders."
    },
    "fint": {
        "wordtype": "",
        "definition": "3d pers. sing. pr. of Find, for findeth."
    },
    "firer": {
        "wordtype": "n.",
        "definition": "One who fires or sets fire to anything; an incendiary."
    },
    "firry": {
        "wordtype": "a.",
        "definition": "Made of fir; abounding in firs."
    },
    "firth": {
        "wordtype": "n.",
        "definition": "An arm of the sea; a frith."
    },
    "fissigemmation": {
        "wordtype": "n.",
        "definition": "A process of reproduction intermediate between fission and gemmation."
    },
    "fissilingual": {
        "wordtype": "a.",
        "definition": "Having the tongue forked."
    },
    "fist": {
        "wordtype": "n.",
        "definition": "The hand with the fingers doubled into the palm; the closed hand, especially as clinched tightly for the purpose of striking a blow."
    },
    "fitch": {
        "wordtype": "n.",
        "definition": "A vetch."
    },
    "five": {
        "wordtype": "a.",
        "definition": "Four and one added; one more than four."
    },
    "fives": {
        "wordtype": "n. pl.",
        "definition": "A kind of play with a ball against a wall, resembling tennis; -- so named because three fives, or fifteen, are counted to the game."
    },
    "fix": {
        "wordtype": "a.",
        "definition": "Fixed; solidified."
    },
    "flammivomous": {
        "wordtype": "a.",
        "definition": "Vomiting flames, as a volcano."
    },
    "flash": {
        "wordtype": "v. i.",
        "definition": "To burst or break forth with a sudden and transient flood of flame and light; as, the lighting flashes vividly; the powder flashed."
    },
    "flatteringly": {
        "wordtype": "adv.",
        "definition": "With flattery."
    },
    "flay": {
        "wordtype": "v. t.",
        "definition": "To skin; to strip off the skin or surface of; as, to flay an ox; to flay the green earth."
    },
    "fleak": {
        "wordtype": "n.",
        "definition": "A flake; a thread or twist."
    },
    "flear": {
        "wordtype": "n.",
        "definition": "A word or look of derision or mockery."
    },
    "flesh": {
        "wordtype": "n.",
        "definition": "The aggregate of the muscles, fat, and other tissues which cover the framework of bones in man and other animals; especially, the muscles."
    },
    "flibbertigibbet": {
        "wordtype": "n.",
        "definition": "An imperfect"
    },
    "fling": {
        "wordtype": "v. t.",
        "definition": "To cast, send, to throw from the hand; to hurl; to dart; to emit with violence as if thrown from the hand; as, to fing a stone into the pond."
    },
    "flint": {
        "wordtype": "n.",
        "definition": "A piece of flint for striking fire; -- formerly much used, esp. in the hammers of gun locks."
    },
    "flit": {
        "wordtype": "v. i.",
        "definition": "To move with celerity through the air; to fly away with a rapid motion; to dart along; to fleet; as, a bird flits away; a cloud flits along."
    },
    "floccillation": {
        "wordtype": "n.",
        "definition": "A delirious picking of bedclothes by a sick person, as if to pick off flocks of wool; carphology; -- an alarming symptom in acute diseases."
    },
    "flop": {
        "wordtype": "v. t.",
        "definition": "To clap or strike, as a bird its wings, a fish its tail, etc.; to flap."
    },
    "flour": {
        "wordtype": "v. t.",
        "definition": "To grind and bolt; to convert into flour; as, to flour wheat."
    },
    "flow": {
        "wordtype": "",
        "definition": "imperfect sing. of Fly, verb i."
    },
    "flowerlessness": {
        "wordtype": "n.",
        "definition": "State of being without flowers."
    },
    "flown": {
        "wordtype": "",
        "definition": "past participle of Fly; -- often used with the auxiliary verb to be; as, the birds are flown."
    },
    "fluctiferous": {
        "wordtype": "a.",
        "definition": "Tending to produce waves."
    },
    "fluff": {
        "wordtype": "n.",
        "definition": "Nap or down; flue; soft, downy feathers."
    },
    "fluky": {
        "wordtype": "a.",
        "definition": "Formed like, or having, a fluke."
    },
    "flung": {
        "wordtype": "",
        "definition": "imperfect & past participle of Fling."
    },
    "flute": {
        "wordtype": "n.",
        "definition": "A similar channel or groove made in wood or other material, esp. in plaited cloth, as in a lady's ruffle."
    },
    "focus": {
        "wordtype": "n.",
        "definition": "A point in which the rays of light meet, after being reflected or refrcted, and at which the image is formed; as, the focus of a lens or mirror."
    },
    "foe": {
        "wordtype": "n.",
        "definition": "One who entertains personal enmity, hatred, grudge, or malice, against another; an enemy."
    },
    "foin": {
        "wordtype": "n.",
        "definition": "A kind of fur, black at the top on a whitish ground, taken from the ferret or weasel of the same name."
    },
    "folio": {
        "wordtype": "n.",
        "definition": "A leaf of a book or manuscript."
    },
    "fonly": {
        "wordtype": "adv.",
        "definition": "Foolishly; fondly."
    },
    "font": {
        "wordtype": "n.",
        "definition": "A fountain; a spring; a source."
    },
    "fop": {
        "wordtype": "n.",
        "definition": "One whose ambition it is to gain admiration by showy dress; a coxcomb; an inferior dandy."
    },
    "foreknowingly": {
        "wordtype": "adv.",
        "definition": "With foreknowledge."
    },
    "forementioned": {
        "wordtype": "a.",
        "definition": "Mentioned before; already cited; aforementioned."
    },
    "foreordinate": {
        "wordtype": "v. t.",
        "definition": "To foreordain."
    },
    "foreordination": {
        "wordtype": "n.",
        "definition": "Previous ordination or appointment; predetermination; predestination."
    },
    "foreremembered": {
        "wordtype": "a.",
        "definition": "Called to mind previously."
    },
    "forgetfulness": {
        "wordtype": "n.",
        "definition": "The quality of being forgetful; prononess to let slip from the mind."
    },
    "form": {
        "wordtype": "n.",
        "definition": "A suffix used to denote in the form / shape of, resembling, etc.; as, valiform; oviform."
    },
    "formidableness": {
        "wordtype": "n.",
        "definition": "The quality of being formidable, or adapted to excite dread."
    },
    "formularization": {
        "wordtype": "n.",
        "definition": "The act of formularizing; a formularized or formulated statement or exhibition."
    },
    "forswornness": {
        "wordtype": "n.",
        "definition": "State of being forsworn."
    },
    "forth": {
        "wordtype": "adv.",
        "definition": "Forward; onward in time, place, or order; in advance from a given point; on to end; as, from that day forth; one, two, three, and so forth."
    },
    "forthrightness": {
        "wordtype": "n.",
        "definition": "Straightforwardness; explicitness; directness."
    },
    "foul": {
        "wordtype": "n.",
        "definition": "A bird."
    },
    "fovea": {
        "wordtype": "n.",
        "definition": "A slight depression or pit; a fossadjective"
    },
    "fract": {
        "wordtype": "v. t.",
        "definition": "To break; to violate."
    },
    "fozy": {
        "wordtype": "a.",
        "definition": "Spongy; soft; fat and puffy."
    },
    "frail": {
        "wordtype": "n.",
        "definition": "A basket made of rushes, used chiefly for containing figs and raisins."
    },
    "frank": {
        "wordtype": "n.",
        "definition": "A pigsty."
    },
    "fraud": {
        "wordtype": "n.",
        "definition": "An intentional perversion of truth for the purpose of obtaining some valuable thing or promise from another."
    },
    "fraudulently": {
        "wordtype": "adv.",
        "definition": "In a fraudulent manner."
    },
    "fray": {
        "wordtype": "n.",
        "definition": "Affray; broil; contest; combat."
    },
    "free": {
        "wordtype": "superl.",
        "definition": "Liberated, by arriving at a certain age, from the control of parents, guardian, or master."
    },
    "fresh": {
        "wordtype": "superl",
        "definition": "Possessed of original life and vigor; new and strong; unimpaired; sound."
    },
    "freshmanship": {
        "wordtype": "n.",
        "definition": "The state of being a freshman."
    },
    "frill": {
        "wordtype": "v. i.",
        "definition": "To shake or shiver as with cold; as, the hawk frills."
    },
    "frim": {
        "wordtype": "a.",
        "definition": "Flourishing; thriving; fresh; in good case; vigorous."
    },
    "fro": {
        "wordtype": "prep.",
        "definition": "From."
    },
    "frog": {
        "wordtype": "n.",
        "definition": "The triangular prominence of the hoof, in the middle of the sole of the foot of the horse, and other animals; the fourchette."
    },
    "frore": {
        "wordtype": "adv.",
        "definition": "Frostily."
    },
    "frorn": {
        "wordtype": "p. a.",
        "definition": "Frozen."
    },
    "froze": {
        "wordtype": "",
        "definition": "imperfect of Freeze."
    },
    "fructiculose": {
        "wordtype": "a.",
        "definition": "Fruitful; full of fruit."
    },
    "ery": {
        "wordtype": "n.",
        "definition": "A dish of anything fried."
    },
    "fuchs": {
        "wordtype": "n.",
        "definition": "A student of the first year."
    },
    "fucus": {
        "wordtype": "n.",
        "definition": "A paint; a dye; also, false show."
    },
    "fuel": {
        "wordtype": "n.",
        "definition": "Any matter used to produce heat by burning; that which feeds fire; combustible matter used for fires, as wood, coal, peat, etc."
    },
    "fuff": {
        "wordtype": "v. t. & i.",
        "definition": "To puff."
    },
    "fuga": {
        "wordtype": "n.",
        "definition": "A fugue."
    },
    "fugitiveness": {
        "wordtype": "n.",
        "definition": "The quality or condition of being fugitive; evanescence; volatility; fugacity; instability."
    },
    "full": {
        "wordtype": "Compar.",
        "definition": "Sated; surfeited."
    },
    "fumer": {
        "wordtype": "n.",
        "definition": "One that fumes."
    },
    "fumy": {
        "wordtype": "a.",
        "definition": "Producing fumes; fumous."
    },
    "funge": {
        "wordtype": "n.",
        "definition": "A blockhead; a dolt; a fool."
    },
    "fungilliform": {
        "wordtype": "a.",
        "definition": "Shaped like a small fungus."
    },
    "funk": {
        "wordtype": "n.",
        "definition": "An offensive smell; a stench."
    },
    "fussy": {
        "wordtype": "superl",
        "definition": "Making a fuss; disposed to make an unnecessary ado about trifles; overnice; fidgety."
    },
    "fuzz": {
        "wordtype": "v. t.",
        "definition": "To make drunk."
    },
    "fuzzy": {
        "wordtype": "n.",
        "definition": "Not firmly woven; that ravels."
    },
    "gain": {
        "wordtype": "a.",
        "definition": "Convenient; suitable; direct; near; handy; dexterous; easy; profitable; cheap; respectable."
    },
    "galactophagous": {
        "wordtype": "a.",
        "definition": "Feeding on milk."
    },
    "galactopoietic": {
        "wordtype": "a.",
        "definition": "Increasing the flow of milk; milk-producing. -- n. A galactopoietic substance."
    },
    "galea": {
        "wordtype": "n.",
        "definition": "A kind of bandage for the head."
    },
    "gally": {
        "wordtype": "v. t.",
        "definition": "To frighten; to worry."
    },
    "galvanographic": {
        "wordtype": "a.",
        "definition": "Of or pertaining to galvanography."
    },
    "gamba": {
        "wordtype": "n.",
        "definition": "A viola da gambadjective"
    },
    "gamic": {
        "wordtype": "a.",
        "definition": "Pertaining to, or resulting from, sexual connection; formed by the union of the male and female elements."
    },
    "gamosepalous": {
        "wordtype": "a.",
        "definition": "Formed of united sepals; monosepalous."
    },
    "gaper": {
        "wordtype": "n.",
        "definition": "One who gapes."
    },
    "garnetiferous": {
        "wordtype": "a.",
        "definition": "Containing garnets."
    },
    "garth": {
        "wordtype": "n.",
        "definition": "A close; a yard; a croft; a garden; as, a cloister garth."
    },
    "garum": {
        "wordtype": "n.",
        "definition": "A sauce made of small fish. It was prized by the ancients."
    },
    "gastroduodenitis": {
        "wordtype": "n.",
        "definition": "Inflammation of the stomach and duodenum. It is one of the most frequent causes of jaundice."
    },
    "gastrointestinal": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the stomach and intestines; gastroenteric."
    },
    "gastroscopic": {
        "wordtype": "a.",
        "definition": "Of or pertaining to gastroscopy."
    },
    "gat": {
        "wordtype": "",
        "definition": "imperfect of Get."
    },
    "gated": {
        "wordtype": "a.",
        "definition": "Having gates."
    },
    "gaudy": {
        "wordtype": "superl.",
        "definition": "Ostentatiously fine; showy; gay, but tawdry or meretricious."
    },
    "gaul": {
        "wordtype": "n.",
        "definition": "The Anglicized form of Gallia, which in the time of the Romans included France and Upper Italy (Transalpine and Cisalpine Gaul)."
    },
    "gay": {
        "wordtype": "superl.",
        "definition": "Excited with merriment; manifesting sportiveness or delight; inspiring delight; livery; merry."
    },
    "gayly": {
        "wordtype": "adv.",
        "definition": "With mirth and frolic; merrily; blithely; gleefully."
    },
    "geal": {
        "wordtype": "v. i.",
        "definition": "To congeal."
    },
    "gear": {
        "wordtype": "n.",
        "definition": "Clothing; garments; ornaments."
    },
    "geat": {
        "wordtype": "n.",
        "definition": "The channel or spout through which molten metal runs into a mold in casting."
    },
    "gelatigenous": {
        "wordtype": "n.",
        "definition": "Producing, or yielding, gelatin; gelatiniferous; as, the gelatigeneous tissues."
    },
    "gelatiniferous": {
        "wordtype": "a.",
        "definition": "Yielding gelatin on boiling with water; capable of gelatination."
    },
    "gelid": {
        "wordtype": "a.",
        "definition": "Cold; very cold; frozen."
    },
    "gemma": {
        "wordtype": "n.",
        "definition": "A leaf bud, as distinguished from a flower bud."
    },
    "gemmiflorate": {
        "wordtype": "a.",
        "definition": "Having flowers like buds."
    },
    "genealogical": {
        "wordtype": "a.",
        "definition": "Of or pertaining to genealogy; as, a genealogical table; genealogical order."
    },
    "generalizable": {
        "wordtype": "a.",
        "definition": "Capable of being generalized, or reduced to a general form of statement, or brought under a general rule."
    },
    "geocentrical": {
        "wordtype": "a.",
        "definition": "Having reference to the center of the earth."
    },
    "geognostical": {
        "wordtype": "a.",
        "definition": "Of or pertaining to geognosy, or to a knowledge of the structure of the earth; geological."
    },
    "geographical": {
        "wordtype": "a.",
        "definition": "Of or pertaining to geography."
    },
    "geologically": {
        "wordtype": "adv.",
        "definition": "In a geological manner."
    },
    "gerah": {
        "wordtype": "n.",
        "definition": "A small coin and weight; 1-20th of a shekel."
    },
    "gest": {
        "wordtype": "n.",
        "definition": "A guest."
    },
    "gesticulation": {
        "wordtype": "n.",
        "definition": "The act of gesticulating, or making gestures to express passion or enforce sentiments."
    },
    "gesticulatory": {
        "wordtype": "a.",
        "definition": "Representing by, or belonging to, gestures."
    },
    "ghoul": {
        "wordtype": "n.",
        "definition": "An imaginary evil being among Eastern nations, which was supposed to feed upon human bodies."
    },
    "gibe": {
        "wordtype": "v. i.",
        "definition": "To cast reproaches and sneering expressions; to rail; to utter taunting, sarcastic words; to flout; to fleer; to scoff."
    },
    "gif": {
        "wordtype": "conj.",
        "definition": "If."
    },
    "gig": {
        "wordtype": "n.",
        "definition": "A fiddle."
    },
    "gigantomachy": {
        "wordtype": "n.",
        "definition": "A war of giants; especially, the fabulous war of the giants against heaven."
    },
    "gim": {
        "wordtype": "a.",
        "definition": "Neat; spruce."
    },
    "girth": {
        "wordtype": "n.",
        "definition": "A band or strap which encircles the body; especially, one by which a saddle is fastened upon the back of a horse."
    },
    "gisle": {
        "wordtype": "n.",
        "definition": "A pledge."
    },
    "give": {
        "wordtype": "n.",
        "definition": "To yield possesion of; to deliver over, as property, in exchange for something; to pay; as, we give the value of what we buy."
    },
    "glad": {
        "wordtype": "superl.",
        "definition": "Wearing a gay or bright appearance; expressing or exciting joy; producing gladness; exhilarating."
    },
    "gladiatorism": {
        "wordtype": "n.",
        "definition": "The art or practice of a gladiator."
    },
    "gland": {
        "wordtype": "n.",
        "definition": "A special organ of plants, usually minute and globular, which often secretes some kind of resinous, gummy, or aromatic product."
    },
    "glanduliferous": {
        "wordtype": "a.",
        "definition": "Bearing glandules."
    },
    "glandulosity": {
        "wordtype": "n.",
        "definition": "Quality of being glandulous; a collection of glands."
    },
    "glass": {
        "wordtype": "v. t.",
        "definition": "Any substance having a peculiar glassy appearance, and a conchoidal fracture, and usually produced by fusion."
    },
    "glaze": {
        "wordtype": "v. i.",
        "definition": "To become glazed of glassy."
    },
    "glazy": {
        "wordtype": "a.",
        "definition": "Having a glazed appearance; -- said of the fractured surface of some kinds of pin iron."
    },
    "glede": {
        "wordtype": "v. i.",
        "definition": "The common European kite (Milvus ictinus). This name is also sometimes applied to the buzzard."
    },
    "glee": {
        "wordtype": "n.",
        "definition": "Music; minstrelsy; entertainment."
    },
    "gleen": {
        "wordtype": "v. i.",
        "definition": "To glisten; to gleam."
    },
    "gleet": {
        "wordtype": "n.",
        "definition": "A transparent mucous discharge from the membrane of the urethra, commonly an effect of gonorrheadjective"
    },
    "glim": {
        "wordtype": "n.",
        "definition": "Brightness; splendor."
    },
    "gloam": {
        "wordtype": "v. i.",
        "definition": "To begin to grow dark; to grow dusky."
    },
    "gloar": {
        "wordtype": "v. i.",
        "definition": "To squint; to stare."
    },
    "gloat": {
        "wordtype": "v. i.",
        "definition": "To look steadfastly; to gaze earnestly; -- usually in a bad sense, to gaze with malignant satisfaction, passionate desire, lust, or avarice."
    },
    "globulimeter": {
        "wordtype": "n.",
        "definition": "An instrument for measuring the number of red blood corpuscles in the blood."
    },
    "glode": {
        "wordtype": "",
        "definition": "imperfect of Glide."
    },
    "glory": {
        "wordtype": "n.",
        "definition": "Praise, honor, admiration, or distinction, accorded by common consent to a person or thing; high reputation; honorable fame; renown."
    },
    "gloss": {
        "wordtype": "n.",
        "definition": "Brightness or luster of a body proceeding from a smooth surface; polish; as, the gloss of silk; cloth is calendered to give it a gloss."
    },
    "glossoepiglottic": {
        "wordtype": "a.",
        "definition": "Pertaining to both tongue and epiglottis; as, glossoepiglottic folds."
    },
    "glossographical": {
        "wordtype": "a.",
        "definition": "Of or pertaining to glossography."
    },
    "glossography": {
        "wordtype": "n.",
        "definition": "The writing of glossaries, glosses, or comments for illustrating an author."
    },
    "glossological": {
        "wordtype": "a.",
        "definition": "Of or pertaining to glossology."
    },
    "gluer": {
        "wordtype": "n.",
        "definition": "One who cements with glue."
    },
    "glut": {
        "wordtype": "v. t.",
        "definition": "To swallow, or to swallow greedlly; to gorge."
    },
    "gnash": {
        "wordtype": "v. t.",
        "definition": "To strike together, as in anger or pain; as, to gnash the teeth."
    },
    "gnathastegite": {
        "wordtype": "n.",
        "definition": "One of a pair of broad plates, developed from the outer maxillipeds of crabs, and forming a cover for the other mouth organs."
    },
    "gnof": {
        "wordtype": "n.",
        "definition": "Churl; curmudgeon."
    },
    "gnome": {
        "wordtype": "n.",
        "definition": "An imaginary being, supposed by the Rosicrucians to inhabit the inner parts of the earth, and to be the guardian of mines, quarries, etc."
    },
    "gnomonically": {
        "wordtype": "adv.",
        "definition": "According to the principles of the gnomonic projection."
    },
    "goad": {
        "wordtype": "v. t.",
        "definition": "A pointed instrument used to urge on a beast; hence, any necessity that urges or stimulates."
    },
    "goby": {
        "wordtype": "n.",
        "definition": "One of several species of small marine fishes of the genus Gobius and allied generadjective"
    },
    "godly": {
        "wordtype": "adv.",
        "definition": "Piously; devoutly; righteously."
    },
    "goer": {
        "wordtype": "n.",
        "definition": "One who, or that which, goes; a runner or walker"
    },
    "gold": {
        "wordtype": "v. t.",
        "definition": "Money; riches; wealth."
    },
    "golet": {
        "wordtype": "n.",
        "definition": "The gullet."
    },
    "gomer": {
        "wordtype": "n.",
        "definition": "A conical chamber at the breech of the bore in heavy ordnance, especially in mortars; -- named after the inventor."
    },
    "gong": {
        "wordtype": "n.",
        "definition": "A privy or jakes."
    },
    "gord": {
        "wordtype": "n.",
        "definition": "An instrument of gaming; a sort of dice."
    },
    "gore": {
        "wordtype": "n.",
        "definition": "Dirt; mud."
    },
    "gorge": {
        "wordtype": "n.",
        "definition": "The throat; the gullet; the canal by which food passes to the stomach."
    },
    "goud": {
        "wordtype": "n.",
        "definition": "Woad."
    },
    "gout": {
        "wordtype": "n.",
        "definition": "A drop; a clot or coagulation."
    },
    "gouty": {
        "wordtype": "a.",
        "definition": "Diseased with, or subject to, the gout; as, a gouty person; a gouty joint."
    },
    "governorship": {
        "wordtype": "n.",
        "definition": "The office of a governor."
    },
    "grade": {
        "wordtype": "n.",
        "definition": "A graded ascending, descending, or level portion of a road; a gradient."
    },
    "grail": {
        "wordtype": "n.",
        "definition": "A book of offices in the Roman Catholic Church; a gradual."
    },
    "grame": {
        "wordtype": "a.",
        "definition": "Anger; wrath; scorn."
    },
    "granddaughter": {
        "wordtype": "n.",
        "definition": "The daughter of one's son or daughter."
    },
    "grandiloquent": {
        "wordtype": "a.",
        "definition": "Speaking in a lofty style; pompous; bombastic."
    },
    "grandmotherly": {
        "wordtype": "a.",
        "definition": "Like a grandmother in age or manner; kind; indulgent."
    },
    "grasp": {
        "wordtype": "v. t.",
        "definition": "To seize and hold by clasping or embracing with the fingers or arms; to catch to take possession of."
    },
    "gratification": {
        "wordtype": "n.",
        "definition": "That which affords pleasure; satisfaction; enjoyment; fruition: delight."
    },
    "gravelliness": {
        "wordtype": "n.",
        "definition": "State of being gravelly."
    },
    "grene": {
        "wordtype": "a.",
        "definition": "Green."
    },
    "gres": {
        "wordtype": "n.",
        "definition": "Grass."
    },
    "greve": {
        "wordtype": "n.",
        "definition": "A grove."
    },
    "gride": {
        "wordtype": "e. i.",
        "definition": "To cut with a grating sound; to cut; to penetrate or pierce harshly; as, the griding sword."
    },
    "griff": {
        "wordtype": "n.",
        "definition": "Grasp; reach."
    },
    "grim": {
        "wordtype": "Compar.",
        "definition": "Of forbidding or fear-inspiring aspect; fierce; stern; surly; cruel; frightful; horrible."
    },
    "grimy": {
        "wordtype": "superl.",
        "definition": "Full of grime; begrimed; dirty; foul."
    },
    "grind": {
        "wordtype": "v. t.",
        "definition": "To reduce to powder by friction, as in a mill, or with the teeth; to crush into small fragments; to produce as by the action of millstones."
    },
    "grond": {
        "wordtype": "",
        "definition": "obs. imperfect of Grind."
    },
    "groom": {
        "wordtype": "n.",
        "definition": "A boy or young man; a waiter; a servant; especially, a man or boy who has charge of horses, or the stable."
    },
    "grossification": {
        "wordtype": "n.",
        "definition": "The act of making gross or thick, or the state of becoming so."
    },
    "grot": {
        "wordtype": "n.",
        "definition": "A grotto."
    },
    "grove": {
        "wordtype": "v.",
        "definition": "A smaller group of trees than a forest, and without underwood, planted, or growing naturally as if arranged by art; a wood of small extent."
    },
    "gruel": {
        "wordtype": "n.",
        "definition": "A light, liquid food, made by boiling meal of maize, oatmeal, or fiour in water or milk; thin porridge."
    },
    "gruff": {
        "wordtype": "superl.",
        "definition": "Of a rough or stern manner, voice, or countenance; sour; surly; severe; harsh."
    },
    "grum": {
        "wordtype": "a.",
        "definition": "Morose; severe of countenance; sour; surly; glum; grim."
    },
    "grunt": {
        "wordtype": "v. t.",
        "definition": "To make a deep, short noise, as a hog; to utter a short groan or a deep guttural sound."
    },
    "guara": {
        "wordtype": "n.",
        "definition": "A large-maned wild dog of South America (Canis jubatus) -- named from its cry."
    },
    "guile": {
        "wordtype": "n.",
        "definition": "Craft; deceitful cunning; artifice; duplicity; wile; deceit; treachery."
    },
    "gulch": {
        "wordtype": "n.",
        "definition": "Act of gulching or gulping."
    },
    "gull": {
        "wordtype": "v. t.",
        "definition": "To deceive; to cheat; to mislead; to trick; to defraud."
    },
    "gulp": {
        "wordtype": "v. t.",
        "definition": "To swallow eagerly, or in large draughts; to swallow up; to take down at one swallow."
    },
    "gum": {
        "wordtype": "n.",
        "definition": "The dense tissues which invest the teeth, and cover the adjacent parts of the jaws."
    },
    "gyle": {
        "wordtype": "n.",
        "definition": "Fermented wort used for making vinegar."
    },
    "gymnoblastic": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the Gymnoblasteadjective"
    },
    "gynandromorph": {
        "wordtype": "n.",
        "definition": "An animal affected with gynandromorphism,"
    },
    "gynandromorphous": {
        "wordtype": "a.",
        "definition": "Affected, with gynandromorphism."
    },
    "gyte": {
        "wordtype": "a.",
        "definition": "Delirious; senselessly extravagant; as, the man is clean gyte."
    },
    "gyve": {
        "wordtype": "n.",
        "definition": "A shackle; especially, one to confine the legs; a fetter."
    },
    "haberdashery": {
        "wordtype": "n.",
        "definition": "The goods and wares sold by a haberdasher; also (Fig.), trifles."
    },
    "hades": {
        "wordtype": "n.",
        "definition": "The nether world (according to classical mythology, the abode of the shades, ruled over by Hades or Pluto); the invisible world; the grave."
    },
    "haematogenous": {
        "wordtype": "a.",
        "definition": "Originating in the blood."
    },
    "haft": {
        "wordtype": "n.",
        "definition": "A dwelling."
    },
    "hagiographal": {
        "wordtype": "",
        "definition": "Pertaining to the hagiographa, or to sacred writings."
    },
    "han": {
        "wordtype": "v. t.",
        "definition": "To inclose for mowing; to set aside for grass."
    },
    "hair": {
        "wordtype": "n.",
        "definition": "Hair (human or animal) used for various purposes; as, hair for stuffing cushions."
    },
    "hairsplitting": {
        "wordtype": "a.",
        "definition": "Making excessively nice or trivial distinctions in reasoning; subtle."
    },
    "hairy": {
        "wordtype": "a.",
        "definition": "Bearing or covered with hair; made of or resembling hair; rough with hair; rough with hair; rough with hair; hirsute."
    },
    "hallelujatic": {
        "wordtype": "a.",
        "definition": "Pertaining to, or containing, hallelujahs."
    },
    "hallucinator": {
        "wordtype": "n.",
        "definition": "One whose judgment and acts are affected by hallucinations; one who errs on account of his hallucinations."
    },
    "halt": {
        "wordtype": "",
        "definition": "3d pers. sing. pres. of Hold, contraction for holdeth."
    },
    "hame": {
        "wordtype": "n.",
        "definition": "Home."
    },
    "hand": {
        "wordtype": "n.",
        "definition": "That which resembles, or to some extent performs the office of, a human hand"
    },
    "handsomeness": {
        "wordtype": "n.",
        "definition": "The quality of being handsome."
    },
    "hanse": {
        "wordtype": "n.",
        "definition": "That part of an elliptical or many-centered arch which has the shorter radius and immediately adjoins the impost."
    },
    "happy": {
        "wordtype": "superl.",
        "definition": "Dexterous; ready; apt; felicitous."
    },
    "hards": {
        "wordtype": "n. pl.",
        "definition": "The refuse or coarse part of fiax; tow."
    },
    "hare": {
        "wordtype": "v. t.",
        "definition": "To excite; to tease, or worry; to harry."
    },
    "harem": {
        "wordtype": "n.",
        "definition": "The apartments or portion of the house allotted to females in Mohammedan families."
    },
    "hark": {
        "wordtype": "v. i.",
        "definition": "To listen; to hearken."
    },
    "harl": {
        "wordtype": "n.",
        "definition": "A filamentous substance; especially, the filaments of flax or hemp."
    },
    "harle": {
        "wordtype": "n.",
        "definition": "The red-breasted merganser."
    },
    "haugh": {
        "wordtype": "n.",
        "definition": "A low-lying meadow by the side of a river."
    },
    "hault": {
        "wordtype": "a.",
        "definition": "Lofty; haughty."
    },
    "haver": {
        "wordtype": "n.",
        "definition": "A possessor; a holder."
    },
    "haw": {
        "wordtype": "n.",
        "definition": "A hedge; an inclosed garden or yard."
    },
    "hawk": {
        "wordtype": "v. i.",
        "definition": "To catch, or attempt to catch, birds by means of hawks trained for the purpose, and let loose on the prey; to practice falconry."
    },
    "hawse": {
        "wordtype": "n.",
        "definition": "A hawse hole."
    },
    "heady": {
        "wordtype": "a.",
        "definition": "Willful; rash; precipitate; hurried on by will or passion; ungovernable."
    },
    "healthlessness": {
        "wordtype": "n.",
        "definition": "The state of being health/ess."
    },
    "heard": {
        "wordtype": "",
        "definition": "imperfect & past participle of Hear."
    },
    "heart": {
        "wordtype": "n.",
        "definition": "A hollow, muscular organ, which, by contracting rhythmically, keeps up the circulation of the blood."
    },
    "heat": {
        "wordtype": "n.",
        "definition": "A single complete operation of heating, as at a forge or in a furnace; as, to make a horseshoe in a certain number of heats."
    },
    "heavenlyminded": {
        "wordtype": "a.",
        "definition": "Having the thoughts and affections placed on, or suitable for, heaven and heavenly objects; devout; godly; pious."
    },
    "hebdomadally": {
        "wordtype": "adv.",
        "definition": "In periods of seven days; weekly."
    },
    "hebe": {
        "wordtype": "n.",
        "definition": "The goddess of youth, daughter of Jupiter and Juno. She was believed to have the power of restoring youth and beauty to those who had lost them."
    },
    "heel": {
        "wordtype": "v. i.",
        "definition": "To lean or tip to one side, as a ship; as, the ship heels aport; the boat heeled over when the squall struck it."
    },
    "hefty": {
        "wordtype": "a.",
        "definition": "Moderately heavy."
    },
    "held": {
        "wordtype": "",
        "definition": "imperfect & past participle of Hold."
    },
    "helm": {
        "wordtype": "n.",
        "definition": "The apparatus by which a ship is steered, comprising rudder, tiller, wheel, etc.; -- commonly used of the tiller or wheel alone."
    },
    "helminthologist": {
        "wordtype": "n.",
        "definition": "One versed in helminthology."
    },
    "help": {
        "wordtype": "v. t.",
        "definition": "To furnish with the means of deliverance from trouble; as, to help one in distress; to help one out of prison."
    },
    "hemiholohedral": {
        "wordtype": "a.",
        "definition": "Presenting hemihedral forms, in which half the sectants have the full number of planes."
    },
    "hemimetabola": {
        "wordtype": "n. pl.",
        "definition": "Those insects which have an incomplete metamorphosis."
    },
    "hemispheroid": {
        "wordtype": "n.",
        "definition": "A half of a spheroid."
    },
    "hemp": {
        "wordtype": "n.",
        "definition": "The fiber of the skin or rind of the plant, prepared for spinning. The name has also been extended to various fibers resembling the true hemp."
    },
    "hen": {
        "wordtype": "n.",
        "definition": "The female of the domestic fowl; also, the female of grouse, pheasants, or any kind of birds; as, the heath hen; the gray hen."
    },
    "henceforward": {
        "wordtype": "adv.",
        "definition": "From this time forward; henceforth."
    },
    "hende": {
        "wordtype": "a.",
        "definition": "Friendly; civil; gentle; kind."
    },
    "hendecasyllable": {
        "wordtype": "n.",
        "definition": "A metrical line of eleven syllables."
    },
    "heng": {
        "wordtype": "imp.",
        "definition": "Hung."
    },
    "heptaspermous": {
        "wordtype": "a.",
        "definition": "Having seven seeds."
    },
    "heraldically": {
        "wordtype": "adv.",
        "definition": "In an heraldic manner; according to the rules of heraldry."
    },
    "heretification": {
        "wordtype": "n.",
        "definition": "The act of hereticating or pronouncing heretical."
    },
    "hermaphrodite": {
        "wordtype": "a.",
        "definition": "Including, or being of, both sexes; as, an hermaphrodite animal or flower."
    },
    "hermaphroditical": {
        "wordtype": "a.",
        "definition": "Partaking of the characteristics of both sexes; characterized by hermaphroditism."
    },
    "hermetically": {
        "wordtype": "adv.",
        "definition": "In an hermetical manner; chemically."
    },
    "hern": {
        "wordtype": "n.",
        "definition": "A heron; esp., the common European heron."
    },
    "herpetologist": {
        "wordtype": "n.",
        "definition": "One versed in herpetology, or the natural history of reptiles."
    },
    "herte": {
        "wordtype": "n.",
        "definition": "A heart."
    },
    "hete": {
        "wordtype": "v. t. & i.",
        "definition": "Variant of Hote."
    },
    "heteroclitous": {
        "wordtype": "a.",
        "definition": "Heteroclitic."
    },
    "heterodactylous": {
        "wordtype": "a.",
        "definition": "Having the first and second toes turned backward, as in the trogons."
    },
    "heterogamous": {
        "wordtype": "a.",
        "definition": "The condition of having two or more kinds of flowers which differ in regard to stamens and pistils, as in the aster."
    },
    "heterogangliate": {
        "wordtype": "a.",
        "definition": "Having the ganglia of the nervous system unsymmetrically arranged; -- said of certain invertebrate animals."
    },
    "heteronymous": {
        "wordtype": "a.",
        "definition": "Having different names or designations; standing in opposite relations."
    },
    "hexacapsular": {
        "wordtype": "a.",
        "definition": "Having six capsules or seed vessels."
    },
    "hexoctahedron": {
        "wordtype": "n.",
        "definition": "A solid having forty-eight equal triangular faces."
    },
    "hexyl": {
        "wordtype": "n.",
        "definition": "A compound radical, C6H13, regarded as the essential residue of hexane, and a related series of compounds."
    },
    "hide": {
        "wordtype": "v. t.",
        "definition": "To conceal, or withdraw from sight; to put out of view; to secrete."
    },
    "hider": {
        "wordtype": "n.",
        "definition": "One who hides or conceals."
    },
    "hie": {
        "wordtype": "v. i.",
        "definition": "To hasten; to go in haste; -- also often with the reciprocal pronoun."
    },
    "hierogrammatic": {
        "wordtype": "a.",
        "definition": "Written in, or pertaining to, hierograms; expressive of sacred writing."
    },
    "hierological": {
        "wordtype": "a.",
        "definition": "Pertaining to hierology."
    },
    "high": {
        "wordtype": "v. i.",
        "definition": "To hie."
    },
    "hind": {
        "wordtype": "n.",
        "definition": "The female of the red deer, of which the male is the stag."
    },
    "hippocrepiform": {
        "wordtype": "a.",
        "definition": "Shaped like a horseshoe."
    },
    "histographical": {
        "wordtype": "a.",
        "definition": "Of or pertaining to histography."
    },
    "histohaematin": {
        "wordtype": "n.",
        "definition": "One of a class of respiratory pigments, widely distributed in the animal kingdom, capable of ready oxidation and reduction."
    },
    "hitch": {
        "wordtype": "v. t.",
        "definition": "To become entangled or caught; to be linked or yoked; to unite; to cling."
    },
    "hives": {
        "wordtype": "n.",
        "definition": "The croup."
    },
    "hobit": {
        "wordtype": "n.",
        "definition": "A small mortar on a gun carriage, in use before the howitzer."
    },
    "hocco": {
        "wordtype": "n.",
        "definition": "The crested curassow; -- called also royal pheasant. See Curassow."
    },
    "hogo": {
        "wordtype": "n.",
        "definition": "High flavor; strong scent."
    },
    "holwe": {
        "wordtype": "a.",
        "definition": "Hollow."
    },
    "holy": {
        "wordtype": "superl.",
        "definition": "Set apart to the service or worship of God; hallowed; sacred; reserved from profane or common use; holy vessels; a holy priesthood."
    },
    "homeopathist": {
        "wordtype": "n.",
        "definition": "A believer in, or practitioner of, homeopathy."
    },
    "homodynamous": {
        "wordtype": "a.",
        "definition": "Pertaining to, or involving, homodynamy; as, successive or homodynamous parts in plants and animals."
    },
    "homoeomerical": {
        "wordtype": "a.",
        "definition": "Pertaining to, or characterized by, sameness of parts; receiving or advocating the doctrine of homogeneity of elements or first principles."
    },
    "honorableness": {
        "wordtype": "n.",
        "definition": "The state of being honorable; eminence; distinction."
    },
    "hoom": {
        "wordtype": "n.",
        "definition": "Home."
    },
    "hoven": {
        "wordtype": "a.",
        "definition": "Affected with hoove; as, hooven, or hoven, cattle."
    },
    "hop": {
        "wordtype": "v. i.",
        "definition": "To move by successive leaps, as toads do; to spring or jump on one foot; to skip, as birds do."
    },
    "horal": {
        "wordtype": "a.",
        "definition": "Of or pertaining to an hour, or to hours."
    },
    "horizontally": {
        "wordtype": "adv.",
        "definition": "In a horizontal direction or position; on a level; as, moving horizontally."
    },
    "horny": {
        "wordtype": "superl.",
        "definition": "Having horns or hornlike projections."
    },
    "horometrical": {
        "wordtype": "a.",
        "definition": "Belonging to horometry."
    },
    "hot": {
        "wordtype": "",
        "definition": "imperfect & past participle of Hote."
    },
    "hotel": {
        "wordtype": "n.",
        "definition": "A house for entertaining strangers or travelers; an inn or public house, of the better class."
    },
    "hottentotism": {
        "wordtype": "n.",
        "definition": "A term employed to describe one of the varieties of stammering."
    },
    "housebuilder": {
        "wordtype": "n.",
        "definition": "One whose business is to build houses; a housewright."
    },
    "housekeeping": {
        "wordtype": "n.",
        "definition": "The state of occupying a dwelling house as a householder."
    },
    "housewarming": {
        "wordtype": "n.",
        "definition": "A feast or merry-making made by or for a family or business firm on taking possession of a new house or premises."
    },
    "hud": {
        "wordtype": "n.",
        "definition": "A huck or hull, as of a nut."
    },
    "hued": {
        "wordtype": "a.",
        "definition": "Having color; -- usually in composition; as, bright-hued; many-hued."
    },
    "huff": {
        "wordtype": "v. t.",
        "definition": "To swell; to enlarge; to puff up; as, huffed up with air."
    },
    "humid": {
        "wordtype": "a.",
        "definition": "Containing sensible moisture; damp; moist; as, a humidair or atmosphere; somewhat wet or watery; as, humid earth; consisting of water or vapor."
    },
    "humorousness": {
        "wordtype": "n.",
        "definition": "Moodiness; capriciousness."
    },
    "humorsomeness": {
        "wordtype": "n.",
        "definition": "Quality of being humorsome."
    },
    "humph": {
        "wordtype": "interj.",
        "definition": "An exclamation denoting surprise, or contempt, doubt, etc."
    },
    "hurr": {
        "wordtype": "v. i.",
        "definition": "To make a rolling or burring sound."
    },
    "hurry": {
        "wordtype": "v. t.",
        "definition": "To hasten; to impel to greater speed; to urge on."
    },
    "hut": {
        "wordtype": "n.",
        "definition": "A small house, hivel, or cabin; a mean lodge or dwelling; a slightly built or temporary structure."
    },
    "hy": {
        "wordtype": "a.",
        "definition": "High."
    },
    "hydrargyrate": {
        "wordtype": "a.",
        "definition": "Of or pertaining to mercury; containing, or impregnated with, mercury."
    },
    "hydrobromide": {
        "wordtype": "n.",
        "definition": "A compound of hydrobromic acid with a base; -- distinguished from a bromide, in which only the bromine unites with the base."
    },
    "hydrocarburet": {
        "wordtype": "n.",
        "definition": "Carbureted hydrogen; also, a hydrocarbon."
    },
    "hydrocephalic": {
        "wordtype": "a.",
        "definition": "Relating to, or connected with, hydrocephalus, or dropsy of the brain."
    },
    "hydrodynamometer": {
        "wordtype": "n.",
        "definition": "An instrument to measure the velocity of a liquid current by the force of its impact."
    },
    "hydrogenation": {
        "wordtype": "n.",
        "definition": "The act of combining with hydrogen, or the state of being so combined."
    },
    "hydrometallurgical": {
        "wordtype": "a.",
        "definition": "Of or pertaining to hydrometallurgy; involving the use of liquid reagents in the treatment or reduction of ores."
    },
    "hydrometeorology": {
        "wordtype": "n.",
        "definition": "That branch of meteorology which relates to, or treats of, water in the atmosphere, or its phenomena, as rain, clouds, snow, hail, storms, etc."
    },
    "hydrophlorone": {
        "wordtype": "n.",
        "definition": "A white, crystalline benzene derivative, C8H10O2, obtained by the reduction of phlorone."
    },
    "hydrosulphureted": {
        "wordtype": "a.",
        "definition": "Combined with hydrogen sulphide."
    },
    "hydroxanthane": {
        "wordtype": "n.",
        "definition": "A persulphocyanate."
    },
    "hymar": {
        "wordtype": "n.",
        "definition": "The wild ass of Persiadjective"
    },
    "hymenopterous": {
        "wordtype": "a.",
        "definition": "Like, or characteristic of, the Hymenoptera; pertaining to the Hymenopteradjective"
    },
    "hymnographer": {
        "wordtype": "n.",
        "definition": "One who writes on the subject of hymns."
    },
    "hyperaesthesia": {
        "wordtype": "n.",
        "definition": "A state of exalted or morbidly increased sensibility of the body, or of a part of it."
    },
    "hyperboliform": {
        "wordtype": "a.",
        "definition": "Having the form, or nearly the form, of an hyperboladjective"
    },
    "hypercatalectic": {
        "wordtype": "a.",
        "definition": "Having a syllable or two beyond measure; as, a hypercatalectic verse."
    },
    "hypercritically": {
        "wordtype": "adv.",
        "definition": "In a hypercritical manner."
    },
    "hyperoxygenized": {
        "wordtype": "a.",
        "definition": "Combined with a relatively large amount of oxygen; -- said of higher oxides."
    },
    "hyperplastic": {
        "wordtype": "a.",
        "definition": "Of or pertaining to hyperplasiadjective"
    },
    "hyperpyrexia": {
        "wordtype": "n.",
        "definition": "A condition of excessive fever; an elevation of temperature in a disease, in excess of the limit usually observed in that disease."
    },
    "hypertrophical": {
        "wordtype": "a.",
        "definition": "Of or pertaining to hypertrophy; affected with, or tending to, hypertrophy."
    },
    "hypochondriacism": {
        "wordtype": "n.",
        "definition": "Hypochondriasis."
    },
    "hypocleidium": {
        "wordtype": "n.",
        "definition": "A median process on the furculum, or merrythought, of many birds, where it is connected with the sternum."
    },
    "hypocoristic": {
        "wordtype": "a.",
        "definition": "Endearing; diminutive; as, the hypocoristic form of a name."
    },
    "hyposulphite": {
        "wordtype": "n.",
        "definition": "A salt of hyposulphurous acid proper."
    },
    "hyposulphuric": {
        "wordtype": "a.",
        "definition": "Pertaining to, or containing, sulphur in a lower state of oxidation than in the sulphuric compounds; as, hyposulphuric acid."
    },
    "hypothenusal": {
        "wordtype": "a.",
        "definition": "Of or pertaining to hypothenuse."
    },
    "ichthyodorulite": {
        "wordtype": "n.",
        "definition": "One of the spiny plates foundon the back and tail of certain skates."
    },
    "ichthyologist": {
        "wordtype": "n.",
        "definition": "One versed in, or who studies, ichthyology."
    },
    "ichthyopsida": {
        "wordtype": "n. pl.",
        "definition": "A grand division of the Vertebrata, including the Amphibia and Fishes."
    },
    "ichthyopterygium": {
        "wordtype": "n.",
        "definition": "The typical limb, or lateral fin, of fishes."
    },
    "icon": {
        "wordtype": "n.",
        "definition": "An image or representation; a portrait or pretended portrait."
    },
    "iconographer": {
        "wordtype": "n.",
        "definition": "A maker of images."
    },
    "icy": {
        "wordtype": "superl.",
        "definition": "Pertaining to, resembling, or abounding in, ice; cold; frosty."
    },
    "idealization": {
        "wordtype": "n.",
        "definition": "The act or process of idealizing."
    },
    "ideographics": {
        "wordtype": "n.",
        "definition": "The system of writing in ideographic characters; also, anything so written."
    },
    "idiocratical": {
        "wordtype": "a.",
        "definition": "Peculiar in constitution or temperament; idiosyncratic."
    },
    "illacrymable": {
        "wordtype": "a.",
        "definition": "Incapable of weeping."
    },
    "illiberalism": {
        "wordtype": "n.",
        "definition": "Illiberality."
    },
    "illuminative": {
        "wordtype": "a.",
        "definition": "Tending to illuminate or illustrate; throwing light; illustrative."
    },
    "illusionable": {
        "wordtype": "a.",
        "definition": "Liable to illusion."
    },
    "illustration": {
        "wordtype": "n.",
        "definition": "That which illustrates; a comparison or example intended to make clear or apprehensible, or to remove obscurity."
    },
    "image": {
        "wordtype": "n.",
        "definition": "Hence: The likeness of anything to which worship is paid; an idol."
    },
    "imaginability": {
        "wordtype": "n.",
        "definition": "Capacity for imagination."
    },
    "imbow": {
        "wordtype": "v. t.",
        "definition": "To make like a bow; to curve; to arch; to vault; to embow."
    },
    "immeasurability": {
        "wordtype": "n.",
        "definition": "The quality of being immeasurable; immensurability."
    },
    "immeasurable": {
        "wordtype": "a.",
        "definition": "Incapble of being measured; indefinitely extensive; illimitable; immensurable; vast."
    },
    "immeasurably": {
        "wordtype": "adv.",
        "definition": "In an immeasurable manner or degree."
    },
    "immemorially": {
        "wordtype": "adv.",
        "definition": "Beyond memory."
    },
    "immensurable": {
        "wordtype": "a.",
        "definition": "Immeasurable."
    },
    "immoderateness": {
        "wordtype": "n.",
        "definition": "The quality of being immoderate; excess; extravagance."
    },
    "immutability": {
        "wordtype": "n.",
        "definition": "The state or quality of being immutable; immutableness."
    },
    "impalpability": {
        "wordtype": "n.",
        "definition": "The quality of being impalpable."
    },
    "imparalleled": {
        "wordtype": "a.",
        "definition": "Unparalleled."
    },
    "impartialist": {
        "wordtype": "n.",
        "definition": "One who is impartial."
    },
    "impassibleness": {
        "wordtype": "n.",
        "definition": "Impassibility."
    },
    "impatronization": {
        "wordtype": "n.",
        "definition": "Absolute seignory or possession; the act of investing with such possession."
    },
    "impenetrable": {
        "wordtype": "a.",
        "definition": "Incapable of being penetrated or pierced; not admitting the passage of other bodies; not to be entered; impervious; as, an impenetrable shield."
    },
    "imperfectibility": {
        "wordtype": "n.",
        "definition": "The state or quality of being imperfectible."
    },
    "imperfection": {
        "wordtype": "a.",
        "definition": "The quality or condition of being imperfect; want of perfection; incompleteness; deficiency; fault or blemish."
    },
    "imperishability": {
        "wordtype": "n.",
        "definition": "The quality of being imperishable: indstructibility."
    },
    "imperscrutable": {
        "wordtype": "a.",
        "definition": "Not capable of being searched out; inscrutable."
    },
    "impersonality": {
        "wordtype": "n.",
        "definition": "The quality of being impersonal; want or absence of personality."
    },
    "impetiginous": {
        "wordtype": "a.",
        "definition": "Of the nature of, or pertaining to, impetigo."
    },
    "impignoration": {
        "wordtype": "n.",
        "definition": "The act of pawning or pledging; the state of being pawned."
    },
    "implausibility": {
        "wordtype": "n.",
        "definition": "Want of plausibility; the quality of being implausible."
    },
    "imponderability": {
        "wordtype": "n.",
        "definition": "The quality or state of being imponderable; imponderableness."
    },
    "importunable": {
        "wordtype": "a.",
        "definition": "Heavy; insupportable."
    },
    "imposthumate": {
        "wordtype": "v. t.",
        "definition": "To apostemate; to form an imposthume or abscess."
    },
    "impreparation": {
        "wordtype": "n.",
        "definition": "Want of preparation."
    },
    "imprescriptibly": {
        "wordtype": "adv.",
        "definition": "In an imprescriptible manner; obviously."
    },
    "impreventable": {
        "wordtype": "a.",
        "definition": "Not preventable; invitable."
    },
    "improbability": {
        "wordtype": "n.",
        "definition": "The quality or state of being improbable; unlikelihood; also, that which is improbable; an improbable event or result."
    },
    "improportionable": {
        "wordtype": "a.",
        "definition": "Not proportionable."
    },
    "improsperous": {
        "wordtype": "a.",
        "definition": "Not prosperous."
    },
    "improvisation": {
        "wordtype": "n.",
        "definition": "The act or art of composing and rendering music, poetry, and the like, extemporaneously; as, improvisation on the organ."
    },
    "improvisatory": {
        "wordtype": "a.",
        "definition": "Of or pertaining to improvisation or extemporaneous composition."
    },
    "inaccessible": {
        "wordtype": "a.",
        "definition": "Not accessible; not to be reached, obtained, or approached; as, an inaccessible rock, fortress, document, prince, etc."
    },
    "inaccurately": {
        "wordtype": "adv.",
        "definition": "In an inaccurate manner; incorrectly; inexactly."
    },
    "inadmissibility": {
        "wordtype": "n.",
        "definition": "The state or quality of being inadmissible, or not to be received."
    },
    "inadvertency": {
        "wordtype": "n.",
        "definition": "The quality of being inadvertent; lack of heedfulness or attentiveness; inattention; negligence; as, many mistakes proceed from inadvertence."
    },
    "inane": {
        "wordtype": "a.",
        "definition": "Without contents; empty; void of sense or intelligence; purposeless; pointless; characterless; useless."
    },
    "inaniloquous": {
        "wordtype": "a.",
        "definition": "Given to talking inanely; loquacious; garrulous."
    },
    "inapplicable": {
        "wordtype": "a.",
        "definition": "Not applicable; incapable of being applied; not adapted; not suitable; as, the argument is inapplicable to the case."
    },
    "inappreciation": {
        "wordtype": "n.",
        "definition": "Want of appreciation."
    },
    "inarticulated": {
        "wordtype": "a.",
        "definition": "Not articulated; not jointed or connected by a joint."
    },
    "inauguratory": {
        "wordtype": "a.",
        "definition": "Suitable for, or pertaining to, inauguration."
    },
    "inauspicious": {
        "wordtype": "a.",
        "definition": "Not auspicious; ill-omened; unfortunate; unlucky; unfavorable."
    },
    "inca": {
        "wordtype": "n.",
        "definition": "The people governed by the Incas, now represented by the Quichua tribe."
    },
    "incapableness": {
        "wordtype": "n.",
        "definition": "The quality or state of being incapable; incapability."
    },
    "incapacitation": {
        "wordtype": "n.",
        "definition": "The act of incapacitating or state of being incapacitated; incapacity; disqualification."
    },
    "incastellated": {
        "wordtype": "a.",
        "definition": "Confined or inclosed in a castle."
    },
    "incatenation": {
        "wordtype": "n.",
        "definition": "The act of linking together; enchaining."
    },
    "incensebreathing": {
        "wordtype": "a.",
        "definition": "Breathing or exhaling incense."
    },
    "incoexistence": {
        "wordtype": "n.",
        "definition": "The state of not coexisting."
    },
    "incoincidence": {
        "wordtype": "n.",
        "definition": "The quality of being incoincident; want of coincidence."
    },
    "incommiscible": {
        "wordtype": "a.",
        "definition": "Not commiscible; not mixable."
    },
    "incommunicable": {
        "wordtype": "a.",
        "definition": "Not communicable; incapable of being communicated, shared, told, or imparted, to others."
    },
    "incommutable": {
        "wordtype": "a.",
        "definition": "Not commutable; not capable of being exchanged with, or substituted for, another."
    },
    "incompassion": {
        "wordtype": "n.",
        "definition": "Want of compassion or pity."
    },
    "incompleteness": {
        "wordtype": "n.",
        "definition": "The state of being incomplete; imperfectness; defectiveness."
    },
    "incomprehensible": {
        "wordtype": "a.",
        "definition": "Not capable of being contained within limits."
    },
    "incomprehensive": {
        "wordtype": "a.",
        "definition": "Not comprehensive; not capable of including or of understanding; not extensive; limited."
    },
    "inconceptible": {
        "wordtype": "a.",
        "definition": "Inconceivable."
    },
    "inconcludent": {
        "wordtype": "a.",
        "definition": "Not inferring a conclusion or consequence; not conclusive."
    },
    "inconnection": {
        "wordtype": "n.",
        "definition": "Disconnection."
    },
    "inconsequentness": {
        "wordtype": "n.",
        "definition": "Inconsequence."
    },
    "inconsideracy": {
        "wordtype": "n.",
        "definition": "Inconsiderateness; thoughtlessness."
    },
    "inconsideration": {
        "wordtype": "n.",
        "definition": "Want of due consideration; inattention to consequences; inconsiderateness."
    },
    "inconsistency": {
        "wordtype": "n.",
        "definition": "Want of stability or uniformity; unsteadiness; changeableness; variableness."
    },
    "incontentation": {
        "wordtype": "n.",
        "definition": "Discontent."
    },
    "incontrovertibility": {
        "wordtype": "n.",
        "definition": "The state or condition of being incontrovertible."
    },
    "incontrovertible": {
        "wordtype": "a.",
        "definition": "Not controvertible; too clear or certain to admit of dispute; indisputable."
    },
    "inconveniency": {
        "wordtype": "n.",
        "definition": "Inconvenience."
    },
    "inconvenient": {
        "wordtype": "a.",
        "definition": "Not becoming or suitable; unfit; inexpedient."
    },
    "incorporated": {
        "wordtype": "a.",
        "definition": "United in one body; formed into a corporation; made a legal entity."
    },
    "incorrespondency": {
        "wordtype": "n.",
        "definition": "Want of correspondence; disagreement; disproportion."
    },
    "incorrigibly": {
        "wordtype": "adv.",
        "definition": "In an incorrigible manner."
    },
    "incredibleness": {
        "wordtype": "n.",
        "definition": "Incredibility."
    },
    "inculpableness": {
        "wordtype": "n.",
        "definition": "Blamelessness; faultlessness."
    },
    "incurability": {
        "wordtype": "n.",
        "definition": "The state of being uncurable; irremediableness."
    },
    "indecisiveness": {
        "wordtype": "n.",
        "definition": "The state of being indecisive; unsettled state."
    },
    "indecorousness": {
        "wordtype": "n.",
        "definition": "The quality of being indecorous; want of decorum."
    },
    "indefeasible": {
        "wordtype": "a.",
        "definition": "Not to be defeated; not defeasible; incapable of being annulled or made void; as, an indefeasible or title."
    },
    "indefinitely": {
        "wordtype": "adv.",
        "definition": "In an indefinite manner or degree; without any settled limitation; vaguely; not with certainty or exactness; as, to use a word indefinitely."
    },
    "indemnification": {
        "wordtype": "n.",
        "definition": "That which indemnifies."
    },
    "indemonstrable": {
        "wordtype": "a.",
        "definition": "Incapable of being demonstrated."
    },
    "indeprivable": {
        "wordtype": "a.",
        "definition": "Incapable of being deprived, or of being taken away."
    },
    "indestructible": {
        "wordtype": "a.",
        "definition": "Not destructible; incapable of decomposition or of being destroyed."
    },
    "indeterminable": {
        "wordtype": "a.",
        "definition": "Not determinable; impossible to be determined; not to be definitely known, ascertained, defined, or limited."
    },
    "indetermined": {
        "wordtype": "a.",
        "definition": "Undetermined."
    },
    "indispensably": {
        "wordtype": "adv.",
        "definition": "In an indispensable manner."
    },
    "indisputable": {
        "wordtype": "a.",
        "definition": "Not disputable; incontrovertible; too evident to admit of dispute."
    },
    "indistinguished": {
        "wordtype": "a.",
        "definition": "Indistinct."
    },
    "individualistic": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the individual or individualism."
    },
    "individualize": {
        "wordtype": "v. t.",
        "definition": "The mark as an individual, or to distinguish from others by peculiar properties; to invest with individuality."
    },
    "indivisibility": {
        "wordtype": "n.",
        "definition": "The state or property of being indivisible or inseparable; inseparability."
    },
    "industrialism": {
        "wordtype": "n.",
        "definition": "Devotion to industrial pursuits; labor; industry."
    },
    "industrially": {
        "wordtype": "adv.",
        "definition": "With reference to industry."
    },
    "ineffaceable": {
        "wordtype": "a.",
        "definition": "Incapable of being effaced; indelible; ineradicable."
    },
    "ineffaceably": {
        "wordtype": "adv.",
        "definition": "So as not to be effaceable."
    },
    "ineffectiveness": {
        "wordtype": "n.",
        "definition": "Quality of being ineffective."
    },
    "ineffervescible": {
        "wordtype": "a.",
        "definition": "Not capable or susceptible of effervescence."
    },
    "inefficaciousness": {
        "wordtype": "n.",
        "definition": "Want of effect, or of power to produce the effect; inefficacy."
    },
    "ineligibility": {
        "wordtype": "n.",
        "definition": "The state or quality of being ineligible."
    },
    "inernarrable": {
        "wordtype": "a.",
        "definition": "Incapable of being narrated; indescribable; ineffable."
    },
    "inerrability": {
        "wordtype": "n.",
        "definition": "Freedom or exemption from error; infallibility."
    },
    "inerrableness": {
        "wordtype": "n.",
        "definition": "Exemption from error; inerrability; infallibility."
    },
    "inexactitude": {
        "wordtype": "n.",
        "definition": "Inexactness; uncertainty; as, geographical inexactitude."
    },
    "inexecutable": {
        "wordtype": "a.",
        "definition": "Incapable of being executed or performed; impracticable; infeasible."
    },
    "inexpectable": {
        "wordtype": "a.",
        "definition": "Not to be expected or anticipated."
    },
    "inexpectedly": {
        "wordtype": "adv.",
        "definition": "Unexpectedly."
    },
    "inexplicable": {
        "wordtype": "a.",
        "definition": "Not explicable; not explainable; incapable of being explained, interpreted, or accounted for; as, an inexplicable mystery."
    },
    "inexplorable": {
        "wordtype": "a.",
        "definition": "Incapable of being explored, searched out, or discovered."
    },
    "inexpressive": {
        "wordtype": "a.",
        "definition": "Inexpressible."
    },
    "inexpugnably": {
        "wordtype": "adv.",
        "definition": "So as to be inexpugnable; in an inexpugnable manner."
    },
    "inextricable": {
        "wordtype": "a.",
        "definition": "Inevitable."
    },
    "infabricated": {
        "wordtype": "a.",
        "definition": "Not fabricated; unwrought; not artificial; natural."
    },
    "infiniteness": {
        "wordtype": "n.",
        "definition": "The state or quality of being infinite; infinity; greatness; immensity."
    },
    "infinitesimally": {
        "wordtype": "adv.",
        "definition": "By infinitesimals; in infinitely small quantities; in an infinitesimal degree."
    },
    "inflammatory": {
        "wordtype": "a.",
        "definition": "Tending to inflame, kindle, or irritate."
    },
    "inflexibleness": {
        "wordtype": "n.",
        "definition": "The quality or state of being inflexible; inflexibility; rigidity; firmness."
    },
    "inflorescence": {
        "wordtype": "n.",
        "definition": "A flowering; the putting forth and unfolding of blossoms."
    },
    "infraposition": {
        "wordtype": "n.",
        "definition": "A situation or position beneath."
    },
    "infrasternal": {
        "wordtype": "a.",
        "definition": "Below the sternum; as, the infrasternal depression, or pit of the stomach."
    },
    "infratrochlear": {
        "wordtype": "a.",
        "definition": "Below a trochlea, or pulley; -- applied esp. to one of the subdivisions of the trigeminal nerve."
    },
    "infrugiferous": {
        "wordtype": "a.",
        "definition": "Not bearing fruit; not fructiferous."
    },
    "ingemination": {
        "wordtype": "n.",
        "definition": "Repetition; reduplication; reiteration."
    },
    "ingenerabillty": {
        "wordtype": "n.",
        "definition": "Incapacity of being engendered or produced."
    },
    "ingot": {
        "wordtype": "n.",
        "definition": "That in which metal is cast; a mold."
    },
    "inhabitation": {
        "wordtype": "n.",
        "definition": "The act of inhabiting, or the state of being inhabited; indwelling."
    },
    "inharmoniously": {
        "wordtype": "adv.",
        "definition": "Without harmony."
    },
    "inharmoniousness": {
        "wordtype": "n.",
        "definition": "The quality of being inharmonious; want of harmony; discord."
    },
    "inheritability": {
        "wordtype": "n.",
        "definition": "The quality of being inheritable or descendible to heirs."
    },
    "inhospitality": {
        "wordtype": "n.",
        "definition": "The quality or state of being inhospitable; inhospitableness; lack of hospitality."
    },
    "inial": {
        "wordtype": "a.",
        "definition": "Pertaining to the inion."
    },
    "inmew": {
        "wordtype": "v. t.",
        "definition": "To inclose, as in a mew or cage."
    },
    "inobservation": {
        "wordtype": "n.",
        "definition": "Neglect or want of observation."
    },
    "inoculability": {
        "wordtype": "n.",
        "definition": "The qual ity or state of being inoculable."
    },
    "inofficially": {
        "wordtype": "adv.",
        "definition": "Without the usual forms, or not in the official character."
    },
    "inopportunely": {
        "wordtype": "adv.",
        "definition": "Not opportunely; unseasonably; inconveniently."
    },
    "inorthography": {
        "wordtype": "n.",
        "definition": "Deviation from correct orthography; bad spelling."
    },
    "inquisitorially": {
        "wordtype": "adv.",
        "definition": "In an inquisitorial manner."
    },
    "inquisitorious": {
        "wordtype": "a.",
        "definition": "Making strict inquiry; inquisitorial."
    },
    "insalivation": {
        "wordtype": "n.",
        "definition": "The mixing of the food with the saliva and other secretions of the mouth in eating."
    },
    "inscrutability": {
        "wordtype": "n.",
        "definition": "The quality or state of being inscrutable; inscrutableness."
    },
    "insignificant": {
        "wordtype": "a.",
        "definition": "Not significant; void of signification, sense, or import; meaningless; as, insignificant words."
    },
    "insignificative": {
        "wordtype": "a.",
        "definition": "Not expressing meaning; not significant."
    },
    "inspectorate": {
        "wordtype": "n.",
        "definition": "Inspectorship."
    },
    "inspectorship": {
        "wordtype": "n.",
        "definition": "The office of an inspector."
    },
    "instantaneous": {
        "wordtype": "a.",
        "definition": "Done or occurring in an instant, or without any perceptible duration of time; as, the passage of electricity appears to be instantaneous."
    },
    "instigatingly": {
        "wordtype": "adv.",
        "definition": "Incitingly; temptingly."
    },
    "instilllator": {
        "wordtype": "n.",
        "definition": "An instiller."
    },
    "instimulation": {
        "wordtype": "n.",
        "definition": "Stimulation."
    },
    "instrumentist": {
        "wordtype": "n.",
        "definition": "A performer on a musical instrument; an instrumentalist."
    },
    "insufferable": {
        "wordtype": "a.",
        "definition": "Offensive beyond endurance; detestable."
    },
    "insufflation": {
        "wordtype": "n.",
        "definition": "The act of breathing on or into anything"
    },
    "insupposable": {
        "wordtype": "a.",
        "definition": "Incapable of being supposed; not supposable; inconceivable."
    },
    "insurmountability": {
        "wordtype": "n.",
        "definition": "The state or quality of being insurmountable."
    },
    "insurmountably": {
        "wordtype": "adv.",
        "definition": "In a manner or to a degree not to be overcome."
    },
    "integumation": {
        "wordtype": "n.",
        "definition": "That part of physiology which treats of the integuments of animals and plants."
    },
    "integumentary": {
        "wordtype": "n.",
        "definition": "Belonging to, or composed of, integuments."
    },
    "intellectual": {
        "wordtype": "a.",
        "definition": "Belonging to, or performed by, the intellect; mental; as, intellectual powers, activities, etc."
    },
    "intellectualist": {
        "wordtype": "n.",
        "definition": "One who overrates the importance of the understanding."
    },
    "intellectualize": {
        "wordtype": "v. t.",
        "definition": "To treat in an intellectual manner; to discuss intellectually; to reduce to intellectual form; to express intellectually; to idealize."
    },
    "intelligencer": {
        "wordtype": "n.",
        "definition": "One who, or that which, sends or conveys intelligence or news; a messenger."
    },
    "intelligency": {
        "wordtype": "n.",
        "definition": "Intelligence."
    },
    "inter": {
        "wordtype": "v. t.",
        "definition": "To deposit and cover in the earth; to bury; to inhume; as, to inter a dead body."
    },
    "interarboration": {
        "wordtype": "n.",
        "definition": "The interweaving of branches of trees."
    },
    "interbrachial": {
        "wordtype": "a.",
        "definition": "Between the arms."
    },
    "intercarotid": {
        "wordtype": "a.",
        "definition": "Situated between the external and internal carotid arteries; as, an intercarotid ganglion."
    },
    "intercartilaginous": {
        "wordtype": "a.",
        "definition": "Within cartilage; endochondral; as, intercartilaginous ossification."
    },
    "interception": {
        "wordtype": "n.",
        "definition": "The act of intercepting; as, interception of a letter; interception of the enemy."
    },
    "intercitizenship": {
        "wordtype": "n.",
        "definition": "The mutual right to civic privileges, in the different States."
    },
    "interclusion": {
        "wordtype": "n.",
        "definition": "Interception; a stopping / obstruction."
    },
    "intercommunicable": {
        "wordtype": "a.",
        "definition": "Capable of being mutually communicated."
    },
    "intercommunity": {
        "wordtype": "n.",
        "definition": "Intercommunication; community of possessions, religion, etc."
    },
    "interconnect": {
        "wordtype": "v. t.",
        "definition": "To join together."
    },
    "interconvertible": {
        "wordtype": "a.",
        "definition": "Convertible the one into the other; as, coin and bank notes are interconvertible."
    },
    "interfoliaceous": {
        "wordtype": "a.",
        "definition": "At the same node with opposite or whorled leaves, but occupying a position between their places of attachment."
    },
    "interfollicular": {
        "wordtype": "a.",
        "definition": "Between follicles; as, the interfollicular septa in a lymphatic gland."
    },
    "interjacency": {
        "wordtype": "n.",
        "definition": "The state of being between; a coming or lying between or among; intervention; also, that which lies between."
    },
    "interjaculate": {
        "wordtype": "v. t.",
        "definition": "To ejaculate parenthetically."
    },
    "interknowledge": {
        "wordtype": "n.",
        "definition": "Mutual knowledge or acquaintance."
    },
    "interlaminated": {
        "wordtype": "a.",
        "definition": "Placed between, or containing, laminae or plates."
    },
    "interlocutrice": {
        "wordtype": "n.",
        "definition": "A female interlocutor."
    },
    "intermaxillary": {
        "wordtype": "a.",
        "definition": "Between the maxillary bones."
    },
    "intermediary": {
        "wordtype": "a.",
        "definition": "Lying, coming, or done, between; intermediate; as, an intermediary project."
    },
    "intermediator": {
        "wordtype": "n.",
        "definition": "A mediator."
    },
    "intermesenteric": {
        "wordtype": "a.",
        "definition": "Within the mesentery; as, the intermesenteric, or aortic, plexus."
    },
    "intermication": {
        "wordtype": "n.",
        "definition": "A shining between or among."
    },
    "interminably": {
        "wordtype": "adv.",
        "definition": "Without end or limit."
    },
    "intermixedly": {
        "wordtype": "adv.",
        "definition": "In a mixed manner."
    },
    "intermobility": {
        "wordtype": "n.",
        "definition": "Capacity of things to move among each other; as, the intermobility of fluid particles."
    },
    "internationally": {
        "wordtype": "adv.",
        "definition": "In an international manner; from an international point of view."
    },
    "internuncial": {
        "wordtype": "a.",
        "definition": "Of or pertaining to an internuncio."
    },
    "interparietal": {
        "wordtype": "a.",
        "definition": "Between the parietal bones or cartilages; as, the interparietal suture."
    },
    "interpellant": {
        "wordtype": "a.",
        "definition": "Interpelling; interrupting."
    },
    "interplanetary": {
        "wordtype": "a.",
        "definition": "Between planets; as, interplanetary spaces."
    },
    "interpolable": {
        "wordtype": "a.",
        "definition": "That may be interpolated; suitable to be interpolated."
    },
    "interpretatively": {
        "wordtype": "adv.",
        "definition": "By interpretation."
    },
    "interpunction": {
        "wordtype": "n.",
        "definition": "The insertion of points between word or sentences; punctuation."
    },
    "interreceive": {
        "wordtype": "v. t.",
        "definition": "To receive between or within."
    },
    "interrelation": {
        "wordtype": "n.",
        "definition": "Mutual or reciprocal relation; correlation."
    },
    "interrogatee": {
        "wordtype": "n.",
        "definition": "One who is interrogated."
    },
    "interrogative": {
        "wordtype": "a.",
        "definition": "Denoting a question; expressed in the form of a question; as, an interrogative sentence; an interrogative pronoun."
    },
    "interrogatory": {
        "wordtype": "n.",
        "definition": "A formal question or inquiry; esp. (Law), a question asked in writing."
    },
    "intersomnious": {
        "wordtype": "a.",
        "definition": "Between the times of sleeping; in an interval of wakefulness."
    },
    "interspinous": {
        "wordtype": "a.",
        "definition": "Between spines; esp., between the spinous processes of the vertebral column."
    },
    "interstellary": {
        "wordtype": "a.",
        "definition": "Interstellar."
    },
    "interstitial": {
        "wordtype": "a.",
        "definition": "Of or pertaining to interstices; intermediate; within the tissues; as, interstitial cavities or spaces in the tissues of animals or plants."
    },
    "intertropical": {
        "wordtype": "a.",
        "definition": "Situated between or within the tropics."
    },
    "intertwiningly": {
        "wordtype": "adv.",
        "definition": "By intertwining or being intertwined."
    },
    "interventricular": {
        "wordtype": "a.",
        "definition": "Between the ventricles; as, the interventricular partition of the heart."
    },
    "intervolution": {
        "wordtype": "n.",
        "definition": "The state of being intervolved or coiled up; a convolution; as, the intervolutions of a snake."
    },
    "intracellular": {
        "wordtype": "a.",
        "definition": "Within a cell; as, the intracellular movements seen in the pigment cells, the salivary cells, and in the protoplasm of some vegetable cells."
    },
    "intramercurial": {
        "wordtype": "a.",
        "definition": "Between the planet Mercury and the sun; -- as, the hypothetical Vulcan is intramercurial."
    },
    "intramolecular": {
        "wordtype": "a.",
        "definition": "Between molecules; situated, or acting, between the molecules of bodies."
    },
    "intranquillity": {
        "wordtype": "n.",
        "definition": "Unquietness; restlessness."
    },
    "intransgressible": {
        "wordtype": "a.",
        "definition": "Incapable of being transgressed; not to be passes over or crossed."
    },
    "intransitively": {
        "wordtype": "adv.",
        "definition": "Without an object following; in the manner of an intransitive verb."
    },
    "intrathoracic": {
        "wordtype": "a.",
        "definition": "Within the thora/ or chest."
    },
    "intratropical": {
        "wordtype": "a.",
        "definition": "Within the tropics."
    },
    "intrinsicalness": {
        "wordtype": "n.",
        "definition": "The quality of being intrinsical; intrinsicality."
    },
    "intropression": {
        "wordtype": "n.",
        "definition": "Pressure acting within."
    },
    "introsusception": {
        "wordtype": "n.",
        "definition": "The act or process of receiving within."
    },
    "inturgescence": {
        "wordtype": "n.",
        "definition": "A swelling; the act of swelling, or state of being swelled."
    },
    "invariability": {
        "wordtype": "n.",
        "definition": "The quality of being invariable; invariableness; constancy; uniformity."
    },
    "inviolability": {
        "wordtype": "n.",
        "definition": "The quality or state of being inviolable; inviolableness."
    },
    "invulnerability": {
        "wordtype": "n.",
        "definition": "Quality or state of being invulnerable."
    },
    "io": {
        "wordtype": "n.",
        "definition": "An exclamation of joy or triumph; -- often interjectional."
    },
    "ion": {
        "wordtype": "n.",
        "definition": "One of the elements which appear at the respective poles when a body is subjected to electro-chemical decomposition. Cf. Anion, Cation."
    },
    "irish": {
        "wordtype": "a.",
        "definition": "Of or pertaining to Ireland or to its inhabitants; produced in Ireland."
    },
    "irk": {
        "wordtype": "v. t.",
        "definition": "To weary; to give pain; to annoy; -- used only impersonally at present."
    },
    "iron": {
        "wordtype": "n.",
        "definition": "An instrument or utensil made of iron; -- chiefly in composition; as, a flatiron, a smoothing iron, etc."
    },
    "irreclaimable": {
        "wordtype": "a.",
        "definition": "Incapable of being reclaimed."
    },
    "irredeemability": {
        "wordtype": "n.",
        "definition": "The state or quality of being irredeemable; irredeemableness."
    },
    "irrefragability": {
        "wordtype": "n.",
        "definition": "The quality or state of being irrefragable; incapability of being refuted."
    },
    "irrefrangible": {
        "wordtype": "a.",
        "definition": "Not refrangible; that can not be refracted in passing from one medium to another."
    },
    "irreligionist": {
        "wordtype": "n.",
        "definition": "One who is irreligious."
    },
    "irreparability": {
        "wordtype": "n.",
        "definition": "The quality or state of being irreparable; irreparableness."
    },
    "irresistibility": {
        "wordtype": "n.",
        "definition": "The quality or state of being irrestible, irresistibleness."
    },
    "irrevocability": {
        "wordtype": "n.",
        "definition": "The state or quality of being irrevocable; irrevocableness."
    },
    "irritableness": {
        "wordtype": "n.",
        "definition": "Irritability."
    },
    "isis": {
        "wordtype": "n.",
        "definition": "One of the asteroids."
    },
    "ism": {
        "wordtype": "n.",
        "definition": "A doctrine or theory; especially, a wild or visionary theory."
    },
    "isogeothermic": {
        "wordtype": "a.",
        "definition": "Pertaining to, having the nature of, or marking, isogeotherms; as, an isogeothermal line or surface; as isogeothermal chart."
    },
    "isomeromorphism": {
        "wordtype": "n.",
        "definition": "Isomorphism between substances that are isomeric."
    },
    "isotherombrose": {
        "wordtype": "n.",
        "definition": "A line connecting or marking points on the earth's surface, which have the same mean summer rainfall."
    },
    "isotrimorphism": {
        "wordtype": "n.",
        "definition": "Isomorphism between the three forms, severally, of two trimorphous substances."
    },
    "itchy": {
        "wordtype": "a.",
        "definition": "Infected with the itch, or with an itching sensation."
    },
    "jaggy": {
        "wordtype": "a.",
        "definition": "Having jags; set with teeth; notched; uneven; as, jaggy teeth."
    },
    "jah": {
        "wordtype": "n.",
        "definition": "Jehovah."
    },
    "jane": {
        "wordtype": "n.",
        "definition": "A coin of Genoa; any small coin."
    },
    "javel": {
        "wordtype": "n.",
        "definition": "A vagabond."
    },
    "jehu": {
        "wordtype": "n.",
        "definition": "A coachman; a driver; especially, one who drives furiously."
    },
    "jerk": {
        "wordtype": "v. t.",
        "definition": "To beat; to strike."
    },
    "jilt": {
        "wordtype": "n.",
        "definition": "A woman who capriciously deceives her lover; a coquette; a flirt."
    },
    "jolif": {
        "wordtype": "a.",
        "definition": "Joyful; merry; pleasant; jolly."
    },
    "jorum": {
        "wordtype": "n.",
        "definition": "A large drinking vessel; also, its contents."
    },
    "joust": {
        "wordtype": "v. i.",
        "definition": "To engage in mock combat on horseback, as two knights in the lists; to tilt."
    },
    "jove": {
        "wordtype": "n.",
        "definition": "The chief divinity of the ancient Romans; Jupiter."
    },
    "jug": {
        "wordtype": "n.",
        "definition": "A vessel, usually of coarse earthenware, with a swelling belly and narrow mouth, and having a handle on one side."
    },
    "juicy": {
        "wordtype": "superl.",
        "definition": "A bounding with juice; succulent."
    },
    "juise": {
        "wordtype": "n.",
        "definition": "Judgment; justice; sentence."
    },
    "july": {
        "wordtype": "n.",
        "definition": "The seventh month of the year, containing thirty-one days."
    },
    "jurat": {
        "wordtype": "n.",
        "definition": "A person under oath; specifically, an officer of the nature of an alderman, in certain municipal corporations in England."
    },
    "jurisprudential": {
        "wordtype": "a.",
        "definition": "Of or pertaining to jurisprudence."
    },
    "jury": {
        "wordtype": "a.",
        "definition": "For temporary use; -- applied to a temporary contrivance."
    },
    "kaleidoscopical": {
        "wordtype": "a.",
        "definition": "Of, pertaining to, or formed by, a kaleidoscope; variegated."
    },
    "kalpa": {
        "wordtype": "n.",
        "definition": "One of the Brahmanic eons, a period of 4,320,000,000 years. At the end of each Kalpa the world is annihilated."
    },
    "kate": {
        "wordtype": "n.",
        "definition": "The brambling finch."
    },
    "kayko": {
        "wordtype": "n.",
        "definition": "The dog salmon."
    },
    "keck": {
        "wordtype": "v. i.",
        "definition": "To heave or to retch, as in an effort to vomit."
    },
    "kecky": {
        "wordtype": "a.",
        "definition": "Resembling a kecksy."
    },
    "kedge": {
        "wordtype": "n.",
        "definition": "To move (a vessel) by carrying out a kedge in a boat, dropping it overboard, and hauling the vessel up to it."
    },
    "keen": {
        "wordtype": "superl.",
        "definition": "Sharp; having a fine edge or point; as, a keen razor, or a razor with a keen edge."
    },
    "keep": {
        "wordtype": "v. t.",
        "definition": "To care; to desire."
    },
    "keld": {
        "wordtype": "a.",
        "definition": "Having a kell or covering; webbed."
    },
    "kemb": {
        "wordtype": "v. t.",
        "definition": "To comb."
    },
    "kemps": {
        "wordtype": "n. pl.",
        "definition": "The long flower stems of the ribwort plantain (Plantago Lanceolata)."
    },
    "kempt": {
        "wordtype": "",
        "definition": "past participle of Kemb."
    },
    "ketol": {
        "wordtype": "n.",
        "definition": "One of a series of series of complex nitrogenous substances, represented by methyl ketol and related to indol."
    },
    "kibe": {
        "wordtype": "n.",
        "definition": "A chap or crack in the flesh occasioned by cold; an ulcerated chilblain."
    },
    "kibed": {
        "wordtype": "a.",
        "definition": "Chapped; cracked with cold; affected with chilblains; as kibed heels."
    },
    "kilogrammetre": {
        "wordtype": "n.",
        "definition": "A measure of energy or work done, being the amount expended in raising one kilogram through the height of one meter, in the latitude of Paris."
    },
    "kin": {
        "wordtype": "",
        "definition": "A diminutive suffix; as, manikin; lambkin."
    },
    "kind": {
        "wordtype": "superl.",
        "definition": "Characteristic of the species; belonging to one's nature; natural; native."
    },
    "king": {
        "wordtype": "n.",
        "definition": "A playing card having the picture of a king; as, the king of diamonds."
    },
    "kish": {
        "wordtype": "n.",
        "definition": "A workman's name for the graphite which forms incidentally in iron smelting."
    },
    "kith": {
        "wordtype": "n.",
        "definition": "Acquaintance; kindred."
    },
    "knab": {
        "wordtype": "v. t.",
        "definition": "To seize with the teeth; to gnaw."
    },
    "knead": {
        "wordtype": "v. t.",
        "definition": "Fig.: To treat or form as by kneading; to beat."
    },
    "knickknackery": {
        "wordtype": "n.",
        "definition": "Knickknacks."
    },
    "knits": {
        "wordtype": "n. pl.",
        "definition": "Small particles of ore."
    },
    "knob": {
        "wordtype": "n.",
        "definition": "A hard protuberance; a hard swelling or rising; a bunch; a lump; as, a knob in the flesh, or on a bone."
    },
    "krang": {
        "wordtype": "n.",
        "definition": "The carcass of a whale after the blubber has been removed."
    },
    "kudos": {
        "wordtype": "n.",
        "definition": "Glory; fame; renown; praise."
    },
    "kydde": {
        "wordtype": "",
        "definition": "imperfect of Kythe, to show."
    },
    "kyley": {
        "wordtype": "n.",
        "definition": "A variety of the boomerang."
    },
    "la": {
        "wordtype": "n.",
        "definition": "A syllable applied to the sixth tone of the scale in music in solmization."
    },
    "labyrinthibranch": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the Labyrinthici."
    },
    "labyrinthiform": {
        "wordtype": "a.",
        "definition": "Having the form of a labyrinth; intricate."
    },
    "lakh": {
        "wordtype": "n.",
        "definition": "One hundred thousand; also, a vaguely great number; as, a lac of rupees."
    },
    "lacedaemonian": {
        "wordtype": "a.",
        "definition": "Of or pertaining to Lacedaemon or Sparta, the chief city of Laconia in the Peloponnesus."
    },
    "laemodipodous": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the Laemodipodadjective"
    },
    "laft": {
        "wordtype": "",
        "definition": "past participle of Leave."
    },
    "lair": {
        "wordtype": "n.",
        "definition": "A place in which to lie or rest; especially, the bed or couch of a wild beast."
    },
    "laky": {
        "wordtype": "a.",
        "definition": "Pertaining to a lake."
    },
    "lang": {
        "wordtype": "a. & adv.",
        "definition": "Long."
    },
    "languishingly": {
        "wordtype": "adv.",
        "definition": "In a languishing manner."
    },
    "lanky": {
        "wordtype": "a.",
        "definition": "Somewhat lank."
    },
    "lapel": {
        "wordtype": "n.",
        "definition": "That part of a garment which is turned back; specifically, the lap, or fold, of the front of a coat in continuation of collar."
    },
    "lapps": {
        "wordtype": "n. pl.",
        "definition": "A branch of the Mongolian race, now living in the northern parts of Norway, Sweden, and the adjacent parts of Russiadjective"
    },
    "lare": {
        "wordtype": "n.",
        "definition": "Lore; learning."
    },
    "laryngotracheal": {
        "wordtype": "a.",
        "definition": "Pertaining to both larynx and trachea; as, the laryngotracheal cartilage in the frog."
    },
    "laryngotracheotomy": {
        "wordtype": "n.",
        "definition": "The operation of cutting into the larynx and the upper part of the trachea, -- a frequent operation for obstruction to breathing."
    },
    "latch": {
        "wordtype": "v. t.",
        "definition": "To smear; to anoint."
    },
    "lathy": {
        "wordtype": "a.",
        "definition": "Like a lath; long and slender."
    },
    "latitudinarian": {
        "wordtype": "a.",
        "definition": "Not restrained; not confined by precise limits."
    },
    "latitudinarianism": {
        "wordtype": "n.",
        "definition": "A latitudinarian system or condition; freedom of opinion in matters pertaining to religious belief."
    },
    "lawe": {
        "wordtype": "v. t.",
        "definition": "To cut off the claws and balls of, as of a dog's fore feet."
    },
    "lawer": {
        "wordtype": "n.",
        "definition": "A lawyer."
    },
    "lawn": {
        "wordtype": "n.",
        "definition": "An open space between woods."
    },
    "lax": {
        "wordtype": "v. t.",
        "definition": "Not tense, firm, or rigid; loose; slack; as, a lax bandage; lax fiber."
    },
    "laxly": {
        "wordtype": "adv.",
        "definition": "In a lax manner."
    },
    "leach": {
        "wordtype": "n.",
        "definition": "A quantity of wood ashes, through which water passes, and thus imbibes the alkali."
    },
    "leak": {
        "wordtype": "v.",
        "definition": "The entrance or escape of a fluid through a crack, fissure, or other aperture; as, the leak gained on the ship's pumps."
    },
    "leany": {
        "wordtype": "a.",
        "definition": "Lean."
    },
    "lear": {
        "wordtype": "n.",
        "definition": "Lore; lesson."
    },
    "lease": {
        "wordtype": "v. i.",
        "definition": "To gather what harvesters have left behind; to glean."
    },
    "leash": {
        "wordtype": "n.",
        "definition": "A thong of leather, or a long cord, by which a falconer holds his hawk, or a courser his dog."
    },
    "leech": {
        "wordtype": "n.",
        "definition": "The border or edge at the side of a sail."
    },
    "leet": {
        "wordtype": "n.",
        "definition": "A portion; a list, esp. a list of candidates for an office."
    },
    "lege": {
        "wordtype": "v. t.",
        "definition": "To allege; to assert."
    },
    "leman": {
        "wordtype": "n.",
        "definition": "A sweetheart, of either sex; a gallant, or a mistress; -- usually in a bad sense."
    },
    "lend": {
        "wordtype": "v. t.",
        "definition": "To allow the possession and use of, on condition of the return of an equivalent in kind; as, to lend money or some article of food."
    },
    "lepal": {
        "wordtype": "n.",
        "definition": "A sterile transformed stamen."
    },
    "lepry": {
        "wordtype": "n.",
        "definition": "Leprosy."
    },
    "leptodactylous": {
        "wordtype": "a.",
        "definition": "Having slender toes."
    },
    "lest": {
        "wordtype": "v. i.",
        "definition": "To listen."
    },
    "leucocytogenesis": {
        "wordtype": "n.",
        "definition": "The formation of leucocytes."
    },
    "leucophyllous": {
        "wordtype": "a.",
        "definition": "Having white or silvery foliage."
    },
    "leve": {
        "wordtype": "v. i.",
        "definition": "To live."
    },
    "lexicographical": {
        "wordtype": "a.",
        "definition": "Of or pertaining to, or according to, lexicography."
    },
    "li": {
        "wordtype": "n.",
        "definition": "A Chinese measure of distance, being a little more than one third of a mile."
    },
    "librarianship": {
        "wordtype": "n.",
        "definition": "The office of a librarian."
    },
    "lifen": {
        "wordtype": "v. t.",
        "definition": "To enliven."
    },
    "light": {
        "wordtype": "n.",
        "definition": "That agent, force, or action in nature by the operation of which upon the organs of sight, objects are rendered visible or luminous."
    },
    "lim": {
        "wordtype": "n.",
        "definition": "A limb."
    },
    "limn": {
        "wordtype": "v. t.",
        "definition": "To draw or paint; especially, to represent in an artistic way with pencil or brush."
    },
    "limu": {
        "wordtype": "n.",
        "definition": "The Hawaiian name for seaweeds. Over sixty kinds are used as food, and have species names, as Limu Lipoa, Limu palawai, etc."
    },
    "ling": {
        "wordtype": "a.",
        "definition": "The burbot of Lake Ontario."
    },
    "link": {
        "wordtype": "n.",
        "definition": "A torch made of tow and pitch, or the like."
    },
    "lion": {
        "wordtype": "n.",
        "definition": "A sign and a constellation; Leo."
    },
    "lithochromics": {
        "wordtype": "n.",
        "definition": "The art of printing colored pictures on canvas from oil paintings on stone."
    },
    "lithographical": {
        "wordtype": "a.",
        "definition": "Of or pertaining to lithography; made by lithography; as, the lithographic art; a lithographic picture."
    },
    "loft": {
        "wordtype": "n.",
        "definition": "That which is lifted up; an elevation."
    },
    "long": {
        "wordtype": "superl.",
        "definition": "Slow in passing; causing weariness by length or duration; lingering; as, long hours of watching."
    },
    "loo": {
        "wordtype": "n.",
        "definition": "A modification of the game of \"all fours\" in which the players replenish their hands after each round by drawing each a card from the pack."
    },
    "loon": {
        "wordtype": "n.",
        "definition": "A sorry fellow; a worthless person; a rogue."
    },
    "lophobranchii": {
        "wordtype": "n. pl.",
        "definition": "An order of teleostean fishes, having the gills arranged in tufts on the branchial arches, as the Hippocampus and pipefishes."
    },
    "louk": {
        "wordtype": "n.",
        "definition": "An accomplice; a \"pal.\""
    },
    "lug": {
        "wordtype": "n.",
        "definition": "The ear, or its lobe."
    },
    "luna": {
        "wordtype": "n.",
        "definition": "The moon."
    },
    "lung": {
        "wordtype": "n.",
        "definition": "An organ for aerial respiration; -- commonly in the plural."
    },
    "luny": {
        "wordtype": "a.",
        "definition": "Crazy; mentally unsound."
    },
    "lusk": {
        "wordtype": "a.",
        "definition": "Lazy; slothful."
    },
    "lust": {
        "wordtype": "n.",
        "definition": "Pleasure."
    },
    "luteocobaltic": {
        "wordtype": "a.",
        "definition": "Pertaining to, or designating, certain compounds of cobalt having a yellow color. Cf. Cobaltic."
    },
    "lyne": {
        "wordtype": "n.",
        "definition": "Linen."
    },
    "machiavelianism": {
        "wordtype": "n.",
        "definition": "The supposed principles of Machiavel, or practice in conformity to them; political artifice, intended to favor arbitrary power."
    },
    "machicolation": {
        "wordtype": "n.",
        "definition": "The act of discharging missiles or pouring burning or melted substances upon assailants through such apertures."
    },
    "magnoliaceous": {
        "wordtype": "a.",
        "definition": "Pertaining to a natural order (Magnoliaceae) of trees of which the magnolia, the tulip tree, and the star anise are examples."
    },
    "mala": {
        "wordtype": "n.",
        "definition": "Evils; wrongs; offenses against right and law."
    },
    "malacissation": {
        "wordtype": "n.",
        "definition": "The act of making soft or supple."
    },
    "malacopterygious": {
        "wordtype": "a.",
        "definition": "Belonging to the Malacopterygii."
    },
    "malacostomous": {
        "wordtype": "a.",
        "definition": "Having soft jaws without teeth, as certain fishes."
    },
    "malacostracan": {
        "wordtype": "n.",
        "definition": "One of the Malacostracadjective"
    },
    "malacostracology": {
        "wordtype": "n.",
        "definition": "That branch of zoological science which relates to the crustaceans; -- called also carcinology."
    },
    "male": {
        "wordtype": "a.",
        "definition": "Evil; wicked; bad."
    },
    "maleconformation": {
        "wordtype": "n.",
        "definition": "Malconformation."
    },
    "malobservation": {
        "wordtype": "n.",
        "definition": "Erroneous observation."
    },
    "malt": {
        "wordtype": "a.",
        "definition": "Relating to, containing, or made with, malt."
    },
    "mam": {
        "wordtype": "n.",
        "definition": "Mam adjective"
    },
    "mandibuliform": {
        "wordtype": "a.",
        "definition": "Having the form of a mandible; -- said especially of the maxillae of an insect when hard and adapted for biting."
    },
    "many": {
        "wordtype": "n.",
        "definition": "A retinue of servants; a household."
    },
    "mara": {
        "wordtype": "n.",
        "definition": "The principal or ruling evil spirit."
    },
    "mask": {
        "wordtype": "n.",
        "definition": "A cover, or partial cover, for the face, used for disguise or protection; as, a dancer's mask; a fencer's mask; a ball player's mask."
    },
    "mat": {
        "wordtype": "n.",
        "definition": "A name given by coppersmiths to an alloy of copper, tin, iron, etc., usually called white metal."
    },
    "maty": {
        "wordtype": "n.",
        "definition": "A native house servant in Indiadjective"
    },
    "maud": {
        "wordtype": "n.",
        "definition": "A gray plaid; -- used by shepherds in Scotland."
    },
    "maul": {
        "wordtype": "n.",
        "definition": "A heavy wooden hammer or beetle."
    },
    "mean": {
        "wordtype": "v. t.",
        "definition": "To have in the mind, as a purpose, intention, etc.; to intend; to purpose; to design; as, what do you mean to do ?"
    },
    "meat": {
        "wordtype": "n.",
        "definition": "The flesh of animals used as food; esp., animal muscle; as, a breakfast of bread and fruit without meat."
    },
    "melostemonous": {
        "wordtype": "a.",
        "definition": "Having fever stamens than the parts of the corolladjective"
    },
    "melancholiness": {
        "wordtype": "n.",
        "definition": "The state or quality of being melancholy."
    },
    "mellification": {
        "wordtype": "n.",
        "definition": "The making or production of honey."
    },
    "melodramatist": {
        "wordtype": "n.",
        "definition": "One who acts in, or writes, melodramas."
    },
    "melt": {
        "wordtype": "v.",
        "definition": "To reduce from a solid to a liquid state, as by heat; to liquefy; as, to melt wax, tallow, or lead; to melt ice or snow."
    },
    "mesologarithm": {
        "wordtype": "n.",
        "definition": "A logarithm of the cosine or cotangent."
    },
    "metallochromy": {
        "wordtype": "n.",
        "definition": "The art or process of coloring metals."
    },
    "metallographic": {
        "wordtype": "a.",
        "definition": "Pertaining to, or by means of, metallography."
    },
    "metallorganic": {
        "wordtype": "a.",
        "definition": "Metalorganic."
    },
    "metallotherapy": {
        "wordtype": "n.",
        "definition": "Treatment of disease by applying metallic plates to the surface of the body."
    },
    "metamorphoser": {
        "wordtype": "n.",
        "definition": "One who metamorphoses."
    },
    "metamorphosic": {
        "wordtype": "a.",
        "definition": "Changing the form; transforming."
    },
    "metaphysician": {
        "wordtype": "n.",
        "definition": "One who is versed in metaphysics."
    },
    "meteorographic": {
        "wordtype": "a.",
        "definition": "Of or pertaining to meteorography."
    },
    "microcephalous": {
        "wordtype": "a.",
        "definition": "Having a small head; having the cranial cavity small; -- opposed to megacephalic."
    },
    "microcosmical": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the microcosm."
    },
    "micrometrical": {
        "wordtype": "a.",
        "definition": "Belonging to micrometry; made by the micrometer."
    },
    "microorganism": {
        "wordtype": "n.",
        "definition": "Any microscopic form of life; -- particularly applied to bacteria and similar organisms, esp. such are supposed to cause infectious diseases."
    },
    "micropegmatite": {
        "wordtype": "n.",
        "definition": "A rock showing under the microscope the structure of a graphic granite (pegmatite)."
    },
    "microphyllous": {
        "wordtype": "a.",
        "definition": "Small-leaved."
    },
    "mien": {
        "wordtype": "n.",
        "definition": "Aspect; air; manner; demeanor; carriage; bearing."
    },
    "miff": {
        "wordtype": "n.",
        "definition": "A petty falling out; a tiff; a quarrel; offense."
    },
    "ministerially": {
        "wordtype": "adv.",
        "definition": "In a ministerial manner; in the character or capacity of a minister."
    },
    "mir": {
        "wordtype": "n.",
        "definition": "A Russian village community."
    },
    "misadvertence": {
        "wordtype": "n.",
        "definition": "Inadvertence."
    },
    "misappreciated": {
        "wordtype": "a.",
        "definition": "Improperly appreciated."
    },
    "misarrangement": {
        "wordtype": "n.",
        "definition": "Wrong arrangement."
    },
    "miscomprehend": {
        "wordtype": "v. t.",
        "definition": "To get a wrong idea of or about; to misunderstand."
    },
    "misconception": {
        "wordtype": "n.",
        "definition": "Erroneous conception; false opinion; wrong understanding."
    },
    "misconjecture": {
        "wordtype": "n.",
        "definition": "A wrong conjecture or guess."
    },
    "misconsequence": {
        "wordtype": "n.",
        "definition": "A wrong consequence; a false deduction."
    },
    "miserableness": {
        "wordtype": "n.",
        "definition": "The state or quality of being miserable."
    },
    "misexposition": {
        "wordtype": "n.",
        "definition": "Wrong exposition."
    },
    "migo": {
        "wordtype": "v. i.",
        "definition": "To go astray."
    },
    "misinstruction": {
        "wordtype": "n.",
        "definition": "Wrong or improper instruction."
    },
    "misinterpretable": {
        "wordtype": "a.",
        "definition": "Capable of being misinterpreted; liable to be misunderstood."
    },
    "misproceeding": {
        "wordtype": "n.",
        "definition": "Wrong or irregular proceding."
    },
    "moco": {
        "wordtype": "n.",
        "definition": "A South American rodent (Cavia rupestris), allied to the Guinea pig, but larger; -- called also rock cavy."
    },
    "modernization": {
        "wordtype": "n.",
        "definition": "The act of rendering modern in style; the act or process of causing to conform to modern of thinking or acting."
    },
    "moe": {
        "wordtype": "n.",
        "definition": "A wry face or mouth; a mow."
    },
    "moke": {
        "wordtype": "n.",
        "definition": "A donkey."
    },
    "moky": {
        "wordtype": "a.",
        "definition": "Misty; dark; murky; muggy."
    },
    "mold": {
        "wordtype": "n.",
        "definition": "A spot; a blemish; a mole."
    },
    "mollification": {
        "wordtype": "n.",
        "definition": "The act of mollifying, or the state of being mollified; a softening."
    },
    "mono": {
        "wordtype": "n.",
        "definition": "The black howler of Central America (Mycetes villosus)."
    },
    "monocephalous": {
        "wordtype": "a.",
        "definition": "Having a solitary head; -- said of unbranched composite plants."
    },
    "monochromatic": {
        "wordtype": "a.",
        "definition": "Consisting of one color, or presenting rays of light of one color only."
    },
    "monotrematous": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the Monotrematadjective"
    },
    "moor": {
        "wordtype": "n.",
        "definition": "One of a mixed race inhabiting Morocco, Algeria, Tunis, and Tripoli, chiefly along the coast and in towns."
    },
    "mora": {
        "wordtype": "n.",
        "definition": "A game of guessing the number of fingers extended in a quick movement of the hand, -- much played by Italians of the lower classes."
    },
    "morn": {
        "wordtype": "n.",
        "definition": "The first part of the day; the morning; -- used chiefly in poetry."
    },
    "mort": {
        "wordtype": "n.",
        "definition": "A great quantity or number."
    },
    "mot": {
        "wordtype": "v.",
        "definition": "May; must; might."
    },
    "move": {
        "wordtype": "v. t.",
        "definition": "To transfer (a piece or man) from one space or position to another, according to the rules of the game; as, to move a king."
    },
    "mue": {
        "wordtype": "v. i.",
        "definition": "To mew; to molt."
    },
    "mule": {
        "wordtype": "n.",
        "definition": "A plant or vegetable produced by impregnating the pistil of one species with the pollen or fecundating dust of another; -- called also hybrid."
    },
    "multicapsular": {
        "wordtype": "a.",
        "definition": "Having many, or several, capsules."
    },
    "multiplicable": {
        "wordtype": "a.",
        "definition": "Capable of being multiplied; multipliable."
    },
    "multiplication": {
        "wordtype": "n.",
        "definition": "An increase above the normal number of parts, especially of petals; augmentation."
    },
    "multiplicative": {
        "wordtype": "a.",
        "definition": "Tending to multiply; having the power to multiply, or incease numbers."
    },
    "multiplicatively": {
        "wordtype": "adv.",
        "definition": "So as to multiply."
    },
    "multiplicious": {
        "wordtype": "a.",
        "definition": "Manifold."
    },
    "multitudinary": {
        "wordtype": "a.",
        "definition": "Multitudinous."
    },
    "mumm": {
        "wordtype": "v. i.",
        "definition": "To sport or make diversion in a mask or disguise; to mask."
    },
    "mump": {
        "wordtype": "v. i.",
        "definition": "To move the lips with the mouth closed; to mumble, as in sulkiness."
    },
    "must": {
        "wordtype": "n.",
        "definition": "Mustiness."
    },
    "myelencephalon": {
        "wordtype": "n.",
        "definition": "The brain and spinal cord; the cerebro-spinal axis; the neuron. Sometimes abbreviated to myelencephal."
    },
    "myelencephalous": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the Myelencephaladjective"
    },
    "myodynamiometer": {
        "wordtype": "n.",
        "definition": "A myodynamometer."
    },
    "nail": {
        "wordtype": "n.",
        "definition": "the horny scale of plate of epidermis at the end of the fingers and toes of man and many apes."
    },
    "naphthylamine": {
        "wordtype": "n.",
        "definition": "One of two basic amido derivatives of naphthalene, C10H7.NH2, forming crystalline solids."
    },
    "nart": {
        "wordtype": "",
        "definition": "Art not."
    },
    "necessarianism": {
        "wordtype": "n.",
        "definition": "The doctrine of philosophical necessity; necessitarianism."
    },
    "necessariness": {
        "wordtype": "n.",
        "definition": "The quality of being necessary."
    },
    "nectariferous": {
        "wordtype": "a.",
        "definition": "Secreting nectar; -- said of blossoms or their parts."
    },
    "nef": {
        "wordtype": "n.",
        "definition": "The nave of a church."
    },
    "negotiousness": {
        "wordtype": "n.",
        "definition": "The state of being busily occupied; activity."
    },
    "nep": {
        "wordtype": "n.",
        "definition": "Catnip."
    },
    "ner": {
        "wordtype": "adv. & a.",
        "definition": "nearer."
    },
    "nervelessness": {
        "wordtype": "n.",
        "definition": "The state of being nerveless."
    },
    "neuroskeletal": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the neuroskeleton."
    },
    "newfangledness": {
        "wordtype": "n.",
        "definition": "Affectation of, or fondness for, novelty; vain or affected fashion or form."
    },
    "newfangleness": {
        "wordtype": "n.",
        "definition": "Newfangledness."
    },
    "nib": {
        "wordtype": "n.",
        "definition": "A small and pointed thing or part; a point; a prong."
    },
    "nigrification": {
        "wordtype": "n.",
        "definition": "The act or process of making black."
    },
    "nim": {
        "wordtype": "v. t.",
        "definition": "To take; to steal; to filch."
    },
    "nine": {
        "wordtype": "a.",
        "definition": "Eight and one more; one less than ten; as, nine miles."
    },
    "no": {
        "wordtype": "a.",
        "definition": "Not any; not one; none."
    },
    "nob": {
        "wordtype": "n.",
        "definition": "The head."
    },
    "noctivagation": {
        "wordtype": "n.",
        "definition": "A roving or going about in the night."
    },
    "nof": {
        "wordtype": "",
        "definition": "Not of; nor of."
    },
    "noll": {
        "wordtype": "n.",
        "definition": "The head; the noddle."
    },
    "nomenclatress": {
        "wordtype": "n.",
        "definition": "A female nomenclator."
    },
    "nonappointment": {
        "wordtype": "n.",
        "definition": "Neglect of making appointment; failure to receive an appointment."
    },
    "noncommissioned": {
        "wordtype": "a.",
        "definition": "Not having a commission."
    },
    "noncondensible": {
        "wordtype": "a.",
        "definition": "Not condensible; incapable of being liquefied; -- said of gases."
    },
    "nonconforming": {
        "wordtype": "a.",
        "definition": "Not conforming; declining conformity; especially, not conforming to the established church of a country."
    },
    "nondeposition": {
        "wordtype": "n.",
        "definition": "A failure to deposit or throw down."
    },
    "nondevelopment": {
        "wordtype": "n.",
        "definition": "Failure or lack of development."
    },
    "nonemphatical": {
        "wordtype": "a.",
        "definition": "Having no emphasis; unemphatic."
    },
    "nonexportation": {
        "wordtype": "n.",
        "definition": "A failure of exportation; a not exporting of commodities."
    },
    "nonprofessional": {
        "wordtype": "a.",
        "definition": "Not belonging to a profession; not done by, or proceeding from, professional men; contrary to professional usage."
    },
    "nonvernacular": {
        "wordtype": "a.",
        "definition": "Not vernacular."
    },
    "nook": {
        "wordtype": "n.",
        "definition": "A narrow place formed by an angle in bodies or between bodies; a corner; a recess; a secluded retreat."
    },
    "northwesterly": {
        "wordtype": "a.",
        "definition": "Toward the northwest, or from the northwest."
    },
    "notobranchiata": {
        "wordtype": "n. pl.",
        "definition": "A division of nudibranchiate mollusks having gills upon the back."
    },
    "notwithstanding": {
        "wordtype": "prep.",
        "definition": "Without prevention, or obstruction from or by; in spite of."
    },
    "numismatologist": {
        "wordtype": "n.",
        "definition": "One versed in numismatology."
    },
    "oak": {
        "wordtype": "n.",
        "definition": "The strong wood or timber of the oak."
    },
    "obdiplostemonous": {
        "wordtype": "a.",
        "definition": "Having twice as many stamens as petals, those of the outer set being opposite the petals; -- said of flowers."
    },
    "obstructionism": {
        "wordtype": "n.",
        "definition": "The act or the policy of obstructing progress."
    },
    "ochlocratical": {
        "wordtype": "a.",
        "definition": "Of or pertaining to ochlocracy; having the form or character of an ochlocracy; mobocratic."
    },
    "odin": {
        "wordtype": "n.",
        "definition": "The supreme deity of the Scandinavians; -- the same as Woden, of the German tribes."
    },
    "odontophorous": {
        "wordtype": "a.",
        "definition": "Having an odontophore."
    },
    "odor": {
        "wordtype": "n.",
        "definition": "Any smell, whether fragrant or offensive; scent; perfume."
    },
    "ods": {
        "wordtype": "interj.",
        "definition": "A corruption of God's; -- formerly used in oaths and ejaculatory phrases."
    },
    "of": {
        "wordtype": "prep.",
        "definition": "In a general sense, from, or out from; proceeding from; belonging to; relating to; concerning; -- used in a variety of applications; as:"
    },
    "oft": {
        "wordtype": "adv.",
        "definition": "Often; frequently; not rarely; many times."
    },
    "ogle": {
        "wordtype": "v. t.",
        "definition": "To view or look at with side glances, as in fondness, or with a design to attract notice."
    },
    "ogre": {
        "wordtype": "n.",
        "definition": "An imaginary monster, or hideous giant of fairy tales, who lived on human beings; hence, any frightful giant; a cruel monster."
    },
    "oligosiderite": {
        "wordtype": "n.",
        "definition": "A meteorite characterized by the presence of but a small amount of metallic iron."
    },
    "oligospermous": {
        "wordtype": "a.",
        "definition": "Having few seeds."
    },
    "olpe": {
        "wordtype": "n.",
        "definition": "Originally, a leather flask or vessel for oils or liquids; afterward, an earthenware vase or pitcher without a spout."
    },
    "omen": {
        "wordtype": "v. t.",
        "definition": "To divine or to foreshow by signs or portents; to have omens or premonitions regarding; to predict; to augur; as, to omen ill of an enterprise."
    },
    "omnipercipiency": {
        "wordtype": "n.",
        "definition": "Perception of everything."
    },
    "omnipresential": {
        "wordtype": "a.",
        "definition": "Implying universal presence."
    },
    "omniprevalent": {
        "wordtype": "a.",
        "definition": "Prevalent everywhere or in all things."
    },
    "omphalopsychite": {
        "wordtype": "n.",
        "definition": "A name of the Hesychasts, from their habit of gazing upon the navel."
    },
    "oneirocritics": {
        "wordtype": "n.",
        "definition": "The art of interpreting dreams."
    },
    "only": {
        "wordtype": "a.",
        "definition": "One alone; single; as, the only man present; his only occupation."
    },
    "ook": {
        "wordtype": "n.",
        "definition": "Oak."
    },
    "ophiomorphite": {
        "wordtype": "n.",
        "definition": "An ammonite."
    },
    "ophiomorphous": {
        "wordtype": "a.",
        "definition": "Having the form of a serpent."
    },
    "opisthobranchiate": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the Opisthobranchiatadjective"
    },
    "opisthocoelous": {
        "wordtype": "a.",
        "definition": "Concave behind; -- applied especially to vertebrae in which the anterior end of the centrum is convex and the posterior concave."
    },
    "oppositionist": {
        "wordtype": "n.",
        "definition": "One who belongs to the opposition party."
    },
    "oppositipetalous": {
        "wordtype": "a.",
        "definition": "Placed in front of a petal."
    },
    "oppositisepalous": {
        "wordtype": "a.",
        "definition": "Placed in front of a sepal."
    },
    "opus": {
        "wordtype": "n.",
        "definition": "A work; specif. (Mus.), a musical composition."
    },
    "orby": {
        "wordtype": "a.",
        "definition": "Orblike; having the course of an orb; revolving."
    },
    "orchestration": {
        "wordtype": "n.",
        "definition": "The arrangement of music for an orchestra; orchestral treatment of a composition; -- called also instrumentation."
    },
    "organicalness": {
        "wordtype": "n.",
        "definition": "The quality or state of being organic."
    },
    "organographical": {
        "wordtype": "a.",
        "definition": "Of or pertaining to organography."
    },
    "organometallic": {
        "wordtype": "a.",
        "definition": "Metalorganic."
    },
    "ornithosauria": {
        "wordtype": "n. pl.",
        "definition": "An order of extinct flying reptiles; -- called also Pterosauriadjective"
    },
    "orthographist": {
        "wordtype": "n.",
        "definition": "One who spells words correctly; an orthographer."
    },
    "ostreophagist": {
        "wordtype": "n.",
        "definition": "One who feeds on oysters."
    },
    "overbounteous": {
        "wordtype": "a.",
        "definition": "Bounteous to excess."
    },
    "overcredulous": {
        "wordtype": "a.",
        "definition": "Too credulous."
    },
    "overexcitement": {
        "wordtype": "n.",
        "definition": "Excess of excitement; the state of being overexcited."
    },
    "ovum": {
        "wordtype": "n.",
        "definition": "One of the series of egg-shaped ornaments into which the ovolo is often carved."
    },
    "paas": {
        "wordtype": "n.",
        "definition": "Pace"
    },
    "pachydactylous": {
        "wordtype": "a.",
        "definition": "Having thick toes."
    },
    "pachydermatous": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the pachyderms."
    },
    "pacu": {
        "wordtype": "n.",
        "definition": "A South American freah-water fish (Myleies pacu), of the family Characinidae. It is highly esteemed as food."
    },
    "pah": {
        "wordtype": "n.",
        "definition": "A kind of stockaded intrenchment."
    },
    "paleographical": {
        "wordtype": "a.",
        "definition": "Of or pertaining to paleography."
    },
    "pali": {
        "wordtype": "n.",
        "definition": "pl. of Palus."
    },
    "palindromical": {
        "wordtype": "a.",
        "definition": "Of, pertaining to, or like, a palindrome."
    },
    "pall": {
        "wordtype": "n.",
        "definition": "An outer garment; a cloak mantle."
    },
    "palliobranchiate": {
        "wordtype": "a.",
        "definition": "Having the pallium, or mantle, acting as a gill, as in brachiopods."
    },
    "palm": {
        "wordtype": "n.",
        "definition": "The inner and somewhat concave part of the hand between the bases of the fingers and the wrist."
    },
    "pang": {
        "wordtype": "n.",
        "definition": "A paroxysm of extreme pain or anguish; a sudden and transitory agony; a throe; as, the pangs of death."
    },
    "panstereorama": {
        "wordtype": "n.",
        "definition": "A model of a town or country, in relief, executed in wood, cork, pasteboard, or the like."
    },
    "pant": {
        "wordtype": "v. i.",
        "definition": "To breathe quickly or in a labored manner, as after exertion or from eagerness or excitement; to respire with heaving of the breast; to gasp."
    },
    "pantochronometer": {
        "wordtype": "n.",
        "definition": "An instrument combining a compass, sundial, and universal time dial."
    },
    "pap": {
        "wordtype": "n.",
        "definition": "A nipple; a mammilla; a teat."
    },
    "para": {
        "wordtype": "n.",
        "definition": "A piece of Turkish money, usually copper, the fortieth part of a piaster, or about one ninth of a cent."
    },
    "parabronchium": {
        "wordtype": "n.",
        "definition": "One of the branches of an ectobronchium or entobronchium."
    },
    "paradigmatical": {
        "wordtype": "a.",
        "definition": "Exemplary."
    },
    "parallelistic": {
        "wordtype": "a.",
        "definition": "Of the nature of a parallelism; involving parallelism."
    },
    "paramagnetism": {
        "wordtype": "n.",
        "definition": "Magnetism, as opposed to diamagnetism."
    },
    "paranthracene": {
        "wordtype": "n.",
        "definition": "An inert isomeric modification of anthracene."
    },
    "paraphrastical": {
        "wordtype": "a.",
        "definition": "Paraphrasing; of the nature of paraphrase; explaining, or translating in words more clear and ample than those of the author; not literal; free."
    },
    "pare": {
        "wordtype": "v. t.",
        "definition": "To cut off, or shave off, the superficial substance or extremities of; as, to pare an apple; to pare a horse's hoof."
    },
    "parenthetically": {
        "wordtype": "adv.",
        "definition": "In a parenthetical manner; by way of parenthesis; by parentheses."
    },
    "part": {
        "wordtype": "n.",
        "definition": "A constituent portion of a living or spiritual whole; a member; an organ; an essential element."
    },
    "participation": {
        "wordtype": "n.",
        "definition": "The act or state of participating, or sharing in common with others; as, a participation in joy or sorrows."
    },
    "particularity": {
        "wordtype": "n.",
        "definition": "The state or quality of being particular; distinctiveness; circumstantiality; minuteness in detail."
    },
    "particularment": {
        "wordtype": "n.",
        "definition": "A particular; a detail."
    },
    "partitionment": {
        "wordtype": "n.",
        "definition": "The act of partitioning."
    },
    "pas": {
        "wordtype": "n.",
        "definition": "A pace; a step, as in a dance."
    },
    "pave": {
        "wordtype": "n.",
        "definition": "The pavement."
    },
    "paw": {
        "wordtype": "n.",
        "definition": "The foot of a quadruped having claws, as the lion, dog, cat, etc."
    },
    "pectoriloquial": {
        "wordtype": "a.",
        "definition": "Pertaining to, or of the nature of, pectoriloquy."
    },
    "peep": {
        "wordtype": "v. i.",
        "definition": "To cry, as a chicken hatching or newly hatched; to chirp; to cheep."
    },
    "peer": {
        "wordtype": "v. i.",
        "definition": "To come in sight; to appear."
    },
    "pelt": {
        "wordtype": "n.",
        "definition": "The human skin."
    },
    "pendulousness": {
        "wordtype": "n.",
        "definition": "The quality or state of being pendulous; the state of hanging loosely; pendulosity."
    },
    "penetrativeness": {
        "wordtype": "n.",
        "definition": "The quality of being penetrative."
    },
    "perfectibilian": {
        "wordtype": "n.",
        "definition": "A perfectionist."
    },
    "perfectibility": {
        "wordtype": "n.",
        "definition": "The quality or state of being perfectible."
    },
    "perfectionment": {
        "wordtype": "n.",
        "definition": "The act of bringing to perfection, or the state of having attained to perfection."
    },
    "perfunctoriness": {
        "wordtype": "n.",
        "definition": "The quality or state of being perfunctory."
    },
    "perichondrial": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the perichondrium; situated around cartilage."
    },
    "periclitation": {
        "wordtype": "n.",
        "definition": "Trial; experiment."
    },
    "perinephritis": {
        "wordtype": "n.",
        "definition": "Inflammation of the cellular tissue around the kidney."
    },
    "perishability": {
        "wordtype": "n.",
        "definition": "Perishableness."
    },
    "perissological": {
        "wordtype": "a.",
        "definition": "Redundant or excessive in words."
    },
    "persuasibility": {
        "wordtype": "n.",
        "definition": "Capability of being persuaded."
    },
    "persulphocyanate": {
        "wordtype": "n.",
        "definition": "A salt of persulphocyanic acid."
    },
    "perterebration": {
        "wordtype": "n.",
        "definition": "The act of boring through."
    },
    "peso": {
        "wordtype": "n.",
        "definition": "A Spanish dollar; also, an Argentine, Chilian, Colombian, etc., coin, equal to from 75 cents to a dollar; also, a pound weight."
    },
    "pessimistical": {
        "wordtype": "a.",
        "definition": "Pessimistic."
    },
    "pet": {
        "wordtype": "n.",
        "definition": "A cade lamb; a lamb brought up by hand."
    },
    "petitionarily": {
        "wordtype": "adv.",
        "definition": "By way of begging the question; by an assumption."
    },
    "phantasmatical": {
        "wordtype": "a.",
        "definition": "Phantasmal."
    },
    "pharmacosiderite": {
        "wordtype": "n.",
        "definition": "A hydrous arsenate of iron occurring in green or yellowish green cubic crystals; cube ore."
    },
    "philadelphian": {
        "wordtype": "a.",
        "definition": "Of or pertaining to Ptolemy Philadelphus, or to one of the cities named Philadelphia, esp. the modern city in Pennsylvaniadjective"
    },
    "philanthropinist": {
        "wordtype": "n.",
        "definition": "An advocate of, or believer in, philanthropinism."
    },
    "philomathematic": {
        "wordtype": "n.",
        "definition": "A philomath."
    },
    "philopolemical": {
        "wordtype": "a.",
        "definition": "Fond of polemics or controversy."
    },
    "philosophaster": {
        "wordtype": "n.",
        "definition": "A pretender to philosophy."
    },
    "philosophistical": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the love or practice of sophistry."
    },
    "philotechnical": {
        "wordtype": "a.",
        "definition": "Fond of the arts."
    },
    "phiz": {
        "wordtype": "n.",
        "definition": "The face or visage."
    },
    "phosphorescence": {
        "wordtype": "n.",
        "definition": "The quality or state of being phosphorescent; or the act of phosphorescing."
    },
    "phosphorescent": {
        "wordtype": "a.",
        "definition": "Shining with a phosphoric light; luminous without sensible heat."
    },
    "photographical": {
        "wordtype": "a.",
        "definition": "Of or pertaining to photography; obtained by photography; used ib photography; as a photographic picture; a photographic cameradjective"
    },
    "photographist": {
        "wordtype": "n.",
        "definition": "A photographer."
    },
    "photoheliograph": {
        "wordtype": "n.",
        "definition": "A modified kind of telescope adapted to taking photographs of the sun."
    },
    "photolithographer": {
        "wordtype": "n.",
        "definition": "One who practices, or one who employs, photolithography."
    },
    "phragmosiphon": {
        "wordtype": "n.",
        "definition": "The siphon of a phragmocone."
    },
    "phthisipneumony": {
        "wordtype": "n.",
        "definition": "Pulmonary consumption."
    },
    "phycoxanthine": {
        "wordtype": "n.",
        "definition": "A yellowish coloring matter found in certain algae."
    },
    "physiognomical": {
        "wordtype": "a.",
        "definition": "Of or pertaining to physiognomy; according with the principles of physiognomy."
    },
    "physiologically": {
        "wordtype": "adv.",
        "definition": "In a physiological manner."
    },
    "piet": {
        "wordtype": "n.",
        "definition": "The dipper, or water ouzel."
    },
    "pily": {
        "wordtype": "a.",
        "definition": "Like pile or wool."
    },
    "pink": {
        "wordtype": "n.",
        "definition": "A vessel with a very narrow stern; -- called also pinky."
    },
    "piny": {
        "wordtype": "a.",
        "definition": "Abounding with pines."
    },
    "pipa": {
        "wordtype": "n.",
        "definition": "The Surinam toad (Pipa Americana), noted for its peculiar breeding habits."
    },
    "pipy": {
        "wordtype": "a.",
        "definition": "Like a pipe; hollow-stemmed."
    },
    "pirl": {
        "wordtype": "v. t.",
        "definition": "To spin, as a top."
    },
    "piscicultural": {
        "wordtype": "a.",
        "definition": "Relating to pisciculture."
    },
    "pish": {
        "wordtype": "interj.",
        "definition": "An exclamation of contempt."
    },
    "pistillaceous": {
        "wordtype": "a.",
        "definition": "Growing on, or having nature of, the pistil; of or pertaining to a pistil."
    },
    "piu": {
        "wordtype": "adv.",
        "definition": "A little more; as, piu allegro, a little more briskly."
    },
    "plagiocephalic": {
        "wordtype": "a.",
        "definition": "Having an oblique lateral deformity of the skull."
    },
    "planipetalous": {
        "wordtype": "a.",
        "definition": "Having flat petals."
    },
    "platiniferous": {
        "wordtype": "a.",
        "definition": "Yielding platinum; as, platiniferous sand."
    },
    "platinochloride": {
        "wordtype": "n.",
        "definition": "A double chloride of platinum and some other metal or radical; a salt of platinochloric acid."
    },
    "platitudinarian": {
        "wordtype": "n.",
        "definition": "One addicted to uttering platitudes, or stale and insipid truisms."
    },
    "platyelminthes": {
        "wordtype": "n. pl.",
        "definition": "A class of helminthes including the cestodes, or tapeworms, the trematodes, and the turbellarians. Called also flatworms."
    },
    "plea": {
        "wordtype": "n.",
        "definition": "That which is alleged or pleaded, in defense or in justification; an excuse; an apology."
    },
    "plesiomorphous": {
        "wordtype": "a.",
        "definition": "Nearly alike in form."
    },
    "plethysmography": {
        "wordtype": "n.",
        "definition": "The study, by means of the plethysmograph, of the variations in size of a limb, and hence of its blood supply."
    },
    "pleuroperitoneal": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the pleural and peritoneal membranes or cavities, or to the pleuroperitoneum."
    },
    "plim": {
        "wordtype": "v. i.",
        "definition": "To swell, as grain or wood with water."
    },
    "ploy": {
        "wordtype": "n.",
        "definition": "Sport; frolic."
    },
    "plug": {
        "wordtype": "n.",
        "definition": "Any piece of wood, metal, or other substance used to stop or fill a hole; a stopple."
    },
    "pneumatograph": {
        "wordtype": "n.",
        "definition": "An instrument for recording the movements of the thorax or chest wall during respiration; -- also called stethograph."
    },
    "pneumogastric": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the lungs and the stomach."
    },
    "pneumonometer": {
        "wordtype": "n.",
        "definition": "A spirometer; a pneumometer."
    },
    "pneumotherapy": {
        "wordtype": "n.",
        "definition": "The treatment of disease by inhalations of compressed or rarefied air."
    },
    "podophthalmous": {
        "wordtype": "a.",
        "definition": "Having the eyes on movable footstalks, or pedicels."
    },
    "poikilothermous": {
        "wordtype": "a.",
        "definition": "Poikilothermal."
    },
    "poke": {
        "wordtype": "n.",
        "definition": "A bag; a sack; a pocket."
    },
    "polliniferous": {
        "wordtype": "a.",
        "definition": "Producing pollen; polleniferous."
    },
    "polyautography": {
        "wordtype": "n.",
        "definition": "The act or practice of multiplying copies of one's own handwriting, or of manuscripts, by printing from stone, -- a species of lithography."
    },
    "polychromatic": {
        "wordtype": "a.",
        "definition": "Showing a variety, or a change, of colors."
    },
    "polydactylism": {
        "wordtype": "n.",
        "definition": "The possession of more that the normal number of digits."
    },
    "polygonometry": {
        "wordtype": "n.",
        "definition": "The doctrine of polygons; an extension of some of the principles of trigonometry to the case of polygons."
    },
    "polysulphuret": {
        "wordtype": "n.",
        "definition": "A polysulphide."
    },
    "pome": {
        "wordtype": "n.",
        "definition": "A ball of silver or other metal, which is filled with hot water, and used by the priest in cold weather to warm his hands during the service."
    },
    "pood": {
        "wordtype": "n.",
        "definition": "A Russian weight, equal to forty Russian pounds or about thirty-six English pounds avoirdupois."
    },
    "pory": {
        "wordtype": "a.",
        "definition": "Porous; as, pory stone. [R.] Dryden."
    },
    "postencephalon": {
        "wordtype": "n.",
        "definition": "The metencephalon."
    },
    "postremogeniture": {
        "wordtype": "n.",
        "definition": "The right of the youngest born."
    },
    "potentiometer": {
        "wordtype": "n.",
        "definition": "An instrument for measuring or comparing electrial potentials or electro-motive forces."
    },
    "pour": {
        "wordtype": "a.",
        "definition": "Poor."
    },
    "pox": {
        "wordtype": "v. t.",
        "definition": "To infect with the pox, or syphilis."
    },
    "poy": {
        "wordtype": "n.",
        "definition": "A support; -- used in composition; as, teapoy."
    },
    "practicability": {
        "wordtype": "n.",
        "definition": "The quality or state of being practicable; practicableness; feasibility."
    },
    "praiseworthiness": {
        "wordtype": "n.",
        "definition": "The quality or state of being praiseworthy."
    },
    "pray": {
        "wordtype": "v. t.",
        "definition": "To address earnest request to; to supplicate; to entreat; to implore; to beseech."
    },
    "preambulation": {
        "wordtype": "n.",
        "definition": "A walking or going before; precedence."
    },
    "preambulatory": {
        "wordtype": "a.",
        "definition": "Preceding; going before; introductory."
    },
    "preapprehension": {
        "wordtype": "n.",
        "definition": "An apprehension or opinion formed before examination or knowledge."
    },
    "prebendaryship": {
        "wordtype": "n.",
        "definition": "The office of a prebendary."
    },
    "precentorship": {
        "wordtype": "n.",
        "definition": "The office of a precentor."
    },
    "precipitantly": {
        "wordtype": "adv.",
        "definition": "With rash or foolish haste; in headlong manner."
    },
    "preconsolidated": {
        "wordtype": "a.",
        "definition": "Consolidated beforehand."
    },
    "preconstitute": {
        "wordtype": "v. t.",
        "definition": "To constitute or establish beforehand."
    },
    "precursorship": {
        "wordtype": "n.",
        "definition": "The position or condition of a precursor."
    },
    "predeliberation": {
        "wordtype": "n.",
        "definition": "Previous deliberation."
    },
    "predestination": {
        "wordtype": "n.",
        "definition": "The act of predestinating."
    },
    "predominantly": {
        "wordtype": "adv.",
        "definition": "In a predominant manner."
    },
    "preexistentism": {
        "wordtype": "n.",
        "definition": "The theory of a preexistence of souls before their association with human bodies."
    },
    "preexistimation": {
        "wordtype": "n.",
        "definition": "Previous esteem or estimation."
    },
    "prefecundatory": {
        "wordtype": "a.",
        "definition": "Of or pertaining to prefecundation."
    },
    "preferableness": {
        "wordtype": "n.",
        "definition": "The quality or state of being preferable."
    },
    "prefigurement": {
        "wordtype": "n.",
        "definition": "The act of prefiguring; prefiguration; also, that which is prefigured."
    },
    "premonishment": {
        "wordtype": "n.",
        "definition": "Previous warning or admonition; forewarning."
    },
    "premonstrator": {
        "wordtype": "n.",
        "definition": "One who, or that which, premonstrates."
    },
    "preponderatingly": {
        "wordtype": "adv.",
        "definition": "In a preponderating manner; preponderantly."
    },
    "prepossession": {
        "wordtype": "n.",
        "definition": "Preoccupation; prior possession."
    },
    "prescriptible": {
        "wordtype": "a.",
        "definition": "Depending on, or derived from, prescription; proper to be prescribed."
    },
    "prestidigitation": {
        "wordtype": "n.",
        "definition": "Legerdemain; sleight of hand; juggling."
    },
    "presstriction": {
        "wordtype": "n.",
        "definition": "Obstruction, dimness, or defect of sight."
    },
    "preternaturality": {
        "wordtype": "n.",
        "definition": "Preternaturalness."
    },
    "preventability": {
        "wordtype": "n.",
        "definition": "The quality or state of being preventable."
    },
    "prezygapophysis": {
        "wordtype": "n.",
        "definition": "An anterior zygapophysis."
    },
    "prie": {
        "wordtype": "n.",
        "definition": "The plant privet."
    },
    "prim": {
        "wordtype": "n.",
        "definition": "The privet."
    },
    "primitiveness": {
        "wordtype": "n.",
        "definition": "The quality or state of being primitive; conformity to primitive style or practice."
    },
    "primogenitive": {
        "wordtype": "a.",
        "definition": "Of or pertaining to primogeniture."
    },
    "probabiliorist": {
        "wordtype": "n.",
        "definition": "One who holds, in opposition to the probabilists, that a man is bound to do that which is most probably right."
    },
    "probationership": {
        "wordtype": "n.",
        "definition": "The state of being a probationer; novitiate."
    },
    "problematical": {
        "wordtype": "a.",
        "definition": "Having the nature of a problem; not shown in fact; questionable; uncertain; unsettled; doubtful."
    },
    "proboscidiform": {
        "wordtype": "a.",
        "definition": "Having the form or uses of a proboscis; as, a proboscidiform mouth."
    },
    "proceleusmatic": {
        "wordtype": "a.",
        "definition": "Inciting; animating; encouraging."
    },
    "procrastinate": {
        "wordtype": "v. t.",
        "definition": "To put off till to-morrow, or from day to day; to defer; to postpone; to delay; as, to procrastinate repentance."
    },
    "procuratorial": {
        "wordtype": "a.",
        "definition": "Of or pertaining to a procurator, or proctor; made by a proctor."
    },
    "prognostication": {
        "wordtype": "n.",
        "definition": "The act of foreshowing or foretelling something future by present signs; prediction."
    },
    "prolegomenary": {
        "wordtype": "a.",
        "definition": "Of the nature of a prolegomenon; preliminary; introductory; prefatory."
    },
    "propaedeutics": {
        "wordtype": "n.",
        "definition": "The preliminary learning connected with any art or science; preparatory instruction."
    },
    "proparoxytone": {
        "wordtype": "n.",
        "definition": "A word which has the acute accent on the antepenult."
    },
    "proportionable": {
        "wordtype": "a.",
        "definition": "Capable of being proportioned, or made proportional; also, proportional; proportionate."
    },
    "proportionably": {
        "wordtype": "adv.",
        "definition": "Proportionally."
    },
    "proportionally": {
        "wordtype": "adv.",
        "definition": "In proportion; in due degree; adapted relatively; as, all parts of the building are proportionally large."
    },
    "proportionately": {
        "wordtype": "adv.",
        "definition": "In a proportionate manner; with due proportion; proportionally."
    },
    "proscriptionist": {
        "wordtype": "n.",
        "definition": "One who proscribes."
    },
    "prospectively": {
        "wordtype": "adv.",
        "definition": "In a prospective manner."
    },
    "prospectiveness": {
        "wordtype": "n.",
        "definition": "Quality of being prospective."
    },
    "protectorship": {
        "wordtype": "n.",
        "definition": "The office of a protector or regent; protectorate."
    },
    "proteranthous": {
        "wordtype": "a.",
        "definition": "Having flowers appearing before the leaves; -- said of certain plants."
    },
    "protoorganism": {
        "wordtype": "n.",
        "definition": "An organism whose nature is so difficult to determine that it might be referred to either the animal or the vegetable kingdom."
    },
    "protosilicate": {
        "wordtype": "n.",
        "definition": "A silicate formed with the lowest proportion of silicic acid, or having but one atom of silicon in the molecule."
    },
    "proventriulus": {
        "wordtype": "n.",
        "definition": "The glandular stomach of birds, situated just above the crop."
    },
    "proverbialism": {
        "wordtype": "n.",
        "definition": "A proverbial phrase."
    },
    "proverbialist": {
        "wordtype": "n.",
        "definition": "One who makes much use of proverbs in speech or writing; one who composes, collects, or studies proverbs."
    },
    "providentness": {
        "wordtype": "n.",
        "definition": "The quality or state of being provident; carefulness; prudence; economy."
    },
    "provinciality": {
        "wordtype": "n.",
        "definition": "The quality or state of being provincial; peculiarity of language characteristic of a province."
    },
    "provincialize": {
        "wordtype": "v. t.",
        "definition": "To render provincial."
    },
    "provisionally": {
        "wordtype": "adv.",
        "definition": "By way of provision for the time being; temporarily."
    },
    "prudentiality": {
        "wordtype": "n.",
        "definition": "The quality or state of being prudential."
    },
    "pteridologist": {
        "wordtype": "n.",
        "definition": "One who is versed in pteridology."
    },
    "puer": {
        "wordtype": "n.",
        "definition": "The dung of dogs, used as an alkaline steep in tanning."
    },
    "pull": {
        "wordtype": "v. t.",
        "definition": "To draw, or attempt to draw, toward one; to draw forcibly."
    },
    "pulmocutaneous": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the lungs and the akin; as, the pulmocutaneous arteries of the frog."
    },
    "pulp": {
        "wordtype": "n.",
        "definition": "A moist, slightly cohering mass, consisting of soft, undissolved animal or vegetable matter."
    },
    "pung": {
        "wordtype": "n.",
        "definition": "A kind of plain sleigh drawn by one horse; originally, a rude oblong box on runners."
    },
    "pupa": {
        "wordtype": "n.",
        "definition": "Any insect in that stage of its metamorphosis which usually immediately precedes the adult, or imago, stage."
    },
    "pupe": {
        "wordtype": "n.",
        "definition": "A pupadjective"
    },
    "pusillanimity": {
        "wordtype": "n.",
        "definition": "The quality of being pusillanimous; weakness of spirit; cowardliness."
    },
    "pyet": {
        "wordtype": "n.",
        "definition": "A magpie; a piet."
    },
    "pyrheliometer": {
        "wordtype": "n.",
        "definition": "An instrument for measuring the direct heating effect of the sun's rays."
    },
    "pyro": {
        "wordtype": "n.",
        "definition": "Abbreviation of pyrogallic acid."
    },
    "pyroelectricity": {
        "wordtype": "n.",
        "definition": "Electricity developed by means of heat; the science which treats of electricity thus developed."
    },
    "quadragesimal": {
        "wordtype": "a.",
        "definition": "Belonging to Lent; used in Lent; Lenten."
    },
    "quadricostate": {
        "wordtype": "a.",
        "definition": "Having four ribs."
    },
    "quadrifarious": {
        "wordtype": "a.",
        "definition": "Arranged in four rows or ranks; as, quadrifarious leaves."
    },
    "quadrilateral": {
        "wordtype": "a.",
        "definition": "Having four sides, and consequently four angles; quadrangular."
    },
    "quadrinominal": {
        "wordtype": "a.",
        "definition": "Quadrinomial."
    },
    "quadripennate": {
        "wordtype": "a.",
        "definition": "Having four wings; -- said of insects."
    },
    "quadrisection": {
        "wordtype": "n.",
        "definition": "A subdivision into four parts."
    },
    "qualificative": {
        "wordtype": "n.",
        "definition": "That which qualifies, modifies, or restricts; a qualifying term or statement."
    },
    "quantification": {
        "wordtype": "n.",
        "definition": "Modification by a reference to quantity; the introduction of the element of quantity."
    },
    "quantivalence": {
        "wordtype": "n.",
        "definition": "Valence."
    },
    "questionableness": {
        "wordtype": "n.",
        "definition": "The quality or state of being questionable, doubtful, or suspicious."
    },
    "quet": {
        "wordtype": "n.",
        "definition": "The common guillemot."
    },
    "quid": {
        "wordtype": "n.",
        "definition": "A portion suitable to be chewed; a cud; as, a quid of tobacco."
    },
    "quin": {
        "wordtype": "n.",
        "definition": "A European scallop (Pecten opercularis), used as food."
    },
    "quincuncially": {
        "wordtype": "adv.",
        "definition": "In the manner or order of a quincunx."
    },
    "quinqueangled": {
        "wordtype": "a.",
        "definition": "Having five angles; quinquangular."
    },
    "quinquelobared": {
        "wordtype": "a.",
        "definition": "Cut less than halfway into portions, usually somewhat rounded; five-lobed; as, a quinquelobate leaf or corolladjective"
    },
    "quinquennalia": {
        "wordtype": "n. pl.",
        "definition": "Public games celebrated every five years."
    },
    "quinquepartite": {
        "wordtype": "a.",
        "definition": "Consisting of five parts."
    },
    "quodlibetical": {
        "wordtype": "a.",
        "definition": "Not restricted to a particular subject; discussed for curiosity or entertainment."
    },
    "ra": {
        "wordtype": "n.",
        "definition": "A roe; a deer."
    },
    "raff": {
        "wordtype": "v. t.",
        "definition": "To sweep, snatch, draw, or huddle together; to take by a promiscuous sweep."
    },
    "ramp": {
        "wordtype": "v. i.",
        "definition": "To spring; to leap; to bound; to rear; to prance; to become rampant; hence, to frolic; to romp."
    },
    "rank": {
        "wordtype": "superl.",
        "definition": "Luxuriant in growth; of vigorous growth; exuberant; grown to immoderate height; as, rank grass; rank weeds."
    },
    "rap": {
        "wordtype": "n.",
        "definition": "A lay or skein containing 120 yards of yarn."
    },
    "rate": {
        "wordtype": "v. t. & i.",
        "definition": "To chide with vehemence; to scold; to censure violently."
    },
    "rath": {
        "wordtype": "n.",
        "definition": "A hill or mound."
    },
    "reaffirmation": {
        "wordtype": "n.",
        "definition": "A second affirmation."
    },
    "reaggravation": {
        "wordtype": "n.",
        "definition": "The last monitory, published after three admonitions and before the last excommunication."
    },
    "reap": {
        "wordtype": "v. t.",
        "definition": "To cut with a sickle, scythe, or reaping machine, as grain; to gather, as a harvest, by cutting."
    },
    "reapportionment": {
        "wordtype": "n.",
        "definition": "A second or a new apportionment."
    },
    "rear": {
        "wordtype": "adv.",
        "definition": "Early; soon."
    },
    "recalcitration": {
        "wordtype": "n.",
        "definition": "A kicking back again; opposition; repugnance; refractoriness."
    },
    "reciprocornous": {
        "wordtype": "a.",
        "definition": "Having horns turning backward and then forward, like those of a ram."
    },
    "recognization": {
        "wordtype": "n.",
        "definition": "Recognition."
    },
    "recolonization": {
        "wordtype": "n.",
        "definition": "A second or renewed colonization."
    },
    "recompensement": {
        "wordtype": "n.",
        "definition": "Recompense; requital."
    },
    "reconciliation": {
        "wordtype": "n.",
        "definition": "The act of reconciling, or the state of being reconciled; reconcilenment; restoration to harmony; renewal of friendship."
    },
    "recriminative": {
        "wordtype": "a.",
        "definition": "Recriminatory."
    },
    "recriminatory": {
        "wordtype": "a.",
        "definition": "Having the quality of recrimination; retorting accusation; recriminating."
    },
    "reduplication": {
        "wordtype": "n.",
        "definition": "The act of doubling, or the state of being doubled."
    },
    "reedification": {
        "wordtype": "n.",
        "definition": "The act reedifying; the state of being reedified."
    },
    "reem": {
        "wordtype": "n.",
        "definition": "The Hebrew name of a horned wild animal, probably the Urus."
    },
    "reestablisher": {
        "wordtype": "n.",
        "definition": "One who establishes again."
    },
    "refractometer": {
        "wordtype": "n.",
        "definition": "A contrivance for exhibiting and measuring the refraction of light."
    },
    "refrigeratory": {
        "wordtype": "a.",
        "definition": "Mitigating heat; cooling."
    },
    "refurnishment": {
        "wordtype": "n.",
        "definition": "The act of refurnishing, or state of being refurnished."
    },
    "rehabilitation": {
        "wordtype": "n.",
        "definition": "The act of rehabilitating, or the state of being rehabilitated."
    },
    "reif": {
        "wordtype": "n.",
        "definition": "Robbery; spoil."
    },
    "reimbursement": {
        "wordtype": "n.",
        "definition": "The act reimbursing."
    },
    "reimportation": {
        "wordtype": "n.",
        "definition": "The act of reimporting; also, that which is reimported."
    },
    "reintegration": {
        "wordtype": "n.",
        "definition": "A renewing, or making whole again. See Redintegration."
    },
    "reit": {
        "wordtype": "n.",
        "definition": "Sedge; seaweed."
    },
    "rejuvenescent": {
        "wordtype": "a.",
        "definition": "Becoming, or causing to become, rejuvenated; rejuvenating."
    },
    "remastication": {
        "wordtype": "n.",
        "definition": "The act of masticating or chewing again or repeatedly."
    },
    "remonetization": {
        "wordtype": "n.",
        "definition": "The act of remonetizing."
    },
    "renidification": {
        "wordtype": "n.",
        "definition": "The act of rebuilding a nest."
    },
    "rep": {
        "wordtype": "n.",
        "definition": "A fabric made of silk or wool, or of silk and wool, and having a transversely corded or ribbed surface."
    },
    "repetitionary": {
        "wordtype": "a.",
        "definition": "Of the nature of, or containing, repetition."
    },
    "replenishment": {
        "wordtype": "n.",
        "definition": "The act of replenishing, or the state of being replenished."
    },
    "representationary": {
        "wordtype": "a.",
        "definition": "Implying representation; representative."
    },
    "resolvableness": {
        "wordtype": "n.",
        "definition": "The quality of being resolvable; resolvability."
    },
    "respirational": {
        "wordtype": "a.",
        "definition": "Of or pertaining to respiration; as, respirational difficulties."
    },
    "responsibility": {
        "wordtype": "n.",
        "definition": "The state of being responsible, accountable, or answerable, as for a trust, debt, or obligation."
    },
    "retroactively": {
        "wordtype": "adv.",
        "definition": "In a retroactive manner."
    },
    "retrogenerative": {
        "wordtype": "a.",
        "definition": "Begetting young by retrocopulation."
    },
    "retrogradation": {
        "wordtype": "n.",
        "definition": "The act of retrograding, or moving backward."
    },
    "retrospection": {
        "wordtype": "n.",
        "definition": "The act, or the faculty, of looking back on things past."
    },
    "retrospectively": {
        "wordtype": "adv.",
        "definition": "By way of retrospect."
    },
    "retrovaccination": {
        "wordtype": "n.",
        "definition": "The inoculation of a cow with human vaccine virus."
    },
    "reverentially": {
        "wordtype": "adv.",
        "definition": "In a reverential manner."
    },
    "reversibility": {
        "wordtype": "n.",
        "definition": "The quality of being reversible."
    },
    "rew": {
        "wordtype": "n.",
        "definition": "A row."
    },
    "rhea": {
        "wordtype": "n.",
        "definition": "Any one of three species of large South American ostrichlike birds of the genera Rhea and Pterocnemiadjective Called also the American ostrich."
    },
    "rhinencephalon": {
        "wordtype": "n.",
        "definition": "The division of the brain in front of the prosencephalon, consisting of the two olfactory lobes from which the olfactory nerves arise."
    },
    "rhynchobdellea": {
        "wordtype": "n. pl.",
        "definition": "A suborder of leeches including those that have a protractile proboscis, without jaws. Clepsine is the type."
    },
    "rid": {
        "wordtype": "",
        "definition": "imperfect & past participle of Ride, verb i."
    },
    "ride": {
        "wordtype": "v. i.",
        "definition": "To be carried on the back of an animal, as a horse."
    },
    "rief": {
        "wordtype": "n.",
        "definition": "Robbery."
    },
    "rift": {
        "wordtype": "",
        "definition": "past participle of Rive."
    },
    "rightwiseness": {
        "wordtype": "n.",
        "definition": "Righteousness."
    },
    "rode": {
        "wordtype": "n.",
        "definition": "Redness; complexion."
    },
    "rodomontadist": {
        "wordtype": "n.",
        "definition": "One who boasts."
    },
    "roed": {
        "wordtype": "a.",
        "definition": "Filled with roe."
    },
    "roll": {
        "wordtype": "n.",
        "definition": "To bind or involve by winding, as in a bandage; to inwrap; -- often with up; as, to roll up a parcel."
    },
    "romp": {
        "wordtype": "v. i.",
        "definition": "To play rudely and boisterously; to leap and frisk about in play."
    },
    "roon": {
        "wordtype": "a. & n.",
        "definition": "Vermilion red; red."
    },
    "rope": {
        "wordtype": "n.",
        "definition": "A row or string consisting of a number of things united, as by braiding, twining, etc.; as, a rope of onions."
    },
    "rosy": {
        "wordtype": "superl.",
        "definition": "Resembling a rose in color, form, or qualities; blooming; red; blushing; also, adorned with roses."
    },
    "rot": {
        "wordtype": "v. i.",
        "definition": "Figuratively: To perish slowly; to decay; to die; to become corrupt."
    },
    "rota": {
        "wordtype": "n.",
        "definition": "An ecclesiastical court of Rome, called also Rota Romana, that takes cognizance of suits by appeal. It consists of twelve members."
    },
    "rotundifolious": {
        "wordtype": "a.",
        "definition": "Having round leaves."
    },
    "ruft": {
        "wordtype": "n.",
        "definition": "Eructation; belching."
    },
    "rug": {
        "wordtype": "a.",
        "definition": "A kind of coarse, heavy frieze, formerly used for garments."
    },
    "ruga": {
        "wordtype": "n.",
        "definition": "A wrinkle; a fold; as, the rugae of the stomach."
    },
    "ruse": {
        "wordtype": "n.",
        "definition": "An artifice; trick; stratagem; wile; fraud; deceit."
    },
    "rusk": {
        "wordtype": "n.",
        "definition": "A kind of light, soft bread made with yeast and eggs, often toasted or crisped in an oven; or, a kind of sweetened biscuit."
    },
    "ryal": {
        "wordtype": "a.",
        "definition": "Royal."
    },
    "rye": {
        "wordtype": "n.",
        "definition": "A disease in a hawk."
    },
    "saccharomycetes": {
        "wordtype": "n. pl.",
        "definition": "A family of fungi consisting of the one genus Saccharomyces."
    },
    "sacramentalism": {
        "wordtype": "n.",
        "definition": "The doctrine and use of sacraments; attachment of excessive importance to sacraments."
    },
    "sacs": {
        "wordtype": "n. pl.",
        "definition": "A tribe of Indians, which, together with the Foxes, formerly occupied the region about Green Bay, Wisconsin."
    },
    "sad": {
        "wordtype": "supperl.",
        "definition": "Sated; satisfied; weary; tired."
    },
    "saki": {
        "wordtype": "n.",
        "definition": "The alcoholic drink of Japan. It is made from rice."
    },
    "salutiferously": {
        "wordtype": "adv.",
        "definition": "Salutarily."
    },
    "sam": {
        "wordtype": "a.",
        "definition": "Together."
    },
    "sanctiloquent": {
        "wordtype": "a.",
        "definition": "Discoursing on heavenly or holy things, or in a holy manner."
    },
    "sand": {
        "wordtype": "n.",
        "definition": "A single particle of such stone."
    },
    "sanguification": {
        "wordtype": "n.",
        "definition": "The production of blood; the conversion of the products of digestion into blood; hematosis."
    },
    "sanguinivorous": {
        "wordtype": "a.",
        "definition": "Subsisting on blood."
    },
    "sank": {
        "wordtype": "",
        "definition": "imperfect of Sink."
    },
    "sans": {
        "wordtype": "prep.",
        "definition": "Without; deprived or destitute of. Rarely used as an English word."
    },
    "scad": {
        "wordtype": "n.",
        "definition": "The friar skate."
    },
    "schizognathae": {
        "wordtype": "n. pl.",
        "definition": "The schizognathous birds."
    },
    "scleroskeleton": {
        "wordtype": "n.",
        "definition": "That part of the skeleton which is developed in tendons, ligaments, and aponeuroses."
    },
    "scombriformes": {
        "wordtype": "n. pl.",
        "definition": "A division of fishes including the mackerels, tunnies, and allied fishes."
    },
    "scripturalism": {
        "wordtype": "n.",
        "definition": "The quality or state of being scriptural; literal adherence to the Scriptures."
    },
    "scud": {
        "wordtype": "v. i.",
        "definition": "To move swiftly; especially, to move as if driven forward by something."
    },
    "scup": {
        "wordtype": "n.",
        "definition": "A swing."
    },
    "scutibranchiate": {
        "wordtype": "n.",
        "definition": "One of the Scutibranchiatadjective"
    },
    "seak": {
        "wordtype": "n.",
        "definition": "Soap prepared for use in milling cloth."
    },
    "seet": {
        "wordtype": "imp.",
        "definition": "Sate; sat."
    },
    "selenographical": {
        "wordtype": "a.",
        "definition": "Of or pertaining to selenography."
    },
    "selenographist": {
        "wordtype": "n.",
        "definition": "A selenographer."
    },
    "self": {
        "wordtype": "a.",
        "definition": "Same; particular; very; identical."
    },
    "sely": {
        "wordtype": "a.",
        "definition": "Silly."
    },
    "semibarbarous": {
        "wordtype": "a.",
        "definition": "Half barbarous."
    },
    "semicrystalline": {
        "wordtype": "a.",
        "definition": "Half crystalline; -- said of certain cruptive rocks composed partly of crystalline, partly of amorphous matter."
    },
    "semicylyndrical": {
        "wordtype": "a.",
        "definition": "Half cylindrical."
    },
    "semitransparency": {
        "wordtype": "n.",
        "definition": "Imperfect or partial transparency."
    },
    "semitransparent": {
        "wordtype": "a.",
        "definition": "Half or imperfectly transparent."
    },
    "sens": {
        "wordtype": "adv.",
        "definition": "Since."
    },
    "sent": {
        "wordtype": "",
        "definition": "obs. 3d pers. sing. pres. of Send, for sendeth."
    },
    "sentimentalism": {
        "wordtype": "n.",
        "definition": "The quality of being sentimental; the character or behavior of a sentimentalist; sentimentality."
    },
    "sentimentally": {
        "wordtype": "adv.",
        "definition": "In a sentimental manner."
    },
    "septentrional": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the north; northern."
    },
    "septentrionality": {
        "wordtype": "n.",
        "definition": "Northerliness."
    },
    "septentrionally": {
        "wordtype": "adv.",
        "definition": "Northerly."
    },
    "serf": {
        "wordtype": "v. t.",
        "definition": "A servant or slave employed in husbandry, and in some countries attached to the soil and transferred with it, as formerly in Russiadjective"
    },
    "serr": {
        "wordtype": "v. t.",
        "definition": "To crowd, press, or drive together."
    },
    "sesquitertial": {
        "wordtype": "a.",
        "definition": "Sesquitertian."
    },
    "shab": {
        "wordtype": "n.",
        "definition": "The itch in animals; also, a scab."
    },
    "sharpshooting": {
        "wordtype": "n.",
        "definition": "A shooting with great precision and effect; hence, a keen contest of wit or argument."
    },
    "shet": {
        "wordtype": "v. t. & i.",
        "definition": "To shut."
    },
    "ship": {
        "wordtype": "n.",
        "definition": "Pay; reward."
    },
    "shoo": {
        "wordtype": "interj.",
        "definition": "Begone; away; -- an expression used in frightening away animals, especially fowls."
    },
    "shot": {
        "wordtype": "",
        "definition": "imperfect & past participle of Shoot."
    },
    "sice": {
        "wordtype": "n.",
        "definition": "The number six at dice."
    },
    "sick": {
        "wordtype": "superl.",
        "definition": "Affected with, or attended by, nausea; inclined to vomit; as, sick at the stomach; a sick headache."
    },
    "sift": {
        "wordtype": "v. t.",
        "definition": "To separate with a sieve, as the fine part of a substance from the coarse; as, to sift meal or flour; to sift powder; to sift sand or lime."
    },
    "sigh": {
        "wordtype": "v. i.",
        "definition": "Hence, to lament; to grieve."
    },
    "significative": {
        "wordtype": "a.",
        "definition": "Betokening or representing by an external sign."
    },
    "silk": {
        "wordtype": "n.",
        "definition": "Hence, thread spun, or cloth woven, from the above-named material."
    },
    "silt": {
        "wordtype": "n.",
        "definition": "Mud or fine earth deposited from running or standing water."
    },
    "siphonobranchiate": {
        "wordtype": "a.",
        "definition": "Having a siphon, or siphons, to convey water to the gills; belonging or pertaining to the Siphonobranchiatadjective"
    },
    "siphonoglyphe": {
        "wordtype": "n.",
        "definition": "A gonidium."
    },
    "sis": {
        "wordtype": "n.",
        "definition": "A colloquial abbreviation of Sister."
    },
    "sit": {
        "wordtype": "",
        "definition": "obs. 3d pers. sing. pres. of Sit, for sitteth."
    },
    "size": {
        "wordtype": "n.",
        "definition": "Six."
    },
    "skip": {
        "wordtype": "n.",
        "definition": "A basket on wheels, used in cotton factories."
    },
    "slam": {
        "wordtype": "v. t.",
        "definition": "To shut with force and a loud noise; to bang; as, he slammed the door."
    },
    "sley": {
        "wordtype": "v. t.",
        "definition": "A weaver's reed."
    },
    "slop": {
        "wordtype": "n.",
        "definition": "Water or other liquid carelessly spilled or thrown aboyt, as upon a table or a floor; a puddle; a soiled spot."
    },
    "snet": {
        "wordtype": "n.",
        "definition": "The fat of a deer."
    },
    "snig": {
        "wordtype": "v. t.",
        "definition": "To chop off; to cut."
    },
    "snip": {
        "wordtype": "v. t.",
        "definition": "To cut off the nip or neb of, or to cut off at once with shears or scissors; to clip off suddenly; to nip; hence, to break off; to snatch away."
    },
    "snod": {
        "wordtype": "n.",
        "definition": "A fillet; a headband; a snood."
    },
    "snot": {
        "wordtype": "n.",
        "definition": "Mucus secreted in, or discharged from, the nose."
    },
    "sny": {
        "wordtype": "n.",
        "definition": "An upward bend in a piece of timber; the sheer of a vessel."
    },
    "soda": {
        "wordtype": "n.",
        "definition": "Sodium oxide or hydroxide."
    },
    "soja": {
        "wordtype": "n.",
        "definition": "An Asiatic leguminous herb (Glycine Soja) the seeds of which are used in preparing the sauce called soy."
    },
    "sold": {
        "wordtype": "",
        "definition": "imperfect & past participle of Sell."
    },
    "sole": {
        "wordtype": "n.",
        "definition": "The bottom of the foot; hence, also, rarely, the foot itself."
    },
    "solemnization": {
        "wordtype": "n.",
        "definition": "The act of solemnizing; celebration; as, the solemnization of a marriage."
    },
    "solo": {
        "wordtype": "a.",
        "definition": "A tune, air, strain, or a whole piece, played by a single person on an instrument, or sung by a single voice."
    },
    "somatopleuric": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the somatopleure."
    },
    "sophistication": {
        "wordtype": "n.",
        "definition": "The act of sophisticating; adulteration; as, the sophistication of drugs."
    },
    "sori": {
        "wordtype": "n.",
        "definition": "pl. of Sorus."
    },
    "sorn": {
        "wordtype": "v. i.",
        "definition": "To obtrude one's self on another for bed and board."
    },
    "sory": {
        "wordtype": "n.",
        "definition": "Green vitriol, or some earth imregnated with it."
    },
    "sour": {
        "wordtype": "superl.",
        "definition": "Having an acid or sharp, biting taste, like vinegar, and the juices of most unripe fruits; acid; tart."
    },
    "southwestwardly": {
        "wordtype": "adv.",
        "definition": "Toward the southwest."
    },
    "spae": {
        "wordtype": "v. i.",
        "definition": "To foretell; to divine."
    },
    "spar": {
        "wordtype": "v. t.",
        "definition": "A general term any round piece of timber used as a mast, yard, boom, or gaff."
    },
    "spermatogenous": {
        "wordtype": "a.",
        "definition": "Sperm-producing."
    },
    "spermatozooid": {
        "wordtype": "n.",
        "definition": "A spermatozoid."
    },
    "sphaerenchyma": {
        "wordtype": "n.",
        "definition": "Vegetable tissue composed of thin-walled rounded cells, -- a modification of parenchymadjective"
    },
    "sphenoethmoidal": {
        "wordtype": "a.",
        "definition": "Sphenethmoid."
    },
    "spherosiderite": {
        "wordtype": "n.",
        "definition": "Siderite occuring in spheroidal masses."
    },
    "sphygmographic": {
        "wordtype": "a.",
        "definition": "Relating to, or produced by, a sphygmograph; as, a sphygmographic tracing."
    },
    "spiculigenous": {
        "wordtype": "a.",
        "definition": "Producing or containing spicules."
    },
    "spiritualization": {
        "wordtype": "n.",
        "definition": "The act of spiritualizing, or the state of being spiritualized."
    },
    "splanchnapophysis": {
        "wordtype": "n.",
        "definition": "Any element of the skeleton in relation with the alimentary canal, as the jaws and hyoidean apparatus."
    },
    "splanchnology": {
        "wordtype": "n.",
        "definition": "That part of anatomy which treats of the viscera; also, a treatise on the visceradjective"
    },
    "sporangiophore": {
        "wordtype": "n.",
        "definition": "The axis or receptacle in certain ferns (as Trichomanes), which bears the sporangiadjective"
    },
    "spur": {
        "wordtype": "n.",
        "definition": "A sparrow."
    },
    "sput": {
        "wordtype": "n.",
        "definition": "An annular reenforce, to strengthen a place where a hole is made."
    },
    "spy": {
        "wordtype": "v. t.",
        "definition": "To gain sight of; to discover at a distance, or in a state of concealment; to espy; to see."
    },
    "stalactitiform": {
        "wordtype": "a.",
        "definition": "Having the form of a stalactite; stalactiform."
    },
    "staminiferous": {
        "wordtype": "a.",
        "definition": "Bearing or having stamens."
    },
    "stannofluoride": {
        "wordtype": "n.",
        "definition": "Any one of a series of double fluorides of tin (stannum) and some other element."
    },
    "steganography": {
        "wordtype": "n.",
        "definition": "The art of writing in cipher, or in characters which are not intelligible except to persons who have the key; cryptography."
    },
    "stethoscopical": {
        "wordtype": "a.",
        "definition": "Of or pertaining to a stethoscope; obtained or made by means of a stethoscope."
    },
    "stew": {
        "wordtype": "n.",
        "definition": "A small pond or pool where fish are kept for the table; a vivarium."
    },
    "stichometrical": {
        "wordtype": "a.",
        "definition": "Of or pertaining to stichometry; characterized by stichs, or lines."
    },
    "stir": {
        "wordtype": "v. t.",
        "definition": "To change the place of in any manner; to move."
    },
    "stoichiometrical": {
        "wordtype": "a.",
        "definition": "Of or pertaining to stoichiometry; employed in, or obtained by, stoichiometry."
    },
    "stradometrical": {
        "wordtype": "a.",
        "definition": "Of, or relating to, the measuring of streets or roads."
    },
    "stratification": {
        "wordtype": "n.",
        "definition": "The act or process of laying in strata, or the state of being laid in the form of strata, or layers."
    },
    "stub": {
        "wordtype": "n.",
        "definition": "A log; a block; a blockhead."
    },
    "stud": {
        "wordtype": "n.",
        "definition": "A collection of breeding horses and mares, or the place where they are kept; also, a number of horses kept for a racing, riding, etc."
    },
    "stultiloquence": {
        "wordtype": "n.",
        "definition": "Silly talk; babbling."
    },
    "stut": {
        "wordtype": "v. i.",
        "definition": "To stutter."
    },
    "subarachnoidal": {
        "wordtype": "a.",
        "definition": "Situated under the arachnoid membrane."
    },
    "subinfeudation": {
        "wordtype": "n.",
        "definition": "The granting of lands by inferior lords to their dependents, to be held by themselves by feudal tenure."
    },
    "sublimification": {
        "wordtype": "n.",
        "definition": "The act of making sublime, or state of being made sublime."
    },
    "subnotochordal": {
        "wordtype": "a.",
        "definition": "Situated on the ventral side of the notochord; as, the subnotochordal rod."
    },
    "substantiality": {
        "wordtype": "n.",
        "definition": "The quality or state of being substantial; corporiety; materiality."
    },
    "such": {
        "wordtype": "a.",
        "definition": "Having the particular quality or character specified."
    },
    "suds": {
        "wordtype": "n. pl.",
        "definition": "Water impregnated with soap, esp. when worked up into bubbles and froth."
    },
    "sue": {
        "wordtype": "v. t.",
        "definition": "To follow up; to chase; to seek after; to endeavor to win; to woo."
    },
    "suit": {
        "wordtype": "n.",
        "definition": "The act of following or pursuing, as game; pursuit."
    },
    "sulk": {
        "wordtype": "n.",
        "definition": "A furrow."
    },
    "sulphophosphorous": {
        "wordtype": "a.",
        "definition": "Of, pertaining to, or designating, a hypothetical acid of phosphorus, analogous to phosphorous acid, and known in its salts."
    },
    "sung": {
        "wordtype": "",
        "definition": "imperfect & past participle of Sing."
    },
    "sup": {
        "wordtype": "v. t.",
        "definition": "To take into the mouth with the lips, as a liquid; to take or drink by a little at a time; to sip."
    },
    "superadvenient": {
        "wordtype": "a.",
        "definition": "Coming upon; coming in addition to, or in assistance of, something."
    },
    "superannuation": {
        "wordtype": "n.",
        "definition": "The state of being superannuated, or too old for office or business; the state of being disqualified by old age; decrepitude."
    },
    "superfecundation": {
        "wordtype": "n.",
        "definition": "Fertilization of two ova, at the same menstruation, by two different acts of coition."
    },
    "superinpregnation": {
        "wordtype": "n.",
        "definition": "The act of impregnating, or the state of being impregnated, in addition to a prior impregnation; superfetation."
    },
    "superintendency": {
        "wordtype": "n.",
        "definition": "The act of superintending; superintendence."
    },
    "superscription": {
        "wordtype": "n.",
        "definition": "The act of superscribing."
    },
    "supersphenoidal": {
        "wordtype": "a.",
        "definition": "Situated above, or on the dorsal side of, the body of the sphenoid bone."
    },
    "supervacaneous": {
        "wordtype": "a.",
        "definition": "Serving no purpose; superfluous; needless."
    },
    "supplicatingly": {
        "wordtype": "adv.",
        "definition": "In a supplicating manner."
    },
    "supranaturalism": {
        "wordtype": "n.",
        "definition": "The state of being supernatural; belief in supernatural agency or revelation; supernaturalism."
    },
    "supranaturalistic": {
        "wordtype": "a.",
        "definition": "Of or pertaining to supernaturalism; supernaturalistic."
    },
    "swan": {
        "wordtype": "n.",
        "definition": "Fig.: An appellation for a sweet singer, or a poet noted for grace and melody; as Shakespeare is called the swan of Avon."
    },
    "swig": {
        "wordtype": "v. t.",
        "definition": "To drink in long draughts; to gulp; as, to swig cider."
    },
    "swim": {
        "wordtype": "v. i.",
        "definition": "To move progressively in water by means of strokes with the hands and feet, or the fins or the tail."
    },
    "sye": {
        "wordtype": "imp.",
        "definition": "Saw."
    },
    "syle": {
        "wordtype": "n.",
        "definition": "A young herring (Clupea harengus)."
    },
    "sympathetically": {
        "wordtype": "adv.",
        "definition": "In a sympathetic manner."
    },
    "synchronization": {
        "wordtype": "n.",
        "definition": "The act of synchronizing; concurrence of events in respect to time."
    },
    "syndesmography": {
        "wordtype": "n.",
        "definition": "A description of the ligaments; syndesmology."
    },
    "syphilitically": {
        "wordtype": "adv.",
        "definition": "In a syphilitic manner; with venereal disease."
    },
    "ta": {
        "wordtype": "v. t.",
        "definition": "To take."
    },
    "tack": {
        "wordtype": "n.",
        "definition": "A stain; a tache."
    },
    "tail": {
        "wordtype": "n.",
        "definition": "Limitation; abridgment."
    },
    "tame": {
        "wordtype": "v. t.",
        "definition": "To broach or enter upon; to taste, as a liquor; to divide; to distribute; to deal out."
    },
    "tank": {
        "wordtype": "n.",
        "definition": "A small Indian dry measure, averaging 240 grains in weight; also, a Bombay weight of 72 grains, for pearls."
    },
    "tapa": {
        "wordtype": "n.",
        "definition": "A kind of cloth prepared by the Polynesians from the inner bark of the paper mulberry; -- sometimes called also kapadjective"
    },
    "tape": {
        "wordtype": "n.",
        "definition": "A narrow fillet or band of cotton or linen; a narrow woven fabric used for strings and the like; as, curtains tied with tape."
    },
    "tas": {
        "wordtype": "n.",
        "definition": "A heap."
    },
    "tatt": {
        "wordtype": "v. t. & i.",
        "definition": "To make (anything) by tatting; to work at tatting; as, tatted edging."
    },
    "team": {
        "wordtype": "n.",
        "definition": "A group of young animals, especially of young ducks; a brood; a litter."
    },
    "tear": {
        "wordtype": "n.",
        "definition": "Something in the form of a transparent drop of fluid matter; also, a solid, transparent, tear-shaped drop, as of some balsams or resins."
    },
    "teil": {
        "wordtype": "n.",
        "definition": "The lime tree, or linden; -- called also teil tree."
    },
    "telethermometer": {
        "wordtype": "n.",
        "definition": "An apparatus for determining the temperature of a distant point, as by a thermoelectric circuit or otherwise."
    },
    "tell": {
        "wordtype": "v. t.",
        "definition": "To mention one by one, or piece by piece; to recount; to enumerate; to reckon; to number; to count; as, to tell money."
    },
    "ten": {
        "wordtype": "a.",
        "definition": "One more than nine; twice five."
    },
    "tend": {
        "wordtype": "v. t.",
        "definition": "To make a tender of; to offer or tender."
    },
    "term": {
        "wordtype": "n.",
        "definition": "That which limits the extent of anything; limit; extremity; bound; boundary."
    },
    "tern": {
        "wordtype": "n.",
        "definition": "Any one of numerous species of long-winged aquatic birds, allied to the gulls, and belonging to Sterna and various allied generadjective"
    },
    "test": {
        "wordtype": "n.",
        "definition": "A cupel or cupelling hearth in which precious metals are melted for trial and refinement."
    },
    "tetrahexahedral": {
        "wordtype": "a.",
        "definition": "Pertaining to a tetrahexahedron."
    },
    "tetrasyllabical": {
        "wordtype": "a.",
        "definition": "Consisting of, or having, four syllables; quadrisyllabic."
    },
    "thak": {
        "wordtype": "v. t.",
        "definition": "To thwack."
    },
    "thalamiflorous": {
        "wordtype": "a.",
        "definition": "Bearing the stamens directly on the receptacle; -- said of a subclass of polypetalous dicotyledonous plants in the system of De Candolle."
    },
    "that": {
        "wordtype": "pron., a., conj., & ",
        "definition": "As an adjective, that has the same demonstrative force as the pronoun, but is followed by a noun."
    },
    "thaw": {
        "wordtype": "v. i.",
        "definition": "To melt, dissolve, or become fluid; to soften; -- said of that which is frozen; as, the ice thaws."
    },
    "theophilanthropic": {
        "wordtype": "a.",
        "definition": "Pertaining to theophilanthropy or the theophilanthropists."
    },
    "theophilanthropism": {
        "wordtype": "n.",
        "definition": "The doctrine of the theophilanthropists; theophilanthropy."
    },
    "theophilanthropist": {
        "wordtype": "n.",
        "definition": "A member of a deistical society established at Paris during the French revolution."
    },
    "thermoelectric": {
        "wordtype": "a.",
        "definition": "Pertaining to thermoelectricity; as, thermoelectric currents."
    },
    "thin": {
        "wordtype": "superl.",
        "definition": "Having little thickness or extent from one surface to its opposite; as, a thin plate of metal; thin paper; a thin board; a thin covering."
    },
    "thysanopterous": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the Thysanopteradjective"
    },
    "tid": {
        "wordtype": "a.",
        "definition": "Tender; soft; nice; -- now only used in tidbit."
    },
    "tiff": {
        "wordtype": "n.",
        "definition": "Liquor; especially, a small draught of liquor."
    },
    "tigh": {
        "wordtype": "n.",
        "definition": "A close, or inclosure; a croft."
    },
    "tith": {
        "wordtype": "a.",
        "definition": "Tight; nimble."
    },
    "toat": {
        "wordtype": "n.",
        "definition": "The handle of a joiner's plane."
    },
    "toco": {
        "wordtype": "n.",
        "definition": "A toucan (Ramphastos toco) having a very large beak. See Illust. under Toucan."
    },
    "tola": {
        "wordtype": "n.",
        "definition": "A weight of British Indiadjective The standard tola is equal to 180 grains."
    },
    "tolt": {
        "wordtype": "n.",
        "definition": "A writ by which a cause pending in a court baron was removed into a country court."
    },
    "tony": {
        "wordtype": "n.",
        "definition": "A simpleton."
    },
    "too": {
        "wordtype": "adv.",
        "definition": "Over; more than enough; -- noting excess; as, a thing is too long, too short, or too wide; too high; too many; too much."
    },
    "toon": {
        "wordtype": "",
        "definition": "pl. of Toe."
    },
    "tort": {
        "wordtype": "n.",
        "definition": "Mischief; injury; calamity."
    },
    "tow": {
        "wordtype": "n.",
        "definition": "The coarse and broken part of flax or hemp, separated from the finer part by the hatchel or swingle."
    },
    "town": {
        "wordtype": "adv. & prep.",
        "definition": "Any number or collection of houses to which belongs a regular market, and which is not a city or the see of a bishop."
    },
    "tozy": {
        "wordtype": "a.",
        "definition": "Soft, like wool that has been teased."
    },
    "tracheobronchial": {
        "wordtype": "a.",
        "definition": "Pertaining both to the tracheal and bronchial tubes, or to their junction; -- said of the syrinx of certain birds."
    },
    "traditionarily": {
        "wordtype": "adv.",
        "definition": "By tradition."
    },
    "transferography": {
        "wordtype": "n.",
        "definition": "The act or process of copying inscriptions, or the like, by making transfers."
    },
    "transpatronize": {
        "wordtype": "v. t.",
        "definition": "To transfer the patronage of."
    },
    "transplendency": {
        "wordtype": "n.",
        "definition": "Quality or state of being transplendent."
    },
    "transpositional": {
        "wordtype": "a.",
        "definition": "Of or pertaining to transposition; involving transposition."
    },
    "transregionate": {
        "wordtype": "a.",
        "definition": "Foreign."
    },
    "transubstantiation": {
        "wordtype": "n.",
        "definition": "A change into another substance."
    },
    "transverberate": {
        "wordtype": "v. t.",
        "definition": "To beat or strike through."
    },
    "trim": {
        "wordtype": "v. t.",
        "definition": "To make trim; to put in due order for any purpose; to make right, neat, or pleasing; to adjust."
    },
    "trinitarianism": {
        "wordtype": "n.",
        "definition": "The doctrine of the Trinity; the doctrine that there are three distinct persons in the Godhead."
    },
    "tub": {
        "wordtype": "n.",
        "definition": "The amount which a tub contains, as a measure of quantity; as, a tub of butter; a tub of camphor, which is about 1 cwt., etc."
    },
    "turnicimorphae": {
        "wordtype": "n. pl.",
        "definition": "A division of birds including Turnix and allied genera, resembling quails in appearance but differing from them anatomically."
    },
    "unaccomplishment": {
        "wordtype": "n.",
        "definition": "The state of being unaccomplished."
    },
    "uncoformability": {
        "wordtype": "n.",
        "definition": "The quality or state of being unconformable; unconformableness."
    },
    "unconsequential": {
        "wordtype": "a.",
        "definition": "Inconsequential."
    },
    "uncontrollable": {
        "wordtype": "a.",
        "definition": "Incapable of being controlled; ungovernable; irresistible; as, an uncontrollable temper; uncontrollable events."
    },
    "understrapping": {
        "wordtype": "a.",
        "definition": "Becoming an understrapper; subservient."
    },
    "unembarrassment": {
        "wordtype": "n.",
        "definition": "Freedom from embarrassment."
    },
    "unexceptionable": {
        "wordtype": "a.",
        "definition": "Not liable to any exception or objection; unobjectionable; faultless; good; excellent; as, a man of most unexceptionable character."
    },
    "unextinguishable": {
        "wordtype": "a.",
        "definition": "Inextinguishable."
    },
    "up": {
        "wordtype": "adv.",
        "definition": "Aloft; on high; in a direction contrary to that of gravity; toward or in a higher place or position; above; -- the opposite of down."
    },
    "valetudinarian": {
        "wordtype": "a.",
        "definition": "Of infirm health; seeking to recover health; sickly; weakly; infirm."
    },
    "vasoconstrictor": {
        "wordtype": "n.",
        "definition": "A substance which causes constriction of the blood vessels. Such substances are used in medicine to raise blood pressure."
    },
    "vie": {
        "wordtype": "v. i.",
        "definition": "To strive for superiority; to contend; to use emulous effort, as in a race, contest, or competition."
    },
    "vim": {
        "wordtype": "n.",
        "definition": "Power; force; energy; spirit; activity; vigor."
    },
    "vis": {
        "wordtype": "n.",
        "definition": "Force; power."
    },
    "viviparousness": {
        "wordtype": "n.",
        "definition": "The quality of being viviparous; viviparity."
    },
    "viz": {
        "wordtype": "adv.",
        "definition": "To wit; that is; namely."
    },
    "volatilization": {
        "wordtype": "n.",
        "definition": "The act or process of volatilizing, or rendering volatile; the state of being volatilized."
    },
    "vox": {
        "wordtype": "n.",
        "definition": "A voice."
    },
    "weatherboarding": {
        "wordtype": "n.",
        "definition": "The covering or siding of a building, formed of boards lapping over one another, to exclude rain, snow, etc."
    },
    "web": {
        "wordtype": "n.",
        "definition": "A weaver."
    },
    "wem": {
        "wordtype": "n.",
        "definition": "The abdomen; the uterus; the womb."
    },
    "wep": {
        "wordtype": "",
        "definition": "imperfect of Weep."
    },
    "whippersnapper": {
        "wordtype": "n.",
        "definition": "A diminutive, insignificant, or presumptuous person."
    },
    "who": {
        "wordtype": "pron.",
        "definition": "One; any; one."
    },
    "yes": {
        "wordtype": "adv.",
        "definition": "Ay; yea; -- a word which expresses affirmation or consent; -- opposed to no."
    },
    "yu": {
        "wordtype": "n.",
        "definition": "Jade."
    },
    "zif": {
        "wordtype": "n.",
        "definition": "The second month of the Jewish ecclesiastical year, corresponding to our May."
    },
    "zingiberaceous": {
        "wordtype": "a.",
        "definition": "Of or pertaining to ginger, or to a tribe (Zingibereae) of endogenous plants of the order Scitamineae. See Scitamineous."
    },
    "zygobranchiate": {
        "wordtype": "a.",
        "definition": "Of or pertaining to the Zygobranchiadjective"
    }
}

    var placeWord = function(grid, word, row, col, direction) {
        if (direction == 'horizontal') {
            for (var i = 0; i < word.length; i++) {
                grid[row][col + i] = word[i];
            }
        } else {
            for (var i = 0; i < word.length; i++) {
                grid[row + i][col] = word[i];
            }
        }
    };

    var findIntersection = function(grid, word, direction) {
        var randomIndex = Math.floor(Math.random() * word.length);
        var attempts = 0;
        while (attempts < word.length) {
            var randomLetter = word[randomIndex];
            for (var i = 0; i < grid.length; i++) {
                for (var j = 0; j < grid[i].length; j++) {
                    if (grid[i][j] === randomLetter) {
                        var placement = null;
                        if (direction === 'horizontal') {
                            placement = tryHorizontalPlacement(grid, word, i, j-randomIndex);
                        } else {
                            placement = tryVerticalPlacement(grid, word, i-randomIndex, j);
                        }
                        if (placement !== null) {
                            return placement;
                        }
                    }
                }
            }
            randomIndex = (randomIndex + 1) % word.length;
            attempts++;
        }
        return null;
    };

    var tryHorizontalPlacement = function(grid, word, row, col) {
        var wordLength = word.length;
        var gridHeight = grid.length;
        var gridWidth = grid[0].length;

        // Check if the word can fit in the grid horizontally
        if (col + wordLength > gridWidth || col < 0) {
            return null;
        }

        // Crawl left and right to check if cells are empty or have the same value
        for (var i = 0; i < wordLength; i++) {
            if (grid[row][col + i] !== null && grid[row][col + i] !== word[i]) {
                return null;
            }

            // Check above and below if cell is empty
            if (grid[row][col + i] === null) {
                if (row - 1 >= 0 && grid[row - 1][col + i] !== null) {
                    return null;
                }
                if (row + 1 < gridHeight && grid[row + 1][col + i] !== null) {
                    return null;
                }
            }
        }

        // Check edge cases
        if (col - 1 >= 0 && grid[row][col - 1] !== null) {
            return null;
        }
        if (col + wordLength < gridWidth && grid[row][col + wordLength] !== null) {
            return null;
        }

        // If all checks pass, return the placement
        return {
            row: row,
            col: col,
            direction: 'horizontal'
        };
    };

    var tryVerticalPlacement = function(grid, word, row, col) {
        var wordLength = word.length;
        var gridHeight = grid.length;
        var gridWidth = grid[0].length;

        // Check if the word can fit in the grid vertically
        if (row + wordLength > gridHeight || row < 0) {
            return null;
        }

        // Crawl up and down to check if cells are empty or have the same value
        for (var i = 0; i < wordLength; i++) {
            if (grid[row + i][col] !== null && grid[row + i][col] !== word[i]) {
                return null;
            }

            // Check left and right if cell is empty
            if (grid[row + i][col] === null) {
                if (col - 1 >= 0 && grid[row + i][col - 1] !== null) {
                    return null;
                }
                if (col + 1 < gridWidth && grid[row + i][col + 1] !== null) {
                    return null;
                }
            }
        }

        // Check edge cases
        if (row - 1 >= 0 && grid[row - 1][col] !== null) {
            return null;
        }
        if (row + wordLength < gridHeight && grid[row + wordLength][col] !== null) {
            return null;
        }

        // If all checks pass, return the placement
        return {
            row: row,
            col: col,
            direction: 'vertical'
        };
    };
    /**
     * 
     * @param {*} grid 
     * @param {*} wordList 
     * @param {*} maxWords 
     * @param {*} wordCount 
     * @param {*} currentWordRunningLength  - my current word length
     * @param {*} maxWordLength 
     * @param {*} avgWordLength 
     * @returns 
     */
    var prepGridWord = function(grid, wordList, maxWords, wordCount, currentWordRunningLength, maxWordLength, avgWordLength) {
        if (wordCount >= maxWords) {
            return { grid: grid, words: wordList };
        }

        var direction = 'horizontal' 
        if (wordCount % 2 == 1){direction = 'vertical'}
        var newGrid = grid.map(row => row.slice()); // Create a copy of the grid
        var maximumWordSelectionAttempt = 100;
        for (var i = 0; i <maximumWordSelectionAttempt ; i++) {
            var augmentedMaxWordLength = maxWordLength
            /**
             * Augment the max word length based on the number of iterations, as we continue to attempt (and fail to place)
             * We will decrease the maximum word length slowly until it gets down to 3 length to increase the chance of getting a word
             */
            if (i/maximumWordSelectionAttempt > 0.5){
                var remainingIterations = i
                var decrementPercentage = remainingIterations / maximumWordSelectionAttempt
                augmentedMaxWordLength *= (1 - decrementPercentage)
                augmentedMaxWordLength = Math.max(3,augmentedMaxWordLength) //Cap it at 3 if we are augmenting, 3 has the highest chance of getting a word to place.
            }
            var word = chooseWord(dictofWords, wordCount/maxWords, currentWordRunningLength/maxWords, augmentedMaxWordLength, avgWordLength, wordList);

            var intersection = findIntersection(newGrid, word, direction);
            if (intersection) {
                placeWord(newGrid, word, intersection.row, intersection.col, direction);
                var wordInfo = {
                    word: word,
                    row: intersection.row,
                    col: intersection.col,
                    direction: direction
                };
                return prepGridWord(newGrid, wordList.concat([wordInfo]), maxWords, wordCount +1, currentWordRunningLength + word.length, maxWordLength, avgWordLength);
            // } else {
            //     return prepGridWord(grid, wordList, maxWords, wordCount, currentWordRunningLength, maxWordLength, avgWordLength); // Try again with the original grid
            }
        }
        //failsafe
        return { grid: grid, words: wordList };
    };

/**
 * @description
 * Choose a word from the given dictionary of words, attempting to vary the word length
 * over the course of the game.
 * @param {Object} dictofWords - A dictionary of words, where each key is a word length
 * and the value is an array of words of that length.
 * @param {Number} curWordPercentOfMaxWords - What word are we at selecting, are we selecting word 2 out of 5?
 * @param {Number} currentWordAverage - The average word length of all the words placed so far.
 * @param {Number} maxWordLength - The maximum word length.
 * @param {Number} avgWordLength - The average word length in the game.
 * @return {String} The chosen word.
 */
    var chooseWord = function(dictofWords, curWordPercentOfMaxWords, currentWordAverage, maxWordLength, avgWordLength, wordList) {
        var targetWordLength;

        if (curWordPercentOfMaxWords < 0.5) {
            targetWordLength = Math.floor(Math.random() * (maxWordLength - avgWordLength + 1)) + avgWordLength;
        } else {
            var diff = currentWordAverage - avgWordLength;
            targetWordLength = Math.floor(Math.min(Math.max(avgWordLength - diff, avgWordLength), maxWordLength));
        }

        
        // Select a word from the target word length
        var words = dictofWords[targetWordLength];
        var x = Math.floor(Math.random() * words.length)
        var chosenWord = words[x];

        if (Array.isArray(wordList)) {
            if (wordList.some(wordInfo => wordInfo.word === chosenWord)) {
                // If the word is already in the list, choose a new word
                return chooseWord(dictofWords, curWordPercentOfMaxWords, currentWordAverage, maxWordLength, avgWordLength, wordList);
            }
        }

        return chosenWord;
    };
        
    var prepGrid = function(grid, maxWords, avgWordLength, anchorWordLength, maxWordLength) {
        var anchorWord = chooseWord(dictofWords, 1, 0, anchorWordLength, anchorWordLength);

        // Place the central horizontal word
        var middleRow = Math.floor(grid.length / 2);
        var middleCol = Math.floor((grid[0].length - anchorWord.length) / 2);
        placeWord(grid, anchorWord, middleRow, middleCol, 'horizontal');

        var wordInfo = {
            word: anchorWord,
            row: middleRow,
            col: middleCol,
            direction: 'horizontal'
        };
        var result = prepGridWord(grid, [wordInfo], maxWords, 1, anchorWordLength, maxWordLength, avgWordLength);
        //result looks like  { grid: grid, words: wordList }
        return result;
    };


    var getDifficulty = function(level) {
        var difficulty = [
        { maxWords: 2, avgWordLength: 3, anchorWordLength: 3, maxWordLength: 3 }, // Easy
        { maxWords: 3, avgWordLength: 3, anchorWordLength: 3, maxWordLength: 3 }, // Easy
        { maxWords: 4, avgWordLength: 4, anchorWordLength: 4, maxWordLength: 3 }, // Easy
        { maxWords: 5, avgWordLength: 4, anchorWordLength: 5, maxWordLength: 5 }, // Medium
        { maxWords: 6, avgWordLength: 5, anchorWordLength: 6, maxWordLength: 5 }, // Hard
        { maxWords: 7, avgWordLength: 5, anchorWordLength: 7, maxWordLength: 6 }, // Expert
        { maxWords: 8, avgWordLength: 5, anchorWordLength: 8, maxWordLength: 7 }, // Master
        { maxWords: 12, avgWordLength: 5, anchorWordLength: 8, maxWordLength: 7 }, // Master
        { maxWords: 14, avgWordLength: 5, anchorWordLength: 8, maxWordLength: 7 }, // Master
        { maxWords: 30, avgWordLength: 5, anchorWordLength: 8, maxWordLength: 7 } // Testing
        ];
        if (level > difficulty.length - 1) {
            level = difficulty.length - 1;
        }
        return difficulty[level];
    };

    var giveUpGrid = function() {
        console.log('hi')
        if (gameState == 0) return
        for (var i = 0; i < gameContent.words.length; i++){
            fillWordInGrid(gameContent.words[i].word, gameContent);
            foundWords += gameContent.words[i].word
        }
        gameState=0
    }

    var fillWordInGrid = function(word, gameContent, hintOnly = false, initialPlacement = false ) {
        var gameTable = $('#game-table');
        var wordInfo;
        var wordIndex;
        for (var i = 0; i < gameContent.words.length; i++) {
            if (word === gameContent.words[i].word) {
                wordInfo = gameContent.words[i];
                wordIndex=i+1
                break
            }
        }
        var row = wordInfo.row;
        var col = wordInfo.col;
        var direction = wordInfo.direction;

        if (direction === 'horizontal') {
            for (var i = 0; i < word.length; i++) {
                var cell = gameTable.find(`tr:eq(${row}) td:eq(${col + i})`);
                if (i==0 && initialPlacement){
                    var existingIndex = cell.find('.word-index');
                    if (existingIndex.text().length > 0) {
                        existingIndex.html(`${existingIndex.text()},${wordIndex}`);
                    }else{
                        existingIndex.html(`${wordIndex}`);
                    }
                }
                if (! hintOnly){
                    cell.find('.letter').text(word[i]);
                }
            }
        } else if (direction === 'vertical') {
            for (var i = 0; i < word.length; i++) {
                var cell = gameTable.find(`tr:eq(${row + i}) td:eq(${col})`);
                if (i==0 && initialPlacement){
                    var existingIndex = cell.find('.word-index');
                    if (existingIndex.text().length > 0) {
                        existingIndex.html(`${existingIndex.text()},${wordIndex}`);
                    }else{
                        existingIndex.html(`${wordIndex}`);
                    }
                }
                if (! hintOnly){
                    cell.find('.letter').text(word[i]);
                }
            }
        }
    }

    var crosswordHints = function(gameContent) {
        var verticalHints = $('#crossword-hint-vertical');
        var horizontalHints = $('#crossword-hint-horizontal');
        verticalHints.empty();
        horizontalHints.empty();
        verticalHints.append(`<b>Vertical Hints</b>`);
        horizontalHints.append(`<b>Horizontal Hints</b>`);
        for (var i = 0; i < gameContent.words.length; i++) {
            var word = gameContent.words[i];
            var wordIndex = i + 1;
            var wordText = definitionOfWords[word.word]['definition'];

            if (word.direction === 'vertical') {
                verticalHints.append(`<p id="hint-${wordIndex}">${wordIndex} - ${wordText}</p>`);
            } else if (word.direction === 'horizontal') {
                horizontalHints.append(`<p id="hint-${wordIndex}">${wordIndex} - ${wordText}</p>`);
            }
        }
    }

    var validate = function(inputWord) {
        if (gameState === 0) return;
        
        inputWord = inputWord.toLowerCase()
        if (foundWords.includes(inputWord)) {
            return
        }

        var index;
        for (var i = 0; i < gameContent.words.length; i++) {
            if (gameContent.words[i].word === inputWord.toLowerCase()) {
                foundWords.push(gameContent.words[i].word);
                index = i+1
                break
            }
        }
        if (foundWords.length === 0) return;
        
        var word = foundWords[foundWords.length - 1];
        
        fillWordInGrid(word, gameContent);
        var hintElement = $(`#hint-${index}`);
        if (hintElement.length > 0) {
            hintElement.addClass('hint-strikethrough')
        }
        
        if (foundWords.length === gameContent.words.length) {
            gameState = 0;
            setTimeout(function() {
                if (confirm('You Win, Next Round!')) {
                    level++;
                    startGame();
                }
                }, 500);
        }
    }

    var startGame = function() {
        console.log('level', level)
        var difficulty = getDifficulty(level);
        grid = new Array(15).fill(null).map(() => new Array(15).fill(null));
        gameContent = prepGrid(grid, difficulty.maxWords, difficulty.avgWordLength, difficulty.anchorWordLength, difficulty.maxWordLength);
        console.log(gameContent)
        var t = ""
        for (var i=0; i < gameContent.words.length; i++){
            t += gameContent.words[i].word + " "
        }
        console.log(t)
        gameState=1
        foundWords = []

        var gameTable = $('#game-table');
        for (var i = 0; i < gameContent.grid.length; i++) {
            for (var j = 0; j < gameContent.grid[i].length; j++) {
            gameTable.find(`tr:eq(${i}) td:eq(${j})`).removeClass('grid-notUsed');
            gameTable.find(`tr:eq(${i}) td:eq(${j})`).find('.letter').text('');
            gameTable.find(`tr:eq(${i}) td:eq(${j})`).find('.word-index').text('');

            // If the cell has a word, don't grey it out
            if (gameContent.grid[i][j] !== null) {
                continue;
            }

            // Add class to grey out the cell
            gameTable.find(`tr:eq(${i}) td:eq(${j})`).addClass('grid-notUsed');
            }
        }
        for (var i = 0; i < gameContent.words.length; i++){
            fillWordInGrid(gameContent.words[i].word, gameContent, true, true);
        }
        crosswordHints(gameContent);

        //Only for testing
        // giveUpGrid(gameContent)
    };


    // startGame() 
