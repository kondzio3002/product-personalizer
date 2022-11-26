import styles from './OptionColor.module.scss';
import clsx from 'clsx';

const OptionColor = props => {

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

  return (
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
  )
};

export default OptionColor;