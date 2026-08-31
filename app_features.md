# Klikkr App – Funktionen & Features

Digitaler Punktezähler für Racketsport. Bedienbar per Wischgeste auf
dem Display oder freihändig über Klikkr Armbänder (Bluetooth LE).

> Stand: App-Version 2.2.0. Quelle der Wahrheit ist das App-Repo,
> insbesondere `CLAUDE.md` und `docs/bedienungsanleitung.md`. Wenn eine
> Aussage hier von der App abweicht, gilt die App.

## 🎾 Sportarten

Sechs, jede mit ihrem eigenen Regelwerk: **Tennis, Padel, Squash,
Tischtennis, Badminton, Pickleball**.

Pro Sportart einstellbar: Zielpunktzahl, Vorteil / Golden Point /
Star-Point, Tiebreak und Tiebreak-Ziel, Anzahl Sätze, Spiele pro Satz,
Aufschlagregel (jeder Punkt, alle zwei, Side-out, pro Spiel), Aufschläge
pro Spieler, Punkte-Deckel, Match-Zeit. Die Voreinstellungen decken den
Normalfall, das Regeln-Sheet ist einen Tap vom Match-Setup entfernt.

**Einzel / Doppel** ist ein eigener Schalter und unabhängig von der Zahl
der Armbänder.

## 🖐 Eingabe: der Modus folgt den Armbändern

Der Spielmodus wird **aus der Anzahl gekoppelter Armbänder abgeleitet**,
nicht vom Nutzer gewählt. Die App zeigt ihn als bestätigbaren Vorschlag.

| Armbänder | Modus    | Bedienung                              |
| --------- | -------- | -------------------------------------- |
| 0         | Swipe    | Wisch nach oben über den eigenen Score |
| 1         | 1-Klikkr | Ein Band steuert beide Seiten          |
| 2         | Duell    | Jeder zählt für sich                   |
| 3+        | Turnier  | Turnierablauf, jedes Match 1v1         |

## 👆 Gesten-Vokabular

Die **Hardware** erkennt vier Gesten und sendet jede als eigenes
Ereignis. Die App parst kein Timing.

| Geste    | 1-Klikkr                       | Duell                      | Turnier-Match              |
| -------- | ------------------------------ | -------------------------- | -------------------------- |
| 1 Klick  | +1 für den eigenen Spieler     | +1 für den eigenen Spieler | +1 für den eigenen Spieler |
| 2 Klicks | +1 für den **anderen** Spieler | Punkt zurücknehmen         | Punkt zurücknehmen         |
| 3 Klicks | Punkt zurücknehmen             | (im Spiel ohne Funktion)   | (im Spiel ohne Funktion)   |
| Halten   | Pause / Weiter                 | Pause / Weiter             | Pause / Weiter             |

**Ausnahme:** Steht es 0:0, wechselt die Zurücknehmen-Geste stattdessen
den Startaufschläger (Tennis, Padel-Duell, PAR).

**Nach dem Match** sind die Zwischenbildschirme vollständig
armbandgesteuert: 1 oder 3 Klicks starten das nächste Match.

**Touch:** Wisch nach oben zählt. Wisch nach unten hat **keine**
Funktion mehr, Zurücknehmen läuft über das Menü.

## 📺 Display-Sync

Ein zweites Gerät wird zur Anzeigetafel. Kopplung per QR-Code, Übertragung
direkt per Bluetooth, ohne Internet. Der Slave zeigt dasselbe Scoreboard
schreibgeschützt, optional im Querformat, mit eigenem Ton-Schalter.

## 🏆 Turnier

Teilnehmer wählen, Spielplan, Tabelle zwischen den Matches, nächstes
Match per Klick. Angefangene Turniere lassen sich fortsetzen.

## 📊 Statistik

Verlauf mit Satzergebnissen, Dauer und Aufschlagquote. Momentum-Chart
Punkt für Punkt. Direkte Bilanz gegen jeden Gegner. Spielerprofile mit
eigenen Farben. Export und Import als Datei.

## ⚙️ App-Einstellungen

Theme hell / dunkel / System. Vier Sprachen: Deutsch, Englisch,
Französisch, Italienisch. Sound-Sets „8 Bit", „Minimalistic",
„Speaker" (Ansage des Spielstands), „Voice", oder aus. Haptisches
Feedback bei jedem Punkt.

## 🔒 Daten

Läuft offline, kein Konto, keine Anmeldung. Alles bleibt auf dem Gerät.

## 🔗 Kopplung

Armbänder werden über den Präfix `Klikkr_` gefunden, Authentifizierung
per Challenge-Response. Kopplung per QR-Code am Armband oder aus der
Bluetooth-Liste.
