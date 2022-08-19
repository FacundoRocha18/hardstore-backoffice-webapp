import React, { useState } from 'react'

/* CSS Styles --------------------- */
import style from './inputs.module.css'
import css from 'classnames'

/* Components --------------------- */
import { Button } from '../'

const previewdefault = require('../../public/img/previewdefault.png');

export const ImagePreview = ({ htmlFor }) => {

    const [preview, setPreview] = useState(previewdefault);

    const [imageLoaded, setImageLoaded] = useState(false);

    const handleLoad = ({ target }) => {

        const file = target.files[0];
        const reader = new FileReader();

        reader.onload = ({ target }) => {
            setPreview(target.result);
            setImageLoaded(true);
        }

        reader.readAsDataURL(file);
    }

    const deletePreview = () => {
        setPreview(previewdefault);
        setImageLoaded(false);
    }

    return (
        <>
            <div className={style.preview_container}>
                <label className={css(style.image_preview_label, imageLoaded && style.grow)} htmlFor={htmlFor}>
                    <Button variant='red-btn' show={imageLoaded} func={deletePreview}>
                        <span className="material-icons-round">
                            close
                        </span>
                    </Button>
                    <img
                        src={preview}
                        alt=""
                        id='preview'
                        className={css(style.image_preview, imageLoaded && style.grow)}>
                    </img>
                </label>
                <input type={'file'} name={htmlFor} id={htmlFor} className={style.hidden} onChange={(e) => handleLoad(e)} />
            </div>
        </>
    )
}
