# Prosjekt 3 - Dokumentasjon

## Krav til innhold og funksjonalitet

Vi har valgt å lage en søkbar katalog som inneholder restaurantkjeden McDonald’s sine varer. Samtlige gruppemedlemmer liker McDonald’s, og vi fant et datasett som var både stort nok til å være interessant, samtidig som det bestod av enkel og presenterbar data. Som backend API har vi gått for graphQL. Mer om dette under.

## Krav til funksjonalitet i brukergrensesnittet

### Søk og listebasert presentasjon
Vi har implementert et søkefelt der man kan søke med fritekst etter varer i datasettet. Det fungerer slik at når man trykker på søkeknappen dispatches en action creator der søkeordet sendes med som argument. Videre vil action creatoren hente inn staten og gjøre en spørring basert på denne sammen med søkeordet. Dataene som hentes ut fra databasen lagres så i staten og vises til brukeren i en listevisning. Vi har valgt å gå for en “bla i sider” måte å håndtere resultatframvisningen på, da dette ga mest mening med tanke på måten dataen hentes fra databasen. Denne funksjonaliteten er implementert med to knapper nederst på siden som endrer “offset” og gjør avgrensede spørringer når man blar mellom sidene. Dataen hentes ut i porsjoner på ni og ni varer.

### Detaljert visning
Datapresentasjonen er gjort ved at hvert menyobjekt er representert med et ekspanderbart informasjonsfelt, der varenavn, rating og varekategori vises når feltet er lukket. Trykker man på objektet vil panelet ekspandere, og ytterligere næringsinformasjon om varen blir synlig. I dette panelet finnes også en grafisk fremstilling av noen nøkkelverdier for varen vist i en radargraf. Her finnes også mulighet for å legge til sin egen vurdering av varen.


### Sortering og filtrering
Sortering og filtrering er implementert. Man kan filtrere på ulike kategorier ved hjelp av checkboxer. I tillegg kan man filtrere på maks antall kalorier og minimum rating ved hjelp av slidere. Sortering av søke- og/eller filtreringsresultatet gjøres i en drop down meny. Her kan man velge å sortere på verdiene rating og kaloriinnhold, med ønsket rekkefølge, altså lav til høy eller høy til lav. Både filtrering og sortering dispatcher samme action som søkeknappen der det gjøres en spørring basert på staten, som igjen vil oppdatere staten og dermed også visningen. Altså skjer all sortering og filtrering i backend på hele datasettet. 

### Brukergenerert data
Som brukergenerert data har vi gått for rating (1-5) da vi synes dette var godt egnet til vårt datasett. På den ekspanderte/detaljerte visningen til hver vare kan man gi en rating/score. Det dispatches da en action creator som tar inn ratingen og ID’en til varen som parametere, og gjør en mutation på bakgrunn av det. I backend regnes ny snittrating ut og sendes tilbake. Så oppdateres staten og visningen. Det er altså snittratingen til varen som vil oppdateres, mens hjertene stadig vil vise ratingen man selv har gitt den respektive varen. Det er også å verdt å merke seg at snittratingen rundes nedover til nærmeste heltall, så den vil ikke nødvendigvis alltid vise en ny verdi.

### Avansert visning
For avansert visning har vi valgt å vise noen av dataene i et radardiagram. Dette synes vi var en interessant måte å vise prosentverdier av anbefalt daglig inntak av f.eks. fett og kolesterol på. Ettersom verdiene som vises i diagrammet er oppgitt i prosent av anbefalt daglig inntak går diagrammet til 200 % da noen av varene har verdier over 100 %.

## Krav til backend

### Database på virtuell maskin
Vi har satt opp en mongoDB NoSQL database på en virtuell server tildelt gruppen. Vi valgte mongoDB fordi det er en relativt kjent og mye brukt database, noe som betyr at god dokumentasjon er tilgjengelig. Datasettet vi har valgt å bruke er på 260 dokumenter, noe vi mener er tilstrekkelig stort for å lage en prototypen med et godt sett med søke- og filtreringsfunksjoner. Datasettet ble funnet på kaggle.com. 

### graphQL
Vi har valgt å bruke graphQL fremfor REST API fordi graphQL dette gir større fleksibilitet og mer spisset datahenting. Fleksibiliteten er større fordi man kan gjøre mange ulike spørringer, i tillegg til å sende med parametre til spørringen enkelt. Med spisset datahenting mener vi at vi unngår å hente for mye eller for lite data ved hver spørring. Vi henter dermed kun det vi trenger fordi graphQL lar oss spesifisere hvilke data i hvert dokument og hvor mange dokumenter vi ønsker. I tillegg git graphQL støtte for å hente ut data basert på ulike kriterier i tillegg til at man hos klienten kan bestemme hvordan man vil at dataen man henter ut skal være strukturert, innenfor visse rammer. Det er her viktig å nevne at for at klienter skal være så effektive og fungere så raskt som mulig bør man unngå over-henting av data og databehandling i frontend noe man enkelt kan unngå med graphQl.

## Overordnede krav

### Design
Vi har valgt et design svært preget av McDonald’s sine farger, da dette passet naturlig med temaet vårt. Til venstre på siden finnes funksjonalitet som har med filtreringen å gjøre, i midten er søkefeltet med listevisning av resultater når disse vises, og øverst til høyre er sorteringsmenyen. Denne typen oppsett er ganske vanlig å se, og vi synes den passet godt med oppgaven og formålet. Dersom skjermbredden reduseres brukes media queries til å flytte komponentene, slik at all filtrering- og sorteringsfunksjonalitet vises øverst, mens søkefeltet og resultatlista dyttes ned. Vi mener dette oppsettet ga mest mening, da den viktigste funksjonaliteten er valgene man tar for resultatsettet, så disse er i fokus i utgangspunktet.

