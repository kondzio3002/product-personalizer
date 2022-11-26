import styles from './ProductOptions.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

const ProductOptions = props => {

  return (
    <form>
      <OptionSize 
        sizes={props.sizes}
        currentSize={props.currentSize}
        setCurrentSize={props.setCurrentSize}
        setCurrentSizePrice={props.setCurrentSizePrice}
      />
      <OptionColor 
        colors={props.colors}
        currentColor={props.currentColor}
        setCurrentColor={props.setCurrentColor}
      />
      <Button onClick={props.addToCart} className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>    
  )
};

export default ProductOptions;