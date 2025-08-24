

export function TitleBlock(props){
    const { title, myKey, formState, setFormState } = props;

    const handleClick = () => {
        let newFormState = {...formState, formIndex: myKey};
        setFormState(newFormState);
    }

    return(
        <button onClick={handleClick}>
            <h2>{`${title}`}</h2>
            <i class="fa-solid fa-eye"></i>
        </button>
    )
}   