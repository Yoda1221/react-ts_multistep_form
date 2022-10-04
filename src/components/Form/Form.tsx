import { FormEvent, useState } from "react"
import AccountForm from "../../formSteps/AccountForm"
import AddressForm from "../../formSteps/AddressForm"
import UserForm from "../../formSteps/UserForm"
import { useMultitstepForm } from "../../hooks/useMultitstepForm"

type FormData = {
    firstName: string,
    lastName: string,
    age: string, //? number
    city: string,
    street: string,
    zip: string,
    email: string,
    password: string
}
const InitialData: FormData = {
    firstName: "",
    lastName: "",
    age: "",
    city: "",
    street: "",
    zip: "",
    email: "",
    password: ""
}

export function Form() {

    const [data, setData] = useState(InitialData)
    const forms = [
        <UserForm   {...data} updateFields  = { updateFields } />,
        <AddressForm {...data} updateFields = { updateFields } />,
        <AccountForm {...data} updateFields = { updateFields } />
    ]

    const { back, next, step, steps, currentStepIndex, isFirstStep, isLastStep  } = useMultitstepForm(forms)

    function updateFields(fields: Partial<FormData>) {
        setData(prev => { return { ...prev, ...fields }})
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        if (!isLastStep ) return next()
        //* console.log('DATA ', data)
        alert("SUCCESSFUL ACCOUNT CREATED")
    }

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col d-flex justify-content-end">
                        steps: {currentStepIndex + 1 } / {steps.length}
                    </div>
                </div>
                { step }
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        {!isFirstStep && 
                        <button type="button" 
                            onClick={ back }
                            className="btn btn-sm px-3 rounded-pill btn-warning"
                        >
                                Back
                        </button>}
                    </div>
                    <div className="col d-flex justify-content-center">
                        <button type="submit" 
                            className="btn btn-sm px-3 rounded-pill btn-info"
                        >
                            {isLastStep ? "Finish" : "Next"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
