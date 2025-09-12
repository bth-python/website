---
category: python
author:
    - moc
revision:
  "2020-08-11": (A, moc) Skapad inför V3 HT20.
...
Funktioner, argument och returvärden
==================================

[FIGURE src=image/python/function.png?w=c5 class="right"]

Vi har i tidigare övningar och uppgifter introducerats till variabler, listor, `if`-satser och loopar. Vi ska i denna övning bekanta oss med ett sätt att dela in kod, som gör det möjligt att återanvända delar av program. Vi ser hur vi skapar funktioner, hur vi kan skicka med data till funktioner och hur funktionerna kan skicka tillbaka resultat.



<!--more-->



Vi rekommenderar att du kodar med i denna övning så du själv får känna på hur det är att skriva Python kod.



Introduktion {#introduktion}
--------------------------------------

Funktioner används för att dela upp och kategorisera delar av vår kod som gör det möjligt att återanvända koden på flera ställen i våra program. Funktioner finns i nästan alla programmeringsspråk och är en av de viktigaste verktygen vi har som programmerare. Låt oss se hur en funktion ser ut.

En funktion är kod som ligger i ett *block*. Vi har tidigare sätt block som i `if`-satser, `for` och `while`-loopar. Ett funktionsblock definieras med nyckelordet *def* och tilldelas ett namn som vi kan anropa funktionen med. När vi anropar funktionen exekveras koden som ligger i funktionens block. Låt oss kolla på ett simpelt exempel där vi skriver ut "Hello" från en funktion.
```python
def say_hello():
    print("Hello")

print("Simon says hello")
say_hello()
# Simon says hello
# Hello
```

Nu har vi skapat vår första egna funktion och anropat den med funktionsnamnet följt av parenteser. Parenteserna är inte en del av namnet utan det är en del av syntaxen för att anropa funktioner. Nedan följer ett större exempel på hur man använder och skapar funktioner.



Funktioner {#funktioner}
--------------------------------------
Vi kommer i denna övning utgå ifrån kod utan funktioner och sakta men säkert delar vi upp koden i återanvändbara delar. I exemplen nedan utgår vi från ett problem och bygger vår kod utifrån det samtidigt som vi delar upp och återanvänder vår kod genom att introducera funktioner.

> WaySub har ringt upp dig och vill ha ett sätt att bygga upp en sträng från listor med ingredienser samt recept, så att deras kunder kan kolla upp vad en macka innehåller och även hur de tillagas. De vill att strängen skall ha två delar. Den första skall vara en presentation av vad det är man läser (Recept eller Ingrediens). Den andra delen skall hantera själva listan så att varje steg eller ingrediens separeras med ett `,` förutom det sista som skall vara `och`.

Vilken data får vi i uppgiften?

Det enda dom har skickat är två exempel på hur deras data ser ut.

*Sandwichen innehåller:* `["ost", "bacon", "sallad", "majonnäs"]`.   
*Receptet säger:* `["stek bacon i en stekpanna", "smöra en sida av brödskivan, börja sätta ihop sandwichen", "stek sandwichen med medelvärme i ca 3-5 minuter", "avsluta med att lägga på majonäsen"]`

Låt oss se hur vi översätter detta till pythonkod.

```python
blt_ingredients = ["ost", "bacon", "sallad", "majonnäs"]
blt_recipe = ["stek bacon i en stekpanna", "smöra en sida av brödskivan, börja sätta ihop sandwichen", "stek sandwichen med medelvärme i ca 3-5 minuter", "avsluta med att lägga på majonäsen"]

blt_ingredients_string = ", ".join(blt_ingredients[:-1]) + " och " + blt_ingredients[-1]
blt_recipe_string = ", ".join(blt_recipe[:-1]) + " och " + blt_recipe[-1]

print("En BLT innehåller " + blt_ingredients_string + ".")
print("För den perfekta BLT-mackan skall dessa steg följas: " + blt_recipe_string + ".")

# skriver ut:
# En BLT innehåller ost, bacon, sallad och majonnäs.
# För den perfekta BLT-mackan skall dessa steg följas: stek bacon i en stekpanna, smöra en sida av brödskivan, börja sätta ihop sandwichen, stek sandwichen med medelvärme i ca 3-5 minuter och avsluta med att lägga på majonäsen.
```

Vi noterar att formateringen på raderna 4 och 5 är lika förutom att de använder olika listor. Detsamma gäller raderna 7 och 8. Detta get oss en möjlighet att skapa delar av koden som är återanvändbara med hjälp av funktioner. Hur ser då en funktion ut i Python?

```python
def create_sandwich_string():
  """
  Formats ingredience and recipe lists in a representable string.
  """
  blt_ingredients_string = ", ".join(blt_ingredients[:-1]) + " och " + blt_ingredients[-1]
  print("En BLT innehåller " + blt_ingredients_string + ".")
```

På första raden använder vi `def` för att tala om för Python att vi vill definiera ett namn som vi kan återanvända. Efter `def` skriver vi funktionens namn, som vi använder när vi vill köra den kod som finns inuti funktionen. Efter namnet anger vi `()` för att markera att detta är en funktion. Raden avslutas med `:`, precis som en `if`-sats eller en `for`-loop. Efter att vi har definierat vår funktion lägger vi till en "docstring" som dokumenterar vad funktionen gör.



Argument {#argument}
--------------------------------------
Ovanstående exempel på funktion kommer bara att skriva ut ingredienserna, så än har vi ingen vinst av att skapa funktionen. Men med hjälp av argument till funktionen kan vi använda samma kod för nya recept och ingredienser. Argument är värden som vi skickar in till en funktion. Värderna blir automatiskt till variabler som enbart existerar inuti funktionens kod. I kodexemplet nedan är `ingredients` och `presentation` argument till funktionen. Dessa blir variabler inne i funktionen och bara där.

```python
def create_sandwich_string(ingredients, presentation):
  """
  Formats ingredience and recipe lists in a representable string.
  """
  formated_string = ", ".join(ingredients[:-1]) + ' och ' + ingredients[-1] + '.'
  print(presentation + formated_string)

blt_ingredients = ["ost", "bacon", "sallad", "majonnäs"]
create_sandwich_string(blt_ingredients, "En BLT innehåller ")

blt_recipe = ["stek bacon i en stekpanna", "smöra en sida av brödskivan, börja sätta ihop sandwichen", "stek sandwichen med medelvärme i ca 3-5 minuter", "avsluta med att lägga på majonäsen"]
create_sandwich_string(blt_recipe, "För den perfekta BLT-mackan skall dessa steg följas: ")

grilled_cheese_ingredients = ["vitlökssmör", "riven ost"]
create_sandwich_string(grilled_cheese_ingredients, "En Grilled Cheese innehåller ")

# skriver ut:
# En BLT innehåller ost, bacon, sallad och majonnäs.
# För den perfekta BLT-mackan skall dessa steg följas: stek bacon i en stekpanna, smöra en sida av brödskivan, börja sätta ihop sandwichen, stek sandwichen med medelvärme i ca 3-5 minuter och avsluta med att lägga på majonäsen.
# En Grilled Cheese innehåller vitlökssmör och riven ost.
```

Vi har nu kapslat in vår kod för att omvandla listorna till fina strängar. Denna koden kan nu även återanvändas för nya recept och ingredienser. Men kan vi utöka funktionaliteten lite till? Låt oss titta på ett sådant exempel.

> WaySub hittar hela tiden på nya recept och vill ha samma presentation för mackor som de inte har namngett.

Vi måste nu skriva om funktionen lite grann då vi vill slippa att skriva in samma presentation flera gånger. Vi kommer därför ändra om argumentet `presentation`. I och med att WaySub vill sluta upprepa sig kommer vi ändra det till ett fördefinierat värde som argumentet får om man inte anger den. Det fördefinierade värdet definieras med ett lika-med tecken (`=`) efter argumentet. Vi kan nu använda funktionen med antingen ett eller två argument. Om vi använder ett argument får variabeln `presentation` värdet `"Prova vår nya sandwich som innehåller "`.


```python
def create_sandwich_string(ingredients, presentation="Prova vår nya sandwich som innehåller "):
  """
  Formats ingredience and recipe lists in a representable string.
  """
  formated_string = ", ".join(ingredients[:-1]) + ' och ' + ingredients[-1] + '.'
  print(presentation + formated_string)

blt_ingredients = ["ost", "bacon", "sallad", "majonnäs"]
create_sandwich_string(blt_ingredients, "En BLT innehåller ")

unknown_ingredients = ["sallad", "tonfiskröra"]
create_sandwich_string(unknown_ingredients)

# skriver ut:
# En BLT innehåller ost, bacon, sallad och majonnäs.
# En Prova vår nya sandwich som innehåller sallad och tonfiskröra.
```



Returvärden {#returvarden}
--------------------------------------
Det enda vi gör i vår funktion är att skriva ut ett meddelande som enbart finns inne i funktionen. För att resten av vårt program ska kunna ta del av det beräknade värdet måste vi skicka tillbaka det till programmet, eller som det heter inom programmering: returnera. Vi använder oss av konstruktionen `return` för att skicka tillbaka värdet. Här kan vi också passa på att utskriften WaySub har klagat på som inträffar om det bara finns ett steg i receptet.

```python
def create_sandwich_string(ingredients, presentation="Prova vår sandwich som innehåller "):
  """
  Formats ingredience and recipe lists in a representable string.
  """
  number_of_ingredients = len(ingredients)
  if number_of_ingredients == 1:
    result = presentation + ingredients[0] + "."
    return result

  formated_string = ", ".join(ingredients[:-1]) + ' och ' + ingredients[-1] + '.'
  result = presentation + formated_string
  return result

blt_ingredients = ["ost", "bacon", "sallad", "majonnäs"]
blt_ingredients_string = create_sandwich_string(blt_ingredients, "En BLT innehåller ")
```

Notera att vi inte behöver ha en `else`-sats i vår funktion då den kommer till at avbrytas när ett värde har returnerats. Vår nya variabel `blt_ingredients_string` innehåller nu värdet från variabeln `result` inne i funktionen.


Formattering för bättre utskrifter {#format}
--------------------------------------
Vi har ett fungerande program men det finns nästan alltid små detaljer vi kan förbättra. I detta fallet tycker jag att det blir svårt att se hur strängen kommer att se ut, så låt oss titta på ett sätt att få bättre utskrifter från våra program. Vi ska använda Pythons strängformaterare `format`. Vi använder `{}` för de värden vi vill ersätta med beräknade värden. Sen tilldelar vi ett namn så vi kan tilldela rätt värde till den del av strängen vi vill ersätta. Inom parentesen anger vi vilka värden vi vill koppla till formateringsvariablerna `{presentation}`, `{comma_sepearated_elements}` och `{last_element}`.

```python
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

`format` hanterar alla värden som strängar så man bl.a. slipper använda sig av `str(siffra)`. Den har även funktionalliteter som kan bestämma mängden decimaler som skall visas från ett flyttal och mycket mer. Men vi nöjer oss med detta enkla exempel än så länge, vill man läsa på om strängformattering är [pythons dokumentation](https://docs.python.org/3.5/library/string.html#format-string-syntax) ett bra ställe att börja.



Avslutningsvis {#avslutning}
--------------------------------------
Funktioner är en av de viktigaste byggstenarna i programmering. Funktioner ger oss möjligheten att kapsla in kod som vi kan återanvända. Vi kan dessutom ge logiska namn åt delar av koden som gör att utomstående mycket lättare kan förstå hur du har tänkt när du skrev programmet.

Alla kodexempel från denna övningen finns i kursrepot för [python-kursen](https://github.com/dbwebb-se/python/tree/master/example/functions/functions_v2.py). Funktionsnamnen har ändrats i kodexemplett då funktioner i samma modul måste ha unika namn.
