Hola Santiago,
Mis observaciones:

El primer error es que tienes un componente Item fuera del map en el return del componente ItemList. Debes eliminarlo.
El array después del useEffect si te fijas te lanza un warning, esto es por el console.log al state item, tienes dos opciones:
Colocas Items dentro de los corchetes ó 
Eliminas el console.log al state Items 
Lo que se coloca dentro del corchete, solo como información, es lo que useEffect debe estar atento para renderizarse, ejemplo, si colocaras allí Items, cada vez que cambie el valor de ese state volverá a renderizar.
Tomando como base tu comentario en el código, realmente tienes que agregar el state que quieres que "observe" el useEffect, no eliminar los corchetes :) 
Recuerda que los containers son los que se encargan de manejar la lógica y los componentes las vistas por lo que:
La lógica relacionada a la promesa debe ir en el itemListContainer
En su return llamas al componente itemList y le pasas como props el array de objetos obtenido
Y en el return del itemList, tal como lo tienes ahora, el map de este array, llamando al componente Item y pasando como props cada objeto de este array.
Puedes dejar de lado lo relacionado al itemCount en el itemListContainer por el momento, pues ya no es necesario ahí. Será usado en el itemDetail.

Recuerda revisar la devolución del anterior desafío. Vas por buen camino, hay que corregir eso pequeños detalles y estaríamos listos con esta entrega.


Si te fijas en el enunciado del desafío habla de que la función addToCart, debería ser una función callback, que son las funciones que recibe por props un hijo desde el padre, para esto por ejemplo podrías crear un state en el padre, y pasar el set / función modificadora como props al hijo, y en esta función addToCart, usarla para guardar ese valor.