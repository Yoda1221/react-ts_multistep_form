import FormWrapper from "../container/FormWrapper"

type AccountData = {
    email: string,
    password: string
  }
  
  type AccountFormProps = AccountData & {
    updateFields : (fields: Partial<AccountData>) => void
  }
const AccountForm = ({email, password, updateFields}: AccountFormProps) => {
  return (
    <FormWrapper title="Account">
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
                type="email" 
                id="email" 
                name="email" 
                className="form-control" 
                placeholder="example@mail.com" 
                autoFocus
                required
                value={ email }
                onChange={e => updateFields({ email: e.target.value})}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder="********" 
                className="form-control" 
                required
                value={ password }
                onChange={e => updateFields({ password: e.target.value})}
            />
        </div>
    </FormWrapper>
  )
}

export default AccountForm
