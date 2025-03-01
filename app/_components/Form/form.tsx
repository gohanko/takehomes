import FormButton from "./form_button";
import FormInput from "./form_input";
import FormCheckbox from "./form_checkbox";
import FormSelect from "./form_select";

interface TFormProps {
    children: React.ReactNode,
    action: (form: FormData) => void
}

const Form = ({
    children,
    action,
}: TFormProps) => (
    <form action={action} className="flex flex-col h-full">
        { children }
    </form>
)

Form.Input = FormInput;
Form.Button = FormButton
Form.Checkbox = FormCheckbox;
Form.Select = FormSelect;

export default Form