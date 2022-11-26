import styles from './Product.module.scss';
import { useMemo, useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductOptions from '../ProductOptions/ProductOptions';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentSizePrice, setCurrentSizePrice] = useState(
    props.sizes[0].additionalPrice
  );
  
  const getPrice = useMemo(() => {
    return (props.basePrice + currentSizePrice);
  }, [props.basePrice, currentSizePrice]);

  const addToCart = e => {
    e.preventDefault();
    return (
      console.log(`
      Summary
      ===================
      Name: ${props.title}
      Price: ${getPrice}
      Color: ${currentColor}
      Size: ${currentSize.name}`)
    )
  };

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} color={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <ProductOptions 
          sizes={props.sizes}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          setCurrentSizePrice={setCurrentSizePrice}
          colors={props.colors}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          addToCart={addToCart}
        />
      </div>
    </article>
  )
};

export default Product;