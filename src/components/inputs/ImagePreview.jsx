import React, { useState } from 'react'

/* CSS Styles --------------------- */
import style from './inputs.module.css'
import css from 'classnames'

/* Components --------------------- */
import { Button } from '../'

export const ImagePreview = ({ For }) => {

    const [show, setShow] = useState(false)

    const [previews, setPreview] = useState([]);

    const [imageLoaded, setImageLoaded] = useState(false);

    const handleLoad = ({ target }) => {

        const [file] = target.files;
        const reader = new FileReader();

        console.log(file)

        reader.onload = ({ target }) => {
            const exists = previews.find((x) => x === target.result)

            console.log(exists)

            if (!exists) {
                setPreview([
                    target.result,
                    ...previews
                ]);
                return setImageLoaded(true);
            }

            setShow(true)
            setTimeout(() => {
                setShow(false)
            }, 3000);
        }

        reader.readAsDataURL(file)
    }

    const deletePreview = (item) => {

        const exists = previews.find((x) => x === item);

        if (exists) setPreview(previews.filter((x) => x !== item))
        if (previews.length <= 1) setImageLoaded(false);
    }

    return (
        <>
            {
                <div className={style.preview_container}>
                    <label className={css(style.image_preview_label)} htmlFor={For}>
                        <span className="material-icons-round">
                            add
                        </span>
                    </label>
                    <div className={style.images_container}>
                        {
                            previews.map((item, index) => (
                                <div key={index} className={style.image_card}>
                                    <Button variant='red-btn' show={imageLoaded} func={() => deletePreview(item)}>
                                        <span className="material-icons-round">
                                            close
                                        </span>
                                    </Button>
                                    <img
                                        src={item}
                                        alt="Imagen"
                                        id='preview'
                                        className={css(style.image_preview, !imageLoaded && style.hidden, imageLoaded && style.grow)}>
                                    </img>
                                </div>
                            ))
                        }
                    </div>
                    <input type={'file'} name={For} id={For} className={style.hidden} onChange={(e) => handleLoad(e)} />
                    <label className={css(style.alert_label, style['warning'], !show && style.hidden)}>
                        No se pueden subir imagenes repetidas
                    </label>
                </div>
            }
        </>
    )
}
