import LoginForm from '../../components/LoginForm';
import PublicLayout from '../../templates/PublicLayout';
import useUser from '../../hooks/useUser';

function LoginPage() {
  const { login, error } = useUser();

  return (
    <PublicLayout>
      <LoginForm
        onSubmit={login}
        templateProps={{
          title: 'Iniciar sesión',
          textSubmitButton: 'Enviar',
          textError: error,
        }}
      />
    </PublicLayout>
  );
}

export default LoginPage;
