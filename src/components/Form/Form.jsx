

const Form = ({onSubmit}) =>{

    const safeSubmit = event =>{
        event.preventDefault()
        event.stopPropagation()
        const name = event.target[0].value
        const email =  event.target[1].value

        onSubmit({name,email})
    }
    return<form  onSubmit={safeSubmit} className="h-full flex flex-col items-center justify-center gap-10 -mt-20 mx-5">
        <input className="alura-input" type="text" placeholder="Insira seu nome..." required/>
        <input className="alura-input" type="email" placeholder="Insira o seu email..." required/>
        <button type='submit' className="alura-button">Seguir</button>
    </form>
}

export default Form