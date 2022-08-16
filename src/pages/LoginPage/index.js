import LoginForm from '../../components/LoginForm';
import PublicLayout from '../../templates/PublicLayout';
import useUser from '../../hooks/useUser';
import LoginAccess from '../../auth/LoginAccess';

function LoginPage() {
  const { login, error } = useUser();

  return (
    <LoginAccess>
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
    </LoginAccess>
  );
}

export default LoginPage;
