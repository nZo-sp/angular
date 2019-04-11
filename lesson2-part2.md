## Cosa vedremo oggi

### Pipe _(su interpolazione)_
#### Introduzione
- Pattern
#### Esempi live coding
- Pipe reversing stringhe
- Pipe cambiamenti casing stringhe con parametro
#### Riferimenti in rete
angular.io

### Promise
#### Introduzione
- Design pattern (operazione a completamento deferito, esito a due stati)
#### Esempi live coding
- Singola `Promise`
- `Promise` multiple da attendere tutte
- `Promise` da attendere in catena
- `Promise` da attendere in catena con riconoscimento dell'eventuale punto di rottura
- Implementazione `finally` su `Promise` ES6 (in cui manca, almeno per ora)
#### Riferimenti in rete
- https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Promise

### Observable
#### Introduzione
- Design pattern
- Specializzazioni utili riguardo stato dei dati emessi
- Hot vs. Cold
- Alcuni operatori comuni  
>map
switchMap
filter
from / of
tap  
throttleTime
debounceTime

- Catene, cioè operatore Pipe su Observable  
(_no, non quello dell'interpolazione_)
- Ripetizione e condivisione (parti di) catene
#### Esempi live coding
- ...altro
- Ricezione eventi resize da processare con "calma"

#### Riferimenti in rete
- https://angular.io/guide/rx-library
- http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html
- https://medium.com/@luukgruijs/understanding-rxjs-subjects-339428a1815b
- https://medium.com/@luukgruijs/understanding-rxjs-behaviorsubject-replaysubject-and-asyncsubject-8cc061f1cfc0
- https://www.learnrxjs.io/operators/
- https://itnext.io/the-magic-of-rxjs-sharing-operators-and-their-differences-3a03d699d255

## Link utili per le sessioni live coding
- https://jsonplaceholder.typicode.com/users
- https://angular.io/guide/http