### Apollo Client
Vi har valgt Redux for å håndtere local data og Apollo Client for remote data. Apollo kan håndtere begge i en enkel applikasjon, men med en kompleks state er det lurt å overlate det til f.eks. Redux. Fordi denne oppgaven krevde bruk av Redux til state håndtering, har vi valgt å kombinere de to. Årsaken til at vi har brukt Apollo Client er fordi det er en softistikert graphQL klient som er veldig deklarativ slik at man kan fokusere på dataen man vil hente i stedet for å bruke tid på hvordan den hentes. I dette prosjektet brukes altså Redux til å håndtere staten, mens Apollo Client brukes for å sette opp en klient som gjør queries og mutations enkelt.

### Tidsbruk
Dette prosjektet har vært veldig tidkrevende og vi har derfor valgt å fokusere på implementasjonen av de ulike kravene fremfor det estetiske. Av den grunn har f.eks. alle items underscore i navnet sitt.

## Krav til bruk av teknologi

### React
Prosjektet er initialisert med create-react-app og brukergrensesnittet er basert på funksjonelle React-komponenter. React lar oss enkelt dele opp en webapplikasjon i  komponenter som kan brukes flere steder i applikasjonen. Komponentene er organisert i en hierarkisk mappestruktur med “organisms”, “molecules” og “atoms” der de fungerer som “byggeklosser” med atomene nederst i strukturen. F.eks. kan en organisme bestå av en kombinasjon av atomer og molekyler. Ettersom heller ikke dette prosjektet består av nevneverdig mange filer kan kanskje denne mappestrukturen virke noe overflødig, men i tidligere arbeid med React har vi erfart at det lønner seg å begynne med gode praksiser selv for mindre prosjekter, slik at skalering blir enklere dersom det trengs. 

### Redux
For å håndtere staten har vi valgt å bruke Redux. Komponentene som håndterer søk, sortering, filtrering og rating dispatcher actions creators, som gjennom en reducer oppdaterer den aktuelle delen av Redux storen. I storen finnes grunnlaget til spørringene, det vil si søkeord, valgte kategorier, sliderverdier og sorteringsverdier. I tillegg har vi også med “menyene” som spørringene returnerer, altså de ulike varene som skal vises basert på et søk. Det er dermed lett å utføre spørringer da staten hele tiden viser siste versjon av brukerens input. Dette gjøres også ved å dispatche en action creator. Denne tar inn staten, gjør en spørring og oppdaterer staten med svaret. Det er dermed også enkelt å vise/oppdatere visningen av søkeresultatet ved at visningen lytter etter endringer i staten.

### Database backend
Vi har i tillegg til en mongoDB database satt opp og driftet en backend på den virtuelle serveren. Denne backenden er programmert i Node.js der vi har brukt Apollo GraphQL til så sette opp en Apollo server og mongoose som verktøy for å kommunisere med mongoDB databasen. I tillegg til Apollo GraphQL har vi brukt Express.js til å håndtere spørringer og sørge for at de blir behandlet på riktig måte. Vi har valgt å bruke Apollo GraphQL i stedet for f.eks. Express GraphQL fordi Apollo GraphQL relativt kjent og mye brukt. Dette betyr at dokumentasjonen er god. I tillegg tilbyr Apollo GraphQL noen forenklinger som gjør det enklere å sette opp ett graphQL API.

### Relevante komponenter og bibliotek
Det er brukt flere tredjeparts komponenter fra ulike react biblioteker. Drop down menyen for sortering av resultatet er hentet fra NAV IT sitt komponentbibliotek ‘nav-frontend-skjema’, og tilpasset minimalt med CSS. I tillegg er flere av de andre funksjonelle komponentene hentet fra React rammeverket Material-UI. Ekspansjonspanelet for fremvisning av menyobjektene i liste er hentet fra dette, og det samme er Slider komponentene og Rating funksjonaliteten. radargrafen i informasjonsdelen om hvert objekt ble hentet fra npm-pakken  ‘react-svg-radar-chart’, og er også enkelt tilpasset vår data. Dette ble gjort for å spare tid på å lage egne komponenter, da vi synes komponentene som var tilgjengelige gjennom disse bibliotekene passet våre behov fint. Kilder for de nevnte komponentene er listet under:

[Drop down meny fra NAV IT](https://design.nav.no/components/select/)

[Ekspansjonspanel fra Material-UI](https://material-ui.com/api/expansion-panel/#expansionpanel-api)

[Sliderkomponent fra Material-UI](https://material-ui.com/components/slider/#slider)

[Rating-komponent fra Material-UI](https://material-ui.com/components/rating/#rating)

[Radargraf fra npm JS](https://www.npmjs.com/package/react-svg-radar-chart)

## Krav til testing

### Enhetstesting
På grunn av dårlig tid ble ikke enhetstesting en stor prioritet da vi følte andre krav var viktigere. Normalt vil man skrive mange enhetstester, færre integrasjonstester og enda færre end-to-end tester, men i React som er bygd opp av komponenter er det mer viktig å teste hvordan komponentene fungerer sammen (integrasjonstesting) enn å teste en individuell komponent (enhetstesting). Vi har likevel skrevet noen enhetstester til blant annet App og noen actions creators. Testene kan kjøres fra frontend-mappa med:
```console
npm test
```

### End-to-end testing
Her valgte vi å bruke Cypress da dette dekket våre behov og passet godt med bruk av Node.js. Det er også lett å debugge med dette verktøyet. Vi har skrevet tester for alle komponenter som gjør kall til backend og sjekket om staten er som forventet etter disse kallene. Testene kan kjøres fra frontend-mappa med:
```console
npx cypress open
```
