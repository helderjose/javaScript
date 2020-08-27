# promise

1. firstPromise
1. declaration
1. chaining-promises
1. async-await  - na pasta async-await


https://alligator.io/js/promises-es6/
https://alligator.io/js/promise-all-promise-race/


Fazer:
usar promise.all, executar três funções assíncronas (e em qualquer ordem) e executar
um bloco de código só quando as três terminarem de serem executadas,

exemplo de Promise.all
javaScript/exemplos/async-await/multiple-steps-parallel.js


Promise.all returns an array with the resolved values once all the passed-in promises have resolved.

Prmise.all com reject em uma das chamadas.

Prmise tratando erro de uma chamada (segundo parâmetro da promise) e outra caindo no catch

Fazer:
promiseA, promiseB, usar promise.all e simular erro em uma delas (fazer teste de várias situações)