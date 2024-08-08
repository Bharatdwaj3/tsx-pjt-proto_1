type Props = {
    title:"string"
}

const Login_Form = ({title}: Props) => {
  return (
    <>
        <div className="login">
            <h1>{title}</h1>
        </div>
    </>
  )
}

export default Login_Form