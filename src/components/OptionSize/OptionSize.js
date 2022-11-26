import styles from './OptionSize.module.scss';
import clsx from 'clsx';

const OptionSize = props => {

  const prepareSizeClassName = size => {
    return styles['size' + size[0] ];
  };

  return (
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
  )
};

export default OptionSize;