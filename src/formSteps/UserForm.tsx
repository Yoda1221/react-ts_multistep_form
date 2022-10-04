import FormWrapper from "../container/FormWrapper"

type UserData = {
    firstName: string,
    lastName: string,
    age: string
}

type UserFormProps = UserData & {
    updateFields : (fields: Partial<UserData>) => void
}

const UserForm = ({firstName, lastName, age, updateFields}: UserFormProps) => {
  return (
    <FormWrapper title="User Details">
        <div className="mb-3">
            <label htmlFor="firstName" className="form-label">First name</label>
            <input 
                type="text" 
                id="firstName" 
                name="firstName" 
                placeholder="John" 
                className="form-control" 
                required
                autoFocus
                value={ firstName }
                onChange={e => updateFields({ firstName: e.target.value})}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Last name</label>
            <input 
                type="text" 
                id="lastName" 
                name="lastName" 
                placeholder="Doe" 
                className="form-control" 
                required
                value={ lastName }
                onChange={e => updateFields({ lastName: e.target.value})}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input 
                min={1}
                type="number" 
                id="age" 
                name="age" 
                placeholder="56" 
                className="form-control" 
                required
                value={ age }
                onChange={e => updateFields({ age: e.target.value})}
            />
        </div>
    </FormWrapper>
  )
}

export default UserForm
