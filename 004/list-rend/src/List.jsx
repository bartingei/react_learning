
function List(){

    //const names = ["brad", "abel", "baby", "maureen", "ted", "zicke"]

     //const listNames = names.map(name => <li>{name}</li>)


    const fruits = [
        {id: 1, name: "Mango ", calories: 95},
        {id: 2 ,name: "Apple", calories: 45},
        { id: 3, name: "Banana", calories: 105},
        {id: 4, name: "pineaple" ,calories: 145},
        { id: 5, name: "coconut",calories: 37}
    ]


    const listItems = fruits.map(fruit => <li key ={fruit.id}>
                                         {fruit.name}: &nbsp;
                                       <b>{fruit.calories}</b>
                                       </li>)

    //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    //const listLowCalFruits = lowCalFruits.map(lowCalFruit => <li key = {lowCalFruit.id}> {lowCalFruit.name}: &nbsp;  <b>{lowCalFruit.calories}</b>   </li>)

    //const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    //const listHighCalFruits = highCalFruits.map(highCalFruit => <li key = {highCalFruit.id}>   {highCalFruit.name}: &nbsp; <b>{highCalFruit.calories}</b> </li>)

    return(
       <>
      {
        /* <ul>
            {listNames}
        </ul>
         */
      }

        <ol>
            {listItems}
        </ol>
       
        {
            /* 
            <ul>
            {listLowCalFruits}
            </ul>
         */
        }
        {
            /*
            <ul>
            {listHighCalFruits}
            </ul>
         */
        }
       </>
    );
}

export default List