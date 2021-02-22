import React from 'react'
import useSelect from '../hooks/useSelect';
import styles from './Formulario.module.css';
import PropTypes from 'prop-types';

const Formulario = ({guardaCategoria}) => {
    
    const OPCIONES=[
        {value: 'general',label:'General'},
        {value: 'business',label:'Negocios'},
        {value: 'entertainment',label:'Entretenimiento'},
        {value: 'health',label:'Salud'},
        {value: 'science',label:'Ciencias'},
        {value: 'sports',label:'Deportes'},
        {value: 'technology',label:'Tecnologia'}
    ]

    const[categoria,SelectNoticias]=useSelect('general',OPCIONES);

    //Submit al form
    const buscarNoticias=e=>{
        e.preventDefault();
        guardaCategoria(categoria);

    }    

    return (
        <>
            <div className={`${styles.buscador}row`}>
                <div className="col s12 m8 offset-m2">
                    <form
                        onSubmit={buscarNoticias}
                    >
                        <h2 className={styles.heading}>Encuentra Noticias por Categoria</h2>
                        <SelectNoticias />
                        <div className="input-filed col s12">
                            <input 
                                type="submit"
                                className={`${styles['btn-block']} btn-large amber darken-2`}
                                value="Buscar"
                            />
                        </div>
                    </form>
                </div>
            </div>  
        </>
    )
}

export default Formulario

//PropTypes
Formulario.propTypes={
    guardaCategoria: PropTypes.func.isRequired
}
