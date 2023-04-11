import './input.css'

const Input = ({label, ...rest} ) => (
    <>
        <div className="field">
            <label>{ label }</label>
            <input { ...rest } />
        </div>
    </>
)

export default Input