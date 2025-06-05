//props are used to pass adguments to child 
//propTypes is used to ensure values passed are of the right data type, if not, a warning is issued
//default props are default values for props incase they are not passed in the parent component

function Student(props){
    return(
        <div className="student">
            <p>name: {props.name}</p>
            <p>age: {props.age}</p>
            <p>student: {props.isStudent}</p>
        </div>
    );
}

export default Student