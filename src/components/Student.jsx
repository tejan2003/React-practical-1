function Student(props){
    const {name, age} = props;
    
    return(
        <h2>
            Name: {props.name},Age:{props.age}
        </h2>
    );
}
export default Student;