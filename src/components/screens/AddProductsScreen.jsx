import React, { useEffect, useState } from 'react'

/* CSS Styles --------------------- */
import style from './AddProducts.module.css'
import css from 'classnames'

/* Components --------------------- */
import { Button, ImagePreview, FormGroup as InputGroup, SelectBox } from '../'

/* API --------------------- */
import { newProduct } from '../../API'

/* Custom Hooks --------------------- */
import { useCategories } from '../../hooks'

export const AddProducts = () => {

  const { cats } = useCategories();

  const [selectedCat, setSelectedCat] = useState();

  const [price, setPrice] = useState(0);

  const [total, setTotal] = useState(0);

  const [imageList, setImageList] = useState([]);

  const [imageName, setImageName] = useState(null)

  const [data, setData] = useState({
    name: null,
    sku: null,
    qty: 0,
    desc: null,
    img: [],
    price: 0,
    cat: null
  });

  const iva = 0.25;

  const ivaCalc = price * iva;

  useEffect(() => {
    console.log(selectedCat)

  }, [selectedCat])
  

  useEffect(() => {
    if (price < 1) setPrice(0);
    setTotal(parseFloat(price) + parseFloat(ivaCalc))
    setData({
      ...data,
      price: total
    })
  }, [price])

  useEffect(() => {
    setData({
      ...data,
      img: imageName
    })
  }, [imageName])

  const handleOnChange = ({ target }) => {
    setPrice(target.value)
  }

  return (
    <>
      {
        <div className={style.container}>
          <div className={style.title}>
            <h2>Subir nuevo producto</h2>
          </div>
          <div className={style.form_container}>
            <form>

              <InputGroup>
                <label htmlFor="product_name">Nombre del producto: </label>
                <input type="text" name="product_name" id="product_name" onChange={(e) => onDataChange(e, data, setData)} placeholder='Nombre' autoComplete='off' />
              </InputGroup>

              <InputGroup>
                <label htmlFor="product_sku">Código SKU del producto: </label>
                <input type="text" name="product_sku" id="product_sku" onChange={(e) => onDataChange(e, data, setData)} placeholder='SKU' autoComplete='off' />
              </InputGroup>

              <InputGroup>
                <label htmlFor="product_qty">Cantidad:</label>
                <input type="number" name="product_qty" id="product_qty" defaultValue='0' min='1' step='1' onChange={(e) => onDataChange(e, data, setData)} />
              </InputGroup>

              <InputGroup>
                <label htmlFor="product_category">Categoría del producto:</label>
                <SelectBox cats={cats} setSelectedCat={setSelectedCat} />
              </InputGroup>

              <InputGroup>
                <label htmlFor="product_description">Descripción del producto: </label>
                <textarea name="product_description" id="product_description" cols="80" rows="10" onChange={(e) => onDataChange(e, data, setData)} ></textarea>
              </InputGroup>

              <InputGroup>
                <label htmlFor="product_image">Imagen(es) del producto: </label>
                <ImagePreview imageName={imageName} setImageName={setImageName} imageList={imageList} setImageList={setImageList} name='product_image' />
              </InputGroup>

              <div className={style.price_container}>

                <InputGroup>
                  <label htmlFor="product_cost">Precio sin IVA:</label>
                  <input type="number" name="product_cost" id="product_cost" value={price} min='0' step='10' onChange={(e) => handleOnChange(e, data, setData)} />
                </InputGroup>

                <InputGroup>
                  <label htmlFor="product_iva">IVA (25%):</label>
                  <input type="number" name="product_iva" id="product_iva" value={ivaCalc} disabled />
                </InputGroup>

                <InputGroup name='product_price' text='Precio de venta (IVA inc.):' type='number' placeholder='0' disabled={true} value={total} >
                  <label htmlFor="product_price">Precio total (IVA inc.):</label>
                  <input type="number" name="product_price" id="product_price" value={total} onChange={(e) => onDataChange(e, data, setData)} disabled />
                </InputGroup>

              </div>

              <div className={style.buttons_container}>

                <Button variant='save-btn' func={() => newProduct(data)} show={true}><p>Guardar</p></Button>
                <Button variant='reset-btn' show={true}><p>Limpiar</p></Button>
                <Button variant='cancel-btn' show={true}><p>Cancelar</p></Button>

              </div>
            </form>
          </div>
        </div>
      }
    </>
  )
}

const onDataChange = ({ target }, data, setData) => {
  switch (target.name) {

    case 'product_name':
      setData({
        ...data,
        name: target.value
      })
      break;

    case 'product_sku':

      setData({
        ...data,
        sku: target.value
      })
      break;
    case 'product_qty':
      setData({
        ...data,
        qty: target.value
      })
      break;

    case 'product_description':

      setData({
        ...data,
        desc: target.value
      })
      break;
    case 'product_category':

      setData({
        ...data,
        cat: target.value
      })
      break;
  }
}
