import styles from './Hero.module.scss';
import photo  from '../../images/photo1.jpg';

const Hero = () => {
  return (
      <img className={styles.photo} src={photo} alt="city"></img>
    
  )
}

export default Hero;