type TFormFileInputProps = {
    legend: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string,
}

export const FormFileInput = ({
    legend,
    onChange,
    label,
}: TFormFileInputProps) => (
    <fieldset className="fieldset">
        <legend className="fieldset-legend">
            { legend }
        </legend>
        
        <input
            type="file"
            className="file-input file-input-sm"
            onChange={onChange}
        />
        
        { label && (
            <label className="fieldset-label">{ label }</label>
        ) }
    </fieldset>
)
