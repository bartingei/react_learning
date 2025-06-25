import {useState} from 'react'


function Arr(){
        const students = [
        {id: 1, name: "john"},
        {id: 2, name: "paul"},
        {id: 3, name: "peter"},
        {id: 4, name: "jane"},
        {id: 5, name: "bri"},
    ]

    const [items, setItems] = useState(["bags", "toys", "controllers", "remote" ]);
    const [newItem, setNewItem] = useState("");
    

    const [courses, setCourses] = useState(["Algebra", "physics", "English", "Software Engineering"]);
    const [newCourse, setNewCourse] = useState('');

    const [cars, setCars] = useState(["Toyota","Ford", "Honda", "Mercedes-Benz","BMW"]);
    const [newCar, setNewCar] = useState("");

    const [carts, setCarts] = useState(["These are the cart items"]);
    const [newCartItem, setNewCArtItem] = useState("");


    function handleInputChange(event){
        setNewItem(event.target.value)
    }

    function handleCourseInputChange(event){
        setNewCourse(event.target.value)
    }

    function handleCourseAdd(){
        if(newCourse.trim() !== ''){
            setCourses(c => [...c, newCourse])
            setNewCourse("")
        }

    }

    function handleAddButton(){
        if(newItem.trim !== ''){
            setItems(i => [...i, newItem ]);
            setNewItem("");
        }
    }

    function handleCarChange(event){
        setNewCar(event.target.value)
    }

    function handleAddCar(){
        if(cars.trim() !== ""){
            setCars(c => [...c, newCar])
            setNewCar("")
        }
    }

    function handleAddToCart(item){
        setCarts(c => [...c, item])

    }

    return(
        <>
        <ul>
            <h1 className='students'>Student names</h1>
            {students.map((student, id) => <li key={id}>
                {student.name}
                
            </li>)}
        </ul>
        <hr></hr>

        <ul>
            <h1 className='items'>Items </h1>
            {items.map((item, index) => <li key={index}>
                {item}
                <button onClick={() => handleAddToCart(item)}>Add to cart</button>
            </li>)}
        </ul>

        <p>
            <input 
            id="addedItem"
            value={newItem}
            onChange={(event) => handleInputChange(event)}
            type="text" />
            <button
            onClick={handleAddButton}
            >Add</button>
        </p>
        <hr />

        <ul>
            <h1 className="courses">Courses</h1>
            {courses.map((course, index) => <li key={index}>{course}</li>)}
        </ul>

        <p>
        <input type="text"
            value={newCourse}
            id="newCourse"
            onChange={(event) => handleCourseInputChange(event)}
        />
        <button onClick={handleCourseAdd}>Add</button>
        </p>
        <hr />

        <ul>
            <h1 className='cars'>Cars</h1>
            {cars.map((car, index) => <li key={index}>{car}</li>)}
            <p>
                <input type="text"
                id="newCar"
                onChange={(event) => handleCarChange(event)}
                value={newCar}
                />
                <button onClick={handleAddCar}>Add</button>
            </p>

        </ul>
        <hr />
        
        <h1 className='cart'>Cart</h1>
        <ul>
            {carts.map((cart, index) => <li key={index}>{cart}</li>)}
        </ul>
        </>
    );
}

export default Arr;