import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState } from 'react';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentSizePrice, setCurrentSizePrice] = useState(
    props.sizes[0].additionalPrice
  );

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

  const prepareSizeClassName = size => {
    return styles['size' + size[0] ];
  };

  
  function getPrice() {
    return props.basePrice + currentSizePrice;
  }

  const addToCart = e => {
    e.preventDefault();
    return (
      console.log(`
      Summary
      ===================
      Name: ${props.title}
      Price: ${getPrice()}
      Color: ${currentColor}
      Size: ${currentSize.name}`)
    )
  };

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={`${props.name} ${currentColor} shirt`}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map((size) => {
                return (
                  <li key={size}>
                    <button className={clsx(prepareSizeClassName(size), size === currentSize && styles.active)} onClick={(e) => {
                      e.preventDefault();
                      setCurrentSize(size);
                      setCurrentSizePrice(size.additionalPrice);
                    }}>{size.name}</button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map((color) => {
                return (
                  <li key={color}>
                    <button className={clsx(prepareColorClassName(color), color === currentColor && styles.active)} onClick={(e) => {
                      e.preventDefault();
                      setCurrentColor(color);
                    }}></button>
                  </li>
                );
              })}
            </ul>
          </div>
          <Button onClick={addToCart} className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

export default Product;