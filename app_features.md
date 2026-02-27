# Click Track App – Funktionen & Features

Die App ist ein digitaler Spielstandzähler (insbesondere für Sportarten wie Squash), der sowohl über physische Bluetooth-Buttons als auch über das Display bedient werden kann.

## 🎮 Kernfunktionen & Spielablauf

- **Spielstand-Zählung:** Zählt die Punkte für zwei Spieler/Teams.
- **Sieg-Erkennung:** Das Spiel erkennt automatisch, wenn ein Spieler die Zielpunktzahl erreicht hat.
- **"Win by Two" (Zwei Punkte Vorsprung):** Unterstützung der Regel, dass ein Spiel erst mit zwei Punkten Abstand gewonnen werden kann (optional aktivierbar).
- **Spielsteuerung:** Das Spiel kann jederzeit gestartet, gestoppt und neu gestartet (Score auf 0:0 zurückgesetzt) werden.

## 🔗 Konnektivität & Hardware

- **Bluetooth LE (BLE) Beacons:** Spieler können Bluetooth-Buttons (Armbänder) tragen. Ein Knopfdruck erhöht den Spielstand des jeweiligen Spielers.
- **Single-Beacon Modus:** Es ist auch möglich, nur mit einem einzigen Beacon zu spielen. Dabei gibt ein einfacher Klick einen Punkt für Team 1 und ein Doppelklick einen Punkt für Team 2.
- **QR-Code Scanner:** Die App integriert einen Kamera-Scanner, um die Bluetooth-Geräte (MAC-Adressen) schnell via QR-Code zu koppeln und sich das mühsame Suchen in der Bluetooth-Liste zu ersparen.
- **Hardware-Tasten:** Die App reagiert auch auf den "Enter"-Key (bspw. durch Kameraauslöser oder Bluetooth-Presenter), was für Testzwecke auch den Punktestand von Spieler 1 erhöht.

## ⚙️ Einstellungen & Anpassung (Game Settings)

- **Zielpunktzahl (Max Score):** Frei definierbar (Standard ist z. B. 11).
- **Display-Modi:** Der Spielstand kann je nach Einsatzort unterschiedlich dargestellt werden:
  - **Table (Tisch-Modus):** Gespiegelt (1-zu-1), sodass beide Seiten am Tisch ihre Zahl richtig herum lesen können.
  - **Portrait:** Beide Zahlen stehen im Hochformat untereinander und sind von einer Richtung aus lesbar.
  - **Landscape:** Querformat, Zahlen stehen nebeneinander.
- **Farbanpassung:** Die Hintergrundfarben für Spieler 1 (z. B. Rot) und Spieler 2 (z. B. Blau) lassen sich individuell einstellen.
- **Seitenwechsel (Swap Teams):** Die Zuordnung der Knöpfe zum Display links/rechts kann vertauscht werden, ohne sich neu verbinden zu müssen.

## 🔊 Audio-Feedback

- **Punkt-Sound:** Ertönt bei jedem erzielten Punkt (über integrierte Audio-Dateien, als Fallback gibt es einen System-Beep).
- **Sieg-Sound:** Eine spezielle Audio-Benachrichtigung, wenn ein Spieler das Spiel gewonnen hat.

## 📱 Manuelle Bedienung

- Neben den Bluetooth-Knöpfen lässt sich der Spielstand auch über Wischgesten (Swipe) auf dem jeweiligen Team-Bereich auf dem Bildschirm manuell korrigieren (hoch- oder herunterzählen).
