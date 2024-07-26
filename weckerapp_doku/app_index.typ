#import "template/handout.typ": *

#show: dvdtyp.with(
  title: "Alarm App",
  subtitle: [react-native | index.tsx],
  author: "Mia und Mislav",
  abstract: "",
)

#outline()

= Welche Voraussetzungen sind notwending, um das Projekt vorzubereiten ?

== Installation von den Software Dependecies


#theorem("Software Installation")[
- Textedior => VSCode
- Betriebssystem => Ubuntu 24.04
- Package manager and executer => npm(9.2.0), npx(9.2), node(18.19.1)
]

= Unterstützender Guide

== Alarm Component

#theorem("Komponente")[

Erstes Ziel ist es, eine Alarm Komponente zu erstellen, welche die Zeit anzeigt und einen Button beinhaltelt.
#image("pictures/alarm_component.png", width: 15%)
]

#v(3cm)

#explenation("Erste Komponente")[

Hier verwenden wir die Komponente "TouchableComponent", diese besitz folgende props, die alle befüllt werden müssen:
- key=
- href=
- givenTime=
- currentKey=
- onToggleSwitch=
- currentState=
]


#codeExample("Erste Komponente - Syntax")[

```javascript
<TouchableComponent
key={Zahl}
href={Dateipfad}
givenTime={Die Uhrzeit}
currentKey={Zahl}
onToggleSwitch={Funktion}
currentState={Statement}
/>
```
]

#explenation("Erklärung der einzelnen prop-Elemente")[
- key: Wenn mehrere Komponenten dargestellt werden, müssen die einen Eindeutigen "key" besitzen, damit sie auf der angezeigten Seite identifiziert werden können(Front-End)
- href: Hier benötigen wir den Pfad zur Settings-Seite und müssen auch die Parameter übergeben (Eingestellte Uhrzeit) um diese auch verändern zu können..
- givenTime: Die aktuell eingestellte Uhrzeit
  - Beim erstellen der ersten Alarm-Komponente, kann man hier eine beliebige Zahl als String eingeben
  - Beim variablen erstellen mehrere Alarm-Komponente sollte hier auch eine Variable eingefügt werden zum testen.
- Die Funktion, die beim drücken des Toggles ausgeführt werden soll.
  - Beim erstellen der ersten Alarm-Komponente, kann man hier eine beliebige Funktion selbst definieren und einfügen zum testen.
  - Beim variablen erstellen mehrere Alarm-Komponente sollte hier die richtige Funktion übergeben werden.
- currentState: Hier wird der aktulle status des Toggles übergeben, also entweder switchStates oder false.

]

#v(2cm)

== Multiple Components

#theorem("Darstellung von vielen Komponenten")[
Nachdem wir nun die erste Alarm Komponente dargestellt haben, wollen wir es möglich machen mehr Komponente gleichzeitig dar zu stellen.
#image("pictures/multiple_components.png", width: 15%)
]

#explenation("Map Methode")[
Um das möglich zu machen, verwenden wir die oft verwendete "map" Methode.
Die funktion iterriert durch ein bestehendes array und verändert dieses.
- #link("https://falconbyte.net/javascript-arrays.php#1")[Hier findest du eine Erklärung zu Arrays.]
]

#codeExample("Beispiel einer map-funktion")[

```javascript
const numbers = [1, 4, 9]
const roots = numbers.map((num) => Math.sqrt(num));
```
"roots" ist jetzt [1, 2, 3]
aber "numbers" bleibt [1, 4, 9]

]

#v(3cm)

#theorem("Checken ob der Toggle an ist")[
Nachdem wir es jetzt geschafft haben, wollen wir nun wissen, wann der User den Toggle an oder aus macht.

#image("pictures/toggle_component.png", width: 15%)
]


#explenation("If-Statements")[
Ein If-Statement checkt, ob eine sogenannte "Wenn-Dann-Bedingung", heißt es wird überprüft ob eine Bedinngung erfüllt ist und wenn dem so ist, wird der entsprechende Code ausgeführt.
]



#codeExample("Beispiel eines If-Statements")[

```javascript
if (Ausdruck){
  //Anweisung des True Zweiges
    Anweisung;
  } else {
  // Anweisung des False-Zweiges
    Anweisung;
  }
```

]
