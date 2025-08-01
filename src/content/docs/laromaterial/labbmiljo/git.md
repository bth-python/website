---
title: Git ⚠️
description: Installera versionshanteringsverktyget Git.
sidebar:
  order: 160
---

Versionshanteringverktyget Git används som ett utvecklingsverktyg i kursen. Git är ett versionshanteringssystem som utvecklades i samband med arbetet med Linux-kärnan. Git har nu det blivit ett alltmer populärt verktyg för att hantera kod.

Här är beskrivs hur du installerar Git på din egen maskin.

## Installera {#install}

Välj din miljö och installera Git.

### Installera på Windows (WSL/Bash)

Git finns förinstallerat när du använder WSL med Bash/Ubuntu för Windows.

### Installera på Mac OS

På vissa versioner av Mac OS så finns Git redan installerat som en del av systemet. Men om du har en nyare version av Mac OS som Ventura så installerar du git.

```bash
brew install git
```

Om inte testet av Git funkar, så starta om ditt terminalfönster och testa igen.

### Installera på Linux/Unix

På Ubuntu och Debian Linux kan du installera med pakethanteraren.

```bash
apt install git
```

## Testa installationen

Testa att installationen finns på plats genom att följande kommando i en terminal.

```bash
git --version
git
```

Du kommer se vilken version du har installerat och du får en hjälptext som visar detaljer om hur kommanot fungerar.

## Konfigurera din miljö

:::caution
Visa hur man konfigurerar Git med sin egen användare och mailadress.
:::

## Avslutningsvis

Git finns till flera operativsystem, går under en fri licens och utvecklas som [öppen källkod på GitHub](https://github.com/git).

Denna artikel visar enbart hur du installerar Git eftersom det är en del av labbmiljön som används till kurserna. Att lära sig använda Git är en annan sak.

För att komma igång med de första kurserna på dbwebb så behöver du inte kunna något om Git så att ha det installerat är tillräckligt bra.

Om du ändå vill lära dig mer om Git så finns här ett par förslag.

På webbplatsen för Git finns det en webbaserad övning om 15 minuter som [hjälper dig att komma igång med grunderna för Git](http://try.github.com/).

Här finns en artikel som visar hur du kan [komma igång med Git tillsammans med webbtjänsten GitHub](kunskap/kom-igang-med-git-och-github).
