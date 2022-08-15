import * as Yup from 'yup';
import Form from '../Form';
import ControllerInput from '../ControllerInput';
import TextInput from '../TextInput';
import PasswordInput from '../PasswordInput';
import PropTypes from 'prop-types';
import _ from 'lodash';

function LoginForm({
  onSubmit,
  template,
  templateProps = {
    title: 'Iniciar sesion',
    textSubmitButton: 'Ingresar',
    textError: 'Ha ocurrido un error',
  },
}) {
  const schema = Yup.object({
    email: Yup.string()
      .email('El email ingresado no es válido')
      .required('No has ingresado tu email')
      .nullable('No has ingresado tu Email'),
    password: Yup.string()
      .required('No has ingresado tu contraseña')
      .nullable('No has ingresado tu contraseña'),
  });

  return (
    <Form
      schema={schema}
      defaultValues={{ password: '', email: '' }}
      onSubmit={onSubmit}
      templateProps={templateProps}
      template={template}
    >
      <ControllerInput
        render={TextInput}
        name="email"
        label="Correo Electrónico"
        placeholder="Ingrese su correo electrónico"
      />
      <ControllerInput
        render={PasswordInput}
        name="password"
        label="Contraseña"
        placeholder="Ingrese su contraseña"
      />
    </Form>
  );
}

LoginForm.propTypes = { onSubmit: PropTypes.func };

export default LoginForm;
