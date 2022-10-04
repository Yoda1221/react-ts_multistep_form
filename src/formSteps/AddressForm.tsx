import FormWrapper from "../container/FormWrapper"

type AddressData = {
  city: string,
  street: string,
  zip: string
}

type AddressFormProps = AddressData & {
  updateFields : (fields: Partial<AddressData>) => void
}

const AddressForm = ({city, street, zip, updateFields}: AddressFormProps) => {
  return (
    <FormWrapper title="Address">
      <div className="mb-3">
          <label htmlFor="city" className="form-label">City</label>
          <input 
              type="text" 
              id="city" 
              name="city" 
              placeholder="Budapest" 
              className="form-control" 
              required
              autoFocus
              value={ city }
              onChange={e => updateFields({ city: e.target.value})}
          />
      </div>
      <div className="mb-3">
          <label htmlFor="street" className="form-label">Street</label>
          <input 
              type="text" 
              id="street" 
              name="street" 
              className="form-control" 
              placeholder="Attila út" 
              required
              value={ street }
              onChange={e => updateFields({ street: e.target.value})}
          />
      </div>
      <div className="mb-3">
          <label htmlFor="zip" className="form-label">Zip</label>
          <input 
              type="text" 
              id="zip" 
              name="zip" 
              placeholder="1124" 
              className="form-control" 
              required
              value={ zip }
              onChange={e => updateFields({ zip: e.target.value})}
          />
      </div>
    </FormWrapper>
  )
}

export default AddressForm
