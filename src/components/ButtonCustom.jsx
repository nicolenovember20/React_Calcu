import Button from 'react-bootstrap/Button'

function ButtonCustom({ variant, value, onClick }) {
  return (
    <Button type='button' variant={variant} className='fs-1' onClick={onClick}>{value}</Button>
  );
}

export default ButtonCustom;