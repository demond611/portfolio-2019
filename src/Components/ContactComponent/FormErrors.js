import React from 'react';

const style = {
  formErrors: {
    marginTop: '.5em'
	},
	required: {
		color: 'red'
	}
};

const FormErrors = ({formErrors}) => 
	<div style={style.formErrors} className='formErrors'>
		{Object.keys(formErrors).map((fieldName, i) => {
			if (formErrors[fieldName].length > 0){
				return <p key={i} style={style.required}>{formErrors[fieldName]}</p>
			} else {
				return ''
			}
		})
		}
	</div>

export default FormErrors;