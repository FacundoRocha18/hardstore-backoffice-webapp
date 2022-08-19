import React, { useEffect, useState } from 'react'

/* CSS Styles --------------------- */
import style from './AddProducts.module.css'
import css from 'classnames'

/* Components --------------------- */
import { Button, ImagePreview, FormGroup } from '../'

export const AddProducts = () => {

  const fields = [
    {
      name: 'product_name',
      text: 'Nombre del producto: ',
      type: 'text',
      placeholder: 'Nombre'
    },
    {
      name: 'product_sku',
      text: 'Código SKU del producto: ',
      type: 'text',
      placeholder: 'SKU'
    },
    {
      name: 'product_stock',
      text: 'Cantidad entrante del producto: ',
      type: 'number',
      placeholder: 'Cantidad'
    },
    {
      name: 'product_name',
      text: 'Nombre del producto',
      type: 'text',
      placeholder: 'Nombre'
    }
  ]

  return (
    <>
      {
        <div className={style.container}>
          <div className={style.title}>
            <h2>Subir nuevo producto</h2>
          </div>
          <div className={style.form_container}>
            <form >
              {
                fields.map(({ name, text, type, placeholder }, index) => (
                  <FormGroup
                    key={index} 
                    name={name}
                    text={text}
                    type={type}
                    placeholder={placeholder}
                  />
                ))
              }
              <FormGroup>
                <label htmlFor="product_description">Descripción del producto: </label>
                <textarea name="product_description" id="product_description" cols="80" rows="10"></textarea>
              </FormGroup>
              <FormGroup>
                <label htmlFor="product_image">Imagen del producto: </label>
                <ImagePreview htmlFor='product_image' />
              </FormGroup>
              <div className={style.price_container}>
                <FormGroup name='product_cost' type='number' placeholder='0' />
                <FormGroup name='product_cost' type='number' placeholder='0' />
                <div className={style.form_group}>
                  <label htmlFor="product_iva">IVA: </label>
                  <input type="number" name="product_iva" id="product_iva" disabled readOnly />
                </div>
                <div className={style.form_group}>
                  <label htmlFor="product_price">Precio de venta: </label>
                  <input type="number" name="product_price" id="product_price" />
                </div>
              </div>
              <div className={style.form_group}>

              </div>
            </form>
          </div>
        </div>
      }
    </>
  )
}
