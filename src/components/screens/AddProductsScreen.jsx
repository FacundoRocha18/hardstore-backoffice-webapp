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
      placeholder: '0'
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
                <ImagePreview For='product_image' />
              </FormGroup>
              <div className={style.price_container}>
                <FormGroup name='product_cost' text='Costo del producto' type='number' placeholder='0' />
                <FormGroup name='product_iva' text='IVA del producto' type='number' placeholder='0' disabled={true} />
                <FormGroup name='product_price' text='Precio de venta' type='number' placeholder='0' disabled={true} />
              </div>
              <FormGroup flex={true}>
                <Button variant='save-btn' show={true}><p>Guardar</p></Button>
                <Button variant='cancel-btn' show={true}><p>Cancelar</p></Button>
              </FormGroup>
            </form>
          </div>
        </div>
      }
    </>
  )
}
