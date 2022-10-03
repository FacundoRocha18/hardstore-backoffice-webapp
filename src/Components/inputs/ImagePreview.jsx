import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

/* CSS Styles --------------------- */
import style from './ImagePreview.module.css'
import css from 'classnames'

/* Components --------------------- */
import { Button } from '../'

export const ImagePreview = ({ setImageName, imageList, setImageList, name, required }) => {

    const [show, setShow] = useState(false)

    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const [isListFull, setIsListFull] = useState(false);

    useEffect(() => {
        if (imageList.length < 6) {
           return setIsListFull(false)
        }
        setIsListFull(true);
    }, [imageList])


    const handleLoad = ( { target } ) => {

        const [file] = target.files;
        const reader = new FileReader();

        if ( file ) {
            setImageName(file.name);
        }

        console.log(file)

        reader.onload = ({ target }) => {
            const exists = imageList.find((x) => x === target.result)

            if (!exists && !isListFull) {
                setImageList([
                    target.result,
                    ...imageList
                ]);
                return setIsImageLoaded(true);
            }

            setShow(true)
            setTimeout(() => {
                setShow(false)
            }, 3000);
        }

        reader.readAsDataURL(file)
    }

    const deleteImage = (item) => {

        const exists = imageList.find((x) => x === item);

        if (exists) setImageList(imageList.filter((x) => x !== item))
        if (imageList.length <= 1) setIsImageLoaded(false);
    }

    return (
        <>
            {
                <div className={style.preview_container}>
                    <div className={style.images_container}>
                        {
                            imageList.map((item, index) => (
                                <div key={index} className={style.image_card}>
                                    <Button variant='delete-btn' show={isImageLoaded} func={() => deleteImage(item)}>
                                        <span className="material-icons-round">
                                            close
                                        </span>
                                    </Button>
                                    <img
                                        src={item}
                                        alt={item.name}
                                        id='preview'
                                        className={css(style.image_preview, !isImageLoaded && style.hidden, isImageLoaded && style.grow)}>
                                    </img>
                                </div>
                            ))
                        }
                        <div className={css(isListFull && style.hidden, style.image_card, style.no_background)}>
                            <label className={css(style.image_preview_label, isListFull && style.hidden)} htmlFor={name}>
                                <span className="material-icons-round">
                                    add
                                </span>
                            </label>
                        </div>
                    </div>

                    <input type={'file'} accept={'image/*'} name={name} id={name} className={style.hidden} onChange={(e) => handleLoad(e)} required={required} />
                    <label className={css(style.alert_label, style['warning'], !show && style.hidden)}>
                        No se pueden subir imagenes repetidas
                    </label>
                </div>
            }
        </>
    )
}


ImagePreview.propTypes = {
    imageList: PropTypes.array.isRequired,
    setImageList: PropTypes.func.isRequired
}