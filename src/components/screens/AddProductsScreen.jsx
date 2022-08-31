import React, { useEffect, useState } from 'react'

/* CSS Styles --------------------- */
import style from './AddProducts.module.css'
import css from 'classnames'

/* Components --------------------- */
import { Button, ImagePreview, FormGroup as InputGroup } from '../'

export const AddProducts = () => {

  const [price, setPrice] = useState(0);

  const [quantity, setQuantity] = useState(1);

  const [total, setTotal] = useState(0);

  const iva = 0.25;

  const ivaCalc = price * iva;

  useEffect(() => {
    if (price < 1) setPrice(0);
    setTotal(parseFloat(price) + parseFloat(ivaCalc))
  }, [price])


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
    }
  ]

  const handleOnChange = ({ target }) => {
    setPrice(target.value)
  }

  const onQuantityChange = ({ target }) => {
    setQuantity(target.value)
  }

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
                  <InputGroup
                    key={index}
                    name={name}
                    text={text}
                    type={type}
                    placeholder={placeholder}
                  />
                ))
              }
              <InputGroup>
                <label htmlFor="product_qty">Cantidad:</label>
                <input type="number" name="product_qty" id="product_qty" value={quantity} min='1' step='1' onChange={(e) => onQuantityChange(e)} />
              </InputGroup>
              <InputGroup>
                <label htmlFor="product_description">Descripción del producto: </label>
                <textarea name="product_description" id="product_description" cols="80" rows="10"></textarea>
              </InputGroup>
              <InputGroup>
                <label htmlFor="product_image">Imagen(es) del producto: </label>
                <ImagePreview For='product_image' />
              </InputGroup>
              <div className={style.price_container}>
                <InputGroup>
                  <label htmlFor="product_cost">Precio sin IVA:</label>
                  <input type="number" name="product_cost" id="product_cost" value={price} min='0' step='10' onChange={(e) => handleOnChange(e)} />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="product_iva">IVA (25%):</label>
                  <input type="number" name="product_iva" id="product_iva" value={ivaCalc} disabled />
                </InputGroup>
                <InputGroup name='product_price' text='Precio de venta (IVA inc.):' type='number' placeholder='0' disabled={true} value={total} >
                  <label htmlFor="product_price">Precio total (IVA inc.):</label>
                  <input type="number" name="product_price" id="product_price" value={total} disabled />
                </InputGroup>
              </div>
              <div className={style.buttons_container}>
                <Button variant='save-btn' show={true}><p>Guardar</p></Button>
                <Button variant='cancel-btn' show={true}><p>Cancelar</p></Button>
              </div>
            </form>
          </div>
        </div>
      }
    </>
  )
}
