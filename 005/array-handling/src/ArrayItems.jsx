
function Arrays(){
    const listItems = ["computer", "laptop", "SmartPhone", "Controller", "Keyboard", 'Mouse']

    const displayList = listItems.map(listItem => <li>{listItem}</li>)

    const coursesOffered = [
        {id: 1, courseName: "Statistics", numberOfTimes: 3},
        {id:2, courseName:"calculus", numberOfTimes: 3},
        {id:3, courseName:"Object Oriented Programming", numberOfTimes:2},
        {id:4, courseName: "Web based Programming", numberOfTimes:2}, 
    ]

    const listCoursesOffered =  coursesOffered.map(
        courseOffered => <li key={courseOffered.id}>
            <strong>{courseOffered.courseName}</strong> -,
            {courseOffered.numberOfTimes} times,
        </li>
    )

    return(
        <>
        <ol>
            {displayList}
            
        </ol>
        <ul>
            {listCoursesOffered}
        </ul>
        
        </>
    );
}

export default Arrays 