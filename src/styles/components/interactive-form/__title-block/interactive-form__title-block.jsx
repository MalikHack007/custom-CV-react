

export function TitleBlock(props){
    const { title, myKey, formState, setFormState } = props;

    const handleClick = () => {
        let newFormState = {...formState, formIndex: myKey};
        setFormState(newFormState);
    }

    return(
        <button type="button" className="interactive-form__title-block" onClick={handleClick}>
            <h2>{`${title}`}</h2>
            <i className="fa-solid fa-eye"></i>
        </button>
    )
}   