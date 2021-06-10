/*=== MODULES  =========================*/
import React from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';

/*=== Fonctionnal Component ===*/
function Input() {
      return (
        <form noValidate autoComplete="off">
        <TextField id="outlined-basic"  variant="outlined" />
        </form>
      )
}

/*== export functionnal component ==*/
export default Input;
