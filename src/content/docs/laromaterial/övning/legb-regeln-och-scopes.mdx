---
category: python
author:
    - moc
revision:
  "2020-08-13": (A, moc) Skapad inför V3 HT20.
...
LEGB regeln och scopes i Python
==================================

Vi har i tidigare övningar och uppgifter introducerats till variabler, funktioner, `if`-satser och loopar. Vi ska i denna övning gå djupare in på hur funktioner och variabler kan påverka varandra.

<!--more-->

Vi rekommenderar att du kodar med i denna övning så du själv får känna på hur det är att skriva Python kod.


Introduktion {#introduktion}
--------------------------------------

I ett programmeringsspråk innebär “scope” den tillgänglighet och levnadstid som variabler, funktioner och parametrar har. Python följer det så kallade LEGB -regeln som är namngett efter de första bokstäverna från dess egna scopes (Local, Enclosing, Global och Built-in).

Regeln fungerar som en slags prioritering för namnuppsökning och bestämmer ordningen Python letar upp variabler. Om man till exempel refererar till ett visst namn kommer Python att titta upp det namnet i följd av det lokala, inneslutande, globala och inbyggda scopen.


Det globala scopet {#det-globala-scopet}
--------------------------------------
När man deklarerar en variabel utanför en funktion kommer det att bli en global variabel. Detta betyder att man kan nå den från vart man än befinner sig i programmet.

Låt oss titta på hur en global variabel kan skapas i Python:

```python
x = "global"

def foo():
    print("x inside:", x)

foo()
print("x outside:", x)
# skriver ut:
# x inside: global
# x outside: global
```

I koden ovan skapade vi `x` som är en global variabel och funktionen `foo()` som skall skriva ut den. Det fungerar fint att läsa värdet men vad skulle hända om vi vill ändra på `x` inuti i funktionen?

Låt oss testa:

```python
x = "global"

def foo():
    x = x * 2
    print(x)

foo()
# skriver ut:
# UnboundLocalError: local variable 'x' referenced before assignment
```

Detta ger oss ett felmeddelande som säger att `x` inte har blivit definierat än. Anledningen till detta är att Python kommer behandla `x` som en lokal variabel. Vi lämnar detta problem så länge och återkommer om hur man kan lösa problemet lite senare.

Det lokala scopet {#det-lokala-scopet}
--------------------------------------

Det lokala (eller funktions) scopet skapas vid [`lambda`](https://docs.python.org/3/tutorial/controlflow.html#lambda-expressions) och funktions -anrop. Tänk dig att varje funktion har sin egna lilla bubbla och när den förstörs kommer alla namn och värden att försvinna.

Vi tar en närmare titt på hur man en lokal variabel ser ut och vart den kan användas:

```python
def foo():
    y = "local"

foo()
print(y)
# skriver ut:
# NameError: name 'y' is not defined
```
```python
def foo():
    y = "local"
    print(y)

foo()
# skriver ut:
# local
```
```python
y = "global"

def foo():
    y = "local"
    print("y local:", y)

foo()
print("y global:", y)
# skriver ut:
# y local: local
# y global: global
```

Vi ser att det globala scopet inte kan få tillgång till vår lokala variabel `y` då den kan endast läsas inuti i `foo()`. Vi ser också att man kan ha samma variabelnamn med olika värden så länge de ligger i olika scopes.

I det första exemplet kände vår funktion igen `x` från det globala scopet men i det andra försökte vi även att definiera ett lokalt `x`, vilket betyder att vi inte längre har tillgång till den globala variabeln när vi försökte multiplicerade den.

Normalt sätt är det en "bad practice" att ändra värden på globala variabler inuti i lokala scopes, då det föredras att skicka in det som en parameter och sedan returnera den. Men om man behöver göra det så finns nyckelordet `global`. Detta låter oss att använda och skriva över globala variabler utanför vårat lokala scope.   
Så våran fix skulle likna:

```python
x = "global"

def foo():
    global x
    x = x * 2
    print("x inside:", x)

foo()
print("x outside:", x)
# skriver ut:
# x inside: globalglobal
# x outside: globalglobal
```


Det inbyggda scopet {#det-inbyggda-scopet}
--------------------------------------
Det inbyggda scopet fungerar lite annorlunda och innehåller alla specialreserverade nyckelord. Man kan kalla på dessa vart än man befinner sig i programmet.

Nyckelord är helt enkelt speciella reserverade ord. De har specifika ändamål och kan **inte** skrivas över eller användas för något annat syfte. En lista på alla nyckelord kan hittas i [Pythons dokumentation](https://docs.python.org/3/reference/lexical_analysis.html#keywords).


Det inkapslade scopet {#det-inkapslade-scopet}
--------------------------------------
Det inkapslade (eller icke-lokala) scopet kan vara lite förvirrande till en början och inträffar när man jobbar med nestade funktioner. En nestad funktion är en funktion som är definierad inuti i en annan och, används främst till att skapa closures. Closures är inget ni behöver kunna men om man är nyfiken finns det mer information [här](https://www.learnpython.org/en/Closures).

En nestad funktion kan se ut såhär:

```python
def outer():
    x = "local"

    def inner():
        nonlocal x
        x = "nonlocal"
        print("x inner:", x)

    inner()
    print("x outer:", x)

outer()
# skriver ut:
# x inner: nonlocal
# x outer: nonlocal
```

Vi börjar med att kolla vad som händer när vi kallar på `outer()`. Precis som innan kommer det att skapas ett lokalt scope. Det kommer även att agera som ett icke-lokalt scope för `inner()` då variabler som definieras i den yttre varken är dess globala eller lokala värden. Relationen mellan dessa fungerar på samma sätt som den mellan de globala och lokala scopes. Inkapslade variablerna kan nås från dess inre funktioner men inte tilldelas eller uppdateras. Vill man ändra dessa måste man använda nyckelordet `nonlocal`. Detta fungerar precis som med `global`, definiera en lista med namn som kommer att behandlas som icke-lokala. 

Man kan inte kalla på `inner()` utanför det inkapslade scopet.



Avslutningsvis {#avslutning}
--------------------------------------
Scope är något som förekommer i de flesta programmeringsspråk men kan ha olika typer och regler. Men nu vet du hur Python hanterar sina variabler, vad LEGB-regeln är och hur du ska använda de globala och icke-lokala nyckelorden. Du kan enkelt manipulera variabler i nestade funktioner utan problem.

Alla kodexempel från denna övningen finns i kursrepot för [python-kursen](https://github.com/dbwebb-se/python/tree/master/example/scope) och här på [dbwebb](https://dbwebb.se/repo/python/example/scope). Funktions- och variabelnamnen har ändrats i kodexemplen då funktioner i samma modul måste ha unika namn.
