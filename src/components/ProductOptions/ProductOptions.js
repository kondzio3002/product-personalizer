import styles from './ProductOptions.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';

const ProductOptions = props => {

  const prepareSizeClassName = size => {
    return styles['size' + size[0] ];
  };

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

  return (
    <form>
      <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
          {props.sizes.map((size) => {
            return (
              <li key={size}>
                <button className={clsx(prepareSizeClassName(size), size === props.currentSize && styles.active)} onClick={(e) => {
                  e.preventDefault();
                  props.setCurrentSize(size);
                  props.setCurrentSizePrice(size.additionalPrice);
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
                <button className={clsx(prepareColorClassName(color), color === props.currentColor && styles.active)} onClick={(e) => {
                  e.preventDefault();
                  props.setCurrentColor(color);
                }}></button>
              </li>
            );
          })}
        </ul>
      </div>
      <Button onClick={props.addToCart} className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>    
  )
};

export default ProductOptions;