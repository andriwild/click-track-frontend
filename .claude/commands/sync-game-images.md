Synchronisiere die Bilder und Schritte der Spielmodi aus `docs/app-functionality.md` in alle 4 i18n-Dateien (`src/i18n/de.ts`, `en.ts`, `fr.ts`, `it.ts`).

## Ablauf

1. Lies `docs/app-functionality.md` komplett ein.
2. Lies die aktuellen `gameModes`-Abschnitte aus allen 4 Locale-Dateien (`src/i18n/de.ts`, `src/i18n/en.ts`, `src/i18n/fr.ts`, `src/i18n/it.ts`).
3. Gleiche pro Modus (Swipe, 1 Beacon, 2 Beacon, Turnier) ab:

### Bild-Zuordnung aus dem Markdown

Jeder Screen im Markdown hat den Dateinamen in Klammern am Ende der Zeile, z.B.:

```
Screen 1: Start ohne verbundene Beacons (1.png)
```

- Wenn der Dateiname KEIN `/` enthält und mit einer Zahl beginnt (z.B. `1.png`, `3.png`), ist der volle Pfad: `/smartphone/<filename>`
- Wenn der Dateiname mit `dark_` oder `light_` beginnt, ist der volle Pfad: `/smartphone/semantic/<filename>`

### Mapping Markdown → Code

| Markdown-Abschnitt     | Code-Key in `gameModes.modes` |
| ---------------------- | ----------------------------- |
| `## Swipe Mode`        | `swipe`                       |
| `## 1 Beacon Mode`     | `oneBeacon`                   |
| `## 2 Beacon Mode`     | `twoBeacons`                  |
| `## Mehr als 2 Beacon` | `tournament`                  |

4. Fuer jeden Modus:
   - Zaehle die Screens im Markdown. Wenn die Anzahl der Screens von der Anzahl der Steps im Code abweicht, passe die Steps an:
     - Wenn ein neuer Screen hinzukommt, fuege einen passenden Step hinzu (Titel und Beschreibung aus dem Markdown-Text ableiten, in allen 4 Sprachen uebersetzen)
     - Wenn ein Screen entfernt wurde, entferne den zugehoerigen Step
   - Aktualisiere das `images`-Array so, dass es exakt die Bilder aus dem Markdown enthaelt (in der richtigen Reihenfolge)
   - Entferne veraltete TODO-Kommentare bei Bildern, die jetzt existieren
   - Pruefe, ob die referenzierten Bilddateien unter `public/` tatsaechlich existieren. Falls nicht, lass das Bild trotzdem stehen, aber fuege einen `// TODO: Bild fehlt` Kommentar hinzu

5. Aktualisiere den Abschnitt `## Fehlende Screenshots fuer Website` in `docs/app-functionality.md`:
   - Entferne Eintraege fuer Bilder, die jetzt existieren
   - Fuege neue Eintraege hinzu fuer Bilder, die im Markdown referenziert aber nicht unter `public/` vorhanden sind

6. Fuehre am Ende `npm run build` aus, um sicherzustellen, dass keine Fehler entstanden sind.

## Wichtig

- Aendere NUR die `images`-Arrays und ggf. die Anzahl der `steps` (wenn sich die Screen-Anzahl geaendert hat). Aendere NICHT die bestehenden Uebersetzungstexte der Steps, es sei denn ein Step wurde neu hinzugefuegt oder entfernt.
- Alle 4 Locale-Dateien muessen identische `images`-Arrays haben (Bilder sind sprachunabhaengig).
- Bei neuen Steps: Uebersetze den Titel und die Beschreibung sinnvoll in DE, EN, FR, IT.
