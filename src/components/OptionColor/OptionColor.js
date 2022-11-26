/*import styles from './OptionColor.module.scss';
import clsx from "clsx";
import PropTypes from "prop-types";
import Button from '../Button/Button';


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
              <Button className={clsx(prepareColorClassName(color), color === props.currentColor && styles.active)} onClick={(e) => {
                e.preventDefault();
                setCurrentColor(color);
              }} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OptionColor;*/