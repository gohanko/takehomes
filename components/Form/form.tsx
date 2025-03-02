import FormButton from "./form_button";
import FormInput from "./form_input";
import FormCheckbox from "./form_checkbox";
import FormSelect from "./form_select";
import FormHorizontal from "./form_horizontal";
import Divider from "../divider";
import FormTextField from "./form_textfield";

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
Form.TextField = FormTextField
Form.Button = FormButton
Form.Checkbox = FormCheckbox;
Form.Select = FormSelect;
Form.Horizontal = FormHorizontal
Form.Divider = Divider

export default Form