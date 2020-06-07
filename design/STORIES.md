# Sprint 1:
In de eerste fase wordt 'Weerwolven' opgezet met alleen maar Burgers die overdag kunnen stemmen op wie er dood gaat.
- als gebruiker kan ik een weerwolven game opzetten met door mij gekozen parameters met mij als admin
- als admin kan ik een game 'nu' starten
- als gebruiker kan ik lid worden van een of meerdere game's zonder in te loggen
- als gebruiker krijg ik dan op de start datum een 'geheim' karakter Burger toegewezen
- als gebruiker kan ik elke dag tussen 07:00 en 23:00 een stem uitbrengen
- als gebruiker ontvang ik elke dag om 17:00 een melding met de uitslag van de stemming
- als gebruiker krijg ik een melding elke dag: om 07:00 wordt er iemand dood verklaart (exclusief start dag)
- als gebruiker mag ik niet meer stemmen wanneer ik dood ben
- als gebruiker kan ik niet dubbel stemmen
- als gebruiker kan ik na het oordeel niet van stem wisselen voor die dag
- als gebruiker kan ik de tussentijdse uitslag van een oordeel inzien

## UML
Wat beschrijvingen van objecten met methodes en velden.

### Speler
- naam
- rol (Burger)
- aura (Goed/Slecht/Neutraal)
- groep (Dorp/Solo/Weerwolf/Sekte)
- status (Dood/Levend)

## HTTP API
Method | Endpoint | Body | Description
---|---|---|---
POST | /api/game/create | REQUEST JSON{ startdate, roles } |create a game
PUT | /api/game/update/{id} | REQUEST JSON{ startdate, roles }| for example start the game 'now'
GET | /api/game/join/{token} | RESPONSE JSON { ok/nok } | join the game (only works if the game has not started yet)
GET |  /api/game/get/{id} | RESPONSE JSON { startdate, roles, statusinfo }| get information about the game and if you are member of the game: the current status. Also includes character specific information.
POST | /api/game/action/{id} | REQUEST JSON { actiontype, actionobject } | do an action as player, first version only 'vote' is supported

# Sprint 2:
In de tweede fase wordt het karakter 'Weerwolf' toegevoegd. Dit karakter heeft een eigenschap die hij overdag kan gebruiken naast het stemmen om iemand om het leven te brengen. Meerdere weerwolven moet het samen eens worden over wie dat wordt.
- als gebruiker heb ik een kans om weerwolf toegewezen te krijgen
- als weerwolf kan ik elke dag tussen 07:00 en 23:00 mijn karakter actie inzetten: stemmen op wie er in de komende nacht dood gaat
- als weerwolf kan ik zien wat de andere weerwolven hebben gestemd
- als weerwolf kan ik zien wie de andere weerwolven zijn
- als de weerwolven het niet eens worden of ze stemmen niet dan wordt er een willekeurig karakter uit het dorp of neutraal vermoord
