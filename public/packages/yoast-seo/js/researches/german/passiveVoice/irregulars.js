"use strict";
// This is a list of irregular participles used in German.

module.exports = function () {
    return ["angefangen", "aufgerissen", "ausgesehen", "befohlen", "befunden", "begonnen", "bekommen", "bewiesen", "beworben", "empfohlen", "empfunden", "entschieden", "erschrocken", "erwogen", "gebacken", "gebeten", "gebissen", "geblasen", "geblieben", "gebogen", "geboren", "geborgen", "geboten", "gebraten", "gebrochen", "gebunden", "gediehen", "gedroschen", "gedrungen", "gefahren", "gefallen", "gefangen", "geflogen", "geflohen", "geflossen", "gefressen", "gefroren", "gefunden", "gegangen", "gegeben", "gegessen", "geglichen", "geglitten", "gelungen", "gegolten", "gegoren", "gegossen", "gegraben", "gegriffen", "gehalten", "gehangen", "gehauen", "geheissen", "geheißen", "gehoben", "geholfen", "geklungen", "gekniffen", "gekommen", "gekrochen", "geladen", "gelassen", "gelaufen", "gelegen", "gelesen", "geliehen", "gelitten", "gelogen", "gelungen", "gemessen", "gemieden", "genesen", "genommen", "genossen", "gepfiffen", "gepriesen", "gequollen", "geraten", "gerieben", "gerissen", "geritten", "gerochen", "geronnen", "gerufen", "gerungen", "geschaffen", "geschehen", "geschieden", "geschienen", "geschlafen", "geschlagen", "geschlichen", "geschliffen", "geschlossen", "geschlungen", "geschmissen", "geschmolzen", "geschnitten", "geschoben", "gescholten", "geschoren", "geschossen", "geschrieben", "geschrien", "geschritten", "geschunden", "geschwiegen", "geschwollen", "geschwommen", "geschworen", "geschwunden", "geschwungen", "gesehen", "gesessen", "gesoffen", "gesonnen", "gespien", "gesponnen", "gesprochen", "gesprossen", "gesprungen", "gestanden", "gestiegen", "gestochen", "gestohlen", "gestorben", "gestoßen", "gestossen", "gestrichen", "gestritten", "gesungen", "gesunken", "getan", "getragen", "getreten", "getrieben", "getroffen", "getrogen", "getrunken", "gewachsen", "gewaschen", "gewichen", "gewiesen", "gewoben", "gewogen", "gewonnen", "geworben", "geworfen", "gewrungen", "gezogen", "gezwungen", "misslungen", "überbacken", "ueberbacken", "überbehalten", "ueberbehalten", "überbekommen", "ueberbekommen", "überbelegen", "ueberbelegen", "überbezahlen", "ueberbezahlen", "überboten", "ueberboten", "übergebunden", "uebergebunden", "überbunden", "ueberbunden", "überblasen", "ueberblasen", "überbraten", "ueberbraten", "übergebraten", "uebergebraten",
    // Participles ending in -st are not found with the regex to avoid second person singular verbs.
    "überbremst", "ueberbremst", "übergeblieben", "uebergeblieben", "übereinandergelegen", "uebereinandergelegen", "übereinandergeschlagen", "uebereinandergeschlagen", "übereinandergesessen", "uebereinandergesessen", "übereinandergestanden", "uebereinandergestanden", "übereingefallen", "uebereingefallen", "übereingekommen", "uebereingekommen", "übereingetroffen", "uebereingetroffen", "übergefallen", "uebergefallen", "übergessen", "uebergessen", "überfahren", "ueberfahren", "übergefahren", "uebergefahren", "überfallen", "ueberfallen", "überfangen", "ueberfangen", "überflogen", "ueberflogen", "überflossen", "ueberflossen", "übergeflossen", "uebergeflossen", "überfressen", "ueberfressen", "überfroren", "ueberfroren", "übergegeben", "uebergegeben", "übergeben", "uebergeben", "übergegangen", "uebergegangen", "übergangen", "uebergangen", "übergangen", "uebergangen", "übergossen", "uebergossen", "übergriffen", "uebergriffen", "übergegriffen", "uebergegriffen", "übergehalten", "uebergehalten", "überhandgenommen", "ueberhandgenommen", "überhangen", "ueberhangen", "übergehangen", "uebergehangen", "übergehoben", "uebergehoben", "überhoben", "ueberhoben", "überkommen", "ueberkommen", "übergekommen", "uebergekommen", "überladen", "ueberladen", "übergeladen", "uebergeladen", "überlassen", "ueberlassen", "übergelassen", "uebergelassen", "überlaufen", "ueberlaufen", "übergelaufen", "uebergelaufen", "überlesen", "ueberlesen", "übergelegen", "uebergelegen", "übergenommen", "uebergenommen", "übernommen", "uebernommen", "übergequollen", "uebergequollen", "überrissen", "ueberrissen", "überritten", "ueberritten", "übergeschossen", "uebergeschossen", "überschlafen", "ueberschlafen", "überschlagen", "ueberschlagen", "übergeschlagen", "uebergeschlagen", "übergeschlossen", "uebergeschlossen", "überschnitten", "ueberschnitten", "überschrieben", "ueberschrieben", "überschrieen", "ueberschrieen", "überschrien", "ueberschrien", "überschritten", "ueberschritten", "überschwungen", "ueberschwungen", "übergesehen", "uebergesehen", "übersehen", "uebersehen", "übergesotten", "uebergesotten", "übergesotten", "uebergesotten", "übersponnen", "uebersponnen", "übersprochen", "uebersprochen", "übersprungen", "uebersprungen", "übergesprungen", "uebergesprungen", "überstochen", "ueberstochen", "übergestochen", "uebergestochen", "überstanden", "ueberstanden", "übergestanden", "uebergestanden", "überstiegen", "ueberstiegen", "übergestiegen", "uebergestiegen", "übergestrichen", "uebergestrichen", "überstrichen", "ueberstrichen", "übertragen", "uebertragen", "übertroffen", "uebertroffen", "übertrieben", "uebertrieben", "übertreten", "uebertreten", "übergetreten", "uebergetreten", "überwachsen", "ueberwachsen", "überwiesen", "ueberwiesen", "überworfen", "ueberworfen", "übergeworfen", "uebergeworfen", "überwogen", "ueberwogen", "überwunden", "ueberwunden", "überzogen", "ueberzogen", "übergezogen", "uebergezogen", "verdorben", "vergessen", "verglichen", "verloren", "verstanden", "verschwunden", "vorgeschlagen"];
};
//# sourceMappingURL=irregulars.js.map
//# sourceMappingURL=irregulars.js.map