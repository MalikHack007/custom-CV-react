import { motion } from "motion/react";


export function TitleBlock(props){
    const { title, myKey, formState, setFormState } = props;

    const handleClick = () => {
        let newFormState = {...formState, formIndex: myKey};
        setFormState(newFormState);
    }

    return(
        <button type="button" className="interactive-form__title-block" onClick={handleClick}>
            <h3>{`${title}`}</h3>

            <motion.div initial={{ opacity: 0.5 }}
             whileHover={{ opacity: 1 }}
             transition={{ duration: 0.3 }}>
             <i className="fa-solid fa-eye"></i>
            </motion.div>

        </button>
    )
}   