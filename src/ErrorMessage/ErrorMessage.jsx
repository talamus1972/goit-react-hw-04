import css from "./ErrorMessage.module.css"

export default function ErrorMessage({ message }) {
    
    return (
<div>
    <p className={css.error }>{message}</p>
</div>
    )
}
  
