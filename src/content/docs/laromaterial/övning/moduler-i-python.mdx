---
author: moc
category: python
revision:
  "2020-08-17": (A, moc) Skapad inför V3 HT20.
...
Moduler i Python
==================================

[FIGURE src=image/python/lego.jpg?w=c5 class="right"]

Funktioner i Python gör så att vi kan återanvända kod och att vi har möjlighet att sätta namn på koden som vi vill använda flera gånger. Ibland vill vi dela upp koden ännu mer för att enkelt kunna återanvända flera funktioner i flera olika program, detta kallas ibland kodbibliotek, i python kallas detta moduler. Vi ska i denna övning titta på hur vi kan skapa en modul och samla funktioner i den som vi importerar i en annan Python-fil.



<!--more-->



Vi fortsätter på exemplet från övningen [Funktioner, argument och returvärden](kunskap/funktioner-argument-och-returvarden-v2) så har du inte gjort den övningen rekommenderar vi att du gör den först.



Moduler {#moduler}
--------------------------------------

Moduler skapas oftast av två anledningar. En av anledningarna är att organisera koden, vi samlar funktioner som är relaterade till varandra i en modul. Detta gör att de blir lätt att hitta och jobba med de funktionerna. Den andra anledningen till att skapa moduler är att skapa kodbibliotek. Vi sparar funktioner som vi vill återanvända i andra projekt i en modul. Då slipper vi skapa om funktionerna och istället behöver vi bara importera modulen också har vi tillgång till dem. Den ena anledningen utesluter dock inte den andra.

I slutet av övningen [Funktioner, argument och returvärden](kunskap/funktioner-argument-och-returvarden-v2) ser vår funktion ut på följande sätt.

```python
# functions_v2.py

def create_sandwich_string(ingredients, presentation="Prova vår sandwich som innehåller"):
    """
    Formats ingredience and recipe lists in a representable string.
    """
    number_of_ingredients = len(ingredients)
    if number_of_ingredients == 1:
        return "{} {}.".format(presentation, ingredients[0])

    return "{presentation} {comma_sepearated_elements} och {last_element}.".format(
        presentation=presentation,
        comma_sepearated_elements=", ".join(ingredients[:-1]),
        last_element=ingredients[-1]
    )
```

Nu har vi bara en funktion men vi kommer snart att bygga vidare och då är det skönt att ha en fin struktur redan från första början. Detta gör vi lättast genom att skapa en ny modul. Vi börjar med att skapa en ny fil, jag väljer att döpa den till `sandwich.py` och flyttar endast den ovanstående funktion.

Sedan skapar vi en till fil `waysub.py` där vi skriver själva programmet. Vi har alltså nu våra funktioner i en fil och själva programmet i en annan. För att vi ska kunna använda våra funktioner från filen `sandwich.py` måste vi importera den filen in i `waysub.py`. Detta gör vi genom att använda `import`. Notera att vi skriver `import waysub` utan filändelse och längst upp i filen. Vi har nu tillgång till alla funktioner som är definierade i `sandwich.py`. Vi kommer åt funktionerna genom att skriva modulens namn följt av en punkt `.` och sen funktionens namn, `module_name.function_name()`, detta kallas "dot notation".

```python
# waysub.py

import sandwich

ingredients = ["ost", "bacon", "sallad", "majonnäs"]

ingredients_string = sandwich.create_sandwich_string(ingredients, "En BLT innehåller")
print(ingredients_string)
# skriver ut:
# En BLT innehåller ost, bacon, sallad och majonnäs.
```

En modul är egentligen bara en python fil med kod i, så alla filer vi har skapat än så länge har varit moduler. Det vi gör nu är egentligen bara att lära oss hur vi kan importera/använda funktioner från andra filer/moduler.

# Byta namn på moduler {#as}

Av olika anledningar vill man ibland byta namnet på modulen i koden till något annat, t.ex. det kan vara långt eller så linkar den något annat vi använder. Detta kan vi göra genom att använda nyckelordet `as`. Vi kollar på hur det vi gör för att byta namn på "sandwich" till "s".

```python
# waysub.py

import sandwich as s

ingredients = ["ost", "bacon", "sallad", "majonnäs"]

ingredients_string = s.create_sandwich_string(ingredients, "En BLT innehåller")
print(ingredients_string)
# skriver ut:
# En BLT innehåller ost, bacon, sallad och majonnäs.
```

Det är inte svårare än så, lägg bara till `as name` i slutet av era import statement. Då kan vi använda det nya namnet i koden nedanför för att referera till den importerade modulen.

# Inbyggda moduler och importera specifika funktioner {#from}

Python kommer skeppat med ett antal färdiga moduler som innehåller användbara funktioner. T.ex. modulen [math](https://docs.python.org/3/library/math.html) som innehåller funktioner b.la. för avrundning av tal och mer avancerad aritmetik än addition, subtraktion och division. Modulen [random](https://docs.python.org/3/library/random.html) är också användbar, den innehåller funktioner som b.la. kan slumpa fram tal, vilket är väldigt bra att ha. Dessa moduler kan innehålla väldigt många olika funktioner och ibland vill vi kanske bara komma åt en specifik, då är det bra att man kan importera specifika funktioner så man inte får alla.  
För att göra det använder man sig av nyckelordet `from` som används genom att specificera modulen vi vill hämta från och sen vilken funktionen vi vill ha (`from module_name import function_name`). Vi kollar på ett exempel där vi importera en funktion för att avrunda tal från "math".

```python
from math import floor

print(floor(3.14))
# skriver ut:
# 3
```

Vi vill nu även ha funktionen för att kunna avrunda tal uppåt och neråt samt kunna få ut potenser. Vi behöver inte skapa en ny rad för detta utan vi kan lägga till varje funktion vi vill ha efter "floor". Vi kan även här byta namn på funktionerna vi importerar, vi testar byter namn på `floor` till "lower".


```python
from math import floor as lower, ceil, pow

print(lower(3.14))
# skriver ut: 3
print(ceil(3.14))
# skriver ut: 4
print(pow(5,2))
# skriver ut: 25
```



# Exekvera moduler som script {#exekvera}
Som vi vet är en modul egentligen bara en fil med kod. Detta faktum gör att vi kan exekvera den som ett eget program. Vi fortsätter med vårat exempel och lägger till lite kod som vi tänker oss att vi vill använda för att testa att funktionerna fungerar som de ska.

```python
# sandwich.py
def create_sandwich_string(ingredients, presentation="Prova vår sandwich som innehåller"):
    """
    Formats ingredience and recipe lists in a representable string.
    """
    number_of_ingredients = len(ingredients)
    if number_of_ingredients == 1:
        return "{} {}.".format(presentation, ingredients[0])

    return "{presentation} {comma_sepearated_elements} och {last_element}.".format(
        presentation=presentation,
        comma_sepearated_elements=", ".join(ingredients[:-1]),
        last_element=ingredients[-1]
    )

print("Testar vår nya modul:")
print(create_sandwich_string(["ost"]) == "Prova vår sandwich som innehåller ost.")
```

Vi exekverar filen som vanligt med `python3 sandwich.py` skriver den ut `"Testar vår nya modul:"` och `True`. Detta vill vi inte ska ske när vi importerar modulen. Då vill vi enbart ha tillgång till funktionerna, inte att någon kod ska exekveras. Vi testar att exekvera "waysub.py" för att se vad som skrivs ut.

```bash
$python3 waysub.py
Testar vår nya modul:
True
En BLT innehåller ost, bacon, sallad och majonnäs.
```

Nu görs utskriften från "sandwich.py" först i programmet, det är för att koden i modulen exekveras direkt när den importeras. Så där vill vi inte ha det, vi vill fortfarande bara se utskriften "En BLT innehåller...". Som tur är kan vi avgöra i koden om filen/modulen exekveras som ett eget program eller om det importeras som en modul. Om filen importeras får variabeln `__name__` värdet av vad filen heter men om filen exekveras som eget program får variabeln värdet `__main__`. Vi testar att lägga till `print("name: " + __name__)` i slutet av båda filerna och exekvera dem.

```bash
$python3 waysub.py
Testar vår nya modul:
True
name: sandwich
En BLT innehåller ost, bacon, sallad och majonnäs.
name: __main__

$python3 sandwich.py
Testar vår nya modul:
True
name: __main__
```

När vi kör "main.py" skrivs "name: sandwich" ut från modulen och "name: __main__" från "main.py". När vi exekverar "sandwich.py" skrivs "name: __main__" ut. Det vi kan göra med denna kunskapen är att lägga till en if-sats i slutet av "sandwich.py" som kollar om `__name__ == "__main__"`. Om det är sant vet vi att filen exekveras som ett eget program och om vi då lägger vår test kod i if-sats blocket kommer den inte exekveras när filen blir importerad.

```python
# sandwich.py
def create_sandwich_string(ingredients, presentation="Prova vår sandwich som innehåller"):
    """
    Formats ingredience and recipe lists in a representable string.
    """
    number_of_ingredients = len(ingredients)
    if number_of_ingredients == 1:
        return "{} {}.".format(presentation, ingredients[0])

    return "{presentation} {comma_sepearated_elements} och {last_element}.".format(
        presentation=presentation,
        comma_sepearated_elements=", ".join(ingredients[:-1]),
        last_element=ingredients[-1]
    )

if __name__ == "__main__":
    print("Testar vår nya modul:")
    print(create_sandwich_string(["ost"]) == "Prova vår sandwich som innehåller ost.")
    print("name: " + __name__)
```

Testa exekvera båda filerna igen och lägg märke till att det inte längre blir några utskrifter från "sandwich.py" när du exekverar "waysub.py".




Avslutningsvis {#avslutning}
--------------------------------------
Vi har nu kort introducerat moduler i Python. Moduler är ett sätt att kategorisera och dela upp kod för återanvändning och ett bra arbetssätt när mängden av kod växer eller om du vill använda samma kod i olika projekt. För de som vill veta mer om moduler i Python beskrivs moduler i [Python Tutorial Chapter 6 Modules](https://docs.python.org/3/tutorial/modules.html).

Alla kodexempel från denna övningen finns i kursrepot för [python-kursen](https://github.com/dbwebb-se/python/tree/master/example/functions). Kodexemplet innehåller hela exemplet från tidigare övningar och versioner, men uppdelat i modulen `sandwich.py` och huvudprogrammet finns i `waysub.py`.
