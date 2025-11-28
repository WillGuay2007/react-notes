export default function InputField({label, type, name, placeholder, handleChange}) {
    return (
    <div className="mb-3">
        <label htmlFor={label}>{label}</label>
        <input type = {type} name = {name} placeholder = {placeholder} className="rounded form-control" onChange={handleChange}></input>
    </div>
    )
}