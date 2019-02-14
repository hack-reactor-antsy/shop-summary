export default {
  container: {
    display: 'flex',
    position: 'absolute',
    'justify-content': 'center',
    'align-items': 'center',
    'align-content': 'center',
    width: '400px',
    'flex-direction': 'column',
    'flex-wrap': 'wrap'
  },

  text: {
    display: 'block',
    width: '181px',
    overflow: 'hidden',
    'white-space': 'nowrap',
    'text-overflow': 'ellipsis',
  },

  price: {
    color: 'Black',
    'font-size': '17px',
    'font-weight': 'bold'
  },

  column: {
    '-moz-column-count': '2',
    '-webkit-column-count': '2',  
    'column-count': '2',
  },

  handler: {
    display: 'flex',
    'justify-content': 'center'
  },

  button: {
    opacity: '0.7',
    width: '50px',
    height: '50px',
    background: 'white',
    color: '#181818',
    padding: '10px 10px 10px 10px',
    border: '1px solid white',
    margin: '10px'
  },

  shop: {
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
    'align-items': 'center',
    'margin-left': 'auto',
    'margin-right': 'auto',
  }
};